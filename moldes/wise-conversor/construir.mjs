#!/usr/bin/env node
// Monta o CSS do molde wise-conversor a partir do CSS escopado da captura da Wise.
//
//   base.css   = o CSS da origem (escopado em .mx-wise-conversor), só com as regras cujas classes e ids
//                aparecem no HTML do molde (origem e vestido) — o resto da Wise sai;
//   origem.css = as @font-face da Wise (só a página de prova no modo origem carrega);
//   molde.css  = base.css + ponte.css + vestir.css (o que a rota publicada carrega).
//
// uso: node moldes/wise-conversor/construir.mjs [<css-escopado>]
//      (padrão: captura/escopado.css; se não houver, /tmp/finagro-clones/wise-escopado.css)
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(AQUI, '..', '..');
const req = createRequire(path.join(os.homedir(), '.jarvis/marcio-safirion/clone/node_modules/'));
const postcss = req('postcss');
const parser = req('postcss-selector-parser');

const fonte = process.argv[2]
  || [path.join(AQUI, 'captura', 'escopado.css'), '/tmp/finagro-clones/wise-escopado.css'].find((p) => fs.existsSync(p));
if (!fonte) { console.error('CSS escopado não encontrado'); process.exit(2); }

// Palavras usadas: o HTML do molde nas duas versões e o código que o escreve (superconjunto seguro).
const { desenho } = await import(pathToFileURL(path.join(AQUI, 'molde.mjs')).href);
const { origem } = await import(pathToFileURL(path.join(AQUI, 'origem.mjs')).href);
const textos = [
  desenho(origem),
  fs.readFileSync(path.join(AQUI, 'molde.mjs'), 'utf8'),
  fs.readFileSync(path.join(AQUI, 'origem.mjs'), 'utf8'),
];
const vestida = path.join(RAIZ, 'quantos-metros-tem-um-hectare.html');
if (fs.existsSync(vestida)) textos.push(fs.readFileSync(vestida, 'utf8'));
const usadas = new Set();
for (const t of textos) for (const m of t.matchAll(/-?[_a-zA-Z][\w-]*/g)) usadas.add(m[0]);

// Um seletor fica se toda classe e todo id dele (fora de :not/:where/:is/:has) aparecem no HTML.
const PSEUDO_LIVRE = new Set([':not', ':where', ':is', ':has', ':matches', ':-webkit-any', ':-moz-any']);
const serve = (sel) => {
  if (/\[dir=["']?rtl|:dir\(rtl\)/.test(sel)) return false;
  // A página é pt-BR: regra de outro idioma (:lang(ja), :lang(af)...) não se aplica nunca.
  for (const m of sel.matchAll(/:lang\(([^)]+)\)/g)) if (!/^["']?pt/i.test(m[1])) return false;
  let ok = true;
  try {
    parser((raiz) => {
      raiz.walk((n) => {
        if (!ok) return false;
        if ((n.type === 'class' || n.type === 'id')) {
          let p = n.parent;
          while (p && p.type !== 'root') { if (p.type === 'pseudo' && PSEUDO_LIVRE.has(p.value)) return; p = p.parent; }
          if (!usadas.has(n.value)) ok = false;
        }
      });
    }).processSync(sel);
  } catch { return true; }
  return ok;
};

const css = postcss.parse(fs.readFileSync(fonte, 'utf8'));
// O escopador jogou fora os seletores `html:not([dir=rtl]) X` (as utilidades de margem e recuo da esquerda
// para a direita: .m-r-1, .p-l-1...), e ficou só a variante [dir=rtl]. Recupera da folha original, no escopo.
const ESTILOS = path.join(AQUI, 'captura', 'estilos');
let recuperadas = 0;
if (fs.existsSync(ESTILOS)) {
  for (const arq of fs.readdirSync(ESTILOS).filter((n) => n.endsWith('.css')).sort()) {
    const orig = postcss.parse(fs.readFileSync(path.join(ESTILOS, arq), 'utf8'));
    orig.walkRules((r) => {
      if (r.parent?.type === 'atrule' && /keyframes$/.test(r.parent.name)) return;
      const ltr = r.selectors.filter((s) => /^html:not\(\[dir=["']?rtl["']?\]\)\s+/.test(s));
      if (!ltr.length) return;
      const nova = r.clone({ selectors: ltr.map((s) => s.replace(/^html:not\(\[dir=["']?rtl["']?\]\)\s+/, '.mx-wise-conversor ')) });
      // reconstrói a cadeia de @media/@supports em volta
      let no = nova; let p = r.parent;
      while (p && p.type === 'atrule') { const a = p.clone({ nodes: [] }); a.append(no); no = a; p = p.parent; }
      css.append(no); recuperadas++;
    });
  }
}
const fontes = [];
let antes = 0; let depois = 0;
css.walkAtRules('font-face', (r) => { fontes.push(r.toString()); r.remove(); });
css.walkRules((r) => {
  if (r.parent?.type === 'atrule' && /keyframes$/.test(r.parent.name)) return;
  antes++;
  const fica = r.selectors.filter(serve);
  if (!fica.length) r.remove();
  else { r.selectors = fica; depois++; }
});
// Bloco de @media/@container/@supports que ficou vazio sai; @keyframes sem uso também.
const animacoes = new Set();
css.walkDecls(/^animation(-name)?$/, (d) => { for (const p of d.value.split(/[\s,]+/)) animacoes.add(p); });
let mudou = true;
while (mudou) {
  mudou = false;
  css.walkAtRules((a) => {
    if (/keyframes$/.test(a.name)) { if (!animacoes.has(a.params.trim())) { a.remove(); mudou = true; } return; }
    if (['media', 'container', 'supports', 'layer'].includes(a.name) && a.nodes && !a.nodes.length) { a.remove(); mudou = true; }
  });
}

const cabeca = '/* gerado por moldes/wise-conversor/construir.mjs a partir da captura renderizada de wise.com/br/currency-converter — não editar à mão; ajuste vai em ponte.css ou vestir.css */\n';
const base = cabeca + css.toString();
fs.writeFileSync(path.join(AQUI, 'base.css'), base);
fs.writeFileSync(path.join(AQUI, 'origem.css'), cabeca + fontes.join('\n') + '\n');
const ler = (n) => (fs.existsSync(path.join(AQUI, n)) ? fs.readFileSync(path.join(AQUI, n), 'utf8') : '');
fs.writeFileSync(path.join(AQUI, 'molde.css'), base + '\n' + ler('ponte.css') + '\n' + ler('vestir.css'));
const kb = (n) => (fs.statSync(path.join(AQUI, n)).size / 1024).toFixed(1);
console.log(`recuperadas (ltr): ${recuperadas} · regras: ${antes} → ${depois} · base.css ${kb('base.css')} KB · molde.css ${kb('molde.css')} KB · @font-face ${fontes.length}`);
