// Servidor local que imita a Vercel com "cleanUrls": /pagina serve pagina.html, /pagina.html vira 308 para /pagina,
// e o que não existe responde 404 com o 404.html.   node scripts/servir.mjs [porta]
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const RAIZ = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const PORTA = +(process.argv[2] || 4795);
const TIPOS = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8', '.webp': 'image/webp', '.png': 'image/png', '.ico': 'image/x-icon', '.svg': 'image/svg+xml', '.mp4': 'video/mp4', '.woff2': 'font/woff2' };
http.createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  if (url.endsWith('.html')) { res.writeHead(308, { location: url.replace(/(index)?\.html$/, '') || '/' }); return res.end(); }
  const candidatos = url.endsWith('/') ? [url + 'index.html'] : [url, url + '.html'];
  for (const c of candidatos) {
    const f = path.join(RAIZ, c);
    if (f.startsWith(RAIZ) && fs.existsSync(f) && fs.statSync(f).isFile()) {
      const tipo = TIPOS[path.extname(f)] || 'application/octet-stream';
      const st = fs.statSync(f);
      if (tipo === 'video/mp4' && req.headers.range) {
        const [a, b] = req.headers.range.replace('bytes=', '').split('-'); const ini = +a, fim = b ? +b : st.size - 1;
        res.writeHead(206, { 'content-type': tipo, 'content-range': `bytes ${ini}-${fim}/${st.size}`, 'accept-ranges': 'bytes', 'content-length': fim - ini + 1 });
        return fs.createReadStream(f, { start: ini, end: fim }).pipe(res);
      }
      res.writeHead(200, { 'content-type': tipo, 'content-length': st.size, 'accept-ranges': 'bytes' });
      return fs.createReadStream(f).pipe(res);
    }
  }
  res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
  fs.createReadStream(path.join(RAIZ, '404.html')).on('error', () => res.end('404')).pipe(res);
}).listen(PORTA, () => console.log(`http://localhost:${PORTA}`));
