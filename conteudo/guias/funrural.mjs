// Consulta-alvo: "funrural", "funrural 2026", "funrural como funciona", "funrural sobre a folha de pagamento",
// "alíquota funrural produtor rural pessoa física" (colheita de 08/10/2026). Texto das leis lido no Planalto em 08/10/2026.
export const provas = [
  { afirmacao: 'a contribuição previdenciária do produtor pessoa física é de 1,2% da receita bruta da comercialização', trecho: '1,2% (um inteiro e dois décimos por cento) da receita bruta proveniente da comercialização da sua produção', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm' },
  { afirmacao: 'a contribuição para o seguro de acidente de trabalho é de 0,1% da receita bruta da comercialização', trecho: '0,1% da receita bruta proveniente da comercialização da sua produção para financiamento das prestações por acidente do trabalho', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm' },
  { afirmacao: 'a contribuição ao Senar é de 0,2% da receita bruta da comercialização', trecho: 'é de zero vírgula dois por cento, incidente sobre a receita bruta proveniente da comercialização de sua produção rural', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9528.htm' },
  { afirmacao: 'o comprador, o consignatário ou a cooperativa ficam responsáveis por recolher o Senar do produtor pessoa física', trecho: 'pelo adquirente, consignatário ou cooperativa, que ficam sub-rogados, para esse fim, nas obrigações do produtor rural pessoa física e do segurado especial', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9528.htm' },
  { afirmacao: 'o produtor recolhe ele mesmo o Senar quando vende ao exterior, a outro produtor pessoa física ou direto ao consumidor', trecho: 'pelo próprio produtor pessoa física e pelo segurado especial, quando comercializarem sua produção com adquirente no exterior, com outro produtor pessoa física, ou diretamente no varejo, com o consumidor pessoa física', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9528.htm' },
  { afirmacao: 'a empresa compradora recolhe a contribuição até o dia 20 do mês seguinte à venda', trecho: 'são obrigadas a recolher a contribuição de que trata o art. 25 até o dia 20 (vinte) do mês subsequente ao da operação de venda ou consignação da produção', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm' },
  { afirmacao: 'o produtor pessoa física pode optar pela contribuição sobre a folha, em vez da sobre a venda', trecho: 'O produtor rural pessoa física poderá optar por contribuir na forma prevista no caput deste artigo ou na forma dos incisos I e II do caput do art. 22 desta Lei', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm' },
  { afirmacao: 'a opção é feita pelo pagamento da contribuição da folha de janeiro e não pode ser desfeita no ano', trecho: 'manifestando sua opção mediante o pagamento da contribuição incidente sobre a folha de salários relativa a janeiro de cada ano, ou à primeira competência subsequente ao início da atividade rural, e será irretratável para todo o ano-calendário', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm' },
  { afirmacao: 'a contribuição sobre a folha é de 20% das remunerações pagas aos empregados', trecho: 'vinte por cento sobre o total das remunerações pagas, devidas ou creditadas a qualquer título, durante o mês', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm' },
  { afirmacao: 'produção vendida para plantio ou para reprodução fica fora da base de cálculo', trecho: 'a produção rural destinada ao plantio ou reflorestamento, nem o produto animal destinado à reprodução ou criação pecuária ou granjeira', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm' },
];

export default {
  slug: 'funrural',
  grupo: 'dinheiro',
  tipo: 'calculadora',
  curto: 'Calculadora de Funrural',
  resumo: 'Funrural de uma venda: parcelas e total, na hora.',
  title: 'Funrural 2026: calculadora e como funciona o desconto',
  description: 'Funrural do produtor pessoa física: digite o valor da venda e veja a previdência, o RAT e o Senar. Quem desconta, quem recolhe e a opção pela folha.',
  h1: 'Funrural 2026: quanto você paga na venda e como funciona o desconto',
  pergunta: 'Quanto é o Funrural do produtor rural pessoa física?',
  resposta: 'Para o produtor rural pessoa física, o Funrural soma 1,5% da receita bruta da venda: 1,2% de previdência, 0,1% de seguro de acidente de trabalho (RAT) e 0,2% do Senar. Em geral a empresa que compra desconta e recolhe. Numa venda de R$ 100.000, são R$ 1.500. Valores conforme as leis em vigor em outubro de 2026.',
  tela: 'fluxo',
  atualizado: '2026-10-08',
  calc: {
    titulo: 'Calcule o Funrural da venda',
    campos: [
      { id: 'receita', rotulo: 'Receita bruta da venda (R$)', valor: 100000, min: 0, passo: 100 },
    ],
    saidas: [
      { id: 'total', rotulo: 'Funrural total da venda', casas: 2, prefixo: 'R$ ' },
      { id: 'prev', rotulo: 'previdência (1,2%)', casas: 2, prefixo: 'R$ ' },
      { id: 'rat', rotulo: 'seguro de acidente, RAT (0,1%)', casas: 2, prefixo: 'R$ ' },
      { id: 'senar', rotulo: 'Senar (0,2%)', casas: 2, prefixo: 'R$ ' },
    ],
    calcular: (v) => {
      const prev = v.receita * 0.012;
      const rat = v.receita * 0.001;
      const senar = v.receita * 0.002;
      return { total: prev + rat + senar, prev, rat, senar };
    },
    nota: 'Vale para o produtor rural pessoa física que NÃO optou pela folha de pagamento. Use a receita bruta da venda, sem descontar frete nem outras despesas. Venda de semente, muda ou animal para reprodução fica fora da base: tire esse valor antes de digitar.',
    exemplos: [
      { entrada: { receita: 100000 }, saida: { total: 1500, prev: 1200, rat: 100, senar: 200 } },
      { entrada: { receita: 250000 }, saida: { total: 3750, prev: 3000, rat: 250, senar: 500 } },
    ],
  },
  secoes: [
    { h2: 'O que é o Funrural e quanto custa', blocos: [
      { p: 'Funrural é o nome que o produtor deu à contribuição que incide sobre a venda da produção rural. Hoje ela se divide em três parcelas, todas calculadas sobre a **receita bruta da comercialização**: o valor da nota, antes de qualquer despesa.' },
      { tabela: { colunas: ['Parcela', 'Alíquota', 'Para quê'], linhas: [['Previdência', '1,2%', 'Seguridade Social (Lei 8.212, art. 25)'], ['Seguro de acidente (RAT)', '0,1%', 'Benefícios por acidente do trabalho'], ['Senar', '0,2%', 'Formação profissional rural (Lei 9.528, art. 6º)'], ['Total', '1,5%', 'sobre a receita bruta da venda']], nota: 'Produtor rural pessoa física, empregador, que não optou pela folha. Textos das leis lidos no Planalto em 08/10/2026.' } },
      { p: 'Conta de exemplo: o produtor vende 400 arrobas de boi a R$ 300 e fatura R$ 120.000. Previdência: R$ 1.440. RAT: R$ 120. Senar: R$ 240. Total: R$ 1.800.' },
    ] },
    { h2: 'Quem desconta e quem recolhe', blocos: [
      { p: 'Quando você vende para uma empresa, quem recolhe é ela. A lei diz que o comprador, o consignatário ou a cooperativa ficam responsáveis pelas obrigações do produtor pessoa física. Na prática, o valor já vem descontado do que você recebe. A empresa deve recolher até o dia 20 do mês seguinte à venda.' },
      { p: 'Em três casos a conta é sua, direto com o governo:' },
      { ul: ['venda para o exterior;', 'venda direto ao consumidor pessoa física, no varejo;', 'venda para outro produtor rural pessoa física.'] },
      { p: 'Nesses casos o Funrural não é descontado por ninguém. Guarde a nota e peça ao contador a guia do mês.' },
    ] },
    { h2: 'O que entra e o que não entra na base', blocos: [
      { p: 'A base é a receita bruta da venda. Produto em estado natural ou com beneficiamento simples, como lavar, secar, embalar, pasteurizar ou resfriar, continua sendo produção rural. Industrialização de verdade muda o enquadramento: aí o contador precisa olhar o caso.' },
      { p: 'Fica fora da base a produção vendida para plantio ou reflorestamento e o animal vendido para reprodução ou criação. Se você vende semente, muda, matriz ou reprodutor, separe essas notas dos demais lançamentos.' },
    ] },
    { h2: 'Funrural sobre a folha de pagamento: a opção', blocos: [
      { p: 'O produtor pessoa física pode escolher pagar a contribuição sobre a folha de pagamento dos empregados, em vez de pagar sobre a venda. Quem opta paga 20% sobre as remunerações do mês, mais o seguro de acidente de trabalho (RAT), que é o inciso II do mesmo artigo. Outras contribuições sobre a folha dependem da atividade: o contador confirma.' },
      { ul: ['A opção se faz pagando a contribuição da folha de janeiro, ou da primeira competência após o início da atividade rural.', 'Ela vale para o ano-calendário inteiro e **não pode ser desfeita** no meio do ano.', 'Quem opta deixa de pagar os 1,2% e os 0,1% sobre a venda.'] },
      { p: 'Para ter uma ideia, compare o que sairia dos dois lados. Uma fazenda que vende R$ 2.000.000 por ano paga R$ 30.000 de Funrural sobre a venda. Se a folha anual for de R$ 100.000, os 20% dão R$ 20.000, mais o RAT e eventuais outras contribuições. Já uma fazenda com muita gente e venda pequena pode ter conta pior pela folha. Quem decide é o contador, com os números do ano.' },
    ] },
    { h2: 'Como conferir o desconto na nota', blocos: [
      { ol: ['Pegue o valor bruto da nota de venda.', 'Multiplique por 0,015 para ter o total do Funrural.', 'Compare com o desconto que o comprador fez no acerto. Diferença pequena pode vir de arredondamento ou de venda para reprodução.', 'Guarde o demonstrativo do comprador junto da nota: ele prova o recolhimento.'] },
      { destaque: 'Este texto é informativo e não substitui o contador. Alíquota, prazo e opção pela folha podem mudar por lei nova e dependem do seu caso: confirme antes de decidir.' },
    ] },
  ],
  noFinagro: { h2: 'O Funrural no controle da fazenda', itens: [
    'A venda entra como receita e o desconto do Funrural como despesa, para o fluxo de caixa mostrar o que entrou de verdade.',
    'Contas a pagar e a receber guardam a data do acerto com o comprador e o saldo previsto do mês.',
    'Relatórios em PDF e em planilha (CSV) levam receitas e despesas organizadas para o contador.',
    'O app não calcula, não desconta e não recolhe o Funrural, e não transmite nada à Receita: a conta desta página é só para você conferir a nota.',
  ] },
  cta: { forte: 'Venda, desconto e saldo do mês no mesmo lugar.', texto: 'Grátis até 1.000 animais com ficha, sem cartão, no Android e no navegador.' },
  faqTitulo: 'Perguntas sobre Funrural',
  faq: [
    ['Qual a alíquota do Funrural para pessoa física em 2026?', 'São 1,5% da receita bruta da venda: 1,2% de previdência, 0,1% de seguro de acidente de trabalho e 0,2% do Senar, conforme a Lei 8.212 e a Lei 9.528 em vigor em outubro de 2026.'],
    ['Quem recolhe o Funrural, o produtor ou o comprador?', 'Quando o comprador é empresa ou cooperativa, ele desconta e recolhe. Se você vende ao exterior, a outro produtor pessoa física ou direto ao consumidor, o recolhimento é seu.'],
    ['Posso pagar o Funrural sobre a folha de pagamento?', 'Pode. O produtor pessoa física escolhe pagando a contribuição da folha de janeiro. A escolha vale o ano inteiro e não pode ser desfeita. Peça ao contador para comparar as duas contas.'],
    ['Venda de animal para reprodução paga Funrural?', 'A lei deixa fora da base o produto animal destinado à reprodução ou criação, quando vendido pelo próprio produtor. Separe essa nota das demais.'],
    ['Até que dia o comprador paga o Funrural?', 'A empresa compradora deve recolher até o dia 20 do mês seguinte ao da venda. Quando a obrigação é sua, o prazo é o mesmo.'],
  ],
  fontes: [
    { nome: 'Lei 8.212/1991, art. 22, 25 e 30 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm' },
    { nome: 'Lei 9.528/1997, art. 6º, contribuição ao Senar (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9528.htm' },
    { nome: 'Lei 13.606/2018, opção pela folha de pagamento (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13606.htm' },
  ],
  relacionados: ['fluxo-de-caixa-rural', 'imposto-de-renda-produtor-rural', 'nota-fiscal-de-produtor-rural'],
};
