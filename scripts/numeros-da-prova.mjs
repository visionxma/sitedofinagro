// Todo número da `afirmacao` de uma prova tem de estar no `trecho` copiado da página oficial: trecho que só fala do
// assunto não prova o número. Usado pelo portão (conferir-guia.mjs) e sozinho:
//   node scripts/numeros-da-prova.mjs conteudo/guias [quantos arquivos listar]
// Não contam: número que identifica o documento citado (Lei 5.889, art. 7º, IN 9/2021, Portaria 73), data e ano.
const UNI = ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
const DEZ = ['', '', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
const CEN = { 100: 'cem', 200: 'duzentos', 300: 'trezentos', 400: 'quatrocentos', 500: 'quinhentos', 600: 'seiscentos', 1000: 'mil' };
export const porExtenso = (n) => (n < 20 ? UNI[n] : n < 100 ? DEZ[Math.floor(n / 10)] + (n % 10 ? ' e ' + UNI[n % 10] : '') : CEN[n] || null);
const sem = (s) => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
// "4.356", "4 356" e "4356" são o mesmo número; "0,20" e "0,2" também
const canon = (t) => t.replace(/(?<=\d)[.\s ](?=\d{3}(?!\d))/g, '').replace(/(,\d*?)0+$/, '$1').replace(/,$/, '');
const numeros = (s) => [...sem(s).matchAll(/\d[\d.\s ]*\d(?:,\d+)?|\d(?:,\d+)?/g)].map((m) => ({ n: canon(m[0].trim()), i: m.index, bruto: m[0] }));
const DOC = /(lei(?: complementar)?|decreto(?:-lei)?|art\.?|artigos?|arts\.?|instrucao normativa|in(?: sda| mapa| rfb)?|portaria|resolucao|ajuste(?: sinief)?|sinief|n[ºo°.]|§|paragrafo|inciso|anexo|atualizacao|mcr|nr|convenio|sumula|medida provisoria|mp|b|rb)\s*(?:n[ºo°.]\s*)?$/;
export function numerosForaDoTrecho(p) {
  const a = sem(p.afirmacao), t = sem(p.trecho);
  const noTrecho = new Set(numeros(p.trecho).map((x) => x.n));
  const tLimpo = canon(t.replace(/\s+/g, ' '));
  const falta = [];
  for (const { n, i, bruto } of numeros(p.afirmacao)) {
    const antes = a.slice(Math.max(0, i - 28), i), depois = a.slice(i + bruto.length, i + bruto.length + 9);
    if (DOC.test(antes)) continue;                                  // identifica o documento
    if (/^[/.]\d/.test(depois) || /\d[/]$/.test(antes)) continue;   // data ou número/ano (9/2021, 31/12/2025)
    if (/^(19|20)\d\d$/.test(n)) continue;                          // ano
    if (/^\s*[ºª°]/.test(depois)) continue;                         // ordinal: 7º, 1ª
    if (noTrecho.has(n) || tLimpo.includes(n)) continue;
    const v = Number(n.replace(',', '.'));
    const ext = Number.isInteger(v) && v <= 1000 ? porExtenso(v) : null;
    if (ext && new RegExp(`(^|[^a-z])${ext.replace(/um$/, 'um(a)?').replace(/dois$/, '(dois|duas)')}([^a-z]|$)`).test(t)) continue;
    falta.push(bruto.trim());
  }
  return falta;
}
if (import.meta.url === `file://${process.argv[1]}`) {
  const fs = await import('node:fs');
  const dir = process.argv[2] || 'conteudo/guias';
  let tot = 0, ruins = 0; const por = {};
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.mjs'))) {
    const m = await import(`${process.cwd()}/${dir}/${f}`);
    for (const p of m.provas || []) { tot++; const falta = numerosForaDoTrecho(p); if (falta.length) { ruins++; (por[f] ||= []).push(`${falta.join(', ')} ← ${String(p.afirmacao).slice(0, 120)}`); } }
  }
  console.log(`${dir}: ${tot} provas, ${ruins} com número da afirmação fora do trecho, em ${Object.keys(por).length} arquivo(s)`);
  for (const [f, l] of Object.entries(por).sort((x, y) => y[1].length - x[1].length).slice(0, +(process.argv[3] || 99))) { console.log(' ', f, l.length); for (const x of l) console.log('     ', x); }
  process.exit(ruins ? 1 : 0);
}
