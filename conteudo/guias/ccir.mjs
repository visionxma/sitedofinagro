// Consultas-alvo: "ccir", "ccir 2026", "ccir incra", "ccir consulta", "ccir emitir", "como emitir ccir" (colheita de 08/10/2026).
// Norma de 2026: não há norma nova do CCIR. A regra vigente está nas leis 4.947/1966 (art. 22, com a redação da Lei 10.267/2001) e
// 5.868/1972 e no texto do Incra (página modificada em 03/07/2026). A notícia do Incra sobre a liberação do CCIR 2026 e o valor mínimo da
// taxa só existem em páginas de notícia do gov.br que o portão não consegue baixar (401); por isso o guia não cita data nem valor da taxa.
const INCRA = 'https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/cadastro-imovel-rural';
const FAQ = 'https://www.gov.br/incra/pt-br/acesso-a-informacao/perguntas-frequentes';
const L4947 = 'https://www.planalto.gov.br/ccivil_03/leis/l4947.htm';
const L5868 = 'https://www.planalto.gov.br/ccivil_03/leis/l5868.htm';
const L12651 = 'https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651.htm';
const PERGUNTAS_ITR = 'https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/perguntas-e-respostas/itr/perguntas-e-respostas-itr-2026-v1-0-19082026.pdf/@@download/file';

export const provas = [
  { afirmacao: 'o CCIR é o documento do Incra que comprova a regularidade cadastral do imóvel rural', trecho: 'O Certificado de Cadastro de Imóvel Rural (CCIR) é o documento expedido pelo Incra que comprova a regularidade cadastral do imóvel rural', url: INCRA },
  { afirmacao: 'o CCIR traz titular, área, localização, exploração e classificação fundiária, e não prova a propriedade', trecho: 'O certificado contém informações sobre o titular, a área, a localização, a exploração e a classificação fundiária do imóvel rural. Os dados são declaratórios e exclusivamente cadastrais, não legitimando direito de domínio ou posse', url: INCRA },
  { afirmacao: 'o CCIR é exigido em cartório para transferência, arrendamento, hipoteca, desmembramento, remembramento e partilha, e por bancos no crédito', trecho: 'O CCIR é indispensável para legalizar em cartório a transferência, o arrendamento, a hipoteca, o desmembramento, o remembramento e a partilha de qualquer imóvel rural', url: INCRA },
  { afirmacao: 'bancos e agentes financeiros exigem o CCIR para o crédito agrícola', trecho: 'É essencial também para a concessão de crédito agrícola pois é exigido por bancos e agentes financeiros', url: INCRA },
  { afirmacao: 'para emitir é preciso que o imóvel esteja regularmente cadastrado no SNCR', trecho: 'Para emitir o CCIR é necessário que o imóvel rural esteja regularmente cadastrado no Sistema Nacional de Cadastro Rural (SNCR)', url: INCRA },
  { afirmacao: 'a emissão é pela internet ou em unidade do Incra', trecho: 'A emissão do certificado é realizada via internet e o interessado também pode procurar uma unidade de atendimento do Incra nos estados', url: INCRA },
  { afirmacao: 'na emissão pela internet se informa código do imóvel, CPF ou CNPJ do titular, estado e município', trecho: 'você deve informar o código do imóvel rural, o CPF ou CNPJ do titular, o estado e o município de localização da área', url: INCRA },
  { afirmacao: 'a taxa de serviços cadastrais se paga por GRU, cartão de crédito ou Pix', trecho: 'por meio de Guia de Recolhimento da União (GRU), cartão de crédito ou Pix. Caso a opção seja a GRU, o pagamento é realizado na rede de atendimento do Banco do Brasil', url: INCRA },
  { afirmacao: 'só com a quitação é possível obter o CCIR', trecho: 'Somente com a quitação do valor é possível obter o CCIR', url: INCRA },
  { afirmacao: 'o sistema gera o PDF do certificado, que se imprime em Baixar CCIR', trecho: 'é gerado, pelo sistema, um arquivo no formato PDF do certificado, que poderá ser impresso pela opção', url: INCRA },
  { afirmacao: 'o certificado é anual e o de cada exercício substitui os anteriores', trecho: 'O certificado tem periodicidade anual e aqueles expedidos anteriormente perdem validade com a emissão do documento de cada exercício', url: INCRA },
  { afirmacao: 'o comprovante de pagamento é a garantia de validade do CCIR', trecho: 'Guarde o comprovante de pagamento pois ele é a garantia de validade do CCIR', url: INCRA },
  { afirmacao: 'bancos e cartórios conferem a autenticidade do CCIR e a quitação da taxa pela Consulta de Autenticidade', trecho: 'verificar a autenticidade do CCIR e a quitação da taxa de serviços cadastrais para uso em transações financeiras e imobiliárias', url: INCRA },
  { afirmacao: 'se o sistema acusa divergência, é preciso atualizar os dados na Declaração para Cadastro Rural', trecho: 'É necessário atualizar os dados do imóvel rural para emitir novo CCIR. Acesse a Declaração para Cadastro Rural e atualize os dados da propriedade ou posse cadastrada no Incra', url: INCRA },
  { afirmacao: 'imóvel sem declaração processada precisa de inclusão cadastral', trecho: 'Imóvel não cadastrado no sistema ou com cadastro omisso. Procure uma unidade da rede Incra ou acesse a Declaração para Cadastro Rural para realizar a inclusão cadastral', url: INCRA },
  { afirmacao: 'a taxa de serviços cadastrais é cobrada na emissão e vem na GRU emitida junto com o CCIR', trecho: 'A taxa é paga por meio de Guia de Recolhimento da União (GRU) emitida junto com o CCIR', url: FAQ },
  { afirmacao: 'taxa vencida se resolve reemitindo o CCIR, que atualiza os valores', trecho: 'Basta reemitir o CCIR, pois o sistema atualiza automaticamente os valores', url: FAQ },
  { afirmacao: 'quem tem débito anterior consegue emitir, pagando o débito com multa e juros mais a taxa vigente', trecho: 'O valor a ser pago será a soma dos débitos anteriores, acrescidos de multas e juros com a taxa de serviços cadastrais vigente', url: FAQ },
  { afirmacao: 'o código do imóvel rural tem 13 números e consta no CCIR e na matrícula', trecho: 'Código composto por 13 números que identifica o cadastro do imóvel junto ao Incra', url: FAQ },
  { afirmacao: 'o código do imóvel consta no CCIR e na descrição da matrícula do cartório', trecho: 'O código do imóvel rural consta no CCIR e na descrição da matrícula fornecida pelo cartório de registro de imóveis', url: FAQ },
  { afirmacao: 'todo imóvel rural deve ser cadastrado no Incra', trecho: 'Todo imóvel rural deve ser cadastrado no Incra, pois sem o cadastro não é possível emitir o CCIR', url: FAQ },
  { afirmacao: 'o CCIR é o cadastro no Incra e o NIRF é o cadastro na Receita para cobrar o ITR', trecho: 'O CCIR é o comprovante de cadastro do imóvel junto ao Incra, enquanto o NIRF é o cadastro do imóvel junto à Secretaria da Receita Federal para fins de cobrança do Imposto sobre a Propriedade Territorial Rural', url: FAQ },
  { afirmacao: 'o ITR é declarado todo ano à Receita', trecho: 'O Imposto sobre a Propriedade Territorial Rural (ITR) deve ser declarado anualmente à Secretaria da Receita Federal', url: FAQ },
  { afirmacao: 'há três tipos de atualização cadastral: alteração, inclusão e cancelamento', trecho: 'Há três tipos de atualização cadastral: alteração, inclusão e cancelamento', url: FAQ },
  { afirmacao: 'a troca de titularidade, a venda de parte e a compra de área do vizinho pedem alteração cadastral', trecho: 'aquisição de área total. Exemplo: quando há mudança de titularidade de um imóvel rural já cadastrado', url: FAQ },
  { afirmacao: 'a alteração pode ser feita pela internet na Declaração para Cadastro Rural', trecho: 'A alteração dos dados do imóvel rural cadastrado no Incra pode ser realizada via internet por meio da Declaração para Cadastro Rural', url: FAQ },
  { afirmacao: 'imóveis confrontantes do mesmo titular formam um só imóvel rural', trecho: 'imóveis confrontantes do mesmo titular constituem um único imóvel rural, mesmo que os imóveis tenham várias matrículas', url: FAQ },
  { afirmacao: 'sem o CCIR não se pode desmembrar, arrendar, hipotecar, vender ou prometer em venda, sob pena de nulidade', trecho: 'Sem apresentação do Certificado de Cadastro, não poderão os proprietários, a partir da data a que se refere este artigo, sob pena de nulidade, desmembrar, arrendar, hipotecar, vender ou prometer em venda imóveis rurais', url: L4947 },
  { afirmacao: 'na herança, a partilha não é homologada sem o certificado', trecho: 'Em caso de sucessão causa mortis nenhuma partilha, amigável ou judicial, poderá ser homologada pela autoridade competente, sem a apresentação do Certificado de Cadastro', url: L4947 },
  { afirmacao: 'o CCIR vem acompanhado da prova de quitação do ITR dos últimos cinco exercícios', trecho: 'far-se-á, sempre, acompanhada da prova de quitação do Imposto sobre a Propriedade Territorial Rural – ITR, correspondente aos últimos cinco exercícios', url: L4947 },
  { afirmacao: 'o dono, o titular do domínio útil e o possuidor devem atualizar o cadastro quando muda a área ou o titular', trecho: 'a atualizar a declaração de cadastro sempre que houver alteração nos imóveis rurais, em relação à área ou à titularidade', url: L5868 },
  { afirmacao: 'o documento do Incra não prova propriedade', trecho: 'Os documentos expedidos pelo INCRA, para fins cadastrais, não fazem prova de propriedade ou de direitos a ela relativos', url: L5868 },
  { afirmacao: 'outro impedimento na emissão pela internet se resolve na unidade do Incra', trecho: 'Se houver outros tipos de impedimento, é necessário se dirigir a uma unidade do Incra mais próxima', url: INCRA },
  { afirmacao: 'onde não há internet, a emissão é na unidade da rede Incra', trecho: 'Procure uma unidade de atendimento da rede Incra para emitir o CCIR de seu imóvel rural', url: FAQ },
  { afirmacao: 'para atualizar o cadastro o Incra pede a certidão de inteiro teor da matrícula emitida há no máximo 30 dias', trecho: 'Certidão de Inteiro Teor da(s) matrícula(s) ou transcrição(ões), relativa(s) ao imóvel objeto de atualização cadastral, expedida no prazo máximo de 30 (trinta) dias', url: FAQ },
  { afirmacao: 'o CAR é registro público eletrônico obrigatório para todos os imóveis rurais', trecho: 'registro público eletrônico de âmbito nacional, obrigatório para todos os imóveis rurais, com a finalidade de integrar as informações ambientais das propriedades e posses rurais', url: L12651 },
  { afirmacao: 'a DITR traz o CIB, antigo NIRF', trecho: 'O número do imóvel na Receita Federal não foi alterado, somente a sua denominação passa a ser', url: PERGUNTAS_ITR },
];

export default {
  slug: 'ccir',
  grupo: 'terra',
  tipo: 'guia',
  curto: 'CCIR: como emitir',
  resumo: 'Emitir o CCIR do Incra, pagar a taxa e atualizar o cadastro.',
  title: 'CCIR: como emitir o certificado do Incra e pagar a taxa',
  description: 'O CCIR prova o cadastro do imóvel no Incra. Veja para que serve, como emitir pela internet, como pagar a taxa e o que fazer se o cadastro está desatualizado.',
  h1: 'CCIR: como emitir o Certificado de Cadastro de Imóvel Rural e pagar a taxa',
  pergunta: 'Como emitir o CCIR do Incra pela internet?',
  resposta: 'O CCIR é o certificado do Incra que comprova o cadastro do imóvel rural. Para emitir, entre no site do SNCR, informe o código do imóvel, o CPF ou CNPJ do titular, o estado e o município, e pague a taxa de serviços cadastrais por GRU, cartão ou Pix. Só com a taxa quitada o certificado vale.',
  tela: 'inicio',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'O que é o CCIR e para que ele é exigido', blocos: [
      { p: 'O **Certificado de Cadastro de Imóvel Rural**, o CCIR, é o documento do **Incra** que comprova a regularidade cadastral do imóvel rural. Nele constam o titular, a área, a localização, a exploração e a classificação fundiária. Os dados são declarados por você e servem só para o cadastro: o CCIR não prova que a terra é sua.' },
      { p: 'É o papel que cartório e banco pedem. Sem ele, o dono não pode **desmembrar, arrendar, hipotecar, vender ou prometer em venda** o imóvel rural, sob pena de nulidade. Na herança, a partilha, amigável ou judicial, também não é homologada sem o certificado. E o banco o exige na hora do crédito rural.' },
      { ul: ['Venda, compra e promessa de venda da terra.', 'Arrendamento e hipoteca.', 'Desmembramento e remembramento de áreas.', 'Inventário e partilha por morte.', 'Financiamento e crédito agrícola.'] },
    ] },
    { h2: 'Como emitir o CCIR pela internet, passo a passo', blocos: [
      { p: 'O imóvel precisa estar regularmente cadastrado no **SNCR**, o Sistema Nacional de Cadastro Rural do Incra. A emissão é pela internet, no site do SNCR, ou numa unidade de atendimento do Incra. Para quem não tem sinal na fazenda, vale ir à unidade mais próxima.' },
      { ol: ['Abra o endereço sncr.serpro.gov.br/ccir/emissao.', 'Informe o código do imóvel rural, o CPF ou CNPJ do titular, o estado e o município.', 'Gere a guia da taxa de serviços cadastrais e pague (veja a próxima seção).', 'Com a taxa quitada, baixe o certificado em PDF pela opção Baixar CCIR e imprima.'] },
      { p: 'O **código do imóvel rural** tem 13 números. Ele está no próprio CCIR e na descrição da matrícula que o cartório de registro de imóveis fornece. Se não achar o papel, procure uma unidade do Incra para saber o código.' },
    ] },
    { h2: 'A taxa de serviços cadastrais e a validade do certificado', blocos: [
      { p: 'Para o CCIR valer, é preciso pagar a **taxa de serviços cadastrais**, cobrada na emissão. A guia vem junto com o certificado e pode ser paga por **GRU, cartão de crédito ou Pix**. A GRU se paga na rede do Banco do Brasil. Sem a quitação, não há como obter o CCIR.' },
      { p: 'O valor aparece na própria guia, e por isso este guia não traz uma tabela de preço: ele depende do seu imóvel e do exercício. Confira o número na tela de pagamento do Incra antes de pagar.' },
      { ul: ['**Validade:** o CCIR é anual. O de cada exercício substitui os anteriores.', '**Vencimento perdido:** reemita o CCIR. O sistema atualiza os valores sozinho e você paga a guia nova.', '**Débito de anos anteriores:** você consegue emitir. O valor soma o débito, com multa e juros, e a taxa vigente.', '**Comprovante:** guarde o comprovante de pagamento. Ele é a garantia de que o certificado está quitado.'] },
      { p: 'Cartório e banco conferem a autenticidade do CCIR e a quitação da taxa na **Consulta de Autenticidade** do Incra. Por isso o certificado só impresso, sem o pagamento, não adianta.' },
    ] },
    { h2: 'O cadastro está desatualizado: o que fazer', blocos: [
      { p: 'Se o sistema não deixa emitir, ele costuma mostrar uma destas mensagens. Cada uma tem o seu caminho:' },
      { tabela: { colunas: ['Mensagem na tela', 'O que significa', 'O que fazer'], linhas: [['Dados divergentes com o cadastro', 'Os dados do imóvel mudaram ou não batem', 'Atualize na Declaração para Cadastro Rural'], ['Imóvel não possui declaração processada', 'Imóvel fora do sistema ou com cadastro omisso', 'Inclusão cadastral na rede Incra'], ['Pendência de outro tipo', 'Impedimento que o site não resolve', 'Vá a uma unidade do Incra']], nota: 'Segundo a página do CCIR no Incra.' } },
      { p: 'A lei manda atualizar o cadastro **sempre que muda a área ou o titular**. Há três tipos de atualização: **alteração** (troca de dono, venda de parte, anexação de área do vizinho, mudança de endereço), **inclusão** (imóvel fora do sistema) e **cancelamento**. A alteração pode ser feita pela internet, na Declaração para Cadastro Rural.' },
      { p: 'Terras vizinhas do mesmo titular, mesmo com várias matrículas, formam **um único imóvel rural** para o Incra. Para mexer no cadastro, o Incra pede a certidão de inteiro teor da matrícula, emitida há no máximo 30 dias.' },
    ] },
    { h2: 'CCIR, ITR e CAR: qual a diferença', blocos: [
      { p: 'São três papéis diferentes, de três órgãos, e o produtor costuma precisar dos três. Um não substitui o outro.' },
      { tabela: { colunas: ['Documento', 'Quem cuida', 'Para que serve'], linhas: [['CCIR', 'Incra', 'Prova o cadastro do imóvel; pedido em cartório e banco'], ['ITR', 'Receita Federal', 'Declaração anual e imposto sobre a terra'], ['CAR', 'Órgão ambiental', 'Registro ambiental obrigatório do imóvel']], nota: 'Veja [ITR](/itr) e [CAR rural](/car-cadastro-ambiental-rural) em guias à parte.' } },
      { p: 'O Incra explica a diferença entre o seu cadastro e o da Receita: o CCIR é o comprovante do imóvel no Incra, e o número do imóvel na Receita, o CIB (antigo NIRF), é usado para cobrar o ITR.' },
    ] },
    { h2: 'Vender, arrendar ou herdar terra: o que mais o cartório pede', blocos: [
      { p: 'O CCIR não vai sozinho. A lei manda que ele venha acompanhado da **prova de quitação do ITR dos últimos cinco exercícios**, com ressalva para os casos de dispensa e inexigibilidade previstos na lei do ITR. Quem está com o ITR atrasado ou sem declarar deve regularizar antes de marcar a escritura. O guia do [ITR](/itr) mostra como.' },
      { p: 'Compra de parte da área ou venda de um pedaço pede **alteração cadastral** logo em seguida, para o CCIR novo sair em nome de quem ficou com a terra.' },
      { destaque: 'Este texto é informativo e não substitui contador nem advogado. Taxa, formulário e telas do Incra mudam: confira sempre no site oficial do Incra antes de pagar.' },
    ] },
  ],
  noFinagro: { h2: 'Como fica no FINAGRO', itens: [
    'O FINAGRO não emite o CCIR nem altera o cadastro no Incra. A emissão é no site do SNCR; o app guarda o papel e lembra as datas.',
    'Na tela Documentos, o CCIR de cada fazenda fica com número, emissão, validade e o arquivo do PDF.',
    'O aviso chega antes de o documento vencer e aparece na agenda da fazenda, junto das vacinas e das tarefas.',
    'A taxa da guia entra como despesa, e o vencimento fica em contas a pagar, no fluxo de caixa.',
  ] },
  cta: { forte: 'CCIR, ITR e CAR guardados, com aviso antes de vencer.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre o CCIR',
  faq: [
    ['O que é o CCIR?', 'É o Certificado de Cadastro de Imóvel Rural, emitido pelo Incra. Comprova que o imóvel está cadastrado e regular no Sistema Nacional de Cadastro Rural, mas não prova que a terra é do titular.'],
    ['O CCIR precisa ser emitido todo ano?', 'O certificado tem periodicidade anual, e o emitido para um exercício substitui os anteriores. Para vender, arrendar ou pedir crédito, emita o do exercício e pague a taxa.'],
    ['Posso vender a terra sem o CCIR?', 'Não. Sem o certificado, o dono não pode desmembrar, arrendar, hipotecar, vender ou prometer em venda o imóvel rural, sob pena de nulidade. Na herança, a partilha também depende dele.'],
    ['Esqueci de pagar a taxa do CCIR, e agora?', 'Reemita o CCIR no site do SNCR. O sistema atualiza os valores sozinho, e você paga a guia nova pela GRU, cartão ou Pix. Quem tem débito de anos anteriores paga tudo junto, com multa e juros.'],
    ['CCIR e ITR são a mesma coisa?', 'Não. O CCIR é o cadastro do imóvel no Incra. O ITR é o imposto declarado todo ano à Receita Federal. O dono precisa dos dois, e a venda da terra pede o CCIR com a prova de quitação do ITR.'],
  ],
  fontes: [
    { nome: 'Incra, Certificado de Cadastro de Imóvel Rural (CCIR)', url: INCRA },
    { nome: 'Incra, perguntas frequentes sobre cadastro e CCIR', url: FAQ },
    { nome: 'Lei 4.947/1966, art. 22 (Certificado de Cadastro)', url: L4947 },
    { nome: 'Lei 5.868/1972, Sistema Nacional de Cadastro Rural', url: L5868 },
  ],
  relacionados: ['itr', 'car-cadastro-ambiental-rural', 'contrato-de-arrendamento-rural'],
};
