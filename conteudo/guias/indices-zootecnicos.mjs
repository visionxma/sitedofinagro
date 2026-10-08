// Consulta-alvo: "índices zootécnicos", "taxa de prenhez", "taxa de natalidade", "taxa de desmama", "taxa de desfrute",
// "intervalo entre partos" (colheita de 08/10/2026). Fonte principal: Embrapa, Documentos 237, "Indicadores de
// desempenho na pecuária de corte".
const DOC237 = 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1090951/1/Indicadoresdedesempenhonapecuariadecorte.pdf';
const SAC = 'https://cloud.cnpgc.embrapa.br/sac/2012/04/02/qual-e-a-duracao-da-gestacao-e-qual-o-intervalo-medio-entre-partos-em-gado-de-corte/';

export const provas = [
  { afirmacao: 'a taxa de prenhez é medida em % das matrizes expostas a touro ou inseminação por ano', trecho: 'Taxa de prenhez % matrizes expostas a touro e/ou inseminação/ ano Cria, Ciclo completo R', url: DOC237 },
  { afirmacao: 'a taxa de prenhez é a razão entre as prenhezes confirmadas e as fêmeas expostas', trecho: 'é calculado como a razão entre o número de prenhezes de IATF confirmadas (normalmente por meio de diagnóstico precoce de prenhez) e o número de fêmeas expostas', url: DOC237 },
  { afirmacao: 'a taxa de natalidade é medida em bezerros por matriz por ano', trecho: 'Taxa de natalidade Bezerros(as)/matrizes/ ano Cria, Ciclo completo R', url: DOC237 },
  { afirmacao: 'a taxa de desmama é medida em bezerros por matriz por ano', trecho: 'Taxa de desmama Bezerros (as)/matrizes/ ano Cria, Ciclo completo R', url: DOC237 },
  { afirmacao: 'a taxa de desfrute dá a ideia da eficiência produtiva em relação ao estoque de bovinos', trecho: 'Este indicador é normalmente utilizado para dar ideia da eficiência produtiva em relação ao estoque de bovinos da propriedade', url: DOC237 },
  { afirmacao: 'exemplo da Embrapa: 150 animais vendidos de um rebanho de 600 dão desfrute de 25%', trecho: 'Supondo-se duas propriedades com o mesmo rebanho de 600 animais, vendendo 150 animais por ano, tem-se um desfrute de 25%', url: DOC237 },
  { afirmacao: 'o desfrute em cabeças não mostra o peso vendido: o desfrute em peso exige rebanho estabilizado', trecho: 'é importante ressaltar que tal análise é válida para um rebanho estabilizado', url: DOC237 },
  { afirmacao: 'perdas gestacionais são a diferença entre as prenhezes confirmadas e as que chegaram ao parto', trecho: 'é a diferença entre o número de prenhezes confirmadas por diagnóstico e o número de prenhezes vindas a termo', url: DOC237 },
  { afirmacao: 'no sistema extensivo o intervalo entre partos varia de 20 a 24 meses', trecho: 'Nos sistemas de pecuária extensiva, esse intervalo varia de 20 a 24 meses', url: SAC },
  { afirmacao: 'com manejo e alimentação melhores o intervalo pode cair para 12 a 13 meses', trecho: 'com a intensificação dos sistemas de manejo e alimentação, esse intervalo pode ser reduzido para 12 a 13 meses', url: SAC },
];

export default {
  slug: 'indices-zootecnicos',
  grupo: 'corte',
  tipo: 'calculadora',
  curto: 'Índices zootécnicos',
  resumo: 'Prenhez, natalidade, desmama e desfrute.',
  title: 'Índices zootécnicos: prenhez, natalidade e desfrute',
  description: 'Índices zootécnicos do gado de corte: calcule a taxa de prenhez, natalidade, desmama e desfrute do rebanho e veja o que cada conta diz da sua cria.',
  h1: 'Índices zootécnicos: calcule prenhez, natalidade, desmama e desfrute',
  pergunta: 'Como calcular a taxa de prenhez, de natalidade, de desmama e de desfrute?',
  resposta: 'Prenhez é vacas prenhes dividido por vacas expostas. Natalidade é bezerros nascidos dividido por matrizes. Desmama é bezerros desmamados dividido por matrizes. Desfrute é animais vendidos dividido por animais do rebanho. Com 100 vacas, 82 prenhes, 78 nascidos e 72 desmamados: prenhez de 82%, natalidade de 78% e desmama de 72%.',
  tela: 'relatorios',
  atualizado: '2026-10-08',
  calc: {
    titulo: 'Calcule os índices da sua cria',
    campos: [
      { id: 'expostas', rotulo: 'Vacas expostas ao touro ou IA', valor: 100, min: 1, passo: 1 },
      { id: 'prenhes', rotulo: 'Vacas prenhes', valor: 82, min: 0, passo: 1 },
      { id: 'nascidos', rotulo: 'Bezerros nascidos', valor: 78, min: 0, passo: 1 },
      { id: 'desmamados', rotulo: 'Bezerros desmamados', valor: 72, min: 0, passo: 1 },
      { id: 'rebanho', rotulo: 'Animais no rebanho', valor: 600, min: 1, passo: 1 },
      { id: 'vendidos', rotulo: 'Vendidos ou abatidos no ano', valor: 150, min: 0, passo: 1 },
    ],
    saidas: [
      { id: 'prenhez', rotulo: 'taxa de prenhez (%)', casas: 1 },
      { id: 'natalidade', rotulo: 'taxa de natalidade (%)', casas: 1 },
      { id: 'desmama', rotulo: 'taxa de desmama (%)', casas: 1 },
      { id: 'desfrute', rotulo: 'taxa de desfrute (%)', casas: 1 },
    ],
    calcular: (v) => ({
      prenhez: v.prenhes / v.expostas * 100,
      natalidade: v.nascidos / v.expostas * 100,
      desmama: v.desmamados / v.expostas * 100,
      desfrute: v.vendidos / v.rebanho * 100,
    }),
    nota: 'A Embrapa mede natalidade e desmama em bezerros por matriz por ano. Multiplicar por 100 dá a porcentagem. Aqui as matrizes são as vacas expostas ao touro ou à inseminação. Use os números de um ano só, do mesmo grupo de vacas.',
    exemplos: [
      { entrada: { expostas: 100, prenhes: 82, nascidos: 78, desmamados: 72, rebanho: 600, vendidos: 150 }, saida: { prenhez: 82, natalidade: 78, desmama: 72, desfrute: 25 } },
      { entrada: { expostas: 250, prenhes: 190, nascidos: 176, desmamados: 165, rebanho: 900, vendidos: 207 }, saida: { prenhez: 76, natalidade: 70.4, desmama: 66, desfrute: 23 } },
    ],
  },
  secoes: [
    { h2: 'Os quatro índices da cria em uma conta', blocos: [
      { p: 'Índices zootécnicos são as taxas que mostram se a fazenda produz bem. Na pecuária de corte, a Embrapa Gado de Corte organiza esses indicadores em um documento que serve de base para esta página. Os quatro que mais se procuram são os da cria.' },
      { glossario: [
        ['Taxa de prenhez', 'Das vacas expostas ao touro ou à inseminação no ano, quantas ficaram prenhes. Dá em %.'],
        ['Taxa de natalidade', 'Quantos bezerros nasceram por matriz no ano.'],
        ['Taxa de desmama', 'Quantos bezerros chegaram à desmama por matriz no ano.'],
        ['Taxa de desfrute', 'Quantos animais saíram do rebanho, vendidos ou abatidos, em relação ao total de animais.'],
      ] },
    ] },
    { h2: 'Como calcular cada um, com exemplo', blocos: [
      { p: 'A Embrapa define a taxa de prenhez como a razão entre as prenhezes confirmadas, de preferência por diagnóstico precoce, e as fêmeas expostas. Natalidade e desmama saem em bezerros por matriz por ano. O desfrute é o número de animais vendidos sobre o número de animais do rebanho.' },
      { tabela: { colunas: ['Índice', 'Conta', 'Resultado'], linhas: [
        ['Prenhez', '82 prenhes ÷ 100 expostas', '82%'],
        ['Natalidade', '78 nascidos ÷ 100 matrizes', '78%'],
        ['Desmama', '72 desmamados ÷ 100 matrizes', '72%'],
        ['Desfrute', '150 vendidos ÷ 600 no rebanho', '25%'],
      ], nota: 'Exemplo de uma fazenda de cria com 100 vacas e 600 animais. Os números de entrada são ilustrativos.' } },
      { p: 'O desfrute de 25% bate com o exemplo da Embrapa: rebanho de 600 animais, 150 vendidos por ano. Cada índice responde a uma pergunta. A prenhez diz quantas vacas pegaram barriga. A natalidade, quantas viraram bezerro. A desmama, quantos bezerros chegaram ao fim da cria.' },
    ] },
    { h2: 'Onde a cria perde bezerro', blocos: [
      { p: 'Com os três números lado a lado, a perda aparece. No exemplo, 82 vacas ficaram prenhes e só 78 bezerros nasceram: foram 4 perdas na gestação. Depois, 78 nasceram e 72 foram desmamados: 6 perdas na criação.' },
      { p: 'A Embrapa dá nome à primeira perda: perdas gestacionais. É a diferença entre as prenhezes confirmadas no diagnóstico e as que chegaram ao parto. Pode vir de problema infeccioso ou não, por reabsorção do embrião ou aborto. Se a prenhez é alta e a natalidade cai, olhe a sanidade e a nutrição das matrizes.' },
      { destaque: 'Cada taxa precisa de uma contagem honesta. Vaca vazia que não foi diagnosticada e bezerro que nasceu e morreu sem registro bagunçam a conta.' },
    ] },
    { h2: 'Intervalo entre partos', blocos: [
      { p: 'Intervalo entre partos é o tempo entre um parto e o seguinte da mesma vaca. Quanto menor, mais bezerros por vaca em um ano. A Embrapa informa que, nos sistemas de pecuária extensiva, ele varia de **20 a 24 meses**.' },
      { p: 'Com a intensificação do manejo e da alimentação, o intervalo pode cair para **12 a 13 meses**, o que, nas palavras da Embrapa, tem grande impacto na eficiência reprodutiva do rebanho. Para medir o da sua fazenda, anote a data de cada parto de cada vaca e subtraia as duas últimas.' },
    ] },
    { h2: 'Cuidado com a taxa de desfrute', blocos: [
      { p: 'A taxa de desfrute dá uma ideia da eficiência produtiva em relação ao estoque de bovinos da propriedade. Quanto mais animais vendidos em relação ao rebanho, maior o desfrute.' },
      { p: 'Mas a conta por cabeça não vê o peso. Duas fazendas com 600 animais que vendem 150 por ano têm os mesmos 25%, mesmo que uma venda bois 15% mais pesados que os da outra. A Embrapa sugere ainda um desfrute em arrobas ou em quilos de peso vivo, que só vale para rebanho estabilizado, sem mudança grande de um ano para o outro.' },
    ] },
    { h2: 'E qual é a meta boa para cada índice', blocos: [
      { p: 'O documento da Embrapa que sustenta esta página define os indicadores e como medi-los, mas não fixa um número que valha para toda fazenda. Por isso esta página não promete meta. Região, raça, pasto e sistema mudam o resultado.' },
      { p: 'O melhor termo de comparação é o seu próprio histórico: calcule os quatro índices neste ano, repita no próximo e veja se a prenhez, a natalidade e a desmama estão subindo. Para metas da sua região, converse com o veterinário ou o zootecnista que atende a fazenda.' },
    ] },
  ],
  noFinagro: { h2: 'Os números da cria no FINAGRO', itens: [
    'A taxa de prenhez sai pronta na reprodução: das fêmeas cobertas ou inseminadas, quantas ficaram prenhes.',
    'Cada cobertura, parto e desmame fica na ficha da vaca, com o parto previsto e o aviso no celular. Dali saem as contagens para natalidade e desmama.',
    'O total de animais e a venda do ano aparecem nos lotes e nas receitas, para a conta do desfrute.',
    'Natalidade, desmama e desfrute você calcula na tabela acima, com as contagens que o app guarda. O relatório sai em PDF e em planilha.',
  ] },
  cta: { forte: 'Cobertura, parto e desmame num lugar só, no celular.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre índices zootécnicos',
  faq: [
    ['O que são índices zootécnicos?', 'São taxas que medem o desempenho do rebanho, como prenhez, natalidade, desmama e desfrute. A Embrapa as chama de indicadores de desempenho técnico.'],
    ['Como calcular a taxa de prenhez?', 'Divida o número de vacas prenhes confirmadas pelo número de vacas expostas ao touro ou à inseminação e multiplique por 100. Com 82 prenhes em 100 expostas, a taxa é de 82%.'],
    ['Qual a diferença entre natalidade e desmama?', 'Natalidade conta os bezerros que nasceram por matriz. Desmama conta os que chegaram à desmama por matriz. A diferença entre as duas são os bezerros perdidos na criação.'],
    ['Como calcular a taxa de desfrute?', 'Divida os animais vendidos ou abatidos no ano pelos animais do rebanho. Em um rebanho de 600 com 150 vendidos, o desfrute é de 25%, exemplo da própria Embrapa.'],
    ['Quanto deve ser o intervalo entre partos?', 'A Embrapa informa de 20 a 24 meses nos sistemas extensivos, e de 12 a 13 meses quando o manejo e a alimentação são intensificados.'],
  ],
  fontes: [
    { nome: 'Embrapa, Indicadores de desempenho na pecuária de corte (Documentos 237)', url: DOC237 },
    { nome: 'Embrapa Gado de Corte, duração da gestação e intervalo entre partos', url: SAC },
  ],
  relacionados: ['calculadora-de-gestacao-bovina', 'estacao-de-monta', 'controle-de-rebanho'],
};
