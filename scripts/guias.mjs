// Guias do FINAGRO: um arquivo por guia em conteudo/guias/<slug>.mjs vira a página <slug>.html, com o mesmo
// desenho das páginas de conteúdo escritas à mão (assets/artigo.css). Chamado por scripts/gerar.mjs, que depois
// preenche cabeça, topo, rodapé e JSON-LD nos blocos <!--gerado:X-->. Formato do arquivo: conteudo/guias/LEIA.md.
// Portão que roda antes de publicar: node scripts/conferir-guia.mjs --todos
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const RAIZ = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const PASTA = path.join(RAIZ, 'conteudo', 'guias');
const ARQUIVOS = path.join(RAIZ, 'arquivos');
const APP = 'https://app.finagro.app/';
const PLAY = 'https://play.google.com/store/apps/details?id=com.raykkony.fblogin';

export const GRUPOS = {
  escolha: ['Escolher um aplicativo', 'Comparações com fonte e o que conferir antes de contratar.'],
  corte: ['Gado de corte', 'Peso, arroba, lotação, reprodução e trânsito do rebanho.'],
  leite: ['Leite', 'Controle leiteiro, qualidade e custo do litro.'],
  lavoura: ['Lavoura', 'Caderno de campo, custo por hectare e contas do plantio.'],
  dinheiro: ['Dinheiro e imposto', 'Caixa, crédito rural, nota e o que a Receita pede.'],
  terra: ['Terra e documentos', 'Medidas agrárias, cadastros e contratos do imóvel rural.'],
  criacoes: ['Outras criações', 'Aves, suínos, peixes e abelhas.'],
};
export const TIPOS = { guia: 'Guia', calculadora: 'Calculadora', modelo: 'Modelo pronto', planilha: 'Planilha', comparativo: 'Comparativo' };
// Telas reais do app (montagem de demonstração) que podem ir no celular do topo, com o texto alternativo conferido.
export const TELAS = {
  inicio: 'Tela inicial do FINAGRO: atalhos de Propriedades, Animais, Lotes, Despesas, Receitas, Contas, Mão de obra, Áreas e GPS e FINAGRO AI',
  animais: 'Lista de animais do FINAGRO com brinco, raça e peso',
  lotes: 'Lotes do FINAGRO com cabeças e peso bruto de cada lote',
  fluxo: 'Fluxo de caixa do FINAGRO com o saldo previsto, entradas e saídas',
  contas: 'Contas a pagar e a receber da fazenda no FINAGRO',
  relatorios: 'Relatórios do FINAGRO em PDF e planilha: receitas e despesas, despesas por categoria e resultado por fazenda',
  tarefas: 'Tarefas sugeridas pela fazenda no FINAGRO, com o alerta da vacina de brucelose que trava a GTA',
  producao: 'Tela Minha produção do FINAGRO, onde você conta o que cria e planta',
  cotacoes: 'Cotações do FINAGRO com o preço do boi gordo publicado pela CONAB',
  'meu-dia': 'Tela Meu Dia do FINAGRO com o que a fazenda tem para hoje',
};
// As seis páginas escritas à mão entram no índice /guias e podem ser citadas em `relacionados`.
export const FIXAS = [
  { slug: 'controle-de-rebanho', grupo: 'corte', tipo: 'guia', curto: 'Controle de rebanho', resumo: 'Ficha, lote, pesagem, vacina e reprodução no celular.' },
  { slug: 'calculadora-gmd', grupo: 'corte', tipo: 'calculadora', curto: 'Calculadora de GMD', resumo: 'O ganho médio diário e as arrobas do período.' },
  { slug: 'gta', grupo: 'corte', tipo: 'guia', curto: 'GTA', resumo: 'O que é a guia e o que trava a emissão.' },
  { slug: 'caderno-de-campo', grupo: 'lavoura', tipo: 'guia', curto: 'Caderno de campo', resumo: 'O que anotar em cada talhão e para que serve.' },
  { slug: 'fluxo-de-caixa-rural', grupo: 'dinheiro', tipo: 'guia', curto: 'Fluxo de caixa rural', resumo: 'Como montar o caixa da fazenda mês a mês.' },
  { slug: 'lcdpr', grupo: 'dinheiro', tipo: 'guia', curto: 'LCDPR', resumo: 'Quem é obrigado, o prazo e como gerar o arquivo.' },
];

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// Texto corrido: **negrito** e [texto](endereço). Endereço de fora abre com rel="noopener".
export function rico(s) {
  return esc(s)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => `<a href="${u}"${/^https?:/.test(u) ? ' rel="noopener"' : ''}>${t}</a>`);
}
const id = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const seta = '<svg aria-hidden="true" width="18" height="18"><use href="#i-seta"/></svg>';

function celular(tela) {
  return `<div class="celular celular--artigo"><span class="celular__botao celular__botao--volume" aria-hidden="true"></span><span class="celular__botao celular__botao--liga" aria-hidden="true"></span><div class="celular__corpo"><div class="celular__tela"><div class="celular__status" aria-hidden="true"><span class="celular__hora"></span><span class="celular__icones"><svg class="i-wifi" viewBox="0 0 16 12"><path fill="currentColor" d="M8 2.4c2.1 0 4 .8 5.5 2.1l1.1-1.2A9.6 9.6 0 0 0 8 .7 9.6 9.6 0 0 0 1.4 3.3l1.1 1.2A8 8 0 0 1 8 2.4Zm0 3.4c1.2 0 2.3.5 3.1 1.2l1.1-1.2A6.2 6.2 0 0 0 8 4.1 6.2 6.2 0 0 0 3.8 5.8l1.1 1.2A4.5 4.5 0 0 1 8 5.8Zm0 3.3c-.6 0-1.2.3-1.6.7L8 11.6l1.6-1.8c-.4-.4-1-.7-1.6-.7Z"/></svg><svg class="i-rede" viewBox="0 0 16 12"><path fill="currentColor" d="M15 .5v11H.9L15 .5Z"/></svg><svg class="i-bateria" viewBox="0 0 24 12"><rect x=".6" y=".6" width="20" height="10.8" rx="2.6" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="2.4" y="2.4" width="14.2" height="7.2" rx="1.4" fill="currentColor"/><path d="M22.2 4v4c.7-.2 1.2-1 1.2-2s-.5-1.8-1.2-2Z" fill="currentColor"/></svg></span></div><div class="celular__app"><picture><source type="image/avif" srcset="/assets/telas/${tela}-824.avif 824w, /assets/telas/${tela}-1236.avif 1236w" sizes="16rem"><img src="/assets/telas/${tela}-824.webp" width="824" height="1670" alt="${esc(TELAS[tela])}" loading="lazy" decoding="async"></picture></div><div class="celular__gestos" aria-hidden="true"></div></div><span class="celular__camera" aria-hidden="true"></span></div></div>`;
}

// ---------- blocos ----------
// No celular a tabela só continua tabela quando a palavra mais comprida de cada coluna cabe lado a lado em 320 px
// (286 px de miolo; dentro do bloco de planilha, 247). Senão vira um cartão por linha, que nunca corta texto.
const semMarca = (c) => String(c ?? '').replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
const palavraMaior = (c) => Math.max(0, ...semMarca(c).split(/[\s/]+|(?<=-)/).map((w) => w.length));
function tabela(t, cabe = 286) {
  const n = t.colunas.length;
  const comprida = t.linhas.some((l) => l.slice(1).some((c) => String(c).length > 44));
  const minimo = t.colunas.reduce((soma, c, k) => soma + Math.max(palavraMaior(c), ...t.linhas.map((l) => palavraMaior(l[k]))) * 8.6 + 22.4, 0);
  const cartoes = n >= 4 || comprida || minimo > cabe;
  return `<div class="tabela tabela--c${n}${cartoes ? ' tabela--cartoes' : ''}${comprida ? ' tabela--texto' : ''}"><table>
<thead><tr>${t.colunas.map((c) => `<th scope="col">${rico(c)}</th>`).join('')}</tr></thead>
<tbody>
${t.linhas.map((l) => `<tr><th scope="row">${rico(l[0])}</th>${l.slice(1).map((c, k) => `<td data-rotulo="${esc(t.colunas[k + 1])}">${rico(c)}</td>`).join('')}</tr>`).join('\n')}
</tbody></table></div>${t.nota ? `\n<p class="tabela__nota">${rico(t.nota)}</p>` : ''}`;
}

function calculadora(c, slug) {
  const p = `c-${slug.slice(0, 18)}`;
  const dia = (t) => Math.round(Date.parse((t === 'hoje' ? new Date().toISOString().slice(0, 10) : t) + 'T00:00:00Z') / 864e5);
  const campo = (f) => f.tipo === 'data'
    ? `<div class="campo"><label for="${p}-${f.id}">${esc(f.rotulo)}</label><input id="${p}-${f.id}" data-campo="${f.id}" data-tipo="data" type="date" value="${f.valor === 'hoje' ? '' : esc(f.valor)}"${f.valor === 'hoje' ? ' data-hoje' : ''}></div>`
    : f.opcoes
    ? `<div class="campo"><label for="${p}-${f.id}">${esc(f.rotulo)}</label><select id="${p}-${f.id}" data-campo="${f.id}">${f.opcoes.map(([v, r]) => `<option value="${esc(v)}"${String(v) === String(f.valor) ? ' selected' : ''}>${esc(r)}</option>`).join('')}</select></div>`
    : `<div class="campo"><label for="${p}-${f.id}">${esc(f.rotulo)}</label><input id="${p}-${f.id}" data-campo="${f.id}" type="number" inputmode="decimal" min="${f.min ?? 0}"${f.max != null ? ` max="${f.max}"` : ''} step="${f.passo ?? 'any'}" value="${f.valor}"></div>`;
  const ini = Object.fromEntries(c.campos.map((f) => [f.id, f.tipo === 'data' ? dia(f.valor) : f.opcoes ? (isNaN(Number(f.valor)) ? f.valor : Number(f.valor)) : Number(f.valor)]));
  const r0 = c.calcular(ini);
  const fmt = (v, s) => (!Number.isFinite(v) ? '–' : s.formato === 'data' ? new Date(v * 864e5).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
    : (s.prefixo || '') + v.toLocaleString('pt-BR', { minimumFractionDigits: s.casas ?? 2, maximumFractionDigits: s.casas ?? 2 }));
  return `<h2 id="calculadora">${esc(c.titulo)}</h2>
<div class="calc calc--auto" role="group" aria-labelledby="calculadora" data-calc>
  <div class="calc__campos calc__campos--auto">${c.campos.map(campo).join('')}</div>
  <div class="calc__saida calc__saida--n${c.saidas.length}" aria-live="polite">
    ${c.saidas.map((s) => `<div><b data-saida="${s.id}" data-casas="${s.casas ?? 2}" data-prefixo="${esc(s.prefixo || '')}"${s.formato === 'data' ? ' data-formato="data"' : ''}>${esc(fmt(r0[s.id], s))}</b><span>${esc(s.rotulo)}</span></div>`).join('\n    ')}
  </div>
  ${c.nota ? `<p class="calc__nota">${rico(c.nota)}</p>` : ''}
</div>
<script>
(() => {
  const calcular = ${c.calcular.toString()};
  const caixa = document.querySelector('[data-calc]');
  if (!caixa) return;
  const campos = [].slice.call(caixa.querySelectorAll('[data-campo]'));
  const fmt = (v, casas, pre) => (isFinite(v) ? pre + v.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas }) : '–');
  const data = (v) => (isFinite(v) ? new Date(v * 864e5).toLocaleDateString('pt-BR', { timeZone: 'UTC' }) : '–');
  campos.forEach((c) => { if (c.hasAttribute('data-hoje')) { const h = new Date(); c.value = new Date(h.getTime() - h.getTimezoneOffset() * 6e4).toISOString().slice(0, 10); } });
  function roda() {
    const v = {};
    campos.forEach((c) => {
      if (c.dataset.tipo === 'data') { v[c.dataset.campo] = c.value ? Math.round(Date.parse(c.value + 'T00:00:00Z') / 864e5) : NaN; return; }
      const bruto = String(c.value).replace(',', '.'); v[c.dataset.campo] = c.tagName === 'SELECT' && isNaN(parseFloat(bruto)) ? c.value : parseFloat(bruto);
    });
    let r = {};
    try { r = calcular(v) || {}; } catch (e) { r = {}; }
    [].forEach.call(caixa.querySelectorAll('[data-saida]'), (b) => { b.textContent = b.dataset.formato === 'data' ? data(r[b.dataset.saida]) : fmt(r[b.dataset.saida], +b.dataset.casas, b.dataset.prefixo); });
    cabe();
  }
  // Número comprido (valor do lote em reais) encolhe até caber na caixa, sem quebrar no meio.
  function cabe() {
    [].forEach.call(caixa.querySelectorAll('[data-saida]'), (b) => {
      b.style.fontSize = '';
      let t = parseFloat(getComputedStyle(b).fontSize);
      while (b.scrollWidth > b.clientWidth + 1 && t > 13) { t -= 1; b.style.fontSize = t + 'px'; }
    });
  }
  addEventListener('resize', cabe);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(cabe);
  campos.forEach((c) => { c.addEventListener('input', roda); c.addEventListener('change', roda); });
  roda();
})();
</script>`;
}

function modelo(m) {
  const parte = (p) => {
    const t = Object.keys(p)[0], v = p[t];
    if (t === 'h') return `<h4>${rico(v)}</h4>`;
    if (t === 'p') return `<p>${rico(v)}</p>`;
    if (t === 'ul') return `<ul>${v.map((i) => `<li>${rico(i)}</li>`).join('')}</ul>`;
    if (t === 'ol') return `<ol>${v.map((i) => `<li>${rico(i)}</li>`).join('')}</ol>`;
    if (t === 'campos') return `<div class="modelo__campos">${v.map(([r, w]) => `<span style="grid-column: span ${w}"${w > 6 ? ' data-largo' : ''}><i>${esc(r)}</i></span>`).join('')}</div>`;
    if (t === 'assinaturas') return `<div class="modelo__assinaturas">${v.map((a) => `<span>${esc(a)}</span>`).join('')}</div>`;
    if (t === 'nota') return `<p class="modelo__nota">${rico(v)}</p>`;
    return '';
  };
  // No celular o documento abre com o começo à vista e o resto atrás de "Ver o modelo inteiro" (a folha passa de 3 telas);
  // no computador abre inteiro. Copiar e imprimir abrem o resto antes.
  const conta = (p) => JSON.stringify(Object.values(p)[0]).split(/\s+/).length;
  let corte = 0, soma = 0;
  while (corte < m.partes.length - 2 && soma < 70) { soma += conta(m.partes[corte]); corte++; }
  return `<div class="modelo" data-modelo>
  <div class="modelo__folha" id="modelo-${esc(m.id)}"><h3>${esc(m.titulo)}</h3>${m.partes.slice(0, corte).map(parte).join('')}<details class="modelo__resto"><summary>Ver o modelo inteiro</summary>${m.partes.slice(corte).map(parte).join('')}</details></div>
  <div class="modelo__acoes"><button class="botao botao--cheio" type="button" data-copiar>Copiar o texto</button><button class="botao botao--linha" type="button" data-imprimir>Imprimir ou PDF</button></div>
  <p class="modelo__rodape">${rico(m.rodape)}</p>
</div>`;
}
const SCRIPT_MODELO = `<script>
(() => {
  [].forEach.call(document.querySelectorAll('[data-modelo]'), (m) => {
    const folha = m.querySelector('.modelo__folha'), resto = m.querySelector('.modelo__resto');
    const copiar = m.querySelector('[data-copiar]'), imprimir = m.querySelector('[data-imprimir]');
    if (resto && matchMedia('(min-width: 48rem)').matches) resto.open = true;
    copiar.addEventListener('click', () => {
      if (resto) resto.open = true;
      const texto = folha.innerText.replace('Ver o modelo inteiro', '').trim();
      const fim = () => { const antes = copiar.textContent; copiar.textContent = 'Texto copiado'; setTimeout(() => { copiar.textContent = antes; }, 2200); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(texto).then(fim, () => {});
      else { const r = document.createRange(); r.selectNodeContents(folha); const s = getSelection(); s.removeAllRanges(); s.addRange(r); try { document.execCommand('copy'); fim(); } catch (e) {} }
    });
    imprimir.addEventListener('click', () => {
      if (resto) resto.open = true;
      document.documentElement.classList.add('imprime-modelo'); folha.classList.add('modelo__folha--agora');
      const limpa = () => { document.documentElement.classList.remove('imprime-modelo'); folha.classList.remove('modelo__folha--agora'); removeEventListener('afterprint', limpa); };
      addEventListener('afterprint', limpa); print();
    });
  });
})();
</script>`;

// Planilha para baixar: escreve arquivos/<arquivo>.xlsx e .csv e mostra a prévia das colunas.
function planilha(p) {
  fs.mkdirSync(ARQUIVOS, { recursive: true });
  const linhas = [p.colunas, ...p.linhas];
  const csv = '﻿' + linhas.map((l) => l.map((c) => (/[;"\n]/.test(String(c)) ? `"${String(c).replace(/"/g, '""')}"` : String(c))).join(';')).join('\r\n') + '\r\n';
  fs.writeFileSync(path.join(ARQUIVOS, `${p.arquivo}.csv`), csv);
  execFileSync('python3', [path.join(RAIZ, 'scripts', 'xlsx.py'), path.join(ARQUIVOS, `${p.arquivo}.xlsx`), p.aba || 'Planilha'], { input: JSON.stringify(linhas) });
  const mostra = p.linhas.slice(0, 3), n = Math.min(p.colunas.length, 4);
  return `<div class="baixar">
  <div class="baixar__topo"><strong>${esc(p.titulo)}</strong><span>${p.colunas.length} colunas prontas: ${esc(p.colunas.join(', '))}.</span></div>
  ${tabela({ colunas: p.colunas.slice(0, n), linhas: mostra.map((l) => l.slice(0, n)) }, 247)}
  <div class="baixar__acoes"><a class="botao botao--cheio" href="/arquivos/${esc(p.arquivo)}.xlsx" download>Baixar em Excel</a><a class="botao botao--linha" href="/arquivos/${esc(p.arquivo)}.csv" download>Baixar em CSV</a></div>
  ${p.nota ? `<p class="tabela__nota">${rico(p.nota)}</p>` : ''}
</div>`;
}

function bloco(b) {
  const t = Object.keys(b)[0], v = b[t];
  if (t === 'p') return `<p>${rico(v)}</p>`;
  if (t === 'ul') return `<ul>\n${v.map((i) => `  <li>${rico(i)}</li>`).join('\n')}\n</ul>`;
  if (t === 'ol') return `<ol>\n${v.map((i) => `  <li>${rico(i)}</li>`).join('\n')}\n</ol>`;
  if (t === 'destaque') return `<p class="destaque-artigo">${rico(v)}</p>`;
  if (t === 'tabela') return tabela(v);
  if (t === 'glossario') return `<dl class="glossario">${v.map(([termo, def]) => `<div><dt>${esc(termo)}</dt><dd>${rico(def)}</dd></div>`).join('')}</dl>`;
  if (t === 'modelo') return modelo(v);
  if (t === 'planilha') return planilha(v);
  throw new Error(`bloco desconhecido: ${t}`);
}

function pagina(g, mapa) {
  const temModelo = g.secoes.some((s) => s.blocos.some((b) => b.modelo));
  const data = (g.atualizado || mapa.ATUALIZADO).split('-').reverse().join('/');
  const veja = g.relacionados.map((s) => mapa.todos.get(s)).filter(Boolean);
  // Do mesmo assunto: as 5 páginas seguintes do grupo, em roda. Sem isso, guia novo só recebia ligação do índice
  // (em 09/10/2026, 11 páginas só eram alcançadas por /guias e pelo mapa do site).
  const doGrupo = [...mapa.todos.values()].filter((x) => x.grupo === g.grupo);
  const eu = doGrupo.findIndex((x) => x.slug === g.slug);
  // Família por estado: a página geral lista as dos estados ("Por estado") e cada estado lista os outros.
  const UF = /-(ac|al|am|ap|ba|ce|df|es|go|ma|mg|ms|mt|pa|pb|pe|pi|pr|rj|rn|ro|rr|rs|sc|se|sp|to)$/;
  const base = UF.test(g.slug) && mapa.todos.has(g.slug.replace(UF, '')) ? g.slug.replace(UF, '') : g.slug;
  const estados = [...mapa.todos.values()].filter((x) => x.slug !== g.slug && UF.test(x.slug) && x.slug.replace(UF, '') === base);
  const vizinhos = [];
  for (let k = 1; k < doGrupo.length && vizinhos.length < 5; k++) { const v = doGrupo[(eu + k) % doGrupo.length]; if (v.slug !== g.slug && !veja.some((x) => x.slug === v.slug) && !estados.some((x) => x.slug === v.slug)) vizinhos.push(v); }
  const lista = (itens) => itens.map((x, k) => (k === 0 ? '' : k === itens.length - 1 ? ' e ' : ', ') + x).join('');
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(g.title)}</title>
<meta name="description" content="${esc(g.description)}">
<link rel="canonical" href="${mapa.SITE}/${g.slug}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#014b00">
<!--gerado:cabeca-->
<!--/gerado:cabeca-->
<link rel="preload" href="/assets/fontes/outfit-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fontes/afacad-flux-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/styles.css">
<link rel="stylesheet" href="/assets/artigo.css">
<script>document.documentElement.classList.add('js');</script>
</head>
<body>
<a class="pular" href="#conteudo">Pular para o conteúdo</a>
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><symbol id="i-seta" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></symbol></svg>
<!--gerado:topo-->
<!--/gerado:topo-->
<main id="conteudo" class="casca artigo-pagina">
  <nav class="migalhas" aria-label="Você está em"><ol><li><a href="/">FINAGRO</a></li><li><a href="/guias">Guias</a></li><li aria-current="page">${esc(g.curto)}</li></ol></nav>
  <article class="artigo">
    <div class="artigo__topo">
      <div>
        <p class="artigo__tipo"><span class="artigo__tipo-nome artigo__tipo-nome--${g.tipo}">${esc(TIPOS[g.tipo])}</span><a href="/guias#${g.grupo}">${esc(GRUPOS[g.grupo][0])}</a></p>
        <h1>${esc(g.h1)}</h1>
        <div class="resposta"><h2 class="resposta__pergunta">${esc(g.pergunta)}</h2><p>${esc(g.resposta)}</p></div>
        ${g.grupo === 'escolha' ? `<div class="artigo__acoes"><a class="botao botao--cheio" href="${APP}">Começar grátis</a><a class="botao botao--linha" href="${PLAY}">Baixar no Android</a></div>` : ''}
        <p class="artigo__data">Atualizado em ${data}</p>
      </div>
      ${celular(g.tela)}
    </div>
    <div class="artigo__grade">
    <div class="artigo__corpo">
${g.calc ? calculadora(g.calc, g.slug) + '\n' : ''}${(() => {
  // A seção do app fica no fim, ou depois da seção de número `noFinagro.depoisDe` nas páginas de quem está escolhendo.
  const partes = g.secoes.map((s) => `      <h2 id="${id(s.h2)}">${esc(s.h2)}</h2>\n${s.blocos.map(bloco).join('\n')}`);
  const app = `      <h2 id="no-finagro">${esc(g.noFinagro.h2)}</h2>\n      <ul>\n${g.noFinagro.itens.map((i) => `        <li>${rico(i)}</li>`).join('\n')}\n      </ul>`;
  partes.splice(Number.isInteger(g.noFinagro.depoisDe) ? g.noFinagro.depoisDe : partes.length, 0, app);
  return partes.join('\n\n');
})()}

      <div class="cta-artigo"><p><strong>${esc(g.cta.forte)}</strong><br>${esc(g.cta.texto)}</p><a class="botao botao--cheio" href="${APP}">Começar grátis ${seta}</a></div>

      <h2 id="perguntas">${esc(g.faqTitulo || `Perguntas sobre ${g.curto.toLowerCase()}`)}</h2>
      <div class="faq">
${g.faq.map(([q, a]) => `        <details name="faq"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n')}
      </div>

      ${g.fontes.length ? `<div class="fontes"><p><strong>Fontes</strong></p><ul class="fontes__lista">${g.fontes.map((f) => `<li><a href="${esc(f.url)}" rel="noopener">${esc(f.nome)}</a></li>`).join('')}</ul></div>` : ''}
      <nav class="veja" aria-label="Veja também"><p>Veja também</p><div class="veja__lista">${veja.map((v) => `<a href="/${v.slug}">${esc(v.curto)}</a>`).join('')}<a class="veja__todos" href="/guias">Todos os guias</a></div>${estados.length ? `<p class="veja__grupo">${base === g.slug ? 'Por estado' : 'Em outros estados'}</p><div class="veja__lista">${estados.map((v) => `<a href="/${v.slug}">${esc(v.curto)}</a>`).join('')}</div>` : ''}${vizinhos.length ? `<p class="veja__grupo">Do mesmo assunto</p><div class="veja__lista">${vizinhos.map((v) => `<a href="/${v.slug}">${esc(v.curto)}</a>`).join('')}</div>` : ''}</nav>
    </div>
    <aside class="artigo__lado" aria-label="Nesta página">
      <nav class="artigo__indice" aria-label="Seções desta página"><p>Nesta página</p><ol>
        ${[...(g.calc ? [['calculadora', g.calc.titulo]] : []), ...(() => { const l = g.secoes.map((s) => [id(s.h2), s.h2]); l.splice(Number.isInteger(g.noFinagro.depoisDe) ? g.noFinagro.depoisDe : l.length, 0, ['no-finagro', g.noFinagro.h2]); return l; })(), ['perguntas', 'Perguntas frequentes']].map(([a, t]) => `<li><a href="#${a}">${esc(t)}</a></li>`).join('')}
      </ol></nav>
      <div class="artigo__convite"><strong>FINAGRO</strong><p>Rebanho, lavoura, dinheiro e equipe da fazenda no celular e no computador.</p><ul><li>Grátis até 1.000 animais com ficha</li><li>Lote sem limite de cabeças</li><li>Sem cartão</li></ul><a class="botao botao--cheio" href="${APP}">Começar grátis</a><a class="artigo__convite-loja" href="https://play.google.com/store/apps/details?id=com.raykkony.fblogin">Baixar para Android</a></div>
    </aside>
    </div>
  </article>
</main>
<!--gerado:rodape-->
<!--/gerado:rodape-->
<!--gerado:jsonld-->
<!--/gerado:jsonld-->${temModelo ? '\n' + SCRIPT_MODELO : ''}
<script src="/script.js" defer></script>
</body>
</html>
`;
}

function indice(mapa) {
  const itens = [...mapa.todos.values()];
  const cartao = (v) => `<a class="guia-cartao" href="/${v.slug}"><span class="guia-cartao__tipo guia-cartao__tipo--${v.tipo}">${esc(TIPOS[v.tipo])}</span><strong>${esc(v.curto)}</strong><span class="guia-cartao__resumo">${esc(v.resumo)}</span></a>`;
  const n = itens.length, calc = itens.filter((v) => v.tipo === 'calculadora').length, mod = itens.filter((v) => v.tipo === 'modelo' || v.tipo === 'planilha').length;
  const titulo = 'Guias, calculadoras e modelos do produtor rural | FINAGRO';
  const descricao = `${n} páginas gratuitas para o produtor rural: calculadoras de arroba, gestação e hectare, modelos de contrato, planilhas e guias de GTA, ITR e Pronaf.`;
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(titulo)}</title>
<meta name="description" content="${esc(descricao)}">
<link rel="canonical" href="${mapa.SITE}/guias">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#014b00">
<!--gerado:cabeca-->
<!--/gerado:cabeca-->
<link rel="preload" href="/assets/fontes/outfit-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fontes/afacad-flux-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/styles.css">
<link rel="stylesheet" href="/assets/artigo.css">
<script>document.documentElement.classList.add('js');</script>
</head>
<body>
<a class="pular" href="#conteudo">Pular para o conteúdo</a>
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><symbol id="i-seta" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></symbol></svg>
<!--gerado:topo-->
<!--/gerado:topo-->
<main id="conteudo" class="casca artigo-pagina">
  <nav class="migalhas" aria-label="Você está em"><ol><li><a href="/">FINAGRO</a></li><li aria-current="page">Guias</li></ol></nav>
  <div class="guias-topo">
    <h1>Guias, calculadoras e modelos para tocar a fazenda</h1>
    <p class="guias-topo__sub">${n} páginas gratuitas, com a conta feita na hora e a fonte oficial de cada regra. Sem cadastro para ler, calcular ou baixar.</p>
    <ul class="guias-topo__numeros"><li><b>${n}</b><span>páginas</span></li><li><b>${calc}</b><span>calculadoras</span></li>${mod ? `<li><b>${mod}</b><span>modelos e planilhas</span></li>` : `<li><b>${Object.keys(GRUPOS).filter((k) => itens.some((v) => v.grupo === k)).length}</b><span>assuntos</span></li>`}</ul>
    <nav class="guias-topo__grupos" aria-label="Assuntos">${Object.entries(GRUPOS).filter(([k]) => itens.some((v) => v.grupo === k)).map(([k, [nome]]) => `<a href="#${k}">${esc(nome)}</a>`).join('')}</nav>
  </div>
${Object.entries(GRUPOS).filter(([k]) => itens.some((v) => v.grupo === k)).map(([k, [nome, sub]]) => `  <section class="guias-grupo revelar" id="${k}" aria-labelledby="g-${k}">
    <h2 id="g-${k}">${esc(nome)}</h2>
    <p class="guias-grupo__sub">${esc(sub)}</p>
    <div class="guias-grade">
      ${itens.filter((v) => v.grupo === k).map(cartao).join('\n      ')}
    </div>
  </section>`).join('\n')}
  <div class="cta-artigo cta-artigo--largo"><p><strong>O que estas páginas calculam uma vez, o FINAGRO acompanha todo dia.</strong><br>Rebanho, lavoura, dinheiro e equipe da fazenda num app só. Grátis até 1.000 animais com ficha, sem cartão.</p><a class="botao botao--cheio" href="${APP}">Começar grátis ${seta}</a></div>
</main>
<!--gerado:rodape-->
<!--/gerado:rodape-->
<!--gerado:jsonld-->
<!--/gerado:jsonld-->
<script src="/script.js" defer></script>
</body>
</html>
`;
}

export async function carregarGuias() {
  if (!fs.existsSync(PASTA)) return [];
  const out = [];
  for (const f of fs.readdirSync(PASTA).filter((x) => x.endsWith('.mjs')).sort()) {
    const mod = await import(pathToFileURL(path.join(PASTA, f)).href + `?t=${Date.now()}`);
    out.push(mod.default);
  }
  return out;
}

// Escreve as páginas dos guias e o índice /guias; devolve as entradas para o sitemap, o rodapé, o JSON-LD e o llms.txt.
export async function montarGuias({ SITE, ATUALIZADO }) {
  const guias = await carregarGuias();
  const todos = new Map();
  for (const f of FIXAS) todos.set(f.slug, f);
  for (const g of guias) todos.set(g.slug, { slug: g.slug, grupo: g.grupo, tipo: g.tipo, curto: g.curto, resumo: g.resumo });
  const mapa = { SITE, ATUALIZADO, todos };
  for (const g of guias) fs.writeFileSync(path.join(RAIZ, `${g.slug}.html`), pagina(g, mapa));
  fs.writeFileSync(path.join(RAIZ, 'guias.html'), indice(mapa));
  const ordem = Object.keys(GRUPOS);
  const entradas = guias.map((g) => ({ caminho: `/${g.slug}`, titulo: g.title, resumo: g.resumo, grupo: g.grupo, tipo: g.tipo, curto: g.curto, atualizado: g.atualizado || ATUALIZADO, guia: true }))
    .sort((a, b) => ordem.indexOf(a.grupo) - ordem.indexOf(b.grupo) || a.curto.localeCompare(b.curto));
  return { indice: { caminho: '/guias', titulo: 'Guias, calculadoras e modelos do produtor rural', resumo: 'Todas as páginas gratuitas do FINAGRO, por assunto.', hub: true }, guias: entradas, todos };
}
