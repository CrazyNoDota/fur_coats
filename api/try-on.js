const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function loadEnv() {
  const possiblePaths = [
    path.resolve(process.cwd(), '.env'),
    path.resolve(__dirname, '.env'),
    path.resolve(__dirname, '..', '.env'),
    path.resolve(__dirname, '../..', '.env'),
  ];
  for (const envPath of possiblePaths) {
    try {
      if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf-8');
        envContent.split(/\r?\n/).forEach(line => {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith('#')) return;
          const index = trimmed.indexOf('=');
          if (index !== -1) {
            const key = trimmed.substring(0, index).trim();
            let val = trimmed.substring(index + 1).trim();
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
              val = val.substring(1, val.length - 1);
            }
            if (!process.env[key]) process.env[key] = val;
          }
        });
        break;
      }
    } catch (e) {}
  }
}

if (!process.env.OPENAI_API_KEY) loadEnv();

const MAX_DATA_URL_BYTES = 8 * 1024 * 1024;
const CACHE_MAX = 64;
const cache = new Map();

function cacheGet(key) {
  if (!cache.has(key)) return null;
  const value = cache.get(key);
  cache.delete(key);
  cache.set(key, value);
  return value;
}

function cacheSet(key, value) {
  cache.set(key, value);
  if (cache.size > CACHE_MAX) cache.delete(cache.keys().next().value);
}

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
}

function parseDataUrl(dataUrl) {
  const match = /^data:(image\/(?:png|jpeg|jpg|webp));base64,([a-zA-Z0-9+/=]+)$/.exec(dataUrl || '');
  if (!match) throw new Error('Upload a PNG, JPEG, or WEBP image.');

  const buffer = Buffer.from(match[2], 'base64');
  if (buffer.byteLength > MAX_DATA_URL_BYTES) {
    throw new Error('Image is too large. Use a photo under 8MB.');
  }
  return {
    mime: match[1] === 'image/jpg' ? 'image/jpeg' : match[1],
    buffer,
  };
}

async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') return JSON.parse(req.body);
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}

async function fetchImage(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Could not load the selected coat image.');
  const contentType = response.headers.get('content-type') || 'image/jpeg';
  if (!contentType.startsWith('image/')) throw new Error('Selected product image is not an image.');
  return {
    mime: contentType.split(';')[0],
    buffer: Buffer.from(await response.arrayBuffer()),
  };
}

function buildPrompt(product) {
  const attrs = [];
  if (product.material) attrs.push(`material: ${product.material}`);
  if (product.color) attrs.push(`color: ${product.color}`);
  if (product.silhouette) attrs.push(`silhouette: ${product.silhouette}`);
  if (product.length) attrs.push(`length: ${product.length}`);
  if (product.sleeves) attrs.push(`sleeves: ${product.sleeves}`);
  if (product.collar) attrs.push(`collar: ${product.collar}`);
  if (product.fit) attrs.push(`fit: ${product.fit}`);

  const garmentLine = attrs.length
    ? `The garment is a ${product.name || 'luxury coat'} — ${attrs.join('; ')}.`
    : `The garment is a ${product.name || 'luxury coat'}.`;

  return [
    'Premium ecommerce virtual try-on for a luxury women outerwear boutique.',
    'Image 1 is the CUSTOMER PORTRAIT. Preserve identity completely: face, skin tone, hair, makeup, expression, pose, body proportions, hands, and the background must remain unchanged.',
    'Image 2 is the REFERENCE GARMENT. Use only its garment design — fabric, texture, color, cut, silhouette, length, collar, sleeves. Do not copy any model, body, or background from this image.',
    garmentLine,
    'Render the garment realistically dressed on the customer with correct shoulder placement, natural folds, realistic shadows, accurate sleeve length matching the customer\'s arms, and a believable collar/lapel placement at the neckline.',
    'Match the lighting and white balance of the customer photo so the garment looks photographed in the same scene.',
    'Strict rules: do not change the face or identity. Do not crop the head. Do not invent jewelry or accessories. Keep clothing underneath the coat visible only at the neckline or hem if it logically would be. No nudity. The output must be a single photorealistic image suitable for a luxury fitting preview.',
  ].join(' ');
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('allow', 'POST');
    return sendJson(res, 405, {error: 'Method not allowed'});
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return sendJson(res, 500, {
      code: 'AI_NOT_CONFIGURED',
      error: 'AI-примерка временно недоступна. Оставьте заявку, и стилист поможет подобрать модель.',
    });
  }

  try {
    const body = await readBody(req);
    const {
      portraitDataUrl,
      productImageUrl,
      arRefImg,
      productId,
      productName,
      material,
      color,
      silhouette,
      length,
      sleeves,
      collar,
      fit,
    } = body;

    const portrait = parseDataUrl(portraitDataUrl);
    const referenceUrl = arRefImg || productImageUrl;
    if (!referenceUrl) throw new Error('Missing product reference image.');

    const cacheKey = crypto
      .createHash('sha256')
      .update(portrait.buffer)
      .update('|')
      .update(productId || referenceUrl)
      .digest('hex');

    const cached = cacheGet(cacheKey);
    if (cached) {
      return sendJson(res, 200, {imageDataUrl: cached, cached: true});
    }

    const product = await fetchImage(referenceUrl);
    const prompt = buildPrompt({
      name: productName,
      material,
      color,
      silhouette,
      length,
      sleeves,
      collar,
      fit,
    });

    const form = new FormData();
    form.append('model', process.env.OPENAI_IMAGE_MODEL || 'gpt-image-1');
    form.append('image[]', new Blob([portrait.buffer], {type: portrait.mime}), 'customer-portrait.jpg');
    form.append('image[]', new Blob([product.buffer], {type: product.mime}), 'reference-coat.jpg');
    form.append('size', '1024x1536');
    form.append('quality', 'medium');
    form.append('output_format', 'jpeg');
    form.append('prompt', prompt);

    const response = await fetch('https://api.openai.com/v1/images/edits', {
      method: 'POST',
      headers: {authorization: `Bearer ${apiKey}`},
      body: form,
    });

    const data = await response.json();
    if (!response.ok) {
      return sendJson(res, response.status, {
        error: data.error?.message || 'OpenAI image edit failed.',
      });
    }

    const b64 = data.data?.[0]?.b64_json;
    if (!b64) return sendJson(res, 502, {error: 'OpenAI did not return an image.'});

    const imageDataUrl = `data:image/jpeg;base64,${b64}`;
    cacheSet(cacheKey, imageDataUrl);

    return sendJson(res, 200, {imageDataUrl, usage: data.usage || null});
  } catch (error) {
    return sendJson(res, 400, {error: error.message || 'Could not create AI try-on.'});
  }
};
