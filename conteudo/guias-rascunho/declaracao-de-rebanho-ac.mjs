// Consultas-alvo: "declaração de rebanho acre", "declaração de rebanho idaf", "declaração anual de rebanho acre" (colheita de 08/10/2026).
// Regra sanitária do Acre: período, sistema e punição só com trecho de página do Idaf (idaf.ac.gov.br).
const NOTICIA = 'https://idaf.ac.gov.br/produtores-rurais-do-acre-devem-fazer-declaracao-anual-de-rebanho-entre-1o-de-outubro-e-30-de-novembro/';
const PORTARIA = 'https://idaf.ac.gov.br/wp-content/uploads/2025/11/PORTARIA-270-DECLARACAO-ANUAL-DE-REBANHOS-1.pdf';
const SISTEMA = 'https://idaf.ac.gov.br/emissao-de-gta/';
const CAMPANHAS = 'https://idaf.ac.gov.br/idaf-reforca-a-importancia-da-vacinacao-contra-brucelose-e-da-declaracao-de-rebanhos-para-o-setor-pecuario-no-acre/';

export const provas = [
  { afirmacao: 'no Acre a campanha é única no ano, de 1º de outubro a 30 de novembro', trecho: 'será executado em uma única campanha anual no período de 1o (prímeiro) de outubro ao 30o (trígésimo) dia de novembro', url: PORTARIA },
  { afirmacao: 'o prazo da Declaração de Rebanho começa em 1º de outubro e vai até 30 de novembro', trecho: 'Prazo para Declaração de Rebanho começa no dia 1º de outubro e se estende até 30 de novembro', url: NOTICIA },
  { afirmacao: 'a declaração é obrigatória para todo criador, de qualquer tamanho de propriedade ou número de cabeças', trecho: 'a declaração é obrigatória para todos os criadores de animais, independentemente do tamanho da propriedade ou do número de cabeças', url: NOTICIA },
  { afirmacao: 'entram bois, búfalos, cavalos, porcos, bodes, ovelhas, carneiros, peixes, galinhas, pintos e colmeias', trecho: 'abrangendo bois, búfalos, cavalos, porcos, bodes, ovelhas, carneiros, criação de peixes, galinhas, pintos e colmeias de abelhas', url: NOTICIA },
  { afirmacao: 'o produtor apresenta quantidade, espécie e movimentação dos animais e, quando se aplica, vacinação', trecho: 'O produtor deve apresentar dados atualizados sobre a quantidade, espécie e movimentação dos animais, além de informações sobre vacinação, quando aplicável', url: NOTICIA },
  { afirmacao: 'a etapa inclui atualização cadastral do produtor e informações da propriedade', trecho: 'Etapa inclui a atualização cadastral do produtor e informações gerais sobre a propriedade', url: NOTICIA },
  { afirmacao: 'a declaração se faz nas unidades do Idaf ou pelos canais de autoatendimento online', trecho: 'unidades do IDAF ou pelos canais de auto atendimento online disponibilizados ao produtor', url: PORTARIA },
  { afirmacao: 'mudança no calendário anual é regulamentada pelo Idaf por portaria complementar', trecho: 'Qualquer alteração nesse calendário anual sêrá regulamentada', url: PORTARIA },
  { afirmacao: 'durante a campanha o Idaf pode pedir informações de interesse da defesa sanitária', trecho: 'IDAF poderá solicitar informações de interesse da defesa sanitária agropecuária', url: PORTARIA },
  { afirmacao: 'no site do Idaf, o mesmo acesso do produtor serve para emitir GTA e declarar o rebanho', trecho: 'Produtor, clicando aqui você poderá emitir GTA e Declarar seus Rebanhos', url: SISTEMA },
  { afirmacao: 'desde o primeiro dia da campanha a GTA fica condicionada à atualização cadastral do rebanho', trecho: '(GTA) a partir do primeiro dia da campanha de atualização cadastral fica condicionada a atualização cadastral de rebanho', url: PORTARIA },
  { afirmacao: 'quem não declara no prazo fica sujeito a multa e a restrição de serviços como a GTA e os programas de incentivo', trecho: 'Quem deixar de declarar dentro do prazo estará sujeito a penalidades, incluindo multas e restrições em serviços oferecidos pelo órgão, como emissão de Guias de Trânsito Animal (GTA) e participação em programas de incentivo', url: NOTICIA },
  { afirmacao: 'a declaração de rebanhos corre junto com a campanha de vacinação contra a brucelose', trecho: 'estarão em andamento duas campanhas essenciais para o setor: a vacinação contra a brucelose e a declaração anual de rebanhos', url: CAMPANHAS },
  { afirmacao: 'a campanha serve de base para o reconhecimento do Acre como zona livre de febre aftosa', trecho: 'A campanha também serve como base para o reconhecimento do Acre como zona livre de doenças como a febre aftosa', url: NOTICIA },
];

export default {
  slug: 'declaracao-de-rebanho-ac',
  grupo: 'corte',
  tipo: 'guia',
  curto: 'Declaração de rebanho AC',
  resumo: 'Campanha do Idaf de outubro a novembro e como declarar.',
  title: 'Declaração de rebanho no Acre: prazo e como fazer',
  description: 'Declaração de rebanho no Acre: a campanha do Idaf vai de 1º de outubro a 30 de novembro. Veja quem declara, como fazer e o que acontece com a GTA no atraso.',
  h1: 'Declaração de rebanho no Acre: prazo, como declarar no Idaf e a GTA',
  pergunta: 'Como fazer a declaração de rebanho no Acre?',
  resposta: 'No Acre a Declaração Anual de Rebanho é feita numa única campanha por ano, de 1º de outubro a 30 de novembro. É obrigatória para todo criador, de qualquer tamanho. Faz-se nas unidades do Idaf ou pelo autoatendimento online do órgão. Desde o primeiro dia da campanha, a guia de trânsito depende da declaração.',
  tela: 'animais',
  atualizado: '2026-10-09',
  secoes: [
    { h2: 'Como o Idaf chama e quem é obrigado', blocos: [
      { p: 'O nome oficial é Declaração Anual de Rebanho, feita na Campanha de Declaração de Rebanhos. O órgão é o Idaf (Instituto de Defesa Agropecuária e Florestal do Estado do Acre).' },
      { p: 'A declaração é obrigatória para todos os criadores de animais, de qualquer tamanho de propriedade e com qualquer número de cabeças. Entram bois, búfalos, cavalos, porcos, bodes, ovelhas, carneiros, criação de peixes, galinhas, pintos e colmeias de abelhas, entre outros.' },
      { p: 'O produtor apresenta dados atualizados de quantidade, espécie e movimentação dos animais e, quando se aplica, de vacinação. A etapa inclui também a atualização do cadastro do produtor e as informações gerais da propriedade.' },
      { p: 'O Idaf explica que a campanha serve de base para o reconhecimento do Acre como zona livre de doenças como a febre aftosa. O prazo dos outros estados está na página geral de [declaração de rebanho](/declaracao-de-rebanho).' },
    ] },
    { h2: 'Prazo da declaração de rebanho no Acre', blocos: [
      { tabela: { colunas: ['Campanha', 'Período'], linhas: [
        ['Única no ano', '1º de outubro a 30 de novembro'],
      ], nota: 'Portaria Idaf nº 270, de 20/12/2022, e notícia do Idaf, lidas em 09/10/2026.' } },
      { p: 'O Acre declara no fim do ano, quando a maioria dos estados já fechou a campanha de maio. O calendário é da Portaria nº 270, de 2022, que juntou as declarações numa campanha só, em outubro e novembro.' },
      { p: 'A mesma portaria diz que qualquer mudança no calendário sai por portaria complementar do Idaf. Por isso, perto do fim de novembro, confira no site do órgão se o prazo de 2026 foi alterado, sem contar com isso.' },
      { p: 'No mesmo período corre a campanha de vacinação contra a brucelose. Dá para resolver as duas pendências na mesma ida ao Idaf. As idades e as vacinas estão no [calendário de vacinação bovina](/calendario-de-vacinacao-bovina).' },
    ] },
    { h2: 'Como declarar no Idaf, passo a passo', blocos: [
      { ol: [
        'Conte os animais por espécie e anote as entradas e saídas do ano: compras, vendas, nascimentos e mortes.',
        'Separe os comprovantes de vacinação, quando a espécie tem vacina obrigatória.',
        'Entre no autoatendimento do Idaf com o seu acesso de produtor. No site do instituto, é o mesmo acesso que serve para emitir a GTA.',
        'Atualize o cadastro do produtor e da propriedade e informe a quantidade de cada espécie.',
        'Envie e guarde o comprovante da declaração.',
      ] },
      { p: 'Quem não tem acesso à internet ou ainda não tem senha declara em qualquer unidade do Idaf. A portaria prevê as duas formas: nas unidades do instituto ou pelos canais de autoatendimento online. Dúvida se tira na unidade do município.' },
      { p: 'Durante a campanha o Idaf pode pedir outras informações de interesse da defesa sanitária. Vale ter à mão os dados da propriedade.' },
    ] },
    { h2: 'O que acontece com quem não declara', blocos: [
      { ul: [
        '**GTA condicionada desde o primeiro dia.** A partir do primeiro dia da campanha, a emissão da guia de trânsito fica condicionada à atualização cadastral do rebanho. Quem vai embarcar gado em outubro declara antes.',
        '**Multa.** Quem deixa de declarar no prazo fica sujeito a penalidades, entre elas multa.',
        '**Restrição de serviços.** O Idaf cita restrição nos serviços do órgão, como a emissão de GTA e a participação em programas de incentivo.',
      ] },
      { p: 'As páginas do Idaf não trazem o valor da multa. Pergunte na unidade local. O caminho da guia está em [como emitir GTA](/como-emitir-gta).' },
      { destaque: 'Prazo, sistema e punição são do Idaf e mudam. Este texto é informativo e não substitui o veterinário nem a defesa agropecuária: confirme a data no Idaf antes de contar com ela. O FINAGRO não envia a declaração ao Idaf.' },
    ] },
  ],
  noFinagro: { h2: 'A declaração do Acre e o FINAGRO', itens: [
    'O app não envia a declaração ao Idaf: ela é feita por você no autoatendimento do órgão ou na unidade local.',
    'A tela "O que vence" lista a declaração de rebanho do Acre com o período, onde declarar e o que acontece com quem não faz.',
    'O app pode avisar no celular 7 dias antes do fim da campanha e na véspera. Ao marcar "Já fiz", o aviso some.',
    'Cada animal tem ficha, as vacinas ficam anotadas e o lote guarda as cabeças, então a quantidade de cada espécie está pronta na hora de declarar.',
  ] },
  cta: { forte: 'Rebanho contado e a campanha do Idaf lembrada antes de vencer.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre declaração de rebanho no Acre',
  faq: [
    ['Qual o prazo da declaração de rebanho no Acre?', 'A campanha é única no ano e vai de 1º de outubro a 30 de novembro, pela Portaria Idaf 270, de 2022. Confira no site do Idaf se houve portaria alterando o prazo de 2026.'],
    ['Onde faço a declaração de rebanho no Acre?', 'Em qualquer unidade do Idaf ou pelos canais de autoatendimento online do órgão, com o acesso de produtor.'],
    ['Quem tem poucas cabeças precisa declarar no Acre?', 'Sim. A declaração é obrigatória para todos os criadores, de qualquer tamanho de propriedade e com qualquer número de cabeças.'],
    ['Posso emitir GTA no Acre sem declarar o rebanho?', 'Desde o primeiro dia da campanha, a emissão da guia fica condicionada à atualização cadastral do rebanho. Quem não declara no prazo fica sujeito a multa e a restrição de serviços do Idaf.'],
    ['O FINAGRO envia a declaração ao Idaf?', 'Não. O app não envia nada ao Idaf. Ele guarda a contagem do rebanho e lembra o prazo; a declaração é feita por você no órgão.'],
  ],
  fontes: [
    { nome: 'Idaf (AC), declaração anual de rebanho entre 1º de outubro e 30 de novembro', url: NOTICIA },
    { nome: 'Idaf (AC), Portaria nº 270, de 20/12/2022', url: PORTARIA },
    { nome: 'Idaf (AC), emissão de GTA e declaração de rebanhos', url: SISTEMA },
    { nome: 'Idaf (AC), vacinação contra brucelose e declaração de rebanhos', url: CAMPANHAS },
  ],
  relacionados: ['declaracao-de-rebanho', 'como-emitir-gta', 'calendario-de-vacinacao-bovina'],
};
