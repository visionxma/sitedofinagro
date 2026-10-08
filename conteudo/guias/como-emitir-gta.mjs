// Consultas-alvo: "como emitir gta", "como emitir gta de gado", "como emitir gta online", "e-gta", "emitir gta pelo celular",
// "como emitir gta gedave" (colheita de 08/10/2026). Regra sanitária: cada afirmação de norma ou de sistema tem trecho oficial.
const PR_LEG = 'https://www.adapar.pr.gov.br/FAQ/Legislacao-do-Transito-Agropecuario';
const PA_MANUAL = 'https://sigeagro.adepara.pa.gov.br/manual/Manual%20de%20emiss%C3%A3o%20de%20GTA%20para%20Produtor.pdf';
const MT_TRANSITO = 'https://www.indea.mt.gov.br/en/-/6099383-transito';
const MT_ESTOQUE = 'https://www.indea.mt.gov.br/en/-/produtor-que-n%C3%A3o-atualizar-estoque-de-rebanho-ao-indea-fica-impedido-de-emitir-gta';
const PR_GTA = 'https://www.agricultura.pr.gov.br/servicos/Agropecuaria/Pecuaria/Emitir-guia-de-transito-animal-GTA-GPoyMBoQ';
const RO = 'https://rondonia.ro.gov.br/inovacao-tecnologica-permite-emissao-de-guia-de-transito-animal-para-equideos-pela-internet-em-rondonia/';
const MS = 'https://www.iagro.ms.gov.br/em-ms-a-partir-de-janeiro-estabelecimento-que-ira-receber-o-gado-deve-autorizar-emissao-de-gta-antes-do-embarque/';
const MG = 'https://www.mg.gov.br/servico/solicitar-guia-de-transito-animal-gta-para-bovinos-e-bubalinos';
const SP = 'https://servicos.sp.gov.br/fcarta/C82899ED-B74F-4C0E-8977-0FC4C60A2C8E';
const SP_NOT = 'https://www.defesa.agricultura.sp.gov.br/noticias/2015/gta-em-sao-paulo-passa-a-ser-eletronica-a-partir-de-28-04,900.html';
const GO = 'https://goias.gov.br/agrodefesa/produtor-rural-acesso-eletronico-sidago/';
const GO_APP = 'https://goias.gov.br/pecuaristas-ja-podem-emitir-gtas-notas-fiscais-e-dare-por-celular-smartphone-no-aplicativo-sidago-da-agrodefesa/';
const RS = 'https://www.agricultura.rs.gov.br/carta-de-servicos/servicos?servico=1381';
const DF = 'https://www.seagri.df.gov.br/emissao-de-guia-de-transito-animal-gta-2';
const BA = 'https://servicos.ba.gov.br/detalhe/servico/1514';
const MA = 'https://aged.ma.gov.br/emissao-de-guia-de-transito-animal-gta-ou-e-gta/';
const SC = 'https://www.cidasc.sc.gov.br/e-origem/';

export const provas = [
  { afirmacao: 'a Instrução Normativa MAPA nº 9/2021 criou o formato eletrônico da GTA (e-GTA) para todo o território nacional', trecho: 'estabelece o formato eletrônico da Guia de Trânsito Animal (GTA), na forma do modelo e-GTA, para movimentação, em todo o território nacional, de animais vivos', url: PR_LEG },
  { afirmacao: 'a GTA é documento oficial obrigatório em todo o país, dentro e entre estados', trecho: 'é um documento oficial utilizado em todo território nacional, OBRIGATÓRIO, para permitir o trânsito intraestadual e interestadual', url: PA_MANUAL },
  { afirmacao: 'a GTA acompanha os animais e vale durante todo o percurso', trecho: 'A GTA deve acompanhar os animais durante todo o período de trânsito, e deve estar dentro do prazo de validade durante todo o percurso', url: PA_MANUAL },
  { afirmacao: 'quem emite: proprietário ou representante legal cadastrado, servidor ou pessoa habilitada pelo MAPA', trecho: 'A emissão da GTA somente poderá ser realizada pelo próprio proprietário ou representante legal, seja o requisitante pessoa física ou jurídica cadastrado no sistema', url: PA_MANUAL },
  { afirmacao: 'no Pará o produtor emite a GTA online no SIGEAGRO antes de transportar', trecho: 'Antes de transportar animais, o produtor deverá emitir a GTA Online, no sistema SIGEAGRO', url: PA_MANUAL },
  { afirmacao: 'em Mato Grosso a propriedade precisa de cadastro no escritório do município e vacinas obrigatórias comprovadas', trecho: 'Para o fornecimento da GTA, a propriedade deve estar cadastrada junto ao escritório do seu município, executar e comprovar as vacinações obrigatórias exigidas pela legislação vigente', url: MT_TRANSITO },
  { afirmacao: 'em Mato Grosso o produtor titular emite a GTA dentro do estado pelo Módulo do Produtor do Sindesa', trecho: 'atualizar o cadastro, emitir histórico, saldo e também emitir e comunicar GTA intraestadual', url: MT_TRANSITO },
  { afirmacao: 'em Mato Grosso a GTA original deve ser entregue ao Indea em 7 dias (entre estados) ou 14 dias (dentro do estado) depois da chegada dos animais', trecho: 'Este documento deverá ser entregue em qualquer unidade local do INDEA no prazo de 07 dias para o transito interestadual e 14 dias para o transito intraestadual', url: MT_TRANSITO },
  { afirmacao: 'em Mato Grosso, quem não atualiza o estoque de rebanho no período fica impedido de emitir a GTA', trecho: 'ficará impedido de emitir a Guia de Trânsito de Animal (GTA), obrigatória para a movimentação de animais dentro de Mato Grosso ou para outro estado', url: MT_ESTOQUE },
  { afirmacao: 'no Paraná a emissão pela internet vale para bovinos e bubalinos dentro do estado, com finalidade de cria, engorda ou abate', trecho: 'É possível emitir a guia na internet, pelo sistema e-GTA, para o trânsito de rebanhos, desde que: a movimentação ocorra dentro do estado o rebanho seja de bovinos ou bubalinos a finalidade seja cria, engorda ou abate', url: PR_GTA },
  { afirmacao: 'no Paraná só emite pela internet quem está em dia com a defesa agropecuária e cadastrado no e-GTA', trecho: 'Pela internet, apenas o produtor rural que esteja em dia com as obrigações da defesa agropecuária e seja cadastrado no e-GTA', url: PR_GTA },
  { afirmacao: 'em Rondônia produtor e propriedades de origem e destino precisam estar cadastrados no sistema da Idaron', trecho: 'tanto o produtor quanto as propriedades, de origem e destino, estejam cadastrados no sistema online da Idaron (SisIdaron)', url: RO },
  { afirmacao: 'em Mato Grosso do Sul o destinatário autoriza o trânsito no e-SANIAGRO antes de o remetente emitir a GTA de bovinos', trecho: 'antes de emitir a Guia de Trânsito Animal (GTA) para liberar a movimentação de bovinos os estabelecimentos rurais que irão recebê-los deverão emitir uma autorização', url: MS },
  { afirmacao: 'em Mato Grosso do Sul não se emite a GTA se a origem não estiver autorizada', trecho: 'não será permitida a emissão de DTA/e-GTA ao produtor rural caso o estabelecimento de origem não esteja autorizado a realizar a emissão do documento', url: MS },
  { afirmacao: 'em Minas Gerais a GTA de bovinos sai pelo Portal de Serviços do Produtor Rural', trecho: 'Portal de Serviços do Produtor Rural - a) Acessar o Portal, b) Efetuar o login, c) Clicar no ícone GTA e seguir as orientações', url: MG },
  { afirmacao: 'em Minas Gerais a taxa se paga por DAE e o IMA emite a GTA depois de confirmar o pagamento', trecho: 'Após confirmar o pagamento da taxa, o IMA expedirá a Guia de Trânsito Animal (GTA)', url: MG },
  { afirmacao: 'em Minas Gerais a GTA tem em média 2 dias de validade, conforme a distância', trecho: 'A GTA tem em média a validade de 2 dias, mas pode variar dependendo da distância', url: MG },
  { afirmacao: 'em São Paulo a GTA se cadastra e se emite no GEDAVE, depois de pagar a taxa', trecho: 'Emitir o documento após a compensação do pagamento bancário da taxa', url: SP },
  { afirmacao: 'em São Paulo o cadastro leva origem, destino e rebanho a movimentar', trecho: 'Cadastrar as informações de origem, destino e rebanho a ser movimentado', url: SP },
  { afirmacao: 'em São Paulo só circula animal com e-GTA do sistema Gedave, e o produtor precisa ter a propriedade cadastrada na Defesa', trecho: 'Para utilizar este sistema, o produtor precisa ter o cadastro da propriedade ou estabelecimento rural junto à Defesa', url: SP_NOT },
  { afirmacao: 'em São Paulo a taxa da GTA é cobrada em UFESP', trecho: 'Pagamento de Taxa Quanto custa Valor 0,04 UFESP a 0,6 UFESP', url: SP },
  { afirmacao: 'em Goiás o SIDAGO emite a GTA e consulta saldo do rebanho', trecho: 'Emitir Guias de Trânsito Animal (GTA) e Trânsito Vegetal (ATV e PTV) Consultar saldos e extratos de movimentação do seu rebanho', url: GO },
  { afirmacao: 'em Goiás o aplicativo Sidago emite a GTA no celular Android, sem impressão, com QR Code', trecho: 'A GTA emitida no aplicativo não precisa ser impressa, eliminando completamente o uso de papel, que é substituído por um QR Code', url: GO_APP },
  { afirmacao: 'no Rio Grande do Sul a GTA se emite pela internet na plataforma Produtor Online, ou na Inspetoria', trecho: 'Presencialmente , nos pontos de atendimentos das Inspetorias veterinárias de cada município. Clique aqui para encontrar. Pela Internet , através da plataforma Produtor Online', url: RS },
  { afirmacao: 'no Rio Grande do Sul é preciso cadastro de produtor na Inspetoria ou escritório do município', trecho: 'Você deve ter Cadastro de Produtor Rural registrado na Inspetoria ou Escritório de Defesa Agropecuária do município', url: RS },
  { afirmacao: 'no Rio Grande do Sul o serviço consta como gratuito e pede nota fiscal ou declaração de não contribuinte', trecho: 'Documentos Necessários Nota Fiscal ou Declaração de Não Contribuinte do ICMS devidamente preenchidas. Quanto custa? Gratuito', url: RS },
  { afirmacao: 'no Distrito Federal a GTA sai nas unidades da Diretoria de Sanidade Agropecuária ou no SIAGRO', trecho: 'A GTA pode ser emitida em qualquer unidade da Diretoria de Sanidade Agropecuária ou utilizando o sistema SIAGRO', url: DF },
  { afirmacao: 'na Bahia a GTA se pede pelo SIDAB', trecho: 'Através do SIDAB - Sistema de Defesa Agropecuária da Bahia', url: BA },
  { afirmacao: 'na Bahia exames e atestados são pré-requisito quando exigidos', trecho: 'Resultados de exames e atestados quando for pré-requisitos para emissão da Guia', url: BA },
  { afirmacao: 'no Maranhão o produtor emite a GTA no trânsito dentro do estado se cadastrado no SIGAMA', trecho: 'desde que esteja devidamente cadastrado no Sistema de Gestão Agropecuária do Maranhão – SIGAMA', url: MA },
  { afirmacao: 'no Maranhão a emissão segue cadastro, solicitação em escritório da AGED e emissão', trecho: 'Etapas para a realização deste serviço 1. Cadastramento 2. Solicitação (em qualquer escritório da AGED/MA) 3. Emissão do documento', url: MA },
  { afirmacao: 'em Santa Catarina a GTA se emite no SIGEN+ da Cidasc', trecho: 'Se você já possui usuário e senha para o SIGEN, seja para emitir GTA ou como responsável técnico', url: SC },
];

export default {
  slug: 'como-emitir-gta',
  grupo: 'corte',
  tipo: 'guia',
  curto: 'Como emitir GTA',
  resumo: 'Passo a passo e o sistema de cada estado.',
  title: 'Como emitir GTA: passo a passo e sistema de cada estado',
  description: 'Como emitir GTA online: o que precisa estar em dia, o passo a passo e o sistema de 12 estados e do DF, como GEDAVE, SIDAGO e e-SANIAGRO.',
  h1: 'Como emitir GTA de gado: o passo a passo e o sistema de cada estado',
  pergunta: 'Como emitir a GTA do gado?',
  resposta: 'Cada estado emite a GTA no sistema da sua defesa agropecuária: GEDAVE em São Paulo, SIDAGO em Goiás, e-SANIAGRO em Mato Grosso do Sul. Você entra com o cadastro da propriedade, informa origem, destino, espécie e quantidade, paga a taxa e imprime ou guarda a guia. Sem vacina e cadastro em dia, o sistema recusa.',
  tela: 'animais',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'O que precisa estar em dia antes de abrir o sistema', blocos: [
      { p: 'A GTA (Guia de Trânsito Animal) é obrigatória em todo o país, dentro do estado e entre estados, para todas as espécies, menos cães e gatos. Quem decide se a guia sai é a defesa agropecuária do estado, e ela olha quatro coisas antes de liberar.' },
      { ul: [
        '**Cadastro do produtor e da propriedade.** Em São Paulo, no Rio Grande do Sul e em Rondônia, a propriedade precisa estar cadastrada na defesa para a guia sair.',
        '**Vacinas obrigatórias comprovadas.** Em Mato Grosso, por exemplo, a propriedade precisa executar e comprovar as vacinações obrigatórias. A vacina de brucelose está no guia de [calendário de vacinação bovina](/calendario-de-vacinacao-bovina).',
        '**Rebanho declarado e saldo conferido.** Em Mato Grosso, quem não atualiza o estoque de rebanho no período fica impedido de emitir a GTA. Veja a [declaração de rebanho](/declaracao-de-rebanho).',
        '**Destino cadastrado.** Em Rondônia, a propriedade de destino também precisa estar no sistema. Em Mato Grosso do Sul, o comprador autoriza o trânsito antes de você emitir.',
      ] },
      { p: 'A página [GTA](/gta) explica o que a guia é e o que costuma travá-la. Aqui o assunto é o caminho: onde clicar e em qual sistema.' },
    ] },
    { h2: 'Passo a passo para emitir a GTA online', blocos: [
      { ol: [
        'Entre no sistema da defesa agropecuária do seu estado com o login do produtor (tabela abaixo). Se ainda não tem acesso, o cadastro se faz uma vez, no escritório da defesa, e depois chega a senha.',
        'Escolha a propriedade de origem. Em Goiás e em Mato Grosso, o sistema também mostra o saldo do rebanho dessa propriedade.',
        'Informe a espécie, a quantidade por categoria e a finalidade do trânsito: cria, engorda, abate, leilão e outras.',
        'Informe o destino: outra propriedade ou o frigorífico. O destino precisa estar cadastrado no sistema.',
        'Anexe ou informe o que a finalidade pede: nota fiscal, atestados de vacina, exames. No Rio Grande do Sul, por exemplo, a página do serviço pede nota fiscal ou declaração de não contribuinte do ICMS.',
        'Pague a taxa. Em São Paulo e em Minas Gerais a guia só sai depois da confirmação do pagamento bancário.',
        'Emita a guia e leve junto com a carga, impressa ou, onde o estado aceita, no celular.',
      ] },
      { p: 'A GTA tem que acompanhar os animais durante todo o trânsito e estar dentro da validade do começo ao fim do percurso. Em Minas Gerais a validade média é de 2 dias, e muda com a distância.' },
    ] },
    { h2: 'Sistema de emissão de cada estado', blocos: [
      { p: 'A Instrução Normativa do Ministério da Agricultura nº 9, de 2021, criou o formato eletrônico da guia (e-GTA) para todo o território nacional, mas cada estado mantém o seu sistema, as suas regras e a sua taxa. Estes são os que conseguimos conferir no site oficial de cada órgão.' },
      { tabela: { colunas: ['Estado', 'Órgão', 'Onde se emite'], linhas: [
        ['São Paulo', 'Defesa Agropecuária (CDA)', 'GEDAVE'],
        ['Minas Gerais', 'IMA', 'Portal de Serviços do Produtor Rural'],
        ['Goiás', 'Agrodefesa', 'SIDAGO, no site e no aplicativo'],
        ['Mato Grosso', 'Indea-MT', 'Sindesa, Módulo do Produtor'],
        ['Mato Grosso do Sul', 'Iagro', 'e-SANIAGRO'],
        ['Paraná', 'Adapar', 'e-GTA, para bovinos e bubalinos dentro do estado'],
        ['Rio Grande do Sul', 'Secretaria da Agricultura', 'Produtor Online'],
        ['Santa Catarina', 'Cidasc', 'SIGEN+'],
        ['Bahia', 'ADAB', 'SIDAB'],
        ['Pará', 'Adepará', 'SIGEAGRO 2.0'],
        ['Maranhão', 'AGED', 'SIGAMA, em escritório da AGED'],
        ['Rondônia', 'Idaron', 'GTA Online (SisIdaron)'],
        ['Distrito Federal', 'SEAGRI-DF', 'SIAGRO ou unidade da Diretoria de Sanidade'],
      ], nota: 'Tocantins, Piauí e os demais estados também emitem pelo sistema da defesa local, mas não entraram na tabela porque a página oficial não pôde ser conferida. Veja no site do órgão do seu estado.' } },
      { p: 'Dentro de cada estado, nem toda espécie nem toda finalidade sai pela internet. No Paraná, por exemplo, a emissão online vale para bovinos e bubalinos movidos dentro do estado para cria, engorda ou abate. Nos outros casos, a guia se pede na unidade da Adapar.' },
    ] },
    { h2: 'Taxa, validade e o que fazer quando o gado chega', blocos: [
      { p: 'A taxa é do estado e muda com a espécie e a quantidade. Em Minas Gerais ela vem num DAE (Documento de Arrecadação Estadual) e a guia sai depois que o banco confirma. Em São Paulo a taxa é cobrada em UFESP, no próprio GEDAVE. Na página do serviço, o Rio Grande do Sul informa que a emissão é gratuita.' },
      { p: 'Em Goiás, o aplicativo Sidago emite a GTA no celular Android e dispensa a impressão: o papel é trocado por um QR Code que você passa ao motorista.' },
      { p: 'Quando o gado chega, o trabalho continua em alguns estados. Em Mato Grosso, a guia original tem que ser entregue numa unidade do Indea em 7 dias, se o trânsito foi entre estados, ou 14 dias, se foi dentro do estado, contados da chegada. No trânsito dentro do estado, o próprio produtor pode comunicar a chegada pelo Módulo do Produtor.' },
    ] },
    { h2: 'Quando o sistema não deixa emitir', blocos: [
      { ul: [
        'Cadastro desatualizado ou rebanho não declarado no prazo.',
        'Vacina obrigatória sem comprovação lançada no sistema da defesa.',
        'Destino sem cadastro, ou, em Mato Grosso do Sul, sem a autorização do trânsito feita pelo comprador.',
      ] },
      { p: 'Em Mato Grosso do Sul, se a origem não estiver autorizada a emitir, a portaria proíbe a emissão da guia. O caminho é resolver a pendência na unidade local da defesa e tentar de novo, e não procurar outro sistema.' },
      { destaque: 'A regra que vale é a do seu estado, e ela muda. Este texto é informativo e não substitui o veterinário nem a defesa agropecuária: na dúvida, ligue para a unidade local antes de marcar o embarque. O FINAGRO não emite GTA e não envia nada à defesa agropecuária.' },
    ] },
  ],
  noFinagro: { h2: 'Antes e depois da guia no FINAGRO', itens: [
    'O app não emite a GTA: ela sai no sistema da defesa do seu estado. O FINAGRO guarda o registro da guia emitida, com a quantidade por categoria.',
    'Cada GTA registrada fica com a validade, e o app avisa 1 dia antes do vencimento.',
    'A tela "O que vence" lista as vacinas e as declarações obrigatórias do estado do produtor, para o que ele cria.',
    'O app avisa quando há bezerras na idade da vacina de brucelose sem a vacina anotada, para a pendência não travar a venda.',
  ] },
  cta: { forte: 'Vacina anotada, GTA registrada e vencimento lembrado.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre como emitir GTA',
  faq: [
    ['Quem pode emitir a GTA?', 'O proprietário ou o representante legal cadastrado no sistema, o servidor da defesa e a pessoa habilitada pelo Ministério da Agricultura. O acesso é liberado depois do cadastro na defesa do estado.'],
    ['Dá para emitir a GTA pelo celular?', 'Em alguns estados, sim. Em Goiás existe o aplicativo Sidago para Android, que emite a guia sem impressão, com QR Code. Nos demais, confira no site da defesa do seu estado se o sistema abre no navegador do celular. A tabela mostra o sistema de cada um.'],
    ['Quanto custa emitir a GTA?', 'A taxa é definida por cada estado. Em Minas Gerais se paga por DAE, em São Paulo a cobrança é em UFESP, e a página do serviço no Rio Grande do Sul informa que é gratuita. Consulte a defesa do seu estado.'],
    ['Quanto tempo vale a GTA?', 'A validade vem escrita na guia e muda com o estado e a distância. Em Minas Gerais a média é de 2 dias. A guia precisa estar dentro da validade durante todo o percurso.'],
    ['Preciso de GTA para qualquer animal?', 'Para todas as espécies, exceto cães e gatos. A guia vale dentro do estado e entre estados, e a defesa agropecuária pode pedir vacina, exame e nota fiscal conforme a finalidade.'],
  ],
  fontes: [
    { nome: 'Adapar (PR), legislação do trânsito agropecuário, Instrução Normativa MAPA nº 9/2021', url: PR_LEG },
    { nome: 'Adepará (PA), manual de emissão de GTA para o produtor', url: PA_MANUAL },
    { nome: 'Indea-MT, trânsito de animais', url: MT_TRANSITO },
    { nome: 'Governo do Paraná, emitir guia de trânsito animal', url: PR_GTA },
    { nome: 'Iagro (MS), autorização de trânsito antes da GTA', url: MS },
    { nome: 'Governo de Minas Gerais, solicitar GTA para bovinos e bubalinos', url: MG },
    { nome: 'Governo de São Paulo, emitir guia de trânsito animal', url: SP },
    { nome: 'Agrodefesa (GO), acesso eletrônico ao SIDAGO', url: GO },
    { nome: 'Secretaria da Agricultura do RS, emitir guia de trânsito animal', url: RS },
    { nome: 'SEAGRI-DF, emissão de GTA', url: DF },
    { nome: 'Governo da Bahia, solicitar emissão de GTA', url: BA },
    { nome: 'AGED (MA), emissão de GTA ou e-GTA', url: MA },
    { nome: 'Cidasc (SC), SIGEN+', url: SC },
    { nome: 'Governo de Rondônia, GTA online da Idaron', url: RO },
  ],
  relacionados: ['gta', 'declaracao-de-rebanho', 'calendario-de-vacinacao-bovina'],
};
