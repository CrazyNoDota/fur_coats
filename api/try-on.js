const fs = require('fs');
const path = require('path');

function loadEnv() {
  const possiblePaths = [
    path.resolve(process.cwd(), '.env'),
    path.resolve(__dirname, '.env'),
    path.resolve(__dirname, '..', '.env'),
    path.resolve(__dirname, '../..', '.env')
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

if (!process.env.OPENAI_API_KEY) {
  loadEnv();
}

const MAX_DATA_URL_BYTES = 8 * 1024 * 1024;

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(payload));
}

function parseDataUrl(dataUrl) {
  const match = /^data:(image\/(?:png|jpeg|jpg|webp));base64,([a-zA-Z0-9+/=]+)$/.exec(dataUrl || '');
  if (!match) {
    throw new Error('Upload a PNG, JPEG, or WEBP image.');
  }

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
  if (!response.ok) {
    throw new Error('Could not load the selected coat image.');
  }

  const contentType = response.headers.get('content-type') || 'image/jpeg';
  if (!contentType.startsWith('image/')) {
    throw new Error('Selected product image is not an image.');
  }

  return {
    mime: contentType.split(';')[0],
    buffer: Buffer.from(await response.arrayBuffer()),
  };
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
    const {portraitDataUrl, productImageUrl, productName, material} = await readBody(req);
    const portrait = parseDataUrl(portraitDataUrl);
    const product = await fetchImage(productImageUrl);

    const form = new FormData();
    form.append('model', process.env.OPENAI_IMAGE_MODEL || 'gpt-image-1');
    form.append('image[]', new Blob([portrait.buffer], {type: portrait.mime}), 'customer-photo.jpg');
    form.append('image[]', new Blob([product.buffer], {type: product.mime}), 'selected-coat.jpg');
    form.append('size', '1024x1536');
    form.append('quality', 'medium');
    form.append('output_format', 'jpeg');
    form.append('prompt', [
      'Create a realistic virtual try-on image for a luxury women outerwear boutique.',
      `Use the first image as the customer portrait and preserve the customer identity, face, pose, skin tone, body proportions, and background as much as possible.`,
      `Use the second image as the reference garment: ${productName || 'selected coat'}${material ? `, material: ${material}` : ''}.`,
      'Place the garment naturally on the customer with believable fit, folds, shadows, sleeve alignment, and collar placement.',
      'Do not change the face. Do not create nudity. Keep the result premium, realistic, and suitable for an ecommerce fitting preview.',
    ].join(' '));

    const response = await fetch('https://api.openai.com/v1/images/edits', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${apiKey}`,
      },
      body: form,
    });

    const data = await response.json();
    if (!response.ok) {
      return sendJson(res, response.status, {
        error: data.error?.message || 'OpenAI image edit failed.',
      });
    }

    const b64 = data.data?.[0]?.b64_json;
    if (!b64) {
      return sendJson(res, 502, {error: 'OpenAI did not return an image.'});
    }

    return sendJson(res, 200, {
      imageDataUrl: `data:image/jpeg;base64,${b64}`,
      usage: data.usage || null,
    });
  } catch (error) {
    return sendJson(res, 400, {error: error.message || 'Could not create AI try-on.'});
  }
};
