// Consulta-alvo: "escore corporal bovinos", "escore de condição corporal", "como avaliar escore corporal bovinos"
// (colheita de 08/10/2026). Fonte principal: Embrapa Pecuária Sudeste, Circular Técnica 57.
const CT57 = 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/48744/1/CircularTecnica57.pdf';

export const provas = [
  { afirmacao: 'o escore de condição corporal é uma medida subjetiva da cobertura muscular e da gordura', trecho: 'é uma medida subjetiva baseada na classificação dos animais em função da cobertura muscular e da massa de gordura', url: CT57 },
  { afirmacao: 'o método é rápido, prático e barato e reflete as reservas de energia', trecho: 'O método é rápido, prático e barato, reflete as reservas energéticas dos animais', url: CT57 },
  { afirmacao: 'o escore se obtém por avaliação visual e tátil, por profissional treinado', trecho: 'O escore é obtido mediante avaliação visual e tátil (palpação) do animal, por um profissional treinado', url: CT57 },
  { afirmacao: 'a condição corporal é melhor que o peso vivo para estimar as reservas', trecho: 'é mais adequada do que as mensurações de peso vivo, pois sua análise independe do tamanho e do estado fisiológico do animal', url: CT57 },
  { afirmacao: 'os marcos do corpo para avaliar são costelas e coluna vertebral', trecho: 'tais como determinadas protuberâncias ósseas: 1) costelas, 2) processos espinhosos da coluna vertebral, 3) processos transversos da coluna vertebral', url: CT57 },
  { afirmacao: 'no gado de corte há duas escalas, uma delas de 1 a 5', trecho: 'Bovinos de corte São usadas duas escalas, uma com escores de 1 a 5', url: CT57 },
  { afirmacao: 'a outra escala do gado de corte vai de 1 a 9', trecho: 'A outra escala aplica escores entre 1 e 9 (SPITZER, 1986) e sua descrição completa está apresentada na Fig. 2', url: CT57 },
  { afirmacao: 'a outra escala vai de 1 a 9', trecho: 'A outra escala aplica escores entre 1 e 9 (SPITZER, 1986)', url: CT57 },
  { afirmacao: 'nota 1 de 5: caquético, ossos e costelas à vista', trecho: 'uma com escores de 1 a 5 (Tabela 1). Escore Avaliação 1 Caquético ou emaciado Os processos transversos e os processos espinhosos estão proeminentes e visíveis. Há total visibilidade das costelas', url: CT57 },
  { afirmacao: 'nota 2 de 5: magro, ossos salientes e pele esticada', trecho: '2 Magro Os ossos estão bastante salientes, com certa proeminência dos processos dorsais', url: CT57, semNumero: 'linha da Tabela 1, que a legenda chama de escala de 1 a 5' },
  { afirmacao: 'nota 3 de 5: médio ou ideal', trecho: '3 Médio ou ideal Há suave cobertura muscular com grupos de músculos à vista', url: CT57, semNumero: 'linha da Tabela 1, que a legenda chama de escala de 1 a 5' },
  { afirmacao: 'nota 4 de 5: gordo, gordura na inserção da cauda', trecho: '4 Gordo Há boa cobertura muscular, com alguma deposição de gordura na inserção da cauda', url: CT57, semNumero: 'linha da Tabela 1, que a legenda chama de escala de 1 a 5' },
  { afirmacao: 'nota 5 de 5: obeso, só aceitável para animal pronto para o abate', trecho: 'Este estado só é aceitável para animais terminados, prontos para o abate. Tabela 1. Escores de condição corporal em bovinos de corte (escala de 1 a 5)', url: CT57 },
  { afirmacao: 'nota 5 de 9: boa aparência geral, gordura esponjosa nas costelas', trecho: 'ECC = 5. Moderada. O animal possui boa aparência geral. A gordura sobre as costelas parece esponjosa à palpação', url: CT57, semNumero: 'item da Fig. 2, que a legenda chama de escala de 1 a 9' },
  { afirmacao: 'nota 9 de 9: extremamente gorda', trecho: 'ECC = 9. Extremamente gorda. A vaca está nitidamente obesa, com a aparência de um bloco', url: CT57 },
  { afirmacao: 'escores extremos são indesejáveis', trecho: 'Os escores extremos (superior ou inferior) são indesejáveis em qualquer escala', url: CT57 },
  { afirmacao: 'o escore ajuda a decidir época de desmama e suplementação das matrizes', trecho: 'é possível ajustar épocas de desmamar as crias ou definir quando e quanto suplementar a dieta de matrizes', url: CT57 },
  { afirmacao: 'a recomendação é chegar ao parto com nota de 5 a 7', trecho: 'seja ajustado de modo que as vacas atinjam ECC de 5 a 7 ao parto', url: CT57 },
  { afirmacao: 'vacas de raça europeia com nota 4 ou menos na estação de monta tiveram 58% de prenhez após 150 dias, contra 85% e 95%', trecho: 'Variável 4 ou menos 5 6 ou mais Número de vacas 122 300 619 Vacas prenhes após 150 dias 58% 85% 95%', url: CT57 },
  { afirmacao: 'vacas zebus e azebuadas com nota acima de 4,5 em três momentos tiveram as maiores taxas de gestação', trecho: 'vacas com ECC maior do que 4,5 (na escala de 1 a 9) nos diferentes períodos tiveram as maiores taxas de gestação', url: CT57 },
];

export default {
  slug: 'escore-de-condicao-corporal',
  grupo: 'corte',
  tipo: 'guia',
  curto: 'Escore corporal bovino',
  resumo: 'Notas de 1 a 5 e de 1 a 9 e quando avaliar.',
  title: 'Escore de condição corporal em bovinos: notas e como avaliar',
  description: 'Escore de condição corporal em bovinos: veja a escala de 1 a 5 e de 1 a 9 da Embrapa, o que olhar no animal em cada nota e quando avaliar o gado.',
  h1: 'Escore de condição corporal: como avaliar a nota dos seus bovinos',
  pergunta: 'Como avaliar o escore de condição corporal dos bovinos?',
  resposta: 'Escore de condição corporal é uma nota dada pelo olho e pela mão, pela cobertura de músculo e gordura sobre costelas, coluna, garupa e base da cauda. No gado de corte a Embrapa usa duas escalas, de 1 a 5 e de 1 a 9. Na de 1 a 5, a nota 3 é a ideal. Faça por profissional treinado.',
  tela: 'lotes',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'O que é o escore de condição corporal', blocos: [
      { p: 'O escore de condição corporal, o ECC, é uma nota que diz quanto de reserva o animal carrega. Segundo a Embrapa Pecuária Sudeste, é uma medida subjetiva, baseada na cobertura muscular e na massa de gordura. É o que muita gente chama de "nota de corpo" ou "estado do gado".' },
      { p: 'O método é rápido, prático e barato e reflete as reservas de energia dos animais. A Embrapa lembra que ele é mais adequado que o peso vivo para estimar essas reservas, porque a análise não depende do tamanho do animal nem do estado fisiológico, como prenhez.' },
      { p: 'A nota é dada por olho e por mão, por um profissional treinado. O avaliador olha e apalpa pontos do corpo onde o osso aparece ou some sob a gordura: costelas, a coluna vertebral e a base da cauda.' },
    ] },
    { h2: 'Escala de 1 a 5 para gado de corte', blocos: [
      { p: 'A Embrapa traz para o gado de corte uma escala de 1 a 5. A nota 3 é a ideal: nem osso aparecendo, nem gordura demais. Os extremos, para cima ou para baixo, são indesejáveis em qualquer escala.' },
      { tabela: { colunas: ['Nota', 'Como está', 'O que você vê'], linhas: [
        ['1', 'Caquético', 'Ossos e costelas todos à vista, cauda funda entre os ossos da anca, atrofia muscular'],
        ['2', 'Magro', 'Ossos salientes, pouca cobertura nas costelas, pele esticada'],
        ['3', 'Médio ou ideal', 'Suave cobertura muscular, costelas quase cobertas, pele macia e flexível'],
        ['4', 'Gordo', 'Boa cobertura muscular, costelas cobertas e gordura na base da cauda'],
        ['5', 'Obeso', 'Todos os ângulos do corpo cobertos, aparência arredondada'],
      ], nota: 'Tabela 1 da Circular Técnica 57, Embrapa Pecuária Sudeste. A nota 5 só é aceitável para animal terminado, pronto para o abate.' } },
    ] },
    { h2: 'Escala de 1 a 9 para vaca de cria', blocos: [
      { p: 'A outra escala da Embrapa vai de 1 a 9, a de Spitzer. Ela é mais fina e é a que aparece nas recomendações para vaca de cria, como a meta no parto. Veja como a Embrapa descreve cada nota.' },
      { tabela: { colunas: ['Nota', 'Descrição', 'O que se sente'], linhas: [
        ['1', 'Debilitada', 'Extremamente magra, sem gordura detectável'],
        ['2', 'Pobre', 'Muito magra, algum tecido sobre a coluna'],
        ['3', 'Magra', 'Costelas ainda individuais, gordura palpável sobre a espinha'],
        ['4', 'Limite', 'Costelas menos óbvias, um pouco de gordura sobre elas'],
        ['5', 'Moderada', 'Boa aparência, gordura esponjosa nas costelas'],
        ['6', 'Moderada boa', 'Espinha só sentida com pressão firme'],
        ['7', 'Boa', 'Aparência gorda, cobertura esponjosa e "bolas" de gordura'],
        ['8', 'Gorda', 'Quase impossível palpar a espinha'],
        ['9', 'Extremamente gorda', 'Obesa, parece um bloco, mobilidade comprometida'],
      ], nota: 'Fig. 2 da Circular Técnica 57, Embrapa Pecuária Sudeste (escala de 1 a 9). Textos resumidos.' } },
    ] },
    { h2: 'Como avaliar o gado passo a passo', blocos: [
      { ol: ['Separe um lote e deixe os animais parados num curral bem iluminado.', 'Olhe o animal de lado e de trás: costelas, ponta da anca e base da cauda.', 'Passe a mão na espinha, nas costelas e dos dois lados da inserção da cauda para sentir a cobertura.', 'Dê a nota e anote junto com o brinco ou o lote. Use sempre a mesma escala e, se possível, a mesma pessoa.'] },
      { p: 'Anotar a nota de todo o lote vale mais do que olhar uma vaca só. A média mostra se o rebanho está ganhando ou perdendo reserva, e quais animais fogem da média.' },
    ] },
    { h2: 'Quando avaliar: parto, estação de monta e desmama', blocos: [
      { p: 'A reprodução não é prioridade do corpo: a vaca cuida primeiro de se manter, crescer e criar. Só então sobra energia para o cio. Por isso a nota diz muito sobre a chance de a vaca emprenhar.' },
      { ul: ['**Ao parto:** a Embrapa recomenda ajustar o manejo nutricional para as vacas chegarem com nota de 5 a 7 na escala de 1 a 9, porque recuperar o corpo depois do parto é mais difícil, já que cai em cima da estação de monta seguinte.', '**Na estação de monta:** em vacas de raças europeias com nota 4 ou menos, 58% estavam prenhes após 150 dias. Com nota 5, 85%. Com nota 6 ou mais, 95%.', '**Em zebu e azebuada:** vacas com nota maior que 4,5 ao fim da gestação, 60 dias depois do parto e no início da estação seguinte tiveram as maiores taxas de gestação.', '**Na desmama:** a nota ajuda a decidir a época de desmamar as crias e quando e quanto suplementar as matrizes.'] },
      { destaque: 'As metas acima são da escala de 1 a 9. Não misture com a de 1 a 5. A nota de cada raça e região é assunto para o veterinário ou o zootecnista da fazenda.' },
    ] },
  ],
  noFinagro: { h2: 'O que o FINAGRO guarda sobre o seu rebanho', itens: [
    'O app ainda não tem campo para a nota de escore. O que ele guarda é o que ajuda a decidir: peso, pesagens com o ganho entre elas e o aviso de animal sem pesagem há mais de 60 dias.',
    'Na reprodução, cada cobertura vira parto previsto, e o desmame do bezerro fica na ficha da vaca.',
    'Cada lote mostra o peso bruto e as cabeças, para você comparar um grupo com o outro.',
    'Para não esquecer a avaliação, crie uma tarefa para o dia do parto, da estação de monta ou da desmama, e anote a nota onde preferir.',
  ] },
  cta: { forte: 'Pesagem, parto e desmama organizados no celular.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre escore corporal',
  faq: [
    ['O que é escore de condição corporal?', 'É uma nota dada por avaliação visual e tátil, pela cobertura de músculo e gordura em pontos do corpo como costelas, coluna e base da cauda. Mostra as reservas de energia do animal.'],
    ['Qual a escala de escore corporal para gado de corte?', 'A Embrapa usa duas, uma de 1 a 5 e outra de 1 a 9. Na de 1 a 5, a nota 3 é a ideal. Em qualquer escala, os extremos são indesejáveis.'],
    ['Qual o escore ideal da vaca ao parto?', 'Pela Embrapa, a recomendação é chegar ao parto com nota de 5 a 7 na escala de 1 a 9, para a vaca voltar a emprenhar na estação de monta seguinte.'],
    ['Escore corporal é a mesma coisa que peso?', 'Não. A Embrapa explica que a nota estima as reservas melhor que o peso vivo, porque não depende do tamanho do animal nem do estado fisiológico, como a prenhez.'],
    ['Quem pode dar a nota?', 'Um profissional treinado. A nota é subjetiva, então use sempre a mesma escala e, de preferência, a mesma pessoa em todas as avaliações.'],
  ],
  fontes: [
    { nome: 'Embrapa Pecuária Sudeste, Escore da condição corporal e sua aplicação no manejo reprodutivo de ruminantes (Circular Técnica 57)', url: CT57 },
  ],
  relacionados: ['estacao-de-monta', 'calculadora-de-gestacao-bovina', 'calculadora-gmd'],
};
