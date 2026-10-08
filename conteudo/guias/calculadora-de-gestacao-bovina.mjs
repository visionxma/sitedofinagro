// Consulta-alvo: "calculadora de gestação bovina", "tabela de gestação de vaca", "calculadora de gestação",
// "quantos dias dura a gestação da vaca" (colheita de 08/10/2026).
export const provas = [
  { afirmacao: 'a gestação média no gado de corte é de 290 dias', trecho: 'A duração média da gestação é de 290 dias. O intervalo médio entre partos depende do sistema de exploração pecuária', url: 'https://cloud.cnpgc.embrapa.br/sac/2012/04/02/qual-e-a-duracao-da-gestacao-e-qual-o-intervalo-medio-entre-partos-em-gado-de-corte/' },
  { afirmacao: 'a gestação da vaca dura de 280 a 290 dias, com variação de raça e de sexo da cria', trecho: 'A duração média da gestação da vaca é de 280 a 290 dias, com variações entre raças e dependendo do sexo da cria', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/942826/1/Reproducao.pdf' },
  { afirmacao: 'a gestação é mais longa em zebuínas, menor em raças europeias e intermediária nas mestiças', trecho: 'Geralmente, a gestação é mais longa em vacas zebuínas, menor em vacas de raças europeias, como a Holandês e a Jersey, e intermediária nas vacas mestiças', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/942826/1/Reproducao.pdf' },
  { afirmacao: 'em rebanho Gir leiteiro a gestação média foi de 286,8 dias', trecho: 'O período médio de gestação encontrado foi de 286,8 dias, com um desvio-padrão de 11,4', url: 'https://ainfo.cnptia.embrapa.br/digital/bitstream/item/198163/1/Duracao-da-gestacao-em-gado-zebu.pdf' },
  { afirmacao: 'a vaca de leite precisa de no mínimo 2 meses de descanso antes do parto', trecho: 'O mais importante é garantir o período de descanso mínimo de 2 meses antes do parto, para a recuperação da glândula mamária', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/942826/1/Reproducao.pdf' },
  { afirmacao: 'período seco menor que 60 dias pode prejudicar a próxima lactação', trecho: 'Vacas com período seco menor que 60 dias podem não apresentar adequada recuperação da glândula mamária', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/942826/1/Reproducao.pdf' },
  { afirmacao: 'a palpação retal vale a partir de 60 dias e a ultrassonografia a partir de 25 dias de gestação', trecho: 'Geralmente, é realizado a partir de 60 dias de gestação. Também é possível fazer o diagnóstico de gestação por ultrassonografia, a partir de 25 dias de gestação', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/942826/1/Reproducao.pdf' },
];

export default {
  slug: 'calculadora-de-gestacao-bovina',
  grupo: 'corte',
  tipo: 'calculadora',
  curto: 'Calculadora de gestação',
  resumo: 'Data do parto da vaca pela cobertura ou IA.',
  title: 'Calculadora de gestação bovina: data do parto da vaca',
  description: 'Calculadora de gestação bovina: digite a data da cobertura ou da inseminação e veja o parto previsto, a data de secagem e quando fazer o diagnóstico.',
  h1: 'Calculadora de gestação bovina: a data do parto da sua vaca',
  pergunta: 'Quantos dias dura a gestação da vaca e quando ela vai parir?',
  resposta: 'A gestação da vaca dura em média 290 dias no gado de corte, cerca de nove meses e meio. Some 290 dias à data da cobertura ou da inseminação e você tem o parto previsto. Cobertura em 15 de janeiro dá parto por volta de 1º de novembro. A Embrapa cita faixa de 280 a 290 dias conforme a raça.',
  tela: 'animais',
  atualizado: '2026-10-08',
  calc: {
    titulo: 'Calcule o parto, a secagem e o diagnóstico',
    campos: [
      { id: 'cobertura', rotulo: 'Data da cobertura ou da IA', tipo: 'data', valor: 'hoje' },
      { id: 'dias', rotulo: 'Dias de gestação', valor: 290, min: 250, max: 320, passo: 1 },
      { id: 'seca', rotulo: 'Dias de secagem antes do parto', valor: 60, min: 0, max: 120, passo: 1 },
    ],
    saidas: [
      { id: 'parto', rotulo: 'parto previsto', formato: 'data' },
      { id: 'secagem', rotulo: 'secar a vaca de leite em', formato: 'data' },
      { id: 'ultra', rotulo: 'ultrassom a partir de', formato: 'data' },
      { id: 'palpacao', rotulo: 'palpação a partir de', formato: 'data' },
    ],
    calcular: (v) => ({
      parto: v.cobertura + v.dias,
      secagem: v.cobertura + v.dias - v.seca,
      ultra: v.cobertura + 25,
      palpacao: v.cobertura + 60,
    }),
    nota: 'Os 290 dias são a média do gado de corte segundo a Embrapa. Zebuíno tende a gestar mais dias e raça europeia menos: ajuste o campo se o seu rebanho tem a média própria. A secagem só vale para vaca de leite. O parto é uma previsão: pode vir alguns dias antes ou depois.',
    exemplos: [
      { entrada: { cobertura: '2026-01-15', dias: 290, seca: 60 }, saida: { parto: '2026-11-01', secagem: '2026-09-02', ultra: '2026-02-09', palpacao: '2026-03-16' } },
      { entrada: { cobertura: '2026-11-01', dias: 286, seca: 60 }, saida: { parto: '2027-08-14', secagem: '2027-06-15', ultra: '2026-11-26', palpacao: '2026-12-31' } },
    ],
  },
  secoes: [
    { h2: 'Quantos dias dura a gestação da vaca', blocos: [
      { p: 'No gado de corte, a Embrapa Gado de Corte dá **290 dias** como duração média da gestação. É perto de nove meses e meio. A conta do parto é simples: data da cobertura mais 290 dias.' },
      { p: 'Não existe um número único para toda vaca. Segundo a Embrapa, a média da vaca fica entre **280 e 290 dias**, com variação de raça e do sexo da cria. A gestação costuma ser mais longa em zebuínas, mais curta em raças europeias, como a Holandesa e a Jersey, e intermediária nas mestiças.' },
      { p: 'Em um rebanho Gir selecionado para leite, estudado pela Embrapa em 938 gestações, a média foi de 286,8 dias. Por isso a calculadora deixa o campo de dias aberto: use 290 como ponto de partida e troque pela média que o seu rebanho mostra com os partos anotados.' },
    ] },
    { h2: 'Como calcular a data do parto', blocos: [
      { ol: ['Anote o dia da cobertura ou da inseminação. Na inseminação em tempo fixo, vale o dia em que a vaca foi inseminada.', 'Some os dias de gestação, 290 para gado de corte.', 'Marque o resultado no calendário e deixe uma folga de uma semana para cada lado.'] },
      { p: 'Exemplo: vaca coberta em 15 de janeiro. Somando 290 dias, o parto previsto é **1º de novembro**. Se a média do rebanho é 280, o parto cai em 22 de outubro. A calculadora acima faz essa soma, mês a mês, sem errar nos meses de 28, 30 e 31 dias.' },
      { destaque: 'Parto previsto é janela, não hora marcada. Comece a vigiar a vaca uns dez dias antes da data.' },
    ] },
    { h2: 'Tabela de gestação: cobertura em um mês, parto em outro', blocos: [
      { p: 'Para quem quer só olhar o mês, a tabela mostra o parto de uma vaca coberta no dia 15 de cada mês, com 280 e com 290 dias de gestação. Para o dia exato do seu animal, use a calculadora.' },
      { tabela: { colunas: ['Cobertura em', 'Parto com 280 dias', 'Parto com 290 dias'], linhas: [
        ['15 de janeiro', '22 de outubro', '1º de novembro'],
        ['15 de fevereiro', '22 de novembro', '2 de dezembro'],
        ['15 de março', '20 de dezembro', '30 de dezembro'],
        ['15 de abril', '20 de janeiro', '30 de janeiro'],
        ['15 de maio', '19 de fevereiro', '1º de março'],
        ['15 de junho', '22 de março', '1º de abril'],
        ['15 de julho', '21 de abril', '1º de maio'],
        ['15 de agosto', '22 de maio', '1º de junho'],
        ['15 de setembro', '22 de junho', '2 de julho'],
        ['15 de outubro', '22 de julho', '1º de agosto'],
        ['15 de novembro', '22 de agosto', '1º de setembro'],
        ['15 de dezembro', '21 de setembro', '1º de outubro'],
      ], nota: 'Conta: data da cobertura mais 280 ou 290 dias, faixa citada pela Embrapa. A data do parto cai no ano seguinte quando passa de dezembro.' } },
    ] },
    { h2: 'Quando fazer o diagnóstico de gestação', blocos: [
      { p: 'Saber cedo quem não pegou barriga permite cobrir de novo a vaca vazia ou descartá-la. Pela Embrapa, a palpação retal, feita por profissional qualificado, vale a partir de **60 dias** de gestação. A ultrassonografia pode ser feita a partir de **25 dias**.' },
      { p: 'A calculadora já mostra as duas datas, contadas da cobertura. Combine a visita do veterinário com o dia em que o lote inteiro estiver apto, para não chamar duas vezes.' },
    ] },
    { h2: 'Data de secagem da vaca de leite', blocos: [
      { p: 'Vaca de leite precisa parar de ser ordenhada antes do parto para o úbere se recuperar. A Embrapa diz que o mais importante é garantir um descanso mínimo de **2 meses** antes do parto, e que vaca com período seco menor que 60 dias pode não recuperar a glândula mamária e render menos na lactação seguinte.' },
      { p: 'Por isso a calculadora tem o campo de dias de secagem, com 60 de partida. A data de secagem é o parto previsto menos esses dias. Com parto em 1º de novembro, a vaca seca em 2 de setembro. Vaca de corte não passa por secagem.' },
    ] },
  ],
  noFinagro: { h2: 'O parto previsto no FINAGRO', depoisDe: 4, itens: [
    'Na reprodução, você registra a cobertura da fêmea e o app marca o parto previsto, com o aviso no celular.',
    'O app usa 283 dias para vaca, dentro da faixa de 280 a 290 dias da Embrapa, e lembra que o parto pode vir antes ou depois.',
    'Para gado, o app também programa o protocolo de IATF (inseminação em tempo fixo) e cria as datas do diagnóstico.',
    'A taxa de prenhez sai pronta do que foi lançado: quantas fêmeas cobertas ficaram prenhes.',
  ] },
  cta: { forte: 'Cobertura anotada, parto avisado no celular.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre gestação da vaca',
  faq: [
    ['Quantos dias dura a gestação da vaca?', 'No gado de corte a média é de 290 dias, segundo a Embrapa. Para a vaca em geral, a Embrapa cita de 280 a 290 dias, conforme a raça e o sexo da cria.'],
    ['Quantos meses de gestação tem uma vaca?', 'Cerca de nove meses e meio. Os 290 dias de média do gado de corte passam de nove meses por uns 17 dias.'],
    ['Como calcular a data do parto da vaca?', 'Some 290 dias à data da cobertura ou da inseminação. Vaca coberta em 15 de janeiro tem parto previsto para 1º de novembro. Use 280 dias se a média do seu rebanho é menor.'],
    ['Vaca zebu gesta mais tempo que vaca europeia?', 'Em geral sim. A Embrapa registra que a gestação é mais longa em zebuínas, menor em raças europeias como a Holandesa e a Jersey, e intermediária nas mestiças.'],
    ['Com quantos dias dá para confirmar a prenhez?', 'Por ultrassonografia, a partir de 25 dias de gestação. Por palpação retal, feita por profissional qualificado, a partir de 60 dias.'],
  ],
  fontes: [
    { nome: 'Embrapa Gado de Corte, duração da gestação e intervalo entre partos', url: 'https://cloud.cnpgc.embrapa.br/sac/2012/04/02/qual-e-a-duracao-da-gestacao-e-qual-o-intervalo-medio-entre-partos-em-gado-de-corte/' },
    { nome: 'Embrapa, Reprodução (perguntas e respostas sobre gestação e secagem)', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/942826/1/Reproducao.pdf' },
    { nome: 'Embrapa, duração da gestação em gado zebu', url: 'https://ainfo.cnptia.embrapa.br/digital/bitstream/item/198163/1/Duracao-da-gestacao-em-gado-zebu.pdf' },
  ],
  relacionados: ['estacao-de-monta', 'indices-zootecnicos', 'controle-de-rebanho'],
};
