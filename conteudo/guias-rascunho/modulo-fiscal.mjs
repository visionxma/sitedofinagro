// Consultas-alvo: "módulo fiscal", "módulo fiscal por município", "módulo fiscal incra", "módulo fiscal embrapa",
// "quantos hectares tem um módulo fiscal" (terceira leva, 08/10/2026).
// Normas: Lei 6.746/1979 (criou o módulo fiscal no Estatuto da Terra), Lei 8.629/1993 (art. 4º, com a redação da Lei 13.465/2017),
// Lei 11.326/2006 (agricultura familiar), Lei 12.651/2012 (Código Florestal) e Lei 6.015/1973 (art. 176, § 3º).
// O guia NÃO copia tabela de municípios: o valor de cada município se consulta no Incra ou na Embrapa.
const L6746 = 'https://www.planalto.gov.br/ccivil_03/leis/1970-1979/l6746.htm';
const L8629 = 'https://www.planalto.gov.br/ccivil_03/leis/l8629.htm';
const L11326 = 'https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11326.htm';
const L12651 = 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651.htm';
const L6015 = 'https://www.planalto.gov.br/ccivil_03/leis/l6015compilada.htm';
const INCRA = 'https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/modulo-fiscal';
const INCRA_CCIR = 'https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/cadastro-imovel-rural';
const EMBRAPA = 'https://www.embrapa.br/codigo-florestal/area-de-reserva-legal-arl/modulo-fiscal';

export const provas = [
  { afirmacao: 'o módulo fiscal é uma unidade de medida em hectares, fixada pelo Incra para cada município', trecho: 'Módulo fiscal é uma unidade de medida, em hectares, cujo valor é fixado pelo INCRA para cada município', url: EMBRAPA },
  { afirmacao: 'a lei manda determinar o módulo fiscal de cada município em hectares', trecho: 'O módulo fiscal de cada Município, expresso em hectares, será determinado levando-se em conta os seguintes fatores', url: L6746 },
  { afirmacao: 'entram na conta a renda da exploração predominante e as outras explorações expressivas do município', trecho: 'b) a renda obtida no tipo de exploração predominante; c) outras explorações existentes no Município que, embora não predominantes, sejam expressivas em função da renda ou da área utilizada', url: L6746 },
  { afirmacao: 'os tipos de exploração considerados são hortifrutigranjeira, cultura permanente, cultura temporária, pecuária e florestal', trecho: 'o tipo de exploração predominante no município (hortifrutigranjeira, cultura permanente, cultura temporária, pecuária ou florestal)', url: EMBRAPA },
  { afirmacao: 'o tamanho do módulo fiscal muda conforme o município', trecho: 'A dimensão de um módulo fiscal varia de acordo com o município onde está localizada a propriedade', url: EMBRAPA },
  { afirmacao: 'no Brasil o módulo fiscal vai de 5 a 110 hectares', trecho: 'O valor do módulo fiscal no Brasil varia de 5 a 110 hectares', url: EMBRAPA },
  { afirmacao: 'o conceito foi introduzido pela Lei 6.746/1979, que alterou o Estatuto da Terra', trecho: 'O conceito de módulo fiscal foi introduzido pela Lei nº 6.746/1979, que alterou alguns dispositivos do Estatuto da Terra', url: EMBRAPA },
  { afirmacao: 'o número de módulos fiscais é a área aproveitável total dividida pelo módulo fiscal do município', trecho: 'O número de módulos fiscais de um imóvel rural será obtido dividindo-se sua área aproveitável total pelo modulo fiscal do Município', url: L6746 },
  { afirmacao: 'área aproveitável é a que pode ser explorada com agricultura, pecuária ou floresta', trecho: 'constitui área aproveitável do imóvel rural a que for passível de exploração agrícola, pecuária ou florestal', url: L6746 },
  { afirmacao: 'não contam como aproveitável a benfeitoria, a mata de preservação permanente e a área imprestável', trecho: 'a) a área ocupada por benfeitoria; b) a área ocupada por floresta ou mata de efetiva preservação permanente, ou reflorestada com essências nativas; c) a área comprovadamente imprestável para qualquer exploração agrícola, pecuária ou florestal', url: L6746 },
  { afirmacao: 'pequena propriedade é o imóvel rural de até quatro módulos fiscais, respeitada a fração mínima de parcelamento', trecho: 'II - Pequena Propriedade - o imóvel rural: a) de área até quatro módulos fiscais, respeitada a fração mínima de parcelamento', url: L8629 },
  { afirmacao: 'média propriedade é o imóvel rural de mais de 4 e até 15 módulos fiscais', trecho: 'III - Média Propriedade - o imóvel rural: a) de área superior a 4 (quatro) e até 15 (quinze) módulos fiscais', url: L8629 },
  { afirmacao: 'grande propriedade é o imóvel rural de mais de 15 módulos fiscais', trecho: 'Grande Propriedade: imóvel rural de área superior a 15 módulos fiscais', url: INCRA },
  { afirmacao: 'minifúndio é o imóvel rural menor que a fração mínima de parcelamento', trecho: 'Minifúndio: imóvel rural com área inferior a Fração Mínima de Parcelamento', url: INCRA },
  { afirmacao: 'a classificação vem da Lei 8.629/1993 e considera o módulo fiscal, que varia por município', trecho: 'e considera o módulo fiscal , que varia de acordo com cada município', url: INCRA },
  { afirmacao: 'o módulo fiscal é um dos índices básicos cadastrais do Incra', trecho: 'O módulo fiscal é um dos Índices Básicos Cadastrais utilizados pelo Incra para fixar por município parâmetros de caracterização e classificação do imóvel rural', url: INCRA },
  { afirmacao: 'os índices em vigor foram definidos pela Instrução Especial nº 5 de 2022 do Incra', trecho: 'Os atuais índices foram definidos pelo Incra por meio da Instrução Especial nº 5 de 2022', url: INCRA },
  { afirmacao: 'o Incra mantém a ferramenta Consultar Índices Básicos para ver o módulo fiscal', trecho: 'Para verificar o módulo fiscal e os demais índices básicos, acesse a ferramenta de pesquisa denominada Consultar Índices Básicos', url: INCRA },
  { afirmacao: 'a página da Embrapa consulta o módulo por estado e município, com fonte no Incra', trecho: 'Selecione o Estado e o Município para consulta: Estado (UF) Selecione Município Selecione Dimensão (ha) (Fonte: INCRA)', url: EMBRAPA },
  { afirmacao: 'a pequena e a média propriedade não podem ser desapropriadas para reforma agrária se o dono não tiver outra', trecho: 'São insuscetíveis de desapropriação para fins de reforma agrária a pequena e a média propriedade rural, desde que o seu proprietário não possua outra propriedade rural', url: L8629 },
  { afirmacao: 'o agricultor familiar não pode ter área maior que 4 módulos fiscais', trecho: 'não detenha, a qualquer título, área maior do que 4 (quatro) módulos fiscais', url: L11326 },
  { afirmacao: 'no Código Florestal, o imóvel de até 4 módulos fiscais em 22/07/2008 constitui a reserva legal com a vegetação que existia nessa data', trecho: 'Nos imóveis rurais que detinham, em 22 de julho de 2008, área de até 4 (quatro) módulos fiscais e que possuam remanescente de vegetação nativa em percentuais inferiores ao previsto no art. 12', url: L12651 },
  { afirmacao: 'o Código Florestal usa o módulo fiscal para benefícios da pequena propriedade, faixas de recomposição de APP e reserva legal', trecho: 'na definição de benefícios atribuídos à pequena propriedade ou posse rural familiar; na definição de faixas mínimas para recomposição de Áreas de Preservação Permanente; da manutenção ou recomposição de Reserva Legal', url: EMBRAPA },
  { afirmacao: 'o dono de imóveis que somam até quatro módulos fiscais tem isenção de custos na identificação georreferenciada', trecho: 'garantida a isenção de custos financeiros aos proprietários de imóveis rurais cuja somatória da área não exceda a quatro módulos fiscais', url: L6015 },
  { afirmacao: 'o CCIR traz a classificação fundiária do imóvel', trecho: 'O certificado contém informações sobre o titular, a área, a localização, a exploração e a classificação fundiária do imóvel rural', url: INCRA_CCIR },
];

export default {
  slug: 'modulo-fiscal',
  grupo: 'terra',
  tipo: 'guia',
  curto: 'Módulo fiscal',
  resumo: 'O que é, quanto vale no seu município e para que serve.',
  title: 'Módulo fiscal: o que é e como consultar por município',
  description: 'Módulo fiscal é a medida em hectares que o Incra fixa para cada município. Veja quanto vale, onde consultar o do seu e como ele classifica o imóvel rural.',
  h1: 'Módulo fiscal: quantos hectares tem e como consultar o do seu município',
  pergunta: 'Quantos hectares tem um módulo fiscal?',
  resposta: 'Depende do município. Módulo fiscal é uma unidade de medida em hectares que o Incra fixa para cada município, e no Brasil vai de 5 a 110 hectares. Com ele se classifica o imóvel: até 4 módulos é pequena propriedade, de 4 a 15 é média e acima de 15 é grande.',
  tela: 'inicio',
  atualizado: '2026-10-08',
  calc: {
    titulo: 'Quantos módulos fiscais tem o imóvel',
    campos: [
      { id: 'area', rotulo: 'Área do imóvel (ha)', valor: 180, min: 0, passo: 1 },
      { id: 'modulo', rotulo: 'Módulo fiscal do município (ha)', valor: 30, min: 1, passo: 1 },
    ],
    saidas: [
      { id: 'modulos', rotulo: 'módulos fiscais', casas: 2 },
      { id: 'quatro', rotulo: 'hectares em 4 módulos', casas: 0 },
      { id: 'quinze', rotulo: 'hectares em 15 módulos', casas: 0 },
    ],
    calcular: (v) => ({ modulos: v.modulo > 0 ? v.area / v.modulo : 0, quatro: v.modulo * 4, quinze: v.modulo * 15 }),
    nota: 'Coloque o módulo fiscal do seu município, consultado no Incra ou na Embrapa. A Lei 6.746/1979 manda usar a área aproveitável na divisão. A classificação que vale para cartório e banco é a que vem impressa no CCIR.',
    exemplos: [
      { entrada: { area: 180, modulo: 30 }, saida: { modulos: 6, quatro: 120, quinze: 450 } },
      { entrada: { area: 72, modulo: 20 }, saida: { modulos: 3.6, quatro: 80, quinze: 300 } },
    ],
  },
  secoes: [
    { h2: 'O que é módulo fiscal', blocos: [
      { p: 'Módulo fiscal é uma **unidade de medida em hectares**, com um valor para cada município, fixado pelo **Incra**. O conceito entrou na lei em 1979, com a **Lei 6.746**, que alterou o Estatuto da Terra. Ele não é uma medida de chão como o alqueire ou a tarefa: é uma régua que a lei usa para dizer o tamanho de um imóvel rural em relação ao lugar onde ele fica.' },
      { p: 'Por isso a pergunta "quantos hectares tem um módulo fiscal" só tem resposta com o nome do município. Segundo a Embrapa, o valor no Brasil vai de **5 a 110 hectares**. Dois sítios do mesmo tamanho, em municípios diferentes, podem ter números de módulos bem distantes.' },
      { destaque: 'Não confunda com as medidas de terra da região. Para converter alqueire, veja [alqueire em hectare](/alqueire-em-hectare). Para tarefa e linha, veja [tarefa e linha de terra](/tarefa-e-linha-de-terra).' },
    ] },
    { h2: 'Por que o módulo fiscal muda de município para município', blocos: [
      { p: 'A Lei 6.746/1979 manda o módulo de cada município ser determinado em hectares levando em conta quatro fatores:' },
      { ul: ['O tipo de exploração que predomina no município: hortifrutigranjeira, cultura permanente, cultura temporária, pecuária ou florestal.', 'A renda obtida nessa exploração predominante.', 'Outras explorações do município que, mesmo sem predominar, pesam na renda ou na área usada.', 'O conceito de propriedade familiar.'] },
      { p: 'É por isso que o número muda: o que se explora e a renda que a terra dá não são os mesmos de um município para outro. O módulo fiscal é um dos **Índices Básicos Cadastrais** do Incra, e os índices em vigor foram definidos pela **Instrução Especial nº 5 de 2022**.' },
    ] },
    { h2: 'Como consultar o módulo fiscal do seu município', blocos: [
      { p: 'Este guia não traz tabela de municípios de propósito: o valor é do Incra e pode ser revisto. Consulte na fonte, por um destes dois caminhos oficiais:' },
      { ol: ['**No Incra.** Abra a página [Módulo Fiscal do Incra](https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/modulo-fiscal) e entre na ferramenta **Consultar Índices Básicos**. Ela mostra o módulo fiscal e os demais índices do município.', '**Na Embrapa.** Abra a página [Módulos Fiscais da Embrapa](https://www.embrapa.br/codigo-florestal/area-de-reserva-legal-arl/modulo-fiscal), escolha o estado e o município e leia a dimensão em hectares. A fonte dos números é o Incra.', '**No seu CCIR.** O certificado do Incra traz a área e a classificação fundiária do imóvel. Se você ainda não tem o do exercício, veja como emitir no guia do [CCIR](/ccir).'] },
      { p: 'Anote o número do seu município. Ele volta toda vez que você for ao banco, ao sindicato, ao órgão ambiental ou ao cartório.' },
    ] },
    { h2: 'Como calcular quantos módulos fiscais tem o imóvel', blocos: [
      { p: 'A conta é uma divisão. A Lei 6.746/1979 diz que o número de módulos fiscais se obtém dividindo a **área aproveitável total** do imóvel pelo módulo fiscal do município. Área aproveitável é a que pode ser explorada com agricultura, pecuária ou floresta. Ficam fora a área ocupada por benfeitoria, a mata de preservação permanente e a área comprovadamente imprestável.' },
      { p: '**Exemplo com números supostos:** imóvel com 180 hectares aproveitáveis, num município em que o módulo fiscal é de 30 hectares. 180 dividido por 30 dá **6 módulos fiscais**. Outro imóvel, de 72 hectares, num município com módulo de 20 hectares: 72 dividido por 20 dá **3,6 módulos**.' },
      { p: 'Para saber a área de pasto e de lavoura com o celular, veja o guia do [aplicativo para medir área rural](/aplicativo-para-medir-area-rural). A medida do celular serve para a lida e para conferir o cadastro. A área que vale no papel é a da matrícula e a do cadastro no Incra.' },
    ] },
    { h2: 'Pequena, média e grande propriedade: a classificação', blocos: [
      { p: 'O uso mais conhecido do módulo fiscal é classificar o imóvel rural pelo tamanho. A regra está na **Lei 8.629/1993**, com a redação da Lei 13.465/2017, e na página do Incra:' },
      { tabela: { colunas: ['Classe', 'Tamanho em módulos fiscais'], linhas: [['Minifúndio', 'Menor que a fração mínima de parcelamento'], ['Pequena propriedade', 'Até 4, respeitada a fração mínima'], ['Média propriedade', 'Mais de 4 e até 15'], ['Grande propriedade', 'Mais de 15']], nota: 'Lei 8.629/1993, art. 4º, e página Módulo Fiscal do Incra. A fração mínima de parcelamento também é um índice do Incra, consultado na mesma ferramenta.' } },
      { p: 'Nos dois exemplos acima, o imóvel de 6 módulos é **média propriedade**, e o de 3,6 módulos é **pequena propriedade**. A classificação do seu imóvel vem escrita no CCIR, e é essa que o cartório e o banco leem.' },
    ] },
    { h2: 'Para que serve o módulo fiscal no dia a dia do produtor', blocos: [
      { ul: ['**Agricultura familiar.** A Lei 11.326/2006 exige que o agricultor familiar não tenha, a qualquer título, área maior que 4 módulos fiscais. É o limite que aparece no [CAF](/caf-agricultura-familiar) e no [Pronaf](/pronaf).', '**Reforma agrária.** A pequena e a média propriedade não podem ser desapropriadas para reforma agrária, desde que o dono não tenha outra propriedade rural.', '**Código Florestal.** A Lei 12.651/2012 usa o módulo fiscal em vários pontos: benefícios da pequena propriedade, faixas de recomposição de área de preservação permanente e reserva legal. O imóvel que tinha até 4 módulos em 22 de julho de 2008 tem regra própria de reserva, explicada no guia do [CAR](/car-cadastro-ambiental-rural).', '**Cartório.** A Lei de Registros Públicos garante isenção de custos na identificação georreferenciada ao dono de imóveis rurais que, somados, não passam de quatro módulos fiscais.'] },
      { p: 'O conceito nasceu numa lei que tratava do imposto sobre a terra. A conta do imposto de hoje está no guia do [ITR](/itr).' },
      { destaque: 'Este texto é informativo e não substitui advogado, contador nem técnico. O valor do módulo fiscal é do Incra: confira o do seu município na fonte antes de assinar contrato, pedir crédito ou fazer cadastro.' },
    ] },
  ],
  noFinagro: { h2: 'A área da fazenda no FINAGRO', itens: [
    'O FINAGRO não classifica o imóvel nem altera cadastro no Incra. A classificação oficial vem no CCIR; o app organiza a área e os papéis em volta dela.',
    'Cada fazenda tem a área declarada na ficha, e as áreas medidas por GPS no celular ficam ligadas a ela (100 áreas no plano grátis).',
    'A tela Documentos guarda CCIR, CAR, ITR e a matrícula de cada fazenda, com número e validade, e avisa antes de vencer.',
    'Safras e talhões ficam com a área em hectares, e o custo por hectare sai da própria lavoura.',
  ] },
  cta: { forte: 'Área, talhões e papéis da fazenda no mesmo lugar.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre módulo fiscal',
  faq: [
    ['Quantos hectares tem um módulo fiscal?', 'Não há um valor único. O Incra fixa o módulo fiscal em hectares para cada município, e no Brasil ele vai de 5 a 110 hectares. Para saber o do seu, consulte a ferramenta Consultar Índices Básicos do Incra ou a página Módulos Fiscais da Embrapa.'],
    ['Onde consultar o módulo fiscal por município?', 'Na página Módulo Fiscal do Incra, pela ferramenta Consultar Índices Básicos, ou na página Módulos Fiscais da Embrapa, escolhendo o estado e o município. As duas usam os números do Incra.'],
    ['Quantos módulos fiscais tem uma pequena propriedade?', 'Pela Lei 8.629/1993, pequena propriedade é o imóvel rural de até quatro módulos fiscais, respeitada a fração mínima de parcelamento. Média propriedade tem mais de 4 e até 15 módulos, e grande propriedade tem mais de 15.'],
    ['Como calcular quantos módulos fiscais tem minha terra?', 'Divida a área aproveitável do imóvel, em hectares, pelo módulo fiscal do município. Um imóvel de 180 hectares aproveitáveis num município com módulo de 30 hectares tem 6 módulos fiscais.'],
    ['O módulo fiscal é o mesmo no estado inteiro?', 'Não. O valor é fixado por município, conforme a exploração que predomina ali e a renda que ela dá. Municípios vizinhos podem ter módulos diferentes, e por isso a consulta é sempre pelo nome do município.'],
  ],
  fontes: [
    { nome: 'Incra, Módulo Fiscal e índices básicos cadastrais', url: INCRA },
    { nome: 'Embrapa, Código Florestal: Módulos Fiscais (consulta por município)', url: EMBRAPA },
    { nome: 'Lei 6.746/1979, que criou o módulo fiscal', url: L6746 },
    { nome: 'Lei 8.629/1993, art. 4º (pequena e média propriedade)', url: L8629 },
  ],
  relacionados: ['ccir', 'caf-agricultura-familiar', 'alqueire-em-hectare'],
};
