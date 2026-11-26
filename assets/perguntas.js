/* =============================================================
   FINAGRO — Perguntas frequentes da página /android (26/11/2026)

   Portado do FAQ da home da KR TECH (kr-tech-app/site/publico/js/faq.js,
   doutrina de interface, seção 9). O HTML vem pronto do scripts/gerar.mjs
   (função duvidas) e funciona sem este arquivo: sem script, todas as
   perguntas aparecem e o name="duvidas" do <details> já deixa uma aberta
   por vez. Aqui entram:

   1. o N do "Ver mais perguntas (+N)": CONTA das perguntas que o CSS
      escondeu (5 à vista numa coluna, 6 em duas), refeita no resize,
      porque a 6ª entra ou sai conforme o número de colunas;
   2. o "ver mais" e o "ver menos" com a altura transitando em 300 ms
      na curva cubic-bezier(.22,1,.36,1), escrita no grid-template-rows
      do palco a cada quadro. No "ver menos", a MESMA conta move a
      rolagem no mesmo quadro, para o título da seção e o botão
      terminarem na tela;
   3. o foco: quem abre pelo teclado vai para a 1ª pergunta nova; quem
      recolhe continua no botão, que fica na tela;
   4. a reserva do acordeão: no navegador sem ::details-content com
      interpolate-size (Safari, Firefox), a resposta abre e fecha com a
      mesma curva pelo grid-template-rows, e o script garante uma
      aberta por vez.
   "Menos movimento": sem deslocamento, só um fade curto.
   ============================================================= */
(function () {
'use strict'
const DUR = 300
const CURVA_CSS = 'cubic-bezier(.22,1,.36,1)'
const curva = bezier(0.22, 1, 0.36, 1)
const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)')

const raiz = document.querySelector('[data-perguntas]')
if (raiz) iniciar(raiz)

function iniciar(raiz) {
  const palco = raiz.querySelector('.duvidas__palco')
  const lista = raiz.querySelector('.duvidas__lista')
  const acoes = raiz.querySelector('.duvidas__acoes')
  const botao = raiz.querySelector('.duvidas__botao')
  const rotulo = botao && botao.querySelector('.duvidas__rotulo')
  const itens = Array.from(lista.querySelectorAll('.duvida'))
  const secao = raiz.closest('section') || raiz
  const cabeca = secao.querySelector('.cabeca') || secao.querySelector('h2') || raiz
  let aberta = false
  let animando = false

  raiz.classList.add('duvidas--js', 'duvidas--pronta')
  const visivel = (el) => el.getClientRects().length > 0

  /* ---------- 1. o N é conta ---------- */
  function rotular() {
    if (!botao) return
    if (aberta) {
      rotulo.textContent = 'Ver menos perguntas'
      botao.setAttribute('aria-expanded', 'true')
      botao.hidden = false
      return
    }
    const escondidas = itens.filter((i) => !visivel(i)).length
    rotulo.textContent = `Ver mais perguntas (+${escondidas})`
    botao.setAttribute('aria-expanded', 'false')
    botao.hidden = escondidas === 0
  }
  rotular()
  let quadroResize = 0
  window.addEventListener('resize', () => {
    cancelAnimationFrame(quadroResize)
    quadroResize = requestAnimationFrame(() => { if (!animando) rotular() })
  })

  /* ---------- 2. ver mais / ver menos ---------- */
  // rolagem imediata: o site tem html { scroll-behavior: smooth }, que transformaria cada passo numa rolagem animada.
  // Desliga-se o suave só durante a troca e usa-se scrollTo(x, y), que todo navegador aceita ({ behavior: 'instant' }
  // não existe no enum do Safari antigo e lança erro)
  const html = document.documentElement
  let suaveAntes = null
  const rolarJa = (y) => window.scrollTo(0, y)
  const suaveDesligado = (sim) => {
    if (sim) { suaveAntes = html.style.scrollBehavior; html.style.scrollBehavior = 'auto' }
    else { html.style.scrollBehavior = suaveAntes || ''; suaveAntes = null }
  }

  // altura do palco de `de` a `para`; `rolar` (opcional) leva a rolagem junto, na mesma curva e no mesmo quadro
  function animarPalco(de, para, rolar) {
    return new Promise((pronto) => {
      animando = true
      raiz.classList.add('duvidas--animando')
      palco.style.gridTemplateRows = `${de}px`
      if (rolar) suaveDesligado(true)
      let fim = false
      const terminar = () => {
        if (fim) return
        fim = true
        palco.style.gridTemplateRows = ''
        if (rolar) { rolarJa(rolar.para); suaveDesligado(false) }
        raiz.classList.remove('duvidas--animando')
        animando = false
        pronto()
      }
      // O relógio da curva é o performance.now() da hora em que cada quadro roda (o carimbo do requestAnimationFrame
      // vinha de ANTES do layout das perguntas novas, ~70 ms no celular emulado, e a curva começava atrasada) e só
      // começa no 2º quadro. Cada quadro avança o tempo real dele, limitado a 50 ms: quadro travado (a pintura das
      // perguntas que acabaram de aparecer num aparelho fraco) anda no máximo 50 ms da curva, e a altura continua de
      // onde estava em vez de pular o trecho perdido (medido em 16/11/2026: um quadro de mais de 300 ms fazia a lista
      // abrir de uma vez). Aparelho lento o tempo todo termina em ~450 ms, sem salto
      let quadros = 0
      let ultimo = 0
      let tempo = 0
      const passo = () => {
        if (fim) return
        const agora = performance.now()
        if (++quadros > 1) tempo += Math.min(agora - ultimo, 50)
        ultimo = agora
        const t = Math.min(1, tempo / DUR)
        const p = curva(t)
        palco.style.gridTemplateRows = `${de + (para - de) * p}px`
        if (rolar) rolarJa(rolar.de + (rolar.para - rolar.de) * p)
        if (t < 1) requestAnimationFrame(passo)
        else terminar()
      }
      requestAnimationFrame(passo)
      // aba escondida não produz quadro: a troca termina assim mesmo (na hora, se a aba já está escondida)
      if (document.hidden) terminar()
      else setTimeout(terminar, DUR * 8)
    })
  }

  function verMais(peloTeclado) {
    const de = palco.getBoundingClientRect().height
    const antes = new Set(itens.filter(visivel))
    raiz.classList.add('duvidas--aberta')
    const novas = itens.filter((i) => !antes.has(i))
    const para = lista.getBoundingClientRect().height
    aberta = true
    rotular()
    // o esmaecer de entrada só nas que caem na tela (até 8): as de baixo chegam paradas, e 20 animações de uma vez
    // pesavam no 1º quadro
    const fundoDaTela = window.innerHeight
    novas.filter((i) => i.getBoundingClientRect().top < fundoDaTela).slice(0, 8).forEach((i, n) => {
      i.style.setProperty('--pf-atraso', `${n * 22}ms`)
      i.classList.add('duvida--chega')
      i.addEventListener('animationend', () => { i.classList.remove('duvida--chega'); i.style.removeProperty('--pf-atraso') }, { once: true })
    })
    if (peloTeclado && novas[0]) novas[0].querySelector('summary').focus({ preventScroll: true })
    if (menosMovimento.matches) return
    animarPalco(de, para, null)
  }

  // altura do topo grudado (o cabeçalho do site), para o título não terminar por baixo dele
  function alturaDoTopo() {
    const topo = document.querySelector('.topo')
    if (!topo) return 0
    const pos = getComputedStyle(topo).position
    return pos === 'sticky' || pos === 'fixed' ? topo.getBoundingClientRect().height : 0
  }

  function verMenos() {
    const de = palco.getBoundingClientRect().height
    // a altura recolhida se mede trocando a classe e voltando, na mesma tarefa: nada pinta no meio
    raiz.classList.remove('duvidas--aberta')
    const para = lista.getBoundingClientRect().height
    const somem = itens.filter((i) => !visivel(i))
    const margemAcoes = parseFloat(getComputedStyle(acoes).marginTop) || 0
    raiz.classList.add('duvidas--aberta')

    // onde a página termina: o título da seção logo abaixo do topo grudado e o botão inteiro na tela
    const y = window.scrollY
    const topo = alturaDoTopo()
    const yCabeca = cabeca.getBoundingClientRect().top + y
    const yPalco = palco.getBoundingClientRect().top + y
    const fimDoBotao = yPalco + para + margemAcoes + acoes.offsetHeight
    let alvo = y
    const cabecaNaTela = yCabeca - topo - 8 >= y
    const botaoNaTela = fimDoBotao + 16 <= y + window.innerHeight
    if (!cabecaNaTela || !botaoNaTela) {
      alvo = Math.max(0, yCabeca - topo - 20)
      if (fimDoBotao + 16 > alvo + window.innerHeight) alvo = fimDoBotao + 16 - window.innerHeight
    }

    const fechar = () => {
      raiz.classList.remove('duvidas--aberta')
      for (const i of somem) { i.removeAttribute('open'); i.style.opacity = '' }
      aberta = false
      rotular()
      if (document.activeElement && !visivel(document.activeElement)) botao.focus({ preventScroll: true })
    }
    if (menosMovimento.matches) {
      fechar()
      suaveDesligado(true)
      rolarJa(alvo)
      suaveDesligado(false)
      return
    }
    // esmaecem só as que estão na tela: as outras somem no fim, fora da vista
    for (const i of somem) {
      const r = i.getBoundingClientRect()
      if (r.bottom > 0 && r.top < window.innerHeight) i.animate({ opacity: [1, 0] }, { duration: DUR * 0.7, easing: 'ease', fill: 'forwards' })
    }
    animarPalco(de, para, alvo !== y ? { de: y, para: alvo } : null).then(() => {
      for (const i of somem) i.getAnimations().forEach((a) => a.cancel())
      fechar()
    })
  }

  if (botao) {
    botao.addEventListener('click', (e) => {
      if (animando) return
      if (aberta) verMenos()
      else verMais(e.detail === 0)
    })
  }

  /* ---------- 4. reserva do acordeão ---------- */
  const nativo = !!(window.CSS && CSS.supports('interpolate-size: allow-keywords') && CSS.supports('selector(::details-content)'))
  if (!nativo) acordeaoPorScript()

  function acordeaoPorScript() {
    raiz.classList.add('duvidas--acordeao-js')
    for (const d of itens) d.removeAttribute('name')
    const animacao = new WeakMap()

    const animarCorpo = (d, abrir) => {
      const corpo = d.querySelector('.duvida__corpo')
      animacao.get(d)?.cancel()
      d.classList.add('duvida--animando')
      const a = menosMovimento.matches
        ? corpo.animate({ opacity: abrir ? [0, 1] : [1, 0] }, { duration: 150, easing: 'ease' })
        : corpo.animate({ gridTemplateRows: abrir ? ['0fr', '1fr'] : ['1fr', '0fr'] }, { duration: DUR, easing: CURVA_CSS })
      animacao.set(d, a)
      a.onfinish = () => {
        d.classList.remove('duvida--animando')
        if (!abrir) { d.open = false; delete d.dataset.fechando }
        animacao.delete(d)
      }
      a.oncancel = () => d.classList.remove('duvida--animando')
    }
    const fechar = (d) => { d.dataset.fechando = '1'; animarCorpo(d, false) }
    const abrir = (d) => {
      for (const o of itens) if (o !== d && o.open && !o.dataset.fechando) fechar(o)
      delete d.dataset.fechando
      d.open = true
      animarCorpo(d, true)
    }

    lista.addEventListener('click', (e) => {
      const s = e.target.closest('summary')
      if (!s || !lista.contains(s)) return
      e.preventDefault()
      const d = s.parentElement
      if (d.open && !d.dataset.fechando) fechar(d)
      else abrir(d)
    })
    // aberta por fora do clique (busca do navegador, outro script): fecha as outras
    for (const d of itens) {
      d.addEventListener('toggle', () => {
        if (!d.open || d.dataset.fechando) return
        for (const o of itens) if (o !== d && o.open && !o.dataset.fechando) fechar(o)
      })
    }
  }
}

/* Curva cubic-bezier(x1, y1, x2, y2) como função do tempo (0 a 1), a mesma do CSS. */
function bezier(x1, y1, x2, y2) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by
  const x = (t) => ((ax * t + bx) * t + cx) * t
  const y = (t) => ((ay * t + by) * t + cy) * t
  const dx = (t) => (3 * ax * t + 2 * bx) * t + cx
  return (alvo) => {
    if (alvo <= 0) return 0
    if (alvo >= 1) return 1
    let t = alvo
    for (let i = 0; i < 8; i++) {
      const erro = x(t) - alvo
      if (Math.abs(erro) < 1e-6) return y(t)
      const d = dx(t)
      if (Math.abs(d) < 1e-6) break
      t -= erro / d
    }
    let lo = 0, hi = 1
    t = alvo
    for (let i = 0; i < 30; i++) {
      const v = x(t)
      if (Math.abs(v - alvo) < 1e-6) break
      if (v < alvo) lo = t
      else hi = t
      t = (lo + hi) / 2
    }
    return y(t)
  }
}
})();
