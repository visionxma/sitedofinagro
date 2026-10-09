// Gerador do site do FINAGRO (estático, sem dependência). Lê conteudo/site.mjs e:
//   1) preenche nos .html os blocos <!--gerado:X--> … <!--/gerado:X--> (cabeça, topo, rodapé, planos, perguntas, JSON-LD);
//   2) escreve sitemap.xml, robots.txt, llms.txt, llms-full.txt, site.webmanifest e a chave do IndexNow.
// Rodar a cada mudança de texto, preço ou página:  node scripts/gerar.mjs
import fs from 'node:fs';
import path from 'node:path';
import { SITE, ATUALIZADO, ENTIDADE, PLANOS, LIMITES, EMPRESARIAL, COMPLEMENTOS, TESTE_DIAS, PERGUNTAS, PAGINAS, brl } from '../conteudo/site.mjs';
import { montarGuias, GRUPOS, TIPOS } from './guias.mjs';

const RAIZ = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const INDEXNOW = 'f3b9c2a71d5e4c08a6b14e9d27c35f80';
const VERIFICACAO_GOOGLE = 'iM4u9wm9VkT-xBri38kmqy7Ebhc4J61DUfeEcjIdSIA';
// Código de posse do Bing Webmaster: é o da conta da VisionX (o mesmo que está em hotelgestao.com.br), vale para todo site dela.
const VERIFICACAO_BING = '5E69B07F43190E69D262B300A28AA2EC';
const ANO = 2026;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const semTags = (s) => s.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
const check = '<svg aria-hidden="true"><use href="#i-check"/></svg>';

// Guias (conteudo/guias/*.mjs): escreve as páginas e o índice /guias antes de preencher os blocos gerados.
const { indice: HUB, guias: GUIAS, todos: TODOS_GUIAS } = await montarGuias({ SITE, ATUALIZADO });
const TODAS = [...PAGINAS, HUB, ...GUIAS];
// O que vai na coluna "Guias" do rodapé: as páginas de quem está escolhendo um aplicativo e as mais procuradas.
const RODAPE_GUIAS = ['aplicativo-para-controle-de-gado', 'software-de-gestao-rural', 'planilha-de-controle-de-gado', 'calculadora-de-arroba', 'como-emitir-gta', 'controle-de-rebanho', 'fluxo-de-caixa-rural', 'caderno-de-campo']
  .map((s) => TODOS_GUIAS.get(s)).filter(Boolean).slice(0, 6);

function preencher(html, nome, conteudo) {
  const ab = `<!--gerado:${nome}-->`, fe = `<!--/gerado:${nome}-->`;
  const i = html.indexOf(ab);
  if (i < 0) return html;
  const j = html.indexOf(fe, i);
  const fim = j < 0 ? i + ab.length : j + fe.length;
  return html.slice(0, i) + ab + '\n' + conteudo + '\n' + fe + html.slice(fim);
}

// ---------- blocos ----------
const PLAY = ENTIDADE.android;
const svgMenu = '<svg data-abrir viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><svg data-fechar viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
const SECOES = [['/#funcionalidades', 'Funcionalidades'], ['/#beneficios', 'Benefícios'], ['/#como-funciona', 'Como funciona'], ['/#para-quem', 'Para quem'], ['/#perguntas', 'Dúvidas']];
const marca = (classe, w = 400, h = 139) => `<picture><source type="image/avif" srcset="/assets/marca/finagro-placa-240.avif 240w, /assets/marca/finagro-placa-400.avif 400w" sizes="120px"><img class="${classe}" src="/assets/marca/finagro-placa-400.webp" srcset="/assets/marca/finagro-placa-240.webp 240w, /assets/marca/finagro-placa-400.webp 400w" sizes="120px" width="${w}" height="${h}" alt="FINAGRO"></picture>`;
// Página inicial: o topo nasce estendido e transparente sobre a hero e vira cápsula no 1º movimento (script.js).
// Páginas internas: sem hero, nascem na cápsula (topo--fixo).
const topo = (inicio) => `<header class="topo${inicio ? '' : ' topo--flutua topo--fixo'}">
  <div class="topo__barra">
    <a class="topo__marca" href="/" aria-label="FINAGRO, página inicial">${marca('topo__logo')}</a>
    <nav class="topo__nav" aria-label="Seções da página">
      ${SECOES.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}
    </nav>
    <div class="topo__acoes">
      <a class="topo__entrar" href="${ENTIDADE.app}">Entrar</a>
      <a class="botao botao--cheio topo__baixar" href="${PLAY}">Baixar app</a>
      <button class="topo__menu" type="button" aria-expanded="false" aria-controls="topo-painel" aria-label="Abrir menu">${svgMenu}</button>
    </div>
    <nav class="topo__painel" id="topo-painel" aria-label="Menu" hidden>
      ${SECOES.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}
      <a href="${ENTIDADE.app}">Entrar no app</a>
      <a class="botao botao--cheio" href="${PLAY}">Baixar para Android</a>
    </nav>
  </div>
</header>`;

// X oficial da VisionX (~/.claude/marca-visionx/logos/oficial/vx-simbolo.svg), nunca um X genérico.
const VX = `<svg viewBox="1808.0 79.5 421.0 382.0" aria-hidden="true"><path fill="currentColor" transform="translate(1813.0,81.0)" d="M0 0 C18.5 -0.3 37 -0.5 55.5 -0.6 C64.1 -0.7 72.6 -0.8 81.2 -0.9 C88.7 -1 96.2 -1.1 103.7 -1.1 C107.6 -1.1 111.6 -1.2 115.6 -1.3 C119.3 -1.4 123 -1.4 126.8 -1.4 C128.8 -1.4 130.8 -1.4 132.8 -1.5 C138.3 -1.4 141.6 -1.3 145.8 2.6 C148.1 5.6 150.1 8.7 152 12 C153 13.5 154.1 15.1 155.1 16.6 C156.1 18.1 157.1 19.6 158.1 21.1 C164.9 31.4 171.8 41.6 178.7 51.8 C184 59.6 189.2 67.3 194.4 75.2 C194.8 75.8 195.3 76.4 195.7 77.1 C197.7 80.1 199.6 83 201.6 86 C202.3 87.1 203 88.1 203.7 89.2 C204.3 90.1 204.9 91 205.5 91.9 C207 94 207 94 209 95 C209.2 94.3 209.5 93.7 209.7 93 C211.4 89.2 213.5 85.9 215.8 82.5 C216.3 81.8 216.8 81.1 217.3 80.3 C218.9 77.9 220.5 75.5 222.1 73.1 C223.2 71.4 224.3 69.7 225.4 68 C227.8 64.5 230.1 60.9 232.4 57.4 C235.9 52.1 239.4 46.8 242.9 41.5 C243.5 40.6 244.1 39.8 244.6 38.9 C245.7 37.2 246.8 35.5 247.9 33.8 C251.9 27.9 255.8 21.9 259.7 15.9 C260.6 14.7 261.4 13.4 262.2 12.1 C263.4 10.4 264.5 8.7 265.6 7 C265.9 6.6 265.9 6.6 267.5 4.2 C269 2 269 2 271 0 C273.4 -0.2 273.4 -0.2 276.4 -0.2 C277.6 -0.2 278.8 -0.2 279.9 -0.2 C280.6 -0.2 280.6 -0.2 283.8 -0.2 C285.2 -0.2 286.5 -0.2 287.9 -0.2 C291.5 -0.2 295.2 -0.2 298.9 -0.2 C302.7 -0.2 306.5 -0.2 310.4 -0.2 C317.6 -0.2 324.9 -0.2 332.2 -0.1 C340.4 -0.1 348.7 -0.1 357 -0.1 C374 -0.1 391 -0 408 0 C403.6 7.7 403.6 7.7 401.2 11 C401 11.3 401 11.3 399.7 13.1 C399.2 13.8 398.6 14.6 398.1 15.3 C396.9 16.9 395.7 18.5 394.6 20.1 C394 20.9 393.4 21.7 392.8 22.6 C389.9 26.4 387.1 30.3 384.3 34.2 C383.8 35 383.2 35.8 382.7 36.5 C379 41.6 375.4 46.6 371.8 51.7 C367.8 57.2 363.8 62.8 359.8 68.3 C356.5 72.9 353.3 77.4 350 82 C345.6 88.1 341.2 94.2 336.8 100.3 C333.5 104.9 330.3 109.4 327 114 C322.6 120.1 318.2 126.2 313.8 132.3 C310.5 136.9 307.3 141.4 304 146 C300.7 150.6 297.4 155.2 294.1 159.8 C293 161.4 291.8 162.9 290.7 164.5 C288.3 167.8 285.9 171.2 283.4 174.4 C282.6 175.4 281.9 176.3 281.1 177.3 C280.5 178.1 279.9 178.9 279.2 179.7 C278 182 278 182 278.1 184.6 C279.1 187.1 280 188.7 281.8 190.8 C285.3 195 288.5 199.4 291.6 203.9 C295.9 210 300.2 216 304.5 222 C309.2 228.5 313.9 235 318.5 241.6 C322.1 246.8 325.8 251.9 329.5 257 C334.2 263.5 338.9 270 343.5 276.6 C347.1 281.8 350.8 286.9 354.5 292 C359.2 298.5 363.9 305 368.5 311.6 C372.1 316.8 375.8 321.9 379.5 327 C383.7 332.8 387.9 338.6 392 344.5 C397.3 352 402.7 359.5 408.1 367 C408.6 367.6 409.1 368.3 409.6 369 C410.5 370.4 411.5 371.7 412.5 373 C416 377.8 416 377.8 416 380 C397.2 380.1 378.3 380.2 359.5 380.2 C350.7 380.2 342 380.3 333.3 380.3 C325.6 380.3 318 380.4 310.4 380.4 C306.3 380.4 302.3 380.4 298.3 380.4 C294.5 380.5 290.7 380.5 286.9 380.5 C285.5 380.5 284.1 380.5 282.7 380.5 C280.8 380.5 278.9 380.5 277 380.5 C275.9 380.5 274.9 380.5 273.8 380.5 C270.3 379.9 269.2 378.7 267 376 C265.5 373.7 264.1 371.5 262.7 369.2 C258.4 362.2 254 355.4 249.6 348.6 C248.9 347.6 248.3 346.6 247.6 345.6 C246.3 343.6 245.1 341.7 243.8 339.7 C241.3 335.9 238.8 332 236.2 328.1 C235.8 327.4 235.4 326.8 234.9 326.1 C234.1 324.7 233.2 323.4 232.3 322 C229.6 317.8 226.9 313.6 224.1 309.4 C221.8 305.7 219.4 302 217 298.4 C216.5 297.6 216 296.8 215.5 296.1 C214.6 294.6 213.6 293.2 212.7 291.7 C210.2 287.8 207.6 283.9 205 280 C202.4 283.2 200 286.4 197.7 289.9 C197.1 290.8 196.5 291.7 195.9 292.7 C195.2 293.7 194.6 294.7 193.9 295.7 C193.3 296.7 192.6 297.7 191.9 298.8 C187.5 305.5 183.3 312.3 179.1 319.2 C173.8 328 168.3 336.6 162.7 345.3 C160 349.6 157.3 353.9 154.6 358.2 C153.6 359.7 152.6 361.3 151.6 362.8 C150 365.4 148.4 368 146.8 370.6 C146.1 371.5 145.5 372.5 144.9 373.6 C144.4 374.4 143.8 375.2 143.3 376.1 C142 378 142 378 140 380 C137.5 380.2 137.5 380.2 134.3 380.2 C133 380.2 131.8 380.2 130.5 380.2 C129.2 380.2 127.8 380.2 126.5 380.2 C125 380.2 123.6 380.2 122.2 380.2 C118.3 380.2 114.4 380.2 110.5 380.2 C106.5 380.2 102.4 380.2 98.3 380.2 C90.7 380.2 83 380.2 75.3 380.1 C66.5 380.1 57.8 380.1 49 380.1 C31 380.1 13 380 -5 380 C-3.7 377.4 -2.3 374.9 -0.6 372.5 C-0.2 371.9 0.3 371.2 0.8 370.5 C1.3 369.8 1.8 369.1 2.3 368.4 C2.8 367.6 3.4 366.9 3.9 366.1 C8.3 360 12.7 353.8 17.1 347.7 C20.8 342.7 24.4 337.6 28 332.5 C32.7 325.9 37.4 319.3 42.1 312.7 C45.8 307.7 49.4 302.6 53 297.5 C59.8 287.8 66.7 278.3 73.6 268.7 C80 260 86.3 251.2 92.5 242.4 C96.6 236.5 100.9 230.6 105.1 224.7 C109.4 218.8 113.6 212.9 117.8 206.9 C120 203.8 122.2 200.7 124.6 197.7 C125.3 196.7 126 195.7 126.8 194.8 C127.5 193.9 128.1 193.1 128.8 192.3 C130.4 189.3 129.9 188.2 129 185 C127.9 183 127.9 183 126.5 181 C126 180.2 125.5 179.5 125 178.7 C124.4 177.9 123.8 177.1 123.2 176.3 C122.7 175.5 122.1 174.6 121.5 173.8 C117.1 167.5 112.6 161.3 108.1 155.1 C102.9 147.9 97.9 140.7 92.9 133.5 C87.4 125.6 82 117.8 76.4 110 C74 106.5 71.5 103 69 99.5 C66 95.3 63 91.1 60.1 86.9 C54.1 78.4 48.1 69.9 42.2 61.4 C37 54 31.7 46.5 26.5 39.1 C25 37 23.5 34.9 22 32.8 C21.5 32.1 21 31.4 20.5 30.6 C19.5 29.2 18.5 27.8 17.5 26.4 C14.9 22.7 12.3 19 9.6 15.3 C9.1 14.5 8.5 13.7 7.9 12.9 C6.9 11.4 5.8 9.9 4.7 8.4 C4.3 7.8 3.8 7.1 3.3 6.4 C2.9 5.8 2.5 5.2 2 4.6 C1 3 1 3 0 0 Z "/></svg>`;
const rodape = () => `<footer class="rodape">
  <div class="casca">
    <div class="rodape__grade">
      <div class="rodape__marca">
        ${marca('rodape__logo')}
        <p>Gestão rural na palma da mão: rebanho, lavoura, dinheiro e equipe da fazenda num app só, no celular e no computador.</p>
      </div>
      <div><h2>O app</h2><ul>
        ${SECOES.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}
        <li><a href="/gestao-da-pecuaria-de-corte">Para gado de corte</a></li>
        <li><a href="${ENTIDADE.app}">Entrar no app</a></li><li><a href="${PLAY}">App para Android</a></li>
      </ul></div>
      <div><h2>Guias</h2><ul>
        ${RODAPE_GUIAS.map((g) => `<li><a href="/${g.slug}">${esc(g.curto)}</a></li>`).join('')}
        <li><a href="/guias">Todos os guias e calculadoras</a></li>
      </ul></div>
      <div><h2>Contato</h2><ul>
        <li><a href="${ENTIDADE.instagram}" rel="me">Instagram @finagro.app</a></li>
        <li><a href="${ENTIDADE.linkedin}" rel="me">LinkedIn</a></li>
        <li><a href="https://www.instagram.com/visionx.dev/">Instagram @visionx.dev</a></li>
        <li><a href="${ENTIDADE.privacidade}">Política de privacidade</a></li>
        <li><a href="/llms.txt">Resumo para IA (llms.txt)</a></li>
      </ul></div>
    </div>
    <div class="rodape__base">
      <p>© ${ANO} FINAGRO. Todos os direitos reservados.</p>
      <a class="assinatura" href="https://visionxma.com/" rel="noopener">${VX}<span>© ${ANO} VisionX · Todos os direitos reservados.</span></a>
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

function cabeca(pagina, titulo, descricao, vitrine = false) {
  const url = SITE + (pagina === '/' ? '/' : pagina);
  return `<meta property="og:type" content="${pagina === '/' || vitrine ? 'website' : 'article'}">
<meta property="og:site_name" content="FINAGRO">
<meta property="og:locale" content="pt_BR">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(titulo)}">
<meta property="og:description" content="${esc(descricao)}">
<meta property="og:image" content="${ENTIDADE.imagem}">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:image:alt" content="O FINAGRO no celular sobre o pasto: sua fazenda na palma da mão">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(titulo)}">
<meta name="twitter:description" content="${esc(descricao)}">
<meta name="twitter:image" content="${ENTIDADE.imagem}">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" href="/icone-192.png" type="image/png" sizes="192x192">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">${pagina === '/' ? `\n<meta name="google-site-verification" content="${VERIFICACAO_GOOGLE}">\n<meta name="msvalidate.01" content="${VERIFICACAO_BING}">` : ''}
<link rel="alternate" type="application/atom+xml" title="Guias do FINAGRO" href="/guias.xml">
<script src="/assets/medir.js" defer></script>`;
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
  image: ENTIDADE.imagem, screenshot: `${SITE}/assets/telas/inicio-824.webp`,
  installUrl: ENTIDADE.android, downloadUrl: ENTIDADE.android, sameAs: [ENTIDADE.instagram, ENTIDADE.linkedin, ENTIDADE.android],
  author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID },
  offers: [
    ...PLANOS.filter((p) => !p.mes).map((p) => ({ '@type': 'Offer', name: `Plano ${p.nome}`, price: '0.00', priceCurrency: 'BRL', description: p.itens.slice(0, 3).join(', '), url: `${SITE}/#comecar`, category: 'grátis' })),
  ],
  featureList: ['Rebanho com ficha e lote', 'Vacinas e sanidade', 'Reprodução e parto previsto', 'Registro de GTA', 'Receitas, despesas e contas', 'Fluxo de caixa', 'Arquivo do LCDPR', 'Safras, talhões e caderno de campo', 'Área por GPS', 'Máquinas e estoque', 'Mão de obra e equipe', 'Cotação do boi (CONAB)', 'Simulador PRONAF', 'FINAGRO AI'],
};

// Cartão "veja o que cabe no grátis" da página de captação: os limites saem do catálogo, sem preço
// (o site não mostra tabela de preço enquanto a cobrança do app está desligada).
function capPlanos() {
  const planos = PLANOS.map((p) => { const [fazendas, pessoas, animais] = LIMITES[p.id]; return { id: p.id, nome: p.nome, fazendas, pessoas, animais: Number.isFinite(animais) ? animais : null }; });
  return `<script type="application/json" id="cap-planos">${JSON.stringify({ planos })}</script>`;
}

function faqDaPagina(html) {
  const out = [];
  const re = /<details[^>]*>\s*<summary>([\s\S]*?)<\/summary>\s*<p>([\s\S]*?)<\/p>\s*<\/details>/g;
  let m; while ((m = re.exec(html))) out.push([semTags(m[1]), semTags(m[2])]);
  return out;
}

function jsonld(p, html, titulo, descricao) {
  const pagina = p.caminho;
  const grafo = [organizacao];
  const lista = faqDaPagina(html);
  // A pergunta e a resposta do topo dos guias também são pergunta e resposta à vista na página.
  const topo = html.match(/<h2 class="resposta__pergunta">([\s\S]*?)<\/h2><p>([\s\S]*?)<\/p>/);
  if (topo) lista.unshift([semTags(topo[1]), semTags(topo[2])]);
  if (pagina === '/') {
    grafo.push(site, app);
  } else if (p.captacao) {
    const url = SITE + pagina;
    grafo.push(site, app);
    grafo.push({ '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'FINAGRO', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: titulo.replace(/\s*\|.*$/, ''), item: url } ] });
    grafo.push({ '@type': 'WebPage', '@id': `${url}#pagina`, url, name: titulo.replace(/\s*\|.*$/, ''), description: descricao, inLanguage: 'pt-BR',
      isPartOf: { '@id': `${SITE}/#site` }, about: { '@id': APP_ID }, mainEntity: { '@id': APP_ID }, dateModified: p.atualizado || ATUALIZADO, primaryImageOfPage: ENTIDADE.imagem, publisher: { '@id': ORG_ID } });
  } else if (p.hub) {
    const url = SITE + pagina;
    grafo.push(site);
    grafo.push({ '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'FINAGRO', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Guias', item: url } ] });
    grafo.push({ '@type': 'CollectionPage', '@id': `${url}#colecao`, url, name: titulo.replace(/\s*\|.*$/, ''), description: descricao, inLanguage: 'pt-BR', isPartOf: { '@id': `${SITE}/#site` }, dateModified: ATUALIZADO,
      mainEntity: { '@type': 'ItemList', numberOfItems: TODOS_GUIAS.size, itemListElement: [...TODOS_GUIAS.values()].map((g, k) => ({ '@type': 'ListItem', position: k + 1, name: g.curto, url: `${SITE}/${g.slug}` })) } });
  } else {
    const url = SITE + pagina;
    const nome = titulo.replace(/\s*\|.*$/, '');
    const data = p.atualizado || ATUALIZADO;
    grafo.push(site);
    grafo.push({ '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'FINAGRO', item: `${SITE}/` },
      ...(p.guia ? [{ '@type': 'ListItem', position: 2, name: 'Guias', item: `${SITE}/guias` }] : []),
      { '@type': 'ListItem', position: p.guia ? 3 : 2, name: p.guia ? p.curto : nome, item: url } ] });
    grafo.push({ '@type': 'Article', '@id': `${url}#artigo`, headline: nome, description: descricao, inLanguage: 'pt-BR', url,
      mainEntityOfPage: url, datePublished: p.guia ? data : ATUALIZADO, dateModified: data, image: ENTIDADE.imagem,
      ...(p.guia ? { articleSection: GRUPOS[p.grupo][0] } : {}),
      author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID }, isPartOf: { '@id': `${SITE}/#site` }, about: { name: 'FINAGRO', url: `${SITE}/` } });
    // A página da entidade é de onde buscador e assistente tiram o que o FINAGRO é e quanto custa.
    if (pagina === '/o-que-e-o-finagro') grafo.push(app);
    // Calculadora de uso livre na página: aplicação da web, gratuita.
    if (p.tipo === 'calculadora') grafo.push({ '@type': 'WebApplication', '@id': `${url}#calculadora`, name: p.curto, url, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Qualquer navegador', inLanguage: 'pt-BR',
      isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0.00', priceCurrency: 'BRL' }, publisher: { '@id': ORG_ID } });
  }
  if (lista.length) grafo.push({ '@type': 'FAQPage', mainEntity: lista.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': grafo })}</script>`;
}

// ---------- páginas ----------
const arquivoDe = (c) => (c === '/' ? 'index.html' : `${c.slice(1)}.html`);
const textos = [];
const longos = [];
for (const p of [...TODAS, { caminho: '/404' }]) {
  const arq = path.join(RAIZ, arquivoDe(p.caminho));
  if (!fs.existsSync(arq)) { console.log('falta', arq); continue; }
  let html = fs.readFileSync(arq, 'utf8');
  const titulo = semTags((html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '');
  const descricao = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '';
  html = preencher(html, 'cabeca', cabeca(p.caminho, titulo, descricao, p.captacao));
  html = preencher(html, 'topo', topo(p.caminho === '/' || p.heroi));
  if (p.captacao) html = preencher(html, 'cap-planos', capPlanos());
  html = preencher(html, 'rodape', rodape());
  if (p.caminho === '/') html = preencher(html, 'faq', faq(PERGUNTAS));
  if (p.caminho !== '/404') html = preencher(html, 'jsonld', jsonld(p, html, titulo, descricao));
  if (p.caminho !== '/404' && (titulo.length > 62 || descricao.length < 110 || descricao.length > 162)) longos.push(`${p.caminho}: título ${titulo.length}, descrição ${descricao.length}`);
  fs.writeFileSync(arq, html);
  if (p.caminho !== '/404') {
    const corpo = (html.match(/<main[\s\S]*?<\/main>/) || [''])[0]
      .replace(/<(script|style|svg|figure|video)[\s\S]*?<\/\1>/g, ' ').replace(/<\/(h[1-4]|p|li|summary|tr)>/g, '\n').replace(/<br\s*\/?>/g, '\n');
    textos.push({ ...p, titulo, descricao, texto: semTags(corpo.replace(/\n/g, ' ¶ ')).replace(/ ?¶ ?/g, '\n').replace(/\n{2,}/g, '\n') });
  }
}
console.log(`${TODAS.length} páginas montadas (${GUIAS.length} guias de conteudo/guias)`);
if (longos.length) console.log('fora do tamanho (título até 62, descrição 110 a 162):\n  ' + longos.join('\n  '));

// ---------- arquivos de busca e de IA ----------
fs.writeFileSync(path.join(RAIZ, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${TODAS.map((p) => `  <url><loc>${SITE}${p.caminho}</loc><lastmod>${p.atualizado || ATUALIZADO}</lastmod>${p.caminho === '/' ? `<image:image><image:loc>${SITE}/assets/telas/inicio-824.webp</image:loc></image:image>` : ''}</url>`).join('\n')}
</urlset>
`);

const ROBOS = ['Googlebot', 'Googlebot-Image', 'Google-Extended', 'Bingbot', 'DuckDuckBot', 'YandexBot', 'Applebot', 'Applebot-Extended', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Perplexity-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'anthropic-ai', 'CCBot', 'Amazonbot', 'Bytespider', 'meta-externalagent', 'FacebookBot', 'LinkedInBot', 'Twitterbot', 'WhatsApp', 'cohere-ai', 'YouBot', 'Diffbot', 'PetalBot', 'ImagesiftBot', 'Timpibot',
  // outros buscadores e assistentes: Yahoo, Baidu, Naver, Seznam, Mojeek, Qwant, Brave, Kagi, DuckDuckGo (respostas), Mistral, Meta, Vertex, Phind
  'Slurp', 'Baiduspider', 'Yeti', 'SeznamBot', 'MojeekBot', 'Qwantbot', 'Bravebot', 'Kagibot', 'DuckAssistBot', 'MistralAI-User', 'Meta-ExternalFetcher', 'Google-CloudVertexBot', 'AI2Bot', 'PhindBot'];
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

Site: ${SITE}/ · Sistema: ${ENTIDADE.app} · Android: ${ENTIDADE.android} · LinkedIn: ${ENTIDADE.linkedin} · Desenvolvido pela VisionX (https://visionxma.com/). Atualizado em ${ATUALIZADO.split('-').reverse().join('/')}.

## O que faz
- Rebanho: animal com ficha (brinco, raça, peso, foto), lote de qualquer tamanho, vacinas e sanidade, reprodução com parto previsto, pesagem e GMD, registro de GTA com lembrete de vencimento.
- Dinheiro: receitas, despesas, contas a pagar e a receber, fluxo de caixa com saldo previsto, centro de custo, relatórios em PDF e CSV, arquivo do LCDPR no leiaute da Receita.
- Lavoura: safras, talhões, caderno de campo, custo por hectare, chuva do pluviômetro, colheita com o comprador.
- Campo e equipe: área por GPS, máquinas e manutenção, estoque de insumos, clima da fazenda, mão de obra, pessoas com papel e permissão.
- Mercado: cotação do boi gordo (CONAB), notícias do agro, marketplace de animais, simulador de crédito do Pronaf (com taxas de referência, não é proposta de banco), assistente FINAGRO AI.
- O painel se monta pelo perfil da produção (gado de corte, leite, aves, suínos, peixes, abelhas, horta, grãos), com alertas da criação: vacina que trava a GTA, CBT do leite, oxigênio do tanque, vento para pulverizar.
- Lançamento sem sinal fica no aparelho e sobe quando a internet volta.

## O que não é
${ENTIDADE.naoE.map((n) => `- ${n}`).join('\n')}

## Preço (público, em reais)
${PLANOS.map((p) => `- ${p.nome}: ${reais(p.mes)}${p.ano ? ` ou R$ ${brl(p.ano)} por ano` : ''}. ${p.itens.slice(0, 3).join(', ')}.`).join('\n')}
- ${EMPRESARIAL.nome}: a partir de R$ ${brl(EMPRESARIAL.aPartirDe)} por mês, ${EMPRESARIAL.texto}.

## Para quem
Produtor rural brasileiro de qualquer tamanho: do sítio com 12 vacas de leite à granja com 1 milhão de aves, pecuária de corte, piscicultura, apicultura, suinocultura, horta e grãos.

## Páginas
${[...PAGINAS, HUB].map((p) => `- [${p.titulo}](${SITE}${p.caminho}): ${p.resumo}`).join('\n')}
${Object.entries(GRUPOS).filter(([k]) => GUIAS.some((g) => g.grupo === k)).map(([k, [nome]]) => `
### ${nome}
${GUIAS.filter((g) => g.grupo === k).map((g) => `- [${g.titulo}](${SITE}${g.caminho}) (${TIPOS[g.tipo].toLowerCase()}): ${g.resumo}`).join('\n')}`).join('\n')}

## Perguntas frequentes
${PERGUNTAS.map(([q, a]) => `### ${q}\n${a}`).join('\n\n')}
`;
fs.writeFileSync(path.join(RAIZ, 'llms.txt'), llms);
fs.writeFileSync(path.join(RAIZ, 'llms-full.txt'), `# FINAGRO: o site inteiro em texto\n\n> ${ENTIDADE.frase}\n\n` + textos.map((t) => `---\n\n## ${t.titulo}\nEndereço: ${SITE}${t.caminho}\n\n${t.texto}`).join('\n\n') + '\n');
fs.writeFileSync(path.join(RAIZ, `${INDEXNOW}.txt`), INDEXNOW);
// Segundo caminho de posse no Bing Webmaster (o primeiro é a marca msvalidate.01 na página inicial).
fs.writeFileSync(path.join(RAIZ, 'BingSiteAuth.xml'), `<?xml version="1.0"?>\n<users>\n\t<user>${VERIFICACAO_BING}</user>\n</users>\n`);
fs.writeFileSync(path.join(RAIZ, 'site.webmanifest'), JSON.stringify({ name: 'FINAGRO', short_name: 'FINAGRO', lang: 'pt-BR', start_url: '/', display: 'browser', background_color: '#f6f7f4', theme_color: '#014b00',
  icons: [{ src: '/icone-192.png', sizes: '192x192', type: 'image/png' }, { src: '/icone-512.png', sizes: '512x512', type: 'image/png' }] }, null, 1));
console.log('sitemap, robots, llms, llms-full, indexnow e manifest escritos');

// ---------- alimentador (Atom) dos guias: leitores, agregadores e rastreadores acham página nova sem esperar o mapa ----------
const xml = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
fs.writeFileSync(path.join(RAIZ, 'guias.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="pt-BR">
  <title>FINAGRO: guias, calculadoras e modelos do produtor rural</title>
  <subtitle>Páginas gratuitas do FINAGRO, com a fonte oficial de cada regra.</subtitle>
  <id>${SITE}/guias</id>
  <link href="${SITE}/guias"/>
  <link rel="self" type="application/atom+xml" href="${SITE}/guias.xml"/>
  <updated>${ATUALIZADO}T12:00:00-03:00</updated>
  <author><name>FINAGRO</name><uri>${SITE}/</uri></author>
${GUIAS.map((g) => `  <entry><title>${xml(g.titulo)}</title><link href="${SITE}${g.caminho}"/><id>${SITE}${g.caminho}</id><updated>${g.atualizado}T12:00:00-03:00</updated><category term="${xml(GRUPOS[g.grupo][0])}"/><summary>${xml(g.resumo)}</summary></entry>`).join('\n')}
</feed>
`);

// ---------- portão de links internos: nenhuma página aponta para o que não existe ----------
// `node scripts/gerar.mjs --estrito` sai com erro se houver link quebrado (é o que roda antes de publicar).
const existe = (c) => c === '/' || fs.existsSync(path.join(RAIZ, c.replace(/^\//, '') + '.html')) || fs.existsSync(path.join(RAIZ, c.replace(/^\//, '')));
const quebrados = [];
for (const p of TODAS) {
  const html = fs.readFileSync(path.join(RAIZ, arquivoDe(p.caminho)), 'utf8');
  for (const m of html.matchAll(/href="(\/[^"#?]*)(?:[#?][^"]*)?"/g)) {
    const alvo = m[1].replace(/\/$/, '') || '/';
    if (!existe(alvo)) quebrados.push(`${p.caminho} -> ${alvo}`);
  }
}
if (quebrados.length) {
  console.log(`LINKS QUEBRADOS (${quebrados.length}):\n  ` + [...new Set(quebrados)].join('\n  '));
  if (process.argv.includes('--estrito')) process.exit(1);
} else console.log('links internos: todos existem');
