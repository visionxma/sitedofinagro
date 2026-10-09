/* FINAGRO — página de captação: o cartão "veja o seu plano", o contador da faixa de números e a linha do tempo.
   Nada aqui envia dado: a conta do plano é feita no aparelho de quem visita, com os limites escritos no próprio HTML
   (bloco #cap-planos, escrito pelo gerador a partir de conteudo/site.mjs). Sem script, o cartão mostra a resposta do plano grátis. */
(function () {
  'use strict';
  var menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- veja o seu plano ---------- */
  var fonte = document.getElementById('cap-planos');
  var cartoes = [].slice.call(document.querySelectorAll('[data-plano]'));
  if (fonte && cartoes.length) {
    var dados;
    try { dados = JSON.parse(fonte.textContent); dados.cria = JSON.parse(document.getElementById('cap-cria').textContent); } catch (e) { dados = null; }
    if (dados) {
      var estado = { cria: 'engorda', cabecas: 300 }, usou = false;
      /* conta que o cartão foi usado, sem levar o que a pessoa marcou */
      var usar = function () { if (usou) return; usou = true; if (window.gtag) window.gtag('event', 'usar_calculadora', { pagina: location.pathname }); };
      var milhar = function (n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); };
      var planoPara = function (n) {
        for (var i = 0; i < dados.planos.length; i++) if (dados.planos[i].animais === null || n <= dados.planos[i].animais) return dados.planos[i];
        return dados.planos[dados.planos.length - 1];
      };
      var gratis = dados.planos[0];
      /* O cartão responde o que cabe no grátis. Passando do limite de fichas, diz quantas cabeças vão por lote
         (que não tem limite) e qual plano dá ficha para todas. Não mostra preço. */
      var pintar = function (origem) {
        var n = estado.cabecas, p = planoPara(n), cabe = n <= gratis.animais;
        cartoes.forEach(function (c) {
          var campo = c.querySelector('[data-cabecas]');
          if (campo && campo !== origem) campo.value = milhar(n);
          [].forEach.call(c.querySelectorAll('[data-cria]'), function (r) { r.checked = r.value === estado.cria; });
          [].forEach.call(c.querySelectorAll('[data-atalho]'), function (b) { b.setAttribute('aria-pressed', String(+b.getAttribute('data-atalho') === n)); });
          var caixa = c.querySelector('[data-resposta]');
          if (!caixa) return;
          var antes = caixa.getAttribute('data-plano-atual');
          caixa.querySelector('[data-selo]').textContent = cabe ? 'Cabe no plano grátis' : milhar(gratis.animais) + ' fichas cabem no grátis';
          caixa.querySelector('[data-periodo]').textContent = cabe ? 'para sempre, sem cartão' : 'para começar, sem cartão';
          caixa.querySelector('[data-limites]').textContent = cabe
            ? 'Plano ' + gratis.nome + ': até ' + gratis.fazendas + ' fazendas, ' + gratis.pessoas + ' pessoas e ' + milhar(gratis.animais) + ' animais com ficha.'
            : (n - gratis.animais === 1 ? 'A cabeça que passa entra' : 'As outras ' + milhar(n - gratis.animais) + ' cabeças entram') + ' por lote, que não tem limite. Ficha para todas: plano ' + p.nome + (p.animais === null ? ', sem limite de fichas.' : ', até ' + milhar(p.animais) + ' fichas.');
          caixa.querySelector('[data-cria-linha]').textContent = dados.cria[estado.cria] || '';
          if (antes !== p.id) {
            caixa.setAttribute('data-plano-atual', p.id);
            if (antes && !menosMovimento) { caixa.classList.remove('pisca'); void caixa.offsetWidth; caixa.classList.add('pisca'); }
          }
        });
      };
      cartoes.forEach(function (c) {
        c.addEventListener('submit', function (e) { e.preventDefault(); });
        c.addEventListener('change', function (e) {
          if (e.target.matches('[data-cria]') && e.target.checked) { estado.cria = e.target.value; usar(); pintar(); }
        });
        c.addEventListener('input', function (e) {
          if (!e.target.matches('[data-cabecas]')) return;
          var n = parseInt(e.target.value.replace(/\D/g, '').slice(0, 7), 10);
          estado.cabecas = isNaN(n) ? 0 : n;
          usar(); pintar(e.target);
        });
        c.addEventListener('focusout', function (e) { if (e.target.matches('[data-cabecas]')) e.target.value = milhar(estado.cabecas); });
        c.addEventListener('click', function (e) {
          var b = e.target.closest('[data-atalho]');
          if (!b) return;
          estado.cabecas = +b.getAttribute('data-atalho');
          usar(); pintar();
        });
      });
      pintar();
    }
  }

  /* ---------- o número grande da oferta conta até o valor quando a faixa entra na tela ---------- */
  var conta = document.querySelector('[data-contar]');
  if (conta && 'IntersectionObserver' in window && !menosMovimento) {
    var alvo = +conta.getAttribute('data-contar'), texto = conta.textContent;
    var formato = function (n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); };
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (en) {
        if (!en.isIntersecting) return;
        obs.disconnect();
        var t0 = null, DUR = 1100;
        var passo = function (t) {
          if (t0 === null) t0 = t;
          var k = Math.min(1, (t - t0) / DUR), suave = 1 - Math.pow(1 - k, 3);
          conta.textContent = k < 1 ? formato(alvo * suave) : texto;
          if (k < 1) requestAnimationFrame(passo);
        };
        requestAnimationFrame(passo);
      });
    }, { threshold: 0.6 });
    obs.observe(conta);
  }

  /* ---------- a linha do tempo se completa quando a seção entra ---------- */
  var linha = document.querySelector('[data-cap-linha]');
  if (linha) {
    if ('IntersectionObserver' in window) {
      var obsLinha = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (en) { if (en.isIntersecting) { linha.classList.add('ativo'); obsLinha.disconnect(); } });
      }, { threshold: 0.35 });
      obsLinha.observe(linha);
    } else linha.classList.add('ativo');
  }
})();
