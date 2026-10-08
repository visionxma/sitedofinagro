// Portão de um guia de conteudo/guias: formato, tamanhos, a conta da calculadora e, principalmente, os TRECHOS
// OFICIAIS. Cada linha de `provas` tem um trecho copiado da norma; o portão baixa a página oficial, tira o texto
// riscado (revogado) e exige que o trecho esteja lá. Afirmação de lei sem trecho conferido não vai ao ar.
// Portado de SITE SAAS HOTEL/seo/conferir-guia.mjs (06/10/2026).
//   uso: node scripts/conferir-guia.mjs conteudo/guias/<slug>.mjs [...outros] [--sem-rede]
//        node scripts/conferir-guia.mjs --todos [--sem-rede]
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { GRUPOS, TIPOS, TELAS, FIXAS } from './guias.mjs';

const AQUI = dirname(fileURLToPath(import.meta.url));
const PASTA = join(AQUI, '..', 'conteudo', 'guias');
const CACHE = join(AQUI, '.cache-fontes');
const args = process.argv.slice(2);
const semRede = args.includes('--sem-rede');
const arquivos = args.includes('--todos')
  ? readdirSync(PASTA).filter((f) => f.endsWith('.mjs')).map((f) => join(PASTA, f))
  : args.filter((a) => !a.startsWith('--'));
if (!arquivos.length) { console.error('uso: node scripts/conferir-guia.mjs conteudo/guias/<slug>.mjs | --todos [--sem-rede]'); process.exit(2); }

// Norma só se prova em órgão público ou de pesquisa pública. Regra comercial de uma EMPRESA (preço, plano, limite)
// só se prova na página dela mesma, com `empresa: true` na linha de prova.
export const OFICIAL = /(^|\.)(gov\.br|jus\.br|leg\.br|mp\.br|def\.br|embrapa\.br|conab\.gov\.br|ibge\.gov\.br|senar\.org\.br|cepea\.org\.br|esalq\.usp\.br|woah\.org)$/i;
const SLUGS = new Set(FIXAS.map((f) => f.slug));
for (const f of existsSync(PASTA) ? readdirSync(PASTA) : []) if (f.endsWith('.mjs')) SLUGS.add(f.replace(/\.mjs$/, ''));
// Guias já encomendados nesta leva podem ser citados em `relacionados` antes de o arquivo existir.
const ENCOMENDADOS = join(PASTA, 'encomendados.txt');
if (existsSync(ENCOMENDADOS)) for (const s of readFileSync(ENCOMENDADOS, 'utf8').split(/\s+/)) if (s) SLUGS.add(s);

// ── texto oficial ───────────────────────────────────────────────────────────
const ENT = { nbsp: ' ', amp: '&', quot: '"', lt: '<', gt: '>', ordm: 'º', ordf: 'ª', sect: '§', deg: '°', ndash: '-', mdash: '-', ldquo: '"', rdquo: '"', lsquo: "'", rsquo: "'",
  aacute: 'á', eacute: 'é', iacute: 'í', oacute: 'ó', uacute: 'ú', atilde: 'ã', otilde: 'õ', ccedil: 'ç', acirc: 'â', ecirc: 'ê', ocirc: 'ô', agrave: 'à', uuml: 'ü',
  Aacute: 'Á', Eacute: 'É', Iacute: 'Í', Oacute: 'Ó', Uacute: 'Ú', Atilde: 'Ã', Otilde: 'Õ', Ccedil: 'Ç', Acirc: 'Â', Ecirc: 'Ê', Ocirc: 'Ô', Agrave: 'À' };
const semEntidades = (s) => s.replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16))).replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d)).replace(/&([a-zA-Z]+);/g, (m, n) => ENT[n] ?? ' ');
/** Só letras e números, sem acento: o trecho tem de bater palavra por palavra, sem depender de espaço e pontuação. */
export const chave = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '');

function baixa(url) {
  mkdirSync(CACHE, { recursive: true });
  const arq = join(CACHE, createHash('sha1').update(url).digest('hex'));
  if (existsSync(arq) && Date.now() - statSync(arq).mtimeMs < 24 * 3600e3) return readFileSync(arq);
  let corpo = Buffer.alloc(0);
  for (let i = 0; i < 3; i++) {
    try {
      corpo = execFileSync('curl', ['-4', '-s', '-L', '--compressed', '-m', '60', '-A', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36',
        '-H', 'Accept: text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.8', '-H', 'Accept-Language: pt-BR,pt;q=0.9', url], { maxBuffer: 96 * 1024 * 1024 });
      if (corpo.length > 400) break;
    } catch { corpo = Buffer.alloc(0); }
  }
  if (corpo.length > 400) writeFileSync(arq, corpo);
  return corpo;
}

/** Separa o texto em vigor do texto revogado. O Planalto risca com <strike>/<s>/<del> e com
 *  <span style="text-decoration:line-through">. Os dois saem do texto "vivo". */
const VAZIAS = new Set(['br', 'img', 'hr', 'meta', 'input', 'link', 'col', 'area', 'base', 'wbr']);
export function separaRiscado(html) {
  let vivo = '', riscado = '', fundo = 0, i = 0;
  const pilha = [];
  const re = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)>/g;
  let m;
  while ((m = re.exec(html))) {
    const texto = html.slice(i, m.index);
    if (fundo) riscado += texto; else vivo += texto;
    i = re.lastIndex;
    const fecha = m[1] === '/', tag = m[2].toLowerCase(), attrs = m[3];
    if (VAZIAS.has(tag) || /\/\s*$/.test(attrs)) { if (fundo) riscado += ' '; else vivo += m[0]; continue; }
    if (!fundo) {
      if (!fecha && (/^(strike|s|del)$/.test(tag) || /style\s*=\s*["'][^"']*line-through/i.test(attrs))) { fundo = 1; pilha.length = 0; pilha.push(tag); riscado += ' '; }
      else vivo += m[0];
    } else if (!fecha) { pilha.push(tag); riscado += ' '; }
    else {
      const k = pilha.lastIndexOf(tag);
      if (k >= 0) pilha.length = k;
      riscado += ' ';
      if (!pilha.length) { fundo = 0; vivo += ' '; }
    }
  }
  const resto = html.slice(i);
  if (fundo) riscado += resto; else vivo += resto;
  return { vivo, riscado };
}

function textoDe(url) {
  const corpo = baixa(url);
  if (corpo.length < 400) return { erro: `a página não respondeu (${corpo.length} bytes)` };
  if (corpo.subarray(0, 5).toString('latin1') === '%PDF-') {
    const tmp = join(CACHE, `tmp-${process.pid}.pdf`); writeFileSync(tmp, corpo);   // um por processo: vários portões rodam ao mesmo tempo
    try {
      const py = `${process.env.HOME}/.claude/marca-visionx/.venv/bin/python`;
      const t = execFileSync(py, ['-I', '-c', "import sys,pypdfium2 as p\nd=p.PdfDocument(sys.argv[1])\nprint('\\n'.join(d[i].get_textpage().get_text_range() for i in range(len(d))))", tmp], { maxBuffer: 96 * 1024 * 1024 }).toString('utf8');
      return { texto: t, pdf: true };
    } catch (e) { return { erro: 'PDF que não deu para ler: ' + String(e.message).slice(0, 80) }; }
  }
  const cabeca = corpo.subarray(0, 4000).toString('latin1');
  let html;
  if (/charset\s*=\s*["']?\s*(iso-8859-1|windows-1252|latin-?1)/i.test(cabeca)) html = new TextDecoder('windows-1252').decode(corpo);
  else { try { html = new TextDecoder('utf-8', { fatal: true }).decode(corpo); } catch { html = new TextDecoder('windows-1252').decode(corpo); } }
  const { vivo, riscado } = separaRiscado(html.replace(/<(script|style|noscript)\b[\s\S]*?<\/\1>/gi, ' '));
  const limpa = (h) => semEntidades(h.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ');
  return { texto: limpa(vivo), riscado: limpa(riscado) };
}

// ── formato ─────────────────────────────────────────────────────────────────
const palavras = (s) => String(s).trim().split(/\s+/).filter((t) => t && t !== 'R$').length;
const BLOCOS = ['p', 'ul', 'ol', 'destaque', 'tabela', 'glossario', 'modelo', 'planilha'];
const PARTES = ['p', 'h', 'ul', 'ol', 'campos', 'assinaturas', 'nota'];
// Frases que denunciam texto de máquina ou diminuem o produtor (lista viva: correção nova entra aqui).
const VETADAS = [
  [/—/, 'travessão (—): troque por vírgula, dois-pontos ou ponto'],
  [/ · /, '" · " no texto corrido: use vírgula ou "e"'],
  [/\bclique aqui\b|\bsaiba mais aqui\b/i, 'link com "clique aqui"'],
  [/revolucion|desbloque|potencializ|alavanc|otimiz(e|ar|ação) (sua|seu|o seu|a sua)/i, 'verbo de propaganda (revolucionar, desbloquear, potencializar, alavancar, otimize sua)'],
  [/no mundo (atual|de hoje)|nos dias de hoje|em resumo|em suma|vale (ressaltar|destacar|lembrar)|é importante (ressaltar|destacar|notar|lembrar)|não é segredo|sem dúvida/i, 'muleta de texto de máquina (em resumo, vale ressaltar, é importante destacar, nos dias de hoje)'],
  [/\bjornada\b|\brobust[oa]s?\b|\babrangentes?\b|de ponta\b|\binovador[ae]?s?\b|\bdisruptiv/i, 'adjetivo de folheto (jornada, robusto, abrangente, de ponta, inovador)'],
  [/\bdo interior\b|\bbaratinh|\bhumilde|\bsimplesinh/i, 'termo que diminui o produtor (do interior, baratinho, humilde)'],
  [/\b(turma|aluno|aula)s?\b/i, 'termo de escola (turma, aluno, aula)'],
];
// O que o FINAGRO NÃO faz: a seção noFinagro e o cta não podem prometer.
const NAO_FAZ = [
  [/(?<!não |nao |sem )\bemite (a |o |sua |seu )?(gta|nota|nf)/i, 'o FINAGRO não emite GTA nem nota fiscal'],
  [/(?<!não |nao )\b(transmite|envia|entrega) (o |a |sua |seu )?(lcdpr|declaração|itr|dirpf|imposto)/i, 'o FINAGRO não transmite nada à Receita'],
  [/balança (conectada|integrada)|brinco eletrônico (lido|integrado)|leitor de brinco/i, 'o FINAGRO não integra balança nem leitor de brinco'],
  [/app store|aplicativo (para|de) iphone|\bios\b/i, 'não há app na App Store: no iPhone é pelo navegador'],
  [/imagem de satélite|ndvi|drone/i, 'o FINAGRO não tem imagem de satélite nem drone'],
];

async function confere(arquivo) {
  const erros = [], avisos = [];
  const falha = (m) => erros.push(m);
  let mod;
  try { mod = await import(pathToFileURL(arquivo).href + `?t=${Date.now()}`); } catch (e) { return { erros: [`não carrega: ${e.message}`], avisos }; }
  const g = mod.default, provas = mod.provas;
  if (!g || typeof g !== 'object') return { erros: ['falta o `export default { ... }`'], avisos };
  const slug = basename(arquivo).replace(/\.mjs$/, '');
  if (g.slug !== slug) falha(`slug "${g.slug}" diferente do nome do arquivo "${slug}"`);
  for (const k of ['grupo', 'tipo', 'curto', 'resumo', 'title', 'description', 'h1', 'pergunta', 'resposta', 'tela', 'secoes', 'noFinagro', 'cta', 'faq', 'fontes', 'relacionados']) if (g[k] == null || g[k] === '') falha(`falta o campo ${k}`);
  if (erros.length) return { erros, avisos };
  if (!GRUPOS[g.grupo]) falha(`grupo "${g.grupo}" não existe (${Object.keys(GRUPOS).join(', ')})`);
  if (!TIPOS[g.tipo]) falha(`tipo "${g.tipo}" não existe (${Object.keys(TIPOS).join(', ')})`);
  if (!TELAS[g.tela]) falha(`tela "${g.tela}" não existe (${Object.keys(TELAS).join(', ')})`);
  if (g.curto.length > 28) falha(`curto com ${g.curto.length} caracteres (até 28)`);
  if (g.resumo.length > 62) falha(`resumo com ${g.resumo.length} caracteres (até 60)`);
  if (g.title.length > 60) falha(`title com ${g.title.length} caracteres (até 60)`);
  if (g.title.length < 30) falha(`title com ${g.title.length} caracteres (pelo menos 30)`);
  if (g.description.length < 120 || g.description.length > 160) falha(`description com ${g.description.length} caracteres (120 a 160)`);
  if (g.h1.length > 78) falha(`h1 com ${g.h1.length} caracteres (até 78)`);
  const n = palavras(g.resposta); if (n < 40 || n > 60) falha(`resposta com ${n} palavras (40 a 60)`);
  if (!g.pergunta.trim().endsWith('?')) falha('pergunta sem ponto de interrogação');
  if (!Array.isArray(g.secoes) || g.secoes.length < 3 || g.secoes.length > 7) falha(`secoes: ${g.secoes?.length} (de 3 a 7)`);
  if (!Array.isArray(g.faq) || g.faq.length < 4 || g.faq.length > 5) falha(`faq com ${g.faq?.length} perguntas (4 ou 5)`);
  for (const [q, a] of g.faq || []) { if (!String(q).trim().endsWith('?')) falha(`faq sem interrogação: ${q}`); if (/\*\*|\]\(/.test(a)) falha(`faq com negrito ou link: ${q}`); if (palavras(a) > 75) avisos.push(`faq longa (${palavras(a)} palavras): ${q}`); }
  if (!Array.isArray(g.relacionados) || g.relacionados.length !== 3) falha('relacionados precisa de exatamente 3 slugs');
  for (const r of g.relacionados || []) { if (!SLUGS.has(r)) falha(`relacionado "${r}" não existe (nem está em encomendados.txt)`); if (r === slug) falha('relacionado aponta para o próprio guia'); }
  if (!g.noFinagro.h2 || !Array.isArray(g.noFinagro.itens) || g.noFinagro.itens.length < 3 || g.noFinagro.itens.length > 5) falha('noFinagro precisa de h2 e de 3 a 5 itens');
  if (!g.cta.forte || !g.cta.texto) falha('cta precisa de forte e texto');
  else { if (g.cta.forte.length > 70) falha(`cta.forte com ${g.cta.forte.length} caracteres (até 70)`); if (g.cta.texto.length > 90) falha(`cta.texto com ${g.cta.texto.length} caracteres (até 90)`); }
  let modelos = 0, totalPalavras = palavras(g.resposta);
  for (const [i, s] of (g.secoes || []).entries()) {
    if (!s.h2 || !Array.isArray(s.blocos) || !s.blocos.length) { falha(`seção ${i + 1} sem h2 ou sem blocos`); continue; }
    if (s.h2.length > 64) falha(`h2 com ${s.h2.length} caracteres (até 64): ${s.h2}`);
    for (const b of s.blocos) {
      const tipo = Object.keys(b)[0];
      if (!BLOCOS.includes(tipo)) { falha(`bloco desconhecido "${tipo}" em "${s.h2}"`); continue; }
      if (tipo === 'tabela' || tipo === 'planilha') {
        const t = b[tipo];
        if (!Array.isArray(t.colunas) || !Array.isArray(t.linhas)) falha(`${tipo} malformada em "${s.h2}"`);
        else {
          if (tipo === 'tabela' && t.colunas.length > 4) falha(`tabela com ${t.colunas.length} colunas em "${s.h2}" (até 4, contando a do rótulo)`);
          for (const l of t.linhas) if (l.length !== t.colunas.length) falha(`linha de ${tipo} com ${l.length} células, esperado ${t.colunas.length}: ${String(l[0]).slice(0, 40)}`);
        }
        if (tipo === 'planilha') { if (!/^[a-z0-9-]+$/.test(t.arquivo || '')) falha('planilha sem `arquivo` em minúsculas com hífen'); if (!t.titulo) falha('planilha sem titulo'); if ((t.linhas || []).length < 3) falha('planilha precisa de pelo menos 3 linhas de exemplo'); }
      }
      if (tipo === 'modelo') {
        modelos++;
        const m = b.modelo;
        if (!/^[a-z0-9-]+$/.test(m.id || '')) falha('modelo sem id em minúsculas com hífen');
        if (!m.titulo || !Array.isArray(m.partes) || !m.rodape) falha('modelo precisa de titulo, partes e rodape');
        let pm = 0;
        for (const p of m.partes || []) {
          const t = Object.keys(p)[0];
          if (!PARTES.includes(t)) falha(`parte desconhecida no modelo: ${t}`);
          if (t === 'campos') { for (const c of p.campos) if (!Array.isArray(c) || typeof c[1] !== 'number') falha('campos do modelo: use [rótulo, colunas]'); }
          pm += palavras(JSON.stringify(p[t]).replace(/[_\[\]",{}]/g, ' '));
        }
        if (pm > 620) falha(`modelo "${m.id}" com cerca de ${pm} palavras: longo demais (até 600)`);
      }
      totalPalavras += palavras(JSON.stringify(b).replace(/[_\[\]",{}:]/g, ' '));
    }
  }
  if (totalPalavras < 420) falha(`texto curto: cerca de ${totalPalavras} palavras (pelo menos 420; bom a partir de 600)`);
  // ── calculadora ──
  if (g.tipo === 'calculadora' && !g.calc) falha('tipo calculadora sem o campo `calc`');
  if (g.calc) {
    const c = g.calc;
    if (!c.titulo || !Array.isArray(c.campos) || !Array.isArray(c.saidas) || typeof c.calcular !== 'function') falha('calc precisa de titulo, campos, saidas e calcular');
    else {
      if (c.campos.length < 1 || c.campos.length > 6) falha(`calc com ${c.campos.length} campos (de 1 a 6)`);
      if (c.saidas.length < 1 || c.saidas.length > 4) falha(`calc com ${c.saidas.length} saídas (de 1 a 4)`);
      const dia = (t) => (typeof t === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(t) ? Math.round(Date.parse(t + 'T00:00:00Z') / 864e5) : t === 'hoje' ? 20734 : t);
      const dias = (o) => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, dia(v)]));
      for (const f of c.campos) { if (!/^[a-z][a-zA-Z0-9]*$/.test(f.id || '')) falha(`calc: id de campo inválido "${f.id}"`); if (!f.rotulo || f.valor == null) falha(`calc: campo ${f.id} sem rotulo ou valor`); if ((f.rotulo || '').length > 34) falha(`calc: rótulo longo (${f.rotulo.length}, até 34): ${f.rotulo}`); }
      for (const s of c.saidas) { if (!s.id || !s.rotulo) falha('calc: saída sem id ou rotulo'); if ((s.rotulo || '').length > 34) falha(`calc: rótulo de saída longo (${s.rotulo.length}, até 34): ${s.rotulo}`); }
      // A função vai para a página como texto: tem de rodar sozinha, sem nada de fora.
      let pura;
      try { pura = new Function(`return (${c.calcular.toString()})`)(); } catch (e) { falha(`calc.calcular não se sustenta sozinha: ${e.message}`); }
      if (!Array.isArray(c.exemplos) || c.exemplos.length < 2) falha('calc precisa de pelo menos 2 `exemplos` com entrada e saida conferidas à mão');
      else if (pura) for (const ex of c.exemplos) {
        let r; try { r = pura(dias(ex.entrada)); } catch (e) { falha(`calc: exemplo quebra a função: ${e.message}`); continue; }
        for (const [k, v] of Object.entries(dias(ex.saida))) if (!(Math.abs((r?.[k] ?? NaN) - v) <= Math.max(0.011, Math.abs(v) * 0.0006))) falha(`calc: exemplo ${JSON.stringify(ex.entrada)} deu ${k}=${r?.[k]}, esperado ${v}`);
      }
      if (pura) { const ini = Object.fromEntries(c.campos.map((f) => [f.id, f.tipo === 'data' ? dia(f.valor) : f.opcoes && isNaN(Number(f.valor)) ? f.valor : Number(f.valor)])); const r = pura(ini); for (const s of c.saidas) if (!Number.isFinite(r?.[s.id])) falha(`calc: com os valores iniciais a saída "${s.id}" não é número`); }
    }
  }
  // ── escrita ──
  const tudo = JSON.stringify({ ...g, calc: g.calc ? { ...g.calc, calcular: undefined } : undefined });
  for (const [re, msg] of VETADAS) { const m = tudo.match(re); if (m) falha(`${msg} — achado: "${tudo.slice(Math.max(0, m.index - 30), m.index + 40).replace(/\s+/g, ' ')}"`); }
  const promessa = JSON.stringify([g.noFinagro, g.cta]);
  for (const [re, msg] of NAO_FAZ) { const m = promessa.match(re); if (m) falha(`promessa que o app não cumpre (${msg}) — achado: "${promessa.slice(Math.max(0, m.index - 30), m.index + 50)}"`); }
  for (const f of g.fontes || []) { if (!f.nome || !/^https:\/\//.test(f.url || '')) falha(`fonte malformada: ${JSON.stringify(f).slice(0, 80)}`); }
  // ── provas ──
  if (!Array.isArray(provas)) falha('falta `export const provas = [...]` (pode ser vazio só se o guia não cita norma, preço de terceiro nem número de pesquisa)');
  else {
    if (g.exigeProvas !== false && /\b(lei|decreto|instrução normativa|portaria|resolução|receita federal|incra|mapa|obrigatóri|prazo|multa)\b/i.test(tudo) && provas.length < 2) falha(`o guia fala de norma, prazo ou obrigação e tem só ${provas.length} prova(s): cada afirmação precisa de um trecho oficial`);
    for (const p of provas) {
      if (!p.afirmacao || !p.trecho || !p.url) { falha(`prova incompleta: ${JSON.stringify(p).slice(0, 90)}`); continue; }
      let host; try { host = new URL(p.url).hostname; } catch { falha(`prova com endereço inválido: ${p.url}`); continue; }
      if (!(OFICIAL.test(host) || p.empresa === true)) { falha(`prova em site que não é oficial (${host}): ${p.afirmacao.slice(0, 60)}`); continue; }
      const k = chave(p.trecho);
      if (k.length < 40) { falha(`trecho curto demais para provar algo: "${p.trecho}"`); continue; }
      if (semRede) continue;
      const r = textoDe(p.url);
      if (r.erro) { falha(`${r.erro}: ${p.url}`); continue; }
      if (chave(r.texto).includes(k)) continue;
      if (r.riscado && chave(r.riscado).includes(k)) falha(`trecho REVOGADO (riscado na página): "${p.trecho.slice(0, 70)}…" em ${p.url}`);
      else falha(`trecho não encontrado na página oficial: "${p.trecho.slice(0, 70)}…" em ${p.url}`);
    }
  }
  return { erros, avisos, provas: provas?.length || 0, modelos, palavras: totalPalavras };
}

let ruim = 0;
for (const a of arquivos) {
  if (basename(a) === 'LEIA.md') continue;
  const r = await confere(a);
  const nome = basename(a);
  if (r.erros.length) { ruim++; console.log(`REPROVADO ${nome}`); for (const e of r.erros) console.log(`  ✗ ${e}`); }
  else console.log(`APROVADO  ${nome} — ${r.palavras} palavras, ${r.provas} trecho(s) oficial(is) conferido(s)${semRede ? ' (sem rede: trechos NÃO conferidos)' : ''}${r.modelos ? `, ${r.modelos} modelo(s)` : ''}`);
  for (const w of r.avisos) console.log(`  ! ${w}`);
}
process.exit(ruim ? 1 : 0);
