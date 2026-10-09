// Consultas-alvo: "car rural", "car rural consulta", "car rural significado", "o que é car", "como fazer o car" (colheita de 08/10/2026).
// Normas citadas: Lei 12.651/2012 (Código Florestal) com as alterações das leis 13.887/2019, 14.595/2023 e 14.932/2024; Manual de Crédito
// Rural, atualização MCR nº 756, de 15 de maio de 2026 (seção Impedimentos Sociais, Ambientais e Climáticos).
const LEI = 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651.htm';
const SERVICO = 'https://www.gov.br/pt-br/servicos/inscrever-imovel-rural-no-cadastro-ambiental-rural-car';
const MCR = 'https://www.gov.br/gestao/pt-br/assuntos/meu-imovel-rural/arquivos/manual-de-credito-rural_impedimentos-sociais-ambientais-e-climatico';
const PERGUNTAS_ITR = 'https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/perguntas-e-respostas/itr/perguntas-e-respostas-itr-2026-v1-0-19082026.pdf/@@download/file';

export const provas = [
  { afirmacao: 'o CAR é um registro público eletrônico nacional, obrigatório para todos os imóveis rurais, com a finalidade de integrar as informações ambientais', trecho: 'É criado o Cadastro Ambiental Rural - CAR, no âmbito do Sistema Nacional de Informação sobre Meio Ambiente - SINIMA, registro público eletrônico de âmbito nacional, obrigatório para todos os imóveis rurais', url: LEI },
  { afirmacao: 'a finalidade do CAR é controle, monitoramento, planejamento e combate ao desmatamento', trecho: 'compondo base de dados para controle, monitoramento, planejamento ambiental e econômico e combate ao desmatamento', url: LEI },
  { afirmacao: 'a inscrição exige identificação, comprovação de propriedade ou posse e planta com memorial descritivo e coordenadas', trecho: 'I - identificação do proprietário ou possuidor rural; II - comprovação da propriedade ou posse; III - identificação do imóvel por meio de planta e memorial descritivo, contendo a indicação das coordenadas geográficas com pelo menos um ponto de amarração do perímetro do imóvel', url: LEI },
  { afirmacao: 'a planta informa vegetação nativa, APP, uso restrito, áreas consolidadas e Reserva Legal', trecho: 'informando a localização dos remanescentes de vegetação nativa, das Áreas de Preservação Permanente, das Áreas de Uso Restrito, das áreas consolidadas e, caso existente, também da localização da Reserva Legal', url: LEI },
  { afirmacao: 'o CAR não é título de propriedade ou posse', trecho: 'O cadastramento não será considerado título para fins de reconhecimento do direito de propriedade ou posse', url: LEI },
  { afirmacao: 'a inscrição é obrigatória e por prazo indeterminado para todas as propriedades e posses rurais', trecho: 'A inscrição no CAR é obrigatória e por prazo indeterminado para todas as propriedades e posses rurais', url: LEI },
  { afirmacao: 'o direito ao PRA dependeu de inscrever até 31/12/2023 (acima de 4 módulos) ou até 31/12/2025 (até 4 módulos ou agricultura familiar)', trecho: 'Terão direito à adesão ao PRA, de que trata o art. 59 desta Lei, os proprietários e possuidores dos imóveis rurais com área acima de 4 (quatro) módulos fiscais que os inscreverem no CAR até o dia 31 de dezembro de 2023', url: LEI },
  { afirmacao: 'o prazo do PRA para imóvel de até 4 módulos fiscais ou agricultura familiar foi 31/12/2025', trecho: 'bem como os proprietários e possuidores dos imóveis rurais com área de até 4 (quatro) módulos fiscais ou que atendam ao disposto no art. 3º da Lei nº 11.326, de 24 de julho de 2006, que os inscreverem no CAR até o dia 31 de dezembro de 2025', url: LEI },
  { afirmacao: 'o produtor pode apresentar o CAR para apurar a área tributável do ITR', trecho: 'É o produtor rural autorizado a apresentar o CAR de que trata o caput deste artigo, para fins de apuração da área tributável prevista no inciso II do § 1º do art. 10 da Lei nº 9.393', url: LEI },
  { afirmacao: 'os bancos só concedem crédito agrícola a quem está inscrito no CAR', trecho: 'as instituições financeiras só concederão crédito agrícola, em qualquer de suas modalidades, para proprietários de imóveis rurais que estejam inscritos no CAR', url: LEI },
  { afirmacao: 'o Manual de Crédito Rural (atualização 756, de 15/05/2026) veda crédito a imóvel sem CAR, ou com CAR cancelado ou suspenso', trecho: 'Não será concedido crédito rural para empreendimento situado em imóvel rural que não esteja inscrito ou cuja inscrição se encontre cancelada ou suspensa no Cadastro Ambiental Rural (CAR)', url: MCR },
  { afirmacao: 'a atualização do Manual de Crédito Rural citada é a nº 756, de 15 de maio de 2026', trecho: 'Atualização MCR nº 756, de 15 de maio de 2026 TÍTULO : CRÉDITO RURAL 1 CAPÍTULO : Condições Básicas - 2 SEÇÃO : Impedimentos Sociais, Ambientais e Climáticos', url: MCR },
  { afirmacao: 'a banco identifica o imóvel pelas informações do Sicar', trecho: 'a identificação do imóvel rural onde se situa o empreendimento objeto do crédito rural será realizada de acordo com as informações registradas no Sistema Nacional de Cadastro Ambiental Rural (Sicar)', url: MCR },
  { afirmacao: 'depois do CAR, a supressão de vegetação nativa só é autorizada se o imóvel estiver no cadastro', trecho: 'a supressão de novas áreas de floresta ou outras formas de vegetação nativa apenas será autorizada pelo órgão ambiental estadual integrante do Sisnama se o imóvel estiver inserido no mencionado cadastro', url: LEI },
  { afirmacao: 'a Reserva Legal averbada na matrícula, com perímetro e localização, dispensa informar a reserva ao órgão ambiental', trecho: 'Nos casos em que a Reserva Legal já tenha sido averbada na matrícula do imóvel e em que essa averbação identifique o perímetro e a localização da reserva, o proprietário não será obrigado a fornecer ao órgão ambiental as informações relativas à Reserva Legal', url: LEI },
  { afirmacao: 'a inscrição se faz pelo sistema eletrônico, no órgão estadual do estado do imóvel', trecho: 'A inscrição do imóvel rural no CAR é realizada por meio de sistema eletrônico e deverá ser feita junto ao órgão estadual competente, na Unidade da Federação (UF) em que se localiza o imóvel rural', url: SERVICO },
  { afirmacao: 'o Serviço Florestal Brasileiro coordena o CAR em âmbito federal', trecho: 'O Serviço Florestal Brasileiro (SFB) é responsável por coordenar, em âmbito federal, o CAR e prestar apoio técnico à sua implementação nos entes federativos', url: SERVICO },
  { afirmacao: 'informações sobre inscrição, análise e cancelamento se obtêm no órgão competente do estado', trecho: 'Informações sobre inscrições, análise e cancelamento de CAR devem ser obtidas junto a esses órgãos', url: SERVICO },
  { afirmacao: 'quem pode inscrever é o proprietário ou possuidor de imóvel rural', trecho: 'Quem pode utilizar este serviço? Cidadãos e Empresas. Ser proprietário ou possuidor de imóvel rural', url: SERVICO },
  { afirmacao: 'nos demais estados a inscrição segue o site do órgão estadual', trecho: 'Nos demais Estados, ao selecionar a UF, o usuário será direcionado aos sites dos órgãos competentes, onde obterá instruções de inscrição', url: SERVICO },
  { afirmacao: 'nos estados do SICAR se baixa o módulo de cadastro, preenche, gera o arquivo .car e envia para obter o recibo', trecho: 'gravar os dados do imóvel rural, gerando um arquivo com extensão “.car”, que deverá ser enviado ao SICAR, pelo menu “Enviar”, para que se obtenha o Recibo de Inscrição', url: SERVICO },
  { afirmacao: 'o acompanhamento do CAR pelo SICAR vai da inscrição à regularização, pelo demonstrativo e pela Central do Proprietário', trecho: 'O usuário pode acompanhar a situação e condição do cadastro no SICAR em todas as suas etapas – inscrição, análise e regularização ambiental – por meio do Demonstrativo da Situação do CAR e por meio da Central do Proprietário/Possuidor', url: SERVICO },
  { afirmacao: 'o serviço é gratuito para o cidadão', trecho: 'Este serviço é gratuito para o cidadão. Para mais informações ou dúvidas sobre este serviço, entre em contato', url: SERVICO },
  { afirmacao: 'APP é área protegida, coberta ou não por vegetação nativa, com função ambiental', trecho: 'Área de Preservação Permanente - APP: área protegida, coberta ou não por vegetação nativa, com a função ambiental de preservar os recursos hídricos, a paisagem, a estabilidade geológica e a biodiversidade', url: LEI },
  { afirmacao: 'Reserva Legal é área no interior do imóvel, delimitada pelo art. 12, para uso econômico sustentável', trecho: 'Reserva Legal: área localizada no interior de uma propriedade ou posse rural, delimitada nos termos do art. 12, com a função de assegurar o uso econômico de modo sustentável dos recursos naturais do imóvel rural', url: LEI },
  { afirmacao: 'todo imóvel rural deve manter Reserva Legal com vegetação nativa, além das APP', trecho: 'Todo imóvel rural deve manter área com cobertura de vegetação nativa, a título de Reserva Legal, sem prejuízo da aplicação das normas sobre as Áreas de Preservação Permanente', url: LEI },
  { afirmacao: 'na Amazônia Legal a Reserva Legal é 80% em floresta, 35% em cerrado e 20% em campos gerais', trecho: 'I - localizado na Amazônia Legal: a) 80% (oitenta por cento), no imóvel situado em área de florestas; b) 35% (trinta e cinco por cento), no imóvel situado em área de cerrado; c) 20% (vinte por cento), no imóvel situado em área de campos gerais', url: LEI },
  { afirmacao: 'nas demais regiões do país a Reserva Legal é de 20%', trecho: 'II - localizado nas demais regiões do País: 20% (vinte por cento)', url: LEI },
  { afirmacao: 'imóvel de até 4 módulos em 22/07/2008 com pouca mata nativa tem como Reserva Legal a vegetação que existia nessa data', trecho: 'Nos imóveis rurais que detinham, em 22 de julho de 2008, área de até 4 (quatro) módulos fiscais e que possuam remanescente de vegetação nativa em percentuais inferiores ao previsto no art. 12, a Reserva Legal será constituída com a área ocupada com a vegetação nativa existente em 22 de julho de 2008, vedadas novas conversões para uso alternativo do solo', url: LEI },
  { afirmacao: 'APP de rio: 30 m para rio de menos de 10 m de largura e 50 m para rio de 10 a 50 m', trecho: 'a) 30 (trinta) metros, para os cursos dágua de menos de 10 (dez) metros de largura; b) 50 (cinquenta) metros, para os cursos dágua que tenham de 10 (dez) a 50 (cinquenta) metros de largura', url: LEI },
  { afirmacao: 'APP de rio: 100 m para rio de 50 a 200 m, 200 m para 200 a 600 m e 500 m acima de 600 m', trecho: 'c) 100 (cem) metros, para os cursos dágua que tenham de 50 (cinquenta) a 200 (duzentos) metros de largura; d) 200 (duzentos) metros, para os cursos dágua que tenham de 200 (duzentos) a 600 (seiscentos) metros de largura; e) 500 (quinhentos) metros, para os cursos dágua que tenham largura superior a 600 (seiscentos) metros', url: LEI },
  { afirmacao: 'APP de nascente: raio mínimo de 50 metros', trecho: 'as áreas no entorno das nascentes e dos olhos dágua perenes, qualquer que seja sua situação topográfica, no raio mínimo de 50 (cinquenta) metros', url: LEI },
  { afirmacao: 'APP de lago em zona rural: 100 m, ou 50 m para lago de até 20 hectares', trecho: 'a) 100 (cem) metros, em zonas rurais, exceto para o corpo dágua com até 20 (vinte) hectares de superfície, cuja faixa marginal será de 50 (cinquenta) metros', url: LEI },
  { afirmacao: 'quem tem CAR informa o número do recibo na DITR', trecho: 'deve informar, na DITR, o respectivo número do recibo de inscrição', url: PERGUNTAS_ITR },
  { afirmacao: 'o CAR é a base para excluir áreas ambientais da base do ITR na DITR 2026', trecho: 'não prevê a informação do número do recibo do Ato Declaratório Ambiental - ADA para comprovar a exclusão das áreas ambientais da base de cálculo do ITR', url: PERGUNTAS_ITR },
];

export default {
  slug: 'car-cadastro-ambiental-rural',
  grupo: 'terra',
  tipo: 'guia',
  curto: 'CAR: Cadastro Ambiental',
  resumo: 'O que é o CAR rural, como fazer e como consultar.',
  title: 'CAR rural: o que é, como fazer e como consultar o CAR',
  description: 'CAR é o Cadastro Ambiental Rural, obrigatório para todo imóvel rural. Veja o que significa, como fazer a inscrição, como consultar e o que muda sem ele.',
  h1: 'CAR rural: o que é o Cadastro Ambiental Rural, como fazer e como consultar',
  pergunta: 'O que é o CAR rural e como fazer o Cadastro Ambiental Rural?',
  resposta: 'CAR é a sigla de Cadastro Ambiental Rural, um registro público eletrônico obrigatório para todos os imóveis rurais, criado pela Lei 12.651/2012. A inscrição é gratuita, feita no órgão ambiental do estado pelo sistema SICAR, e gera o recibo de inscrição. Sem o CAR, o banco não concede crédito rural.',
  tela: 'inicio',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'O que é o CAR e para que ele serve', blocos: [
      { p: 'CAR quer dizer **Cadastro Ambiental Rural**. É um registro público e eletrônico, de âmbito nacional, criado pela **Lei 12.651/2012**, o Código Florestal. A lei diz que ele é obrigatório para todos os imóveis rurais. A finalidade é juntar as informações ambientais das propriedades e posses para controle, monitoramento, planejamento e combate ao desmatamento.' },
      { p: 'O CAR **não é título de terra**. A própria lei avisa que o cadastro não reconhece direito de propriedade ou de posse. É um mapa declarado pelo dono: onde estão a mata, a nascente, o rio, o pasto e a reserva. A inscrição devolve um **recibo**, e é esse número que o banco e a Receita pedem.' },
    ] },
    { h2: 'Quem é obrigado a fazer o CAR e o que acontece sem ele', blocos: [
      { p: 'Todos os donos e possuidores de imóvel rural, de qualquer tamanho. A inscrição é obrigatória e **por prazo indeterminado**: não há mais um prazo final para a obrigação em si. O que acaba com a data são alguns benefícios.' },
      { ul: ['**Crédito rural.** A lei manda os bancos só concederem crédito agrícola a quem está inscrito no CAR. O Manual de Crédito Rural, na atualização nº 756, de 15 de maio de 2026, repete: não há crédito para empreendimento em imóvel sem inscrição, ou com a inscrição cancelada ou suspensa.', '**Imposto.** Quem tem o CAR informa o número do recibo na declaração do ITR. É por ele que a Receita aceita tirar do imposto as áreas ambientais, no lugar do antigo ADA. Veja o guia do [ITR](/itr).', '**Mato e desmate.** Depois do CAR, a supressão de vegetação nativa só é autorizada se o imóvel estiver no cadastro.', '**Regularização.** O direito de aderir ao Programa de Regularização Ambiental (PRA) exigia inscrição até 31 de dezembro de 2023 para imóvel de mais de 4 módulos fiscais, e até 31 de dezembro de 2025 para imóvel de até 4 módulos ou de agricultura familiar. Esses prazos já passaram.'] },
      { p: 'Sem o CAR, o banco não concede o crédito e você não tem o recibo para informar no ITR. Se o seu imóvel ainda não está inscrito, faça agora.' },
    ] },
    { h2: 'Como fazer o CAR, passo a passo', blocos: [
      { p: 'A inscrição é feita por sistema eletrônico, no **órgão ambiental do estado onde fica o imóvel**. O Serviço Florestal Brasileiro coordena o CAR em âmbito federal, e o serviço é gratuito para o produtor.' },
      { ol: ['Reúna os dados do dono ou possuidor e a prova da propriedade ou da posse (matrícula, escritura ou contrato).', 'Acesse a página do SICAR e escolha o estado do imóvel.', 'Nos estados que usam o módulo do Serviço Florestal (AL, AP, AM, CE, GO, MA, MG, PB, PR, PE, PI, RJ, RN, RR, SC, SE e DF), baixe o módulo de cadastro e preencha. Nos demais, o site do órgão do estado traz as instruções.', 'Desenhe o perímetro com as coordenadas geográficas e marque mata nativa, APP, áreas de uso restrito, áreas consolidadas e, se houver, a Reserva Legal.', 'Grave os dados, gere o arquivo .car e envie pelo menu Enviar. O sistema devolve o recibo de inscrição. Guarde o número.'] },
      { p: 'A lei pede a planta e o memorial descritivo do imóvel, com coordenadas geográficas. Se você não domina o mapa, procure o órgão ambiental do seu estado ou um técnico. Reserva Legal já averbada na matrícula, com perímetro e localização, dispensa informar de novo os dados da reserva.' },
    ] },
    { h2: 'Como consultar o CAR do imóvel e acompanhar a situação', blocos: [
      { p: 'Para consultar, use o endereço **car.gov.br/#/consultar**. Ali dá para acompanhar a situação do cadastro em todas as etapas, da inscrição à análise e à regularização ambiental, pelo **Demonstrativo da Situação do CAR** e pela **Central do Proprietário/Possuidor**.' },
      { p: 'Dúvida sobre inscrição, análise ou cancelamento se resolve com o órgão ambiental do estado, que tem acesso ao SICAR. A lista de contatos está em car.gov.br/#/contatos. Antes de pedir crédito, confira se o CAR está ativo: o banco identifica o imóvel pelas informações do SICAR.' },
    ] },
    { h2: 'CAR, APP e Reserva Legal: qual a diferença', blocos: [
      { glossario: [['CAR', 'O cadastro. É o mapa e o recibo, não uma área.'], ['APP', 'Área de Preservação Permanente: faixa protegida, com ou sem mata, para proteger água, solo e biodiversidade.'], ['Reserva Legal', 'Parte do imóvel que deve manter vegetação nativa, e pode ser usada de forma sustentável.']] },
      { p: 'Toda propriedade deve ter Reserva Legal, e a APP vale além dela. Os percentuais mínimos da Reserva Legal, em relação à área do imóvel, são estes:' },
      { tabela: { colunas: ['Onde fica o imóvel', 'Reserva Legal mínima', 'Em 200 ha'], linhas: [['Amazônia Legal, em floresta', '80%', '160 ha'], ['Amazônia Legal, em cerrado', '35%', '70 ha'], ['Amazônia Legal, em campos gerais', '20%', '40 ha'], ['Demais regiões do país', '20%', '40 ha']], nota: 'Lei 12.651/2012, art. 12. Quem tinha até 4 módulos fiscais em 22 de julho de 2008 e menos mata que isso constitui a reserva com a vegetação que existia nessa data.' } },
      { tabela: { colunas: ['Largura do rio', 'APP de cada margem'], linhas: [['Menos de 10 m', '30 m'], ['De 10 a 50 m', '50 m'], ['De 50 a 200 m', '100 m'], ['De 200 a 600 m', '200 m'], ['Mais de 600 m', '500 m']], nota: 'Lei 12.651/2012, art. 4º. Nascente: raio mínimo de 50 m. Lago em zona rural: 100 m, ou 50 m se tiver até 20 hectares de superfície.' } },
      { destaque: 'Este texto é informativo e não substitui contador, advogado nem técnico ambiental. O CAR de cada estado tem regras e sistemas próprios: confirme no órgão ambiental do seu estado.' },
    ] },
  ],
  noFinagro: { h2: 'Como fica no FINAGRO', itens: [
    'O FINAGRO não faz nem envia o CAR. A inscrição é no SICAR ou no órgão do seu estado; o app guarda o recibo e lembra as datas.',
    'Na tela Documentos, o CAR de cada fazenda fica com número, data e validade.',
    'O aviso chega antes de o documento vencer e aparece na agenda, junto das vacinas e das tarefas.',
    'A área medida por GPS no celular fica salva na fazenda, e uma tarefa com data lembra de levar o recibo ao banco.',
  ] },
  cta: { forte: 'Recibo do CAR guardado e aviso antes de vencer, no celular.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre o CAR',
  faq: [
    ['O que significa CAR?', 'CAR é a sigla de Cadastro Ambiental Rural. É um registro público eletrônico, obrigatório para todo imóvel rural, criado pela Lei 12.651/2012 para reunir as informações ambientais da propriedade.'],
    ['Quem é obrigado a fazer o CAR?', 'Todo proprietário ou possuidor de imóvel rural. A inscrição é obrigatória e por prazo indeterminado. Sem ela o banco não concede crédito rural.'],
    ['Como consultar se o imóvel tem CAR?', 'Pelo endereço car.gov.br/#/consultar, que mostra a situação do cadastro, ou pelo órgão ambiental do estado, que tem acesso ao SICAR.'],
    ['O CAR é gratuito?', 'O serviço de inscrição é gratuito para o cidadão, segundo o portal de serviços do governo federal.'],
    ['O CAR prova que a terra é minha?', 'Não. A lei diz que o cadastro não é título de propriedade nem de posse. Para provar que a terra é sua, vale a matrícula do imóvel.'],
  ],
  fontes: [
    { nome: 'Lei 12.651/2012, Código Florestal (art. 29, CAR)', url: LEI },
    { nome: 'Governo Federal, Inscrever imóvel rural no CAR', url: SERVICO },
    { nome: 'Banco Central, Manual de Crédito Rural, impedimentos sociais, ambientais e climáticos', url: MCR },
    { nome: 'Receita Federal, Perguntas e Respostas do ITR 2026', url: PERGUNTAS_ITR },
  ],
  relacionados: ['itr', 'ccir', 'pronaf'],
};
