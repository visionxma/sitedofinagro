// Consultas-alvo: "inscrição estadual produtor rural", "inscrição estadual produtor rural consulta", "inscrição estadual produtor
// rural mg", "... mt", "... rs", "... pr" (terceira leva, 08/10/2026).
// A inscrição é de cada estado: não há lei federal única com o passo a passo. Cada linha da tabela é provada pela página da Secretaria
// da Fazenda daquele estado, lida por curl em 08/10/2026. Entraram MG, SP, PR, GO, MS, RO, MT e RS (os dois últimos na revisão).
// Para quem revisar: Pará, Tocantins e Bahia seguem sem linha na tabela, por falta de página do serviço com trecho conferido; o guia
// dá a eles só o caminho geral. A coluna "Onde pedir" traz apenas o canal que o trecho da prova sustenta.
const MG = 'https://www.fazenda.mg.gov.br/empresas/Cadastro/produtor_rural/';
const SP = 'https://portal.fazenda.sp.gov.br/servicos/cadesp/Paginas/Produtor-Rural-abertura,-baixa-e-outras-altera%C3%A7%C3%B5es.aspx';
const PR = 'https://atendimento.fazenda.pr.gov.br/sacsefa/portal/assuntosReferente/45';
const GO = 'https://goias.gov.br/economia/cadastramento-de-produtor-rural-ou-urbano-ou-extrator-mineral-pessoa-fisica/';
const MS = 'https://www.sefaz.ms.gov.br/servicos-em-destaque/cadastro-da-agropecuaria-cap-inscricao-de-produtor-rural/';
const RO = 'https://agenciavirtual.sefin.ro.gov.br/catalogo-servicos+inscricao-estadual-de-produtor-rural+663da16dee982159b75060cd';
const MT = 'https://www5.sefaz.mt.gov.br/-/6398843-cadastro-usc-saac';
const RS = 'https://www.fazenda.rs.gov.br/servicos-ao-cidadao/servicos?servico=1665';
const SINTEGRA = 'https://www.sintegra.gov.br/new_bv.html';
const CONFAZ = 'https://www.confaz.fazenda.gov.br/legislacao/ajustes/2022/AJ010_22';
const NFF = 'https://portal.fazenda.sp.gov.br/servicos/nff';

export const provas = [
  { afirmacao: 'os estados acordaram a obrigatoriedade da nota fiscal eletrônica para o produtor rural', trecho: 'Os Estados e o Distrito Federal acordam em estabelecer a obrigatoriedade para produtor rural de utilização da Nota Fiscal Eletrônica', url: CONFAZ },
  { afirmacao: 'em São Paulo o produtor rural precisa de inscrição estadual', trecho: 'No estado de São Paulo, o produtor rural precisa de Inscrição Estadual (IE)', url: SP },
  { afirmacao: 'em São Paulo o pedido é feito pelo Portal da Redesim', trecho: 'Local Conteúdo da seção Local HTML Portal da REDESIM', url: SP },
  { afirmacao: 'em São Paulo, em regra, não há documentos a apresentar', trecho: 'Via de regra, não há documentos a serem apresentados', url: SP },
  { afirmacao: 'em São Paulo a Fazenda pode pedir o ITR em nome do proprietário ou a matrícula do imóvel', trecho: 'ITR em nome do proprietário (NIRF – número do Imóvel Rural) ou cópia da matrícula do imóvel rural com data recente', url: SP },
  { afirmacao: 'em São Paulo, quem produz em terra alheia pode ter de apresentar o contrato ou a declaração de permissão de uso do imóvel', trecho: 'Se o produtor exercer a atividade em propriedade alheia, poderá ter que apresentar à Secretaria da Fazenda', url: SP },
  { afirmacao: 'em Minas Gerais todo produtor rural pessoa física deve se inscrever no cadastro informatizado da SEF-MG', trecho: 'todos os produtores rurais, pessoa física, de Minas Gerais, devem se inscrever no cadastro informatizado da Secretaria de Estado de Fazenda de Minas Gerais (SEF-MG)', url: MG },
  { afirmacao: 'em Minas Gerais a inscrição é pela internet, no SIARE, ou nas unidades de atendimento da SEF-MG', trecho: 'Para se inscrever no cadastro informatizado, basta acessar pela internet o Sistema Integrado de Administração da Receita Estadual (SIARE) e seguir as orientações ou o interessado pode recorrer às unidades de atendimento da SEF-MG', url: MG },
  { afirmacao: 'em Minas Gerais o cartão de inscrição passou a ser atualizado pelo uso da nota fiscal avulsa de produtor rural', trecho: 'passa a ser atualizado pela simples utilização da nota fiscal avulsa de produtor rural', url: MG },
  { afirmacao: 'no Paraná o produtor se inscreve no CAD/PRO antes de iniciar a atividade', trecho: 'deverão inscrever-se no Cadastro de Produtores Rurais - CAD/PRO, antes do início de suas atividades, as pessoas físicas que se dediquem à atividade agropecuária e que pretendam realizar operações relativas à circulação de mercadorias', url: PR },
  { afirmacao: 'no Paraná a nota fiscal de produtor eletrônica é emitida em sistema da Sefa no Portal Receita/PR', trecho: 'foi adequada para o produtor rural emitir através de sistema eletrônico disponibilizado pela SEFA/PR no Portal Receita/PR', url: PR },
  { afirmacao: 'no Paraná, com o CAD/PRO baixado, o cadastro novo é pedido na prefeitura do município do imóvel', trecho: 'No caso de estar BAIXADO é necessário solicitar um novo cadastro na prefeitura do município do imóvel', url: PR },
  { afirmacao: 'no Paraná, produtor rural é a pessoa que se dedica à atividade agropecuária inscrita no CAD/PRO', trecho: 'Considera-se produtor rural, pessoa que se dedique à atividade agropecuária inscrita no Cadastro de Produtores Rurais - CAD/PRO', url: PR },
  { afirmacao: 'em Goiás o produtor ou seu representante vai a uma unidade de atendimento da Secretaria da Economia com os documentos', trecho: 'O produtor ou seu representante deve dirigir-se a uma unidade de atendimento da Secretaria da Economia, portando os seguintes documentos', url: GO },
  { afirmacao: 'em Goiás se pede o comprovante do cadastro do imóvel na Receita Federal, que pode ser o recibo do ITR', trecho: 'Comprovante do cadastro do imóvel rural na Receita Federal (NIRF), podendo ser o recibo da declaração do ITR ou a Certidão de Imóvel Rural', url: GO },
  { afirmacao: 'em Goiás se pede documento que comprove o domínio útil do imóvel', trecho: 'Documento que comprove o domínio útil do imóvel, conforme o caso', url: GO },
  { afirmacao: 'em Goiás, sem o registro da escritura no cartório, a inscrição sai na condição de posseiro', trecho: 'Na falta do registro da escritura ou do formal de partilha no cartório de registro de imóveis, a inscrição deve ser concedida na condição de posseiro', url: GO },
  { afirmacao: 'em Mato Grosso do Sul a inscrição estadual do produtor rural é pedida no Cadastro da Agropecuária, o CAP', trecho: 'Solicitar Inscrição Estadual de produtor rural no Cadastro da Agropecuária – CAP', url: MS },
  { afirmacao: 'em Rondônia o serviço de inscrição estadual do produtor rural está na Agência Virtual da Sefin', trecho: 'Inscrição Estadual para Produtor Rural, Pescador e Extrativista | Agência Virtual - SEFIN-RO', url: RO },
  { afirmacao: 'em Mato Grosso a inscrição estadual é obrigatória para todos os contribuintes, antes do início das atividades', trecho: 'A inscrição estadual no Cadastro de Contribuintes do ICMS no Estado de Mato Grosso é obrigatória para todos os contribuintes, antes do início de suas atividades', url: MT },
  { afirmacao: 'em Mato Grosso o pedido do produtor rural pessoa física é enviado pelo Sistema e-Process', trecho: 'O pedido de inscrição é enviado pelo Sistema e-Process com os seguintes documentos', url: MT },
  { afirmacao: 'em Mato Grosso é obrigatório indicar contabilista ativo na Sefaz, exceto para microprodutor rural', trecho: 'É obrigatório indicar um contabilista ativo na SEFAZ, exceto para microprodutor rural.', url: MT },
  { afirmacao: 'em Mato Grosso, microprodutor rural é a pessoa física com faturamento do ano anterior de até 5.350 UPF/MT', trecho: 'É o Produtor rural (pessoa física) com faturamento do ano imediatamente anterior até 5.350 UPF/MT', url: MT },
  { afirmacao: 'em Mato Grosso se pede comprovante de vínculo com o imóvel rural', trecho: 'Comprovante de vínculo com o imóvel rural (matrícula, contrato de arrendamento/comodato, declaração de posseiro ou comprovação de assentado)', url: MT },
  { afirmacao: 'no Rio Grande do Sul a solicitação é feita no prazo de até trinta dias antes do início das atividades', trecho: 'A solicitação é feita no prazo de até trinta dias antes do início das atividades.', url: RS },
  { afirmacao: 'no Rio Grande do Sul o pedido é na prefeitura do município, conveniada à Receita Estadual', trecho: 'Você deve ir até a prefeitura do seu município. O Serviço é efetuado exclusivamente pelo local conveniado à Receita Estadual.', url: RS },
  { afirmacao: 'o Sintegra reúne a consulta aos cadastros estaduais, com escolha da unidade da federação', trecho: 'SINTEGRA CADASTROS ESTADUAIS Escolha uma Unidade da Federação para consulta', url: SINTEGRA },
  { afirmacao: 'o aplicativo Nota Fiscal Fácil dispensa certificado digital e é gratuito', trecho: 'sem necessidade de certificado digital. O aplicativo NFF é uma ferramenta totalmente gratuita para utilização em smartphones', url: NFF },
];

export default {
  slug: 'inscricao-estadual-produtor-rural',
  grupo: 'dinheiro',
  tipo: 'guia',
  curto: 'Inscrição estadual',
  resumo: 'Como tirar e consultar a inscrição do produtor, por estado.',
  title: 'Inscrição estadual de produtor rural: como tirar e consultar',
  description: 'Inscrição estadual de produtor rural: o que é, para que serve, como consultar no Sintegra e onde pedir em MG, MT, RS, PR, SP, GO, MS e RO, na página oficial.',
  h1: 'Inscrição estadual de produtor rural: como tirar e consultar, por estado',
  pergunta: 'Como tirar a inscrição estadual de produtor rural?',
  resposta: 'A inscrição estadual de produtor rural é pedida na Secretaria da Fazenda do estado onde fica a terra. Em Minas Gerais o pedido é pelo SIARE, em São Paulo pelo Portal da Redesim, em Mato Grosso pelo e-Process e no Rio Grande do Sul na prefeitura conveniada. No Paraná o cadastro é o CAD/PRO. A situação se consulta pelo Sintegra.',
  tela: 'contas',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'O que é a inscrição estadual de produtor rural', blocos: [
      { p: 'A inscrição estadual é o número do produtor no **cadastro de contribuintes da Secretaria da Fazenda do estado**. É com ela que o estado sabe quem está vendendo boi, leite, grão ou hortaliça, e é ela que vai impressa na nota fiscal da venda. Costuma aparecer abreviada como **IE**.' },
      { p: 'Ela é do estado, e não do governo federal. Cada Secretaria tem o seu cadastro, com nome próprio: em Minas Gerais é o Cadastro de Produtor Rural Pessoa Física, no Paraná é o **CAD/PRO**, em Mato Grosso do Sul é o **CAP**, o Cadastro da Agropecuária. O nome muda, a função é a mesma.' },
      { destaque: 'Quem tem terra em dois estados precisa olhar a regra de cada um: a inscrição é feita na Fazenda do estado onde fica o imóvel.' },
    ] },
    { h2: 'Para que serve a inscrição estadual', blocos: [
      { p: 'O uso de todo dia é **emitir a nota fiscal de produtor**. Os estados acordaram, no Confaz, a obrigatoriedade da nota fiscal eletrônica para o produtor rural, e a inscrição é o número que identifica o produtor na nota. As datas, quem está obrigado e o passo a passo estão no guia da [nota fiscal de produtor rural](/nota-fiscal-de-produtor-rural).' },
      { ul: ['**Vender com nota:** boi, leite, grão, café, hortaliça.', '**Emitir pelo celular:** o aplicativo Nota Fiscal Fácil é gratuito e dispensa certificado digital.', '**Identificar quem vende:** é pelo número da inscrição que a Fazenda do estado reconhece o produtor em cada nota.'] },
      { p: 'A nota e a guia de trânsito andam juntas na venda de gado. Se você ainda não emite a guia, veja [como emitir GTA](/como-emitir-gta).' },
    ] },
    { h2: 'Como tirar a inscrição estadual: o caminho geral', blocos: [
      { p: 'O passo a passo é de cada estado, mas a ordem costuma ser esta:' },
      { ol: ['Ache a página do cadastro de produtor rural no site da Secretaria da Fazenda do seu estado. A tabela abaixo traz oito delas.', 'Separe os documentos pessoais e os da terra. Em Goiás, por exemplo, a Fazenda pede o comprovante do cadastro do imóvel na Receita Federal, que pode ser o recibo da declaração do [ITR](/itr), e um documento que comprove o domínio do imóvel.', 'Se a terra não é sua, tenha o contrato em mãos. Em São Paulo, quem produz em propriedade alheia pode ter de apresentar o contrato ou a declaração de permissão de uso do imóvel. Veja o modelo de [contrato de arrendamento rural](/contrato-de-arrendamento-rural).', 'Faça o pedido pelo canal do estado: sistema na internet, portal ou unidade de atendimento.', 'Guarde o número e o comprovante. Você vai usar toda vez que emitir nota.'] },
      { p: 'Em Goiás, quando falta o registro da escritura no cartório de registro de imóveis, a inscrição é concedida na condição de posseiro. Cada estado trata esses casos do seu jeito: leia a página oficial antes de sair de casa.' },
    ] },
    { h2: 'Inscrição estadual de produtor rural por estado', blocos: [
      { p: 'Cada linha abaixo foi conferida na página da Secretaria da Fazenda do próprio estado, em 08 de outubro de 2026:' },
      { tabela: { colunas: ['Estado', 'Nome do cadastro', 'Onde pedir'], linhas: [['Minas Gerais', 'Cadastro de Produtor Rural Pessoa Física', 'Internet, no sistema SIARE, ou unidade da SEF-MG'], ['São Paulo', 'Inscrição Estadual (IE)', 'Portal da Redesim'], ['Paraná', 'CAD/PRO, o Cadastro de Produtores Rurais', 'CAD/PRO, na Receita Estadual do Paraná'], ['Goiás', 'Cadastramento de Produtor Rural', 'Unidade de atendimento da Secretaria da Economia'], ['Mato Grosso do Sul', 'CAP, o Cadastro da Agropecuária', 'CAP, na Sefaz-MS'], ['Mato Grosso', 'Inscrição Estadual de produtor rural', 'Sistema e-Process da Sefaz-MT'], ['Rio Grande do Sul', 'Inscrição Estadual para Produtor Rural', 'Prefeitura do município, conveniada à Receita Estadual'], ['Rondônia', 'Inscrição Estadual para Produtor Rural', 'Agência Virtual da Sefin-RO']], nota: 'Fonte: página oficial da Fazenda de cada estado, listada logo abaixo.' } },
      { ul: ['**Minas Gerais (MG):** [Cadastro de Produtor Rural, SEF-MG](https://www.fazenda.mg.gov.br/empresas/Cadastro/produtor_rural/). A página traz documentos, manuais e o passo a passo do cadastro.', '**São Paulo (SP):** [Produtor Rural: abertura, baixa e alterações](https://portal.fazenda.sp.gov.br/servicos/cadesp/Paginas/Produtor-Rural-abertura,-baixa-e-outras-altera%C3%A7%C3%B5es.aspx). Em regra, não há documentos a apresentar, mas a Fazenda pode pedir o ITR ou a matrícula.', '**Paraná (PR):** [perguntas da Receita Estadual sobre o CAD/PRO e a nota do produtor](https://atendimento.fazenda.pr.gov.br/sacsefa/portal/assuntosReferente/45). A inscrição no CAD/PRO vem antes do início da atividade. A página informa que, com o CAD/PRO baixado, o cadastro novo é pedido na prefeitura do município do imóvel.', '**Goiás (GO):** [Cadastramento de Produtor Rural, pessoa física](https://goias.gov.br/economia/cadastramento-de-produtor-rural-ou-urbano-ou-extrator-mineral-pessoa-fisica/), com a lista de documentos.', '**Mato Grosso (MT):** [Como obter Inscrição Estadual, Sefaz-MT](https://www5.sefaz.mt.gov.br/-/6398843-cadastro-usc-saac). O pedido do produtor rural pessoa física é enviado pelo sistema e-Process, com comprovante de vínculo com o imóvel rural. É obrigatório indicar contabilista ativo na Sefaz, exceto para o microprodutor rural, que a página define como a pessoa física com faturamento do ano anterior de até 5.350 UPF/MT.', '**Rio Grande do Sul (RS):** [Solicitar Inscrição para Produtor Rural, Secretaria da Fazenda do RS](https://www.fazenda.rs.gov.br/servicos-ao-cidadao/servicos?servico=1665). O pedido é na prefeitura do seu município, conveniada à Receita Estadual, no prazo de até trinta dias antes do início das atividades.', '**Mato Grosso do Sul (MS):** [CAP, inscrição de produtor rural](https://www.sefaz.ms.gov.br/servicos-em-destaque/cadastro-da-agropecuaria-cap-inscricao-de-produtor-rural/).', '**Rondônia (RO):** [Inscrição Estadual para Produtor Rural, na Agência Virtual](https://agenciavirtual.sefin.ro.gov.br/catalogo-servicos+inscricao-estadual-de-produtor-rural+663da16dee982159b75060cd).'] },
      { destaque: 'No Pará, no Tocantins, na Bahia e nos demais estados, procure "produtor rural" no site da Secretaria da Fazenda do estado ou vá a uma unidade de atendimento.' },
    ] },
    { h2: 'Como consultar a inscrição estadual de produtor rural', blocos: [
      { p: 'Para saber se uma inscrição existe e está ativa, a sua ou a de quem vai comprar o seu gado, há dois caminhos oficiais:' },
      { ol: ['**Sintegra.** Abra sintegra.gov.br. A página reúne os cadastros estaduais: escolha a unidade da federação e você cai na consulta daquele estado.', '**Site da Fazenda do estado.** A mesma consulta fica no portal da Secretaria, junto dos serviços de cadastro.', 'Informe o número da inscrição ou o CPF ou CNPJ, conforme o que a consulta do estado pedir.', 'Confira o nome, o município e a situação cadastral. Se aparecer algo diferente de ativa, procure a Fazenda antes de emitir nota.'] },
      { p: 'Vale conferir a inscrição de quem compra antes de emitir a nota: é um minuto de consulta, e os dados da nota já saem certos.' },
    ] },
    { h2: 'Mantenha a inscrição em dia', blocos: [
      { ul: ['**Mudou algo, avise a Fazenda.** Troca de endereço, de atividade ou de contrato pede alteração cadastral. As páginas estaduais trazem serviços próprios de alteração, baixa e reativação.', '**Contrato com data de fim.** Quem produz em terra arrendada deve acompanhar o vencimento do contrato e levar o contrato novo à Fazenda quando o estado pedir.', '**Parou de produzir.** Peça a baixa, para não ficar com cadastro aberto sem uso.', '**Imposto de quem vende.** A nota é do estado, mas a venda também entra na conta do [Funrural](/funrural) e do imposto de renda.'] },
      { destaque: 'Este texto é informativo e não substitui contador. Nome do cadastro, documentos e canal de pedido mudam por estado e por ano: confirme na página da Secretaria da Fazenda do seu estado antes de dar entrada.' },
    ] },
  ],
  noFinagro: { h2: 'A inscrição e as vendas na rotina do FINAGRO', itens: [
    'O FINAGRO não faz a inscrição estadual e não emite nota fiscal. A inscrição é na Secretaria da Fazenda; a nota sai no sistema do estado ou no Nota Fiscal Fácil.',
    'A tela Documentos guarda a inscrição como outro documento, com o número, ao lado do CCIR, do ITR e dos contratos. Se o seu estado dá prazo de validade, o app avisa antes de vencer.',
    'A venda feita com nota entra como receita, e o valor a receber fica em contas a receber, com a data do acerto.',
    'Contrato de arrendamento ou parceria guardado em Documentos tem aviso antes do fim do prazo.',
    'Relatórios em PDF e em planilha (CSV) reúnem vendas e despesas do período para o contador conferir com as notas.',
  ] },
  cta: { forte: 'Número da inscrição guardado e cada venda anotada no celular.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre inscrição estadual de produtor rural',
  faq: [
    ['Como tirar a inscrição estadual de produtor rural?', 'Na Secretaria da Fazenda do estado onde fica a terra. Em Minas Gerais o pedido é pela internet, no sistema SIARE. Em São Paulo é pelo Portal da Redesim. No Paraná o produtor entra no CAD/PRO. Em Goiás o pedido é numa unidade de atendimento da Secretaria da Economia.'],
    ['Como consultar a inscrição estadual de produtor rural?', 'Pelo Sintegra, em sintegra.gov.br, escolhendo o estado, ou pela consulta de cadastro no site da Secretaria da Fazenda. A consulta mostra o nome, o município e a situação cadastral da inscrição.'],
    ['Como fazer a inscrição estadual de produtor rural em MG?', 'Em Minas Gerais todo produtor rural pessoa física deve se inscrever no cadastro informatizado da SEF-MG. O pedido é pela internet, no sistema SIARE, ou nas unidades de atendimento da Secretaria de Estado de Fazenda.'],
    ['Como é a inscrição estadual de produtor rural no PR?', 'No Paraná o produtor se inscreve no Cadastro de Produtores Rurais, o CAD/PRO, antes de iniciar a atividade. A nota fiscal de produtor eletrônica é emitida em sistema da Secretaria da Fazenda, no Portal Receita/PR.'],
    ['E a inscrição estadual de produtor rural em MT e no RS?', 'Em Mato Grosso o pedido do produtor rural pessoa física é enviado pelo sistema e-Process da Sefaz-MT, e é obrigatório indicar contabilista ativo, exceto para o microprodutor rural. No Rio Grande do Sul o pedido é feito na prefeitura do município, conveniada à Receita Estadual, no prazo de até trinta dias antes do início das atividades.'],
  ],
  fontes: [
    { nome: 'SEF-MG, Cadastro de Produtor Rural Pessoa Física', url: MG },
    { nome: 'Sefaz-SP, Produtor Rural: abertura, baixa e outras alterações', url: SP },
    { nome: 'Receita Estadual do Paraná, perguntas sobre CAD/PRO e NFP-e', url: PR },
    { nome: 'Secretaria da Economia de Goiás, Cadastramento de Produtor Rural', url: GO },
    { nome: 'Sefaz-MS, Cadastro da Agropecuária (CAP)', url: MS },
    { nome: 'Sefin-RO, Inscrição Estadual para Produtor Rural', url: RO },
    { nome: 'Sefaz-MT, Como obter Inscrição Estadual', url: MT },
    { nome: 'Secretaria da Fazenda do RS, Solicitar Inscrição para Produtor Rural', url: RS },
    { nome: 'Sintegra, consulta aos cadastros estaduais', url: SINTEGRA },
    { nome: 'Confaz, Ajuste SINIEF 10/2022 (nota eletrônica do produtor rural)', url: CONFAZ },
  ],
  relacionados: ['nota-fiscal-de-produtor-rural', 'como-emitir-gta', 'funrural'],
};
