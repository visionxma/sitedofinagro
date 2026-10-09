// Consultas-alvo: "declaração de rebanho mt", "atualização de estoque de rebanho indea", "comunicação de estoque indea" (colheita de 08/10/2026).
// Regra sanitária de Mato Grosso: período, sistema e punição só com trecho de página do Indea (indea.mt.gov.br).
const CAMPANHA = 'https://www.indea.mt.gov.br/-/14250081-campanha-de-atualizacao-de-estoque-de-rebanho';
const GTA = 'https://www.indea.mt.gov.br/en/-/produtor-que-n%C3%A3o-atualizar-estoque-de-rebanho-ao-indea-fica-impedido-de-emitir-gta';
const NOVEMBRO = 'https://www.indea.mt.gov.br/w/campanha-de-atualiza%C3%A7%C3%A3o-de-estoque-de-rebanhos-come%C3%A7a-nesta-sexta-feira-01-em-mt';
const CADASTRO = 'https://www.indea.mt.gov.br/-/16784836-cadastramento-pecuario';

export const provas = [
  { afirmacao: 'em Mato Grosso a campanha de maio de 2026 foi de 1º de maio a 10 de junho de 2026', trecho: 'CAMPANHA DE MAIO DE 2026 PERÍODO : Início em 1º de maio a 10 de junho de 2026', url: CAMPANHA },
  { afirmacao: 'todos os produtores rurais atualizam bovinos, bubalinos, suínos, ovinos, caprinos, equídeos, aves, peixes, colmeias e rainhas', trecho: 'QUEM DEVE ATUALIZAR : todos produtores rurais ESPÉCIES A SEREM ATUALIZADAS : bovinos, bubalinos, suínos, ovinos, caprinos, equinos, muares, asininos, aves, peixes, colmeias e rainhas', url: CAMPANHA },
  { afirmacao: 'a atualização é presencial em qualquer unidade do Indea ou pelo módulo do produtor', trecho: 'COMO ATUALIZAR : presencialmente em qualquer unidade do INDEA ou pelo módulo do produtor', url: CAMPANHA },
  { afirmacao: 'a falta de atualização no prazo pode gerar multa de R$ 6.961,41', trecho: 'A não atualização dentro do prazo pode gerar multa de R$ 6.961,41 ao produtor rural', url: CAMPANHA },
  { afirmacao: 'a Portaria nº 105/2023 do Indea estabelece as diretrizes das campanhas', trecho: 'Estabelece as diretrizes para as Campanhas de Atualização de Estoques de Rebanhos no Estado de Mato Grosso', url: CAMPANHA },
  { afirmacao: 'o Indea notifica e autua quem descumpre o prazo de comunicação de estoque', trecho: 'Proceder com a notificação e autuação dos produtores rurais que descumprirem os prazos de comunicação de estoque de rebanho', url: CAMPANHA },
  { afirmacao: 'a comunicação de estoque também pode ser feita em Posto Avançado', trecho: 'Presencialmente em alguma Unidade Local do INDEA ou Posto Avançado; Online através do acesso ao Módulo do Produtor', url: CAMPANHA },
  { afirmacao: 'a campanha de novembro vai de 1º de novembro até 10 de dezembro e é obrigatória a todos os produtores', trecho: 'começa hoje (01.11) e vai até o dia 10 de dezembro a Campanha Estadual de Atualização do Estoque de Rebanhos, obrigatória a todos os produtores rurais de Mato Grosso', url: NOVEMBRO },
  { afirmacao: 'a campanha dura 40 dias e, naquela etapa, o Indea avisou que não haveria prorrogação', trecho: 'Não haverá prorrogação do prazo da comunicação de estoque de rebanhos e o produtor rural que não realizar a atualização dentro do prazo de 40 dias de vigência da campanha', url: NOVEMBRO },
  { afirmacao: 'quem não atualiza o estoque fica impedido de emitir a GTA, menos para abate', trecho: 'obrigatória para a movimentação de animais dentro de Mato Grosso ou para outro estado. Exceto se os animais estiverem indo para abate', url: GTA },
  { afirmacao: 'a guia para qualquer finalidade só é permitida depois da comunicação de estoque', trecho: 'só será permitida após a comunicação de estoque do seu rebanho ao Indea', url: GTA },
  { afirmacao: 'para ter login e senha do módulo do produtor, o termo de compromisso é levado ao Indea', trecho: 'O termo deve ser levado ao Indea para obter o login e senha de acesso', url: GTA },
  { afirmacao: 'o apicultor informa o número de colmeias', trecho: 'No caso das abelhas, o apicultor precisa informar o número de colmeias na propriedade', url: GTA },
  { afirmacao: 'cabe ao produtor atualizar o estoque por morte, nascimento e evolução de faixa etária', trecho: 'Compete ao produtor a atualização de estoque de rebanho para morte, nascimento e evolução de faixa etária, independentemente da espécie', url: CADASTRO },
  { afirmacao: 'a atualização de cadastro é obrigatória depois da suspensão da vacinação contra febre aftosa', trecho: 'É obrigatória a atualização de cadastro após a suspensão da vacinação contra febre aftosa mediante "Campanha de Atualização de Estoques de Rebanhos"', url: CADASTRO },
];

export default {
  slug: 'declaracao-de-rebanho-mt',
  grupo: 'corte',
  tipo: 'guia',
  curto: 'Declaração de rebanho MT',
  resumo: 'Atualização de estoque no Indea, em maio e novembro.',
  title: 'Declaração de rebanho em MT: prazo 2026 no Indea',
  description: 'Declaração de rebanho em MT: a atualização de estoque do Indea em maio e novembro, como comunicar pelo Módulo do Produtor e a multa de quem perde o prazo.',
  h1: 'Declaração de rebanho em MT: prazo de 2026 e como comunicar ao Indea',
  pergunta: 'Como fazer a declaração de rebanho em Mato Grosso?',
  resposta: 'Em Mato Grosso a declaração de rebanho se chama atualização de estoque de rebanho e é feita no Indea em duas campanhas: maio e novembro. A de maio de 2026 foi de 1º de maio a 10 de junho. Comunica-se pelo Módulo do Produtor ou numa unidade do Indea. Quem não atualiza fica sem guia de trânsito.',
  tela: 'animais',
  atualizado: '2026-10-09',
  secoes: [
    { h2: 'Como o Indea chama e quem é obrigado', blocos: [
      { p: 'Quem pesquisa declaração de rebanho em Mato Grosso encontra outro nome: Campanha de Atualização de Estoque de Rebanho, ou comunicação de estoque. O órgão é o Indea (Instituto de Defesa Agropecuária do Estado de Mato Grosso), e as diretrizes estão na Portaria nº 105/2023.' },
      { p: 'A regra do instituto diz que a atualização de cadastro é obrigatória depois da suspensão da vacinação contra a febre aftosa, e que ela se faz nessa campanha. Devem atualizar todos os produtores rurais.' },
      { p: 'Entram bovinos, bubalinos, suínos, ovinos, caprinos, equinos, muares, asininos, aves, peixes, colmeias e rainhas. O apicultor informa o número de colmeias. Cabe ao produtor atualizar o estoque por morte, nascimento e evolução de faixa etária, de qualquer espécie.' },
      { p: 'O prazo dos outros estados está na página geral de [declaração de rebanho](/declaracao-de-rebanho).' },
    ] },
    { h2: 'Prazo da declaração de rebanho em MT em 2026', blocos: [
      { tabela: { colunas: ['Campanha', 'Período publicado pelo Indea'], linhas: [
        ['Maio de 2026', '1º de maio a 10 de junho de 2026'],
        ['Novembro', '1º de novembro até 10 de dezembro, na etapa que o Indea noticiou'],
      ], nota: 'Página da campanha e notícia do Indea, lidas em 09/10/2026. Confirme no site do Indea o período da campanha de novembro de 2026.' } },
      { p: 'Na etapa de novembro noticiada pelo instituto, a campanha teve 40 dias e o aviso foi direto: não haveria prorrogação do prazo. Não conte com dia a mais.' },
      { p: 'A página da campanha no site do Indea é atualizada a cada etapa, com o período no topo. É lá que se confere a data antes de marcar embarque para novembro ou dezembro.' },
    ] },
    { h2: 'Como comunicar o estoque, passo a passo', blocos: [
      { ol: [
        'Conte os animais de cada espécie e separe mortes, nascimentos e animais que mudaram de faixa etária.',
        'Entre no Módulo do Produtor, pelo site do Indea, com o seu login e a sua senha.',
        'Abra a comunicação de estoque da propriedade e informe a quantidade de cada espécie.',
        'Confira, envie e guarde o comprovante.',
      ] },
      { p: 'Quem ainda não tem acesso ao Módulo do Produtor preenche o termo de compromisso de uso do sistema, disponível no site do Indea, e leva ao instituto para receber login e senha. Vale fazer isso antes de a campanha abrir.' },
      { p: 'Sem internet, a comunicação é presencial: em qualquer Unidade Local do Indea ou num Posto Avançado. O site traz as folhas de atualização para bovinos e bubalinos, para aves comerciais e para suínos comerciais. Dúvida se tira na unidade local do município.' },
    ] },
    { h2: 'O que acontece com quem não atualiza', blocos: [
      { ul: [
        '**Sem GTA.** O produtor que não atualiza o estoque fica impedido de emitir a Guia de Trânsito Animal para movimentar dentro do estado ou para outro estado. A exceção são os animais que vão para abate.',
        '**Multa.** A página da campanha de 2026 avisa que a falta de atualização no prazo pode gerar multa de R$ 6.961,41 ao produtor rural.',
        '**Notificação e autuação.** Entre os objetivos da campanha está notificar e autuar quem descumpre o prazo de comunicação de estoque.',
      ] },
      { p: 'A guia para recria, engorda, reprodução, leilão ou exposição só é permitida depois da comunicação de estoque. O caminho da guia está em [como emitir GTA](/como-emitir-gta), e as vacinas que também seguram a venda, no [calendário de vacinação bovina](/calendario-de-vacinacao-bovina).' },
      { destaque: 'Prazo, multa e sistema são do Indea e mudam. Este texto é informativo e não substitui o veterinário nem a defesa agropecuária: confirme a data no Indea antes de contar com ela. O FINAGRO não envia a comunicação de estoque ao Indea.' },
    ] },
  ],
  noFinagro: { h2: 'A declaração de MT e o FINAGRO', itens: [
    'O app não envia a declaração ao Indea: a comunicação de estoque é feita por você no Módulo do Produtor ou na unidade local.',
    'A tela "O que vence" lista a atualização de estoque de Mato Grosso com as duas campanhas, onde comunicar e o que acontece com quem não faz.',
    'O app pode avisar no celular 7 dias antes do fim da campanha e na véspera. Ao marcar "Já fiz", o aviso daquela etapa some.',
    'Cada animal tem ficha, com nascimento anotado, e o lote guarda as cabeças, então o estoque de cada espécie chega pronto ao Módulo do Produtor.',
  ] },
  cta: { forte: 'Estoque contado e a campanha do Indea lembrada antes de vencer.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre declaração de rebanho em MT',
  faq: [
    ['Qual o prazo da declaração de rebanho 2026 em MT?', 'A campanha de maio de 2026 foi de 1º de maio a 10 de junho de 2026. A de novembro, na etapa noticiada pelo Indea, foi de 1º de novembro até 10 de dezembro. Confirme o período de novembro de 2026 no site do Indea.'],
    ['Onde faço a declaração de rebanho em Mato Grosso?', 'Pela internet, no Módulo do Produtor, ou presencialmente em qualquer Unidade Local do Indea ou Posto Avançado.'],
    ['Qual a multa para quem não atualiza o rebanho no Indea?', 'A página da campanha de 2026 informa que a falta de atualização no prazo pode gerar multa de R$ 6.961,41 ao produtor rural.'],
    ['Posso emitir GTA em MT sem atualizar o estoque?', 'Só para abate. Para as outras finalidades, a guia só é permitida depois da comunicação de estoque do rebanho ao Indea.'],
    ['O FINAGRO envia a declaração ao Indea?', 'Não. O app não envia nada ao Indea. Ele guarda a contagem do rebanho e lembra o prazo; a comunicação de estoque é feita por você no Módulo do Produtor.'],
  ],
  fontes: [
    { nome: 'Indea-MT, Campanha de Atualização de Estoque de Rebanho', url: CAMPANHA },
    { nome: 'Indea-MT, produtor que não atualizar o estoque fica impedido de emitir GTA', url: GTA },
    { nome: 'Indea-MT, campanha de atualização de estoque de rebanhos de novembro', url: NOVEMBRO },
    { nome: 'Indea-MT, cadastramento pecuário', url: CADASTRO },
  ],
  relacionados: ['declaracao-de-rebanho', 'como-emitir-gta', 'calendario-de-vacinacao-bovina'],
};
