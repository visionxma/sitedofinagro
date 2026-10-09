// visitante-que-volta.mjs <pasta-da-versão-antiga> <pasta-da-versão-nova> — prova, num navegador de verdade, o que vê quem
// JÁ visitou o site: abre a versão antiga, troca o servidor para a nova no MESMO endereço e abre de novo, sem limpar nada.
// O servidor de ensaio manda os mesmos tempos de guarda do vercel.json (30 dias para telas, vídeos, marca, og e fontes).
// Diz de que cor está o logo e qual vídeo do app o navegador mostra na segunda visita. Chrome sem janela (porta 9444).
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const [, , ANTIGA, NOVA] = process.argv;
const TIPOS = { html: 'text/html; charset=utf-8', css: 'text/css', js: 'text/javascript', mjs: 'text/javascript', avif: 'image/avif', webp: 'image/webp', png: 'image/png', jpg: 'image/jpeg', svg: 'image/svg+xml', mp4: 'video/mp4', woff2: 'font/woff2', ico: 'image/x-icon', json: 'application/json', webmanifest: 'application/manifest+json', txt: 'text/plain; charset=utf-8', xml: 'application/xml' };
let raiz = path.resolve(ANTIGA);
const srv = http.createServer((req, res) => {
  const u = new URL(req.url, 'http://x'); let p = decodeURIComponent(u.pathname); if (p === '/') p = '/index.html';
  let f = path.join(raiz, p); if (!fs.existsSync(f) && fs.existsSync(f + '.html')) f += '.html';
  if (!f.startsWith(raiz) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end('nao existe'); }
  const longo = /^\/assets\/(telas|videos|marca|og|fontes)\//.test(p);
  res.writeHead(200, { 'Content-Type': TIPOS[f.split('.').pop()] || 'application/octet-stream', 'Cache-Control': longo ? 'public, max-age=2592000, stale-while-revalidate=86400' : 'public, max-age=0, must-revalidate' });
  fs.createReadStream(f).pipe(res);
});
await new Promise((ok) => srv.listen(4797, '127.0.0.1', ok));
const v = await (await fetch('http://127.0.0.1:9444/json/version')).json();
const ws = new WebSocket(v.webSocketDebuggerUrl); await new Promise((ok) => (ws.onopen = ok));
let n = 0; const pend = new Map();
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d.result || d.error); pend.delete(d.id); } };
const cmd = (method, params = {}, sessionId) => new Promise((ok) => { const id = ++n; pend.set(id, ok); ws.send(JSON.stringify({ id, method, params, sessionId })); });
const { browserContextId } = await cmd('Target.createBrowserContext');
const { targetId } = await cmd('Target.createTarget', { url: 'about:blank', browserContextId });
const { sessionId } = await cmd('Target.attachToTarget', { targetId, flatten: true });
await cmd('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false }, sessionId);
await cmd('Page.enable', {}, sessionId);
const MEDE = `(async () => {
  const hex = (d) => '#' + [d[0], d[1], d[2]].map((x) => x.toString(16).padStart(2, '0')).join('');
  const img = document.querySelector('.topo__logo'); await img.decode().catch(() => {});
  const c = document.createElement('canvas'); c.width = img.naturalWidth; c.height = img.naturalHeight; const x = c.getContext('2d'); x.drawImage(img, 0, 0);
  const esq = hex(x.getImageData(Math.round(c.width * .05), Math.round(c.height * .5), 1, 1).data), dir = hex(x.getImageData(Math.round(c.width * .95), Math.round(c.height * .5), 1, 1).data);
  const fonte = [...document.querySelectorAll('video source')].map((s) => s.getAttribute('src') || s.dataset.src || '').find((s) => /app-celular\\.h264/.test(s)) || '';
  let video = 0; if (fonte) video = (await (await fetch(fonte)).arrayBuffer()).byteLength;
  return JSON.stringify({ logo: img.currentSrc.replace(location.origin, ''), esquerda: esq, direita: dir, video: fonte, bytesDoVideo: video });
})()`;
const visita = async () => { await cmd('Page.navigate', { url: 'http://127.0.0.1:4797/' }, sessionId); await new Promise((r) => setTimeout(r, 3500)); return JSON.parse((await cmd('Runtime.evaluate', { expression: MEDE, returnByValue: true, awaitPromise: true }, sessionId)).result.value); };
const a = await visita();
raiz = path.resolve(NOVA);
const b = await visita();
const noServidor = fs.statSync(path.join(raiz, 'assets/videos/app-celular.h264.mp4')).size;
console.log('1ª visita (versão antiga):', JSON.stringify(a));
console.log('2ª visita (versão nova)  :', JSON.stringify(b));
const logoNovo = b.esquerda !== a.esquerda || b.direita !== a.direita, videoNovo = b.bytesDoVideo === noServidor;
console.log(`quem volta vê o logo ${logoNovo ? 'NOVO' : 'ANTIGO'} e o vídeo do app ${videoNovo ? 'NOVO' : 'ANTIGO'} (no servidor: ${noServidor} bytes)`);
await cmd('Target.closeTarget', { targetId }); await cmd('Target.disposeBrowserContext', { browserContextId }); ws.close(); srv.close();
process.exit(logoNovo && videoNovo ? 0 : 1);
