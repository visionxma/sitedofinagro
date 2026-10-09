// conferir-cache.mjs <base> [quantas páginas] — prova que quem JÁ visitou o site recebe o arquivo novo.
// Imagem, vídeo, logo e fonte ficam 30 dias guardados no navegador (vercel.json). O curl não tem memória e por isso
// "conferi no ar" não via o defeito: em 09/10/2026 o logo e o vídeo do app trocaram de cor com o mesmo nome e o Victor
// continuou vendo os antigos. Este portão lê as páginas no ar e reprova (sai 1) quando:
//   1) um endereço de /assets com cache longo não leva ?v=<versão>;
//   2) a versão do endereço não bate com o conteúdo que o servidor entrega (md5).
//   node scripts/conferir-cache.mjs https://finagro.app
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const base = (process.argv[2] || '').replace(/\/$/, '');
if (!base) { console.error('uso: node scripts/conferir-cache.mjs <base> [quantas páginas]'); process.exit(2); }
const todas = [...readFileSync(new URL('../sitemap.xml', import.meta.url), 'utf8').matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map((m) => m[1]);
const paginas = todas.slice(0, +(process.argv[3] || todas.length));
const LONGO = /^\/assets\/(telas|videos|marca|og|fontes|recortes|fotos|heroi)\//;
const RE = /(?<=["'(\s,=])(\/assets\/[\w./-]+\.(?:avif|webp|png|jpe?g|svg|mp4|webm|woff2))(\?v=([0-9a-f]+))?/g;
const semVersao = new Set(), vistos = new Map();
const ler = async (u) => { const r = await fetch(u, { signal: AbortSignal.timeout(60000) }); return { ok: r.ok, corpo: Buffer.from(await r.arrayBuffer()) }; };
const textos = [];
for (const p of [...paginas, '/styles.css', '/assets/artigo.css', '/assets/captacao.css']) { const r = await ler(base + p); if (r.ok) textos.push([p, r.corpo.toString('utf8')]); }
for (const [p, t] of textos) for (const m of t.matchAll(RE)) {
  if (!LONGO.test(m[1])) continue;
  if (!m[3]) semVersao.add(`${p}: ${m[1]}`); else vistos.set(m[1] + m[2], m[3]);
}
const errados = [];
for (const [u, v] of vistos) { const r = await ler(base + u); const h = r.ok ? createHash('md5').update(r.corpo).digest('hex').slice(0, v.length) : 'não respondeu'; if (h !== v) errados.push(`${u} → o servidor entrega ${h}`); }
console.log(`${textos.length} páginas e folhas lidas em ${base}; ${vistos.size} arquivos de cache longo com versão; ${semVersao.size} sem versão; ${errados.length} com versão que não bate`);
for (const x of [...semVersao].slice(0, 12)) console.log('  SEM VERSÃO  ' + x);
for (const x of errados.slice(0, 12)) console.log('  NÃO BATE    ' + x);
process.exit(semVersao.size || errados.length ? 1 : 0);
