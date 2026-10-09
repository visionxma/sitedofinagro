// Consultas-alvo: "declaração de rebanho sp", "declaração de rebanho 2026 sp", "atualização de rebanho gedave" (colheita de 08/10/2026).
// Regra sanitária de São Paulo: período, sistema e punição só com trecho da Defesa Agropecuária (defesa.agricultura.sp.gov.br).
const SAA28 = 'https://www.defesa.agricultura.sp.gov.br/legislacoes/resolucao-saa-28-de-08-04-2024,1862.html';
const SAA27 = 'https://www.defesa.agricultura.sp.gov.br/legislacoes/resolucao-saa-27-de-29-04-2026,2033.html';
const FOLHETO = 'https://defesa.agricultura.sp.gov.br/arquivos/sanidade-animal/atualizacao_rebanho.pdf';

export const provas = [
  { afirmacao: 'em São Paulo a declaração tem duas etapas anuais: de 1º de maio a 7 de junho e de 1º de novembro a 7 de dezembro', trecho: 'A declaração de atualização do rebanho será realizada em duas etapas anuais, com a primeira etapa no período de 1º de maio a 07 de junho e a segunda etapa no período de 1º de novembro a 07 de dezembro', url: SAA28 },
  { afirmacao: 'a declaração abrange bovinos, bubalinos, aves, suínos, caprinos, ovinos, equinos, asininos, muares, abelhas e animais aquáticos', trecho: 'abrangerá as espécies bovina, bubalina, aves, suína, caprina, ovina, equina, asinina, muar, abelha e animais aquáticos', url: SAA28 },
  { afirmacao: 'a atualização é compulsória para proprietários, depositários ou detentores dos animais, mesmo sem mudança no número', trecho: 'a atualização do rebanho durante os períodos determinados é compulsória e compete aos proprietários, depositários ou detentores a qualquer título de animais de peculiar interesse do estado ou ao seu representante legal, e deverá ser realizada mesmo se não ocorrer alteração do número de animais em sua guarda', url: SAA28 },
  { afirmacao: 'a Coordenadoria de Defesa Agropecuária pode prorrogar ou antecipar a campanha', trecho: 'poderá prorrogar ou antecipar a campanha de atualização rebanho', url: SAA28 },
  { afirmacao: 'na declaração se informa espécie, sexo e faixa etária, com nascimento, mortalidade, consumo e evolução de idade', trecho: 'deverá informar espécie, sexo e faixa etária dos animais, atualizando as informações de nascimento, mortalidade, consumo e evolução de faixa etária', url: SAA28 },
  { afirmacao: 'a atualização se faz no GEDAVE com senha pessoal', trecho: 'A atualização do rebanho deverá ser realizada por meio do Sistema de Gestão de Defesa Animal e Vegetal (GEDAVE), ou outro que o venha a substituir, através de senha pessoal do proprietário', url: SAA28 },
  { afirmacao: 'sem internet, a atualização pode ser feita por formulário, em modelo do site da CDA', trecho: 'a atualização do rebanho poderá ser realizada mediante a apresentação de formulário de declaração de atualização do rebanho, conforme modelo disponibilizado no sítio eletrônico da CDA', url: SAA28 },
  { afirmacao: 'o formulário vai preenchido em duas vias e assinado', trecho: 'o formulário deverá estar devidamente preenchido, em duas vias, e assinado pelo proprietário', url: SAA28 },
  { afirmacao: 'fora das campanhas o rebanho pode ser atualizado por requerimento à CDA Regional', trecho: 'o rebanho poderá ser atualizado fora do período das campanhas de atualização do rebanho, através de requerimento dirigido à CDA Regional', url: SAA28 },
  { afirmacao: 'nascimento registrado depois da declaração gera novo DARE, por declaração complementar', trecho: 'no ato de registro de nascimento realizado após o produtor ter efetivado a declaração ou atualização de saldo de rebanho bovino e bubalino', url: SAA27 },
  { afirmacao: 'o formulário pode ser entregue em qualquer CDA Regional ou por e-mail da CDA Regional do município da propriedade', trecho: 'durante o período da campanha o formulário poderá ser entregue em qualquer CDA Regional ou através do endereço de e-mail da CDA Regional da circunscrição do município onde está localizada a propriedade', url: SAA28 },
  { afirmacao: 'depois do prazo, a comprovação só se faz por formulário na CDA Regional', trecho: 'após o término do prazo oficial previsto, a comprovação da atualização cadastral somente poderá ser realizada por meio do formulário de declaração de atualização de rebanho entregue na CDA Regional', url: SAA28 },
  { afirmacao: 'durante a etapa, a GTA depende da atualização do rebanho da espécie na origem e no destino', trecho: 'para qualquer finalidade durante a etapa da campanha de atualização de rebanhos é condicionada à prévia atualização do rebanho da espécie a ser movimentada nas atividades produtivas de origem e no destino', url: SAA28 },
  { afirmacao: 'bovinos e bubalinos contam juntos para liberar a movimentação', trecho: 'Entende-se por rebanho bovídeo as espécies bovina e bubalina, as quais devem estar todas atualizadas para a movimentação de qualquer uma delas', url: SAA28 },
  { afirmacao: 'a Resolução SAA 27/2026 suspende a GTA de bovinos e bubalinos no início dos períodos oficiais de declaração', trecho: 'para movimentação de bovinos e bubalinos será suspensa no início dos períodos oficiais de declaração ou atualização de saldo de rebanho', url: SAA27 },
  { afirmacao: 'a suspensão só cai depois da declaração e do pagamento da taxa', trecho: 'será levantada somente após a declaração ou atualização do saldo de rebanho bovino e bubalino e a comprovação do pagamento da taxa correspondente', url: SAA27 },
  { afirmacao: 'a taxa é calculada pelos bovinos e bubalinos do cadastro e paga por DARE', trecho: 'será arrecadada com base no quantitativo de bovinos e bubalinos existentes nos estabelecimentos rurais cadastrados no sistema oficial', url: SAA27 },
  { afirmacao: 'o valor da taxa é calculado pelo saldo do cadastro, observada a Lei nº 18.077, de 2024', trecho: 'O valor da taxa será calculado com base no saldo de bovinos e bubalinos registrado no cadastro do produtor rural na data-base estabelecida para apuração, observado o disposto no artigo 3º da Lei nº 18.077, de 27 de dezembro de 2024', url: SAA27 },
  { afirmacao: 'o DARE vale 7 dias corridos', trecho: 'O DARE terá validade de 7 (sete) dias corridos contados da data de sua emissão', url: SAA27 },
  { afirmacao: 'quem não declara recebe o DARE emitido pela Defesa e continua obrigado a declarar em 30 dias da notificação', trecho: 'A emissão do DARE não exime o produtor rural da obrigação de declarar ou atualizar o saldo de rebanho na etapa correspondente, devendo fazê-lo no prazo de 30 (trinta) dias contados da notificação', url: SAA27 },
  { afirmacao: 'o folheto da Defesa de 30/04/2024 informa multa de 100 UFESP por deixar de prestar informações', trecho: 'o produtor fica sujeito a multa de R$ 3.536,00 (100 UFESP) por deixar de prestar informações', url: FOLHETO },
  { afirmacao: 'depois da etapa, a movimentação de toda a propriedade fica suspensa', trecho: 'após a etapa toda a propriedade ficará suspensa a movimentação e o produtor fica sujeito a multa', url: FOLHETO },
];

export default {
  slug: 'declaracao-de-rebanho-sp',
  grupo: 'corte',
  tipo: 'guia',
  curto: 'Declaração de rebanho SP',
  resumo: 'Etapas de maio e novembro e o GEDAVE.',
  title: 'Declaração de rebanho em SP: etapas, GEDAVE e taxa',
  description: 'Declaração de rebanho em SP: as duas etapas da Defesa Agropecuária, como atualizar o rebanho no GEDAVE, a taxa dos bovinos e o que trava a GTA de quem atrasa.',
  h1: 'Declaração de rebanho em SP: etapas, GEDAVE e a taxa dos bovinos',
  pergunta: 'Como fazer a declaração de rebanho em São Paulo?',
  resposta: 'Em São Paulo a atualização do rebanho é obrigatória em duas etapas por ano. A Resolução SAA 28, de 2024, fixa de 1º de maio a 7 de junho e de 1º de novembro a 7 de dezembro. É feita no GEDAVE, com a senha do produtor. Durante a etapa, a guia só sai com o rebanho atualizado.',
  tela: 'animais',
  atualizado: '2026-10-09',
  secoes: [
    { h2: 'Como São Paulo chama e quem é obrigado', blocos: [
      { p: 'O nome oficial é declaração de atualização do rebanho, e a campanha é a Campanha de Atualização de Rebanhos. Quem cuida é a Defesa Agropecuária do Estado, pela Coordenadoria de Defesa Agropecuária (CDA), com base na Resolução SAA nº 28, de 2024.' },
      { p: 'A obrigação é de quem tem os animais sob sua guarda: proprietário, depositário ou detentor a qualquer título, ou o representante legal. Ela é compulsória e vale mesmo quando o número de animais não mudou desde a última etapa.' },
      { p: 'Entram bovinos, bubalinos, aves, suínos, caprinos, ovinos, equinos, asininos, muares, abelhas e animais aquáticos. O que os outros estados pedem está na página geral de [declaração de rebanho](/declaracao-de-rebanho).' },
    ] },
    { h2: 'Prazo da declaração de rebanho em SP', blocos: [
      { tabela: { colunas: ['Etapa', 'Período da Resolução SAA 28/2024'], linhas: [
        ['1ª etapa', '1º de maio a 7 de junho'],
        ['2ª etapa', '1º de novembro a 7 de dezembro'],
      ], nota: 'Resolução SAA nº 28, de 08/04/2024, lida em 09/10/2026 no site da Defesa Agropecuária.' } },
      { p: 'Esse é o período da norma de 2024. A mesma resolução deixa a CDA prorrogar ou antecipar a campanha. A 1ª etapa de 2026 já passou. A 2ª é a próxima: confirme a data de 2026 na Defesa Agropecuária, pelo GEDAVE ou na CDA Regional, antes de marcar embarque.' },
      { p: 'Fora das campanhas também dá para atualizar o rebanho, por requerimento à CDA Regional do município da propriedade.' },
    ] },
    { h2: 'Como atualizar o rebanho no GEDAVE', blocos: [
      { ol: [
        'Conte os animais por espécie, sexo e faixa etária. Separe os nascimentos, as mortes, o consumo e os animais que mudaram de idade.',
        'Entre no GEDAVE (Sistema de Gestão de Defesa Animal e Vegetal) com a sua senha pessoal de produtor.',
        'Abra a atualização do rebanho da propriedade e informe o saldo de cada espécie, mesmo que nada tenha mudado.',
        'Quem tem bovinos ou bubalinos emite o DARE da taxa no próprio sistema e paga dentro da validade, que é de 7 dias corridos.',
        'Guarde o comprovante da declaração e do pagamento.',
      ] },
      { p: 'Sem acesso à internet, a declaração pode ser feita em formulário, no modelo que está no site da CDA, em duas vias assinadas. Durante a campanha ele é entregue em qualquer CDA Regional ou enviado ao e-mail da CDA Regional do município da propriedade. Dúvida se tira na mesma CDA Regional.' },
      { p: 'Depois que o prazo termina, o sistema deixa de servir para regularizar: a comprovação só é aceita pelo formulário, entregue na CDA Regional ou enviado ao e-mail dela.' },
    ] },
    { h2: 'A taxa dos bovinos e bubalinos desde 2026', blocos: [
      { p: 'A Resolução SAA nº 27, de 2026, ligou a declaração a uma taxa de vigilância destinada ao fundo de sanidade animal do estado. Ela é calculada pelo número de bovinos e bubalinos que constam no cadastro do produtor. O pagamento é por DARE (Documento de Arrecadação de Receitas Estaduais), emitido no ato da declaração.' },
      { p: 'O valor depende do saldo de cada produtor. A resolução não repete o valor por cabeça: manda calcular conforme a Lei nº 18.077, de 2024. O total a pagar aparece no DARE. Nascimento registrado depois da declaração ou correção que aumenta o saldo gera um DARE complementar.' },
    ] },
    { h2: 'O que acontece com quem não declara', blocos: [
      { ul: [
        '**GTA condicionada durante a etapa.** A guia, para qualquer finalidade, só sai com o rebanho daquela espécie atualizado na origem e no destino. Bovinos e bubalinos contam juntos: os dois precisam estar atualizados para mover qualquer um.',
        '**GTA de bovinos suspensa no começo.** Pela resolução de 2026, a guia de bovinos e bubalinos fica suspensa no início dos períodos oficiais e só volta depois da declaração e do pagamento da taxa.',
        '**Cobrança sem declaração.** Quem deixa passar o prazo recebe o DARE emitido pela Defesa, com notificação, e continua obrigado a declarar em 30 dias contados da notificação.',
        '**Multa e propriedade parada.** O folheto que a Defesa publicou em 30/04/2024 diz que, depois da etapa, a movimentação de toda a propriedade fica suspensa. Ele cita multa de 100 UFESP para quem deixa de prestar informações. Confirme na CDA Regional o que vale em 2026.',
      ] },
      { p: 'Sem a guia não há venda nem transferência. Veja o caminho em [como emitir GTA](/como-emitir-gta) e as vacinas que também travam a guia no [calendário de vacinação bovina](/calendario-de-vacinacao-bovina).' },
      { destaque: 'Prazo, taxa e punição são da Defesa Agropecuária de São Paulo e mudam. Este texto é informativo e não substitui o veterinário nem a defesa agropecuária: confirme a data da etapa no GEDAVE. O FINAGRO não envia a declaração ao GEDAVE.' },
    ] },
  ],
  noFinagro: { h2: 'A declaração de SP e o FINAGRO', itens: [
    'O app não envia a declaração à Defesa Agropecuária: ela é feita por você no GEDAVE.',
    'A tela "O que vence" lista a declaração de rebanho de São Paulo com as etapas, onde declarar e o que acontece com quem não faz.',
    'Em SP a guia depende da declaração desde o começo da etapa. Por isso, com o aviso ligado, o app avisa 7 dias antes de a etapa abrir e na véspera, e de novo antes do fim. Ao marcar "Já fiz", o aviso daquela etapa some.',
    'Cada animal tem ficha e o lote guarda as cabeças, então você abre o GEDAVE com a contagem do rebanho pronta.',
  ] },
  cta: { forte: 'Rebanho contado e etapa do GEDAVE lembrada antes de abrir.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre declaração de rebanho em SP',
  faq: [
    ['Qual o prazo da declaração de rebanho 2026 em SP?', 'A Resolução SAA 28, de 2024, fixa duas etapas por ano: de 1º de maio a 7 de junho e de 1º de novembro a 7 de dezembro. A 1ª etapa de 2026 já passou. A Defesa pode prorrogar ou antecipar, então confirme a data da 2ª etapa de 2026 no GEDAVE ou na CDA Regional.'],
    ['Onde faço a declaração de rebanho em SP?', 'No GEDAVE, com a senha pessoal do produtor. Sem internet, por formulário entregue em qualquer CDA Regional ou enviado ao e-mail da CDA Regional do município da propriedade.'],
    ['Preciso declarar se o rebanho não mudou?', 'Sim. A resolução diz que a atualização deve ser feita mesmo que não tenha ocorrido alteração no número de animais.'],
    ['Tem taxa para declarar o rebanho em SP?', 'Para bovinos e bubalinos, sim, desde a Resolução SAA 27, de 2026. A taxa é calculada pelo saldo do cadastro e paga por DARE, que vale 7 dias corridos. A resolução manda calcular pela Lei 18.077, de 2024, e o total aparece no DARE.'],
    ['O FINAGRO envia a declaração ao GEDAVE?', 'Não. O app não envia nada à Defesa Agropecuária. Ele guarda a contagem do rebanho e lembra a etapa; a declaração é feita por você no GEDAVE.'],
  ],
  fontes: [
    { nome: 'Defesa Agropecuária de São Paulo, Resolução SAA nº 28, de 08/04/2024', url: SAA28 },
    { nome: 'Defesa Agropecuária de São Paulo, Resolução SAA nº 27, de 29/04/2026', url: SAA27 },
    { nome: 'Defesa Agropecuária de São Paulo, folheto da Campanha de Atualização dos Rebanhos (30/04/2024)', url: FOLHETO },
  ],
  relacionados: ['declaracao-de-rebanho', 'como-emitir-gta', 'declaracao-de-rebanho-pr'],
};
