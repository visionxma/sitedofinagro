/* Medição de visitas do site do FINAGRO (Google Analytics 4, propriedade "FINAGRO — site").
   Carrega depois da página, para não disputar a primeira pintura, e anota o que interessa à captação:
   de que página e de que lugar da página a pessoa abriu o app ou a loja, que arquivo baixou, que calculadora usou. */
(function () {
  var ID = 'G-YYGR0D3JM2';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', ID);

  var carregado = false;
  function carregar() {
    if (carregado) return;
    carregado = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    document.head.appendChild(s);
  }
  if (document.readyState === 'complete') setTimeout(carregar, 1500);
  else window.addEventListener('load', function () { setTimeout(carregar, 1500); });
  ['pointerdown', 'keydown', 'scroll'].forEach(function (e) { window.addEventListener(e, carregar, { once: true, passive: true }); });

  var pagina = location.pathname.replace(/\/$/, '') || '/';
  function evento(nome, extra) {
    var d = { pagina: pagina };
    for (var k in extra) d[k] = extra[k];
    window.gtag('event', nome, d);
  }
  function lugar(el) {
    var s = el.closest('.topo, .rodape, .artigo__acoes, .cta-artigo, .artigo__convite, .veja, .heroi, .baixar, section[id]');
    if (!s) return 'corpo';
    return s.id || String(s.className).split(' ')[0];
  }

  /* Primeiro toque e a ponte para o cadastro (17/10/2026)
     Até aqui, todo botão do site abria https://app.finagro.app/ sem nada no endereço: o cadastro que nascia da
     bio do Instagram (finagro.app/ig), do Google ou de uma página de guia chegava ao app igual a "abri direto".
     Agora o site guarda o PRIMEIRO toque útil do visitante (canal e página de entrada, 90 dias; "direto" cede
     lugar) e, no clique para o app, acrescenta ao link:
       src      página:lugar do botão clicado (ex.: "gta:heroi")
       canal    quem trouxe a pessoa ao site (instagram, google, chatgpt...)
       entrada  a primeira página do site que ela viu
       utm_*    se a visita chegou marcada (a bio chega com utm_campaign=perfil, utm_content=bio)
     O app guarda isso e grava em users/{uid}.origem no cadastro (FINAGRO src/core/origemCadastro.js).
     O FINAGRO não tem afiliado: utm_campaign é só o nome da campanha. Modelo: LP FROX/js/analytics.js. */
  function canalDaVisita() {
    try {
      var fonte = (new URLSearchParams(location.search).get('utm_source') || '').toLowerCase().slice(0, 40);
      if (fonte) return fonte;
      var ref = document.referrer || '';
      if (!ref) return 'direto';
      var host = new URL(ref).hostname.replace(/^www\./, '').toLowerCase();
      if (host === location.hostname.replace(/^www\./, '')) return '';
      if (/gemini\.google\./.test(host)) return 'gemini';
      if (/(^|\.)google\./.test(host)) return 'google';
      if (/bing\.com$/.test(host)) return 'bing';
      if (/duckduckgo/.test(host)) return 'duckduckgo';
      if (/yahoo\./.test(host)) return 'yahoo';
      if (/chatgpt\.com$|openai\.com$/.test(host)) return 'chatgpt';
      if (/perplexity/.test(host)) return 'perplexity';
      if (/copilot/.test(host)) return 'copilot';
      if (/claude\.ai$/.test(host)) return 'claude';
      if (/instagram/.test(host)) return 'instagram';
      if (/facebook|fb\.me/.test(host)) return 'facebook';
      if (/whatsapp|wa\.me/.test(host)) return 'whatsapp';
      if (/youtube|youtu\.be/.test(host)) return 'youtube';
      if (/tiktok/.test(host)) return 'tiktok';
      if (/linkedin|lnkd\.in/.test(host)) return 'linkedin';
      if (/finagro\.app$/.test(host)) return 'app-finagro';
      return host.slice(0, 40);
    } catch (e) { return 'direto'; }
  }
  var UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];
  var PRIMEIRO_TOQUE = (function () {
    var CHAVE = 'finagro_primeiro_toque';
    var agora = Date.now();
    var atual = { canal: canalDaVisita(), entrada: pagina, quando: agora };
    try {
      var q = new URLSearchParams(location.search);
      UTM.forEach(function (k) { var v = q.get(k); if (v) atual[k] = v.slice(0, 60); });
    } catch (e) { /* sem URLSearchParams: segue sem utm */ }
    var guardado = null;
    try { guardado = JSON.parse(localStorage.getItem(CHAVE) || 'null'); } catch (e) { guardado = null; }
    var valido = guardado && guardado.canal && (agora - (guardado.quando || 0)) < 90 * 86400000;
    if (valido && !(guardado.canal === 'direto' && atual.canal && atual.canal !== 'direto')) return guardado;
    if (!atual.canal) atual.canal = 'direto';
    try { localStorage.setItem(CHAVE, JSON.stringify(atual)); } catch (e) { /* modo privado */ }
    return atual;
  })();
  function levaOrigemNoLink(a) {
    try {
      var url = new URL(a.getAttribute('href'), location.href);
      if (url.hostname !== 'app.finagro.app') return;
      var slug = pagina === '/' ? 'inicio' : pagina.replace(/^\/+/, '').replace(/\.html$/, '').replace(/\//g, '-').slice(0, 40);
      url.searchParams.set('src', slug + ':' + String(lugar(a)).slice(0, 30));
      if (PRIMEIRO_TOQUE.canal) url.searchParams.set('canal', PRIMEIRO_TOQUE.canal);
      if (PRIMEIRO_TOQUE.entrada) url.searchParams.set('entrada', PRIMEIRO_TOQUE.entrada);
      UTM.forEach(function (k) { if (PRIMEIRO_TOQUE[k] && !url.searchParams.get(k)) url.searchParams.set(k, PRIMEIRO_TOQUE[k]); });
      a.setAttribute('href', url.toString());
    } catch (e) { /* o link segue como estava */ }
  }
  /* Clique do meio e "abrir em nova aba" também levam a origem. */
  ['pointerdown', 'auxclick'].forEach(function (tipo) {
    document.addEventListener(tipo, function (ev) {
      var a = ev.target && ev.target.closest ? ev.target.closest('a[href*="app.finagro.app"]') : null;
      if (a) levaOrigemNoLink(a);
    }, true);
  });

  document.addEventListener('click', function (ev) {
    var a = ev.target && ev.target.closest ? ev.target.closest('a, button') : null;
    if (!a) return;
    var h = a.getAttribute('href') || '';
    if (/app\.finagro\.app/.test(h)) { levaOrigemNoLink(a); evento('abrir_app', { lugar: lugar(a) }); }
    else if (/play\.google\.com/.test(h)) evento('abrir_loja', { lugar: lugar(a) });
    else if (/^\/arquivos\//.test(h)) evento('baixar_arquivo', { arquivo: h.split('/').pop() });
    else if (a.hasAttribute('data-copiar')) evento('copiar_modelo', {});
    else if (a.hasAttribute('data-imprimir')) evento('imprimir_modelo', {});
  }, true);

  var calc = document.querySelector('[data-calc]');
  if (calc) {
    var usou = function () { calc.removeEventListener('input', usou); evento('usar_calculadora', {}); };
    calc.addEventListener('input', usou);
  }
})();
