// Gerador do site do FINAGRO (estático, sem dependência). Lê conteudo/site.mjs e:
//   1) preenche nos .html os blocos <!--gerado:X--> … <!--/gerado:X--> (cabeça, topo, rodapé, planos, perguntas, JSON-LD);
//   2) escreve sitemap.xml, robots.txt, llms.txt, llms-full.txt, site.webmanifest e a chave do IndexNow.
// Rodar a cada mudança de texto, preço ou página:  node scripts/gerar.mjs
import fs from 'node:fs';
import path from 'node:path';
import { SITE, ATUALIZADO, ENTIDADE, PLANOS, EMPRESARIAL, COMPLEMENTOS, TESTE_DIAS, PERGUNTAS, PAGINAS, brl } from '../conteudo/site.mjs';

const RAIZ = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const INDEXNOW = 'f3b9c2a71d5e4c08a6b14e9d27c35f80';
const VERIFICACAO_GOOGLE = 'iM4u9wm9VkT-xBri38kmqy7Ebhc4J61DUfeEcjIdSIA';
const ANO = 2026;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const semTags = (s) => s.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
const check = '<svg aria-hidden="true"><use href="#i-check"/></svg>';

function preencher(html, nome, conteudo) {
  const ab = `<!--gerado:${nome}-->`, fe = `<!--/gerado:${nome}-->`;
  const i = html.indexOf(ab);
  if (i < 0) return html;
  const j = html.indexOf(fe, i);
  const fim = j < 0 ? i + ab.length : j + fe.length;
  return html.slice(0, i) + ab + '\n' + conteudo + '\n' + fe + html.slice(fim);
}

// ---------- blocos ----------
const topo = () => `<header class="topo">
  <div class="shell topo__barra">
    <a class="topo__marca" href="/" aria-label="FINAGRO, página inicial"><img src="/assets/marca/finagro-placa.webp" width="280" height="97" alt="FINAGRO"></a>
    <nav class="topo__nav" aria-label="Seções">
      <a href="/#funcoes">Funções</a><a href="/#seu-perfil">Para quem</a><a href="/#planos">Planos</a><a href="/#perguntas">Perguntas</a>
    </nav>
    <div class="topo__acoes">
      <a class="topo__entrar" href="${ENTIDADE.app}">Entrar</a>
      <a class="botao botao--cheio" href="${ENTIDADE.app}">Começar grátis</a>
    </div>
  </div>
</header>`;

const rodape = () => `<footer class="rodape">
  <div class="shell">
    <div class="rodape__grade">
      <div class="rodape__marca">
        <img src="/assets/marca/finagro-branco.webp" width="300" height="80" alt="FINAGRO" loading="lazy">
        <p>App de gestão rural para celular e computador. Rebanho, lavoura, dinheiro e equipe da fazenda num lugar só.</p>
      </div>
      <div><h2>O app</h2><ul>
        <li><a href="/#funcoes">Funções</a></li><li><a href="/#planos">Planos e preços</a></li><li><a href="/#perguntas">Perguntas frequentes</a></li>
        <li><a href="${ENTIDADE.app}">Entrar no app</a></li><li><a href="${ENTIDADE.android}">App Android</a></li>
      </ul></div>
      <div><h2>Guias</h2><ul>
        ${PAGINAS.filter((p) => p.caminho !== '/').map((p) => `<li><a href="${p.caminho}">${esc(p.titulo.replace(/:.*/, ''))}</a></li>`).join('')}
      </ul></div>
      <div><h2>Contato</h2><ul>
        <li><a href="${ENTIDADE.instagram}" rel="me">Instagram @finagro.app</a></li>
        <li><a href="${ENTIDADE.privacidade}">Política de privacidade</a></li>
        <li><a href="/llms.txt">Resumo para IA (llms.txt)</a></li>
      </ul></div>
    </div>
    <div class="rodape__base">
      <p>© ${ANO} FINAGRO. Todos os direitos reservados.</p>
      <a class="assinatura" href="https://visionxma.com/"><svg aria-hidden="true"><use href="#i-vx"/></svg>© ${ANO} VisionX · Todos os direitos reservados.</a>
    </div>
  </div>
</footer>`;

function planos() {
  const [campo, ...pagos] = PLANOS;
  const preco = (p) => `<span class="plano__preco"><sup>R$</sup>${brl(p.mes)}<small>/mês</small></span>`;
  return `<div class="campo-gratis revelar">
  <div><h3>Campo</h3><p class="campo-gratis__preco">R$ 0<small>para sempre</small></p></div>
  <ul>${campo.itens.slice(0, 6).map((i) => `<li>${check}${esc(i)}</li>`).join('')}</ul>
  <a class="botao botao--claro" href="${ENTIDADE.app}">Começar grátis</a>
</div>
<div class="pagos" id="pagos">
${pagos.map((p, k) => `  <article class="plano" role="button" tabindex="0" aria-pressed="${k === 0}" data-plano="${p.id}">
    <h3 class="plano__nome">${esc(p.nome)}</h3>
    <p class="plano__para">${esc(p.para)}</p>
    ${preco(p)}
    <span class="plano__ano">ou R$ ${brl(p.ano)} por ano</span>
    <ul class="plano__lista">${p.itens.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
    <a class="botao botao--cheio" href="${ENTIDADE.app}" aria-label="Testar o plano ${esc(p.nome)} por ${TESTE_DIAS} dias"><span class="so-pc">Testar ${TESTE_DIAS} dias</span><span class="so-cel">Testar</span></a>
  </article>`).join('\n')}
</div>
<div class="plano-aberto" id="plano-aberto">
${pagos.map((p, k) => `  <div data-lista="${p.id}"${k ? ' hidden' : ''}><h4>O que vem no ${esc(p.nome)}</h4><ul>${p.itens.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('\n')}
</div>
<div class="planos__mais">
  <div><strong>Grupos, cooperativas e consultorias</strong>Plano ${EMPRESARIAL.nome} a partir de R$ ${brl(EMPRESARIAL.aPartirDe)} por mês, ${esc(EMPRESARIAL.texto)}.</div>
  <div><strong>Precisa de só um pouco mais?</strong>${COMPLEMENTOS.map((c) => `${esc(c.nome)} por R$ ${brl(c.mes)}`).join(' e ')} por mês.</div>
</div>
<p class="garantia"><svg aria-hidden="true"><use href="#i-escudo"/></svg>O Campo é grátis para sempre, sem cartão. E os dados são seus: exporte tudo quando quiser.</p>`;
}

function faq(lista, visiveis = 5) {
  return `<div class="faq" id="faq">
${lista.map(([p, r], k) => `  <details name="faq"${k >= visiveis ? ' class="extra"' : ''}><summary>${esc(p)}</summary><p>${esc(r)}</p></details>`).join('\n')}
</div>
${lista.length > visiveis ? `<button class="botao botao--linha ver-mais" type="button" data-ver-mais="faq">Ver mais perguntas (+${lista.length - visiveis})</button>` : ''}`;
}

function cabeca(pagina, titulo, descricao) {
  const url = SITE + (pagina === '/' ? '/' : pagina);
  return `<meta property="og:type" content="${pagina === '/' ? 'website' : 'article'}">
<meta property="og:site_name" content="FINAGRO">
<meta property="og:locale" content="pt_BR">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(titulo)}">
<meta property="og:description" content="${esc(descricao)}">
<meta property="og:image" content="${ENTIDADE.imagem}">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Painel do FINAGRO no computador e no celular, com o que entrou, saiu e sobrou no mês">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(titulo)}">
<meta name="twitter:description" content="${esc(descricao)}">
<meta name="twitter:image" content="${ENTIDADE.imagem}">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/icone-192.png" type="image/png" sizes="192x192">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">${pagina === '/' ? `\n<meta name="google-site-verification" content="${VERIFICACAO_GOOGLE}">` : ''}`;
}

// ---------- JSON-LD ----------
const ORG_ID = 'https://visionxma.com/#organizacao';
const APP_ID = `${SITE}/#app`;
const organizacao = { '@type': 'Organization', '@id': ORG_ID, name: 'VisionX', url: 'https://visionxma.com/', sameAs: ['https://www.instagram.com/visionx.dev/'] };
const site = { '@type': 'WebSite', '@id': `${SITE}/#site`, url: `${SITE}/`, name: 'FINAGRO', inLanguage: 'pt-BR', publisher: { '@id': ORG_ID } };
const app = {
  '@type': 'SoftwareApplication', '@id': APP_ID, name: 'FINAGRO', url: `${SITE}/`,
  description: ENTIDADE.frase, applicationCategory: 'BusinessApplication', applicationSubCategory: 'Gestão rural',
  operatingSystem: 'Android, navegador (iPhone, tablet e computador)', inLanguage: 'pt-BR',
  image: ENTIDADE.imagem, screenshot: `${SITE}/assets/telas/computador-painel.webp`,
  installUrl: ENTIDADE.android, downloadUrl: ENTIDADE.android, sameAs: [ENTIDADE.instagram, ENTIDADE.android],
  author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID },
  offers: [
    ...PLANOS.map((p) => ({ '@type': 'Offer', name: `Plano ${p.nome}`, price: p.mes.toFixed(2), priceCurrency: 'BRL', description: p.itens.slice(0, 3).join(', '), url: `${SITE}/#planos`, category: p.mes ? 'assinatura mensal' : 'grátis' })),
  ],
  featureList: ['Rebanho com ficha e lote', 'Vacinas e sanidade', 'Reprodução e parto previsto', 'Registro de GTA', 'Receitas, despesas e contas', 'Fluxo de caixa', 'Arquivo do LCDPR', 'Safras, talhões e caderno de campo', 'Área por GPS', 'Máquinas e estoque', 'Mão de obra e equipe', 'Cotação do boi (CONAB)', 'Simulador PRONAF', 'FINAGRO AI'],
};

function faqDaPagina(html) {
  const out = [];
  const re = /<details[^>]*>\s*<summary>([\s\S]*?)<\/summary>\s*<p>([\s\S]*?)<\/p>\s*<\/details>/g;
  let m; while ((m = re.exec(html))) out.push([semTags(m[1]), semTags(m[2])]);
  return out;
}

function jsonld(pagina, html, titulo, descricao) {
  const grafo = [organizacao];
  const lista = faqDaPagina(html);
  if (pagina === '/') {
    grafo.push(site, app);
  } else {
    const url = SITE + pagina;
    grafo.push(site);
    grafo.push({ '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'FINAGRO', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: titulo.replace(/\s*\|.*$/, ''), item: url } ] });
    grafo.push({ '@type': 'Article', '@id': `${url}#artigo`, headline: titulo.replace(/\s*\|.*$/, ''), description: descricao, inLanguage: 'pt-BR', url,
      mainEntityOfPage: url, datePublished: ATUALIZADO, dateModified: ATUALIZADO, image: ENTIDADE.imagem,
      author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID }, isPartOf: { '@id': `${SITE}/#site` }, about: { name: 'FINAGRO', url: `${SITE}/` } });
  }
  if (lista.length) grafo.push({ '@type': 'FAQPage', mainEntity: lista.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': grafo })}</script>`;
}

// ---------- páginas ----------
const arquivoDe = (c) => (c === '/' ? 'index.html' : `${c.slice(1)}.html`);
const textos = [];
for (const p of [...PAGINAS, { caminho: '/404' }]) {
  const arq = path.join(RAIZ, arquivoDe(p.caminho));
  if (!fs.existsSync(arq)) { console.log('falta', arq); continue; }
  let html = fs.readFileSync(arq, 'utf8');
  const titulo = semTags((html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '');
  const descricao = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  html = preencher(html, 'cabeca', cabeca(p.caminho, titulo, descricao));
  html = preencher(html, 'topo', topo());
  html = preencher(html, 'rodape', rodape());
  if (p.caminho === '/') { html = preencher(html, 'planos', planos()); html = preencher(html, 'faq', faq(PERGUNTAS)); }
  if (p.caminho !== '/404') html = preencher(html, 'jsonld', jsonld(p.caminho, html, titulo, descricao));
  fs.writeFileSync(arq, html);
  if (p.caminho !== '/404') {
    const corpo = (html.match(/<main[\s\S]*?<\/main>/) || [''])[0]
      .replace(/<(script|style|svg|figure|video)[\s\S]*?<\/\1>/g, ' ').replace(/<\/(h[1-4]|p|li|summary|tr)>/g, '\n').replace(/<br\s*\/?>/g, '\n');
    textos.push({ ...p, titulo, descricao, texto: semTags(corpo.replace(/\n/g, ' ¶ ')).replace(/ ?¶ ?/g, '\n').replace(/\n{2,}/g, '\n') });
  }
  console.log('ok', arquivoDe(p.caminho), titulo.length, 'car. no título,', descricao.length, 'na descrição');
}

// ---------- arquivos de busca e de IA ----------
fs.writeFileSync(path.join(RAIZ, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${PAGINAS.map((p) => `  <url><loc>${SITE}${p.caminho}</loc><lastmod>${ATUALIZADO}</lastmod>${p.caminho === '/' ? `<image:image><image:loc>${SITE}/assets/telas/computador-painel.webp</image:loc></image:image>` : ''}</url>`).join('\n')}
</urlset>
`);

const ROBOS = ['Googlebot', 'Googlebot-Image', 'Google-Extended', 'Bingbot', 'DuckDuckBot', 'YandexBot', 'Applebot', 'Applebot-Extended', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Perplexity-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'anthropic-ai', 'CCBot', 'Amazonbot', 'Bytespider', 'meta-externalagent', 'FacebookBot', 'LinkedInBot', 'Twitterbot', 'WhatsApp', 'cohere-ai', 'YouBot', 'Diffbot', 'PetalBot'];
fs.writeFileSync(path.join(RAIZ, 'robots.txt'), `# finagro.app: página de apresentação do FINAGRO. Busca e assistentes de IA são bem-vindos.
# O sistema (app.finagro.app) é outro endereço, com a área logada.
${ROBOS.map((r) => `User-agent: ${r}`).join('\n')}
Allow: /

User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${SITE}/sitemap.xml
`);

const reais = (v) => (v ? `R$ ${brl(v)} por mês` : 'grátis para sempre');
const llms = `# FINAGRO

> ${ENTIDADE.frase}

Site: ${SITE}/ · Sistema: ${ENTIDADE.app} · Android: ${ENTIDADE.android} · Desenvolvido pela VisionX (https://visionxma.com/). Atualizado em ${ATUALIZADO.split('-').reverse().join('/')}.

## O que faz
- Rebanho: animal com ficha (brinco, raça, peso, foto), lote de qualquer tamanho, vacinas e sanidade, reprodução com parto previsto, pesagem e GMD, registro de GTA com lembrete de vencimento.
- Dinheiro: receitas, despesas, contas a pagar e a receber, fluxo de caixa com saldo previsto, centro de custo, relatórios em PDF e CSV, arquivo do LCDPR no leiaute da Receita.
- Lavoura: safras, talhões, caderno de campo, custo por hectare, chuva do pluviômetro, colheita com o comprador.
- Campo e equipe: área por GPS, máquinas e manutenção, estoque de insumos, clima da fazenda, mão de obra, pessoas com papel e permissão.
- Mercado: cotação do boi gordo (CONAB), notícias do agro, marketplace de animais, simulador PRONAF/PRONAMP, assistente FINAGRO AI.
- O painel se monta pelo perfil da produção (gado de corte, leite, aves, suínos, peixes, abelhas, horta, grãos), com alertas da criação: vacina que trava a GTA, CBT do leite, oxigênio do tanque, vento para pulverizar.
- Lançamento sem sinal fica no aparelho e sobe quando a internet volta.

## O que não é
${ENTIDADE.naoE.map((n) => `- ${n}`).join('\n')}

## Preço (público, em reais)
${PLANOS.map((p) => `- ${p.nome}: ${reais(p.mes)}${p.ano ? ` ou R$ ${brl(p.ano)} por ano` : ''}. ${p.itens.slice(0, 3).join(', ')}.`).join('\n')}
- ${EMPRESARIAL.nome}: a partir de R$ ${brl(EMPRESARIAL.aPartirDe)} por mês, ${EMPRESARIAL.texto}.
- Planos pagos com ${TESTE_DIAS} dias para testar. Quem usa de graça tem 30% de folga acima do limite para não parar o serviço.

## Para quem
Produtor rural brasileiro de qualquer tamanho: do sítio com 12 vacas de leite à granja com 1 milhão de aves, pecuária de corte, piscicultura, apicultura, suinocultura, horta e grãos.

## Páginas
${PAGINAS.map((p) => `- [${p.titulo}](${SITE}${p.caminho}): ${p.resumo}`).join('\n')}

## Perguntas frequentes
${PERGUNTAS.map(([q, a]) => `### ${q}\n${a}`).join('\n\n')}
`;
fs.writeFileSync(path.join(RAIZ, 'llms.txt'), llms);
fs.writeFileSync(path.join(RAIZ, 'llms-full.txt'), `# FINAGRO: o site inteiro em texto\n\n> ${ENTIDADE.frase}\n\n` + textos.map((t) => `---\n\n## ${t.titulo}\nEndereço: ${SITE}${t.caminho}\n\n${t.texto}`).join('\n\n') + '\n');
fs.writeFileSync(path.join(RAIZ, `${INDEXNOW}.txt`), INDEXNOW);
fs.writeFileSync(path.join(RAIZ, 'site.webmanifest'), JSON.stringify({ name: 'FINAGRO', short_name: 'FINAGRO', lang: 'pt-BR', start_url: '/', display: 'browser', background_color: '#f7f6f0', theme_color: '#0c3321',
  icons: [{ src: '/icone-192.png', sizes: '192x192', type: 'image/png' }, { src: '/icone-512.png', sizes: '512x512', type: 'image/png' }] }, null, 1));
console.log('sitemap, robots, llms, llms-full, indexnow e manifest escritos');
