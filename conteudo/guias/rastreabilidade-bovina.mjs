// Consultas-alvo: "rastreabilidade bovina", "sisbov", "identificação individual de bovinos", "brinco de rastreabilidade", "PNIB"
// (colheita de 08/10/2026). As páginas do Ministério da Agricultura com o texto do plano (PDF e notícia) exigem login no gov.br
// e não abrem para conferência; o cronograma vai com o texto das defesas estaduais que o publicaram (RS e PR) e a página
// do Iagro (MS) sobre o SISBOV. Sem fonte aberta, a afirmação saiu.
const MS_RASTRO = 'https://www.iagro.ms.gov.br/programas-e-projetos/programa-nacional-de-rastreabilidade-animal/';
const MAPA_SISBOV = 'https://www.gov.br/agricultura/pt-br/assuntos/sanidade-animal-e-vegetal/saude-animal/cgtqa/dpc/sisbov';
const PR_PNIB = 'https://www.adapar.pr.gov.br/Noticia/Plano-de-identificacao-de-bovinos-fortalecera-protecao-do-rebanho-avalia-Adapar';
const RS_PNIB = 'https://www.agricultura.rs.gov.br/plano-nacional-trara-rastreabilidade-individual-de-bovinos-e-bubalinos-a-rebanho-brasileiro-ate-2032';
const RS_GT = 'https://www.agricultura.rs.gov.br/gt-de-rastreabilidade-se-reune-com-representantes-do-ministerio-da-agricultura';

export const provas = [
  { afirmacao: 'o objetivo do SISBOV é assegurar a rastreabilidade de bovinos e bubalinos', trecho: 'O principal objetivo do SISBOV é assegurar a rastreabilidade de bovinos e bubalinos, promovendo a transparência e a confiança nos produtos de origem animal', url: MS_RASTRO },
  { afirmacao: 'no SISBOV cada animal é identificado individualmente com dispositivo eletrônico ou brinco', trecho: 'Identificação dos Animais: Cada animal é identificado individualmente com dispositivos eletrônicos ou brincos', url: MS_RASTRO },
  { afirmacao: 'manejo e movimentação dos animais são registrados na Base Nacional de Dados', trecho: 'Dados detalhados sobre o manejo e a movimentação dos animais são registrados na Base Nacional de Dados (BND)', url: MS_RASTRO },
  { afirmacao: 'propriedades que atendem à rastreabilidade recebem certificação de entidades credenciadas', trecho: 'Propriedades que atendem aos requisitos de rastreabilidade recebem certificação de entidades governamentais ou privadas credenciadas', url: MS_RASTRO },
  { afirmacao: 'a adesão ao SISBOV é voluntária, mas é obrigatória para o gado destinado à exportação a países que exigem rastreabilidade', trecho: 'A adesão ao sistema é voluntária, porém, todos os bovinos e bubalinos destinados à exportação para países que exigem um sistema de rastreabilidade devem ser inscritos no SISBOV', url: MS_RASTRO },
  { afirmacao: 'a IN MAPA nº 51/2018 embasa a certificação oficial para países que exigem rastreabilidade individual', trecho: 'a norma operacional que é utilizada para embasar a certificação oficial brasileira para países que exijam a rastreabilidade individual de bovinos e búfalos', url: MAPA_SISBOV },
  { afirmacao: 'o PNIB vale de 2025 a 2032', trecho: 'Lançado nesta semana, o PNIB vigorará no período 2025-2032', url: PR_PNIB },
  { afirmacao: 'o PNIB cria um sistema de identificação individual que registra histórico, localização e trajetória de cada animal', trecho: 'implementar um sistema de identificação individual que permitirá acompanhar e registrar o histórico, a localização atual e a trajetória de cada animal identificado', url: PR_PNIB },
  { afirmacao: 'nos dois primeiros anos se organiza o sistema, com portarias do Ministério e banco de dados nacional', trecho: 'O cronograma prevê que nos dois primeiros anos seja organizado todo o sistema, com portarias e resoluções oriundas do Ministério da Agricultura e Pecuária, e a formação de um banco de dados nacional', url: PR_PNIB },
  { afirmacao: 'em 2027 a identificação individual começa pelos animais nascidos a partir dali', trecho: 'Em 2027 a identificação individual dos animais começa pelos nascidos a partir dali', url: PR_PNIB },
  { afirmacao: 'os demais animais entram na sequência, em época de vacinação ou manejo sanitário, até 2032', trecho: 'Os outros entram na sequência em época de vacinação ou de manejo sanitário, com previsão de ter todos identificados até 2032', url: PR_PNIB },
  { afirmacao: 'a base de dados nacional é construída entre 2024 e 2026', trecho: 'Entre 2024 e 2026, será construída a base de dados nacional', url: RS_PNIB },
  { afirmacao: 'entre 2027 e 2029 começa a identificação individual, com previsão de atingir todo o rebanho até 2032', trecho: 'Entre 2027 e 2029, terá início a identificação individual dos animais, com a previsão de atingir todo o rebanho até 2032', url: RS_PNIB },
  { afirmacao: 'o plano tem oito anos de adaptação até a adoção obrigatória a partir de 2033', trecho: 'tem escalonamento de prazos que totalizam oito anos de adaptação até a adoção obrigatória, a partir de 2033', url: RS_GT },
];

export default {
  slug: 'rastreabilidade-bovina',
  grupo: 'corte',
  tipo: 'guia',
  curto: 'Rastreabilidade bovina',
  resumo: 'SISBOV, PNIB e o que muda a partir de 2027.',
  title: 'Rastreabilidade bovina: SISBOV, PNIB e o cronograma',
  description: 'Rastreabilidade bovina: o que é o SISBOV, o que é o PNIB, quando começa a identificação individual com brinco e o que o produtor faz até lá.',
  h1: 'Rastreabilidade bovina: SISBOV, PNIB e o que o produtor precisa fazer',
  pergunta: 'O que é rastreabilidade bovina e quando o brinco passa a ser obrigatório?',
  resposta: 'Rastreabilidade bovina é identificar cada animal e registrar sua trajetória. O SISBOV existe e é voluntário, mas obrigatório para o gado que vai à exportação. O PNIB, plano nacional de 2025 a 2032, começa a identificação individual em 2027, pelos nascidos, e torna a regra obrigatória a partir de 2033.',
  tela: 'animais',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'O que é rastreabilidade bovina', blocos: [
      { p: 'É conseguir dizer, de cada boi, onde nasceu, por onde passou, o que tomou de vacina e para onde foi. Para isso cada animal leva uma identificação individual, e os dados dele ficam registrados em um sistema oficial.' },
      { p: 'No Brasil, dois nomes aparecem nessa conversa: o SISBOV, que já existe, e o PNIB, o plano que vai tornar a identificação individual regra para todo mundo.' },
    ] },
    { h2: 'SISBOV: o que é e quem precisa estar nele', blocos: [
      { p: 'O SISBOV é o sistema do Ministério da Agricultura para rastrear bovinos e bubalinos. Cada animal é identificado individualmente com dispositivo eletrônico ou brinco, e os dados de manejo e de movimentação ficam na BND (Base Nacional de Dados). A propriedade que cumpre as exigências recebe certificação de entidades credenciadas.' },
      { p: 'A adesão é voluntária. A exceção é o gado destinado à exportação para países que exigem um sistema de rastreabilidade: esses animais precisam ser inscritos no SISBOV. Hoje a certificação oficial para esses países se apoia na Instrução Normativa MAPA nº 51, de 2018.' },
      { ul: [
        'Se o seu comprador exporta para país que exige rastreabilidade, pergunte a ele e à certificadora se o seu lote precisa estar no SISBOV.',
        'Quem não vende para esse mercado não é obrigado a entrar hoje, mas vai precisar identificar o gado com a chegada do PNIB.',
      ] },
    ] },
    { h2: 'PNIB: o plano nacional de identificação individual', blocos: [
      { p: 'O PNIB (Plano Nacional de Identificação Individual de Bovinos e Búfalos) vale de 2025 a 2032. Ele cria um sistema que permite acompanhar o histórico, a localização atual e a trajetória de cada animal identificado.' },
      { tabela: { colunas: ['Período', 'O que acontece', 'O que o produtor faz'], linhas: [
        ['2024 a 2026', 'Organização do sistema, portarias do Ministério e base de dados nacional', 'Nada novo para o brinco; acompanhar as portarias'],
        ['2027', 'Começa a identificação individual, pelos animais nascidos a partir dali', 'Identificar o bezerro que nasce'],
        ['2027 a 2029', 'Início da identificação, com previsão de atingir todo o rebanho até 2032', 'Identificar o resto do rebanho na vacinação ou no manejo'],
        ['A partir de 2033', 'Adoção obrigatória, depois de oito anos de adaptação', 'Gado identificado e registrado'],
      ], nota: 'Cronograma conforme as defesas agropecuárias do Rio Grande do Sul e do Paraná, que publicaram o plano do Ministério da Agricultura. As páginas do Ministério com o plano exigem login e não abriram para conferência. As datas exatas e o padrão do brinco saem em portarias do Ministério.' } },
      { p: 'Pelo cronograma, o animal nascido a partir de 2027 é o primeiro a ser identificado. Os mais velhos entram na sequência, aproveitando a época de vacinação ou de manejo sanitário, e a previsão é ter todos identificados até 2032.' },
    ] },
    { h2: 'O que o produtor precisa fazer e quando', blocos: [
      { ol: [
        'Agora: mantenha o cadastro e a contagem do rebanho em dia. A [declaração de rebanho](/declaracao-de-rebanho) e a [GTA](/gta) seguem valendo como sempre.',
        'Se você vende para exportação: confira com o comprador e a certificadora se o seu gado precisa estar no SISBOV.',
        'Em 2027: prepare-se para identificar o bezerro nascido, com o dispositivo no padrão que o Ministério publicar.',
        'Do rebanho mais velho: aproveite a vacinação e o manejo para identificar, como o cronograma prevê.',
        'Até 2032: tenha todo o rebanho identificado. A adoção obrigatória vem a partir de 2033.',
      ] },
      { p: 'A defesa agropecuária do seu estado pode ter regra própria. Veja sempre o que ela exige e em que prazo.' },
    ] },
    { h2: 'O FINAGRO não é certificadora', blocos: [
      { p: 'O FINAGRO não certifica propriedade, não emite brinco e não substitui o SISBOV nem o sistema do PNIB. Quem identifica o animal e registra no sistema oficial é o produtor, com o dispositivo certo e a defesa agropecuária. O app não lê brinco eletrônico.' },
      { p: 'O que o app faz é o controle em volta: guardar a ficha de cada animal com o número do brinco, as pesagens, as vacinas e as GTAs emitidas, para você ter o histórico na mão quando a defesa, o comprador ou a certificadora pedir.' },
      { destaque: 'O cronograma e as regras são do Ministério da Agricultura e da defesa do seu estado, e mudam por portaria. Este texto é informativo e não substitui o veterinário nem a defesa agropecuária. O FINAGRO não envia dados ao sistema oficial.' },
    ] },
  ],
  noFinagro: { h2: 'O histórico de cada animal no FINAGRO', itens: [
    'Cada animal tem ficha com brinco, raça, sexo, nascimento, peso e foto.',
    'As pesagens ficam na ficha, com o ganho entre uma e outra.',
    'As vacinas e a sanidade ficam registradas por animal ou por lote, e o app avisa de bezerras na idade da vacina de brucelose sem a vacina anotada.',
    'As GTAs emitidas no sistema da defesa podem ser registradas no app, que lembra 1 dia antes do vencimento.',
  ] },
  cta: { forte: 'A ficha de cada animal pronta para o dia do brinco.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre rastreabilidade bovina',
  faq: [
    ['O brinco de rastreabilidade já é obrigatório?', 'Pelo plano nacional, a identificação individual começa em 2027, pelos animais nascidos a partir dali, e a adoção é obrigatória a partir de 2033. Hoje a inscrição no SISBOV é voluntária, exceto para o gado de exportação.'],
    ['O que é o SISBOV?', 'É o sistema do Ministério da Agricultura para rastrear bovinos e bubalinos. Cada animal é identificado individualmente e os dados de manejo e de movimentação vão para a Base Nacional de Dados.'],
    ['O que é o PNIB?', 'É o Plano Nacional de Identificação Individual de Bovinos e Búfalos, que vale de 2025 a 2032. Cria um sistema para acompanhar o histórico, a localização e a trajetória de cada animal.'],
    ['Preciso estar no SISBOV para vender o boi?', 'Só se o gado for para exportação a países que exigem rastreabilidade. Nesse caso, os animais precisam estar inscritos no SISBOV. Para as demais vendas, hoje a inscrição é voluntária.'],
    ['O FINAGRO faz a rastreabilidade oficial?', 'Não. O FINAGRO não é certificadora nem substitui o sistema oficial. Ele guarda a ficha de cada animal, com brinco, pesagens, vacinas e GTAs registradas.'],
  ],
  fontes: [
    { nome: 'Iagro (MS), Programa Nacional de Rastreabilidade Animal, SISBOV', url: MS_RASTRO },
    { nome: 'Ministério da Agricultura, SISBOV', url: MAPA_SISBOV },
    { nome: 'Adapar (PR), plano de identificação de bovinos', url: PR_PNIB },
    { nome: 'Secretaria da Agricultura do RS, plano nacional de rastreabilidade individual até 2032', url: RS_PNIB },
    { nome: 'Secretaria da Agricultura do RS, GT de rastreabilidade com o Ministério da Agricultura', url: RS_GT },
  ],
  relacionados: ['como-emitir-gta', 'declaracao-de-rebanho', 'controle-de-rebanho'],
};
