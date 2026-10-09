// Consultas-alvo: "declaração de rebanho ms", "declaração de rebanho 2026 ms", "declaração de rebanho iagro" (colheita de 08/10/2026).
// Regra sanitária de Mato Grosso do Sul: período, sistema e punição só com trecho de página da Iagro (iagro.ms.gov.br).
const SERVICO = 'https://www.iagro.ms.gov.br/servicos-em-destaque/declarar-saldo-de-rebanho-e-atualizar-cadastro/';
const MAIO26 = 'https://www.iagro.ms.gov.br/ultima-semana-para-declaracao-obrigatoria-de-rebanho-mobiliza-produtores-rurais-em-ms/';
const NOV25 = 'https://www.iagro.ms.gov.br/declaracao-de-rebanho-segunda-etapa-da-campanha-da-iagro-comeca-em-1o-de-novembro/';
const PORTARIA = 'https://www.iagro.ms.gov.br/iagro-estabelece-prazo-para-atualizacao-cadastral-e-declaracao-de-rebanhos-em-ms/';

export const provas = [
  { afirmacao: 'em Mato Grosso do Sul a declaração semestral é de 1º a 31 de maio e de 1º a 30 de novembro, com ajuste quando a data cai em feriado ou fim de semana', trecho: 'realizada nos seguintes períodos: de 1º a 31 de maio e de 1º a 30 de novembro, podendo ser ajustado caso a data caia em feriado ou final de semana', url: SERVICO },
  { afirmacao: 'na primeira etapa de 2026 a Iagro deu prazo até segunda-feira, 1º de junho', trecho: 'Os produtores rurais de Mato Grosso do Sul têm até a próxima segunda-feira, 1º de junho, para realizar a Declaração Semestral de Rebanho e Atualização Cadastral junto à Iagro', url: MAIO26 },
  { afirmacao: 'a campanha é obrigatória para todo produtor com saldo de animais e o atraso pode gerar multa e bloqueio da GTA', trecho: 'A campanha é obrigatória para todos os produtores que possuem saldo de animais, independentemente do porte da propriedade. O não cumprimento dentro do prazo pode gerar penalidades, como aplicação de multas, bloqueio da emissão da Guia de Trânsito Animal (GTA)', url: MAIO26 },
  { afirmacao: 'a declaração é gratuita, online no e-SANIAGRO ou presencial em qualquer Unidade Local da Iagro', trecho: 'A declaração pode ser feita gratuitamente de forma online, pelo sistema e-SANIAGRO, ou presencialmente em qualquer Unidade Local da Iagro', url: MAIO26 },
  { afirmacao: 'o produtor informa endereço, contatos, coordenadas, nascimentos, mortes, evolução das eras e saldo de todas as espécies', trecho: 'incluindo alterações cadastrais, como endereço, contatos e coordenadas geográficas, além do registro de nascimentos, mortes, evolução das eras dos animais e saldo de todas as espécies acompanhadas pela Iagro', url: MAIO26 },
  { afirmacao: 'para aves e suínos comerciais a declaração é facultativa quando não há outra espécie na mesma ficha', trecho: 'No caso de produtores de aves e suínos comerciais, a declaração é facultativa, desde que não haja outras espécies animais vinculadas à mesma ficha cadastral', url: MAIO26 },
  { afirmacao: 'na etapa de maio também se registra a vacina de brucelose das fêmeas de 3 a 8 meses, com prazo até 30 de junho', trecho: 'registrar a vacinação obrigatória contra brucelose em fêmeas bovinas com idade entre 3 e 8 meses. O prazo para esse registro segue até o dia 30 de junho', url: MAIO26 },
  { afirmacao: 'a Iagro atende dúvidas da campanha pelo WhatsApp (67) 99875-3796', trecho: 'a Iagro disponibiliza atendimento direto via WhatsApp pelo número (67) 99875-3796', url: MAIO26 },
  { afirmacao: 'desde o início da campanha a e-GTA fica bloqueada para todas as finalidades, menos abate, até o produtor declarar', trecho: 'A partir do início da campanha, a emissão da Guia de Trânsito Animal eletrônica (e-GTA) estará bloqueada para todas as finalidades, exceto para abate, até que o produtor regularize sua situação', url: NOV25 },
  { afirmacao: 'o e-SANIAGRO fica no endereço eservicos.sefaz.ms.gov.br', trecho: 'O procedimento pode ser feito de forma online, rápida e segura, por meio do sistema e-SANIAGRO: https://eservicos.sefaz.ms.gov.br', url: NOV25 },
  { afirmacao: 'na segunda etapa de 2025 o prazo foi até 1º de dezembro, sem previsão de prorrogação', trecho: 'O prazo para declaração vai até 1º de dezembro, sem previsão de prorrogação', url: NOV25 },
  { afirmacao: 'a declaração semestral se faz junto com a atualização cadastral', trecho: 'A Declaração Semestral de Rebanhos deve ser realizada concomitantemente à Atualização Cadastral', url: NOV25 },
  { afirmacao: 'a declaração abrange bovinos, bubalinos, aves, suínos, caprinos, ovinos, equídeos, abelhas, bicho-da-seda e animais aquáticos', trecho: 'suíno, caprino e ovino, equino, asinino e muar, abelha, bicho-da-seda e animais aquáticos', url: NOV25 },
  { afirmacao: 'fora do prazo, a exploração pecuária fica bloqueada até a atualização e a aplicação das penalidades', trecho: 'as explorações pecuárias ficarão bloqueadas, sendo liberadas somente após a realização das atualizações e a aplicação das penalidades previstas na legislação vigente', url: PORTARIA },
  { afirmacao: 'a declaração cabe ao produtor ou ao representante legal, em caráter compulsório', trecho: 'deverão ser realizadas pelo produtor rural ou seu representante legal, em caráter compulsório', url: PORTARIA },
];

export default {
  slug: 'declaracao-de-rebanho-ms',
  grupo: 'corte',
  tipo: 'guia',
  curto: 'Declaração de rebanho MS',
  resumo: 'Etapas de maio e novembro na Iagro e o e-SANIAGRO.',
  title: 'Declaração de rebanho em MS: prazo 2026 e como fazer',
  description: 'Declaração de rebanho em MS: etapas de maio e novembro na Iagro, como declarar no e-SANIAGRO, o que informar e o que acontece com a GTA de quem atrasa.',
  h1: 'Declaração de rebanho em MS: prazo de 2026 e como declarar na Iagro',
  pergunta: 'Como fazer a declaração de rebanho em Mato Grosso do Sul?',
  resposta: 'Em Mato Grosso do Sul a declaração de rebanho é semestral e obrigatória: de 1º a 31 de maio e de 1º a 30 de novembro, com ajuste quando a data cai em fim de semana. Ela é feita de graça no e-SANIAGRO ou numa Unidade Local da Iagro. Enquanto não declara, a guia de trânsito fica bloqueada.',
  tela: 'animais',
  atualizado: '2026-10-09',
  secoes: [
    { h2: 'Como a Iagro chama e quem é obrigado', blocos: [
      { p: 'O nome oficial em Mato Grosso do Sul é Declaração Semestral de Rebanho e Atualização Cadastral. São duas obrigações feitas de uma vez: a Iagro (Agência Estadual de Defesa Sanitária Animal e Vegetal) pede que a declaração do saldo seja feita junto com a atualização do cadastro da propriedade.' },
      { p: 'Declara todo produtor que tem saldo de animais, de qualquer porte de propriedade. A obrigação é do produtor ou do representante legal, em caráter compulsório. Entram bovinos e bubalinos, aves, suínos, caprinos e ovinos, equinos, asininos e muares, abelhas, bicho-da-seda e animais aquáticos.' },
      { p: 'Há uma exceção: para quem cria aves e suínos comerciais a declaração é facultativa, desde que não exista outra espécie na mesma ficha cadastral. Se houver uma cabeça de gado na ficha, a obrigação volta a valer.' },
      { p: 'O motivo da regra e o prazo dos outros estados estão na página geral de [declaração de rebanho](/declaracao-de-rebanho).' },
    ] },
    { h2: 'Prazo da declaração de rebanho em MS em 2026', blocos: [
      { tabela: { colunas: ['Etapa', 'Período da regra', 'O que a Iagro publicou'], linhas: [
        ['1ª etapa', '1º a 31 de maio', 'Em 2026 o prazo foi até segunda-feira, 1º de junho'],
        ['2ª etapa', '1º a 30 de novembro', 'A data se ajusta se cair em feriado ou fim de semana'],
      ], nota: 'Períodos da página de serviço e das notícias da Iagro, lidas em 09/10/2026. Confirme a data final da etapa de novembro de 2026 no site da Iagro antes de contar com ela.' } },
      { p: 'A regra é fixa, mas o último dia anda. Quando o fim do mês cai em sábado ou domingo, a Iagro ajusta o prazo, como fez em maio de 2026. Não conte com prorrogação longa: na segunda etapa de 2025 o prazo foi até 1º de dezembro e a agência avisou que não havia previsão de prorrogar.' },
      { p: 'Na etapa de maio dá para resolver outra pendência no mesmo acesso: o registro da vacina de brucelose das fêmeas bovinas de 3 a 8 meses, que em 2026 teve prazo até 30 de junho. As outras vacinas estão no [calendário de vacinação bovina](/calendario-de-vacinacao-bovina).' },
    ] },
    { h2: 'Como declarar no e-SANIAGRO, passo a passo', blocos: [
      { ol: [
        'Conte o rebanho por espécie, sexo e era (a faixa de idade). Some os nascimentos e as mortes desde a última etapa.',
        'Entre no e-SANIAGRO, em eservicos.sefaz.ms.gov.br, com o seu acesso de produtor.',
        'Atualize o cadastro: endereço da propriedade, telefones, e-mail, coordenadas geográficas e via de acesso.',
        'Lance os nascimentos, as mortes e a evolução das eras, e confira o saldo de cada espécie.',
        'Envie a declaração e guarde o comprovante.',
      ] },
      { p: 'A declaração é gratuita. Quem não consegue pela internet pode fazer presencialmente em qualquer Unidade Local da Iagro; os endereços estão no site da agência.' },
      { p: 'Dúvida durante a campanha se tira com a própria Iagro. Na etapa de maio de 2026 o atendimento era pelo WhatsApp (67) 99875-3796. O número pode mudar de uma etapa para outra, então confira no site antes de mandar mensagem.' },
    ] },
    { h2: 'O que acontece com quem não declara', blocos: [
      { ul: [
        '**GTA bloqueada desde o primeiro dia.** A partir do início da campanha a e-GTA fica bloqueada para todas as finalidades, menos abate, até o produtor declarar. Quem tem embarque marcado para o começo de maio ou de novembro declara antes de tudo.',
        '**Exploração bloqueada depois do prazo.** Passada a etapa sem declaração, a exploração pecuária fica bloqueada e só é liberada depois da atualização e da aplicação das penalidades.',
        '**Multa.** A Iagro cita multa, bloqueio da guia e outras restrições sanitárias para quem não cumpre o prazo. O valor não está nas páginas da campanha: pergunte na Unidade Local.',
      ] },
      { p: 'Com a guia travada não há venda para recria nem leilão. O caminho completo da guia está em [como emitir GTA](/como-emitir-gta).' },
      { destaque: 'Prazo, sistema e punição são da Iagro e mudam. Este texto é informativo e não substitui o veterinário nem a defesa agropecuária: confirme a data na Iagro antes de contar com ela. O FINAGRO não envia a declaração à Iagro.' },
    ] },
  ],
  noFinagro: { h2: 'A declaração de MS e o FINAGRO', itens: [
    'O app não envia a declaração à Iagro: ela é feita por você no e-SANIAGRO ou na Unidade Local.',
    'A tela "O que vence" lista a declaração de rebanho de Mato Grosso do Sul com as duas etapas, onde declarar e o que acontece com quem não faz.',
    'Como em MS a guia trava no primeiro dia, o aviso no celular chega 7 dias antes de a etapa abrir. Ao marcar "Já fiz", o aviso daquela etapa some.',
    'Cada animal tem ficha e o lote guarda as cabeças, então você abre o e-SANIAGRO com a contagem do rebanho pronta.',
  ] },
  cta: { forte: 'Rebanho contado e etapa da Iagro lembrada antes de abrir.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre declaração de rebanho em MS',
  faq: [
    ['Qual o prazo da declaração de rebanho 2026 em MS?', 'A regra da Iagro é de 1º a 31 de maio e de 1º a 30 de novembro, com ajuste quando a data cai em feriado ou fim de semana. Em 2026 a primeira etapa foi até segunda-feira, 1º de junho. Confirme o último dia da etapa de novembro no site da Iagro.'],
    ['Onde faço a declaração de rebanho em MS?', 'No e-SANIAGRO, pela internet, de graça, ou presencialmente em qualquer Unidade Local da Iagro.'],
    ['Posso emitir GTA em MS sem ter declarado o rebanho?', 'Durante a campanha, só para abate. A Iagro informa que a e-GTA fica bloqueada para todas as outras finalidades desde o início da etapa, até o produtor declarar e atualizar o cadastro.'],
    ['Quem cria só galinha ou porco para consumo precisa declarar em MS?', 'Sim. Aves e suínos de subsistência entram na declaração. A dispensa vale só para núcleos comerciais de aves e suínos sem outra espécie na mesma ficha cadastral.'],
    ['O FINAGRO faz a declaração de rebanho na Iagro por mim?', 'Não. O app não envia nada à Iagro. Ele guarda a contagem do rebanho e lembra o prazo; a declaração é feita por você no e-SANIAGRO.'],
  ],
  fontes: [
    { nome: 'Iagro (MS), declarar saldo de rebanho e atualizar cadastro', url: SERVICO },
    { nome: 'Iagro (MS), última semana para a declaração obrigatória de rebanho', url: MAIO26 },
    { nome: 'Iagro (MS), segunda etapa da campanha de declaração de rebanho', url: NOV25 },
    { nome: 'Iagro (MS), prazo para atualização cadastral e declaração de rebanhos', url: PORTARIA },
  ],
  relacionados: ['declaracao-de-rebanho', 'como-emitir-gta', 'calendario-de-vacinacao-bovina'],
};
