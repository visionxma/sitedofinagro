// Consulta-alvo: "quantos hectares tem um alqueire" e variações regionais.
export const provas = [
  { afirmacao: 'o alqueire paulista tem 24.200 m² ou 2,42 hectares', trecho: 'No Paraná, se adotou o alqueire paulista, que equivale a 24.200 metros quadrados ou 2,42 hectares (ha)', url: 'https://www.agricultura.pr.gov.br/Pagina/A' },
  { afirmacao: 'o alqueire do norte tem 27.225 m² e o mineiro tem 48.400 m²', trecho: 'O alqueire do norte equivale a 27.225 m² (2,72 ha), o alqueire mineiro equivale a 48.400 m² (4,84 ha)', url: 'https://www.agricultura.pr.gov.br/Pagina/A' },
  { afirmacao: 'o alqueire baiano tem 96.800 m² ou 9,68 hectares', trecho: 'o alqueire mineiro equivale a 48.400 m² (4,84 ha) e o alqueire baiano mede 96.800 m² (9,68 ha)', url: 'https://www.agricultura.pr.gov.br/Pagina/A' },
  { afirmacao: 'o alqueire goiano tem 48.400 m² ou 4,84 hectares', trecho: '1 hectare = 10000m2 1 alqueire goiano = 48400m2 = 4,84 hectare', url: 'https://sme.goiania.go.gov.br/conexaoescola/eaja/matematica-unidades-de-medidas/' },
];

export default {
  slug: 'alqueire-em-hectare',
  grupo: 'terra',
  tipo: 'calculadora',
  curto: 'Alqueire em hectare',
  resumo: 'Converta alqueire paulista, mineiro, goiano e baiano.',
  title: 'Quantos hectares tem um alqueire? Calculadora',
  description: 'Veja quantos hectares tem um alqueire paulista, mineiro, goiano, baiano ou do norte. Escolha a região e converta alqueires em hectares e m².',
  h1: 'Quantos hectares tem um alqueire? Converta pela região',
  pergunta: 'Quantos hectares tem um alqueire?',
  resposta: 'Depende da região. Um alqueire paulista tem 2,42 hectares; o mineiro e o goiano, 4,84 hectares; o baiano, 9,68 hectares; e o do norte, 2,7225 hectares. Escolha o tipo na calculadora e informe a quantidade. Ela entrega a área em hectares e metros quadrados.',
  tela: 'inicio',
  atualizado: '2026-10-08',
  calc: {
    titulo: 'Converta alqueires em hectares',
    campos: [
      { id: 'tipo', rotulo: 'Tipo de alqueire', valor: '24200', opcoes: [['24200', 'Paulista'], ['48400', 'Mineiro'], ['48400', 'Goiano'], ['96800', 'Baiano'], ['27225', 'Do norte']] },
      { id: 'quantidade', rotulo: 'Quantidade de alqueires', valor: 1, min: 0, passo: 0.01 },
    ],
    saidas: [
      { id: 'hectares', rotulo: 'hectares', casas: 4 },
      { id: 'metros', rotulo: 'metros quadrados', casas: 2, sufixo: ' m²' },
    ],
    calcular: (v) => ({ hectares: v.tipo * v.quantidade / 10000, metros: v.tipo * v.quantidade }),
    nota: 'O alqueire muda conforme a região. Confirme qual padrão está escrito na matrícula, no contrato ou no cadastro antes de fechar a conta.',
    exemplos: [
      { entrada: { tipo: 24200, quantidade: 1 }, saida: { hectares: 2.42, metros: 24200 } },
      { entrada: { tipo: 96800, quantidade: 2 }, saida: { hectares: 19.36, metros: 193600 } },
    ],
  },
  secoes: [
    { h2: 'O tamanho do alqueire muda conforme a região', blocos: [
      { p: 'Alqueire não é uma medida única no Brasil. A Secretaria da Agricultura do Paraná registra cinco usos: paulista, do norte, mineiro e baiano; Goiás também usa o padrão goiano. Por isso, perguntar apenas “quanto mede um alqueire” deixa a conta pela metade.' },
      { p: 'No padrão **paulista**, 1 alqueire tem 24.200 m², ou 2,42 ha. O **mineiro** e o **goiano** têm 48.400 m², ou 4,84 ha. O **baiano** tem 96.800 m², ou 9,68 ha. O **do norte** tem 27.225 m², ou 2,7225 ha.' },
      { destaque: 'Antes de comprar, vender, arrendar ou dividir terra, confirme no cartório qual alqueire foi usado no documento.' },
    ] },
    { h2: 'Como transformar alqueire em hectare', blocos: [
      { ol: ['Escolha o tipo de alqueire usado na sua região ou no documento.', 'Multiplique a quantidade de alqueires pelo tamanho daquele tipo em metros quadrados.', 'Divida o resultado por 10.000 para chegar aos hectares.'] },
      { p: 'Exemplo paulista: 5 alqueires × 24.200 m² = 121.000 m². Depois, 121.000 ÷ 10.000 = **12,1 hectares**. Para fazer o caminho contrário, divida os hectares pelo tamanho do alqueire em hectares. Assim, 12,1 ha ÷ 2,42 = 5 alqueires paulistas.' },
    ] },
    { h2: 'Tabela de 1, 2, 5, 10 e 50 alqueires', blocos: [
      { tabela: { colunas: ['Alqueires', 'Paulista', 'Mineiro/goiano', 'Baiano'], linhas: [['1', '2,42 ha', '4,84 ha', '9,68 ha'], ['2', '4,84 ha', '9,68 ha', '19,36 ha'], ['5', '12,10 ha', '24,20 ha', '48,40 ha'], ['10', '24,20 ha', '48,40 ha', '96,80 ha'], ['50', '121,00 ha', '242,00 ha', '484,00 ha']], nota: 'Conversões calculadas a partir dos tamanhos oficiais citados nas fontes.' } },
      { tabela: { colunas: ['Alqueires do norte', 'Hectares', 'Metros quadrados'], linhas: [['1', '2,7225 ha', '27.225 m²'], ['2', '5,4450 ha', '54.450 m²'], ['5', '13,6125 ha', '136.125 m²'], ['10', '27,2250 ha', '272.250 m²'], ['50', '136,1250 ha', '1.361.250 m²']], nota: 'Alqueire do norte calculado com 27.225 m² por alqueire.' } },
    ] },
    { h2: 'Qual alqueire usar na conta', blocos: [
      { p: 'Use o nome que aparece no título, na matrícula, no contrato de arrendamento ou na conversa registrada com quem negociou a área. “Alqueire da região” não basta quando há dinheiro, divisão de herança ou limite de propriedade envolvido.' },
      { ul: ['São Paulo e Paraná costumam usar o alqueire paulista de 2,42 ha.', 'Minas Gerais usa com frequência o mineiro de 4,84 ha.', 'Goiás usa o goiano de 4,84 ha.', 'Bahia pode usar o baiano de 9,68 ha.', 'O nome popular pode mudar dentro do mesmo estado; o documento da área é o que precisa mandar na conta.'] },
      { p: 'A calculadora converte o padrão escolhido, mas não identifica sozinha qual alqueire está no seu papel. Se o documento disser apenas “alqueire”, peça a equivalência em hectares ao cartório ou ao profissional que fez a medição.' },
    ] },
  ],
  noFinagro: { h2: 'A área da fazenda no FINAGRO', itens: [
    'Meça pastos e talhões pelo GPS do celular e guarde até 100 áreas no plano grátis.',
    'Cadastre safras e talhões com a área em hectares.',
    'Acompanhe o custo por hectare de cada lavoura.',
    'O lançamento feito sem sinal fica no aparelho e sobe quando a internet volta.',
  ] },
  cta: { forte: 'Leve a área do papel para a lida da fazenda.', texto: 'Meça pelo GPS, organize os talhões e acompanhe o custo por hectare.' },
  faqTitulo: 'Perguntas sobre alqueire e hectare',
  faq: [
    ['Quantos hectares tem um alqueire paulista?', 'Um alqueire paulista tem 2,42 hectares, o mesmo que 24.200 metros quadrados.'],
    ['Quantos hectares tem um alqueire mineiro ou goiano?', 'Tanto o alqueire mineiro quanto o goiano têm 4,84 hectares, equivalentes a 48.400 metros quadrados.'],
    ['Quantos hectares tem um alqueire baiano?', 'Um alqueire baiano tem 9,68 hectares, equivalentes a 96.800 metros quadrados.'],
    ['Como converter hectares para alqueires?', 'Divida os hectares pelo tamanho regional. Para o paulista, divida por 2,42; para mineiro ou goiano, por 4,84; para baiano, por 9,68.'],
    ['Por que o alqueire muda de tamanho?', 'Alqueire é uma medida tradicional que ganhou padrões diferentes conforme a região. Por isso o tipo precisa acompanhar todo valor em alqueires.'],
  ],
  fontes: [
    { nome: 'Secretaria da Agricultura do Paraná, glossário de alqueire', url: 'https://www.agricultura.pr.gov.br/Pagina/A' },
    { nome: 'Secretaria Municipal de Educação de Goiânia, unidades de medidas', url: 'https://sme.goiania.go.gov.br/conexaoescola/eaja/matematica-unidades-de-medidas/' },
  ],
  relacionados: ['quantos-metros-tem-um-hectare', 'tarefa-e-linha-de-terra', 'aplicativo-para-medir-area-rural'],
};
