// Guia de produtividade agrícola. Consulta-alvo: "sacas por hectare", "como calcular sacas por hectare",
// "produtividade por hectare" e "kg por hectare em sacas" (colheita de 08/10/2026).
export const provas = [
  { afirmacao: 'a Conab usa a unidade de 60 kg para a soja', trecho: 'Soja Brasil - 60 kg 43,28 45,24 4,53% Jan/2021 a Dez/2021', url: 'https://biblioteca.conab.gov.br/phl82/pdf/legislacao/2020_PRT_190.pdf' },
  { afirmacao: 'a Conab usa a unidade de 60 kg para o milho', trecho: 'Milho Centro-Oeste (exceto MT), Sudeste e Sul Único 60 kg 24,51 26,28 7,22%', url: 'https://biblioteca.conab.gov.br/phl82/pdf/legislacao/2020_PRT_190.pdf' },
  { afirmacao: 'a Conab usa a unidade de 50 kg para o arroz longo fino em casca no Sul, exceto Paraná', trecho: 'Arroz longo fino em casca Sul (exceto PR) Tipo 1-58/10 50 kg 39,63 40,18 1,39%', url: 'https://biblioteca.conab.gov.br/phl82/pdf/legislacao/2020_PRT_190.pdf' },
  { afirmacao: 'descontos de armazenagem consideram impureza, umidade e quebra técnica', trecho: 'cálculo dos descontos de armazenagem na entrega do produto ao agente armazenador, considerando impureza, umidade e quebra técnica', url: 'https://www.gov.br/pt-br/servicos/consultar-descontos-de-armazenagem?id=23102&origem=servico' },
];

export default {
  slug: 'produtividade-em-sacas-por-hectare',
  grupo: 'lavoura',
  tipo: 'calculadora',
  curto: 'Sacas por hectare',
  resumo: 'Passe a colheita em kg para sacas por hectare.',
  title: 'Sacas por hectare: calcule a produtividade da lavoura',
  description: 'Calcule sacas por hectare com a produção em kg, a área colhida e o peso da saca. Veja também kg por hectare e toneladas por hectare.',
  h1: 'Sacas por hectare: calcule a produtividade da sua lavoura',
  pergunta: 'Como calcular sacas por hectare?',
  resposta: 'Divida os quilos colhidos pelo peso da saca e depois pela área colhida. Se um talhão entregou 180.000 kg em 50 hectares e a saca tem 60 kg, a produtividade foi de 60 sacas por hectare. A mesma colheita corresponde a 3.600 kg por hectare ou 3,6 toneladas por hectare.',
  tela: 'producao',
  atualizado: '2026-10-08',
  calc: {
    titulo: 'Calcule a produtividade por hectare',
    campos: [
      { id: 'producao', rotulo: 'Produção colhida (kg)', valor: 180000, min: 0, passo: 1 },
      { id: 'area', rotulo: 'Área colhida (ha)', valor: 50, min: 0.01, passo: 0.01 },
      { id: 'pesoSaca', rotulo: 'Peso da saca', valor: '60', opcoes: [['60', '60 kg: soja e milho'], ['50', '50 kg: arroz no Sul']] },
    ],
    saidas: [
      { id: 'sacasHa', rotulo: 'sacas por hectare', casas: 2 },
      { id: 'kgHa', rotulo: 'kg por hectare', casas: 2 },
      { id: 'tonHa', rotulo: 'toneladas por hectare', casas: 2 },
    ],
    calcular: (v) => {
      const kgHa = v.producao / v.area;
      return { sacasHa: kgHa / v.pesoSaca, kgHa, tonHa: kgHa / 1000 };
    },
    nota: 'A conta usa o peso da saca escolhido. A fonte da Conab registra soja e milho em 60 kg e arroz longo fino em casca no Sul, exceto Paraná, em 50 kg. Confirme a unidade do seu produto no romaneio de pesagem.',
    exemplos: [
      { entrada: { producao: 180000, area: 50, pesoSaca: 60 }, saida: { sacasHa: 60, kgHa: 3600, tonHa: 3.6 } },
      { entrada: { producao: 125000, area: 50, pesoSaca: 50 }, saida: { sacasHa: 50, kgHa: 2500, tonHa: 2.5 } },
    ],
  },
  secoes: [
    { h2: 'A conta de sacas por hectare', blocos: [
      { p: 'Produtividade mostra quanto saiu de cada hectare que realmente entrou na colheita. Para passar a produção para sacas por hectare, faça duas divisões: **quilos colhidos ÷ peso da saca ÷ hectares colhidos**. Também dá para dividir primeiro pela área e depois pelo peso da saca. O resultado é o mesmo.' },
      { ol: ['Some o peso líquido de todas as cargas daquele talhão.', 'Divida pelo peso da saca usado na venda.', 'Divida o total de sacas pela área que foi colhida.'] },
      { p: 'Exemplo ilustrativo: 180.000 kg ÷ 60 kg = 3.000 sacas. Depois, 3.000 sacas ÷ 50 ha = 60 sacas por hectare. Se apenas 45 ha foram colhidos, use 45 na conta. Colocar a área plantada inteira quando uma parte não chegou à colheita mistura duas perguntas diferentes e esconde o rendimento da área efetivamente colhida.' },
    ] },
    { h2: 'Como passar kg por hectare para sacas', blocos: [
      { p: 'Se o relatório já mostra kg por hectare, basta dividir esse número pelo peso de uma saca. Com 3.600 kg/ha e saca de 60 kg: 3.600 ÷ 60 = 60 sacas/ha. Para passar de kg/ha para toneladas/ha, divida por 1.000. Assim, 3.600 kg/ha viram 3,6 t/ha.' },
      { tabela: { colunas: ['Produção', 'Área', 'Peso da saca', 'Resultado'], linhas: [['180.000 kg', '50 ha', '60 kg', '60 sc/ha'], ['90.000 kg', '30 ha', '60 kg', '50 sc/ha'], ['125.000 kg', '50 ha', '50 kg', '50 sc/ha']], nota: 'Exemplos apenas para mostrar a aritmética. Troque pelos números do seu romaneio e pela área colhida.' } },
      { destaque: 'O peso da saca não entra na conta por costume. Confira a unidade usada no contrato, no romaneio e na nota da sua venda.' },
    ] },
    { h2: 'Quantos kg tem uma saca de soja ou milho', blocos: [
      { p: 'Para soja e milho, use **60 kg** quando essa for a unidade do seu negócio. A referência aparece em documento oficial da Conab: soja para o Brasil em unidade de 60 kg e milho em unidade de 60 kg. Essa escolha muda só a conversão de quilos para sacas. Os kg/ha e as toneladas/ha continuam iguais.' },
      { p: 'O arroz exige atenção à praça. O mesmo documento da Conab usa 50 kg para arroz longo fino em casca no Sul, exceto Paraná. Por isso a calculadora também oferece 50 kg. Para outro produto, outra região ou outro padrão de compra, faça a conta com o peso que aparece no documento da venda.' },
      { glossario: [['kg/ha', 'Quilos colhidos divididos pela área colhida em hectares.'], ['sc/ha', 'Sacas colhidas divididas pela área colhida em hectares.'], ['t/ha', 'Toneladas colhidas divididas pela área colhida em hectares.'], ['Peso da saca', 'Quantidade de quilos usada para converter o peso da carga em sacas.']] },
    ] },
    { h2: 'Umidade e desconto na balança', blocos: [
      { p: 'A carga que chega à unidade armazenadora pode não ser o peso que fecha a venda. O serviço federal de descontos de armazenagem informa que a conta pode considerar **impureza, umidade e quebra técnica**. A recepção tira uma amostra para medir impureza e umidade, e a limpeza e a secagem podem reduzir o peso contabilizado.' },
      { p: 'Para medir a produtividade vendável, prefira o **peso líquido aceito** no romaneio, depois dos descontos aplicados pela unidade. Guarde também o peso bruto e o comprovante da classificação. Não aplique um percentual de cabeça: confira a regra do armazém, da cooperativa ou do comprador antes de comparar talhões e safras.' },
      { ul: ['Some cargas do mesmo talhão e da mesma colheita.', 'Não misture peso bruto de uma carga com peso líquido de outra.', 'Anote a unidade da saca ao lado do resultado.', 'Compare safras usando o mesmo critério de peso e área.'] },
    ] },
    { h2: 'O que o número mostra na decisão', blocos: [
      { p: 'Sacas por hectare mostram rendimento físico. O número sozinho não diz se a lavoura deu dinheiro. Um talhão pode colher mais e ainda custar mais por saca. Para fechar a decisão, coloque o rendimento ao lado do [custo de produção por hectare](/custo-de-producao-por-hectare) e do preço recebido.' },
      { p: 'O [caderno de campo](/caderno-de-campo) ajuda a separar o que foi feito em cada talhão: plantio, adubação, aplicação, operação de máquina e colheita. O [fluxo de caixa rural](/fluxo-de-caixa-rural) guarda quando a venda entrou e quando as despesas saíram. Assim, produtividade, custo e caixa não viram um número só.' },
      { p: 'Compare talhão com talhão antes de olhar apenas a média da fazenda. A média pode esconder uma área que colheu bem e outra que derrubou o resultado. Use a mesma unidade, o peso líquido e a área colhida em todas as linhas da comparação.' },
    ] },
  ],
  noFinagro: { h2: 'A safra e a colheita no FINAGRO', itens: [
    'Crie a safra e separe a lavoura por talhão para acompanhar cada área.',
    'Registre no caderno de campo as operações e os custos da safra.',
    'Anote a colheita com a quantidade e o comprador.',
    'Veja o custo por hectare junto dos registros da lavoura.',
  ] },
  cta: { forte: 'Talhão, colheita e custo por hectare no mesmo lugar.', texto: 'Use no Android ou no navegador. O plano Campo é grátis e não pede cartão.' },
  faqTitulo: 'Perguntas sobre sacas por hectare',
  faq: [
    ['Como calcular sacas por hectare?', 'Divida os quilos colhidos pelo peso da saca e depois pela área colhida. Exemplo: 180.000 kg divididos por 60 kg e por 50 ha resultam em 60 sacas por hectare.'],
    ['Quantos kg tem uma saca de soja?', 'A referência usada pela Conab para soja é a unidade de 60 kg. Antes de fechar a conta, confirme se o seu contrato e o seu romaneio usam a mesma unidade.'],
    ['Quantos kg tem uma saca de milho?', 'A Conab registra o milho em unidade de 60 kg. Use esse peso na calculadora quando ele for o mesmo adotado pelo comprador da sua produção.'],
    ['Como transformar kg por hectare em sacas por hectare?', 'Divida os kg por hectare pelo peso da saca. Se o resultado é 3.000 kg por hectare e a saca tem 60 kg, a produtividade é 50 sacas por hectare.'],
    ['Uso o peso bruto ou o peso depois do desconto?', 'Para representar o volume aceito na venda, use o peso líquido do romaneio. Guarde o bruto para conferir quanto saiu em umidade, impureza e outros descontos previstos pelo armazém ou comprador.'],
  ],
  fontes: [
    { nome: 'Conab, Portaria nº 190 de 10 de junho de 2020, unidades de soja, milho e arroz', url: 'https://biblioteca.conab.gov.br/phl82/pdf/legislacao/2020_PRT_190.pdf' },
    { nome: 'Governo Federal e Conab, serviço Descontos de Armazenagem', url: 'https://www.gov.br/pt-br/servicos/consultar-descontos-de-armazenagem?id=23102&origem=servico' },
  ],
  relacionados: ['custo-de-producao-por-hectare', 'caderno-de-campo', 'fluxo-de-caixa-rural'],
};
