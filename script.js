/* FINAGRO — comportamento da página (sem dependência). Cada parte só age se o elemento existir: o mesmo arquivo serve
   a página inicial e as páginas de conteúdo. */
(function () {
  'use strict';
  var doc = document.documentElement;
  var menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var economia = navigator.connection && (navigator.connection.saveData || /(^|-)2g$/.test(navigator.connection.effectiveType || ''));

  /* ---------- topo: estendido sobre a hero; cápsula flutuante a partir do primeiro movimento ---------- */
  var topo = document.querySelector('.topo');
  if (topo && !topo.classList.contains('topo--fixo')) {
    var marcado = false;
    var aoRolar = function () {
      var y = window.scrollY || doc.scrollTop || 0;
      var flutua = y > 8;
      if (flutua !== marcado) { topo.classList.toggle('topo--flutua', flutua); marcado = flutua; }
    };
    window.addEventListener('scroll', aoRolar, { passive: true });
    aoRolar();
  }

  /* menu do celular */
  var botaoMenu = document.querySelector('.topo__menu');
  var painel = document.getElementById('topo-painel');
  if (botaoMenu && painel) {
    var fechar = function () { painel.hidden = true; botaoMenu.setAttribute('aria-expanded', 'false'); botaoMenu.setAttribute('aria-label', 'Abrir menu'); };
    botaoMenu.addEventListener('click', function () {
      var abrir = painel.hidden;
      painel.hidden = !abrir;
      botaoMenu.setAttribute('aria-expanded', String(abrir));
      botaoMenu.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
      if (abrir && topo) topo.classList.add('topo--flutua');
    });
    painel.addEventListener('click', function (e) { if (e.target.closest('a')) fechar(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fechar(); });
  }

  /* seção à vista marcada no topo */
  var linksTopo = [].slice.call(document.querySelectorAll('.topo__nav a[href^="/#"]'));
  if (linksTopo.length && 'IntersectionObserver' in window) {
    var porId = {};
    linksTopo.forEach(function (a) { porId[a.getAttribute('href').slice(2)] = a; });
    var obsSecao = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        var a = porId[en.target.id];
        if (!a) return;
        if (en.isIntersecting) {
          linksTopo.forEach(function (l) { l.removeAttribute('aria-current'); });
          a.setAttribute('aria-current', 'true');
        } else if (a.getAttribute('aria-current')) a.removeAttribute('aria-current');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(porId).forEach(function (id) { var s = document.getElementById(id); if (s) obsSecao.observe(s); });
  }

  /* ---------- vídeos: a capa aparece na hora; o vídeo carrega depois da primeira pintura e entra por cima ---------- */
  function ligarVideo(v, quando) {
    if (!v || menosMovimento || economia) return;
    var tocar = function () {
      v.preload = 'auto';
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    };
    v.addEventListener('playing', function () { v.classList.add('toca'); }, { once: true });
    quando(tocar);
  }
  var depoisDaPintura = function (fn) {
    var ir = function () { (window.requestIdleCallback || setTimeout)(fn, { timeout: 1200 }); };
    if (document.readyState === 'complete') ir(); else window.addEventListener('load', ir, { once: true });
  };
  var videoHeroi = document.querySelector('[data-video-heroi]');
  ligarVideo(videoHeroi, depoisDaPintura);

  /* o celular da hero: roda só enquanto está à vista, e começa depois do vídeo do fundo */
  var videoCelular = document.querySelector('[data-video-celular]');
  if (videoCelular && 'IntersectionObserver' in window) {
    ligarVideo(videoCelular, function (tocar) {
      depoisDaPintura(function () {
        var comecou = false;
        new IntersectionObserver(function (entradas) {
          entradas.forEach(function (en) {
            if (en.isIntersecting) { if (!comecou) { comecou = true; tocar(); } else videoCelular.play().catch(function () {}); }
            else if (comecou) videoCelular.pause();
          });
        }, { threshold: 0.25 }).observe(videoCelular);
      });
    });
  }
  /* o vídeo do fundo pausa quando a hero sai da tela (economiza bateria e CPU) */
  if (videoHeroi && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!videoHeroi.classList.contains('toca')) return;
        if (en.isIntersecting) videoHeroi.play().catch(function () {}); else videoHeroi.pause();
      });
    }, { threshold: 0 }).observe(videoHeroi.closest('.heroi') || videoHeroi);
  }

  /* ---------- revelar ao entrar na tela, com escalonamento entre irmãos ---------- */
  var revelar = [].slice.call(document.querySelectorAll('.revelar'));
  if (revelar.length && 'IntersectionObserver' in window) {
    revelar.forEach(function (el) {
      var irmaos = el.parentElement ? [].slice.call(el.parentElement.children).filter(function (c) { return c.classList.contains('revelar'); }) : [];
      var i = irmaos.indexOf(el);
      if (i > 0) el.style.setProperty('--atraso', Math.min(i, 6) * 70 + 'ms');
    });
    var obsRevelar = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('visivel'); obsRevelar.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revelar.forEach(function (el) { obsRevelar.observe(el); });
  } else revelar.forEach(function (el) { el.classList.add('visivel'); });

  /* ---------- galeria no celular: um celular grande que troca sozinho entre as 4 telas ---------- */
  var galeria = document.querySelector('[data-galeria]');
  var abas = [].slice.call(document.querySelectorAll('.galeria__abas [data-tela]'));
  if (galeria && abas.length) {
    var itens = [].slice.call(galeria.children);
    var atual = 0, relogio = null, PASSO = 3600;
    var mostrar = function (i) {
      atual = (i + itens.length) % itens.length;
      itens.forEach(function (el, k) { el.classList.toggle('ativo', k === atual); });
      abas.forEach(function (b, k) { b.setAttribute('aria-selected', String(k === atual)); });
    };
    var parar = function () { if (relogio) { clearInterval(relogio); relogio = null; } galeria.parentElement.classList.remove('galeria--roda'); };
    var rodar = function () {
      if (menosMovimento || relogio) return;
      galeria.parentElement.classList.add('galeria--roda');
      galeria.parentElement.style.setProperty('--passo', PASSO + 'ms');
      relogio = setInterval(function () { mostrar(atual + 1); }, PASSO);
    };
    mostrar(0);
    abas.forEach(function (b, k) { b.addEventListener('click', function () { parar(); mostrar(k); }); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { en.forEach(function (e) { if (e.isIntersecting) rodar(); else parar(); }); }, { threshold: 0.35 }).observe(galeria);
    }
  }

  /* ---------- a linha dos 4 passos se completa quando a seção entra ---------- */
  var linha = document.querySelector('[data-linha]');
  if (linha && 'IntersectionObserver' in window) {
    var obsLinha = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) { if (en.isIntersecting) { linha.classList.add('ativo'); obsLinha.disconnect(); } });
    }, { threshold: 0.4 });
    obsLinha.observe(linha);
  }

  /* ---------- perguntas: abrir uma fecha a outra (reserva para navegador sem <details name>) e "ver mais" ---------- */
  var faq = document.getElementById('faq');
  if (faq) {
    var itens = [].slice.call(faq.querySelectorAll('details'));
    itens.forEach(function (d) {
      d.addEventListener('toggle', function () {
        if (!d.open) return;
        itens.forEach(function (o) { if (o !== d && o.open) o.open = false; });
      });
    });
    var mais = document.querySelector('[data-ver-mais="faq"]');
    if (mais) mais.addEventListener('click', function () {
      faq.classList.add('aberto');
      mais.remove();
      var primeiraExtra = faq.querySelector('details.extra');
      if (primeiraExtra) primeiraExtra.querySelector('summary').focus({ preventScroll: true });
    });
  }
})();
