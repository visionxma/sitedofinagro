#!/usr/bin/env node
// Prova do molde wise-conversor (02/11/2026).
//
// 1. Monta o molde no modo ORIGEM (textos e mídia da Wise, origem.mjs; CSS base + ponte + fontes da Wise) e
//    fotografa em 1440 e 390; recorta da captura renderizada (captura/ref-<L>.png) o trecho das mesmas seções
//    (do topo da seção 0 ao pé da seção 7: o cabeçalho e o rodapé da Wise não entram, os do site são do chassi)
//    e compara com `comparar-com-referencia.mjs --json`, inteiro e seção por seção.
// 2. Com --url <base>, fotografa a rota VESTIDA (clone-<L>.png) no servidor dado.
// 3. Grava prova.json {referencia, molde, quando, larguras, secoes, omitidas, passou} e ref-<L>.png na pasta.
//
// uso: node moldes/wise-conversor/provar.mjs [--url http://127.0.0.1:4795] [--limiar 0.12] [--larguras 1440,390]
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const opc = (n, d) => (args.includes(n) ? args[args.indexOf(n) + 1] : d);
const URL_BASE = opc('--url', null)?.replace(/\/$/, '');
const LIMIAR = opc('--limiar', '0.12');
const LARGURAS = opc('--larguras', '1440,390').split(',').map(Number);
const ROTA = '/quantos-metros-tem-um-hectare';
const FFMPEG = path.join(os.homedir(), '.local/bin/ffmpeg');
const COMPARAR = path.join(os.homedir(), '.jarvis/design-engine/ferramentas/comparar-com-referencia.mjs');
const CAP = path.join(AQUI, 'captura');
// Onde o Chart.js deixou o <canvas> do gráfico na captura (medido em captura/ref-<L>.png: topo = texto do "1 USD"
// + a mesma distância do molde; pé = topo dos chips − 24 px, a folga da Wise). Em 1440 bate com o estilo inline (350 px).
const GRAFICO_REF = { 1440: { y: 3272, h: 350 }, 390: { y: 4264, h: 205 } };
const PROVA = path.join(AQUI, 'prova');
fs.mkdirSync(path.join(PROVA, 'secoes'), { recursive: true });

const { desenho, meta } = await import(pathToFileURL(path.join(AQUI, 'molde.mjs')).href);
const { origem } = await import(pathToFileURL(path.join(AQUI, 'origem.mjs')).href);
const arqOrigem = path.join(PROVA, 'origem.html');
fs.writeFileSync(arqOrigem, `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="stylesheet" href="../base.css"><link rel="stylesheet" href="../ponte.css"><link rel="stylesheet" href="../origem.css">
<style>html,body{margin:0;background:#fff}</style></head><body><main class="mx-wise-conversor" data-molde="wise-conversor">${desenho(origem)}</main></body></html>`);

const recortar = (src, y, h, w, saida, x = 0) => {
  const r = spawnSync(FFMPEG, ['-y', '-loglevel', 'error', '-i', src, '-vf', `crop=${w}:${h}:${x}:${y}`, '-frames:v', '1', saida]);
  if (r.status !== 0) throw new Error(`ffmpeg: ${String(r.stderr).slice(0, 200)}`);
};
const lado = (a, ha, b, hb, saida) => { const H = Math.max(ha, hb); spawnSync(FFMPEG, ['-y', '-loglevel', 'error', '-i', a, '-i', b, '-filter_complex',
  `[0]pad=iw:${H}:0:0:color=white[a];[1]pad=iw:${H}:0:0:color=white[b];[a][b]hstack=inputs=2`, '-frames:v', '1', saida]); };
const comparar = (ref, clo, mapa) => {
  const r = spawnSync(process.execPath, [COMPARAR, ref, clo, '--json', '--limiar', LIMIAR, ...(mapa ? ['--mapa', mapa] : [])], { maxBuffer: 64 << 20 });
  try { return JSON.parse(String(r.stdout)); } catch { return { passou: false, motivos: ['comparar não respondeu: ' + String(r.stderr).slice(0, 200)] }; }
};

const relatorio = { referencia: meta.referencia, molde: meta.id, quando: new Date().toISOString(), larguras: {}, secoes: {}, omitidas: [{ secao: 3, motivo: 'seção vazia na captura da Wise (sem conteúdo nem altura)' }], passou: false };
const falhas = [];
const { comNavegador, novoContexto, prepararPagina, fotoInteira } = await import(path.join(os.homedir(), '.jarvis/marcio-safirion/clone/bin/pagina.mjs'));

await comNavegador('provar wise-conversor', async (nav) => {
  for (const L of LARGURAS) {
    const geo = JSON.parse(fs.readFileSync(path.join(CAP, `secoes-${L}.json`), 'utf8')).filter((s) => meta.secoes.includes(s.idx));
    const ctx = await novoContexto(nav, L);
    const p = await ctx.newPage();
    await p.route(/\.(woff2?|ttf|otf)(\?|#|$)/i, async (route) => {
      try { const resp = await route.fetch(); await route.fulfill({ response: resp, headers: { ...resp.headers(), 'access-control-allow-origin': '*' } }); }
      catch { await route.continue().catch(() => {}); }
    });
    try {
      await prepararPagina(p, pathToFileURL(arqOrigem).href);
      // O <canvas> do gráfico da Wise é desenhado pelo Chart.js (script que o molde não carrega): na prova entra o
      // recorte RENDERIZADO dele, tirado da captura na posição e na altura em que o Chart.js o deixou.
      const g = GRAFICO_REF[L];
      if (g) {
        const cv = await p.evaluate(() => { const r = document.querySelector('.tw-rate-graph canvas').getBoundingClientRect(); return { x: Math.round(r.x), w: Math.round(r.width) }; });
        const arqG = path.join(PROVA, `grafico-${L}.png`);
        recortar(path.join(CAP, `ref-${L}.png`), g.y, g.h, cv.w, arqG, cv.x);
        await p.evaluate(({ src, h }) => new Promise((ok) => {
          const cv = document.querySelector('.tw-rate-graph canvas'); const im = new Image();
          im.onload = ok; im.onerror = ok; im.alt = ''; im.src = src;
          im.style.cssText = `display:block;width:100%;height:${h}px`; cv.replaceWith(im);
        }), { src: pathToFileURL(arqG).href, h: g.h });
      }
      const med = await p.evaluate(() => ({
        secoes: [...document.querySelectorAll('[data-mx-secao]')].map((e) => { const r = e.getBoundingClientRect(); return { idx: +e.dataset.mxSecao, y: Math.round(r.top + scrollY), altura: Math.round(r.height) }; }),
        lateral: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      }));
      const fotoOrigem = path.join(PROVA, `origem-${L}.png`);
      const fo = await fotoInteira(p, fotoOrigem);
      // ref inteira (as seções do molde, contíguas) × molde em modo origem inteiro
      const y0 = geo[0].y; const y1 = geo.at(-1).y + geo.at(-1).altura;
      const refRec = path.join(PROVA, `ref-recorte-${L}.png`);
      recortar(path.join(CAP, `ref-${L}.png`), y0, y1 - y0, L, refRec);
      const fim = Math.min(fo.altura, Math.max(...med.secoes.map((s) => s.y + s.altura)));
      const oriRec = path.join(PROVA, `origem-recorte-${L}.png`);
      recortar(fotoOrigem, 0, fim, L, oriRec);
      const inteiro = comparar(refRec, oriRec, path.join(PROVA, `mapa-${L}.png`));
      relatorio.larguras[L] = inteiro;
      lado(refRec, y1 - y0, oriRec, fim, path.join(PROVA, `lado-${L}.png`));
      if (!inteiro.passou) falhas.push(`${L}px página: ${(inteiro.motivos || []).join('; ')}`);
      if (med.lateral > 0) falhas.push(`${L}px: ${med.lateral}px de rolagem lateral`);
      // seção por seção (diagnóstico; o veredito é o inteiro)
      relatorio.secoes[L] = [];
      for (const rs of geo) {
        const nc = med.secoes.find((s) => s.idx === rs.idx);
        if (!nc) { falhas.push(`${L}px seção ${rs.idx} sem clone`); continue; }
        const base = path.join(PROVA, 'secoes', `${L}-${rs.idx}`);
        recortar(path.join(CAP, `ref-${L}.png`), rs.y, rs.altura, L, base + '-ref.png');
        const hc = Math.min(nc.altura, fo.altura - nc.y);
        recortar(fotoOrigem, nc.y, hc, L, base + '-clone.png');
        const c = comparar(base + '-ref.png', base + '-clone.png');
        lado(base + '-ref.png', rs.altura, base + '-clone.png', hc, base + '-lado.png');
        relatorio.secoes[L].push({ idx: rs.idx, ref: rs.altura, clone: nc.altura, total: c.total, passou: !!c.passou, motivos: c.motivos || [] });
      }
      console.log(`${L}px: página ${inteiro.passou ? 'PASSOU' : 'REPROVOU'} total=${inteiro.total} · ${relatorio.secoes[L].map((s) => `${s.idx}:${s.total == null ? '-' : (s.total * 100).toFixed(1)}%${s.passou ? '' : '✗'}(${s.ref}/${s.clone})`).join(' ')}`);
      if (!inteiro.passou) console.log('   motivos: ' + (inteiro.motivos || []).join('; '));
    } finally { await ctx.close().catch(() => {}); }
    // A referência na pasta do molde, na largura exata (a captura de 390 saiu com 406 px por estouro da própria Wise).
    recortar(path.join(CAP, `ref-${L}.png`), 0, JSON.parse(fs.readFileSync(path.join(CAP, `secoes-${L}.json`), 'utf8')).at(-1).y + JSON.parse(fs.readFileSync(path.join(CAP, `secoes-${L}.json`), 'utf8')).at(-1).altura, L, path.join(AQUI, `ref-${L}.png`));
    if (URL_BASE) {
      const c2 = await novoContexto(nav, L);
      const p2 = await c2.newPage();
      try {
        await prepararPagina(p2, URL_BASE + ROTA);
        const f = await fotoInteira(p2, path.join(AQUI, `clone-${L}.png`));
        console.log(`${L}px: vestido ${f.altura}px → clone-${L}.png`);
      } finally { await c2.close().catch(() => {}); }
    }
  }
});
relatorio.passou = falhas.length === 0;
relatorio.falhas = falhas;
fs.writeFileSync(path.join(AQUI, 'prova.json'), JSON.stringify(relatorio, null, 2));
console.log(relatorio.passou ? 'PASSOU' : `REPROVOU: ${falhas.join(' | ')}`);
process.exit(relatorio.passou ? 0 : 1);
