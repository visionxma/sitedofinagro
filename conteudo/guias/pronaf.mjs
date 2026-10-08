// Consulta-alvo: "pronaf", "pronaf 2026", "simulador pronaf", "simulador pronaf mais alimentos", "quem tem direito ao pronaf",
// "pronaf custeio" (colheita de 08/10/2026). Regra: Plano Safra da Agricultura Familiar 2026/2027 (MDA, publicado em julho de
// 2026). A tabela oficial é um PDF do MDA; o que o simulador do app faz está descrito no código (src/utils/pronafSimulator.js).
const TABELA = 'https://www.gov.br/mda/pt-br/acesso-a-informacao/acoes-e-programas/programas-projetos-acoes-obras-e-atividades/plano-safra-da-agricultura-familiar/documentos/Pronaf20262027ResumoLinhas.pdf';
const NOTICIA = 'https://www.gov.br/mda/pt-br/noticias/2026/07/plano-safra-da-agricultura-familiar-2026-2027';
const CAF = 'https://www.gov.br/pt-br/servicos/cadastrar-se-no-caf-cadastro-nacional-da-agricultura-familiar';

export const provas = [
  { afirmacao: 'a tabela oficial é a do Pronaf da safra 2026/2027', trecho: 'Resumo das linhas de crédito rural do Pronaf - Safra 2026/2027', url: TABELA },
  { afirmacao: 'estão previstos R$ 85,2 bilhões para o Pronaf na safra 2026/2027', trecho: 'Para a safra 2026/2027, estão previstos R$ 85,2 bilhões para operações do Pronaf', url: NOTICIA },
  { afirmacao: 'o custeio de alimentos tem juros de 2% ao ano e o agroecológico e orgânico 1% ao ano', trecho: 'o Plano estabelece taxa de juros de 2% ao ano para operações destinadas à produção de alimentos e de 1% ao ano para sistemas agroecológicos, produção orgânica e produtos da sociobiodiversidade', url: NOTICIA },
  { afirmacao: 'o Pronaf Custeio atende renda bruta anual de até R$ 500 mil, com limite de R$ 250 mil e prazo de 11 meses a 3 anos', trecho: 'Pronaf Custeio Custeio Família com renda bruta anual de enquadramento de até R$ 500 mil R$ 250 mil 11 meses a 3 anos', url: TABELA },
  { afirmacao: 'juros do custeio por faixa: soja, algodão e bovinocultura de corte 7,5%; demais produtos ou criações 5,5%', trecho: 'Faixa IV - (Soja, algodão e bovinocultura de corte) 7,5% Faixa II (Demais produtos ou criações) 5,5%', url: TABELA },
  { afirmacao: 'faixa de 1% para produtos da sociobiodiversidade, orgânicos e agroecológicos', trecho: 'Faixa III (Produtos da sociobiodiversidade, orgânicos, agroecológicos ou em transição) *² 1%', url: TABELA },
  { afirmacao: 'o Pronaf Mais Alimentos atende renda bruta anual de até R$ 500 mil', trecho: 'Pronaf Mais Alimentos Investimento Família com renda bruta anual de enquadramento de até R$ 500 mil', url: TABELA },
  { afirmacao: 'no Mais Alimentos, tratores, colheitadeiras e implementos têm 5% ao ano, 7 anos e 1 ano de carência', trecho: 'Tratores, colheitadeiras e implementos agrícolas 5% 7 anos 1 ano -', url: TABELA },
  { afirmacao: 'no Mais Alimentos, matrizes e reprodutores de corte têm prazo de 8 anos e 3 de carência', trecho: 'Matrizes, reprodutores, animais de serviço, sêmen, óvulos e embriões (pecuária de corte) 8 anos 3 anos -', url: TABELA },
  { afirmacao: 'o Pronaf B atende renda bruta anual de até R$ 60 mil, com juros de 0,5%', trecho: 'Família com renda bruta anual de enquadramento de até R$ 60 mil 0,5%', url: TABELA },
  { afirmacao: 'o Pronaf A de investimento tem limite de R$ 55 mil, 0,5% de juros, 10 anos e 3 de carência', trecho: 'Investimento Investimento na atividade produtiva R$ 55 mil 0,5% 10 anos 3 anos', url: TABELA },
  { afirmacao: 'o Pronaf A atende beneficiários da reforma agrária, do crédito fundiário, indígenas e quilombolas', trecho: 'Beneficiários do Programa Nacional de Reforma Agrária, do Programa Nacional de Crédito Fundiário e do Programa Cadastro de Terras e Regularização Fundiária, Povos Indígenas e Comunidades Quilombolas', url: TABELA },
  { afirmacao: 'o Pronaf Jovem atende de 16 a 29 anos, até R$ 50 mil, com juros de 2%, 10 anos e 3 de carência', trecho: 'Jovem entre 16 e 29 anos que cumpra os requisitos do MCR 10-10 Mesmas finalidades previstas no Pronaf Mais Alimentos R$ 50 mil (dependendo da capacidade de pagamento) 2% 10 anos 3 anos', url: TABELA },
  { afirmacao: 'o Pronaf Mulher atende mulher com renda familiar bruta anual de até R$ 500 mil', trecho: 'Mulher com renda familiar buta anual de enquadramento de até R$ 500 mil', url: TABELA },
  { afirmacao: 'o agricultor familiar não pode ter área maior que 4 módulos fiscais', trecho: 'não detenha, a qualquer título, área maior do que 4 (quatro) módulos fiscais', url: 'https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11326.htm' },
  { afirmacao: 'a renda familiar precisa vir em percentual mínimo da atividade do estabelecimento', trecho: 'tenha percentual mínimo da renda familiar originada de atividades econômicas do seu estabelecimento ou empreendimento', url: 'https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11326.htm' },
  { afirmacao: 'o agricultor familiar dirige o estabelecimento com a família', trecho: 'dirija seu estabelecimento ou empreendimento com sua família', url: 'https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11326.htm' },
  { afirmacao: 'o agricultor familiar usa predominantemente mão de obra da própria família', trecho: 'utilize predominantemente mão-de-obra da própria família nas atividades econômicas do seu estabelecimento ou empreendimento', url: 'https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11326.htm' },
  { afirmacao: 'o CAF substituiu a DAP e é o documento oficial de acesso', trecho: 'O CAF substituiu a antiga Declaração de Aptidão ao Pronaf (DAP) e agora é o documento oficial para acesso as políticas públicas', url: CAF },
  { afirmacao: 'só entidades credenciadas na Rede CAF fazem o cadastro', trecho: 'o agricultor ou agricultora deverá procurar uma entidade credenciada na Rede CAF, pois apenas os agentes autorizados podem realizar o cadastro', url: CAF },
  { afirmacao: 'a inscrição no CAF é presencial na entidade do município', trecho: 'A inscrição deve ser feita presencialmente na entidade cadastradora do CAF localizada em seu município', url: CAF },
  { afirmacao: 'o serviço do CAF é gratuito', trecho: 'Informações adicionais ao tempo estimado Este serviço é gratuito para o cidadão', url: CAF },
  { afirmacao: 'o CAF vale 3 anos', trecho: 'Validade do Documento Válido por 3 ano(s) Legislação Todos os instrumentos normativos relacionados ao CAF', url: CAF },
  { afirmacao: 'documentos de renda e da área exigidos para o CAF', trecho: 'Comprovante da(s) área(s) explorada(s) pela Unidade Familiar; Comprovantes de renda de todos os membros da Unidade Familiar', url: CAF },
  { afirmacao: 'o contrato é feito por instituição financeira autorizada', trecho: 'A contratação das operações do Pronaf é realizada por instituições financeiras autorizadas a operar as linhas de crédito', url: NOTICIA },
  { afirmacao: 'documentos pedidos de forma geral na contratação', trecho: 'Cadastro Ambiental Rural (CAR) regular; - Documento que comprove a posse ou a propriedade do imóvel rural; - Projeto técnico ou proposta simplificada, conforme a modalidade de financiamento', url: NOTICIA },
  { afirmacao: 'o MDA publicou um Simulador de Crédito do Pronaf', trecho: 'Simulador de Crédito do Pronaf e novas funcionalidades do aplicativo Meu Imóvel Rural, destinados à consulta das modalidades de financiamento', url: NOTICIA },
];

export default {
  slug: 'pronaf',
  grupo: 'dinheiro',
  tipo: 'guia',
  curto: 'Pronaf 2026',
  resumo: 'Quem tem direito, linhas, juros e documentos.',
  title: 'Pronaf 2026: quem tem direito, linhas e juros',
  description: 'Pronaf no Plano Safra 2026/2027: quem tem direito, custeio e Mais Alimentos, juros, limites, o CAF, os documentos e o simulador de crédito.',
  h1: 'Pronaf 2026: quem tem direito, as linhas, os juros e o que levar ao banco',
  pergunta: 'Quem tem direito ao Pronaf e quais são os juros em 2026?',
  resposta: 'O Pronaf é o crédito rural do governo para a agricultura familiar. Para acessar, a família precisa do CAF e de renda bruta anual de até R$ 500 mil (no Pronaf B, até R$ 60 mil). No Plano Safra 2026/2027, o custeio de alimentos tem juros de 2% ao ano e limite de R$ 250 mil. Quem contrata é o banco.',
  tela: 'contas',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'Quem tem direito ao Pronaf', blocos: [
      { p: 'Pronaf é o Programa Nacional de Fortalecimento da Agricultura Familiar. Quem pode contratar é o **agricultor familiar** enquadrado pelas regras do programa, com o **CAF** (Cadastro Nacional da Agricultura Familiar) em dia e renda bruta anual dentro do limite de cada linha.' },
      { p: 'A Lei 11.326/2006 diz quem é agricultor familiar. Entre os requisitos: não ter área maior que **4 módulos fiscais**, usar predominantemente mão de obra da própria família e dirigir o estabelecimento com a família. A renda também precisa vir, em percentual mínimo, da atividade do próprio estabelecimento.' },
      { p: 'Cada linha tem um teto de renda. No Plano Safra 2026/2027, o Pronaf Custeio e o Pronaf Mais Alimentos atendem famílias com renda bruta anual de até **R$ 500 mil**. O Pronaf B é para quem tem renda bruta anual de até **R$ 60 mil**.' },
    ] },
    { h2: 'Plano Safra 2026/2027: as linhas, os limites e os juros', blocos: [
      { p: 'O governo anunciou R$ 85,2 bilhões para o Pronaf nesta safra. As condições estão na tabela oficial "Resumo das linhas de crédito rural do Pronaf - Safra 2026/2027", do MDA (Ministério do Desenvolvimento Agrário). As linhas mais procuradas:' },
      { tabela: { colunas: ['Linha', 'Quem acessa', 'Limite, juros e prazo'], linhas: [['Pronaf A (investimento)', 'Reforma agrária, crédito fundiário, indígenas e quilombolas', 'R$ 55 mil, 0,5% ao ano, 10 anos, 3 de carência'], ['Pronaf B', 'Renda bruta anual até R$ 60 mil', 'Juros de 0,5% ao ano'], ['Pronaf Custeio', 'Renda bruta anual até R$ 500 mil', 'Até R$ 250 mil, de 11 meses a 3 anos'], ['Pronaf Mais Alimentos', 'Renda bruta anual até R$ 500 mil', 'Taxa e prazo mudam por item'], ['Pronaf Jovem', 'De 16 a 29 anos', 'Até R$ 50 mil, 2% ao ano, 10 anos, 3 de carência']], nota: 'MDA, Plano Safra da Agricultura Familiar 2026/2027. Há outras linhas (Mulher, Floresta, Bioeconomia, Agroecologia) e limites maiores para cooperativas: veja o PDF completo.' } },
      { p: 'Os juros e os limites mudam a cada Plano Safra. Se a tabela que você achar for de 2025/2026, ela não vale mais. Confira sempre a data na primeira linha do PDF.' },
    ] },
    { h2: 'Pronaf custeio: juros por tipo de produção', blocos: [
      { p: 'O custeio paga a safra: semente, adubo, ração, vacina, mão de obra. O limite é de R$ 250 mil, com prazo de 11 meses a 3 anos. O juro depende do que você produz:' },
      { tabela: { colunas: ['Tipo de produção', 'Juros ao ano'], linhas: [['Produção de alimentos', '2%'], ['Agroecológicos, orgânicos e da sociobiodiversidade', '1%'], ['Demais produtos ou criações', '5,5%'], ['Soja, algodão e bovinocultura de corte', '7,5%']], nota: 'MDA, Plano Safra 2026/2027. Os 2% valem para operações de produção de alimentos: confirme com o banco se o seu produto entra.' } },
      { p: 'Quem cria gado de corte cai na faixa de 7,5%. Para ver o peso disso, faça a conta: R$ 100.000 a 7,5% ao ano rendem R$ 7.500 de juros no primeiro ano sobre o saldo todo. A 2%, são R$ 2.000. A conta fica menor com o saldo caindo a cada parcela.' },
    ] },
    { h2: 'Pronaf Mais Alimentos: o investimento', blocos: [
      { p: 'O Mais Alimentos financia o investimento: trator, máquina, curral, cerca, pastagem, matriz, reprodutor, tanque de resfriamento. Atende famílias com renda bruta anual de até R$ 500 mil. **A taxa muda de item para item** dentro da mesma linha.' },
      { ul: ['Tratores, colheitadeiras e implementos agrícolas: 5% ao ano, 7 anos de prazo e 1 ano de carência.', 'Matrizes, reprodutores e animais de serviço da pecuária de corte: prazo de 8 anos e 3 de carência.', 'Os demais itens estão na tabela do MDA, cada um com taxa, prazo e limite próprios.'] },
      { p: 'Carência é o período inicial em que o principal ainda não começa a ser pago. O banco explica como os juros são cobrados nesse período.' },
    ] },
    { h2: 'O CAF: como tirar e quanto custa', blocos: [
      { p: 'O CAF substituiu a antiga DAP (Declaração de Aptidão ao Pronaf) e é o documento oficial de acesso às políticas da agricultura familiar. Quem tem DAP ainda dentro da validade deve confirmar no banco se ela é aceita.' },
      { ol: ['Procure uma entidade credenciada na Rede CAF do seu município: só ela faz o cadastro.', 'Leve documento de identificação de todos da família, comprovante de endereço, comprovante da área explorada e comprovantes de renda da família e do estabelecimento.', 'A inscrição é presencial. O serviço é gratuito e o CAF vale por 3 anos.'] },
    ] },
    { h2: 'O que levar ao banco ou à cooperativa', blocos: [
      { p: 'Quem contrata é uma instituição financeira autorizada: banco ou cooperativa de crédito. De modo geral, o MDA lista estes documentos:' },
      { ul: ['o CAF ou, quando aplicável, a DAP;', 'o CAR (Cadastro Ambiental Rural) regular;', 'documento que comprove a posse ou a propriedade do imóvel rural;', 'projeto técnico ou proposta simplificada, conforme a linha.'] },
      { p: 'O banco pode pedir mais: comprovante de renda, histórico de produção, orçamento dos itens. Quanto mais organizados os números da fazenda, mais rápida é a análise. Veja o fluxo em [fluxo de caixa rural](/fluxo-de-caixa-rural).' },
      { destaque: 'Este texto é informativo e não substitui o banco, o técnico de crédito ou o contador. A taxa, o limite e a aprovação são definidos pela instituição financeira no momento do contrato.' },
    ] },
  ],
  noFinagro: { h2: 'O simulador de crédito do FINAGRO', itens: [
    'O simulador pede valor, finalidade (custeio ou investimento), prazo, idade e se você tem CAF, e lista as linhas do Pronaf que cabem, da de menor custo para a de maior.',
    'Para cada linha ele mostra a primeira e a última parcela e o total de juros, pelo sistema de amortização constante (SAC), com carência.',
    'As taxas e os tetos do simulador são referências do próprio app e podem diferir da tabela do Plano Safra 2026/2027. Para a taxa certa, use o PDF do MDA e o banco.',
    'A simulação não é proposta nem aprovação de banco. O FINAGRO não contrata crédito.',
    'O resultado traz um checklist de documentos, e receitas, despesas e relatórios em PDF ou planilha ajudam a mostrar a renda da fazenda.',
  ] },
  cta: { forte: 'Simule a parcela e junte os documentos antes de ir ao banco.', texto: 'Grátis até 1.000 animais com ficha, sem cartão. O banco define a taxa final.' },
  faqTitulo: 'Perguntas sobre Pronaf',
  faq: [
    ['Quem tem direito ao Pronaf?', 'O agricultor familiar que se enquadra na Lei 11.326/2006, tem o CAF em dia e renda bruta anual dentro do limite da linha: até R$ 500 mil no custeio e no Mais Alimentos e até R$ 60 mil no Pronaf B.'],
    ['Qual é o juro do Pronaf custeio em 2026?', 'No Plano Safra 2026/2027, o custeio de produção de alimentos tem juros de 2% ao ano. Agroecológicos e orgânicos pagam 1%, demais produtos 5,5% e soja, algodão e bovinocultura de corte 7,5%.'],
    ['Existe simulador do Pronaf Mais Alimentos?', 'O MDA lançou um Simulador de Crédito do Pronaf, e o FINAGRO tem um simulador próprio, com taxas de referência. Nenhum dos dois é proposta de banco: a taxa final é do banco.'],
    ['Como tirar o CAF?', 'Em uma entidade credenciada na Rede CAF do seu município, com documentos da família, da área e da renda. A inscrição é presencial, gratuita e o CAF vale por 3 anos.'],
    ['A DAP ainda vale para o Pronaf?', 'O CAF substituiu a DAP como documento oficial. A lista de documentos do MDA ainda cita a DAP quando aplicável, então confirme com o banco se a sua, dentro da validade, é aceita.'],
  ],
  fontes: [
    { nome: 'MDA, Resumo das linhas de crédito rural do Pronaf, Safra 2026/2027', url: TABELA },
    { nome: 'MDA, Plano Safra da Agricultura Familiar 2026/2027', url: NOTICIA },
    { nome: 'gov.br, como se cadastrar no CAF', url: CAF },
    { nome: 'Lei 11.326/2006, agricultura familiar (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11326.htm' },
  ],
  relacionados: ['caf-agricultura-familiar', 'fluxo-de-caixa-rural', 'custo-de-producao-por-hectare'],
};
