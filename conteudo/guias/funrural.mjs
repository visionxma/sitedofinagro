// Consulta-alvo: "funrural", "funrural 2026", "funrural como funciona", "funrural sobre a folha de pagamento",
// "alíquota funrural produtor rural pessoa física" (colheita de 08/10/2026). Texto das leis lido no Planalto em 08/10/2026.
// 02/11/2026: "funrural 2026", "valor do funrural 2026", "desconto funrural 2026", "calculo funrural 2026" (Search Console, posição 9,7).
// A partir da competência 04/2026 a Receita aplica acréscimo de 10% na previdência e no RAT (LC 224/2025): 1,32% + 0,11% + 0,2% = 1,63%.
// Segurado especial (agricultor familiar sem empregado) continua em 1,2% + 0,1% + 0,2% = 1,5%. Lido na página da Receita em 02/11/2026.
export const provas = [
  { afirmacao: 'a partir da competência 04/2026 a previdência e o RAT do produtor rural tiveram acréscimo de 10%', trecho: 'A partir da competência 04/2026, as alíquotas da contribuição previdenciária e do RAT dos itens', url: 'https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/perguntas-frequentes/sped/efd-reinf/efdr/2-eventos-da-efd-reinf/2-6-2-quais-contribuicoes-sao', semNumero: 'o trecho traz a competência; o acréscimo de 10% está na mesma frase da Receita' },
  { afirmacao: 'em 2026 o produtor rural pessoa física paga 1,32% de previdência, 0,11% de RAT e 0,2% de Senar', trecho: 'Contribuição Previdenciária: 1,32%. - Risco de Acidente de Trabalho: 0,11%. - Senar: 0,2%.', url: 'https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/perguntas-frequentes/sped/efd-reinf/efdr/2-eventos-da-efd-reinf/2-6-2-quais-contribuicoes-sao' },
  { afirmacao: 'o segurado especial paga 1,2% de previdência, 0,1% de RAT e 0,2% de Senar', trecho: 'Contribuição Previdenciária: 1,2%. - Risco de Acidente de Trabalho: 0,1%. - Senar: 0,2%.', url: 'https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/perguntas-frequentes/sped/efd-reinf/efdr/2-eventos-da-efd-reinf/2-6-2-quais-contribuicoes-sao' },
  { afirmacao: 'a Lei 8.212 fixa a base da contribuição previdenciária do produtor pessoa física em 1,2% da receita bruta da comercialização', trecho: '1,2% (um inteiro e dois décimos por cento) da receita bruta proveniente da comercialização da sua produção', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm' },
  { afirmacao: 'a Lei 8.212 fixa a base do seguro de acidente de trabalho em 0,1% da receita bruta da comercialização', trecho: '0,1% da receita bruta proveniente da comercialização da sua produção para financiamento das prestações por acidente do trabalho', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm' },
  { afirmacao: 'a contribuição ao Senar é de 0,2% da receita bruta da comercialização', trecho: 'é de zero vírgula dois por cento, incidente sobre a receita bruta proveniente da comercialização de sua produção rural', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9528.htm', semNumero: 'a lei escreve por extenso: zero vírgula dois por cento' },
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
  title: 'Funrural 2026: valor, cálculo e desconto na venda',
  description: 'Funrural 2026 é 1,63% da venda para o produtor pessoa física desde abril (1,5% para o segurado especial). Calcule o desconto e veja quem recolhe.',
  h1: 'Funrural 2026: valor, cálculo e desconto na venda do produtor',
  pergunta: 'Qual o valor do Funrural em 2026?',
  resposta: 'Desde a competência de abril de 2026, o Funrural do produtor rural pessoa física é de **1,63%** da receita bruta da venda: 1,32% de previdência, 0,11% de RAT e 0,2% de Senar. O segurado especial segue com 1,5%. Numa venda de R$ 100.000, o desconto é de R$ 1.630. Em geral, quem compra desconta e recolhe.',
  tela: 'fluxo',
  atualizado: '2026-11-02',
  calc: {
    titulo: 'Calcule o Funrural da venda',
    campos: [
      { id: 'receita', rotulo: 'Receita bruta da venda (R$)', valor: 100000, min: 0, passo: 100 },
      { id: 'tipo', rotulo: 'Quem vende', valor: 1, opcoes: [[1, 'Produtor pessoa física (1,63%)'], [2, 'Segurado especial (1,5%)']] },
    ],
    saidas: [
      { id: 'total', rotulo: 'Funrural total da venda', casas: 2, prefixo: 'R$ ' },
      { id: 'prev', rotulo: 'previdência (1,32% ou 1,2%)', casas: 2, prefixo: 'R$ ' },
      { id: 'rat', rotulo: 'RAT (0,11% ou 0,1%)', casas: 2, prefixo: 'R$ ' },
      { id: 'senar', rotulo: 'Senar (0,2%)', casas: 2, prefixo: 'R$ ' },
    ],
    calcular: (v) => {
      const especial = Number(v.tipo) === 2;
      const prev = v.receita * (especial ? 0.012 : 0.0132);
      const rat = v.receita * (especial ? 0.001 : 0.0011);
      const senar = v.receita * 0.002;
      return { total: prev + rat + senar, prev, rat, senar };
    },
    nota: 'Alíquotas da Receita a partir da competência 04/2026. Segurado especial é o agricultor familiar que trabalha sem empregado permanente. Vale para quem NÃO optou pela folha de pagamento. Use a receita bruta da venda, sem descontar frete nem outras despesas. Venda de semente, muda ou animal para reprodução fica fora da base: tire esse valor antes de digitar.',
    exemplos: [
      { entrada: { receita: 100000, tipo: 1 }, saida: { total: 1630, prev: 1320, rat: 110, senar: 200 } },
      { entrada: { receita: 250000, tipo: 1 }, saida: { total: 4075, prev: 3300, rat: 275, senar: 500 } },
      { entrada: { receita: 100000, tipo: 2 }, saida: { total: 1500, prev: 1200, rat: 100, senar: 200 } },
    ],
  },
  secoes: [
    { h2: 'Valor do Funrural em 2026: o que mudou em abril', blocos: [
      { p: 'A partir da competência de abril de 2026, a Receita Federal passou a aplicar um acréscimo de 10% sobre a previdência e o seguro de acidente de trabalho do produtor rural pessoa física, por conta da Lei Complementar 224/2025. O Senar não mudou. Venda feita até março de 2026 segue a conta antiga, de 1,5%.' },
      { tabela: { colunas: ['Quem vende', 'Previdência', 'RAT', 'Total com Senar'], linhas: [['Produtor pessoa física, desde 04/2026', '1,32%', '0,11%', '1,63%'], ['Segurado especial', '1,2%', '0,1%', '1,5%'], ['Produtor pessoa física, até 03/2026', '1,2%', '0,1%', '1,5%'], ['Quem optou pela folha', 'na folha', 'na folha', '0,2% (só Senar)']], nota: 'Tabela da Receita Federal (EFD-Reinf, contribuições sobre a comercialização da produção rural), lida em 02/11/2026.' } },
      { p: 'Segurado especial é o agricultor familiar que trabalha com a família, sem empregado permanente. Na dúvida sobre o seu enquadramento, o contador ou o sindicato rural confirma.' },
    ] },
    { h2: 'O que é o Funrural e quanto custa', blocos: [
      { p: 'Funrural é o nome que o produtor deu à contribuição que incide sobre a venda da produção rural. Hoje ela se divide em três parcelas, todas calculadas sobre a **receita bruta da comercialização**: o valor da nota, antes de qualquer despesa.' },
      { tabela: { colunas: ['Parcela', 'Alíquota em 2026', 'Para quê'], linhas: [['Previdência', '1,32%', 'Seguridade Social (Lei 8.212, art. 25)'], ['Seguro de acidente (RAT)', '0,11%', 'Benefícios por acidente do trabalho'], ['Senar', '0,2%', 'Formação profissional rural (Lei 9.528, art. 6º)'], ['Total', '1,63%', 'sobre a receita bruta da venda']], nota: 'Produtor rural pessoa física que não optou pela folha, desde a competência 04/2026. A lei traz a base de 1,2% e 0,1%; o acréscimo de 10% é aplicado pela Receita.' } },
      { p: 'Conta de exemplo: o produtor vende 400 arrobas de boi a R$ 300 e fatura R$ 120.000. Previdência: R$ 1.584. RAT: R$ 132. Senar: R$ 240. Total: R$ 1.956. Se for segurado especial, o total fica em R$ 1.800.' },
      { p: 'O Funrural cai direto no resultado da fazenda. Lançar a venda pelo valor bruto e o desconto como despesa num [sistema de gestão rural](/software-de-gestao-rural) mostra quanto sobrou de fato em cada acerto com o comprador.' },
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
      { ul: ['A opção se faz pagando a contribuição da folha de janeiro, ou da primeira competência após o início da atividade rural.', 'Ela vale para o ano-calendário inteiro e **não pode ser desfeita** no meio do ano.', 'Quem opta deixa de pagar a previdência e o RAT sobre a venda e continua pagando os 0,2% do Senar.'] },
      { p: 'Para ter uma ideia, compare o que sairia dos dois lados. Uma fazenda que vende R$ 2.000.000 por ano paga R$ 32.600 de Funrural sobre a venda, com a alíquota de 1,63%. Se a folha anual for de R$ 100.000, os 20% dão R$ 20.000, mais o RAT e eventuais outras contribuições. Já uma fazenda com muita gente e venda pequena pode ter conta pior pela folha. Quem decide é o contador, com os números do ano.' },
    ] },
    { h2: 'Como conferir o desconto na nota', blocos: [
      { ol: ['Pegue o valor bruto da nota de venda.', 'Multiplique por 0,0163 para ter o total do Funrural (por 0,015 se você é segurado especial ou se a venda é de antes de abril de 2026).', 'Compare com o desconto que o comprador fez no acerto. Diferença pequena pode vir de arredondamento ou de venda para reprodução.', 'Guarde o demonstrativo do comprador junto da nota: ele prova o recolhimento.'] },
      { destaque: 'Este texto é informativo e não substitui o contador. Alíquota, prazo e opção pela folha podem mudar por lei nova e dependem do seu caso: confirme antes de decidir.' },
    ] },
  ],
  noFinagro: { h2: 'O Funrural no controle da fazenda', itens: [
    'A venda entra como receita e o desconto do Funrural como despesa, para o fluxo de caixa mostrar o que entrou de verdade.',
    'Contas a pagar e a receber guardam a data do acerto com o comprador e o saldo previsto do mês.',
    'Relatórios em PDF e em planilha (CSV) levam receitas e despesas organizadas para o contador.',
    'O app não calcula, não desconta e não recolhe o Funrural, e não transmite nada à Receita: a conta desta página é só para você conferir a nota.',
  ] },
  cta: { forte: 'Venda, desconto e saldo do mês no mesmo lugar.', texto: 'Grátis para sempre, sem cartão: vendas, receitas e despesas sem limite.' },
  faqTitulo: 'Perguntas sobre Funrural',
  faq: [
    ['Qual a alíquota do Funrural para pessoa física em 2026?', 'Desde a competência de abril de 2026, são 1,63% da receita bruta da venda: 1,32% de previdência, 0,11% de seguro de acidente de trabalho e 0,2% do Senar. O segurado especial paga 1,5%. Venda até março de 2026 segue em 1,5%.'],
    ['Como calcular o Funrural de uma venda?', 'Multiplique o valor bruto da nota por 0,0163. Numa venda de R$ 50.000, o desconto é de R$ 815. Para o segurado especial, multiplique por 0,015, o que dá R$ 750.'],
    ['Quem recolhe o Funrural, o produtor ou o comprador?', 'Quando o comprador é empresa ou cooperativa, ele desconta e recolhe. Se você vende ao exterior, a outro produtor pessoa física ou direto ao consumidor, o recolhimento é seu.'],
    ['Posso pagar o Funrural sobre a folha de pagamento?', 'Pode. O produtor pessoa física escolhe pagando a contribuição da folha de janeiro. A escolha vale o ano inteiro e não pode ser desfeita. Peça ao contador para comparar as duas contas.'],
    ['Venda de animal para reprodução paga Funrural?', 'A lei deixa fora da base o produto animal destinado à reprodução ou criação, quando vendido pelo próprio produtor. Separe essa nota das demais.'],
  ],
  fontes: [
    { nome: 'Receita Federal: contribuições sobre a comercialização da produção rural (EFD-Reinf)', url: 'https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/perguntas-frequentes/sped/efd-reinf/efdr/2-eventos-da-efd-reinf/2-6-2-quais-contribuicoes-sao' },
    { nome: 'Lei 8.212/1991, art. 22, 25 e 30 (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm' },
    { nome: 'Lei 9.528/1997, art. 6º, contribuição ao Senar (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l9528.htm' },
    { nome: 'Lei 13.606/2018, opção pela folha de pagamento (Planalto)', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13606.htm' },
  ],
  relacionados: ['fluxo-de-caixa-rural', 'imposto-de-renda-produtor-rural', 'nota-fiscal-de-produtor-rural'],
};
