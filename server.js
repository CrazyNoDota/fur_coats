const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Require the handlers
const rootTryOn = require('./api/try-on.js');
const subTryOn = require('./stitch_design/home_page_updated_imagery/api/try-on.js');

const PORT = 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.jsx': 'text/plain; charset=utf-8', // Serves JSX as plain text so browser Babel can fetch and compile it
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  // Route API requests
  if (req.method === 'POST') {
    if (pathname === '/api/try-on') {
      try {
        await rootTryOn(req, res);
      } catch (err) {
        res.statusCode = 500;
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify({ error: err.message }));
      }
      return;
    }
    if (pathname === '/stitch_design/home_page_updated_imagery/api/try-on') {
      try {
        await subTryOn(req, res);
      } catch (err) {
        res.statusCode = 500;
        res.setHeader('content-type', 'application/json');
        res.end(JSON.stringify({ error: err.message }));
      }
      return;
    }
  }

  // Treat directory paths by appending index.html
  if (pathname.endsWith('/')) {
    pathname += 'index.html';
  }

  // Resolve absolute file path
  let filePath = path.join(__dirname, pathname);

  // Safety check to prevent directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }

  // Check if file exists
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback: if they request a path in home_page_updated_imagery without trailing slash
      if (pathname === '/stitch_design/home_page_updated_imagery') {
        res.writeHead(301, { Location: '/stitch_design/home_page_updated_imagery/' });
        res.end();
        return;
      }
      res.statusCode = 404;
      res.end('Not Found');
      return;
    }

    // Serve the file
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    
    const stream = fs.createReadStream(filePath);
    stream.on('error', (streamErr) => {
      if (!res.headersSent) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    });
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\x1b[32m%s\x1b[0m`, `✨ Solvea Atelier Dev Server is running at http://localhost:${PORT} ✨`);
  console.log(`- Serving root catalog: http://localhost:${PORT}/`);
  console.log(`- Serving updated imagery redesign: http://localhost:${PORT}/stitch_design/home_page_updated_imagery/`);
  console.log(`- AI Try-on endpoints mapped and configured.`);
  console.log(`Press Ctrl+C to stop.`);
});
