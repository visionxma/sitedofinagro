// Consulta-alvo: "criação de porcos", "criação de porcos caipira", "criação de porcos em pequenas propriedades" e
// "conversão alimentar suínos" (terceira leva, outras criações, 08/10/2026).
// RASCUNHO: só vai para conteudo/guias depois de uma pessoa ler.
const FASES = 'https://www.embrapa.br/agencia-de-informacao-tecnologica/criacoes/suinos/pre-producao/equipamentos-e-instalacoes/construcoes/instalacoes-por-fases';
const CATEGORIAS = 'https://www.embrapa.br/agencia-de-informacao-tecnologica/criacoes/suinos/pre-producao/racas-e-genetica/animais';
const FAMILIA = 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/442748/1/Sistemadeproducaofamilia.pdf';
const ADEPARA = 'https://www.adepara.pa.gov.br/SU%C3%8DDEA';
const IMA = 'https://ima.mg.gov.br/defesa-animal/programas-sanitarios/suideos';
const GTA_MANUAL = 'https://sigeagro.adepara.pa.gov.br/manual/Manual%20de%20emiss%C3%A3o%20de%20GTA%20para%20Produtor.pdf';

export const provas = [
  { afirmacao: 'a produção de suínos tem as fases de pré-cobrição e gestação, maternidade, creche, crescimento e terminação', trecho: 'O sistema de produção de suínos compreende as fases de pré-cobrição e gestação, maternidade, creche, crescimento e terminação', url: FASES },
  { afirmacao: 'a maternidade vai do nascimento ao desmame, que ocorre normalmente entre 21 e 28 dias em criações tecnificadas', trecho: 'O período desta fase está relacionado com a idade de desmame que ocorre normalmente entre 21 e 28 dias em criações tecnificadas', url: CATEGORIAS },
  { afirmacao: 'a creche vai do desmame até por volta dos 63 dias, com o leitão em torno de 24 kg', trecho: 'saída da fase da creche que acontece por volta dos 63 dias de idade, quando os animais devem estar pesando em torno de 24 kg', url: CATEGORIAS },
  { afirmacao: 'o crescimento vai da saída da creche até o peso médio de 55 kg', trecho: 'são considerados os animais após a saída da creche. Permanecem nesta categoria até atingirem peso médio de 55 kg', url: CATEGORIAS },
  { afirmacao: 'a terminação começa aos 55 kg e vai até o abate, por volta dos 100 a 120 kg', trecho: 'Inicia aos 55 kg de peso e acontece até o abate, que normalmente por volta dos 100 a 120 kg', url: CATEGORIAS },
  { afirmacao: 'o parto vem aproximadamente 114 dias depois da cobertura', trecho: 'os partos na quinta e sexta-feira, aproximadamente 114 dias após a cobertura', url: FAMILIA },
  { afirmacao: 'a Embrapa acompanhou um sistema de ciclo completo planejado para 21 porcas, com lotes a cada 21 dias', trecho: 'um sistema de produção em ciclo completo, planejado para 21 porcas, com intervalo entre lotes de 21 dias', url: FAMILIA },
  { afirmacao: 'nesse sistema o desmame foi programado para 28 dias, a saída de creche para 63 e o abate para 167 dias de idade', trecho: 'O desmame foi programado para 28 dias, a saída de creche para 63 dias e o abate para 167 dias de idade', url: FAMILIA },
  { afirmacao: 'no sistema em família cada leitegada fica junta da maternidade à terminação', trecho: 'Cada leitegada permanecia sempre junta, tanto na maternidade como na creche e terminação', url: FAMILIA },
  { afirmacao: 'os leitões foram pesados um a um no nascimento e no desmame', trecho: 'Todos os leitões foram pesados individualmente no nascimento e desmame', url: FAMILIA },
  { afirmacao: 'produção, consumo de ração e uso de medicamentos eram anotados em fichas', trecho: 'Todas as informações produtivas e aquelas relativas ao consumo de ração e utilização de medicamentos eram anotadas em fichas apropriadas', url: FAMILIA },
  { afirmacao: 'a Embrapa avaliou ganho de peso diário, conversão alimentar e mortalidade de leitões por fase', trecho: 'Foram avaliados o ganho de peso diário (GPD), conversão alimentar (CA) e coeficiente de variação (CV) por fase do nascimento ao abate; mortalidade de leitões nas diferentes fases de criação', url: FAMILIA },
  { afirmacao: 'nesse estudo a conversão alimentar da creche à terminação ficou em 2,253 na média', trecho: 'Conversão alimentar na creche e terminação 2,272±0,033 2,234±0,032 2,253±0,023', url: FAMILIA },
  { afirmacao: 'o trânsito de suídeos, para qualquer destino e finalidade, depende da emissão de GTA', trecho: 'O trânsito de suídeos, independente do destino e da finalidade, está condicionado à emissão de Guia de Trânsito Animal (GTA) e apresentação dos demais documentos sanitários e fiscais', url: ADEPARA },
  { afirmacao: 'a GTA é documento oficial obrigatório em todo o país, dentro do estado e entre estados', trecho: 'é um documento oficial utilizado em todo território nacional, OBRIGATÓRIO, para permitir o trânsito intraestadual e interestadual', url: GTA_MANUAL },
  { afirmacao: 'em Minas Gerais o IMA cadastra granjas comerciais, criações de subsistência e transportadores de suídeos', trecho: 'O trabalho do IMA está direcionado às granjas comercias, criações de subsistência e transportadores de suídeos. É realizado o cadastramento desses estabelecimentos', url: IMA },
];

export default {
  slug: 'criacao-de-porcos',
  grupo: 'criacoes',
  tipo: 'guia',
  curto: 'Criação de porcos',
  resumo: 'Fases, o que anotar por baia, conversão e GTA.',
  title: 'Criação de porcos: fases, o que anotar por baia e a GTA',
  description: 'Criação de porcos da maternidade à terminação: idade e peso de cada fase segundo a Embrapa, o que anotar por baia ou lote, conversão alimentar, sanidade e GTA.',
  h1: 'Criação de porcos: as fases, o que anotar por baia e a GTA',
  pergunta: 'Quais são as fases da criação de porcos?',
  resposta: 'Segundo a Embrapa Suínos e Aves, a produção de suínos tem pré-cobrição e gestação, maternidade, creche, crescimento e terminação. Em criação tecnificada, o leitão desmama entre 21 e 28 dias. Sai da creche por volta dos 63 dias, com cerca de 24 kg. Cresce até os 55 kg e termina até o abate, com 100 a 120 kg.',
  tela: 'lotes',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'As fases da criação de porcos', blocos: [
      { p: 'A criação de porcos se organiza por fase, e cada fase tem a sua instalação, a sua ração e o seu número para acompanhar. A Embrapa Suínos e Aves descreve o sistema assim: pré-cobrição e gestação, maternidade, creche, crescimento e terminação.' },
      { tabela: { colunas: ['Fase', 'Vai de', 'Até'], linhas: [
        ['Gestação', 'Cobertura', 'Parto, cerca de 114 dias depois'],
        ['Maternidade', 'Nascimento', 'Desmame, entre 21 e 28 dias'],
        ['Creche', 'Desmame', 'Cerca de 63 dias, com uns 24 kg'],
        ['Crescimento', 'Saída da creche', 'Peso médio de 55 kg'],
        ['Terminação', '55 kg', 'Abate, com 100 a 120 kg'],
      ], nota: 'Embrapa Suínos e Aves. Idades de desmame de criações tecnificadas; a sua granja pode trabalhar com outras.' } },
      { p: 'Quem só engorda compra o leitão na saída da creche e cuida do crescimento e da terminação. Quem faz ciclo completo tem todas as fases na mesma propriedade, das matrizes ao porco pronto.' },
      { p: 'Com a data da cobertura anotada, o parto fica previsível: cerca de 114 dias depois. Isso deixa preparar a maternidade antes de a porca parir.' },
    ] },
    { h2: 'Criação em família e em pequenas propriedades', blocos: [
      { p: 'A criação de porcos em família não precisa copiar a granja grande. A Embrapa Suínos e Aves acompanhou um sistema de ciclo completo planejado para 21 porcas, com um lote a cada 21 dias. O desmame foi programado para 28 dias, a saída de creche para 63 e o abate para 167 dias de idade.' },
      { p: 'O ponto central desse sistema, que a Embrapa chama de produção em família, é não misturar leitão: cada leitegada fica junta da maternidade à terminação. Menos mistura é menos briga e menos doença passando de um grupo para outro.' },
      { p: 'Na criação de porcos caipira, solta ou em piquete, as fases e as anotações são as mesmas. O que muda é a instalação e o tempo até o abate, e isso se define com o técnico que conhece a sua região e a raça que você cria.' },
      { destaque: 'Antes de começar ou de ampliar, procure a defesa agropecuária do seu estado. Em Minas Gerais, por exemplo, o IMA cadastra granjas comerciais, criações de subsistência e transportadores de suídeos.' },
    ] },
    { h2: 'O que anotar por baia ou lote', blocos: [
      { p: 'No sistema acompanhado pela Embrapa, toda informação de produção, de consumo de ração e de uso de medicamento ia para uma ficha. Os leitões eram pesados um a um no nascimento e no desmame. Na propriedade, o mínimo por baia ou lote é este:' },
      { tabela: { colunas: ['O que anotar', 'Quando', 'Para que serve'], linhas: [
        ['Entrada', 'Na chegada ou no parto', 'Data, quantos e de onde vieram'],
        ['Peso', 'Entrada, troca de fase e saída', 'Ganho de peso do lote'],
        ['Ração', 'A cada compra e a cada trato', 'Conversão alimentar e custo'],
        ['Vacina e remédio', 'No dia da aplicação', 'Histórico e carência do abate'],
        ['Mortes', 'No dia', 'Mortalidade da fase'],
        ['Saída', 'Na venda ou no abate', 'Quantos, peso, comprador e valor'],
      ], nota: 'Carência é o prazo da bula entre o remédio e o abate.' } },
      { p: 'Nas matrizes, anote por porca: data da cobertura, cachaço ou sêmen, parto, leitões nascidos e desmamados. É a ficha da porca que mostra qual matriz fica e qual sai do plantel.' },
      { p: 'Quem ainda controla no papel pode partir da [planilha de gestão rural](/planilha-de-gestao-rural) e levar depois para o aplicativo.' },
    ] },
    { h2: 'Conversão alimentar dos suínos', blocos: [
      { p: 'A conversão alimentar é a ração consumida dividida pelo ganho de peso do lote. No porco, ela se mede por fase, porque o leitão de creche e o suíno de terminação comem e ganham de jeitos diferentes. A Embrapa avaliou justamente ganho de peso diário, conversão alimentar e mortalidade em cada fase.' },
      { p: 'No estudo da produção em família, a conversão alimentar da creche à terminação ficou em 2,253 na média, ou seja, cerca de 2,25 kg de ração para cada quilo ganho. É o resultado daquele sistema, com aquela ração e aquela genética. Sirva-se dele como comparação, não como meta.' },
      { ol: [
        'Pese o lote na entrada da fase e anote.',
        'Some toda a ração que entrou na baia e desconte a sobra que foi pesada.',
        'Pese o lote na saída. O ganho é o peso final menos o inicial.',
        'Divida a ração pelo ganho. A calculadora de [conversão alimentar](/conversao-alimentar) faz a conta.',
      ] },
      { p: 'Conversão que piora de um lote para o outro pede olhar a ração desperdiçada no comedouro, a saúde do lote e a lotação da baia antes de trocar a ração.' },
    ] },
    { h2: 'Sanidade e a guia de trânsito (GTA)', blocos: [
      { p: 'O programa de vacinas e de vermífugo do porco é definido pelo veterinário da granja ou da integradora, conforme as doenças da região. Anote cada aplicação com a data, o produto, o lote e a carência da bula. Sem essa anotação, não dá para saber quando o lote está liberado para o abate.' },
      { p: 'Para tirar porco da propriedade, vale a **GTA**, a Guia de Trânsito Animal. Ela é documento oficial obrigatório em todo o país, para o trânsito dentro do estado e entre estados. A Adepará, agência de defesa do Pará, escreve que o trânsito de suídeos, para qualquer destino e finalidade, está condicionado à emissão da GTA. A regra vale também para os demais documentos sanitários e fiscais.' },
      { p: 'O passo a passo, estado por estado, está em [como emitir GTA](/como-emitir-gta).' },
      { destaque: 'As exigências para emitir a GTA de suínos mudam de estado para estado. Confira na defesa agropecuária do seu estado. Este guia é informativo e não substitui o veterinário nem o técnico da criação.' },
    ] },
  ],
  noFinagro: { h2: 'A criação de porcos no FINAGRO', itens: [
    'Cada baia vira um lote, com categoria de matrizes, leitões na maternidade, creche, recria ou terminação, e com a raça ou a linhagem.',
    'No lote você lança o que aconteceu: chegaram, nasceram, vendi, morreram, abate ou consumo. A mortalidade é calculada sozinha a partir das mortes registradas.',
    'Na porca com ficha, a cobertura lançada já mostra o parto previsto, contado em 114 dias, e o parto registra a leitegada.',
    'Vacina e tratamento ficam no histórico do lote, com a carência de abate em dias.',
    'O app não emite GTA: ele guarda as GTAs que você emitiu e lembra 1 dia antes do vencimento. A ração entra como despesa e no estoque.',
  ] },
  cta: { forte: 'Baias, pesos, vacinas e vendas da criação de porcos no celular.', texto: 'Grátis, sem cartão. Baia conta como lote, com quantas cabeças você tiver.' },
  faqTitulo: 'Perguntas sobre criação de porcos',
  faq: [
    ['Com quantos quilos o porco vai para o abate?', 'Segundo a Embrapa Suínos e Aves, a terminação começa aos 55 kg e vai até o abate, que normalmente ocorre por volta dos 100 a 120 kg.'],
    ['Com quantos dias se desmama o leitão?', 'Em criações tecnificadas, a Embrapa registra o desmame normalmente entre 21 e 28 dias. No sistema em família que ela acompanhou, o desmame foi programado para 28 dias.'],
    ['Qual é a conversão alimentar dos suínos?', 'Depende da fase, da ração, da genética e do manejo. Num sistema em família acompanhado pela Embrapa, a conversão da creche à terminação ficou em 2,253 na média. Compare cada lote com o seu próprio histórico.'],
    ['Precisa de GTA para transportar porcos?', 'Sim. A GTA é documento oficial obrigatório em todo o país para o trânsito de animais. As exigências para emitir a guia de suínos mudam de estado para estado, então confira na defesa agropecuária do seu.'],
    ['Quanto tempo dura a gestação da porca?', 'Cerca de 114 dias. No sistema em família descrito pela Embrapa, os partos acontecem aproximadamente 114 dias depois da cobertura.'],
  ],
  fontes: [
    { nome: 'Embrapa Suínos e Aves, instalações por fases da produção de suínos', url: FASES },
    { nome: 'Embrapa Suínos e Aves, categorias de animais na produção de suínos', url: CATEGORIAS },
    { nome: 'Embrapa Suínos e Aves, Produção de suínos em família, sem uso preventivo de antimicrobiano', url: FAMILIA },
    { nome: 'Adepará, Programa de Sanidade Suídea', url: ADEPARA },
    { nome: 'IMA (Minas Gerais), Programa Nacional de Sanidade Suídea', url: IMA },
  ],
  relacionados: ['como-emitir-gta', 'conversao-alimentar', 'planilha-de-gestao-rural'],
};
