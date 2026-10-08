// Consultas-alvo: "peso do boi pela fita", "calcular peso do gado", "como calcular o peso do boi sem balança",
// "app para pesar gado" e "qual o peso de um boi".
export const provas = [
  { afirmacao: 'a medida da fita é tomada ao redor do tórax com o animal em pé e aprumado', trecho: 'as medidas de PT foram tomadas com o animal em pé, membros devidamente posicionados, e a fita envolvendo a circunferência do tórax para leitura', url: 'https://www.embrapa.br/en/busca-de-publicacoes/-/publicacao/907991/eficiencia-no-uso-da-fita-de-perimetro-toracico-como-aferidor-do-peso-vivo-em-terneiras-da-raca-jersey-na-fase-de-aleitamento' },
  { afirmacao: 'no estudo com terneiras Jersey, as médias da balança e da fita foram diferentes', trecho: 'A média e o desvio-padrão para as pesagens realizadas com balança (n=66; controle) e com a fita (n=66) foram de 39,83 ± 9,26 Kg e 40,39 ± 10,16 Kg, respectivamente', url: 'https://www.embrapa.br/en/busca-de-publicacoes/-/publicacao/907991/eficiencia-no-uso-da-fita-de-perimetro-toracico-como-aferidor-do-peso-vivo-em-terneiras-da-raca-jersey-na-fase-de-aleitamento' },
  { afirmacao: 'animais muito jovens podem exigir ajuste na predição da fita', trecho: 'existem evidências da necessidade de ajustes nas predições de animais do nascimento até os três meses', url: 'https://www.embrapa.br/en/busca-de-publicacoes/-/publicacao/907991/eficiencia-no-uso-da-fita-de-perimetro-toracico-como-aferidor-do-peso-vivo-em-terneiras-da-raca-jersey-na-fase-de-aleitamento' },
];

export default {
  slug: 'peso-do-boi-pela-fita',
  grupo: 'corte',
  tipo: 'guia',
  curto: 'Peso do boi pela fita',
  resumo: 'Meça o tórax e estime o peso sem balança.',
  title: 'Peso do boi pela fita: como medir sem balança',
  description: 'Aprenda a medir o perímetro torácico do gado com a fita de pesagem, reduzir erros de leitura e registrar o peso estimado sem prometer precisão de balança.',
  h1: 'Peso do boi pela fita: como medir o gado sem balança',
  pergunta: 'Como calcular o peso do boi pela fita sem balança?',
  resposta: 'Passe uma fita de pesagem própria para bovinos ao redor do tórax, com o animal em pé e os membros bem posicionados. Leia na própria fita o peso ligado à circunferência medida. O resultado é uma estimativa, não uma pesagem exata: raça, idade, condição corporal, postura e colocação da fita mudam a leitura.',
  tela: 'animais',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'Como a fita estima o peso do gado', blocos: [
      { p: 'A fita de pesagem relaciona o **perímetro torácico** com um peso estimado. Ela contorna o peito do animal e já traz uma escala em quilogramas. Você mede a circunferência e lê o peso indicado pelo fabricante para aquela volta.' },
      { p: 'Não existe uma conversão única que sirva para todo bovino. A relação muda conforme raça, categoria, idade e formato corporal. Como não há nesta fonte oficial uma equação ou tabela geral para qualquer boi, este guia não oferece calculadora. Use a tabela impressa na fita adequada ao seu tipo de gado.' },
      { destaque: 'Fita comum mede centímetros. Fita de pesagem bovina traz a escala de peso correspondente ao perímetro.' },
    ] },
    { h2: 'Passo a passo para medir direito', blocos: [
      { ol: ['Contenha o animal com calma em piso firme e plano.', 'Espere o boi ficar em pé, com os membros bem posicionados e o corpo aprumado.', 'Passe a fita ao redor do tórax, logo atrás das patas dianteiras, sem pegar a barriga.', 'Mantenha a fita reta ao redor do corpo, encostada no pelo, sem folga e sem apertar a ponto de afundar.', 'Leia o ponto em que a fita fecha e anote o peso mostrado na escala da própria fita.', 'Repita a medida. Se as leituras mudarem, corrija a posição antes de registrar.'] },
      { p: 'A avaliação publicada pela Embrapa tomou o perímetro com o animal em pé, membros posicionados e a fita envolvendo a circunferência do tórax. Esse cuidado reduz variação causada pelo jeito de medir, mas não transforma estimativa em peso de balança.' },
    ] },
    { h2: 'Quanto a fita pode errar', blocos: [
      { p: 'Não há um percentual fixo de erro que valha para todo rebanho. Em estudo da Embrapa com terneiras Jersey, a média da balança foi 39,83 kg e a média da fita foi 40,39 kg. A diferença entre as médias foi 0,56 kg, mas isso não é margem geral nem mostra o maior erro individual. O próprio trabalho aponta necessidade de ajuste nas predições dos animais mais novos.' },
      { p: 'Isso impede prometer que toda fita erra apenas alguns quilos. Uma fita feita para gado leiteiro pode não representar bem um boi de corte; uma escala criada para animais adultos pode falhar em bezerros. A condição corporal também muda o formato do tórax sem seguir exatamente a mesma mudança do peso.' },
      { tabela: { colunas: ['Fonte de diferença', 'Como reduzir'], linhas: [['Posição da fita', 'Passe sempre no mesmo ponto'], ['Postura do animal', 'Meça em pé e aprumado'], ['Fita inadequada', 'Use escala da categoria correta'], ['Leitor diferente', 'Padronize a forma de medir'], ['Idade e raça', 'Confira com balança do seu gado']], nota: 'A fita é método indireto. A balança continua sendo a referência para conferir e ajustar a estimativa.' } },
    ] },
    { h2: 'Como descobrir o erro no seu rebanho', blocos: [
      { p: 'Faça uma conferência prática quando tiver acesso a uma balança. Meça os mesmos animais com a fita e, logo depois, pese todos na balança. Para cada cabeça, anote os dois valores e calcule a diferença: peso da fita menos peso da balança.' },
      { p: 'Separe a comparação por categoria. Bezerro, novilha, vaca e boi terminado não têm o mesmo formato corporal. Se a fita costuma marcar acima ou abaixo em um grupo, registre essa diferença como referência daquele grupo e daquela fita. Não transporte o ajuste para outro rebanho sem nova conferência.' },
      { p: 'Para acompanhar ganho, use sempre o mesmo método. Comparar uma leitura antiga de fita com uma pesagem nova de balança mistura variação do animal com variação do instrumento. Quando puder, guarde no registro se o peso foi medido na balança ou estimado pela fita.' },
    ] },
    { h2: 'Aplicativo para pesar gado por foto existe no FINAGRO?', blocos: [
      { p: '**O FINAGRO não pesa gado por foto.** A foto fica na ficha para identificação visual do animal. O peso precisa vir da balança ou da estimativa feita com a fita, e você lança o valor no histórico de pesagens.' },
      { p: 'Depois do lançamento, o aplicativo calcula o ganho entre uma pesagem e outra. Isso ajuda a enxergar a evolução individual e do lote, desde que as medições tenham sido feitas de forma comparável.' },
      { destaque: 'Foto identifica. Fita estima. Balança pesa. O registro mostra a evolução.' },
    ] },
  ],
  noFinagro: { h2: 'O peso fica organizado no FINAGRO', itens: [
    'A ficha do animal guarda brinco, raça, sexo, nascimento, peso e foto.',
    'Cada nova pesagem entra no histórico do animal.',
    'O aplicativo calcula o ganho entre uma pesagem e a seguinte.',
    'O aviso de animais sem pesagem há mais de 60 dias ajuda a retomar o acompanhamento.',
  ] },
  cta: { forte: 'Anote a estimativa e acompanhe o ganho de cada animal.', texto: 'FINAGRO grátis, sem cartão, para até 1.000 animais com ficha.' },
  faqTitulo: 'Perguntas sobre pesar o boi com fita',
  faq: [
    ['Como medir o peso do boi sem balança?', 'Use uma fita de pesagem própria para bovinos, passe ao redor do tórax e leia o peso na escala impressa nela.'],
    ['Onde passar a fita de pesagem no boi?', 'Ao redor do tórax, logo atrás das patas dianteiras, com o animal em pé, aprumado e com os membros bem posicionados.'],
    ['A fita de pesagem dá o peso exato?', 'Não. Ela estima o peso pela relação com o perímetro torácico. A balança é necessária para conferir e ajustar a leitura no seu rebanho.'],
    ['Quantos quilos a fita pode errar?', 'Não existe um erro único para todo gado. Raça, idade, categoria, condição corporal, modelo da fita e posição durante a medida alteram a diferença.'],
    ['O FINAGRO pesa o boi pela foto?', 'Não. O FINAGRO guarda o peso informado na ficha e calcula o ganho entre pesagens; a foto serve para identificar o animal.'],
  ],
  fontes: [
    { nome: 'Embrapa Pecuária Sul, eficiência da fita de perímetro torácico em terneiras Jersey', url: 'https://www.embrapa.br/en/busca-de-publicacoes/-/publicacao/907991/eficiencia-no-uso-da-fita-de-perimetro-toracico-como-aferidor-do-peso-vivo-em-terneiras-da-raca-jersey-na-fase-de-aleitamento' },
  ],
  relacionados: ['calculadora-gmd', 'controle-de-rebanho', 'rendimento-de-carcaca'],
};
