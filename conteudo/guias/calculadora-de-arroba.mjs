// Guia de referência do formato (conteudo/guias/LEIA.md). Consulta-alvo: "calculadora de arroba", "quanto vale uma
// arroba", "quanto vale uma arroba em kg" (colheita de 08/10/2026).
export const provas = [
  { afirmacao: 'a arroba equivale a 14,788 kg e é arredondada para 15 kg', trecho: 'Equivale a 14,788 kg, mas habitualmente é arredondada para 15 kg', url: 'https://cloud.cnpgc.embrapa.br/sac/2012/07/19/454-quais-sao-as-diferencas-entre-peso-expresso-em-quilogramas-e-peso-em-arrobas/' },
  { afirmacao: 'a arroba expressa o peso de carcaça em quase todo o Brasil, menos no Rio Grande do Sul', trecho: 'para expressar o peso de carcaça dos bovinos, com exceção do Rio Grande do Sul, que usa o quilograma', url: 'https://cloud.cnpgc.embrapa.br/sac/2012/07/19/454-quais-sao-as-diferencas-entre-peso-expresso-em-quilogramas-e-peso-em-arrobas/' },
  { afirmacao: 'boi com carcaça de 18 arrobas e 53% de rendimento pesa 509 kg vivo', trecho: 'o peso vivo de um boi com carcaça de 18 @ e rendimento de 53% é 509 kg', url: 'https://cloud.cnpgc.embrapa.br/sac/2012/07/19/454-quais-sao-as-diferencas-entre-peso-expresso-em-quilogramas-e-peso-em-arrobas/' },
  { afirmacao: 'o rendimento é o peso da carcaça dividido pelo peso vivo, de preferência depois de 12 horas de dieta líquida', trecho: 'o ideal é usar o peso obtido após o animal ficar cerca de 12 horas recebendo apenas dieta líquida', url: 'https://cloud.cnpgc.embrapa.br/sac/2012/07/19/449-qual-e-a-forma-correta-de-calcular-o-rendimento-de-carcaca/' },
  { afirmacao: 'boi de 480 kg com carcaça de 265 kg rende 55,2%', trecho: 'um boi cujo peso vivo pós-jejum era 480 kg e cuja carcaça pesou 265 kg, apresentou rendimento de carcaça de 55,2%', url: 'https://cloud.cnpgc.embrapa.br/sac/2012/07/19/449-qual-e-a-forma-correta-de-calcular-o-rendimento-de-carcaca/' },
  { afirmacao: 'o indicador do boi gordo do Cepea é por arroba de 15 kg, sem Funrural', trecho: 'Valor à vista por arroba de 15 kg, sem Funrural (preço "livre")', url: 'https://www.cepea.org.br/br/indicador/boi-gordo.aspx' },
];

export default {
  slug: 'calculadora-de-arroba',
  grupo: 'corte',
  tipo: 'calculadora',
  curto: 'Calculadora de arroba',
  resumo: 'Peso vivo em arrobas e o valor do boi, na hora.',
  title: 'Calculadora de arroba do boi: peso vivo em @ e valor',
  description: 'Calculadora de arroba: digite o peso vivo, o rendimento de carcaça e o preço da arroba e veja quantas arrobas o boi tem e quanto vale o lote.',
  h1: 'Calculadora de arroba: quantas arrobas tem o seu boi e quanto ele vale',
  pergunta: 'Quantos quilos tem uma arroba de boi?',
  resposta: 'Uma arroba de boi tem 15 kg de carcaça. Para saber quantas arrobas o animal tem, multiplique o peso vivo pelo rendimento de carcaça e divida por 15. Um boi de 480 kg com 52% de rendimento tem 16,64 arrobas. Com a arroba a R$ 300, ele vale R$ 4.992.',
  tela: 'lotes',
  atualizado: '2026-10-08',
  calc: {
    titulo: 'Calcule as arrobas e o valor',
    campos: [
      { id: 'peso', rotulo: 'Peso vivo por cabeça (kg)', valor: 480, min: 0, passo: 1 },
      { id: 'rend', rotulo: 'Rendimento de carcaça (%)', valor: 52, min: 1, max: 100, passo: 0.5 },
      { id: 'preco', rotulo: 'Preço da arroba (R$)', valor: 300, min: 0, passo: 1 },
      { id: 'cabecas', rotulo: 'Cabeças no lote', valor: 30, min: 1, passo: 1 },
    ],
    saidas: [
      { id: 'arrobas', rotulo: 'arrobas por cabeça', casas: 2 },
      { id: 'valor', rotulo: 'valor por cabeça', casas: 2, prefixo: 'R$ ' },
      { id: 'lote', rotulo: 'valor do lote', casas: 2, prefixo: 'R$ ' },
    ],
    calcular: (v) => {
      const arrobas = (v.peso * v.rend / 100) / 15;
      return { arrobas, valor: arrobas * v.preco, lote: arrobas * v.preco * v.cabecas };
    },
    nota: 'Arroba de carcaça = 15 kg. O rendimento de 52% e o preço de R$ 300 são só o ponto de partida: troque pelo rendimento que o seu frigorífico vem pagando e pela cotação do dia na sua praça.',
    exemplos: [
      { entrada: { peso: 480, rend: 52, preco: 300, cabecas: 1 }, saida: { arrobas: 16.64, valor: 4992, lote: 4992 } },
      { entrada: { peso: 509, rend: 53, preco: 310, cabecas: 10 }, saida: { arrobas: 17.98, valor: 5575.25, lote: 55752.47 } },
    ],
  },
  secoes: [
    { h2: 'Quantos quilos tem uma arroba', blocos: [
      { p: 'A arroba é uma medida antiga de peso que o Brasil continua usando para negociar gado, cacau e algodão. Segundo a Embrapa Gado de Corte, ela equivale a 14,788 kg e, no comércio, é arredondada para **15 kg**.' },
      { p: 'No boi, a arroba mede o peso da **carcaça**, não o do animal em pé. É assim em quase todo o país. A exceção é o Rio Grande do Sul, onde o gado é negociado por quilo.' },
      { tabela: { colunas: ['Arrobas', 'Quilos de carcaça'], linhas: [['1 @', '15 kg'], ['10 @', '150 kg'], ['16 @', '240 kg'], ['18 @', '270 kg'], ['20 @', '300 kg']], nota: 'Arroba de carcaça arredondada para 15 kg (Embrapa Gado de Corte).' } },
    ] },
    { h2: 'Como passar o peso vivo para arrobas', blocos: [
      { ol: ['Pese o animal ou tire a média do lote na balança.', 'Multiplique o peso vivo pelo rendimento de carcaça. Com 480 kg e 52%: 480 × 0,52 = 249,6 kg de carcaça.', 'Divida por 15. 249,6 ÷ 15 = 16,64 arrobas.'] },
      { p: 'A conta também anda para trás. A Embrapa dá o exemplo: um boi com carcaça de 18 arrobas e rendimento de 53% pesa 509 kg vivo, porque 18 × 15 = 270 kg e 270 ÷ 0,53 = 509 kg.' },
      { tabela: { colunas: ['Peso vivo', 'Com 50%', 'Com 52%', 'Com 54%'], linhas: [['400 kg', '13,33 @', '13,87 @', '14,40 @'], ['450 kg', '15,00 @', '15,60 @', '16,20 @'], ['480 kg', '16,00 @', '16,64 @', '17,28 @'], ['500 kg', '16,67 @', '17,33 @', '18,00 @'], ['540 kg', '18,00 @', '18,72 @', '19,44 @']], nota: 'Arrobas de carcaça para cada rendimento. Conta: peso vivo × rendimento ÷ 15.' } },
    ] },
    { h2: 'O rendimento de carcaça muda a conta', blocos: [
      { p: 'Rendimento de carcaça é o peso da carcaça dividido pelo peso vivo, vezes 100. No exemplo da Embrapa, um boi de 480 kg depois do jejum, com carcaça de 265 kg, rendeu 55,2%.' },
      { p: 'O peso vivo sobe e desce com o que o animal comeu e bebeu. Por isso a Embrapa recomenda usar o peso tirado depois de cerca de 12 horas só com dieta líquida. Pesar de barriga cheia infla o peso vivo e derruba o rendimento na conta.' },
      { p: 'Dois pontos de rendimento mudam o lote inteiro: em 30 bois de 480 kg, sair de 52% para 54% são 19,2 arrobas a mais. Veja como chegar ao seu número em [rendimento de carcaça](/rendimento-de-carcaca).' },
    ] },
    { h2: 'Dividir o peso vivo por 30 funciona?', blocos: [
      { p: 'Muita gente faz a conta de cabeça dividindo o peso vivo por 30. Isso é o mesmo que supor 50% de rendimento: um boi de 450 kg dá 15 arrobas nas duas contas.' },
      { p: 'Serve para uma estimativa rápida no curral. Para fechar negócio, use o rendimento que o frigorífico vem pagando no seu gado. Com 54%, o mesmo boi de 450 kg tem 16,2 arrobas, mais de uma arroba de diferença por cabeça.' },
    ] },
    { h2: 'Quanto vale o boi e quanto vale o lote', blocos: [
      { p: 'Com as arrobas na mão, o valor é multiplicação: arrobas × preço da arroba. Para o lote, multiplique pelo número de cabeças ou some o peso de todos e faça a conta uma vez só.' },
      { p: 'Confira sempre de que preço se está falando. O indicador do boi gordo do Cepea, por exemplo, é publicado como valor à vista por arroba de 15 kg, sem Funrural. Preço a prazo e desconto do [Funrural](/funrural) mudam o que entra no caixa.' },
      { destaque: 'A calculadora faz a conta. O rendimento e o preço quem dá é o mercado: combine os dois com o comprador antes de embarcar.' },
    ] },
  ],
  noFinagro: { h2: 'O peso e a venda no FINAGRO', itens: [
    'Cada pesagem lançada fica na ficha do animal, e o app mostra o ganho entre uma pesagem e a outra.',
    'A tela de lotes mostra as cabeças e o peso bruto de cada lote, para a conta partir do peso certo.',
    'A cotação do boi gordo publicada pela CONAB aparece dentro do app.',
    'A venda entra como receita e cai no fluxo de caixa da fazenda, junto com as contas a receber.',
  ] },
  cta: { forte: 'Pesagem anotada, ganho calculado e lote somado no celular.', texto: 'Grátis até 1.000 animais com ficha, com lote sem limite de cabeças.' },
  faqTitulo: 'Perguntas sobre arroba',
  faq: [
    ['Quantos kg tem uma arroba de boi?', 'Tem 15 kg de carcaça. A medida antiga equivale a 14,788 kg e é arredondada para 15 kg no comércio de gado.'],
    ['Como calcular a arroba pelo peso vivo?', 'Multiplique o peso vivo pelo rendimento de carcaça e divida por 15. Com 500 kg e 52% de rendimento: 500 × 0,52 ÷ 15 = 17,33 arrobas.'],
    ['Por que tem gente que divide o peso vivo por 30?', 'Dividir por 30 é o mesmo que usar 50% de rendimento. Serve para uma estimativa rápida, mas erra quando o lote rende mais ou menos do que isso.'],
    ['A arroba da vaca é a mesma do boi?', 'A arroba tem os mesmos 15 kg. O que muda é o rendimento de carcaça de cada animal e o preço por arroba, que é negociado por categoria.'],
    ['No Rio Grande do Sul também se vende por arroba?', 'Segundo a Embrapa Gado de Corte, a arroba é usada nas diversas regiões do Brasil para o peso de carcaça dos bovinos, com exceção do Rio Grande do Sul, que usa o quilograma.'],
  ],
  fontes: [
    { nome: 'Embrapa Gado de Corte, diferenças entre peso em quilogramas e em arrobas', url: 'https://cloud.cnpgc.embrapa.br/sac/2012/07/19/454-quais-sao-as-diferencas-entre-peso-expresso-em-quilogramas-e-peso-em-arrobas/' },
    { nome: 'Embrapa Gado de Corte, como calcular o rendimento de carcaça', url: 'https://cloud.cnpgc.embrapa.br/sac/2012/07/19/449-qual-e-a-forma-correta-de-calcular-o-rendimento-de-carcaca/' },
    { nome: 'Cepea/Esalq, indicador do boi gordo', url: 'https://www.cepea.org.br/br/indicador/boi-gordo.aspx' },
  ],
  relacionados: ['rendimento-de-carcaca', 'calculadora-gmd', 'peso-do-boi-pela-fita'],
};
