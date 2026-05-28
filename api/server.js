import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

let serverHandler;

async function getHandler() {
  if (!serverHandler) {
    const mod = await import('../dist/server/server.js');
    serverHandler = mod.default;
  }
  return serverHandler;
}

export default async function handler(req, res) {
  try {
    const handler = await getHandler();
    const url = new URL(req.url, `https://${req.headers.host}`);
    const request = new Request(url.toString(), {
      method: req.method,
      headers: new Headers(req.headers),
    });
    const response = await handler.fetch(request);
    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));
    const text = await response.text();
    res.end(text);
  } catch (err) {
    console.error('Server error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error: ' + err.message);
  }
}
