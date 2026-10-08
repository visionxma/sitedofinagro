// Consulta-alvo: "quantos metros tem um hectare" e conversão de terreno em hectares.
export const provas = [
  { afirmacao: 'centiare equivale a 1 m² e are equivale a 100 m²', trecho: 'Centiare (ca) – equivalência: 1 ca = 1 m². Are (a) – equivalência: 1 a = 1 dam² = 100 m²', url: 'https://redeetec.mec.gov.br/images/stories/pdf/eixo_rec_naturais/agropecuaria/181012_topo.pdf' },
  { afirmacao: 'hectare equivale a 10.000 m²', trecho: 'Hectare (ha) – equivalência: 1 ha = 1 hm² = 10.000 m². Exemplo: tanto faz eu falar que a minha propriedade tem 2 ha de área', url: 'https://redeetec.mec.gov.br/images/stories/pdf/eixo_rec_naturais/agropecuaria/181012_topo.pdf' },
];

export default {
  slug: 'quantos-metros-tem-um-hectare',
  grupo: 'terra',
  tipo: 'calculadora',
  curto: 'Metros por hectare',
  resumo: 'Comprimento e largura viram m² e hectares.',
  title: 'Quantos metros tem um hectare? Calcule a área',
  description: 'Um hectare tem 10.000 m². Informe comprimento e largura do terreno para calcular metros quadrados, hectares, ares e centiares, com a conta explicada.',
  h1: 'Quantos metros tem um hectare de terra? Faça a conta',
  pergunta: 'Quantos metros tem um hectare de terra?',
  resposta: 'Um hectare tem 10.000 metros quadrados, não 10.000 metros de comprimento. Um quadrado de 100 m por 100 m forma 1 hectare, mas um retângulo de 200 m por 50 m também. Multiplique comprimento por largura para achar os m² e divida por 10.000 para achar os hectares.',
  tela: 'producao',
  atualizado: '2026-10-08',
  calc: {
    titulo: 'Calcule os hectares do terreno',
    campos: [
      { id: 'comprimento', rotulo: 'Comprimento do terreno (m)', valor: 100, min: 0, passo: 0.1 },
      { id: 'largura', rotulo: 'Largura do terreno (m)', valor: 100, min: 0, passo: 0.1 },
    ],
    saidas: [
      { id: 'metros', rotulo: 'metros quadrados', casas: 2, sufixo: ' m²' },
      { id: 'hectares', rotulo: 'hectares', casas: 4, sufixo: ' ha' },
      { id: 'ares', rotulo: 'ares', casas: 2, sufixo: ' a' },
      { id: 'centiares', rotulo: 'centiares', casas: 2, sufixo: ' ca' },
    ],
    calcular: (v) => {
      const metros = v.comprimento * v.largura;
      return { metros, hectares: metros / 10000, ares: metros / 100, centiares: metros };
    },
    nota: 'A conta comprimento × largura vale para terreno retangular. Em área torta ou curva, divida em partes ou meça o contorno pelo GPS.',
    exemplos: [
      { entrada: { comprimento: 100, largura: 100 }, saida: { metros: 10000, hectares: 1, ares: 100, centiares: 10000 } },
      { entrada: { comprimento: 80, largura: 50 }, saida: { metros: 4000, hectares: 0.4, ares: 40, centiares: 4000 } },
    ],
  },
  secoes: [
    { h2: 'Hectare mede área, não comprimento', blocos: [
      { p: 'A pergunta “quantos metros tem um hectare” costuma misturar duas coisas. Metro mede distância. Metro quadrado mede superfície. O hectare também mede superfície: **1 ha = 10.000 m²**.' },
      { p: 'Por isso não existe um comprimento único para um hectare. Ele pode ser um quadrado de 100 m por 100 m, um retângulo de 200 m por 50 m ou outro desenho que feche os mesmos 10.000 m².' },
      { destaque: 'Se alguém disser apenas “10.000 metros”, peça para completar: hectare é 10.000 metros quadrados.' },
    ] },
    { h2: 'Como calcular hectares pelo comprimento e largura', blocos: [
      { ol: ['Meça o comprimento do terreno em metros.', 'Meça a largura em metros.', 'Multiplique comprimento × largura para obter os metros quadrados.', 'Divida os metros quadrados por 10.000 para obter hectares.'] },
      { p: 'Exemplo: um piquete com 250 m de comprimento e 40 m de largura tem 250 × 40 = 10.000 m². Dividindo 10.000 por 10.000, a área é **1 hectare**.' },
      { p: 'Outro exemplo: um talhão de 300 m por 200 m tem 60.000 m². A conta em hectare é 60.000 ÷ 10.000 = **6 ha**.' },
    ] },
    { h2: 'Are, centiare e hectare sem confusão', blocos: [
      { glossario: [['Centiare (ca)', '1 metro quadrado. É a centésima parte de um are.'], ['Are (a)', '100 metros quadrados, como um quadrado de 10 m por 10 m.'], ['Hectare (ha)', '100 ares ou 10.000 metros quadrados.']] },
      { p: 'As três unidades andam de cem em cem. Um hectare tem 100 ares. Um are tem 100 centiares. Como 1 centiare vale 1 m², um hectare também tem 10.000 centiares.' },
    ] },
    { h2: 'Tabela de hectare para metros quadrados', blocos: [
      { tabela: { colunas: ['Metros quadrados', 'Hectares', 'Ares'], linhas: [['1 m²', '0,0001 ha', '0,01 a'], ['100 m²', '0,01 ha', '1 a'], ['1.000 m²', '0,10 ha', '10 a'], ['5.000 m²', '0,50 ha', '50 a'], ['10.000 m²', '1,00 ha', '100 a'], ['20.000 m²', '2,00 ha', '200 a'], ['50.000 m²', '5,00 ha', '500 a'], ['100.000 m²', '10,00 ha', '1.000 a']], nota: 'Conversão: m² ÷ 10.000 = ha; m² ÷ 100 = a.' } },
      { p: 'Para passar de hectare para m², faça o contrário: multiplique por 10.000. Uma área de 7,5 ha tem 7,5 × 10.000 = 75.000 m².' },
    ] },
    { h2: 'E quando o terreno não é retangular', blocos: [
      { p: 'Terreno irregular não cabe bem em uma conta de comprimento por largura. Uma saída é separar o desenho em retângulos e triângulos, calcular cada pedaço e somar. Outra é percorrer o limite com o GPS do celular para formar um polígono.' },
      { p: 'A medição pelo celular serve para planejar pasto, talhão, semente, adubo e custo por hectare. Para registro, desmembramento ou certificação no Incra, é outro serviço: entra o levantamento de um profissional habilitado.' },
    ] },
  ],
  noFinagro: { h2: 'Hectares organizados no FINAGRO', itens: [
    'Meça a área por GPS no celular e salve até 100 áreas no plano grátis.',
    'Guarde safras, talhões e a área plantada em hectares.',
    'Veja custo, produção e produtividade por hectare na lavoura.',
    'O lançamento feito sem sinal fica salvo e sincroniza quando a internet volta.',
  ] },
  cta: { forte: 'Do contorno do talhão ao custo por hectare.', texto: 'Meça, salve e use a área na gestão da lavoura pelo FINAGRO.' },
  faqTitulo: 'Perguntas sobre hectare e metros',
  faq: [
    ['Um hectare tem quantos metros quadrados?', 'Um hectare tem 10.000 metros quadrados. A forma mais conhecida é um quadrado de 100 metros por 100 metros.'],
    ['Um terreno de 50 por 100 metros tem quantos hectares?', 'Ele tem 5.000 metros quadrados. Dividindo por 10.000, o resultado é 0,5 hectare.'],
    ['Como passar metros quadrados para hectare?', 'Divida a área em metros quadrados por 10.000. Por exemplo, 35.000 m² divididos por 10.000 são 3,5 hectares.'],
    ['Qual é a diferença entre are e hectare?', 'Um are tem 100 m². Um hectare tem 100 ares, portanto 10.000 m².'],
    ['Dá para medir hectare só com comprimento e largura?', 'Sim, quando o terreno é retangular. Se o contorno for irregular, divida em figuras menores ou use uma medição por GPS.'],
  ],
  fontes: [
    { nome: 'Rede e-Tec Brasil, Topografia Geral: unidades de superfície agrárias', url: 'https://redeetec.mec.gov.br/images/stories/pdf/eixo_rec_naturais/agropecuaria/181012_topo.pdf' },
  ],
  relacionados: ['alqueire-em-hectare', 'tarefa-e-linha-de-terra', 'aplicativo-para-medir-area-rural'],
};
