// Consultas-alvo: "declaração de rebanho", "declaração de rebanho 2026", "declaração de rebanho online", "declaração de rebanho
// ms / rs / sp", "atualização cadastral de rebanho" (colheita de 08/10/2026). Regra sanitária: período só de página oficial do órgão.
const ES = 'https://idaf.es.gov.br/atualizacao-cadastral-de-rebanho';
const MS = 'https://www.iagro.ms.gov.br/iagro-estabelece-prazo-para-atualizacao-cadastral-e-declaracao-de-rebanhos-em-ms/';
const PI = 'https://portal.pi.gov.br/adapi/download/366/portarias/5750/portaria-no-57-de-01-de-julho-de-2026.pdf';
const SP28 = 'https://www.defesa.agricultura.sp.gov.br/legislacoes/resolucao-saa-28-de-08-04-2024,1862.html';
const SP27 = 'https://www.defesa.agricultura.sp.gov.br/legislacoes/resolucao-saa-27-de-29-04-2026,2033.html';
const MAPA_AFTOSA = 'https://www.gov.br/agricultura/pt-br/assuntos/sanidade-animal-e-vegetal/saude-animal/programas-de-saude-animal/febre-aftosa/combate-febre-aftosa';
const AC = 'https://idaf.ac.gov.br/produtores-rurais-do-acre-devem-fazer-declaracao-anual-de-rebanho-entre-1o-de-outubro-e-30-de-novembro/';
const AL = 'https://alagoasdigital.al.gov.br/servico/422';
const DF = 'https://www.sinj.df.gov.br/sinj/Norma/fe917648b3c742a59d9d5cba6b287150/seagri_prt_85_2025.html';
const GO = 'https://agencia.go.gov.br/declaracao-de-rebanho-2026-comeca-em-1o-de-maio/';
const MG = 'https://www.mg.gov.br/servico/atualizar-dados-de-rebanhos';
const MT = 'https://www.indea.mt.gov.br/-/14250081-campanha-de-atualizacao-de-estoque-de-rebanho';
const PA = 'https://www.adepara.pa.gov.br/node/736';
const PA2 = 'https://www.adepara.pa.gov.br/node/751';
const PE = 'https://www.adagro.pe.gov.br/blog/11-link-externo/blog/2002-adagro-inicia-em-maio-a-campanha-de-atualizacao-cadastral-2026';
const PR = 'https://www.adapar.pr.gov.br/servicos/Agropecuaria/Pecuaria/Atualizar-cadastro-do-rebanho-Epolw4rB';
const RJ = 'https://www.rj.gov.br/agricultura/sites/default/files/2026-09/CADASTRO%20REBANHO.pdf';
const RR = 'https://portal.rr.gov.br/campanha-de-atualizacao-cadastral-de-rebanhos-em-roraima-comeca-em-1o-de-abril/';
const RS = 'https://www.agricultura.rs.gov.br/declaracao';

export const provas = [
  { afirmacao: 'as campanhas de atualização cadastral são obrigatórias nos estados que suspenderam a vacinação contra aftosa', trecho: 'As campanhas de atualização cadastral são obrigatórias em todos os Estados que suspenderam a vacinação contra a febre aftosa', url: ES },
  { afirmacao: 'a estratégia do programa nacional de aftosa é manter zonas livres sem uso de vacinação', trecho: 'tem como estratégia principal a manutenção de zonas livres da doença , sem o uso da vacinação', url: MAPA_AFTOSA },
  { afirmacao: 'a Portaria MAPA nº 574/2023 suspendeu a vacinação contra aftosa e o cadastro estadual foi ajustado a ela', trecho: 'adequar o cadastro agropecuário estadual à Portaria do Ministério da Agricultura, Pecuária e Abastecimento (Mapa) nº 574, de 31 de março de 2023, que suspendeu a vacinação contra a febre aftosa', url: MS },
  { afirmacao: 'a atualização do rebanho ajuda a manter o status de livre de aftosa sem vacinação (Piauí)', trecho: 'considerando a importância da atualização cadastral de rebanhos para a manutenção do status sanitário de Piauí livre de febre aftosa sem vacinação', url: PI },
  { afirmacao: 'em São Paulo a declaração cabe a proprietários e detentores dos animais e vale mesmo sem mudança no número', trecho: 'deverá ser realizada mesmo se não ocorrer alteração do número de animais em sua guarda', url: SP28 },
  { afirmacao: 'em São Paulo a declaração tem duas etapas anuais, maio e novembro', trecho: 'A declaração de atualização do rebanho será realizada em duas etapas anuais, com a primeira etapa no período de 1º de maio a 07 de junho e a segunda etapa no período de 1º de novembro a 07 de dezembro', url: SP28 },
  { afirmacao: 'em São Paulo a CDA pode prorrogar ou antecipar a campanha', trecho: 'poderá prorrogar ou antecipar a campanha de atualização rebanho', url: SP28 },
  { afirmacao: 'em São Paulo a atualização se faz no GEDAVE com senha pessoal', trecho: 'A atualização do rebanho deverá ser realizada por meio do Sistema de Gestão de Defesa Animal e Vegetal (GEDAVE), ou outro que o venha a substituir, através de senha pessoal do proprietário', url: SP28 },
  { afirmacao: 'em São Paulo, quem não declara no prazo recebe cobrança de taxa (DARE) pelo quantitativo no sistema', trecho: 'Na hipótese de ausência de declaração ou de atualização do saldo de rebanho após o prazo definido pela DEFESA, será emitido DARE para pagamento da taxa', url: SP27 },
  { afirmacao: 'em Mato Grosso do Sul a declaração é semestral, em maio e novembro', trecho: 'A declaração semestral de rebanhos, por sua vez, deverá ser feita nos meses de maio e novembro de cada ano e conter o número total de animais existentes na propriedade por espécie e categoria', url: MS },
  { afirmacao: 'em Mato Grosso do Sul o produtor ou representante legal declara em caráter compulsório', trecho: 'deverão ser realizadas pelo produtor rural ou seu representante legal, em caráter compulsório, nos seguintes períodos', url: MS },
  { afirmacao: 'em Mato Grosso do Sul o período para Planalto e Pantanal é de 1º a 31 de maio e de 1º a 30 de novembro', trecho: 'Explorações pecuárias localizadas na região do Planalto e Pantanal: de 1º de maio a 31 maio, e de 1º de novembro a 30 de novembro', url: MS },
  { afirmacao: 'em Mato Grosso do Sul a declaração é feita no e-SANIAGRO', trecho: 'Sistema de Atenção Animal da Iagro (e-SANIAGRO), disponível no endereço eletrônico', url: MS },
  { afirmacao: 'em Mato Grosso do Sul se aproveita para informar nascimento, mortalidade, consumo e evolução de idade', trecho: 'os produtores também poderão atualizar as informações de nascimento, mortalidade, consumo e evolução de era', url: MS },
  { afirmacao: 'no Espírito Santo a campanha de 2026 foi de 1º de maio a 30 de junho', trecho: 'Período da campanha: de 1º/5 a 30/06/2026 Outras orientações: VEJA AQUI COMO COMPROVAR A ATUALIZAÇÃO DO SEU REBANHO', url: ES },
  { afirmacao: 'no Espírito Santo é preciso login e senha no Siapec', trecho: 'Para tanto, é necessário o acesso ao Siapec, com a utilização de login e senha', url: ES },
  { afirmacao: 'em Goiás as etapas de 2026 são de 1º a 31 de maio e de 1º a 30 de novembro', trecho: 'Este ano, a primeira etapa ocorrerá de 1º a 31 de maio, e a segunda, de 1º a 30 de novembro', url: GO },
  { afirmacao: 'em Goiás a Portaria 173/2026 da Agrodefesa fixa o calendário', trecho: 'O novo prazo está previsto na Portaria nº 173/2026 da Agrodefesa, que dispõe sobre a obrigatoriedade e o calendário anual da declaração de rebanho em Goiás', url: GO },
  { afirmacao: 'em Goiás a declaração se faz de preferência no Sidago', trecho: 'A Declaração de Rebanho deve ser realizada pelo produtor rural, preferencialmente por meio eletrônico, no Sistema de Defesa Agropecuária de Goiás', url: GO },
  { afirmacao: 'em Minas Gerais a campanha é de 1º de maio a 30 de junho', trecho: 'A campanha acontece uma vez ao ano , no período de 1º de maio a 30 de junho', url: MG },
  { afirmacao: 'em Minas Gerais a atualização se faz presencialmente ou pelo Portal de Serviços do Produtor', trecho: 'A atualização dos dados do rebanho pode ser realizada presencialmente e pelo Portal de Serviços do Produtor', url: MG },
  { afirmacao: 'em Mato Grosso a campanha de maio de 2026 foi de 1º de maio a 10 de junho', trecho: 'CAMPANHA DE MAIO DE 2026 PERÍODO : Início em 1º de maio a 10 de junho de 2026', url: MT },
  { afirmacao: 'em Mato Grosso a comunicação do estoque é presencial ou online no Módulo do Produtor', trecho: 'Presencialmente em alguma Unidade Local do INDEA ou Posto Avançado; Online através do acesso ao Módulo do Produtor', url: MT },
  { afirmacao: 'no Paraná a campanha é em etapa única, de 1º de maio a 30 de junho', trecho: 'A campanha de atualização do cadastro é realizada em etapa única, que vai de 1° de maio a 30 de junho', url: PR },
  { afirmacao: 'no Paraná a atualização é obrigatória e a GTA só sai depois de atualizar todas as espécies', trecho: 'A Guia de Trânsito Animal (GTA) somente será emitida após a atualização de todas as espécies animais existentes na propriedade', url: PR },
  { afirmacao: 'no Paraná a atualização vale para todo produtor com animais de qualquer espécie', trecho: 'A atualização é obrigatória para todos os produtores rurais com animais de produção de qualquer espécie sob sua guarda', url: PR },
  { afirmacao: 'no Rio de Janeiro a declaração é semestral, em maio e novembro', trecho: 'A atualização cadastral e a declaração de rebanhos ocorrerão semestralmente no período de 1º a 31 de maio e 1º a 30 de novembro', url: RJ },
  { afirmacao: 'no Rio de Janeiro se atualiza no SIAPEC ou no Núcleo de Defesa Agropecuária', trecho: 'Acesse o Sistema SIAPEC ou diretamente no Núcleo de Defesa Agropecuária mais próximo de sua propriedade', url: RJ },
  { afirmacao: 'no Rio Grande do Sul o prazo de 2026 foi prorrogado até 10 de julho', trecho: 'A entrega da Declaração Anual de Rebanho 2026 foi prorrogada e o prazo e até o dia 10 de julho', url: RS },
  { afirmacao: 'no Rio Grande do Sul a declaração se entrega no SDA Produtor Online', trecho: 'O produtor pode fazer a Declaração Anual de Rebanho e os ajustes de saldo dos animais diretamente no SDA - Produtor Online', url: RS },
  { afirmacao: 'no Piauí a campanha de 2026 foi prorrogada até 31 de julho', trecho: 'Prorrogar a Campanha Anual de Atualização Cadastral de Rebanhos por mais 30 (trinta) dias, com prazo até 31 de julho de 2026', url: PI },
  { afirmacao: 'em Roraima a campanha de 2026 foi de 1º a 30 de abril', trecho: 'devem atualizar os dados de seus rebanhos entre os dias 1º e 30 de abril, durante a Campanha de Atualização Cadastral de Rebanhos 2026', url: RR },
  { afirmacao: 'no Distrito Federal a campanha anual é de 1º de maio a 15 de junho', trecho: 'Fica instituída a Campanha de Atualização de Rebanhos a ser realizada anualmente no período de 1° de maio a 15 de junho, válida em todo o território do Distrito Federal', url: DF },
  { afirmacao: 'no Distrito Federal se declara online ou nas unidades da Diretoria de Sanidade Agropecuária', trecho: 'A declaração poderá ser realizada preferencialmente de forma online, pelo sistema informatizado disponibilizado pelo OESA/DF, ou de forma presencial nas unidades de atendimento da Diretoria de Sanidade Agropecuária e Fiscalização', url: DF },
  { afirmacao: 'no Acre o prazo vai de 1º de outubro a 30 de novembro', trecho: 'Prazo para Declaração de Rebanho começa no dia 1º de outubro e se estende até 30 de novembro', url: AC },
  { afirmacao: 'no Acre, quem não declara no prazo sofre multa e restrição de serviços como a GTA', trecho: 'Quem deixar de declarar dentro do prazo estará sujeito a penalidades, incluindo multas e restrições em serviços oferecidos pelo órgão, como emissão de Guias de Trânsito Animal', url: AC },
  { afirmacao: 'em Alagoas a atualização é em maio e novembro, na sede ou escritórios da Adeal', trecho: 'fazer a atualização nos meses de Maio e Novembro na sede Adeal ou em um dos escritórios distribuídos no estado de Alagoas', url: AL },
  { afirmacao: 'em Pernambuco a campanha obrigatória ocorre duas vezes por ano, em maio e novembro', trecho: 'a campanha obrigatória de atualização ocorre duas vezes por ano (maio e novembro)', url: PE },
  { afirmacao: 'em Pernambuco se informa a quantidade por espécie, sexo e faixa etária, com nascidos e mortos', trecho: 'quantitativos de animais existentes, incluindo nascidos e mortos após a última campanha (realizada em maio), por espécie, sexo e faixa etária', url: PE },
  { afirmacao: 'em Sergipe a declaração é feita pela Emdagro, por WhatsApp, e-mail ou escritório local', trecho: 'Enviar através do WhatsApp 79 99982-3828, e-mail atualizacaorebanho@emdagro.se.gov.br ou entregar em um dos escritórios locais da EMDAGRO', url: 'https://www.se.gov.br/servicos/4756' },
  { afirmacao: 'em São Paulo, depois da cobrança, a declaração continua obrigatória em 30 dias da notificação', trecho: 'A emissão do DARE não exime o produtor rural da obrigação de declarar ou atualizar o saldo de rebanho na etapa correspondente, devendo fazê-lo no prazo de 30 (trinta) dias contados da notificação', url: SP27 },
  { afirmacao: 'no Piauí, quem não atualiza pode ter o cadastro bloqueado e a GTA impedida', trecho: 'com possibilidade de bloqueio do cadastro e impedimento para emissão de documentos zoossanitários, como a Guia de Trânsito Animal (GTA)', url: 'https://www.pi.gov.br/sada-inicia-campanha-anual-de-atualizacao-de-rebanhos-em-todo-o-estado/' },
  { afirmacao: 'em Mato Grosso, quem não atualiza o estoque de rebanho no período fica impedido de emitir a GTA', trecho: 'ficará impedido de emitir a Guia de Trânsito de Animal (GTA), obrigatória para a movimentação de animais dentro de Mato Grosso ou para outro estado', url: 'https://www.indea.mt.gov.br/en/-/produtor-que-n%C3%A3o-atualizar-estoque-de-rebanho-ao-indea-fica-impedido-de-emitir-gta' },
  { afirmacao: 'no Pará a campanha começa em 15 de junho', trecho: 'A partir do dia 15 de junho, a Agência de Defesa Agropecuária do Pará (Adepará) iniciará a campanha de atualização cadastral dos rebanhos de todas as espécies', url: PA },
  { afirmacao: 'no Pará a campanha segue até 31 de julho e a falta de atualização pode bloquear a GTA', trecho: 'poderá acarretar o bloqueio da emissão da Guia de Trânsito Animal (GTA), documento indispensável para a movimentação de animais no Estado. A campanha segue até o dia 31 de julho', url: PA2 },
  { afirmacao: 'no Pará a atualização pode ser online pelo SIGEAGRO', trecho: 'A atualização cadastral pode ser realizada de forma online, por meio do Sistema de Gestão Agropecuária (SIGEAGRO), disponível no site da Adepará', url: PA2 },
];

export default {
  slug: 'declaracao-de-rebanho',
  grupo: 'corte',
  tipo: 'guia',
  curto: 'Declaração de rebanho',
  resumo: 'Prazo de 2026 por estado e como declarar.',
  title: 'Declaração de rebanho 2026: prazo por estado e como fazer',
  description: 'Declaração de rebanho 2026: quem declara, por que existe, o prazo e o sistema de 15 estados e do DF, e o que acontece com a GTA de quem não declara.',
  h1: 'Declaração de rebanho 2026: quem declara, quando e onde, estado por estado',
  pergunta: 'Quando é a declaração de rebanho em 2026?',
  resposta: 'A declaração de rebanho é obrigatória e o prazo é de cada estado. Goiás, Mato Grosso do Sul e Rio de Janeiro têm etapas em maio e novembro. Paraná e Minas Gerais, de maio a junho. No Acre, de 1º de outubro a 30 de novembro. Sem declarar, o estado pode travar a emissão da GTA.',
  tela: 'animais',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'O que é a declaração de rebanho e por que existe', blocos: [
      { p: 'É a informação que o produtor passa à defesa agropecuária do estado sobre quantos animais tem na propriedade, por espécie e categoria. Cada estado dá um nome: declaração de rebanho, atualização cadastral, atualização do estoque ou declaração semestral. É tudo a mesma obrigação.' },
      { p: 'Ela ficou mais importante depois que o país parou de vacinar contra a febre aftosa. A Portaria nº 574, de 2023, do Ministério da Agricultura suspendeu a vacinação, e a estratégia do programa nacional passou a ser manter zonas livres da doença sem vacina. O Piauí diz na própria portaria que a atualização cadastral dos rebanhos ajuda a manter o status de livre de aftosa sem vacinação. O Espírito Santo resume: as campanhas de atualização cadastral são obrigatórias em todos os estados que suspenderam a vacinação.' },
      { p: 'A declaração também decide se a [GTA](/gta) sai: no Paraná, a guia só é emitida depois da atualização de todas as espécies da propriedade. Veja em [como emitir GTA](/como-emitir-gta) o caminho completo.' },
    ] },
    { h2: 'Quem precisa declarar e o que informar', blocos: [
      { p: 'Quem tem animal de produção, de qualquer espécie, declara. No Paraná, a regra vale para todos os produtores com animais sob sua guarda. Em São Paulo, a declaração cabe ao proprietário ou a quem detém os animais a qualquer título, e vale mesmo quando o número não mudou.' },
      { ul: [
        'O total de animais existentes, por espécie, sexo e faixa etária (Pernambuco pede também os nascidos e mortos depois da última campanha).',
        'Em Mato Grosso do Sul, nascimento, mortalidade, consumo e mudança de idade entram na mesma declaração.',
        'CPF ou CNPJ do produtor e dados da propriedade, com a localização.',
      ] },
      { p: 'Por isso o rebanho precisa estar contado antes de abrir o sistema. Quem mantém a ficha de cada animal e o lote em dia chega à declaração com o número pronto.' },
    ] },
    { h2: 'Prazos por estado e onde declarar', blocos: [
      { p: 'O período muda de estado para estado e muda de ano para ano, porque os órgãos prorrogam. Esta tabela traz só o que está publicado na página ou na norma oficial do órgão. Estado que não aparece aqui não teve data oficial conferida: veja no site da defesa do seu estado.' },
      { tabela: { colunas: ['Estado', 'Período', 'Onde declarar'], linhas: [
        ['Acre', '1º de outubro a 30 de novembro', 'Idaf'],
        ['Alagoas', 'Maio e novembro', 'Adeal, sede ou escritórios'],
        ['Distrito Federal', '1º de maio a 15 de junho', 'Sistema online do órgão ou Diretoria de Sanidade'],
        ['Espírito Santo', '1º de maio a 30 de junho de 2026', 'Siapec (Idaf)'],
        ['Goiás', '2026: 1º a 31 de maio e 1º a 30 de novembro', 'Sidago (Agrodefesa)'],
        ['Mato Grosso', '2026: 1º de maio a 10 de junho', 'Módulo do Produtor (Indea) ou unidade local'],
        ['Mato Grosso do Sul', '1º a 31 de maio e 1º a 30 de novembro', 'e-SANIAGRO (Iagro)'],
        ['Minas Gerais', '1º de maio a 30 de junho', 'Portal de Serviços do Produtor (IMA)'],
        ['Pará', 'A partir de 15 de junho até 31 de julho', 'SIGEAGRO (Adepará)'],
        ['Paraná', '1º de maio a 30 de junho', 'Adapar'],
        ['Pernambuco', 'Maio e novembro', 'Adagro'],
        ['Piauí', '2026: prorrogada até 31 de julho', 'Adapi'],
        ['Rio de Janeiro', '1º a 31 de maio e 1º a 30 de novembro', 'SIAPEC ou Núcleo de Defesa'],
        ['Rio Grande do Sul', '2026: prorrogada até 10 de julho', 'SDA Produtor Online'],
        ['Roraima', '2026: 1º a 30 de abril', 'Aderr'],
        ['São Paulo', 'Etapas de maio e de novembro (Resolução SAA 28/2024)', 'GEDAVE (Defesa Agropecuária)'],
      ], nota: 'Onde a linha traz 2026, a página oficial cita o ano. Nas demais, vale a regra publicada pelo órgão, que pode ser prorrogada ou antecipada. Conferido nos sites oficiais em 08/10/2026.' } },
      { p: 'Ficaram fora da tabela, por falta de página oficial com data que abrisse para conferência: Amazonas, Amapá, Bahia, Ceará, Maranhão, Paraíba, Rio Grande do Norte, Rondônia, Santa Catarina, Sergipe e Tocantins. Em Sergipe a declaração é feita pela Emdagro, por formulário, WhatsApp ou e-mail. Nos outros, consulte o órgão do seu estado.' },
      { p: 'Em São Paulo a Coordenadoria de Defesa Agropecuária pode prorrogar ou antecipar a campanha, então vale confirmar a data da etapa no GEDAVE.' },
    ] },
    { h2: 'Passo a passo para declarar online', blocos: [
      { ol: [
        'Conte os animais por espécie, sexo e faixa etária e some os nascimentos e as mortes desde a última declaração.',
        'Tenha em mãos o CPF ou CNPJ e os dados da propriedade.',
        'Entre no sistema do seu estado (veja a tabela) com o login do produtor. Quem ainda não tem acesso procura primeiro a unidade local da defesa.',
        'Informe o total de animais de cada espécie, mesmo que nada tenha mudado.',
        'Confira os números antes de enviar e guarde o comprovante da declaração.',
        'Se o estado cobra taxa ou emite guia de pagamento, pague dentro do prazo.',
      ] },
      { p: 'Sem internet, os órgãos aceitam a declaração presencial: no Distrito Federal, na Diretoria de Sanidade Agropecuária; em Alagoas, na sede e nos escritórios da Adeal; em Mato Grosso, em qualquer unidade do Indea.' },
    ] },
    { h2: 'O que acontece com quem não declara', blocos: [
      { ul: [
        '**GTA travada.** No Paraná, a guia só sai depois da atualização de todas as espécies da propriedade. No Acre e no Pará, o órgão cita restrição de serviços, como a emissão de GTA.',
        '**Multa e taxa.** O Acre fala em multas. Em São Paulo, quem não declara no prazo recebe a cobrança de uma taxa (DARE), calculada pelos bovinos e bubalinos que constam no sistema.',
        '**Cadastro bloqueado.** No Piauí, a página do órgão prevê bloqueio do cadastro para quem não atualiza.',
      ] },
      { destaque: 'Prazo, valor e punição são do seu estado e mudam. Este texto é informativo e não substitui o veterinário nem a defesa agropecuária: confirme a data no órgão antes de contar com ela. O FINAGRO não envia a declaração a ninguém.' },
    ] },
  ],
  noFinagro: { h2: 'A declaração e o FINAGRO', itens: [
    'O app não transmite a declaração: ela é entregue no sistema da defesa do seu estado.',
    'Cada animal tem ficha, e o lote guarda as cabeças, então você chega à declaração com o número do rebanho pronto.',
    'A tela "O que vence" lista a declaração de rebanho do estado do produtor, com o prazo, e abre a página oficial do órgão.',
    'Ao marcar "Já fiz", o aviso daquela etapa some, e o app pode avisar no celular 7 dias antes e na véspera.',
  ] },
  cta: { forte: 'Rebanho contado, prazo à vista e aviso antes de vencer.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre declaração de rebanho',
  faq: [
    ['Declaração de rebanho é a mesma coisa que atualização cadastral?', 'Na prática, sim. Cada estado usa um nome: declaração de rebanho, atualização cadastral, atualização do estoque ou declaração semestral. Em todos, o produtor informa à defesa agropecuária quantos animais tem.'],
    ['Preciso declarar se não vendi nem comprei nenhum animal?', 'Sim. Em São Paulo, por exemplo, a atualização deve ser feita mesmo que não tenha havido mudança no número de animais.'],
    ['Quem não faz a declaração de rebanho pode emitir GTA?', 'Em vários estados, não. No Paraná a guia só sai depois da atualização de todas as espécies, e em Mato Grosso, Piauí e São Paulo a falta de declaração leva a restrição.'],
    ['Posso declarar pelo celular?', 'Onde o sistema do estado abre no navegador, sim. A tabela mostra o sistema de cada estado. Quem não consegue pela internet pode ir à unidade local da defesa.'],
    ['Perdi o prazo da declaração de rebanho, e agora?', 'Procure a unidade local da defesa do seu estado o quanto antes. Em alguns estados, como São Paulo, o órgão notifica e dá prazo para declarar depois da cobrança da taxa, mas a regra muda de um estado para outro.'],
  ],
  fontes: [
    { nome: 'Idaf (ES), atualização cadastral de rebanho', url: ES },
    { nome: 'Ministério da Agricultura, Programa Nacional de Vigilância para Febre Aftosa', url: MAPA_AFTOSA },
    { nome: 'Iagro (MS), prazo de atualização cadastral e declaração de rebanhos', url: MS },
    { nome: 'Defesa Agropecuária de São Paulo, Resolução SAA 28/2024', url: SP28 },
    { nome: 'Defesa Agropecuária de São Paulo, Resolução SAA 27/2026', url: SP27 },
    { nome: 'Agência Goiás, declaração de rebanho 2026', url: GO },
    { nome: 'Governo de Minas Gerais, atualizar dados de rebanhos', url: MG },
    { nome: 'Indea-MT, campanha de atualização de estoque de rebanho', url: MT },
    { nome: 'Adapar (PR), atualizar o cadastro do rebanho', url: PR },
    { nome: 'Secretaria da Agricultura do RS, declaração anual de rebanho', url: RS },
    { nome: 'Governo do Rio de Janeiro, cadastro do rebanho', url: RJ },
    { nome: 'Adapi (PI), Portaria nº 57/2026', url: PI },
    { nome: 'Governo de Roraima, campanha de atualização cadastral 2026', url: RR },
    { nome: 'Sinj-DF, Portaria SEAGRI nº 85/2025', url: DF },
    { nome: 'Idaf (AC), declaração anual de rebanho', url: AC },
    { nome: 'Alagoas Digital, declaração de atualização cadastral dos produtores', url: AL },
    { nome: 'Adagro (PE), campanha de atualização cadastral 2026', url: PE },
    { nome: 'Adepará (PA), campanha de atualização cadastral', url: PA },
  ],
  relacionados: ['como-emitir-gta', 'calendario-de-vacinacao-bovina', 'controle-de-rebanho'],
};
