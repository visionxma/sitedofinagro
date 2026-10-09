// Consultas-alvo: "declaração de rebanho mg", "atualização de rebanho ima", "declaração de rebanho ima portal do produtor" (colheita de 08/10/2026).
// Regra sanitária de Minas Gerais: período, sistema e punição só com trecho do Governo de Minas e do IMA (mg.gov.br, ima.mg.gov.br).
const SERVICO = 'https://www.mg.gov.br/servico/atualizar-dados-de-rebanhos';
const TUTORIAL = 'https://www.ima.mg.gov.br/noticias/2497-tutorial-ima-como-atualizar-seu-rebanho-no-portal-do-produtor';

export const provas = [
  { afirmacao: 'em Minas Gerais a campanha acontece uma vez ao ano, de 1º de maio a 30 de junho', trecho: 'A campanha acontece uma vez ao ano , no período de 1º de maio a 30 de junho', url: SERVICO },
  { afirmacao: 'a Portaria IMA nº 2.227, de 2023, torna a atualização obrigatória para todos os produtores de Minas Gerais, de qualquer tamanho de produção', trecho: 'estabelece que a etapa de Atualização de Rebanhos é obrigatória para todos os produtores rurais de Minas Gerais , independentemente do tamanho da produção', url: TUTORIAL },
  { afirmacao: 'todo ano, entre 1º de maio e 30 de junho, o proprietário informa ao IMA a quantidade e as características dos animais', trecho: 'entre 1º de maio e 30 de junho , os proprietários devem informar ao Instituto Mineiro de Agropecuária (IMA) a quantidade e as características dos animais em suas propriedades', url: TUTORIAL },
  { afirmacao: 'entram bovinos, bubalinos, equídeos, ovinos, caprinos, animais aquáticos, abelhas, suínos e aves de subsistência', trecho: 'bovinos, bubalinos, equinos, asininos, muares, ovinos, caprinos, animais aquáticos (peixes, crustáceos, moluscos, anfíbios e répteis), abelhas, suínos e aves de subsistência', url: SERVICO },
  { afirmacao: 'a atualização se faz presencialmente ou pelo Portal de Serviços do Produtor', trecho: 'A atualização dos dados do rebanho pode ser realizada presencialmente e pelo Portal de Serviços do Produtor', url: SERVICO },
  { afirmacao: 'presencialmente, nos escritórios do IMA, a atualização leva até 48 horas para ser concluída', trecho: 'Presencialmente, em um dos escritórios do IMA , até 48 horas para ser concluída', url: SERVICO },
  { afirmacao: 'o serviço traz um manual com o passo a passo da atualização pelo portal', trecho: 'com o passo a passo de como realizar a atualização pelo Portal de Serviços do(a) Produtor(a)', url: SERVICO },
  { afirmacao: 'quem não tem acesso ao portal pede o acesso por outro serviço do governo', trecho: 'Se você não tem acesso ao portal, leia a carta de serviços: Solicitar acesso ao portal de serviços do produtor rural', url: SERVICO },
  { afirmacao: 'presencialmente se apresenta a Declaração do Produtor, que junta a atualização do rebanho e a vacinação contra raiva', trecho: 'Atualização Cadastral do Rebanho e Declaração da Vacinação contra Raiva', url: SERVICO },
  { afirmacao: 'terceiro apresenta procuração e documento de identificação com foto e CPF', trecho: 'Quando a atualização dos rebanhos for realizada por terceiros a procuração concedendo poderes ao terceiro deve ser apresentada', url: SERVICO },
  { afirmacao: 'na atualização dá para informar a vacinação contra raiva dos herbívoros', trecho: 'Ao atualizar os dados de seu rebanho é possível informar se houve vacinação de bovinos, bubalinos, equídeos, caprinos e ovinos contra raiva dos herbívoros', url: SERVICO },
  { afirmacao: 'quem não atualiza os dados do rebanho fica impedido de emitir a GTA', trecho: 'que não atualizar os dados do seu rebanho ficará impedido(a) de emitir a Guia de Trânsito Animal - GTA', url: SERVICO },
  { afirmacao: 'o descumprimento pode resultar em penalidades e restrições na emissão de documentos sanitários', trecho: 'O não cumprimento dessa exigência pode resultar em penalidades e restrições na emissão de documentos sanitários, como a Guia de Trânsito Animal (GTA)', url: TUTORIAL },
];

export default {
  slug: 'declaracao-de-rebanho-mg',
  grupo: 'corte',
  tipo: 'guia',
  curto: 'Declaração de rebanho MG',
  resumo: 'Atualização de rebanhos no IMA, de maio a junho.',
  title: 'Declaração de rebanho em MG: prazo e como fazer no IMA',
  description: 'Declaração de rebanho em MG: a atualização de rebanhos do IMA vai de 1º de maio a 30 de junho. Veja como fazer pelo Portal do Produtor e o que trava a GTA.',
  h1: 'Declaração de rebanho em MG: prazo e como atualizar no IMA',
  pergunta: 'Como fazer a declaração de rebanho em Minas Gerais?',
  resposta: 'Em Minas Gerais a declaração de rebanho se chama atualização de rebanhos e acontece uma vez ao ano, de 1º de maio a 30 de junho. É obrigatória para todos os produtores. Faz-se pelo Portal de Serviços do Produtor ou num escritório do IMA. Quem não atualiza fica impedido de emitir a guia de trânsito.',
  tela: 'animais',
  atualizado: '2026-10-09',
  secoes: [
    { h2: 'Como o IMA chama e quem é obrigado', blocos: [
      { p: 'Em Minas a declaração de rebanho aparece como atualização de dados de rebanhos, ou etapa de Atualização de Rebanhos. O órgão é o IMA (Instituto Mineiro de Agropecuária).' },
      { p: 'A Portaria IMA nº 2.227, de 2023, estabelece que a etapa é obrigatória para todos os produtores rurais de Minas Gerais, de qualquer tamanho de produção. Todo ano o proprietário informa ao instituto a quantidade e as características dos animais que tem.' },
      { p: 'Entram bovinos, bubalinos, equinos, asininos, muares, ovinos, caprinos, animais aquáticos (peixes, crustáceos, moluscos, anfíbios e répteis), abelhas, suínos e aves de subsistência.' },
      { p: 'O prazo dos outros estados está na página geral de [declaração de rebanho](/declaracao-de-rebanho).' },
    ] },
    { h2: 'Prazo da declaração de rebanho em MG', blocos: [
      { tabela: { colunas: ['Campanha', 'Período'], linhas: [
        ['Uma vez ao ano', '1º de maio a 30 de junho'],
      ], nota: 'Carta de serviços do Governo de Minas e página do IMA, lidas em 09/10/2026.' } },
      { p: 'Minas tem uma campanha só por ano, com dois meses de prazo. A campanha de 2026 já passou. Quem ficou sem atualizar procura o escritório seccional do IMA que atende o município da propriedade, porque a pendência segura a guia até ser resolvida.' },
      { p: 'O período de 2027 se confirma no site do IMA perto de maio. Não marque embarque de maio ou junho sem conferir a data.' },
    ] },
    { h2: 'Como atualizar pelo Portal do Produtor', blocos: [
      { ol: [
        'Conte os animais de cada espécie e separe nascimentos, mortes, compras e vendas desde a última atualização.',
        'Entre no Portal de Serviços do Produtor, do IMA, com o seu login.',
        'Abra a atualização cadastral de animais e informe os dados de cada rebanho.',
        'Se vacinou bovinos, bubalinos, equídeos, caprinos ou ovinos contra a raiva dos herbívoros, informe na mesma tela.',
        'Confira, envie e guarde o comprovante.',
      ] },
      { p: 'O passo a passo com as telas está no manual do usuário, na página do serviço no portal do Governo de Minas, e o IMA publicou um tutorial em vídeo. Quem ainda não tem acesso ao portal pede antes, pelo serviço de solicitação de acesso ao Portal de Serviços do Produtor Rural.' },
      { p: 'Presencialmente, a atualização é feita num escritório do IMA e leva até 48 horas para ser concluída. Leve a Declaração do Produtor preenchida: é o formulário que junta a atualização cadastral do rebanho e a declaração da vacinação contra raiva, disponível na página do serviço.' },
      { p: 'Se outra pessoa for fazer por você, ela apresenta a procuração e um documento de identificação com foto e CPF. Dúvida se tira no escritório seccional do IMA.' },
    ] },
    { h2: 'O que acontece com quem não atualiza', blocos: [
      { ul: [
        '**GTA impedida.** O produtor que não atualiza os dados do rebanho fica impedido de emitir a Guia de Trânsito Animal.',
        '**Penalidades.** O IMA avisa que o descumprimento pode resultar em penalidades e em restrições na emissão de documentos sanitários.',
      ] },
      { p: 'As páginas do IMA não trazem valor de multa. Pergunte no escritório seccional.' },
      { p: 'Sem a guia não sai gado para venda, leilão nem transferência. Em Minas ela é pedida no mesmo Portal de Serviços do Produtor: veja [como emitir GTA](/como-emitir-gta). A vacina de raiva e as demais estão no [calendário de vacinação bovina](/calendario-de-vacinacao-bovina).' },
      { destaque: 'Prazo, sistema e punição são do IMA e mudam. Este texto é informativo e não substitui o veterinário nem a defesa agropecuária: confirme a data no IMA antes de contar com ela. O FINAGRO não envia a atualização de rebanhos ao IMA.' },
    ] },
  ],
  noFinagro: { h2: 'A declaração de MG e o FINAGRO', itens: [
    'O app não envia a declaração ao IMA: a atualização é feita por você no Portal de Serviços do Produtor ou no escritório do instituto.',
    'A tela "O que vence" lista a atualização de rebanhos de Minas Gerais com o período, onde fazer e o que acontece com quem não faz.',
    'O app pode avisar no celular 7 dias antes do fim da campanha e na véspera. Ao marcar "Já fiz", o aviso some.',
    'Cada animal tem ficha, as vacinas ficam anotadas e o lote guarda as cabeças, então a contagem e a vacina de raiva estão à mão na hora de atualizar.',
  ] },
  cta: { forte: 'Rebanho contado e a campanha do IMA lembrada antes de vencer.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre declaração de rebanho em MG',
  faq: [
    ['Qual o prazo da declaração de rebanho em MG?', 'A campanha de atualização de rebanhos acontece uma vez ao ano, de 1º de maio a 30 de junho. Confirme a data do ano no site do IMA.'],
    ['Onde faço a declaração de rebanho em Minas Gerais?', 'Pelo Portal de Serviços do Produtor, do IMA, ou presencialmente num escritório do instituto. No escritório, a atualização leva até 48 horas para ser concluída.'],
    ['Pequeno produtor precisa atualizar o rebanho no IMA?', 'Sim. A etapa é obrigatória para todos os produtores rurais de Minas Gerais, de qualquer tamanho de produção.'],
    ['Quem não atualiza o rebanho em MG pode emitir GTA?', 'Não. O produtor que não atualiza os dados do rebanho fica impedido de emitir a Guia de Trânsito Animal.'],
    ['O FINAGRO envia a atualização de rebanhos ao IMA?', 'Não. O app não envia nada ao IMA. Ele guarda a contagem do rebanho e lembra o prazo; a atualização é feita por você no portal do instituto.'],
  ],
  fontes: [
    { nome: 'Governo de Minas Gerais, atualizar dados de rebanhos', url: SERVICO },
    { nome: 'IMA (MG), tutorial de atualização do rebanho no Portal do Produtor', url: TUTORIAL },
  ],
  relacionados: ['declaracao-de-rebanho', 'como-emitir-gta', 'calendario-de-vacinacao-bovina'],
};
