// FINAGRO · comportamento do site. Sem dependência. Tudo funciona sem JavaScript (o conteúdo está no HTML);
// isto só acrescenta movimento, a troca de perfil, o cálculo do plano e as perguntas que abrem uma por vez.
(() => {
  const raiz = document.documentElement;
  const menos = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const io = 'IntersectionObserver' in window;

  // 1. Revelar ao entrar na tela (o que já está à vista não pisca)
  const revelar = [...document.querySelectorAll('.revelar')];
  if (io && revelar.length) {
    const alt = innerHeight;
    revelar.forEach((el) => { if (el.getBoundingClientRect().top < alt) el.classList.add('visivel'); });
    raiz.classList.add('js-ok');
    const obs = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visivel'); obs.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    revelar.forEach((el) => { if (!el.classList.contains('visivel')) obs.observe(el); });
  }

  // 2. Vídeo do app: roda sozinho, mudo e em laço, só enquanto aparece. Com "menos movimento", fica parado com controles.
  document.querySelectorAll('video.video-auto').forEach((v) => {
    if (menos) { v.controls = true; v.preload = 'metadata'; return; }
    const tocar = () => { const p = v.play(); if (p && p.catch) p.catch(() => {}); };
    if (!io) { v.preload = 'auto'; tocar(); return; }
    new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { if (v.preload === 'none') v.preload = 'auto'; tocar(); } else v.pause(); }), { threshold: 0.25 }).observe(v);
  });

  // 3. Vitrine por perfil: o print real da tela de cada criação, com o alerta dela
  const PERFIS = {
    gado: ['294 cabeças de corte e 40 de leite', '6 bezerras estão na idade da vacina de brucelose (3 a 8 meses). Sem a vacina anotada, a GTA (guia de trânsito animal) fica travada.', 'gado: 294 cabeças de corte e 40 de leite, com o alerta da vacina de brucelose', 46, 2, 3],
    leite: ['12 vacas de leite e 2 ha de grãos', 'CBT de 340 mil, acima de 300 mil: lave e resfrie o tanque (4 °C em até 3 horas). Três meses assim e a coleta para.', 'leite: 12 vacas e 117 litros no dia, com o alerta de CBT alta no tanque', 12, 1, 1],
    granja: ['1.000.000 de aves em 20 galpões', 'Hoje chega a 38 °C: ventile o galpão nas horas quentes.', 'granja: 1 milhão de aves em 20 galpões, com o aviso de ventilar o galpão no calor', 0, 1, 5],
    peixe: ['12.000 peixes em 4 tanques', 'Oxigênio baixo (2,6 mg/L): ligue o aerador e segure a ração até subir.', 'peixe: 12 mil peixes em 4 tanques, com o alerta de oxigênio baixo', 0, 1, 3],
    abelha: ['20 colmeias em 2 apiários', 'Tempo firme hoje: bom dia para revisar as colmeias.', 'abelha: 20 colmeias, 16,2 kg de mel no dia e o tempo para revisar as colmeias', 0, 1, 1],
    graos: ['1.000 ha de grãos', 'Não pulverize agora: vento de 18 km/h. Próxima hora boa: 02:00.', 'lavoura: 1.000 hectares de grãos, com o aviso de vento para pulverizar', 0, 3, 10],
  };
  const img = document.getElementById('vitrine-img');
  const fala = document.getElementById('vitrine-fala');
  const chips = [...document.querySelectorAll('#chips-perfil input')];
  const cAnimais = document.getElementById('c-animais'), cFaz = document.getElementById('c-fazendas'), cPes = document.getElementById('c-pessoas');
  let girando = true, timer = null, pausado = false;
  const precarregar = () => Object.keys(PERFIS).forEach((k) => { const i = new Image(); i.src = `/assets/telas/perfil-${k}.webp`; });
  function mostrar(k, doUsuario) {
    const d = PERFIS[k]; if (!d || !img) return;
    const trocar = () => {
      img.src = `/assets/telas/perfil-${k}.webp`; img.alt = `Painel do FINAGRO para ${d[2]}`;
      document.getElementById('vitrine-rotulo').textContent = d[0];
      document.getElementById('vitrine-alerta').textContent = d[1];
      img.classList.remove('saindo'); fala.classList.remove('saindo');
    };
    if (menos) trocar(); else { img.classList.add('saindo'); fala.classList.add('saindo'); setTimeout(trocar, 240); }
    if (doUsuario && cAnimais) { cAnimais.value = d[3]; cFaz.value = String(d[4]); cPes.value = String(d[5]); calcular(); }
  }
  chips.forEach((c) => c.addEventListener('change', () => { girando = false; clearInterval(timer); mostrar(c.value, true); }));
  const vitrine = document.querySelector('.vitrine');
  if (vitrine && !menos && io) {
    let carregou = false;
    new IntersectionObserver((es) => es.forEach((e) => {
      pausado = !e.isIntersecting;
      if (e.isIntersecting && !carregou) { carregou = true; precarregar(); }
      if (e.isIntersecting && girando && !timer) timer = setInterval(() => {
        if (!girando || pausado) return;
        const i = chips.findIndex((c) => c.checked); const prox = chips[(i + 1) % chips.length];
        prox.checked = true; mostrar(prox.value, false);
      }, 4200);
    }), { threshold: 0.35 }).observe(vitrine);
    ['pointerdown', 'focusin', 'keydown'].forEach((ev) => document.querySelector('.perfil')?.addEventListener(ev, () => { girando = false; clearInterval(timer); }, { once: true }));
  }

  // 4. Qual plano cabe (mesmos limites do catálogo do app: fazendas, pessoas, animais com ficha)
  const LIM = [['Campo', 'grátis', 3, 5, 1000], ['Essencial', 'R$ 59,90 por mês', 6, 10, 5000], ['Profissional', 'R$ 149,90 por mês', 15, 30, 25000], ['Avançado', 'R$ 299,90 por mês', 50, 100, Infinity]];
  function calcular() {
    if (!cAnimais) return;
    const a = Math.max(0, parseInt(cAnimais.value, 10) || 0), f = +cFaz.value, p = +cPes.value;
    const ok = LIM.find(([, , mf, mp, ma]) => f <= mf && p <= mp && a <= ma);
    const plano = document.getElementById('res-plano'), txt = document.getElementById('res-texto');
    if (!ok) { plano.innerHTML = 'Seu plano: <b>Empresarial</b>'; txt.textContent = 'Mais de 50 fazendas ou de 100 pessoas: o Empresarial não tem limite e começa em R$ 699 por mês.'; return; }
    const [nome, preco, mf, mp, ma] = ok;
    plano.innerHTML = `Seu plano: <b>${nome}, ${preco}</b>`;
    txt.textContent = nome === 'Campo'
      ? 'Cabe tudo no grátis: até 3 fazendas, 5 pessoas e 1.000 animais com ficha. Lote de galpão, tanque ou colmeia não tem limite.'
      : `Cabe no ${nome}: até ${mf} fazendas, ${mp} pessoas e ${ma === Infinity ? 'animais com ficha sem limite' : ma.toLocaleString('pt-BR') + ' animais com ficha'}. Dá para testar 14 dias, e o Campo continua grátis se preferir ficar nele.`;
  }
  [cAnimais, cFaz, cPes].forEach((c) => c && c.addEventListener('input', calcular));
  calcular();

  // 5. Planos no celular: o cartão tocado mostra a lista dele na faixa de baixo
  const cartoes = [...document.querySelectorAll('.plano[data-plano]')];
  function abrir(c) {
    cartoes.forEach((x) => x.setAttribute('aria-pressed', String(x === c)));
    document.querySelectorAll('#plano-aberto [data-lista]').forEach((l) => { l.hidden = l.dataset.lista !== c.dataset.plano; });
  }
  cartoes.forEach((c) => {
    c.addEventListener('click', (e) => { if (!e.target.closest('a')) abrir(c); });
    c.addEventListener('keydown', (e) => { if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('a')) { e.preventDefault(); abrir(c); } });
  });

  // 6. Perguntas: abrir uma fecha a outra (o atributo name já faz isso nos navegadores novos) e "ver mais"
  const detalhes = [...document.querySelectorAll('.faq details')];
  detalhes.forEach((d) => d.addEventListener('toggle', () => { if (d.open) detalhes.forEach((o) => { if (o !== d && o.open) o.open = false; }); }));
  document.querySelectorAll('[data-ver-mais]').forEach((b) => b.addEventListener('click', () => {
    const alvo = document.getElementById(b.dataset.verMais); if (!alvo) return;
    alvo.classList.add('aberta'); b.remove();
  }));
})();
