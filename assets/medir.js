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

  document.addEventListener('click', function (ev) {
    var a = ev.target && ev.target.closest ? ev.target.closest('a, button') : null;
    if (!a) return;
    var h = a.getAttribute('href') || '';
    if (/app\.finagro\.app/.test(h)) evento('abrir_app', { lugar: lugar(a) });
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
