// varrer.mjs <base> [larguras] [slug...] — passa por várias páginas numa aba só do Chrome sem janela (porta 9444) e acusa:
// rolagem lateral, conteúdo cortado por overflow escondido, erro de JavaScript, calculadora sem número, número cortado,
// alvo de toque baixo e imagem quebrada. Sem slug, varre todas as páginas do sitemap.xml da pasta. Sai 1 quando acha.
//   node scripts/varrer.mjs http://localhost:4795
//   node scripts/varrer.mjs https://finagro.app 320,360,390 calculadora-de-arroba pronaf
import { readFileSync } from 'node:fs';
const [, , base, largurasArg, ...slugsArg] = process.argv;
if (!base) { console.error('uso: node scripts/varrer.mjs <base> [larguras] [slug...]'); process.exit(2); }
const larguras = largurasArg || '320,360,390,768,1024,1440';
const slugs = slugsArg.length ? slugsArg : [...readFileSync(new URL('../sitemap.xml', import.meta.url), 'utf8').matchAll(/<loc>https?:\/\/[^/]+\/([^<]*)<\/loc>/g)].map((m) => m[1]);
const v = await (await fetch('http://127.0.0.1:9444/json/version')).json();
const ws = new WebSocket(v.webSocketDebuggerUrl);
await new Promise((ok) => (ws.onopen = ok));
let n = 0; const pend = new Map(); let erros = [];
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && pend.has(d.id)) { pend.get(d.id)(d.result || d.error); pend.delete(d.id); } else if (d.method === 'Runtime.exceptionThrown') erros.push(d.params.exceptionDetails?.exception?.description?.split('\n')[0] || 'erro'); };
const cmd = (method, params = {}, sessionId) => new Promise((ok) => { const id = ++n; pend.set(id, ok); ws.send(JSON.stringify({ id, method, params, sessionId })); });
const { browserContextId } = await cmd('Target.createBrowserContext');
const { targetId } = await cmd('Target.createTarget', { url: 'about:blank', browserContextId });
const { sessionId } = await cmd('Target.attachToTarget', { targetId, flatten: true });
await cmd('Page.enable', {}, sessionId); await cmd('Runtime.enable', {}, sessionId);
const MEDE = `(() => {
  const d = document.documentElement, r = { alt: d.scrollHeight, sobra: d.scrollWidth - d.clientWidth };
  r.calc = [...document.querySelectorAll('[data-saida]')].map((b) => b.textContent.trim());
  r.cortado = [...document.querySelectorAll('[data-saida]')].filter((b) => b.scrollWidth > b.clientWidth + 1).length;
  r.img = [...document.images].filter((i) => i.complete && i.naturalWidth === 0 && i.loading !== 'lazy').length;
  r.toque = [...document.querySelectorAll('main a, main button, main summary, main select, main input')].filter((e) => { const q = e.getBoundingClientRect(); return q.width > 0 && q.height > 0 && q.height < 40 && !e.closest('p, li:not(.fontes__lista li), td, dd, .destaque-artigo'); }).map((e) => (e.textContent || e.id).trim().slice(0, 24) + ':' + Math.round(e.getBoundingClientRect().height));
  r.escondido = [...document.querySelectorAll('body *')].filter((e) => e.clientWidth > 1 && e.scrollWidth > e.clientWidth + 1 && getComputedStyle(e).overflowX !== 'visible').map((e) => e.tagName.toLowerCase() + '.' + String(e.className).split(' ').slice(0, 2).join('.') + ' corta ' + (e.scrollWidth - e.clientWidth) + 'px');
  r.h1 = document.querySelectorAll('h1').length;
  return JSON.stringify(r);
})()`;
let ruim = 0;
for (const L of larguras.split(',').map(Number)) {
  await cmd('Emulation.setDeviceMetricsOverride', { width: L, height: L < 600 ? 800 : 900, deviceScaleFactor: 1, mobile: L < 600 }, sessionId);
  for (const s of slugs) {
    erros = [];
    await cmd('Page.navigate', { url: `${base}/${s}` }, sessionId);
    await new Promise((r) => setTimeout(r, 1100));
    const r = JSON.parse((await cmd('Runtime.evaluate', { expression: MEDE, returnByValue: true }, sessionId)).result.value);
    const p = [];
    if (r.sobra > 0) p.push(`rolagem lateral de ${r.sobra}px`);
    if (erros.length) p.push('erro JS: ' + erros[0]);
    if (r.calc.some((t) => t === '–' || t === '')) p.push('calculadora sem número: ' + r.calc.join(' | '));
    if (r.escondido.length) p.push('conteúdo cortado: ' + r.escondido.slice(0, 3).join(', '));
    if (r.cortado) p.push(`${r.cortado} número(s) cortado(s)`);
    if (r.img) p.push(`${r.img} imagem(ns) quebrada(s)`);
    if (r.toque.length) p.push('toque baixo: ' + r.toque.slice(0, 4).join(', '));
    if (r.h1 !== 1) p.push(`${r.h1} h1`);
    if (p.length) { ruim++; console.log(`✗ ${L}px /${s}: ${p.join('; ')}`); }
    else console.log(`✓ ${L}px /${s} · ${(r.alt / (L < 600 ? 800 : 900)).toFixed(1)} telas${r.calc.length ? ' · ' + r.calc.join(' | ') : ''}`);
  }
}
await cmd('Target.closeTarget', { targetId }); await cmd('Target.disposeBrowserContext', { browserContextId }); ws.close();
console.log(ruim ? `${ruim} página(s) com problema` : 'TUDO CERTO'); process.exit(ruim ? 1 : 0);
