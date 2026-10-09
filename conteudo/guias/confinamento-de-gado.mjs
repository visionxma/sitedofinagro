// RASCUNHO (segunda leva, 08/10/2026). Consulta-alvo: "confinamento de gado", "confinamento de gado de corte",
// "semiconfinamento", "como fazer confinamento". Fonte técnica: Embrapa, capítulo "Estratégias alimentares para gado de corte".
const CAP = 'https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1011236/1/NutricaoAnimalCAPITULO09.pdf';

export const provas = [
  { afirmacao: 'semiconfinamento é a terminação a pasto com concentrado, meio termo entre confinamento e suplementação estratégica', trecho: 'O semiconfinamento é uma alternativa para intensificar a terminação de bovinos de corte a pasto. Considerado um meio termo entre o confinamento e a suplementação estratégica', url: CAP },
  { afirmacao: 'o semiconfinamento exige menos infraestrutura que o confinamento e rende mais que a suplementação estratégica', trecho: 'esta prática tem se tornado cada vez mais comum pela menor necessidade de infraestrutura, quando comparada ao primeiro e por melhores desempenhos zootécnicos', url: CAP },
  { afirmacao: 'no semiconfinamento o pasto faz o papel do volumoso', trecho: 'No semiconfinamento, o pasto faz o papel do volumoso do confinamento e, por isso, deve estar disponível com abundância para o animal', url: CAP },
  { afirmacao: 'massa de 4 a 6 toneladas de matéria seca permite cerca de 60 dias de semiconfinamento', trecho: 'o diferimento deve permitir o acúmulo de uma massa de 4 a 6 toneladas de matéria seca. Com esta massa, o período de semiconfinamento deve ser de aproximadamente 60 dias', url: CAP },
  { afirmacao: 'lotação de 1 a 2 UA/ha no início do semiconfinamento', trecho: 'Para esta situação, recomenda-se lotação entre 1 e 2 UA/ha ao início do semiconfinamento', url: CAP },
  { afirmacao: 'no semiconfinamento o animal deve entrar perto do ponto de abate: 400 kg para sair com 460 kg em 60 dias a 1 kg por dia', trecho: 'se é esperado ganho de peso diário de 1 kg/dia e almejado peso ao abate de 460 kg, o animal deve estar com 400 kg no início do semiconfinamento, seguindo-se a recomendação de 60 dias', url: CAP },
  { afirmacao: 'benefícios do confinamento: aliviar pasto na seca e liberar área para categorias de menor exigência', trecho: 'aliviar pastos na época seca; tirar animais mais pesados das pastagens, liberando-as para categorias com menor exigência nutricional', url: CAP },
  { afirmacao: 'o confinamento reduz o tempo de terminação e permite programar abates o ano todo', trecho: 'reduzir o tempo de terminação; programar abates ao longo do ano todo; intensificar o giro de capital', url: CAP },
  { afirmacao: 'intensificar traz maior demanda de gestão e risco de insucesso', trecho: 'a intensificação sempre traz consigo maiores demandas gerenciais, devido ao maior risco de insucesso', url: CAP },
  { afirmacao: 'dois terços do custo de produção no confinamento são alimentares', trecho: 'A nutrição é o item mais importante na atividade de confinamento, pois: dois terços dos custos de produção são alimentares', url: CAP },
  { afirmacao: 'a dieta de menor custo da arroba é a que compara desempenho e ganho em arrobas de carcaça', trecho: 'Já na formulação para mínimo custo da arroba, várias dietas de custo mínimo são formuladas e comparadas em relação ao desempenho animal e ganho em arrobas de carcaça', url: CAP },
  { afirmacao: 'novilho castrado: entrada de 350 a 420 kg, saída de 480 a 520 kg, 70 a 100 dias', trecho: 'Machos castrados - novilhos Idade: 18 a 30 meses Peso vivo inicial: 350 a 420 kg Peso vivo final: 480 a 520 kg Tempo de confinamento: 70 a 100 dias', url: CAP },
  { afirmacao: 'tourinho: entrada de 370 a 440 kg, saída de 500 a 550 kg, 90 a 120 dias', trecho: 'Machos inteiros - tourinhos Idade: 18 a 30 meses Peso vivo inicial: 370 a 440 kg Peso vivo final: 500 a 550 kg Tempo de confinamento: 90 a 120 dias', url: CAP },
  { afirmacao: 'novilha: entrada de 280 a 320 kg, saída de 360 a 420 kg, 60 a 90 dias', trecho: 'Fêmeas jovens - novilhas Idade: 20 a 30 meses Peso vivo inicial: 280 a 320 kg Peso vivo final: 360 a 420 kg Tempo de confinamento: 60 a 90 dias', url: CAP },
  { afirmacao: 'vaca de descarte: entrada de 340 a 420 kg, saída de 400 a 460 kg, 50 a 70 dias', trecho: 'Fêmeas adultas – vacas de descarte Idade: acima de 3 anos Peso vivo inicial: 340 a 420 kg Peso vivo final: 400 a 460 kg Tempo de confinamento: 50 a 70 dias', url: CAP },
  { afirmacao: 'peso em jejum se converte multiplicando o peso vivo por 0,94', trecho: 'peso vivo (quando solicitado o peso vivo em jejum, multiplicar por 0,94)', url: CAP },
  { afirmacao: 'adaptação à dieta leva de duas a quatro semanas', trecho: 'O período de adaptação é necessário para a modificação da microbiota ruminal e do metabolismo animal e pode variar entre duas e quatro semanas', url: CAP },
  { afirmacao: 'adaptação de no mínimo 14 dias seja qual for a estratégia', trecho: 'Seja qual for a estratégia, fazer no mínimo 14 dias de adaptação', url: CAP },
  { afirmacao: 'cocho com 50 a 70 cm por animal', trecho: 'cocho do tipo J, com espaço linear de 50 a 70 cm por animal; espaço de 30 a 50 cm é possível para lotes homogêneos', url: CAP },
  { afirmacao: 'mínimo de 10 m2 por animal nas baias e lotes homogêneos', trecho: 'mínimo de 10 m2 de espaço por animal nas baias; lotes menores que 100 animais', url: CAP },
  { afirmacao: 'formar lotes homogêneos em peso, sexo, idade, condição corporal e raça', trecho: 'formação de lotes homogêneos quanto a peso, sexo, idade, condição corporal e raça', url: CAP },
  { afirmacao: 'no mínimo duas refeições por dia e horários que não variem mais de 30 minutos', trecho: 'Deve-se realizar um mínimo de duas refeições diárias, sem restrições quanto ao número máximo', url: CAP },
  { afirmacao: 'horários de trato constantes, sem variar mais de 30 minutos', trecho: 'Recomenda-se que sejam respeitados horários constantes de fornecimento e que esses não variem mais que 30 minutos', url: CAP },
  { afirmacao: 'o consumo diário de ração de cada lote deve ser monitorado', trecho: 'O consumo de ração diário de cada lote deve ser monitorado de forma a identificar possíveis erros de manejo e corrigi-los o mais rápidamente possível', url: CAP },
  { afirmacao: 'sobra no cocho significa perda', trecho: 'não é desejável que haja sobra de alimentos no cocho, que significarão perdas', url: CAP },
  { afirmacao: 'a leitura de cocho é feita antes do primeiro trato da manhã e à noite', trecho: 'Leituras dos cochos são recomendadas antes do primeiro trato da manhã e a noite (entre 22h e 0h), se possível', url: CAP },
  { afirmacao: 'a dieta ideal depende do peso de entrada, do peso de abate pretendido, do animal e dos preços', trecho: 'cada situação possui uma dieta ideal que varia em função de: quais alimentos e preços disponíveis; quais os animais a serem terminados', url: CAP },
  { afirmacao: 'acidose, timpanismo e laminite são as desordens digestivas do confinamento', trecho: 'As principais desordens são: Acidose ruminal: acidificação do ambiente ruminal', url: CAP },
];

export default {
  slug: 'confinamento-de-gado',
  grupo: 'corte',
  tipo: 'guia',
  curto: 'Confinamento de gado',
  resumo: 'Confinamento e semiconfinamento: prazos e o que medir.',
  title: 'Confinamento de gado de corte: como fazer e o que medir',
  description: 'Confinamento de gado de corte e semiconfinamento: diferença, dias de cocho, peso de entrada e de saída pela Embrapa e a conta do custo da diária.',
  h1: 'Confinamento de gado de corte: como fazer, quantos dias e o que medir',
  pergunta: 'O que é confinamento de gado e como fazer?',
  resposta: 'Confinamento é terminar o boi em baia, com toda a ração no cocho e sem pasto. No semiconfinamento o animal fica no pasto e recebe concentrado. Pela Embrapa, o novilho castrado entra com 350 a 420 kg e fica de 70 a 100 dias. Meça os pesos de entrada e saída, os dias de cocho e o custo da diária.',
  tela: 'lotes',
  atualizado: '2026-10-08',
  calc: {
    titulo: 'Calcule o ganho e o custo no cocho',
    campos: [
      { id: 'entrada', rotulo: 'Peso de entrada (kg)', valor: 400, min: 0, passo: 1 },
      { id: 'saida', rotulo: 'Peso de saída (kg)', valor: 520, min: 0, passo: 1 },
      { id: 'dias', rotulo: 'Dias de cocho', valor: 90, min: 1, passo: 1 },
      { id: 'diaria', rotulo: 'Custo da diária por cabeça (R$)', valor: 12, min: 0, passo: 0.1 },
      { id: 'rend', rotulo: 'Rendimento de carcaça (%)', valor: 54, min: 1, max: 100, passo: 0.5 },
    ],
    saidas: [
      { id: 'gmd', rotulo: 'ganho por dia (kg/cab)', casas: 2 },
      { id: 'arrobas', rotulo: 'arrobas ganhas por cabeça', casas: 2 },
      { id: 'custo', rotulo: 'custo no cocho por cabeça', casas: 2, prefixo: 'R$ ' },
      { id: 'custoArroba', rotulo: 'custo por arroba ganha', casas: 2, prefixo: 'R$ ' },
    ],
    calcular: (v) => {
      const ganho = v.saida - v.entrada;
      const arrobas = (ganho * v.rend / 100) / 15;
      const custo = v.diaria * v.dias;
      return { gmd: ganho / v.dias, arrobas, custo, custoArroba: arrobas > 0 ? custo / arrobas : 0 };
    },
    nota: 'Conta só do período de cocho: não inclui o custo de compra ou de criação do animal até a entrada. A diária e o rendimento são exemplos: use a diária do seu confinamento e o rendimento que o frigorífico paga.',
    exemplos: [
      { entrada: { entrada: 400, saida: 520, dias: 90, diaria: 12, rend: 54 }, saida: { gmd: 1.33, arrobas: 4.32, custo: 1080, custoArroba: 250 } },
      { entrada: { entrada: 380, saida: 500, dias: 100, diaria: 11.5, rend: 52 }, saida: { gmd: 1.2, arrobas: 4.16, custo: 1150, custoArroba: 276.44 } },
    ],
  },
  secoes: [
    { h2: 'O que é confinamento e o que é semiconfinamento', blocos: [
      { p: 'No **confinamento**, o boi termina em baia ou curral, sem pasto, e come tudo no cocho: o volumoso (silagem, cana) mais o concentrado. No **semiconfinamento**, o boi continua no pasto e recebe ração concentrada no cocho. A Embrapa chama o semiconfinamento de meio termo entre o confinamento e a suplementação estratégica.' },
      { tabela: { colunas: ['Ponto', 'Confinamento', 'Semiconfinamento'], linhas: [['Onde o boi come', 'Cocho, na baia', 'Pasto + concentrado no cocho'], ['Volumoso', 'Silagem, cana ou outro, produzido por você', 'O próprio pasto, diferido'], ['Instalação', 'Baias, cochos, vagão ou misturador', 'Cochos no pasto'], ['Tempo típico', '50 a 120 dias, por categoria', 'Cerca de 60 dias']], nota: 'Embrapa, Estratégias alimentares para gado de corte: suplementação a pasto, semiconfinamento e confinamento.' } },
      { p: 'O semiconfinamento tem menos necessidade de infraestrutura que o confinamento e rende mais que a suplementação estratégica. Também dá flexibilidade: a maior parte do custo é o concentrado, e o volumoso é o pasto.' },
    ] },
    { h2: 'Para que serve o confinamento', blocos: [
      { p: 'A Embrapa trata o confinamento como uma ferramenta de manejo da fazenda. Os benefícios que ela lista:' },
      { ul: ['aliviar o pasto na seca;', 'tirar os animais mais pesados do pasto e liberar a área para categorias que exigem menos;', 'aumentar a produtividade e a qualidade da carne;', 'reduzir o tempo de terminação;', 'programar abates o ano inteiro;', 'girar o capital mais rápido.'] },
      { p: 'O outro lado: segundo a Embrapa, a intensificação traz maior demanda de gestão e maior risco de insucesso. Por isso o confinamento começa por números, não por baia.' },
    ] },
    { h2: 'Quantos dias de cocho e que peso de entrada', blocos: [
      { p: 'O prazo depende da categoria. A Embrapa dá estas faixas para o confinamento:' },
      { tabela: { colunas: ['Categoria', 'Entrada', 'Saída', 'Dias de cocho'], linhas: [['Novilho castrado', '350 a 420 kg', '480 a 520 kg', '70 a 100'], ['Tourinho', '370 a 440 kg', '500 a 550 kg', '90 a 120'], ['Novilha', '280 a 320 kg', '360 a 420 kg', '60 a 90'], ['Vaca de descarte', '340 a 420 kg', '400 a 460 kg', '50 a 70']], nota: 'Embrapa. Pesos vivos. Idade de 18 a 30 meses (novilha, 20 a 30; vaca, acima de 3 anos).' } },
      { p: 'No semiconfinamento, o animal precisa entrar perto do ponto de abate. O exemplo da Embrapa: com ganho de 1 kg por dia e abate com 460 kg, o boi entra com 400 kg e fica 60 dias. A recomendação de lotação é de 1 a 2 UA por hectare no começo, num pasto diferido com 4 a 6 toneladas de matéria seca por hectare.' },
      { p: 'O peso de abate que o frigorífico pede muda tudo. Se ele cobra o peso em jejum, a Embrapa manda multiplicar o peso vivo por 0,94.' },
    ] },
    { h2: 'O que medir no confinamento', blocos: [
      { ol: ['**Peso de entrada:** pese o lote ao entrar, de preferência no mesmo horário e nas mesmas condições da saída.', '**Dias de cocho:** conte da entrada, incluindo a adaptação, até o embarque.', '**Peso de saída:** pese de novo. Peso de saída menos peso de entrada é o ganho do lote.', '**Ganho por dia:** o ganho dividido pelos dias de cocho. A [calculadora de GMD](/calculadora-gmd) faz essa conta.', '**Consumo de ração por lote:** a Embrapa recomenda monitorar o consumo diário de cada lote, para achar erro de manejo e corrigir rápido.', '**Sobra no cocho:** sobra significa perda. A Embrapa sugere ler o cocho antes do primeiro trato da manhã e à noite e ajustar a ração.', '**Custo da diária:** o que o boi custa por dia no cocho: ração, mão de obra, energia e o resto.'] },
      { p: 'Com tudo isso você chega ao número que decide: o **custo por arroba ganha** no cocho. Ele cabe na calculadora acima e entra na conta completa de [custo da arroba produzida](/custo-da-arroba-produzida).' },
      { p: 'Dois terços do custo de produção do confinamento são alimentares, diz a Embrapa. A dieta de menor custo por tonelada nem sempre é a de menor custo por arroba: a Embrapa recomenda comparar dietas pelo desempenho e pelo ganho em arrobas de carcaça.' },
    ] },
    { h2: 'Adaptação, cocho e baia', blocos: [
      { ul: ['**Adaptação:** de duas a quatro semanas, e nunca menos de 14 dias, seja qual for o esquema. Uma saída é subir o concentrado aos poucos, em etapas de 3 a 7 dias.', '**Cocho:** a Embrapa indica de 50 a 70 cm por animal, e de 30 a 50 cm só para lote homogêneo, boi manso e mais de 5 tratos por dia.', '**Baia:** no mínimo 10 m² por animal, com lotes de menos de 100 animais.', '**Lote:** formado por animais parecidos em peso, sexo, idade, condição corporal e raça.', '**Trato:** no mínimo duas refeições por dia, nos mesmos horários, sem variar mais de 30 minutos.'] },
      { p: 'A dieta mal ajustada derruba o ganho. As desordens digestivas mais comuns são a acidose, o timpanismo e a laminite. Quem formula a ração é o zootecnista, porque a dieta ideal depende do preço dos ingredientes, do animal, do peso de entrada e do peso de abate pretendido.' },
      { destaque: 'Este guia resume orientações técnicas da Embrapa e não substitui o zootecnista nem o veterinário. A formulação da dieta e o manejo sanitário são com eles.' },
    ] },
  ],
  noFinagro: { h2: 'O confinamento no FINAGRO', itens: [
    'O lote de confinamento é um lote do app, de qualquer tamanho, e a tela de lotes mostra as cabeças e o peso bruto de cada um.',
    'Cada pesagem fica na ficha do animal, e o app mostra o ganho entre uma pesagem e a outra: o peso de entrada e o de saída da conta.',
    'O aviso de animais sem pesagem há mais de 60 dias lembra de pesar o lote parado.',
    'A despesa pode ser marcada com a atividade "Confinamento" e com o lote, em "Mais opções" do lançamento, e a venda entra como receita.',
    'O app não pesa o lote, não lê balança nem calcula a ração: o peso e o consumo são lançados por você.',
  ] },
  cta: { forte: 'Pesagem, lote e despesa do confinamento num só lugar.', texto: 'Grátis até 1.000 animais com ficha, com lote sem limite de cabeças.' },
  faqTitulo: 'Perguntas sobre confinamento',
  faq: [
    ['O que é confinamento de gado de corte?', 'É terminar o boi em baia ou curral, sem pasto, com toda a ração no cocho. Serve para aliviar o pasto na seca, encurtar a terminação e programar o abate.'],
    ['Qual a diferença entre confinamento e semiconfinamento?', 'No confinamento o boi não vai ao pasto e come volumoso e concentrado no cocho. No semiconfinamento ele fica no pasto e recebe ração concentrada. O semiconfinamento exige menos instalação.'],
    ['Quantos dias o boi fica no confinamento?', 'Pela Embrapa, de 70 a 100 dias para o novilho castrado, de 90 a 120 para o tourinho, de 60 a 90 para a novilha e de 50 a 70 para a vaca de descarte. No semiconfinamento, cerca de 60 dias.'],
    ['Quais as medidas que o confinador precisa acompanhar?', 'Peso de entrada, peso de saída, dias de cocho, ganho por dia, consumo de ração do lote, sobra no cocho e custo da diária. Com isso se chega ao custo por arroba ganha.'],
    ['Como fazer a adaptação do gado ao cocho?', 'Suba o concentrado em etapas de 3 a 7 dias, ou aumente aos poucos a oferta da ração. A Embrapa fala em duas a quatro semanas e no mínimo 14 dias.'],
  ],
  fontes: [
    { nome: 'Embrapa, Estratégias alimentares para gado de corte: suplementação a pasto, semiconfinamento e confinamento', url: CAP },
  ],
  relacionados: ['calculadora-gmd', 'custo-da-arroba-produzida', 'cria-recria-e-engorda'],
};
