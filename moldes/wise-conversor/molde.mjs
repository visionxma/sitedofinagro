// Molde wise-conversor (02/11/2026): /quantos-metros-tem-um-hectare clonada da página RENDERIZADA de
// https://wise.com/br/currency-converter/ (captura em captura/, regra `rota-de-seo-e-clone-de-lp-diferente`).
// A estrutura de cada seção é a da Wise, 1:1, com as classes da origem e o CSS dela escopado em .mx-wise-conversor;
// trocam a marca, as cores (papel por papel), a família de letra, o texto e a mídia. Cabeçalho e rodapé são os do site.
//
// desenho(c) serve aos dois modos com a MESMA marcação:
//   - origem: c = os textos e a mídia da Wise (origem.mjs); é o que a prova fotografa contra captura/ref-<L>.png;
//   - vestido: c = o guia do FINAGRO (vestir(kit)); é o que vai ao ar.
// Cada seção leva data-mx-secao com o índice da seção na captura (0,1,2,4,5,6,7; a 3 da Wise era vazia).
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const AQUI = path.dirname(new URL(import.meta.url).pathname);
const ICONES = JSON.parse(fs.readFileSync(path.join(AQUI, 'ativos', 'icones.json'), 'utf8'));
export const meta = { id: 'wise-conversor', referencia: 'https://wise.com/br/currency-converter/', secoes: [0, 1, 2, 4, 5, 6, 7] };

// Ícones próprios no mesmo traço dos da Wise (24 px, preenchimento sólido).
const svg = (d, extra = '') => `<svg aria-hidden="true" focusable="false" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"${extra}>${d}</svg>`;
const PROPRIOS = {
  vezes: svg('<path d="M6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4 6.4 19 5 17.6 10.6 12 5 6.4z"/>'),
  pino: svg('<path fill-rule="evenodd" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7m0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"/>'),
  camadas: svg('<path d="M12 2 1.5 7.5 12 13l10.5-5.5zM3.7 11.3 1.5 12.5 12 18l10.5-5.5-2.2-1.2L12 15.7z"/><path d="M3.7 15.8 1.5 17 12 22.5 22.5 17l-2.2-1.2L12 20.2z"/>'),
  esquadro: svg('<path fill-rule="evenodd" d="M3 21V3l18 18zm2-2h11.2L5 7.8z"/>'),
  documento: svg('<path fill-rule="evenodd" d="M5 2h9.4L20 7.6V22H5zm2 2v16h11V9h-5V4zm2 9h7v2H9zm0 4h7v2H9z"/>'),
  livro: svg('<path fill-rule="evenodd" d="M3 4h6.5c1 0 1.9.4 2.5 1.1.6-.7 1.5-1.1 2.5-1.1H21v15h-6.5c-.8 0-1.5.7-1.5 1.5h-2c0-.8-.7-1.5-1.5-1.5H3zm2 2v11h4.5c.5 0 1 .1 1.5.3V7.5c0-.8-.7-1.5-1.5-1.5zm8 11.3c.5-.2 1-.3 1.5-.3H19V6h-4.5c-.8 0-1.5.7-1.5 1.5z"/>'),
  area: svg('<path fill-rule="evenodd" d="M3 3h18v18H3zm2 2v14h14V5zm2 2h4v2H9v2H7zm10 10h-4v-2h2v-2h2z"/>'),
};
export const ic = (n) => `<span class="tw-icon tw-icon-${n}" aria-hidden="true">${ICONES[n] || PROPRIOS[n] || ''}</span>`;
const avatar = (miolo) => `<div class="mw-bullet-points__icon"><div class="tw-avatar tw-avatar--56 tw-avatar--icon"><div class="tw-avatar__content">${miolo}</div></div></div>`;
const botao = (b, prio = 1, extra = '') => `<a class="btn btn-md np-btn np-btn-md btn-accent btn-priority-${prio}${extra}" href="${b.href}">${b.texto}</a>`;

// ---------- a marcação da Wise, seção por seção ----------
function feature(c, secao, classeSecao, modificadores) {
  const lista = c.ordenada ? 'ol' : 'ul';
  return `<section data-mx-secao="${secao}"><div class="np-theme-personal">${secao === 2 ? '<div class="np-theme-personal">' : ''}<section class="${classeSecao} mw-container"><div class="mw-feature ${modificadores} has-bullet-points"><div class="wrapper"><div class="mw-feature__content">${c.titulo}${c.sub ? `<p class="mw-feature__subtitle mw-body-1 m-b-0">${c.sub}</p>` : ''}<div class="mw-bullet-points mw-feature__bulletpoints"><${lista} class="mw-cluster-1 mw-gap-6 mw-gap-md-4 mw-feature__bulletpoints">${c.itens.map((i) => `<li class="mw-bullet-points__item">${avatar(i.icone)}<div class="">${i.titulo ? `<h3 class="mw-body mw-body-2-bold mw-bullet-points__title mw-body-2-bold">${i.titulo}</h3>` : ''}<p class="mw-body mw-body-2 mw-m-b-0">${i.texto}</p></div></li>`).join('')}</${lista}></div>${c.depois || ''}${c.ctas ? `<div class="cta-section mw-feature__cta"><div class="mw-cta-set mw-gap-3 mw-feature__cta">${c.ctas.map((b, k) => botao(b, k ? 3 : 1, ' mw-cta')).join('')}</div></div>` : ''}${c.qr ? `<div class="mw-qr-container d-flex flex-row mw-p-x-4 mw-p-y-2 align-items-center hidden-xs mw-m-r-4"><div class="np-text-body-large-bold mw-m-r-3">${c.qr.texto}</div><div class="mw-qr-wrapper">${c.qr.imagem}</div></div>` : ''}</div><div class="mw-feature__media">${c.midia}</div></div></div></section>${secao === 2 ? '</div>' : ''}</div></section>`;
}

export function desenho(c) {
  const k = c.s1;
  const campo = (f) => `<div><label for="${f.para}" class="_ccLabelHeader_lbutx_10">${f.rotulo}</label><fieldset class="tw-money-input input-group input-group-lg">${f.entrada}<div translate="no" class="input-group-btn amount-currency-select-btn"><fieldset class="np-input-group"><${f.seletor ? 'button type="button"' : 'span'} class="form-control np-form-control np-form-control--size-lg np-button-input${f.seletor ? '' : ' mx-unidade'}"${f.seletor ? ' style="padding-inline-end: 44px;"' : ''}><span class="np-select-input-content"><div class="np-select-input-option-content-container">${f.bandeira ? `<div class="np-select-input-option-content-icon">${f.bandeira}</div>` : ''}<div class="np-select-input-option-content-text"><div class="np-select-input-option-content-text-line-1 np-select-input-option-content-text-within-trigger"><div class="d-inline"><span>${f.unidade}</span></div></div></div></div></span></${f.seletor ? 'button' : 'span'}>${f.seletor ? `<span class="np-input-addon np-input-addon--placement-end np-input-addon--padding-sm"><span class="np-select-input-addon-container"><span class="np-select-input-addon">${ic('chevron-down')}</span></span></span>` : ''}</fieldset></div></fieldset></div>`;
  const s5 = c.s5;
  // A Wise pinta o topo pelo tema do <html> (np-theme-personal--forest-green); no molde o tema mora no invólucro do herói.
  return `<div class="mx-heroi np-theme-personal np-theme-personal--forest-green">
<section class="_section__calculator_glqe0_17 section p-b-0 seo-bg-primary" data-mx-secao="0"><div><div class="cc__header cc__header-spacing"><div class="container text-xs-center">${c.s0.antes || ''}<h1 class="mw-display-2 m-b-5">${c.s0.h1}</h1><div class="mw-row"><div class="mw-col-md-8 mw-col-md-offset-2 mw-col-lg-8 mw-col-lg-offset-2">${c.s0.sub}</div></div>${c.s0.depois || ''}</div></div></div><div class="np-theme-personal"><div class="_container_dnfq8_1"></div></div></section>
<div class="np-theme-personal" data-mx-secao="1"><div class="_calculatorBackground_38vov_1"><div><div class="m-t-2 container container-full--max-md p-b-5 js-Calculator _calculatorCard_lbutx_98" id="${k.id || 'calculator'}"><div class="_cardShadow_lbutx_199"><div class="tapestry-wrapper"><div class="bg-tapestry-3"></div><div class="preset--light"><div class="tapestry-card-content"><div class="np-theme-personal"><div class="_ccConverter_lbutx_1"${k.atributos || ''}><div class="m-b-3"><div class="_ccCalculator_lbutx_15"><div class="_midMarketRateContainer_lbutx_129"><div class="d-inline-flex align-items-center">${k.taxa}</div><div class="_midMarketRateAmount_lbutx_138"><span class="dot-success animate-blink d-inline-block"></span>${k.valor}</div></div></div></div><div class="_ccCalculator_lbutx_15">${campo(k.campos[0])}<div class="_ccCalculator__reverseIconContainer_lbutx_1">${k.troca}</div>${campo(k.campos[1])}</div>${k.meio || ''}<div class="m-t-2"><a class="btn btn-md np-btn np-btn-md btn-block np-btn-block btn-accent btn-priority-1" href="${k.botoes[0].href}">${k.botoes[0].texto}</a><a class="btn btn-md np-btn np-btn-md btn-block np-btn-block btn-accent btn-priority-2 m-t-1" href="${k.botoes[1].href}">${k.botoes[1].texto}</a></div>${k.depois || ''}</div></div></div></div></div></div></div></div></div></div>
</div>
${feature(c.s2, 2, '_manageAccountSection_bhkwb_1', 'mw-feature--portrait mw-feature--contentFirst mw-feature--mediaFirst-mobile')}
${feature(c.s4, 4, '_downloadAppSection_195n4_1', 'mw-feature--portrait mw-feature--mediaFirst mw-feature--contentFirst-mobile')}
<div data-mx-secao="5"><div class="np-theme-personal"><section class="section bg-light"><div class="container"><div class="text-xs-center m-b-5">${s5.grafico.titulo}<div class="mw-row m-b-5"><p class="mw-col-md-8 m-x-auto">${s5.grafico.texto}</p></div>${s5.grafico.botao ? `<a class="btn btn-md np-btn np-btn-md btn-accent btn-priority-1" href="${s5.grafico.botao.href}">${s5.grafico.botao.texto}</a>` : ''}</div><div class="_card_s2pmk_1"><div class="np-theme-personal"><div><div class="tw-rate-graph" dir="ltr">${s5.grafico.cartao}</div></div></div></div></div></section></div>
<div class="np-theme-personal"><div class="section bg-light"><div class="container"><div class="_headerContainer_133i7_1"><div>${s5.tabela.titulo}</div></div><div class="_container_133i7_40">${s5.tabela.tabela}</div><div class="_bottomSection_133i7_219">${s5.tabela.baixo}</div>${s5.tabela.link}</div></div></div>
<div class="np-theme-personal"><section class="section bg-light"><div class="container"><div class="row _row_lgtgp_1"><div class="col-xs-12 col-lg-5 col-lg-offset-1 m-t-5 m-b-5 _content_lgtgp_7">${s5.dados.titulo}${s5.dados.texto}<div class="_ctas_lgtgp_19">${s5.dados.ctas.map((b, n) => `<a class="btn btn-md np-btn np-btn-md btn-accent btn-priority-${n ? 3 : 1} m-t-1 m-r-1" href="${b.href}">${b.texto}</a>`).join('')}</div></div><div class="col-xs-12 col-lg-6 _table_lgtgp_13">${s5.dados.tabela}</div></div></div></section></div></div>
<div data-mx-secao="6"><div class="np-theme-personal"><section class="section"><section class="section np-theme-personal"><div class="container"><div class="_faqHeaderContainer_2vtdx_1">${c.s6.faq.titulo}</div><div class="eds-basic-accordion">${c.s6.faq.itens.map((d) => `<div class="eds-basic-accordion-item">${d}</div>`).join('')}</div>${c.s6.faq.depois || ''}</div></section></section></div>
<div class="np-theme-personal"><div><div class="container">${c.s6.pares.titulo}<div class="_routesWrapper_lxar8_1"><div class="row">${c.s6.pares.cartoes.map((p) => `<a href="${p.href}"${p.rotulo ? ` aria-label="${p.rotulo}"` : ''}><div class="currency-card currency-pair-card col-xs-6 col-sm-4 col-lg-3"><div class="_curencyPairCardTile_ig5uw_26 text-xs-center">${p.marcas}<div class="_curencyPairCardText_ig5uw_36"><p>${p.texto}</p></div></div></div></a>`).join('')}</div></div></div></div></div>
<div class="np-theme-personal"><section class="section"><div class="container">${c.s6.origem.titulo}<div class="_sourceCurrenciesWrapper_11tqj_1">${c.s6.origem.itens.map((o) => `<div class="_sourceCurrency_11tqj_10${o.oculto ? ' hidden' : ''}">${o.marca}<a href="${o.href}" class="_sourceCurrencyText_11tqj_16">${o.texto}</a></div>`).join('')}</div><div class="_expandButtonSection_11tqj_20"><div class="_expandButton_11tqj_20"><a class="_expandButtonIcon_11tqj_39" href="${c.s6.origem.mais.href}" aria-label="${c.s6.origem.mais.texto}">${ic('chevron-down')}</a><span class="_showMoreText_11tqj_50">${c.s6.origem.mais.texto}</span></div></div></div></section></div></div>
<div class="np-theme-personal" data-mx-secao="7"><section class="section"><section class="section"><div class="container"><div class="row m-b-5"><div class="col-xs-12">${c.s7.titulo}</div></div><div class="row m-t-3"><ul class="_crosslinks_1dl3n_1">${c.s7.itens.map((i) => `<li class="_block_1dl3n_7${i.oculto ? ' hidden' : ''}">${i.marca}<div class="d-flex flex-column"><span class="mw-body-3-bold">${i.titulo}</span><span class="mw-body-3">${i.texto}</span>${i.link ? `<a class="mw-body-3-bold" href="${i.link.href}"${/^https?:/.test(i.link.href) ? ' rel="noopener"' : ''}>${i.link.texto}</a>` : ''}</div></li>`).join('')}</ul><div class="_viewMore_1dl3n_38"><a class="np-circle d-flex align-items-center justify-content-center np-icon-button np-icon-button-primary-default m-b-1" style="--circle-size: 48px; --circle-icon-size: 24px; --circle-font-size: 22px;" href="${c.s7.mais.href}" aria-label="${c.s7.mais.texto}">${ic('chevron-down')}</a><span>${c.s7.mais.texto}</span></div></div></div></section></section></div>`;
}

// ---------- o guia do FINAGRO vestido na marcação acima ----------
const foto = (alt) => `<div style="position: relative; width: 100%; padding-bottom: 133.333%;"><div style="position: absolute; inset: 0;"><picture><source type="image/avif" srcset="/assets/fotos/perfil-lavoura-800.avif 800w, /assets/fotos/perfil-lavoura-1536.avif 1536w" sizes="(min-width: 64rem) 34rem, 92vw"><img class="mw-radius-3" style="object-fit: cover; width: 100%; height: 100%;" src="/assets/fotos/perfil-lavoura-800.webp" width="800" height="450" alt="${alt}" loading="lazy" decoding="async"></picture></div></div>`;
const sigla = (t, segunda = false) => `<span class="wds-flag mx-sigla${segunda ? ' _currencyTableTargetFlag_ig5uw_32' : ''}" aria-hidden="true">${t}</span>`;

// Os quatro retângulos de 1 hectare (as medidas de 100 × 100 e 200 × 50 são do texto; 250 × 40 é o piquete do exemplo).
const FORMAS = [[100, 100], [200, 50], [250, 40], [400, 25]];
function figuraHectare() {
  const [c, l] = FORMAS[0];
  return `<svg class="mx-hectare" viewBox="0 0 1020 350" role="img" aria-label="Retângulo de 100 m por 100 m, que fecha 1 hectare" data-mx-figura><defs><pattern id="mx-grade" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M34 0H0V34" fill="none" stroke="currentColor" stroke-opacity=".12"/></pattern></defs><rect width="1020" height="350" fill="url(#mx-grade)"/><g data-mx-forma><rect x="${510 - c * 0.7}" y="${175 - l * 0.7}" width="${c * 1.4}" height="${l * 1.4}" rx="4" class="mx-hectare__area"/><text x="510" y="${175 - l * 0.7 - 14}" text-anchor="middle" class="mx-hectare__cota" data-mx-c>${c} m</text><text x="${510 + c * 0.7 + 14}" y="180" class="mx-hectare__cota" data-mx-l>${l} m</text><text x="510" y="184" text-anchor="middle" class="mx-hectare__miolo">10.000 m²</text></g></svg>`;
}
const SCRIPT_MOLDE = `<script>
(() => {
  // Troca de medida: o x entre os dois campos inverte comprimento e largura (a área não muda; é a prova da conta).
  const caixa = document.querySelector('[data-calc]');
  const troca = caixa && caixa.querySelector('[data-mx-trocar]');
  if (troca) troca.addEventListener('click', () => {
    const [a, b] = caixa.querySelectorAll('input[data-campo]');
    const t = a.value; a.value = b.value; b.value = t; a.dispatchEvent(new Event('input', { bubbles: true }));
  });
  // Os chips desenham outro retângulo de 1 hectare.
  const fig = document.querySelector('[data-mx-figura]');
  [].forEach.call(document.querySelectorAll('[data-mx-forma-chip]'), (chip) => chip.addEventListener('click', () => {
    const [c, l] = chip.dataset.mxFormaChip.split('x').map(Number);
    [].forEach.call(document.querySelectorAll('[data-mx-forma-chip]'), (o) => { const sel = o === chip; o.classList.toggle('np-chip--selected', sel); o.setAttribute('aria-pressed', String(sel)); });
    const r = fig.querySelector('rect.mx-hectare__area'), w = c * 1.4, h = l * 1.4;
    r.setAttribute('x', 510 - w / 2); r.setAttribute('y', 175 - h / 2); r.setAttribute('width', w); r.setAttribute('height', h);
    const tc = fig.querySelector('[data-mx-c]'), tl = fig.querySelector('[data-mx-l]');
    tc.setAttribute('y', 175 - h / 2 - 14); tc.textContent = c + ' m';
    tl.setAttribute('x', 510 + w / 2 + 14); tl.textContent = l + ' m';
    fig.setAttribute('aria-label', 'Retângulo de ' + c + ' m por ' + l + ' m, que fecha 1 hectare');
  }));
})();
</script>`;

export function vestir(kit) {
  const { g, esc, rico, bloco, APP, LOJA } = kit;
  const sec = Object.fromEntries(kit.secoes.map((s, n) => [n, s]));
  const [area, como, unidades, tabela, irregular, app] = [0, 1, 2, 3, 4, 5].map((n) => sec[n]);
  const h2 = (s, classe) => `<h2 id="${s.id}" class="${classe}">${esc(s.h2)}</h2>`;
  const blocos = (s, tipo) => s.blocos.filter((b) => b[tipo] !== undefined);
  const c = kit.calc;
  const saidas = c.saidas;
  const s = (id) => saidas.find((x) => x.id === id);
  const [hec, m2, ares, cent] = ['hectares', 'metros', 'ares', 'centiares'].map(s);
  const qr = fs.readFileSync(path.join(AQUI, 'ativos', 'qr-app-store.svg'), 'utf8').replace('<svg ', '<svg role="img" aria-label="Código QR para baixar o FINAGRO na App Store" ');
  const relacionados = kit.veja;
  const siglas = { 'alqueire-em-hectare': ['alq', 'ha'], 'tarefa-e-linha-de-terra': ['tf', 'ha'], 'aplicativo-para-medir-area-rural': ['GPS', 'm²'] };
  const tab = blocos(tabela, 'tabela')[0].tabela;
  const glos = blocos(unidades, 'glossario')[0].glossario;
  const [p1, p2] = blocos(area, 'p').map((b) => b.p);
  const destaque = blocos(area, 'destaque')[0].destaque;
  const tituloFaq = esc(g.faqTitulo || `Perguntas sobre ${g.curto.toLowerCase()}`);
  return {
    s0: {
      antes: `<nav class="mx-migalhas" aria-label="Você está em"><ol><li><a href="/">FINAGRO</a></li><li><a href="/guias">Guias</a></li><li aria-current="page">${esc(g.curto)}</li></ol></nav><p class="mx-tipo"><span>${esc(kit.TIPOS[g.tipo])}</span><a href="/guias#${g.grupo}">${esc(kit.GRUPOS[g.grupo][0])}</a></p>`,
      h1: esc(g.h1),
      sub: kit.resposta('resposta mx-resposta'),
      depois: `<p class="mx-data">Atualizado em ${kit.data}</p>`,
    },
    s1: {
      id: 'calculadora-cartao',
      atributos: ` role="group" aria-labelledby="calculadora" data-calc`,
      taxa: `<h2 id="calculadora" class="m-r-1 mx-calc-titulo">${esc(g.calc.titulo)}</h2>`,
      valor: `<span dir="ltr"><b ${hec.atributos}>${esc(hec.inicial)}</b> ${esc(hec.rotulo)}</span>`,
      campos: c.campos.map((f) => ({ para: `${c.prefixo}-${f.id}`, rotulo: esc(f.rotulo), entrada: c.controle(f, ' class="form-control np-form-control np-form-control--size-auto np-input np-input--shape-rectangle" autocomplete="off"'), unidade: 'm' })),
      troca: `<button type="button" class="mx-trocar" data-mx-trocar aria-label="Trocar comprimento e largura"><span class="_ccCalculator__reverseIcon_lbutx_1">${ic('vezes')}</span></button>`,
      meio: `<div class="mx-saidas" aria-live="polite">${[m2, ares, cent].map((x) => `<div><b ${x.atributos}>${esc(x.inicial)}</b><span>${esc(x.rotulo)}</span></div>`).join('')}</div>`,
      botoes: [{ href: APP, texto: 'Começar grátis' }, { href: LOJA, texto: 'Baixar para iPhone' }],
      depois: `${g.calc.nota ? `<p class="mx-calc-nota">${rico(g.calc.nota)}</p>` : ''}<ul class="mx-selos"><li>Grátis para sempre, sem cartão</li><li>Lote sem limite de cabeças</li><li>14 dias com tudo liberado</li></ul>`,
    },
    s2: {
      titulo: h2(como, 'mw-feature__title mw-heading-2 m-y-0'),
      ordenada: true,
      itens: blocos(como, 'ol')[0].ol.map((t, n) => ({ icone: `<span class="mx-passo" aria-hidden="true">${n + 1}</span>`, texto: rico(t) })),
      depois: blocos(como, 'p').map((b) => `<p class="mw-feature__subtitle mw-body-1 mx-exemplo">${rico(b.p)}</p>`).join(''),
      ctas: [{ href: APP, texto: 'Começar grátis' }, { href: `#${tabela.id}`, texto: 'Ver a tabela' }],
      midia: foto('Lavoura de soja ao nascer do sol'),
    },
    s4: {
      titulo: `<h2 id="${app.id}" class="mw-feature__title mw-heading-2 m-y-0">${esc(app.h2)}</h2>`,
      sub: `<strong>${esc(g.cta.forte)}</strong> ${esc(g.cta.texto)}`,
      itens: app.app.map((t, n) => ({ icone: ic(['pino', 'camadas', 'upward-graph', 'switch-vertical'][n] || 'pino'), texto: rico(t) })),
      qr: { texto: 'Baixe o FINAGRO no iPhone', imagem: `<a class="mx-qr-link" href="${LOJA}" aria-label="Baixar o FINAGRO na App Store">${qr}</a>` },
      midia: `<div class="mx-palco">${kit.celular(g.tela)}<p class="mx-ficha" aria-hidden="true"><b>1 ha</b><span>= 10.000 m²</span></p></div>`,
    },
    s5: {
      grafico: {
        titulo: h2(area, 'mw-display-3'),
        texto: rico(p1),
        botao: { href: '#calculadora', texto: 'Calcular a minha área' },
        cartao: `<div class="row m-b-2 m-l-0 m-r-0"><div class="p-x-0 pull-left col-xs-12 col-sm-8 text-xs-center text-sm-left d-flex"><div class="flag-section"><div class="currency-pair-flags"><div class="currency-flag-container">${sigla('ha')}</div><div class="currency-flag-container target-currency-flag">${sigla('m²')}</div></div><span class="rate-info"><p class="np-text-title-section m-t-1">1 ha = 10.000 m²</p><div class="mx-variacao"><span>${ic('area')}</span><span>100 m × 100 m</span></div></span></div></div></div><div>${figuraHectare()}</div><div><div class="d-flex"><div class="np-chips d-flex flex-wrap justify-content-center d-flex" role="group" aria-label="Formas de 1 hectare">${FORMAS.map(([a, b], n) => `<button type="button" class="np-chip d-flex align-items-center justify-content-between text-xs-nowrap${n ? '' : ' np-chip--selected'}" data-mx-forma-chip="${a}x${b}" aria-pressed="${n ? 'false' : 'true'}"><div class="np-text-body-default-bold">${a} × ${b} m</div></button>`).join('')}</div></div><div class="tw-rate-graph__footer m-t-3"><span><p class="m-t-1 m-b-0 tw-rate-graph__description">${rico(p2)}</p><p class="m-t-1 m-b-0 tw-rate-graph__description mx-destaque">${rico(destaque)}</p></span></div></div>`,
      },
      tabela: {
        titulo: h2(tabela, 'mw-display-3'),
        tabela: `<table class="_table_133i7_54 mx-tabela"><thead><tr>${tab.colunas.map((t) => `<th scope="col">${rico(t)}</th>`).join('')}</tr></thead><tbody>${tab.linhas.map((l) => `<tr${/^10\.000 m²$/.test(l[0]) ? ' class="_baseCurrencyRow_133i7_122"' : ''}><th scope="row"><div class="_flexCell_133i7_149">${sigla('m²')}<strong class="m-r-1">${rico(l[0])}</strong></div></th>${l.slice(1).map((v, n) => `<td class="_amountCell_133i7_164" data-rotulo="${esc(tab.colunas[n + 1])}">${rico(v)}</td>`).join('')}</tr>`).join('')}</tbody></table>`,
        baixo: `<p><strong>${rico(tab.nota)}</strong> ${blocos(tabela, 'p').map((b) => rico(b.p)).join(' ')}</p><div class="m-b-4"><div class="_timerSection_v9njz_1"><span class="mx-relogio" aria-hidden="true">${ic('area')}</span><div class="m-l-1"><p><strong>Conta exata, sem arredondar</strong></p><p>Atualizado em ${kit.data}</p></div></div></div>`,
        link: `<a class="_liveExchangeRatesLink_133i7_239" href="/guias#${g.grupo}">${esc(kit.GRUPOS[g.grupo][0])}: todas as medidas</a>`,
      },
      dados: {
        titulo: h2(unidades, 'mw-display-4'),
        texto: blocos(unidades, 'p').map((b) => `<p>${rico(b.p)}</p>`).join(''),
        ctas: [{ href: '#calculadora', texto: 'Calcular agora' }, { href: '/alqueire-em-hectare', texto: 'Alqueire em hectare' }],
        tabela: `<dl class="_table_94pun_1 mx-glossario"><div class="mx-glossario__cab" aria-hidden="true"><span>Unidade</span><span>Quanto vale</span></div>${glos.map(([t, d]) => `<div><dt>${esc(t)}</dt><dd>${rico(d)}</dd></div>`).join('')}<div class="_ctaRow_94pun_67"><a class="btn btn-md np-btn np-btn-md btn-accent btn-priority-3" href="#${tabela.id}">Ver a tabela de conversão</a></div></dl>`,
      },
    },
    s6: {
      faq: { titulo: `<h2 id="perguntas" class="mw-display-2 _faqHeader_2vtdx_1">${tituloFaq}</h2>`, itens: kit.faq('faq') },
      pares: {
        titulo: '<p class="title-2 text-xs-center mw-display-3">Veja também</p>',
        cartoes: [...relacionados.map((v) => ({ href: `/${v.slug}`, marcas: (siglas[v.slug] || ['ha']).map((t, n) => sigla(t, n > 0)).join(''), texto: esc(v.curto) })), { href: '/guias', marcas: sigla('+'), texto: 'Todos os guias' }],
      },
      origem: {
        titulo: `<p class="mw-display-3 text-xs-center">${kit.base === g.slug && kit.estados.length ? 'Por estado' : 'Do mesmo assunto'}</p>`,
        itens: [...kit.estados, ...kit.vizinhos].map((v) => ({ marca: `<span class="wds-flag mx-sigla mx-sigla--ponto" aria-hidden="true">${ic(v.tipo === 'calculadora' ? 'area' : 'documento')}</span>`, href: `/${v.slug}`, texto: esc(v.curto) })).concat([{ marca: `<span class="wds-flag mx-sigla mx-sigla--ponto" aria-hidden="true">${ic('livro')}</span>`, href: `/guias#${g.grupo}`, texto: esc(kit.GRUPOS[g.grupo][0]) }]),
        mais: { href: '/guias', texto: 'Ver todos os guias' },
      },
    },
    s7: {
      titulo: h2(irregular, 'mw-display-3'),
      itens: [
        ...blocos(irregular, 'p').map((b, n) => ({ marca: `<span class="wds-flag mx-sigla mx-sigla--grande m-b-2" aria-hidden="true">${ic(['esquadro', 'pino', 'documento'][n] || 'area')}</span>`, titulo: ['Divida o desenho', 'Feche o contorno no GPS', 'Registro é outro serviço'][n] || '', texto: rico(b.p) })),
        ...g.fontes.map((f) => ({ marca: `<span class="wds-flag mx-sigla mx-sigla--grande m-b-2" aria-hidden="true">${ic('livro')}</span>`, titulo: 'Fonte', texto: esc(f.nome), link: { href: esc(f.url), texto: 'Abrir a fonte' } })),
      ],
      mais: { href: '/guias', texto: 'Ver mais guias' },
    },
  };
}

// O CSS do molde vai com a versão no endereço (o gerador só versiona /assets no CSS do site, não em assets/moldes/).
const versao = () => {
  const css = path.join(AQUI, 'molde.css');
  return fs.existsSync(css) ? crypto.createHash('sha256').update(fs.readFileSync(css)).digest('hex').slice(0, 8) : '0';
};

export function render(kit) {
  return kit.abrir([`/assets/moldes/wise-conversor.css?v=${versao()}`], { chassiEmCamada: true })
    + `<main id="conteudo" class="mx-wise-conversor" data-molde="wise-conversor">\n${desenho(vestir(kit))}\n</main>\n`
    + kit.fechar(kit.calc.script + SCRIPT_MOLDE);
}
