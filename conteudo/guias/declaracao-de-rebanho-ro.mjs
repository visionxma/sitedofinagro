// Consultas-alvo: "declaração de rebanho em rondônia", "declaração de rebanho 2026 ro", "declaração de rebanho idaron" (colheita de 08/10/2026).
// Regra sanitária de Rondônia: a regra permanente é o Decreto nº 25.105/2020 (texto na Casa Civil, ditel.casacivil.ro.gov.br).
// Data de etapa só com o ano da notícia do portal do Governo de Rondônia (rondonia.ro.gov.br): não há data oficial de 2026 publicada.
const DECRETO = 'https://ditel.casacivil.ro.gov.br/COTEL/Livros/Files/D25105.pdf';
const DECRETO_NOTICIA = 'https://rondonia.ro.gov.br/governo-publica-decreto-com-regras-de-suspensao-da-vacina-contra-febre-aftosa-e-obrigatoriedade-da-declaracao-de-rebanho-em-rondonia/';
const MAIO = 'https://rondonia.ro.gov.br/sistema-online-de-declaracao-de-rebanhos-ja-registra-38-de-adesao-atualizacao-obrigatoria-encerra-dia-31-de-maio/';
const NOVEMBRO = 'https://rondonia.ro.gov.br/governo-de-ro-encerra-mais-uma-etapa-da-declaracao-de-rebanhos-com-adesao-de-98-dos-pecuaristas/';
const GTA = 'https://rondonia.ro.gov.br/inovacao-tecnologica-permite-emissao-de-guia-de-transito-animal-para-equideos-pela-internet-em-rondonia/';

export const provas = [
  { afirmacao: 'o Decreto nº 25.105, de 2020, torna a declaração de rebanho obrigatória para todas as propriedades de Rondônia, nas unidades da Idaron ou pelo autoatendimento online', trecho: 'As declarações de rebanho serão obrigatórias para todas as propriedades existentes no Estado de Rondônia e poderão ser realizadas em todas as unidades da IDARON ou pelos canais de autoatendimento on-line, disponibilizados ao produtor', url: DECRETO },
  { afirmacao: 'o presidente da Idaron define, por ato próprio, os prazos e as condições das campanhas de declaração', trecho: 'O presidente da IDARON estabelecerá, mediante ato próprio, os prazos e as condições para campanhas de declaração de rebanhos pecuários com finalidade de atualização cadastral', url: DECRETO },
  { afirmacao: 'o calendário oficial das campanhas do ano tem de ser estabelecido até 31 de janeiro', trecho: 'O prazo para o presidente da IDARON estabelecer o calendário oficial das campanhas de declaração de todos os rebanhos do ano corrente, será até o dia 31 de janeiro de cada ano', url: DECRETO },
  { afirmacao: 'a declaração é de todo o rebanho das espécies suscetíveis à febre aftosa, de qualquer idade e sexo, inclusive os animais que vão para o abate', trecho: 'A declaração prevista no caput deverá ser de todo o rebanho de espécies suscetíveis à febre aftosa, independentemente da faixa etária e sexo, inclusive para aqueles animais que serão destinados ao abate', url: DECRETO },
  { afirmacao: 'o decreto considera suscetíveis à febre aftosa os bovinos, bubalinos, ovinos, caprinos e suínos', trecho: 'Entende-se por espécies susceptíveis à febre aftosa: bovinos, bubalinos, ovinos, caprinos e suínos', url: DECRETO },
  { afirmacao: 'quem descumpre a obrigação é considerado inadimplente por não declaração', trecho: 'o infrator será considerado inadimplente por não declaração/comunicação', url: DECRETO },
  { afirmacao: 'o governo de Rondônia publicou o Decreto nº 25.105, de 1º de junho de 2020, com a obrigatoriedade da declaração de rebanho', trecho: 'através do Decreto nº 25.105, de 1º de junho de 2020 estabelece as regras para suspensão da vacina contra febre aftosa e a obrigatoriedade da declaração de rebanho', url: DECRETO_NOTICIA },
  { afirmacao: 'pela notícia do governo de maio de 2025, a declaração tem duas etapas anuais, em maio e em novembro, obrigatória para criadores de bovinos, bubalinos, ovinos, caprinos, suínos, equídeos e aves', trecho: 'A declaração de rebanhos é feita em duas etapas anuais, em maio e em novembro, e é obrigatória para criadores de bovinos, bubalinos, ovinos, caprinos, suínos, equídeos e aves', url: MAIO },
  { afirmacao: 'em 2025 a etapa de maio encerrou no dia 31 de maio', trecho: 'o prazo para adesão à campanha de declaração obrigatória de rebanhos encerra no dia 31 de maio', url: MAIO },
  { afirmacao: 'em 2024 a etapa de novembro foi de 1º a 30 de novembro, e quem não declarou foi advertido e ficou impedido de emitir a GTA', trecho: 'que não declararam no período de 1º a 30 de novembro, serão advertidos e, administrativamente, ficam impedidos de emitir documentos importantes como a Guia de Trânsito Animal (GTA)', url: NOVEMBRO },
  { afirmacao: 'quem deixa de declarar fica impedido de emitir a GTA até atualizar a situação cadastral na Idaron', trecho: 'os produtores que deixam de declarar são impedidos de emitir a Guia de Trânsito Animal (GTA) até que atualizem a situação cadastral junto à Idaron', url: MAIO },
  { afirmacao: 'a Idaron oferece a declaração pelo seu site, sem ida à unidade', trecho: 'disponibiliza o acesso digital, em seu site , que permite a realização da declaração de forma rápida e segura, sem a necessidade de deslocamento até uma unidade física da Agência', url: MAIO },
  { afirmacao: 'a declaração é uma atualização cadastral dos animais de produção', trecho: 'produtores rurais que ainda não realizaram a atualização cadastral de seus animais de produção', url: MAIO },
  { afirmacao: 'depois do prazo, o produtor inadimplente só regulariza presencialmente nas unidades locais da Idaron', trecho: 'só poderá emitir a GTA e outros documentos sanitários importantes após regularização do cadastro na Idaron, o que, só pode ser feito presencialmente nas unidades locais da Agência', url: NOVEMBRO },
  { afirmacao: 'a cada etapa a Idaron também levanta produção de leite, suplementação, abelhas, peixes e frutas como cacau e banana', trecho: 'são levantadas informações de produção de leite, suplementação animal e de produção de abelhas, peixes e alguns tipos de frutas, como cacau e banana', url: NOVEMBRO },
  { afirmacao: 'a declaração serve para manter o status de livre de febre aftosa sem vacinação', trecho: 'para manutenção de status sanitários já garantidos por Rondônia, como, por exemplo, o de livre de febre aftosa sem vacinação e livre de peste suína clássica', url: NOVEMBRO },
  { afirmacao: 'para a GTA, produtor e propriedades de origem e destino precisam estar cadastrados no sistema online da Idaron', trecho: 'tanto o produtor quanto as propriedades, de origem e destino, estejam cadastrados no sistema online da Idaron (SisIdaron)', url: GTA },
];

export default {
  slug: 'declaracao-de-rebanho-ro',
  grupo: 'corte',
  tipo: 'guia',
  curto: 'Declaração de rebanho RO',
  resumo: 'O decreto, as etapas de maio e novembro e a Idaron.',
  title: 'Declaração de rebanho em Rondônia: etapas e Idaron',
  description: 'Declaração de rebanho em Rondônia: o decreto que obriga, as etapas de maio e novembro na Idaron, como declarar pelo site e o que acontece com a GTA no atraso.',
  h1: 'Declaração de rebanho em Rondônia: a regra e como declarar na Idaron',
  pergunta: 'Como fazer a declaração de rebanho em Rondônia?',
  resposta: 'Em Rondônia a declaração de rebanhos é obrigatória para todas as propriedades, pelo Decreto 25.105, de 2020, e o calendário de cada ano é da Idaron. Em 2024 a etapa de novembro foi de 1º a 30. Em 2025 a de maio encerrou dia 31. Confirme na Idaron a data de 2026. Sem declarar, a guia de trânsito não sai.',
  tela: 'animais',
  atualizado: '2026-10-09',
  secoes: [
    { h2: 'A regra de Rondônia e quem é obrigado', blocos: [
      { p: 'A regra permanente é o Decreto nº 25.105, de 1º de junho de 2020. Ele torna a declaração de rebanho obrigatória para todas as propriedades do estado. Quem cuida é a Idaron (Agência de Defesa Sanitária Agrosilvopastoril do Estado de Rondônia), que trata a declaração como atualização cadastral dos animais de produção.' },
      { p: 'Pelo decreto, declara-se todo o rebanho das espécies suscetíveis à febre aftosa: bovinos, bubalinos, ovinos, caprinos e suínos. Vale para qualquer idade e sexo, inclusive os animais que vão para o abate.' },
      { p: 'A notícia mais recente do governo sobre a campanha, de maio de 2025, põe na lista dos obrigados também os criadores de equídeos e de aves. Se você cria só cavalo ou galinha, confirme na unidade da Idaron.' },
      { p: 'A agência explica o motivo: a declaração sustenta os status sanitários que o estado já tem. Entre eles estão o de livre de febre aftosa sem vacinação e o de livre de peste suína clássica.' },
      { p: 'O prazo dos outros estados está na página geral de [declaração de rebanho](/declaracao-de-rebanho).' },
    ] },
    { h2: 'Prazo da declaração de rebanho em Rondônia', blocos: [
      { p: 'O decreto não traz as datas. Ele manda o presidente da Idaron definir, por ato próprio, os prazos e as condições de cada campanha. O calendário oficial do ano tem de sair até 31 de janeiro.' },
      { tabela: { colunas: ['Etapa', 'Última data publicada'], linhas: [
        ['Maio', 'Em 2025, encerrou no dia 31 de maio'],
        ['Novembro', 'Em 2024, de 1º a 30 de novembro'],
      ], nota: 'Notícias do portal do Governo de Rondônia de 20/05/2025 e de 03/12/2024, lidas em 09/10/2026. Confirme no órgão a data de 2026.' } },
      { p: 'O governo informa que a declaração é feita em duas etapas anuais, em maio e em novembro. Maio de 2026 já passou, e a próxima etapa é a de novembro. As datas da tabela são de 2024 e de 2025: confirme no órgão a data de 2026 antes de contar com ela.' },
      { p: 'Quem tem venda ou transferência marcada para o começo de novembro declara logo na abertura da etapa. Deixar para o fim é arriscar a guia do embarque.' },
    ] },
    { h2: 'Como declarar na Idaron, passo a passo', blocos: [
      { ol: [
        'Conte os animais de cada espécie que você cria e separe os nascimentos e as mortes desde a última etapa.',
        'Anote a produção de leite, a suplementação e, se tiver, os dados de abelhas, peixes e frutas que a Idaron pergunta.',
        'Entre no site da Idaron e acesse a declaração de rebanhos com o seu cadastro de produtor.',
        'Informe os animais de cada espécie e responda às perguntas de produção.',
        'Envie e guarde o comprovante da declaração.',
      ] },
      { p: 'A cada etapa a agência levanta outras informações da propriedade: produção de leite, suplementação animal, abelhas, peixes e alguns tipos de frutas, como cacau e banana. Vale ter esses números à mão.' },
      { p: 'O decreto prevê as duas formas: nas unidades da Idaron ou pelos canais de autoatendimento online. Quem não tem acesso à internet declara na unidade local do município, que é também onde se tira dúvida.' },
      { p: 'O mesmo cadastro vale para a guia. Para emitir a GTA pela internet, o produtor e as propriedades de origem e de destino precisam estar cadastrados no sistema online da Idaron. O caminho está em [como emitir GTA](/como-emitir-gta).' },
    ] },
    { h2: 'O que acontece com quem não declara', blocos: [
      { ul: [
        '**Inadimplente.** Pelo decreto, quem descumpre a obrigação é considerado inadimplente por não declaração.',
        '**GTA impedida.** Quem deixa de declarar fica impedido de emitir a Guia de Trânsito Animal até atualizar a situação cadastral na Idaron.',
        '**Advertência.** Na etapa de novembro de 2024, o governo informou que os criadores que não declararam no período seriam advertidos.',
        '**Regularização só presencial.** Passada a etapa, o produtor só volta a emitir a guia e outros documentos sanitários depois de regularizar o cadastro. Isso só pode ser feito presencialmente, nas unidades locais da agência.',
      ] },
      { p: 'Ou seja, o site resolve durante a etapa. Depois dela, é viagem até a unidade. A Idaron não publica o valor da multa nas páginas da campanha: pergunte na unidade local.' },
      { p: 'A vacina de brucelose das bezerras é outra pendência que costuma segurar a venda. Veja o [calendário de vacinação bovina](/calendario-de-vacinacao-bovina).' },
      { destaque: 'Prazo, sistema e punição são da Idaron e mudam. Este texto é informativo e não substitui o veterinário nem a defesa agropecuária: confirme a data da etapa de 2026 na Idaron antes de contar com ela. O FINAGRO não envia a declaração à Idaron.' },
    ] },
  ],
  noFinagro: { h2: 'A declaração de Rondônia e o FINAGRO', itens: [
    'O app não envia a declaração à Idaron: ela é feita por você no site da agência ou na unidade local.',
    'A tela "O que vence" lista a declaração de rebanho de Rondônia com as duas etapas, onde declarar e o que acontece com quem não faz.',
    'Com o aviso ligado, o app avisa 7 dias antes de a etapa abrir e na véspera, e de novo antes do fim. Ao marcar "Já fiz", o aviso daquela etapa some.',
    'Cada animal tem ficha e o lote guarda as cabeças, e a produção de leite fica registrada, então os números que a Idaron pede estão à mão.',
  ] },
  cta: { forte: 'Rebanho contado e etapa da Idaron lembrada antes de abrir.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre declaração de rebanho em Rondônia',
  faq: [
    ['Quando é a declaração de rebanho em Rondônia?', 'Em duas etapas por ano, em maio e em novembro, com calendário definido pela Idaron. Em 2025 a etapa de maio encerrou no dia 31. Em 2024 a de novembro foi de 1º a 30. Confirme na Idaron a data de 2026.'],
    ['Onde faço a declaração de rebanho em Rondônia?', 'Pelo site da Idaron, sem precisar ir à unidade, ou presencialmente na unidade local da agência. O Decreto 25.105, de 2020, prevê as duas formas.'],
    ['Quem não declara o rebanho em Rondônia pode emitir GTA?', 'Não. Quem deixa de declarar fica impedido de emitir a guia até atualizar a situação cadastral na Idaron.'],
    ['Perdi o prazo da declaração de rebanho em Rondônia, e agora?', 'Depois da etapa a regularização só pode ser feita presencialmente, numa unidade local da Idaron. Até lá a guia de trânsito não sai.'],
    ['O FINAGRO envia a declaração à Idaron?', 'Não. O app não envia nada à Idaron. Ele guarda a contagem do rebanho e lembra a etapa; a declaração é feita por você no site da agência.'],
  ],
  fontes: [
    { nome: 'Governo de Rondônia, Decreto nº 25.105, de 1º/06/2020 (declaração de rebanho obrigatória)', url: DECRETO },
    { nome: 'Governo de Rondônia, notícia sobre o Decreto nº 25.105 (07/06/2020)', url: DECRETO_NOTICIA },
    { nome: 'Governo de Rondônia, sistema online de declaração de rebanhos (20/05/2025)', url: MAIO },
    { nome: 'Governo de Rondônia, encerramento da etapa de novembro de 2024 (03/12/2024)', url: NOVEMBRO },
    { nome: 'Governo de Rondônia, GTA online da Idaron', url: GTA },
  ],
  relacionados: ['declaracao-de-rebanho', 'como-emitir-gta', 'declaracao-de-rebanho-ac'],
};
