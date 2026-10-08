// Consulta-alvo: "custo de produção por hectare", "custo por hectare", "como calcular custo de produção agrícola"
// e "qual é o custo de produção" (colheita de 08/10/2026).
export const provas = [
  { afirmacao: 'custo de produção soma todos os recursos usados na atividade', trecho: 'é a soma dos valores de todos os recursos (insumos e serviços) utilizados no processo produtivo de uma atividade agropecuária', url: 'https://www.gov.br/conab/pt-br/acesso-a-informacao/institucional/atos-normativos/normas-da-organizacao/operacoes/30-302_norma_metodologia_de_custo_de_producao.pdf' },
  { afirmacao: 'a metodologia inclui desembolsos explícitos e custos sem pagamento imediato', trecho: 'A metodologia de cálculo de custo contempla todos os itens de dispêndio, explícitos ou não, que devem ser assumidos pelo produtor', url: 'https://www.gov.br/conab/pt-br/acesso-a-informacao/institucional/atos-normativos/normas-da-organizacao/operacoes/30-302_norma_metodologia_de_custo_de_producao.pdf' },
  { afirmacao: 'depreciação e custo de oportunidade são custos implícitos sem desembolso efetivo', trecho: 'custos implícitos que dizem respeito àqueles para os quais não ocorrem desembolsos efetivos, como é o caso da depreciação e do custo de oportunidade', url: 'https://www.gov.br/conab/pt-br/acesso-a-informacao/institucional/atos-normativos/normas-da-organizacao/operacoes/30-302_norma_metodologia_de_custo_de_producao.pdf' },
  { afirmacao: 'o custo operacional reúne custos variáveis e a parte dos fixos ligada à lavoura', trecho: 'Custo Operacional: é composto por todos os itens de custos variáveis (despesas diretas) e a parcela dos custos fixos diretamente associada à implementação da lavoura', url: 'https://www.gov.br/conab/pt-br/acesso-a-informacao/institucional/atos-normativos/normas-da-organizacao/operacoes/30-302_norma_metodologia_de_custo_de_producao.pdf' },
  { afirmacao: 'o custo total acrescenta ao operacional a remuneração dos fatores de produção', trecho: 'Custo Total: compreende o somatório do custo operacional mais a remuneração atribuída aos fatores de produção', url: 'https://www.gov.br/conab/pt-br/acesso-a-informacao/institucional/atos-normativos/normas-da-organizacao/operacoes/30-302_norma_metodologia_de_custo_de_producao.pdf' },
  { afirmacao: 'a renda de fatores remunera o capital fixo e a terra', trecho: 'Renda de Fatores: é a renda dos fatores fixos, considerada como remuneração esperada sobre o capital fixo e sobre a terra', url: 'https://www.gov.br/conab/pt-br/acesso-a-informacao/institucional/atos-normativos/normas-da-organizacao/operacoes/30-302_norma_metodologia_de_custo_de_producao.pdf' },
  { afirmacao: 'o custeio inclui máquinas, mão de obra, sementes, fertilizantes, defensivos, tratos e colheita', trecho: 'O custeio é a despesa direta com máquinas, mão de obra temporária e permanente, sementes, fertilizantes, agrotóxicos, realização de tratos culturais e a colheita', url: 'https://www.gov.br/conab/pt-br/acesso-a-informacao/institucional/atos-normativos/normas-da-organizacao/operacoes/30-302_norma_metodologia_de_custo_de_producao.pdf' },
  { afirmacao: 'o coeficiente técnico de insumos pode ser referido por hectare', trecho: 'Coeficiente Técnico: quantidade consumida de um insumo, referida a unidade de área (hectare)', url: 'https://www.gov.br/conab/pt-br/acesso-a-informacao/institucional/atos-normativos/normas-da-organizacao/operacoes/30-302_norma_metodologia_de_custo_de_producao.pdf' },
];

export default {
  slug: 'custo-de-producao-por-hectare',
  grupo: 'lavoura',
  tipo: 'calculadora',
  curto: 'Custo por hectare',
  resumo: 'Custo por hectare, por saca e ponto de equilíbrio.',
  title: 'Custo de produção por hectare: calcule por saca',
  description: 'Calcule o custo de produção por hectare e por saca, descubra o ponto de equilíbrio da lavoura e saiba quais gastos separar em cada talhão.',
  h1: 'Custo de produção por hectare: faça a conta da sua lavoura',
  pergunta: 'Como calcular o custo de produção por hectare?',
  resposta: 'Some insumos, operações com máquina, mão de obra e outros custos da lavoura. Divida o total pela área plantada para achar o custo por hectare e pela produção colhida para achar o custo por saca. Para o ponto de equilíbrio, divida o custo por hectare pelo preço esperado de cada saca.',
  tela: 'producao',
  atualizado: '2026-10-08',
  calc: {
    titulo: 'Calcule o custo da lavoura',
    campos: [
      { id: 'insumos', rotulo: 'Insumos (R$)', valor: 36000, min: 0, passo: 100 },
      { id: 'maquinas', rotulo: 'Operações com máquina (R$)', valor: 12000, min: 0, passo: 100 },
      { id: 'maoOutros', rotulo: 'Mão de obra e outros (R$)', valor: 12000, min: 0, passo: 100 },
      { id: 'area', rotulo: 'Área plantada (ha)', valor: 100, min: 0.01, passo: 0.01 },
      { id: 'producao', rotulo: 'Produção colhida (sacas)', valor: 6000, min: 0.01, passo: 1 },
      { id: 'preco', rotulo: 'Preço por saca (R$)', valor: 130, min: 0.01, passo: 0.01 },
    ],
    saidas: [
      { id: 'custoHa', rotulo: 'custo por hectare', casas: 2, prefixo: 'R$ ' },
      { id: 'custoSaca', rotulo: 'custo por saca', casas: 2, prefixo: 'R$ ' },
      { id: 'equilibrio', rotulo: 'equilíbrio em sacas/ha', casas: 2 },
    ],
    calcular: (v) => {
      const total = v.insumos + v.maquinas + v.maoOutros;
      const custoHa = total / v.area;
      return { custoHa, custoSaca: total / v.producao, equilibrio: custoHa / v.preco };
    },
    nota: 'Os valores preenchidos são apenas um exemplo. Some mão de obra e outros gastos no mesmo campo e troque tudo pelos números da sua safra. A conta não vira custo total enquanto depreciação, remuneração da terra e do capital ficarem de fora.',
    exemplos: [
      { entrada: { insumos: 36000, maquinas: 12000, maoOutros: 12000, area: 100, producao: 6000, preco: 130 }, saida: { custoHa: 600, custoSaca: 10, equilibrio: 4.62 } },
      { entrada: { insumos: 15000, maquinas: 5000, maoOutros: 4000, area: 40, producao: 1600, preco: 75 }, saida: { custoHa: 600, custoSaca: 15, equilibrio: 8 } },
    ],
  },
  secoes: [
    { h2: 'A conta do custo por hectare e por saca', blocos: [
      { p: 'A conta começa no **custo da safra**. Some tudo o que foi usado para plantar, conduzir e colher: insumos, operações com máquina, mão de obra e demais gastos. A Conab define custo de produção como a soma dos recursos, insumos e serviços usados na atividade agropecuária.' },
      { ol: ['Some os custos da safra. Exemplo ilustrativo: R$ 36.000 de insumos + R$ 12.000 de máquinas + R$ 12.000 de mão de obra e outros = R$ 60.000.', 'Divida o total pela área plantada. R$ 60.000 ÷ 100 ha = R$ 600 por hectare.', 'Divida o mesmo total pela produção colhida. R$ 60.000 ÷ 6.000 sacas = R$ 10 por saca.', 'Para achar o ponto de equilíbrio, divida R$ 600 por hectare pelo preço informado da saca. Com R$ 130 por saca, são 4,62 sacas por hectare.'] },
      { destaque: 'Os números do exemplo só mostram a aritmética. O custo certo vem das notas, diárias, horas de máquina e lançamentos da sua própria safra.' },
    ] },
    { h2: 'O que colocar em cada grupo de custo', blocos: [
      { p: 'A estrutura da Conab põe no custeio as máquinas, a mão de obra, sementes, fertilizantes, agrotóxicos, tratos culturais e colheita. Na sua conta, organize cada lançamento uma vez para não somar a mesma nota em dois grupos.' },
      { tabela: { colunas: ['Grupo', 'O que entra', 'Como conferir'], linhas: [
        ['Insumos', 'Sementes, fertilizantes e defensivos', 'Notas e quantidade usada'],
        ['Máquinas', 'Operação própria ou contratada', 'Horas, combustível e serviço'],
        ['Mão de obra', 'Equipe permanente, diária e safra', 'Dias e valor pago'],
        ['Outros', 'Transporte, armazenagem e assistência', 'Documento e talhão atendido'],
      ], nota: 'Grupos adaptados da estrutura de despesas da Norma 30.302 da Conab. Lance apenas o que ocorreu na sua safra.' } },
      { p: 'Se uma compra atende mais de uma safra ou mais de um talhão, distribua o valor pelo uso real. Um insumo vai pela quantidade aplicada. Uma operação vai pelas horas ou pela área atendida. O critério deve ficar anotado para a conta poder ser refeita.' },
    ] },
    { h2: 'Custo operacional e custo total não são iguais', blocos: [
      { p: 'Na metodologia da Conab, o **custo operacional** reúne os custos variáveis e a parte dos custos fixos ligada à implantação da lavoura. Entram os desembolsos da produção e parcelas como depreciação, quando elas pertencem à operação analisada.' },
      { p: 'O **custo total** vai além: soma ao custo operacional a remuneração atribuída aos fatores de produção. É aí que entram a remuneração esperada do capital fixo e da terra. Mesmo sem boleto pago naquele mês, usar trator próprio, estrutura e terra tem custo econômico.' },
      { p: 'A calculadora desta página começa pelas parcelas que o produtor consegue levantar rápido. Para chamá-la de custo operacional ou total, acrescente todas as parcelas correspondentes ao conceito escolhido. Sem isso, trate o resultado como custo direto apurado da safra.' },
      { destaque: 'Escolha um conceito e mantenha o mesmo critério entre safras. Comparar custo direto de um ano com custo total de outro leva a uma decisão errada.' },
    ] },
    { h2: 'Por que separar o custo de cada talhão', blocos: [
      { p: 'O custo médio da fazenda pode esconder diferenças. Um talhão que recebeu mais correção, mais horas de máquina ou replantio fica misturado com outro que exigiu menos. Ao dividir cada conjunto de gastos pela área que realmente atendeu, você enxerga o custo por hectare daquele pedaço.' },
      { p: 'Faça o rateio com uma regra verificável: quantidade aplicada para insumos, horas trabalhadas para máquinas, dias para mão de obra e área atendida para serviços gerais. Depois compare custo por hectare, custo por saca e produção colhida no mesmo talhão.' },
      { p: 'Essa separação ajuda a investigar onde a conta mudou antes da próxima safra. A decisão pode ser corrigir o manejo, rever uma operação ou conferir um lançamento. A causa agronômica deve ser discutida com o responsável técnico; a calculadora apenas mostra onde olhar.' },
    ] },
    { h2: 'Como ler o ponto de equilíbrio', blocos: [
      { p: 'O ponto de equilíbrio em sacas por hectare responde quantas sacas, vendidas pelo preço informado, pagam o custo por hectare lançado. A fórmula é: **custo por hectare ÷ preço por saca**.' },
      { p: 'Se a colheita por hectare ficar acima do ponto calculado, a receita cobre os custos que entraram na conta. Se ficar abaixo, não cobre. Frete, desconto, imposto, armazenagem ou qualquer parcela esquecida mudam o resultado, por isso precisam entrar no custo ou ser descontados do preço usado.' },
      { p: 'Não confunda ponto de equilíbrio com produtividade prevista. O primeiro vem de custo e preço. A produtividade vem da área e da quantidade colhida. Para fazer essa segunda conta, use a [calculadora de sacas por hectare](/produtividade-em-sacas-por-hectare).' },
    ] },
    { h2: 'Da anotação no campo ao resultado da safra', blocos: [
      { p: 'O custo só fecha quando o gasto nasce identificado. Registre no [caderno de campo](/caderno-de-campo) a operação, o talhão, o produto e a quantidade. No financeiro, informe a categoria e o centro de custo. Assim, a nota paga conversa com o serviço feito na lavoura.' },
      { p: 'O [fluxo de caixa rural](/fluxo-de-caixa-rural) responde quando o dinheiro entra ou sai. O custo de produção responde quanto cada safra, hectare ou saca consumiu. As duas visões se completam, mas não são a mesma conta.' },
      { destaque: 'Revise o custo com quem acompanha a lavoura. Esta calculadora organiza a conta e não substitui a orientação de agrônomo ou contador.' },
    ] },
  ],
  noFinagro: { h2: 'O custo da lavoura no FINAGRO', itens: [
    'Cadastre safras e talhões e acompanhe o custo por hectare de cada plantio.',
    'Use o caderno de campo para guardar as operações feitas na lavoura.',
    'Separe receitas e despesas por centro de custo e acompanhe o fluxo de caixa.',
    'Registre a colheita com o comprador e leve os relatórios em PDF ou planilha CSV.',
  ] },
  cta: { forte: 'Leve o custo do talhão e da safra no celular.', texto: 'Plano Campo grátis para sempre, sem cartão, no Android e no navegador.' },
  faqTitulo: 'Perguntas sobre custo por hectare',
  faq: [
    ['Como calcular o custo de produção por hectare?', 'Some os gastos atribuídos à safra e divida pela área plantada em hectares. Se a safra custou R$ 60.000 em 100 hectares, o custo foi de R$ 600 por hectare.'],
    ['Como calcular o custo por saca?', 'Divida o custo da safra pela quantidade de sacas colhidas. Uma safra com R$ 24.000 de custo e 1.600 sacas colhidas teve custo de R$ 15 por saca.'],
    ['O que entra no custo de produção agrícola?', 'Entram insumos, operações com máquinas, mão de obra e demais gastos ligados à produção. Para o custo operacional ou total, inclua também as parcelas fixas e econômicas do conceito adotado.'],
    ['Qual é a diferença entre custo operacional e custo total?', 'O custo operacional reúne custos variáveis e a parte dos fixos ligada à lavoura. O custo total acrescenta a remuneração dos fatores de produção, como capital fixo e terra.'],
    ['Como calcular o ponto de equilíbrio em sacas por hectare?', 'Divida o custo por hectare pelo preço de cada saca. O resultado mostra quantas sacas por hectare pagam somente as parcelas que você incluiu na conta.'],
  ],
  fontes: [
    { nome: 'Conab, Norma 30.302: Metodologia do Custo de Produção', url: 'https://www.gov.br/conab/pt-br/acesso-a-informacao/institucional/atos-normativos/normas-da-organizacao/operacoes/30-302_norma_metodologia_de_custo_de_producao.pdf' },
  ],
  relacionados: ['produtividade-em-sacas-por-hectare', 'caderno-de-campo', 'fluxo-de-caixa-rural'],
};
