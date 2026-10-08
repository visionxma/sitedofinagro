// Consulta-alvo: "tarefa de terra", "linha de terra" e como cubar essas medidas.
export const provas = [
  { afirmacao: 'o IBGE registra mais de um tamanho para tarefa e 4.356 m² para tarefa baiana', trecho: '16 Tarefa 3 025 17 Tarefa 3 630 18 Tarefa baiana 4 356', url: 'https://www.ibge.gov.br/biblioteca/visualizacao/instrumentos_de_coleta/doc1131.pdf' },
  { afirmacao: 'o IBGE registra quadras de 948 m² e 1.250 m²', trecho: '11 Quadra 948 12 Litro 1 210 13 Quadra 1 250 14 Celamim 1 512 15 Morgos 2 500', url: 'https://www.ibge.gov.br/biblioteca/visualizacao/instrumentos_de_coleta/doc1131.pdf' },
  { afirmacao: 'no registro histórico de Fortaleza, tarefa aparece como 25 braças em quadro ou 3.025 m²', trecho: 'e tarefa (25 braças em quadro ou 3.025 metros quadrados', url: 'https://acervo.fortaleza.ce.gov.br/download-file/documentById?id=030c71b9-e88d-46ca-b923-24a98652c208' },
  { afirmacao: 'uma braça linear equivale a 2,2 m', trecho: 'Antiga unidade de comprimento equivalente a 2,2 m e no sistema inglês equivalente a 4,8 m', url: 'https://creci-sc.gov.br/p/informacoes-uteis/medidas/9/' },
];

export default {
  slug: 'tarefa-e-linha-de-terra',
  grupo: 'terra',
  tipo: 'guia',
  curto: 'Tarefa e linha de terra',
  resumo: 'Como cubar e converter medidas que mudam por região.',
  title: 'Tarefa de terra e linha: como cubar e converter',
  description: 'Tarefa e linha de terra mudam conforme a região. Veja medidas oficiais encontradas, aprenda a cubar em m² e converta para hectare sem usar valor errado.',
  h1: 'Tarefa e linha de terra: como cubar sem errar a medida',
  pergunta: 'Quantas tarefas tem um hectare de terra?',
  resposta: 'Depende do tamanho de tarefa usado no município. Com a tarefa de 3.025 m², 1 hectare tem cerca de 3,31 tarefas. Com a tarefa baiana de 4.356 m², tem cerca de 2,30. Antes de converter tarefa ou linha, confirme a equivalência no cartório ou no sindicato rural.',
  tela: 'inicio',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'Tarefa e linha não têm um tamanho único', blocos: [
      { p: 'Tarefa, linha, braça e quadra são nomes tradicionais usados para cubar terra. O problema é que o mesmo nome pode representar áreas diferentes. A própria tabela do Censo Agropecuário do IBGE registra tarefa com 3.025 m², tarefa com 3.630 m² e tarefa baiana com 4.356 m².' },
      { p: 'Linha é usada em partes do Maranhão e do Piauí, mas não foi localizado um valor oficial único e acessível que pudesse sustentar uma conversão para os dois estados. Por isso este guia não fixa “uma linha = tantos metros”. Peça a equivalência local em m² ou hectares.' },
      { destaque: 'Para escritura, arrendamento, compra, venda ou herança, use a medida do documento e confirme no cartório ou no sindicato rural.' },
    ] },
    { h2: 'Medidas que têm fonte oficial conferida', blocos: [
      { tabela: { colunas: ['Nome usado', 'Metros quadrados', 'Hectares'], linhas: [['Tarefa', '3.025 m²', '0,3025 ha'], ['Tarefa', '3.630 m²', '0,3630 ha'], ['Tarefa baiana', '4.356 m²', '0,4356 ha'], ['Tarefa cearense citada', '3.025 m²', '0,3025 ha'], ['Quadra, tipo 1', '948 m²', '0,0948 ha'], ['Quadra, tipo 2', '1.250 m²', '0,1250 ha']], nota: 'Tarefas e quadras da tabela de unidades do IBGE; uso cearense documentado no Acervo de Fortaleza.' } },
      { p: 'Uma braça linear aparece como 2,2 m na referência do Conselho Regional de Corretores de Imóveis de Santa Catarina. Quando a medida é “25 braças em quadro”, são 25 braças de um lado e 25 do outro. Ainda assim, confira qual braça foi usada no papel antigo.' },
      { p: 'Os nomes tarefa sergipana e tarefa alagoana aparecem no uso local, mas o valor não entrou nesta página sem uma fonte oficial acessível pelo portão. Não é seguro copiar um número de tabela comercial e tratar como padrão estadual.' },
    ] },
    { h2: 'Como cubar uma tarefa ou linha de terra', blocos: [
      { p: '“Cubar” a terra é medir as dimensões e calcular a superfície. Em um pedaço retangular, a conta é comprimento × largura. Um terreno com 55 m de frente e 55 m de fundo tem 55 × 55 = 3.025 m².' },
      { ol: ['Descubra em qual unidade estão a frente e o fundo: metro, braça ou outra.', 'Passe tudo para metros. Se a braça local for 2,2 m, multiplique as braças por 2,2.', 'Multiplique comprimento por largura para obter m².', 'Divida os m² por 10.000 para obter hectares.', 'Compare com a equivalência registrada no documento local.'] },
      { p: 'Se o terreno for torto, não use apenas a maior frente pela maior lateral. Divida o desenho em retângulos e triângulos, some os pedaços ou percorra o contorno com o GPS. Curvas, grotas e pontas podem mudar bastante o total.' },
    ] },
    { h2: 'Quantas tarefas cabem em um hectare', blocos: [
      { p: 'A fórmula é **10.000 ÷ tamanho da tarefa em m²**. Para a tarefa de 3.025 m²: 10.000 ÷ 3.025 = 3,3058, arredondando para 3,31 tarefas por hectare. Para a tarefa baiana de 4.356 m²: 10.000 ÷ 4.356 = 2,2957, ou cerca de 2,30 tarefas.' },
      { tabela: { colunas: ['Padrão confirmado', '1 unidade em ha', 'Unidades em 1 ha'], linhas: [['Tarefa de 3.025 m²', '0,3025 ha', '3,31'], ['Tarefa de 3.630 m²', '0,3630 ha', '2,75'], ['Tarefa baiana', '0,4356 ha', '2,30'], ['Quadra de 948 m²', '0,0948 ha', '10,55'], ['Quadra de 1.250 m²', '0,1250 ha', '8,00']], nota: 'Resultados arredondados. Divisão feita com os valores oficiais citados nas fontes.' } },
      { p: 'Para passar tarefas para hectares, faça a conta inversa: quantidade × tamanho em m² ÷ 10.000. Dez tarefas de 3.025 m² somam 30.250 m², ou 3,025 ha.' },
    ] },
    { h2: 'Como medir uma tarefa de terra pelo celular', blocos: [
      { ol: ['Confirme onde começa e termina a área com quem conhece as divisas.', 'Abra a medição por GPS e vá para um ponto do contorno.', 'Marque os cantos ou caminhe pela borda até voltar perto do início.', 'Feche o polígono e anote o resultado em m² e hectares.', 'Só depois converta para tarefa ou linha usando a equivalência do município.'] },
      { p: 'O celular ajuda no planejamento da lida, mas a conversão regional continua dependendo do padrão local. Se o vizinho chama 3.025 m² de uma tarefa e o documento usa outro tamanho, é o documento que precisa ser esclarecido.' },
    ] },
  ],
  noFinagro: { h2: 'A medição da terra no FINAGRO', itens: [
    'Meça o contorno por GPS no celular e salve até 100 áreas no plano grátis.',
    'Guarde a área em m², hectares ou km² e consulte depois.',
    'Cadastre talhões, safras e o custo por hectare da lavoura.',
    'A medição e o salvamento funcionam sem sinal no celular; os dados sobem quando a internet volta.',
  ] },
  cta: { forte: 'Cube a área no campo e leve o hectare para a gestão.', texto: 'O FINAGRO mede pelo GPS e organiza talhões, safra e custo por hectare.' },
  faqTitulo: 'Perguntas sobre tarefa e linha de terra',
  faq: [
    ['Quantos metros quadrados tem uma tarefa de terra?', 'O IBGE registra mais de um tamanho: 3.025 m², 3.630 m² e tarefa baiana de 4.356 m². Confirme qual vale no município.'],
    ['Quantas tarefas de 3.025 m² tem um hectare?', 'Um hectare dividido por 3.025 m² dá cerca de 3,31 tarefas. O resultado muda quando a tarefa local tem outro tamanho.'],
    ['Quanto mede uma linha de terra no Maranhão ou Piauí?', 'Não há um tamanho único seguro para os dois estados. Peça a equivalência em metros quadrados no cartório ou no sindicato rural do município.'],
    ['O que significa cubar uma terra?', 'Significa medir as dimensões e calcular a área. Em terreno retangular, multiplique comprimento por largura; em área irregular, divida em partes ou use GPS.'],
    ['Posso usar a medição do celular na escritura?', 'Use o celular para planejamento. Medição para registro, divisão ou certificação exige o procedimento e o profissional aceitos pelo cartório e pelo Incra.'],
  ],
  fontes: [
    { nome: 'IBGE, Manual do Recenseador do Censo Agropecuário 2006, unidades de superfície', url: 'https://www.ibge.gov.br/biblioteca/visualizacao/instrumentos_de_coleta/doc1131.pdf' },
    { nome: 'Acervo da Prefeitura de Fortaleza, medidas agrárias usadas no Ceará', url: 'https://acervo.fortaleza.ce.gov.br/download-file/documentById?id=030c71b9-e88d-46ca-b923-24a98652c208' },
    { nome: 'CRECI-SC, informações úteis sobre medidas', url: 'https://creci-sc.gov.br/p/informacoes-uteis/medidas/9/' },
  ],
  relacionados: ['alqueire-em-hectare', 'quantos-metros-tem-um-hectare', 'aplicativo-para-medir-area-rural'],
};
