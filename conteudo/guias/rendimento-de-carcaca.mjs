// Consultas-alvo: "rendimento de carcaça" e "rendimento de carcaça bovina".
export const provas = [
  { afirmacao: 'o rendimento divide o peso da carcaça pelo peso vivo', trecho: 'O rendimento é calculado dividindo-se o peso da carcaça (soma das duas meias carcaças resultantes do abate) pelo peso vivo do animal', url: 'https://cloud.cnpgc.embrapa.br/sac/2012/07/19/449-qual-e-a-forma-correta-de-calcular-o-rendimento-de-carcaca/' },
  { afirmacao: 'o resultado da divisão é multiplicado por 100', trecho: 'Multiplicando-se o resultado dessa divisão por 100, teremos o rendimento expresso em porcentagem', url: 'https://cloud.cnpgc.embrapa.br/sac/2012/07/19/449-qual-e-a-forma-correta-de-calcular-o-rendimento-de-carcaca/' },
  { afirmacao: 'o peso vivo de referência deve ser tomado depois de cerca de 12 horas apenas com dieta líquida', trecho: 'o ideal é usar o peso obtido após o animal ficar cerca de 12 horas recebendo apenas dieta líquida', url: 'https://cloud.cnpgc.embrapa.br/sac/2012/07/19/449-qual-e-a-forma-correta-de-calcular-o-rendimento-de-carcaca/' },
  { afirmacao: 'carcaça reúne músculos e ossos, sem cabeça, órgãos e vísceras', trecho: 'carcaças são as massas musculares e os ossos do animal abatido, tecnicamente preparado, desprovido de cabeça, órgãos e vísceras torácicas e abdominais', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/decreto/d9013.htm' },
  { afirmacao: 'a carcaça bovina não inclui pele, patas e outras partes listadas', trecho: 'nos bovinos, nos búfalos e nos equídeos a carcaça não inclui pele, patas, rabo, glândula mamária, testículos e vergalho, exceto suas raízes', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/decreto/d9013.htm' },
  { afirmacao: 'a arroba comercial de carcaça é arredondada para 15 kg', trecho: 'Equivale a 14,788 kg, mas habitualmente é arredondada para 15 kg', url: 'https://cloud.cnpgc.embrapa.br/sac/2012/07/19/454-quais-sao-as-diferencas-entre-peso-expresso-em-quilogramas-e-peso-em-arrobas/' },
];

export default {
  slug: 'rendimento-de-carcaca',
  grupo: 'corte',
  tipo: 'calculadora',
  curto: 'Rendimento de carcaça',
  resumo: 'Peso vivo e carcaça viram rendimento e arrobas.',
  title: 'Rendimento de carcaça bovina: calcule a porcentagem',
  description: 'Calcule o rendimento de carcaça bovina pelo peso vivo e pelo peso da carcaça, veja as arrobas e entenda a diferença entre estimativa e acerto.',
  h1: 'Rendimento de carcaça bovina: faça a conta sem confundir os pesos',
  pergunta: 'Como calcular o rendimento de carcaça bovina?',
  resposta: 'Divida o peso da carcaça pelo peso vivo usado no acerto e multiplique por 100. Se o boi pesou 480 kg depois do jejum e a carcaça marcou 265 kg, o rendimento foi 55,21%. Essa conta usa o peso real da carcaça; antes do abate, qualquer porcentagem aplicada na fazenda é estimativa.',
  tela: 'animais',
  atualizado: '2026-10-08',
  calc: {
    titulo: 'Calcule o rendimento e as arrobas',
    campos: [
      { id: 'pesoVivo', rotulo: 'Peso vivo (kg)', valor: 480, min: 1, passo: 1 },
      { id: 'pesoCarcaca', rotulo: 'Peso da carcaça (kg)', valor: 265, min: 0, passo: 1 },
    ],
    saidas: [
      { id: 'rendimento', rotulo: 'rendimento de carcaça', casas: 2, sufixo: '%' },
      { id: 'arrobas', rotulo: 'arrobas de carcaça', casas: 2 },
    ],
    calcular: (v) => ({ rendimento: v.pesoCarcaca / v.pesoVivo * 100, arrobas: v.pesoCarcaca / 15 }),
    nota: 'Use o peso vivo comparável ao do acerto e o peso real da carcaça. Uma arroba de carcaça corresponde a 15 kg.',
    exemplos: [
      { entrada: { pesoVivo: 480, pesoCarcaca: 265 }, saida: { rendimento: 55.21, arrobas: 17.67 } },
      { entrada: { pesoVivo: 540, pesoCarcaca: 280 }, saida: { rendimento: 51.85, arrobas: 18.67 } },
    ],
  },
  secoes: [
    { h2: 'A conta do rendimento de carcaça', blocos: [
      { p: 'A fórmula é direta: **peso da carcaça ÷ peso vivo × 100**. O peso da carcaça é a soma das duas meias carcaças resultantes do abate. O peso vivo precisa representar o animal na condição combinada para o acerto.' },
      { ol: ['Anote o peso vivo usado como base. No exemplo, 480 kg.', 'Anote o peso das duas meias carcaças somadas. No exemplo, 265 kg.', 'Divida 265 por 480 e multiplique por 100. O resultado é 55,21%.', 'Para passar a carcaça para arrobas, divida 265 por 15. O resultado é 17,67 arrobas.'] },
      { destaque: 'Rendimento é porcentagem. Arroba é peso de carcaça. Guarde os dois números separados.' },
    ] },
    { h2: 'O que entra e o que fica fora da carcaça', blocos: [
      { p: 'A definição oficial considera carcaça as massas musculares e os ossos do animal abatido e preparado. Cabeça, órgãos e vísceras torácicas e abdominais ficam fora. Para bovinos, a regra também exclui pele, patas, rabo, glândula mamária, testículos e vergalho, salvo as raízes indicadas no decreto.' },
      { p: 'Por isso, **peso de carcaça não é peso de carne limpa**. A carcaça ainda tem ossos e outras partes. O rendimento da desossa responde a outra pergunta e não deve ser usado no lugar do rendimento de carcaça.' },
      { tabela: { colunas: ['Medida', 'O que representa', 'Uso'], linhas: [['Peso vivo', 'Animal antes do abate', 'Base da divisão'], ['Peso da carcaça', 'Duas meias carcaças', 'Numerador'], ['Rendimento', 'Carcaça sobre peso vivo', 'Comparar o resultado'], ['Arrobas', 'Carcaça dividida por 15', 'Negociação']], nota: 'Conceito de carcaça conforme o Decreto nº 9.013 e fórmula conforme a Embrapa Gado de Corte.' } },
    ] },
    { h2: 'Por que o jejum muda o resultado', blocos: [
      { p: 'O conteúdo do rúmen e do restante do aparelho digestivo aumenta o peso vivo, mas não vira carcaça. Água e alimento recentes também mudam a balança. Se o denominador sobe e o peso da carcaça continua igual, a porcentagem calculada cai.' },
      { p: 'A Embrapa orienta que o ideal é usar o peso obtido depois de cerca de 12 horas recebendo apenas dieta líquida. Isso torna a comparação mais justa. Não faça jejum por conta própria: o manejo precisa respeitar bem-estar, transporte, orientação veterinária e o procedimento do comprador.' },
      { p: 'Anote junto da pesagem a data, o local e a condição do animal. Um peso tirado na fazenda de barriga cheia e outro tirado no frigorífico após viagem e espera não são a mesma base. Misturar os dois produz um rendimento aparente que não descreve somente a carcaça.' },
    ] },
    { h2: 'Estimativa na fazenda e rendimento do frigorífico', blocos: [
      { p: 'Antes do abate, a fazenda conhece o peso vivo, mas ainda não conhece o peso da carcaça. Para estimar arrobas, é preciso aplicar um rendimento esperado. Esse número deve vir do histórico do próprio lote, de animais parecidos e dos romaneios anteriores, não de uma porcentagem tratada como garantia.' },
      { p: 'Depois do abate, o cálculo troca a expectativa pelo peso registrado da carcaça. É esse par de números, peso vivo de referência e peso de carcaça, que fecha o rendimento observado. Peça o romaneio e confira qual peso vivo e qual peso de carcaça entraram no acerto.' },
      { p: 'A diferença entre estimativa e resultado pode vir da condição de pesagem, do enchimento do animal, do transporte e das características do gado. Raça, sexo, idade e estado corporal também aparecem na explicação técnica da Embrapa, mas nenhum percentual único substitui o histórico da fazenda.' },
    ] },
    { h2: 'Como usar o número na próxima venda', blocos: [
      { ul: ['Separe os lotes por categoria e mantenha pesagens comparáveis.', 'Guarde o peso vivo usado na negociação e o peso de carcaça do romaneio.', 'Calcule o rendimento de cada lote, não apenas a média de toda a carga.', 'Compare animais semelhantes e a mesma condição de pesagem.', 'Use o resultado anterior como referência, nunca como promessa para o próximo lote.'] },
      { p: 'Se houver diferença grande, volte aos dados antes de culpar a conta. Confira identificação, número de cabeças, unidades, soma das meias carcaças e base do peso vivo. Um erro de digitação em quilogramas se espalha para a porcentagem e para as arrobas.' },
    ] },
  ],
  noFinagro: { h2: 'Pesagem e venda organizadas no FINAGRO', itens: [
    'Cada animal tem ficha com brinco, raça, sexo, nascimento, peso e foto.',
    'As pesagens ficam no histórico, e o aplicativo calcula o ganho entre elas.',
    'Os lotes reúnem as cabeças para acompanhar o gado separado no manejo.',
    'A venda pode entrar como receita e conta a receber no fluxo de caixa.',
  ] },
  cta: { forte: 'Leve o peso do curral ao acerto sem perder o histórico.', texto: 'FINAGRO grátis, sem cartão, para até 1.000 animais com ficha.' },
  faqTitulo: 'Perguntas sobre rendimento de carcaça',
  faq: [
    ['Qual é a fórmula do rendimento de carcaça?', 'Divida o peso da carcaça pelo peso vivo de referência e multiplique o resultado por 100.'],
    ['Como transformar a carcaça em arrobas?', 'Divida o peso da carcaça em quilogramas por 15. Uma carcaça de 270 kg corresponde a 18 arrobas.'],
    ['Peso de carcaça é o mesmo que peso de carne?', 'Não. A carcaça inclui massas musculares e ossos, enquanto a carne obtida depois da desossa é outra medida.'],
    ['Por que pesar depois do jejum?', 'Porque o conteúdo gastrointestinal altera o peso vivo. A Embrapa recomenda como referência o peso depois de cerca de 12 horas apenas com dieta líquida.'],
    ['A estimativa da fazenda é igual ao acerto do frigorífico?', 'Não. Na fazenda, o peso de carcaça ainda é estimado. Depois do abate, o rendimento pode ser calculado com o peso registrado da carcaça.'],
  ],
  fontes: [
    { nome: 'Embrapa Gado de Corte, forma correta de calcular o rendimento de carcaça', url: 'https://cloud.cnpgc.embrapa.br/sac/2012/07/19/449-qual-e-a-forma-correta-de-calcular-o-rendimento-de-carcaca/' },
    { nome: 'Decreto nº 9.013, definição de carcaça', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/decreto/d9013.htm' },
    { nome: 'Embrapa Gado de Corte, quilogramas e arrobas', url: 'https://cloud.cnpgc.embrapa.br/sac/2012/07/19/454-quais-sao-as-diferencas-entre-peso-expresso-em-quilogramas-e-peso-em-arrobas/' },
  ],
  relacionados: ['calculadora-de-arroba', 'calculadora-gmd', 'peso-do-boi-pela-fita'],
};
