// Modo origem do molde wise-conversor: os textos e a mídia da Wise como estavam na captura de 02/11/2026,
// na MESMA marcação de desenho(). Só serve à prova (provar.mjs); nunca vai ao ar.
import fs from 'node:fs';
import path from 'node:path';
import { ic } from './molde.mjs';

const AQUI = path.dirname(new URL(import.meta.url).pathname);
const W = 'https://wise.com';
const bandeira = (m, t = 24, extra = '') => `<img class="wds-flag wds-flag-${m}${extra}" src="${W}/web-art/assets/flags/${m}.svg" loading="lazy" alt="" width="${t}" height="${t}">`;
const avatar = (n) => ic(n);
const h04 = fs.readFileSync(path.join(AQUI, 'captura', 'secoes-html', '04.html'), 'utf8');
const qrPng = (h04.match(/src="(data:image\/png;base64,[^"]+)"/) || [])[1] || '';

const ORIGENS = ['Coroa Checa:czk', 'Coroa Dinamarquesa:dkk', 'Coroa Norueguesa:nok', 'Coroa Sueca:sek', 'Dólar Australiano:aud', 'Dólar Canadense:cad', 'Dólar da Nova Zelândia:nzd', 'Dólar de Hong Kong:hkd', 'Dólar de Singapura:sgd', 'Euro:eur', 'Forint Húngaro:huf', 'Franco Suíço:chf', 'Iene Japonês:jpy', 'Leu Romeno:ron', 'Lev Búlgaro:bgn', 'Libra Esterlina Britânica:gbp', 'Lira Turca:try', 'Real Brasileiro:brl', 'Ringgit da Malásia:myr', 'Rupia Indiana:inr', 'Rupia Indonésia:idr', 'Shekel Israelense:ils', 'Yuan Chinês RMB:cny', 'Złoty Polaco:pln'];
const CRUZADAS = [['Dólar americano', 'Dólar', 'usd'], ['Euro', 'Euro', 'eur'], ['Dólar canadense', 'Dólar canadense', 'cad'], ['Libra esterlina', 'Libra Esterlina', 'gbp'], ['Peso argentino', 'Peso argentino', 'ars'], ['Dólar australiano', 'Dólar australiano', 'aud'], ['Peso chileno', 'Peso chileno', 'clp'], ['Peso mexicano', 'Peso mexicano', 'mxn'], ['Peso uruguaio', 'Peso uruguaio', 'uyu'], ['Dólar neozelandês', 'Dólar neozelandês', 'nzd'], ['Franco suíço', 'Franco suíço', 'chf'], ['Peso colombiano', 'Peso colombiano', 'cop']];
const linhaTaxa = (m, nome, valor, variacao, sinal) => `<tr><td><div class="_flexCell_133i7_149"><span class="m-r-1 currency-flag currency-flag-${m} _flag_133i7_154"></span><strong class="m-r-1">${m.toUpperCase()}</strong><span class="_hideOnMd_133i7_202">${nome}</span></div></td><td class="_amountCell_133i7_164">${valor}</td><td class="_hideOnMobile_133i7_208"><span class="_container_evpp8_1${sinal ? ` _${sinal}_evpp8_${sinal === 'negative' ? 18 : 6}` : ''}">${variacao}</span></td><td class="_hideOnMobile_133i7_208"><div class="_chartContainer_133i7_159"><canvas width="120" height="30"></canvas></div></td><td class="_editCell_133i7_168"><div><a class="btn btn-sm np-btn np-btn-sm btn-accent btn-priority-1 m-r-1" href="#">Enviar ${m.toUpperCase()}</a></div></td></tr>`;
const linhaDados = (r, a, b) => `<tr><td>${r}<span class="m-l-1 np-info"><span class="np-popover"><span class="d-inline-block"><button aria-label="Mais informações" class="np-circle d-flex align-items-center justify-content-center np-icon-button np-icon-button-minimal-default" type="button" style="--circle-size: 24px; --circle-icon-size: 16px; --circle-font-size: 12px;">${ic('question-mark-circle')}</button></span></span></span></td><td>${a}</td><td>${b}</td></tr>`;

export const origem = {
  s0: { h1: 'Conversor de Moedas', sub: '<p class="mw-body-1-bold m-b-5">Converta 140 moedas com a taxa de câmbio comercial. A Wise é a conta global para pagar, enviar e converter dinheiro na moeda local.</p>' },
  s1: {
    taxa: `<div class="m-r-1">Taxa de câmbio comercial</div><a href="#" class="js-MidMarketLink text-no-decoration">${ic('help-circle')}</a>`,
    valor: '<span dir="ltr">R$1 BRL = 0,1839 USD</span>',
    campos: [
      { para: 'source-input', rotulo: 'Quantia', entrada: '<input class="form-control np-form-control np-form-control--size-auto np-input np-input--shape-rectangle" id="source-input" inputmode="decimal" autocomplete="off" value="1.000">', unidade: 'BRL', bandeira: bandeira('brl'), seletor: true },
      { para: 'target-input', rotulo: 'Converter para', entrada: '<input class="form-control np-form-control np-form-control--size-auto np-input np-input--shape-rectangle" id="target-input" inputmode="decimal" autocomplete="off" value="183,90">', unidade: 'USD', bandeira: bandeira('usd'), seletor: true },
    ],
    troca: `<a aria-label="switch" href="#"><span class="_ccCalculator__reverseIcon_lbutx_1">${ic('switch-vertical')}</span></a>`,
    botoes: [{ href: '#', texto: 'Envie dinheiro' }, { href: '#', texto: 'Acompanhe a taxa de câmbio' }],
  },
  s2: {
    titulo: '<h2 class="mw-feature__title mw-heading-2 m-y-0">Economize quando usar, enviar e receber</h2>',
    sub: 'Economize dinheiro ao enviar, pagar e receber pagamentos em mais de 40 moedas. Tudo o que você precisa em uma única conta, sempre que precisar.',
    itens: [
      { icone: avatar('globe'), titulo: 'Gerencie o seu dinheiro aonde quer que vá', texto: 'Mantenha as suas moedas em um só lugar e converta entre elas em segundos.' },
      { icone: avatar('card-wise'), titulo: 'Um cartão de débito internacional', texto: 'Esqueça a preocupação com margens de lucro escondidas no câmbio ou tarifas altas ao pagar no exterior.' },
      { icone: avatar('arrow-up'), titulo: 'Envie dinheiro para o exterior e economize em tarifas', texto: 'Faça o seu dinheiro ir mais longe, não importa a distância.' },
    ],
    ctas: [{ href: '#', texto: 'Criar conta' }, { href: '#', texto: 'Saiba mais' }],
    midia: `<div style="position: relative; width: 100%; padding-bottom: 133.333%;"><div style="position: absolute; inset: 0;"><picture><img class="mw-radius-3" style="object-fit: cover; width: 100%; height: 100%;" src="${W}/public-resources/assets/landing-pages/currency-converter/one_account_mobile_phone_small.png" alt=""></picture></div></div>`,
  },
  s4: {
    titulo: '<h2 class="mw-feature__title mw-heading-2 m-y-0">Baixe o aplicativo de conversão de moedas gratuito da Wise</h2>',
    itens: [
      { icone: avatar('globe'), titulo: 'Compare serviços de transferência de dinheiro', texto: 'Com a Wise, você sempre terá a <a href="#">taxa de câmbio comercial</a>, sem tarifas ocultas.' },
      { icone: avatar('upward-graph'), titulo: 'Acompanhe taxas de câmbio em tempo real', texto: 'Selecione as moedas que você mais usa e acompanhe a variação das taxas de câmbio.' },
      { icone: avatar('split-money'), titulo: 'Totalmente gratuito, sem anúncios', texto: 'Baixe em segundos. É totalmente gratuito, e não há anúncios inesperados.' },
    ],
    qr: { texto: 'Baixe o Conversor de Moedas da Wise', imagem: `<picture><img alt="" src="${qrPng}"></picture>` },
    midia: `<div style="position: relative; width: 100%; padding-bottom: 133.333%;"><div style="position: absolute; inset: 0;"><picture><img role="presentation" src="${W}/static-assets/app/_next/static/media/b60483d23a7cc71e.b60483d2.svg" class="mw-radius-3" style="object-fit: cover; width: 100%; height: 100%;"></picture></div></div>`,
  },
  s5: {
    grafico: {
      titulo: '<h2 class="mw-display-3">Gráfico de BRL para USD</h2>',
      texto: 'O nosso gráfico de BRL para USD usa a taxa de câmbio comercial do momento e mostra dados históricos dos últimos 5 anos. Quer acompanhar todos os dias? Crie um alerta agora e receba notificações diárias sobre a variação da moeda.',
      botao: { href: '#', texto: 'Acompanhe a taxa de câmbio' },
      cartao: `<div class="row m-b-2 m-l-0 m-r-0"><div class="p-x-0 pull-left col-xs-12 col-sm-8 text-xs-center text-sm-left d-flex"><div class="flag-section"><div class="currency-pair-flags"><div class="currency-flag-container"><i class="currency-flag currency-flag-usd"></i></div><div class="currency-flag-container target-currency-flag"><i class="currency-flag currency-flag-brl"></i></div></div><span class="rate-info"><h2 class="np-text-title-section m-t-1">1 USD = 5,4379 BRL</h2><div class="rate-graph-v2-negative-change"><span></span><span>Queda de 0.16%</span></div></span></div></div></div><div><canvas height="350" width="1020" style="display: block; box-sizing: border-box; height: 350px; width: 100%;"></canvas><div class="col-xs-12 p-l-1 p-r-6 m-b-2"></div></div><div><div class="d-flex"><div class="np-chips d-flex flex-wrap justify-content-center d-flex">${['48h', '1S', '1M', '6M', '12M', '5A'].map((t) => `<div class="np-chip d-flex align-items-center justify-content-between text-xs-nowrap${t === '1M' ? ' np-chip--selected' : ''}"><div class="np-text-body-default-bold">${t}</div></div>`).join('')}</div></div><div class="tw-rate-graph__footer m-t-3"><span><p class="m-t-1 m-b-0 tw-rate-graph__description">Usamos a taxa de câmbio comercial, sem margens de lucro no câmbio para ocultar tarifas.<a class="p-l-1" href="#">Saiba mais</a></p></span></div></div>`,
    },
    tabela: {
      titulo: '<h2 class="mw-display-3">Taxas de câmbio do momento</h2>',
      tabela: `<table class="_table_133i7_54"><thead><tr><th>Moeda</th><th>Valor</th><th class="_hideOnMobile_133i7_208">Variação (24h)</th><th class="_hideOnMobile_133i7_208">Gráfico (24h)</th><th>Envie com a Wise</th></tr></thead><tbody><tr class="_baseCurrencyRow_133i7_122"><td><div class="_flexCell_133i7_149"><span class="m-r-1 currency-flag currency-flag-brl _flag_133i7_154"></span><strong class="m-r-1">BRL</strong><span class="_hideOnMd_133i7_202">Real Brasileiro</span></div></td><td class="_amountCell_133i7_164">1</td><td class="_hideOnMobile_133i7_208"></td><td class="_hideOnMobile_133i7_208"></td><td class="_editCell_133i7_168"></td></tr>${linhaTaxa('usd', 'Dólar Americano', '0,18', '0,0000', '')}${linhaTaxa('eur', 'Euro', '0,16', '0,2542%', 'negative')}${linhaTaxa('cad', 'Dólar Canadense', '0,26', '0,1323%', 'positive')}<tr><td colspan="3"><div class="_controlsContainer_133i7_29"><div class="m-r-2"><button class="_addCurrencyButton_133i7_214" type="button">${ic('plus-circle-fill')}</button><button type="button">Adicionar moeda</button></div><div class="_editButtonContainer_133i7_19">${ic('edit')}<button class="m-b-1" type="button">Editar tabela</button></div></div></td></tr></tbody></table>`,
      baixo: `<p><strong>Cuidado com taxas de câmbio ruins.</strong> Bancos e casas de câmbio geralmente saem mais caros, pois eles oferecem taxas de câmbio elevadas. Nossa tecnologia inteligente nos faz mais eficientes, o que significa que podemos oferecer uma taxa de câmbio justa e transparente. Sempre.</p><div class="m-b-4"><div class="_timerSection_v9njz_1"><button type="button">${ic('timer').replace(/<\/?span[^>]*>/g, '')}</button><div class="m-l-1"><p><strong>Atualizar taxas de câmbio em 57</strong></p><p>Última atualização: hoje, 20:12</p></div></div></div>`,
      link: '<a class="_liveExchangeRatesLink_133i7_239" href="#">Taxas de câmbio em tempo real</a>',
    },
    dados: {
      titulo: '<h2 class="mw-display-4">Dados de 1 BRL para USD</h2>',
      texto: '<p>O desempenho de BRL para USD nos últimos 30 dias observou uma máxima em 30 dias de 0,2009 e uma mínima em 30 dias de 0,1839. Portanto, a média em 30 dias foi de 0,1955. A variação de BRL para USD foi -4.14.<br><br>O desempenho de BRL para USD nos últimos 90 dias observou uma máxima em 90 dias de 0,2009 e uma mínima em 90 dias de 0,1839. Portanto, a média em 90 dias foi de 0,1945. A variação de BRL para USD foi -5.77.</p>',
      ctas: [{ href: '#', texto: 'Acompanhe a taxa de câmbio' }, { href: '#', texto: 'Veja o gráfico de BRL para USD' }],
      tabela: `<table class="_table_94pun_1"><thead><tr><th>1 BRL para USD</th><th>Últimos 30 dias</th><th>Últimos 90 dias</th></tr></thead><tbody>${linhaDados('Máxima', '0,2009', '0,2009')}${linhaDados('Mínima', '0,1839', '0,1839')}${linhaDados('Média', '0,1955', '0,1945')}${linhaDados('Variação', '-4.14%', '-5.77%')}<tr class="_ctaRow_94pun_67"><td colspan="3"><a class="btn btn-md np-btn np-btn-md btn-accent btn-priority-3" href="#">Ver histórico completo</a></td></tr></tbody></table>`,
    },
  },
  s6: {
    faq: {
      titulo: '<h2 class="mw-display-2 _faqHeader_2vtdx_1">Perguntas frequentes</h2>',
      itens: ['Como converter entre moedas?', 'Por que as taxas de câmbio oferecidas são distintas entre empresas?', 'Como posso converter o meu dinheiro?', 'Entre quais moedas posso converter com este conversor de moedas?'].map((q) => `<details name="faq"><summary>${q}</summary><p>…</p></details>`),
    },
    pares: {
      titulo: '<h2 class="title-2 text-xs-center mw-display-3">Principais combinações de moedas para Reais brasileiros</h2>',
      cartoes: ['usd', 'eur', 'gbp', 'inr', 'jpy', 'rub', 'aud', 'zar'].map((m) => ({ href: '#', rotulo: `BRL para ${m.toUpperCase()}`, marcas: bandeira('brl', 32) + bandeira(m, 32, ' _currencyTableTargetFlag_ig5uw_32'), texto: `BRL para ${m.toUpperCase()}` })),
    },
    origem: {
      titulo: '<h2 class="mw-display-3 text-xs-center">Alterar a moeda de origem</h2>',
      itens: ORIGENS.map((o, n) => { const [t, m] = o.split(':'); return { marca: bandeira(m, 32), href: '#', texto: t, oculto: n >= 12 }; }),
      mais: { href: '#', texto: 'Mostrar mais' },
    },
  },
  s7: {
    titulo: '<h3 class="mw-display-3">Taxas de câmbio de outras moedas hoje</h3>',
    itens: CRUZADAS.map(([t, nome, m], n) => ({ marca: bandeira(m, 48, ' m-b-2'), titulo: t, texto: `Verifique a taxa de câmbio de ${nome} hoje`, link: { href: '#', texto: `${nome} hoje` }, oculto: n >= 8 })),
    mais: { href: '#', texto: 'Ver mais' },
  },
};
