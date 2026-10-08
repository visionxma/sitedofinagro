// Consulta-alvo: "conversão alimentar", "conversão alimentar frango de corte", "conversão alimentar tilápia",
// "conversão alimentar suínos", "conversão alimentar e eficiência alimentar" e "como calcular conversão alimentar".
export const provas = [
  { afirmacao: 'a conversão alimentar aparente relaciona o consumo de ração com o ganho de peso', trecho: 'conversão alimentar aparente (CAA): relação entre a média de consumo de ração e a média de ganho de peso durante o período de criação', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1131706/1/SERIE-DOCUMENTOS-130-JULIO-06-05-21.pdf' },
  { afirmacao: 'no frango de corte, a ração consumida pelas aves mortas entra na conta e a mortalidade piora a conversão', trecho: 'A ração consumida pelas aves que morrem é contabilizada, sendo assim, quanto maior a mortalidade, pior a conversão alimentar', url: 'https://www.embrapa.br/web/agencia-de-informacao-tecnologica/criacoes/frango-de-corte/producao/gestao-unidade-produtora/desempenho-zootecnico' },
  { afirmacao: 'na tilápia, temperatura, oxigênio, pH e transparência da água interferem no consumo de ração', trecho: 'as variações na temperatura da água, concentração de oxigênio dissolvido, pH e transparência da água são determinantes para o consumo de ração', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1131706/1/SERIE-DOCUMENTOS-130-JULIO-06-05-21.pdf' },
  { afirmacao: 'em suínos, genética, piso, densidade, nutrição, sanidade, manejo e ambiência afetam o desempenho', trecho: 'Fatores relacionados à genética, sexo, tipo de piso, densidade animal, nutrição, sanidade, manejo diário, ambiência, granulometria dos ingredientes da ração', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1170166/1/COT626-Sistemas-de-fornecimento-de-racao-para-suinos-em.pdf' },
];

export default {
  slug: 'conversao-alimentar',
  grupo: 'criacoes',
  tipo: 'calculadora',
  curto: 'Conversão alimentar',
  resumo: 'Ração por quilo ganho e eficiência do lote.',
  title: 'Conversão alimentar: como calcular frango, suíno e peixe',
  description: 'Calcule a conversão alimentar e a eficiência do lote com a ração consumida e os pesos inicial e final. Veja como medir em aves, suínos e peixes.',
  h1: 'Conversão alimentar: calcule a ração por quilo ganho no lote',
  pergunta: 'Como calcular a conversão alimentar de um lote?',
  resposta: 'Some a ração consumida e divida pelo ganho de peso do lote. Se o lote consumiu 3.200 kg de ração e ganhou 2.000 kg, a conversão alimentar foi 1,60. A eficiência alimentar faz a conta inversa: 2.000 ÷ 3.200 × 100 = 62,5%. Conversão menor e eficiência maior indicam melhor aproveitamento.',
  tela: 'lotes',
  atualizado: '2026-10-08',
  calc: {
    titulo: 'Calcule conversão e eficiência',
    campos: [
      { id: 'racao', rotulo: 'Ração consumida (kg)', valor: 3200, min: 0, passo: 1 },
      { id: 'pesoInicial', rotulo: 'Peso inicial do lote (kg)', valor: 1500, min: 0, passo: 1 },
      { id: 'pesoFinal', rotulo: 'Peso final do lote (kg)', valor: 3500, min: 0, passo: 1 },
    ],
    saidas: [
      { id: 'ganho', rotulo: 'ganho de peso do lote', casas: 2, sufixo: ' kg' },
      { id: 'conversao', rotulo: 'conversão alimentar', casas: 2 },
      { id: 'eficiencia', rotulo: 'eficiência alimentar', casas: 2, sufixo: '%' },
    ],
    calcular: (v) => {
      const ganho = Math.max(v.pesoFinal - v.pesoInicial, 0);
      return {
        ganho,
        conversao: ganho > 0 ? v.racao / ganho : 0,
        eficiencia: v.racao > 0 ? ganho / v.racao * 100 : 0,
      };
    },
    nota: 'Os valores preenchidos são apenas um exemplo de conta, não uma referência para a espécie. Use a ração realmente consumida e pese o mesmo lote no começo e no fim do período.',
    exemplos: [
      { entrada: { racao: 3200, pesoInicial: 1500, pesoFinal: 3500 }, saida: { ganho: 2000, conversao: 1.6, eficiencia: 62.5 } },
      { entrada: { racao: 1440, pesoInicial: 600, pesoFinal: 1800 }, saida: { ganho: 1200, conversao: 1.2, eficiencia: 83.33 } },
    ],
  },
  secoes: [
    { h2: 'Conversão alimentar e eficiência: qual a diferença', blocos: [
      { p: 'A **conversão alimentar** responde quantos quilos de ração o lote consumiu para ganhar um quilo de peso. A conta é ração consumida ÷ ganho de peso. A Embrapa usa essa relação entre consumo de ração e ganho de peso para a conversão alimentar aparente de peixes.' },
      { p: 'A **eficiência alimentar** olha a mesma relação pelo outro lado: ganho de peso ÷ ração consumida × 100. Se a conversão deu 1,60, a eficiência deu 62,5%. Por isso, na conversão o menor resultado é melhor; na eficiência, o maior é melhor.' },
      { destaque: 'Não compare lote de início de criação com lote de terminação. Use a mesma espécie, fase, período e forma de pesagem.' },
    ] },
    { h2: 'Como medir sem enganar a conta', blocos: [
      { ol: [
        'Defina o lote e a data de começo. Pese o lote inteiro ou faça uma amostra seguindo sempre o mesmo método.',
        'Anote o peso inicial e toda ração que entrou no lote durante o período.',
        'Desconte a sobra que foi pesada e voltou para o depósito. Ração no chão ou perdida continua sendo consumo do lote.',
        'Na data final, pese o mesmo lote pelo mesmo método. O ganho é peso final menos peso inicial.',
        'Divida a ração consumida pelo ganho. Depois divida o ganho pela ração e multiplique por 100 para achar a eficiência.',
      ] },
      { p: 'Se o peso final for igual ou menor que o inicial, a calculadora devolve zero. Confira as pesagens, o período e se foram misturados animais de outro lote antes de interpretar o resultado.' },
    ] },
    { h2: 'No galpão, no chiqueiro e no tanque', blocos: [
      { tabela: { colunas: ['Criação', 'O que pesar', 'Cuidado na conta'], linhas: [
        ['Frango de corte', 'Aves no início e na saída', 'Some toda a ração fornecida ao galpão'],
        ['Suínos', 'Mesmo lote na entrada e saída', 'Pese sobra e acompanhe desperdício'],
        ['Tilápia', 'Biomassa no começo e no fim', 'Use biometrias feitas pelo mesmo método'],
      ], nota: 'A conta usa o ganho de peso do lote inteiro. Os valores preenchidos na calculadora são ilustrativos.' } },
      { p: 'No galpão, a ração consumida pelas aves que morrem também entrou no custo. A Embrapa explica que, no frango de corte, maior mortalidade piora a conversão alimentar. Por isso, não retire essa ração da soma para maquiar o lote.' },
      { p: 'No chiqueiro, mantenha o mesmo critério de pesagem e confira o comedouro. A Embrapa Suínos e Aves aponta genética, piso, densidade, nutrição, sanidade, manejo, ambiência e características da ração entre os fatores que mexem no desempenho e na conversão.' },
      { p: 'No tanque, estime a biomassa com biometrias comparáveis e controle a ração realmente oferecida. A Embrapa registra que temperatura, oxigênio dissolvido, pH e transparência da água interferem no consumo de ração da tilápia.' },
    ] },
    { h2: 'O que costuma piorar a conversão', blocos: [
      { ul: [
        'Ração desperdiçada no piso, na água ou em comedouro mal regulado.',
        'Mortalidade, porque o animal consumiu antes de sair do lote.',
        'Mistura de animais, entrada ou saída sem corrigir o peso do lote.',
        'Sanidade ruim, lotação inadequada e ambiente fora da condição da criação.',
        'Ração mal armazenada, com qualidade ou tamanho que não atende a fase do animal.',
        'Pesagens feitas com balanças, amostras ou horários que mudam de um período para outro.',
      ] },
      { p: 'O número isolado não conta a causa. Compare com o histórico da própria criação e abra a conta: ração oferecida, sobra, perdas, ganho de peso, mortalidade e manejo. Um resultado pior pode vir da alimentação, do ambiente, da saúde ou de erro na anotação.' },
    ] },
    { h2: 'Como usar o resultado na próxima rodada', blocos: [
      { p: 'Feche períodos que façam sentido para a fase de criação. Guarde o resultado junto com a data, lote, ração usada e ocorrências. Na rodada seguinte, repita o método. Assim você compara mudança de manejo sem misturar lote, idade ou sistema.' },
      { p: 'Não use os números ilustrativos desta página como meta. Uma faixa de referência muda com espécie, linhagem, idade, dieta, instalação e sistema. Para decidir ração ou manejo, leve o histórico do lote ao zootecnista, veterinário ou técnico da criação.' },
      { destaque: 'A calculadora organiza a conta. Mudança de dieta, densidade ou tratamento deve seguir a orientação do responsável técnico.' },
    ] },
  ],
  noFinagro: { h2: 'Lotes, pesagens e custos no FINAGRO', itens: [
    'Crie lotes de qualquer tamanho para separar galpões, tanques e grupos de animais.',
    'Registre as pesagens na ficha do animal e acompanhe o ganho entre uma pesagem e outra.',
    'Lance a compra de ração e outros gastos como despesas, com fazenda e centro de custo.',
    'Controle o estoque de insumos e distribua tarefas para a equipe da fazenda.',
  ] },
  cta: { forte: 'Leve lotes, pesagens e custos da criação para o FINAGRO.', texto: 'Plano Campo grátis, sem cartão, com até 1.000 animais com ficha.' },
  faqTitulo: 'Perguntas sobre conversão alimentar',
  faq: [
    ['Qual é a fórmula da conversão alimentar?', 'Divida a ração consumida pelo ganho de peso do lote. Ganho de peso é o peso final menos o peso inicial, medidos no mesmo período e pelo mesmo método.'],
    ['Conversão alimentar alta ou baixa é melhor?', 'Baixa é melhor, porque mostra que foram usados menos quilos de ração para cada quilo ganho. Compare apenas lotes da mesma espécie, fase e sistema de criação.'],
    ['Como calcular a eficiência alimentar?', 'Divida o ganho de peso pela ração consumida e multiplique por 100. Ela é a conta inversa da conversão: eficiência maior indica maior aproveitamento da ração.'],
    ['A ração dos animais que morreram entra na conta?', 'Entra. A ração foi consumida pelo lote e faz parte do custo do período. Tirar essa quantidade deixa o resultado melhor no papel, mas não mostra o desempenho real.'],
    ['Posso comparar frango, suíno e tilápia pelo mesmo número?', 'Não. A fórmula é a mesma, mas espécie, fase, dieta, ambiente e sistema mudam o resultado. Compare cada lote com outros equivalentes e com o próprio histórico.'],
  ],
  fontes: [
    { nome: 'Embrapa Suínos e Aves, desempenho zootécnico de frangos de corte', url: 'https://www.embrapa.br/web/agencia-de-informacao-tecnologica/criacoes/frango-de-corte/producao/gestao-unidade-produtora/desempenho-zootecnico' },
    { nome: 'Embrapa Meio Ambiente, manejo alimentar e da água na produção de tilápia', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1131706/1/SERIE-DOCUMENTOS-130-JULIO-06-05-21.pdf' },
    { nome: 'Embrapa Suínos e Aves, sistemas de fornecimento de ração para suínos', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1170166/1/COT626-Sistemas-de-fornecimento-de-racao-para-suinos-em.pdf' },
  ],
  relacionados: ['calculadora-gmd', 'indices-zootecnicos', 'custo-de-producao-por-hectare'],
};
