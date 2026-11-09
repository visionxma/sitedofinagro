// Portão do topo da LP (09/11/2026): mede a barra em 16 larguras, nos dois estados (estendida sobre a hero e cápsula
// depois de rolar), e sai 1 se algum item (logo, links, Entrar, App Store, Google Play, menu) passa por cima de outro,
// sai da tela ou cria rolagem lateral. Nasceu do print do Victor com "Entrar" escrito por cima de "Dúvidas".
// uso: node scripts/portao-topo.mjs <url-base> [caminho]   (ex.: http://127.0.0.1:4791 /index.html, ou https://finagro.app /gta)
import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_CORE || 'playwright-core');
const [base, caminho = '/', ...resto] = process.argv.slice(2);
const pastaFoto = (resto.join(' ').match(/--foto\s+(\S+)/) || [])[1];
const LARGURAS = [360, 390, 414, 640, 768, 900, 992, 1024, 1100, 1180, 1280, 1366, 1440, 1536, 1680, 1920];
const nav = await chromium.launch({ ...(process.env.CHROME_PORTAO ? { executablePath: process.env.CHROME_PORTAO } : {}) });
let falhas = 0;
try {
  for (const w of LARGURAS) {
    const pag = await nav.newPage({ viewport: { width: w, height: 900 } });
    await pag.goto(base + caminho + (base.startsWith('https') ? '?v=' + Date.now() : ''), { waitUntil: 'domcontentloaded', timeout: 45000 }); await pag.waitForTimeout(1200);
    await pag.evaluate(() => document.fonts.ready);
    for (const estado of ['topo', 'rolado']) {
      if (estado === 'rolado') { await pag.mouse.wheel(0, 700); await pag.waitForTimeout(900); }
      const r = await pag.evaluate(() => {
        const sel = ['.topo__marca', '.topo__nav a', '.topo__entrar', '.topo__iphone', '.topo__baixar', '.topo__menu'];
        const itens = [];
        for (const q of sel) for (const e of document.querySelectorAll(q)) {
          const cs = getComputedStyle(e); if (cs.display === 'none' || cs.visibility === 'hidden') continue;
          const b = e.getBoundingClientRect(); if (b.width < 2 || b.height < 2) continue;
          itens.push({ nome: (e.textContent || q).trim().replace(/\s+/g, ' ').slice(0, 22) || q, x: b.left, d: b.right, y: b.top, b: b.bottom });
        }
        const choques = [];
        for (let i = 0; i < itens.length; i++) for (let j = i + 1; j < itens.length; j++) {
          const a = itens[i], c = itens[j];
          const sobre = Math.min(a.d, c.d) - Math.max(a.x, c.x); const vert = Math.min(a.b, c.b) - Math.max(a.y, c.y);
          if (sobre > 0 && vert > 0) choques.push(`${a.nome} × ${c.nome} (${Math.round(sobre)}px)`);
        }
        const fora = itens.filter((i) => i.x < 0 || i.d > innerWidth).map((i) => i.nome);
        return { choques, fora, rolagem: document.documentElement.scrollWidth > innerWidth };
      });
      const ruim = r.choques.length || r.fora.length || r.rolagem;
      if (ruim) falhas++;
      console.log(`${ruim ? 'XX' : 'ok'} ${w}px ${estado}: ${ruim ? [...r.choques, ...r.fora.map((f) => 'fora: ' + f), r.rolagem ? 'rolagem lateral' : ''].filter(Boolean).join(' · ') : 'nada encosta'}`);
      if (pastaFoto && [992, 1100, 1280, 1440].includes(w)) {
        fs.mkdirSync(pastaFoto, { recursive: true });
        await pag.screenshot({ path: `${pastaFoto}/topo-${w}-${estado}.png`, clip: { x: 0, y: 0, width: w, height: 110 } });
      }
    }
    await pag.close();
  }
} finally { await nav.close(); }
console.log(falhas ? `${falhas} medida(s) com problema` : 'topo sem choque em todas as larguras');
process.exit(falhas ? 1 : 0);
