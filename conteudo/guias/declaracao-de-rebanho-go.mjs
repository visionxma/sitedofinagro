// Consultas-alvo: "declaração de rebanho go", "declaração de rebanho 2026 go", "declaração de rebanho sidago" (colheita de 08/10/2026).
// Regra sanitária de Goiás: período, sistema e punição só com trecho da Agrodefesa ou da Agência Goiás (goias.gov.br, go.gov.br).
const PORT173 = 'https://goias.gov.br/agrodefesa/wp-content/uploads/sites/49/2016/10/portaria-173.2026.pdf';
const PORT239 = 'https://goias.gov.br/agrodefesa/wp-content/uploads/sites/49/2016/10/SEI_91132122_Portaria_239-1.pdf';
const PERGUNTAS = 'https://goias.gov.br/agrodefesa/perguntas-e-respostas-defesa-sanitaria-animal/';
const NOTICIA = 'https://agencia.go.gov.br/declaracao-de-rebanho-2026-comeca-em-1o-de-maio/';
const RETA = 'https://agencia.go.gov.br/prazo-para-a-1a-etapa-da-declaracao-de-rebanho-em-goias-entra-na-reta-final/';

export const provas = [
  { afirmacao: 'em Goiás a declaração tem duas etapas por ano: de 1º a 31 de maio e de 1º a 30 de novembro', trecho: 'A Declaração de Rebanho será realizada no decorrer de cada ano em duas Etapas, observados os seguintes períodos: I – 1ª Etapa: de 1º a 31 de maio; II – 2ª Etapa: de 1º a 30 de novembro', url: PORT173 },
  { afirmacao: 'a primeira etapa de 2026 foi prorrogada até 10 de junho de 2026', trecho: 'Fica prorrogado, em caráter excepcional, até o dia 10 de junho de 2026 o prazo para a realização da declaração obrigatória de rebanho (1ª etapa)', url: PORT239 },
  { afirmacao: 'declara todo produtor com animais de interesse pecuário cadastrados na Agrodefesa, qualquer que seja a quantidade', trecho: 'Todos os produtores rurais que possuam animais de interesse pecuário cadastrados na AGRODEFESA devem realizar a Declaração de Rebanho, independentemente da quantidade de animais existentes na propriedade', url: PERGUNTAS },
  { afirmacao: 'entram bovinos, bubalinos, equídeos, caprinos, ovinos, aves e suínos de subsistência, animais aquáticos e abelhas', trecho: 'incluindo bovinos, bubalinos, equinos, muares, asininos, caprinos, ovinos, aves de subsistência, suínos de subsistência, animais aquáticos e abelhas', url: PERGUNTAS },
  { afirmacao: 'o produtor declara o saldo exato de todas as espécies, por sexo e faixa etária', trecho: 'O produtor deverá declarar o saldo exato de animais de todas as espécies existentes na propriedade, discriminado por sexo e faixa etária', url: PORT173 },
  { afirmacao: 'a declaração se faz de preferência no SIDAGO, em sidago.agrodefesa.go.gov.br, com login e senha próprios', trecho: 'por meio do Sistema de Defesa Agropecuária de Goiás - SIDAGO, disponível no endereço eletrônico: https://sidago.agrodefesa.go.gov.br/, mediante a utilização de login e senha próprios', url: PORT173 },
  { afirmacao: 'quando necessário, a declaração é presencial nas Unidades Operacionais Locais da Agrodefesa', trecho: 'a declaração poderá ser realizada presencialmente pelo produtor ou seu procurador legalmente constituído nas Unidades Operacionais Locais da Agrodefesa', url: PORT173 },
  { afirmacao: 'propriedade em espólio declara só presencialmente', trecho: 'Nas propriedades rurais que se encontrem em situação de espólio, a declaração de rebanho deverá ser realizada exclusivamente de forma presencial', url: PORT173 },
  { afirmacao: 'a declaração não é aceita por fax, correio, e-mail ou aplicativo de mensagens', trecho: 'É vedada a entrega da declaração de rebanho por fax, via postal, correio eletrônico ou por meio de aplicativos de mensagens', url: PORT173 },
  { afirmacao: 'desde o início de cada etapa fica proibido o trânsito de animais de propriedade sem o rebanho todo declarado, na origem ou no destino', trecho: 'fica proibido o trânsito de quaisquer espécies animais cujas propriedades de origem ou de destino não estejam com a totalidade do rebanho devidamente declarada no SIDAGO', url: PORT173 },
  { afirmacao: 'a proibição de trânsito não vale para animais destinados ao abate imediato', trecho: 'O disposto no caput deste artigo não se aplica aos animais destinados ao abate imediato', url: PORT173 },
  { afirmacao: 'quem não declara no prazo fica inadimplente, sujeito a bloqueio da GTA e multa', trecho: 'O produtor será considerado inadimplente perante a AGRODEFESA, ficando sujeito ao bloqueio da emissão da Guia de Trânsito Animal (GTA), multas e outras sanções previstas na legislação vigente', url: PERGUNTAS },
  { afirmacao: 'depois do prazo, o produtor inadimplente precisa ir a uma unidade da Agrodefesa para regularizar', trecho: 'o produtor que não tiver feito a declaração será considerado inadimplente e deverá necessariamente comparecer a uma unidade da Agrodefesa para regularizar sua situação', url: RETA },
  { afirmacao: 'terceiro só preenche a declaração com acesso de procurador', trecho: 'O preenchimento da declaração por terceiros (familiares ou prestadores de serviço) só é permitido com acesso de procurador', url: NOTICIA },
  { afirmacao: 'a senha de procurador se cadastra no SIDAGO com procuração registrada em cartório', trecho: 'A senha de procurador pode ser cadastrada no próprio Sidago, mediante a apresentação de procuração devidamente registrada em cartório', url: NOTICIA },
  { afirmacao: 'na declaração de 2026 a Agrodefesa pede a idade das bezerras de 1 a 12 meses', trecho: 'a estratificação de idade das bezerras de 1 a 12 meses, necessária para a Agência conhecer a dimensão do rebanho nessa faixa etária', url: RETA },
  { afirmacao: 'para abelhas se informa a quantidade de colmeias', trecho: 'O produtor deve informar a quantidade de colmeias existentes na propriedade durante as etapas obrigatórias da Declaração de Rebanho', url: PERGUNTAS },
];

export default {
  slug: 'declaracao-de-rebanho-go',
  grupo: 'corte',
  tipo: 'guia',
  curto: 'Declaração de rebanho GO',
  resumo: 'Etapas de maio e novembro na Agrodefesa e o SIDAGO.',
  title: 'Declaração de rebanho em GO: prazo 2026 e SIDAGO',
  description: 'Declaração de rebanho em GO: etapas de maio e novembro de 2026 na Agrodefesa, como declarar no SIDAGO e o que acontece com a GTA de quem não declara.',
  h1: 'Declaração de rebanho em GO: prazo de 2026 e como declarar no SIDAGO',
  pergunta: 'Como fazer a declaração de rebanho em Goiás?',
  resposta: 'Em Goiás a declaração de rebanho é obrigatória em duas etapas por ano: de 1º a 31 de maio e de 1º a 30 de novembro. Em 2026 a primeira foi prorrogada até 10 de junho. Ela é feita no SIDAGO, com login e senha próprios. Desde o primeiro dia da etapa, propriedade sem declaração não movimenta animais.',
  tela: 'animais',
  atualizado: '2026-10-09',
  secoes: [
    { h2: 'Como a Agrodefesa chama e quem é obrigado', blocos: [
      { p: 'Em Goiás o nome é Declaração de Rebanho mesmo. Quem cuida é a Agrodefesa (Agência Goiana de Defesa Agropecuária), e a regra de 2026 está na Portaria nº 173/2026, que fixa a obrigação e o calendário anual.' },
      { p: 'Declara todo produtor rural com animais de interesse pecuário cadastrados na Agrodefesa, qualquer que seja a quantidade. Entram bovinos, bubalinos, equinos, muares, asininos, caprinos, ovinos, aves e suínos de subsistência, animais aquáticos e abelhas.' },
      { p: 'O produtor informa o saldo exato de todas as espécies da propriedade, por sexo e faixa etária, contando nascimentos e mortes desde a última declaração. Para as abelhas, a quantidade de colmeias. Em 2026 a Agrodefesa também pediu a idade das bezerras de 1 a 12 meses.' },
      { p: 'O prazo dos outros estados está na página geral de [declaração de rebanho](/declaracao-de-rebanho).' },
    ] },
    { h2: 'Prazo da declaração de rebanho em GO em 2026', blocos: [
      { tabela: { colunas: ['Etapa', 'Período da portaria', 'Em 2026'], linhas: [
        ['1ª etapa', '1º a 31 de maio', 'Prorrogada até 10 de junho de 2026'],
        ['2ª etapa', '1º a 30 de novembro', 'Vale o período da portaria'],
      ], nota: 'Portarias Agrodefesa nº 173/2026 e nº 239/2026, lidas em 09/10/2026 no site da Agrodefesa. Confirme no site se a etapa de novembro teve prorrogação.' } },
      { p: 'A prorrogação de maio veio por portaria própria, em caráter excepcional, e só foi publicada no fim do mês. Quem deixa para o último dia contando com mais prazo fica com a guia parada enquanto espera.' },
    ] },
    { h2: 'Como declarar no SIDAGO, passo a passo', blocos: [
      { ol: [
        'Conte os animais de cada espécie por sexo e faixa etária e some nascimentos e mortes desde a última etapa.',
        'Entre no SIDAGO (Sistema de Defesa Agropecuária de Goiás), em sidago.agrodefesa.go.gov.br, com o seu login e a sua senha.',
        'Abra a declaração de rebanho da propriedade e informe o saldo de todas as espécies.',
        'Confira os números, envie e guarde o comprovante.',
      ] },
      { p: 'Login e senha são individuais. Parente ou prestador de serviço só preenche a declaração com acesso de procurador, e essa senha se cadastra no próprio SIDAGO com procuração registrada em cartório.' },
      { p: 'Quando não dá para fazer pela internet, o produtor ou o procurador declara presencialmente numa Unidade Operacional Local da Agrodefesa. Propriedade em espólio declara só presencialmente, com os documentos do espólio. A portaria não aceita declaração por fax, correio, e-mail ou aplicativo de mensagens. Dúvida se tira na unidade da Agrodefesa mais perto da propriedade.' },
    ] },
    { h2: 'O que acontece com quem não declara', blocos: [
      { ul: [
        '**Trânsito proibido desde o primeiro dia.** A partir de 1º de maio ou de 1º de novembro, fica proibido o trânsito de animais de qualquer espécie para propriedade pendente. Vale para a origem e para o destino: as duas precisam estar com todo o rebanho declarado no SIDAGO. A exceção são os animais destinados ao abate imediato.',
        '**Inadimplência depois do prazo.** Quem não declara é considerado inadimplente, fica sujeito ao bloqueio da GTA, a multas e a outras sanções.',
        '**Regularização presencial.** Passado o prazo, o produtor inadimplente precisa ir a uma unidade da Agrodefesa para regularizar.',
      ] },
      { p: 'Repare que o destino também conta: comprar gado de quem declarou não resolve se a sua propriedade está pendente. O caminho da guia está em [como emitir GTA](/como-emitir-gta), e as vacinas que também travam a venda, no [calendário de vacinação bovina](/calendario-de-vacinacao-bovina).' },
      { p: 'O valor da multa não está na portaria nem na página de perguntas da Agrodefesa. Pergunte na unidade local.' },
      { destaque: 'Prazo, sistema e punição são da Agrodefesa e mudam. Este texto é informativo e não substitui o veterinário nem a defesa agropecuária: confirme a data na Agrodefesa antes de contar com ela. O FINAGRO não envia a declaração ao SIDAGO.' },
    ] },
  ],
  noFinagro: { h2: 'A declaração de GO e o FINAGRO', itens: [
    'O app não envia a declaração à Agrodefesa: ela é feita por você no SIDAGO ou na unidade local.',
    'A tela "O que vence" lista a declaração de rebanho de Goiás com as duas etapas, onde declarar e o que acontece com quem não faz.',
    'O app pode avisar no celular 7 dias antes do fim da etapa e na véspera. Ao marcar "Já fiz", o aviso daquela etapa some.',
    'Cada animal tem ficha e o lote guarda as cabeças, então você abre o SIDAGO com a contagem do rebanho pronta.',
  ] },
  cta: { forte: 'Rebanho contado e etapa da Agrodefesa lembrada antes de vencer.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre declaração de rebanho em GO',
  faq: [
    ['Qual o prazo da declaração de rebanho 2026 em GO?', 'A Portaria 173/2026 fixa de 1º a 31 de maio e de 1º a 30 de novembro. Em 2026 a primeira etapa foi prorrogada até 10 de junho. Confirme no site da Agrodefesa se a etapa de novembro teve prorrogação.'],
    ['Onde faço a declaração de rebanho em Goiás?', 'De preferência no SIDAGO, com login e senha próprios. Quando necessário, presencialmente numa Unidade Operacional Local da Agrodefesa.'],
    ['Posso emitir GTA em Goiás sem declarar o rebanho?', 'Durante a etapa, não. Desde o primeiro dia fica proibido o trânsito de animais de propriedade de origem ou de destino sem todo o rebanho declarado. A exceção é o abate imediato.'],
    ['Outra pessoa pode fazer a minha declaração no SIDAGO?', 'Só com acesso de procurador. A senha de procurador se cadastra no próprio SIDAGO, com procuração registrada em cartório.'],
    ['O FINAGRO envia a declaração ao SIDAGO?', 'Não. O app não envia nada à Agrodefesa. Ele guarda a contagem do rebanho e lembra o prazo; a declaração é feita por você no SIDAGO.'],
  ],
  fontes: [
    { nome: 'Agrodefesa (GO), Portaria nº 173/2026', url: PORT173 },
    { nome: 'Agrodefesa (GO), Portaria nº 239/2026, prorrogação da 1ª etapa', url: PORT239 },
    { nome: 'Agrodefesa (GO), perguntas e respostas de defesa sanitária animal', url: PERGUNTAS },
    { nome: 'Agência Goiás, declaração de rebanho 2026 começa em 1º de maio', url: NOTICIA },
    { nome: 'Agência Goiás, prazo da 1ª etapa entra na reta final', url: RETA },
  ],
  relacionados: ['declaracao-de-rebanho', 'como-emitir-gta', 'declaracao-de-rebanho-mg'],
};
