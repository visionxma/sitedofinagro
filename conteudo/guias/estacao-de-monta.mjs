// Consulta-alvo: "estação de monta", "estação de monta bovinos", "estação de monta gado de corte", "como fazer
// estação de monta" (colheita de 08/10/2026). Fonte principal: Embrapa Gado de Corte, Comunicado Técnico 134.
export const provas = [
  { afirmacao: 'a estação de monta é uma técnica de manejo simples que pode elevar a fertilidade das matrizes', trecho: 'A estação de monta, neste contexto, é uma técnica de manejo que, embora muito simples, pode proporcionar elevadas taxas de fertilidade', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1072647/1/Estacaodemontaemrebanhos.pdf' },
  { afirmacao: 'a duração recomendada da estação de monta é de três meses', trecho: 'A duração recomendada é de três meses, podendo ser estendida, dependendo das condições de cada fazenda', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1072647/1/Estacaodemontaemrebanhos.pdf' },
  { afirmacao: 'no Brasil Central a estação de monta pode ir de outubro a março', trecho: 'o período mais adequado para a estação de monta pode variar de outubro a março, inclusive', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1072647/1/Estacaodemontaemrebanhos.pdf' },
  { afirmacao: 'os nascimentos da monta de outubro a março caem de julho a dezembro, mais entre agosto e outubro', trecho: 'ocorrem de julho ao final de dezembro, com maior frequência entre agosto e outubro', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1072647/1/Estacaodemontaemrebanhos.pdf' },
  { afirmacao: 'a estação começa após 80 a 100 mm de chuva, salvo vacas em boa condição corporal', trecho: 'estação de monta seja estabelecida logo após um acúmulo de precipitação pluviométrica de oitenta a cem milímetros, no início da estação chuvosa', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1072647/1/Estacaodemontaemrebanhos.pdf' },
  { afirmacao: 'as novilhas entram um mês antes das vacas', trecho: 'recomenda-se que as novilhas iniciem a estação de monta um mês antes das vacas', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1072647/1/Estacaodemontaemrebanhos.pdf' },
  { afirmacao: 'o diagnóstico de gestação sai de 30 a 45 dias depois do fim da estação', trecho: 'O diagnóstico de gestação deve ser feito o mais cedo possível, 30 ou 45 dias após o final da', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1072647/1/Estacaodemontaemrebanhos.pdf' },
  { afirmacao: 'diagnóstico cedo permite descartar as vazias antes da seca', trecho: 'Com o diagnóstico de gestação precoce, as fêmeas vazias podem ser descartadas enquanto elas', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1072647/1/Estacaodemontaemrebanhos.pdf' },
  { afirmacao: 'a taxa de reposição de matrizes não deve passar de 30%', trecho: 'Vale ressaltar que a taxa de reposição de matrizes não deve ser superior a 30%', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1072647/1/Estacaodemontaemrebanhos.pdf' },
  { afirmacao: 'a concentração de nascimentos facilita todo o manejo do rebanho', trecho: 'com a concentração de nascimentos, todo o manejo do rebanho, em geral, é facilitado', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1072647/1/Estacaodemontaemrebanhos.pdf' },
  { afirmacao: 'a mudança da monta o ano todo para a estação deve ser gradual', trecho: 'deve ser feita de forma progressiva, não drástica, para evitar perdas de produtividade', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1072647/1/Estacaodemontaemrebanhos.pdf' },
  { afirmacao: 'a brucelose é a única doença da reprodução com vacinação obrigatória', trecho: 'Destas doenças, a única para a qual a vacinação é obrigatória é a Brucelose', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1072647/1/Estacaodemontaemrebanhos.pdf' },
];

export default {
  slug: 'estacao-de-monta',
  grupo: 'corte',
  tipo: 'guia',
  curto: 'Estação de monta',
  resumo: 'Como planejar a monta e concentrar os partos.',
  title: 'Estação de monta no gado de corte: como fazer e planejar',
  description: 'Estação de monta: o que é, quando começar, quantos dias dura e como planejar o diagnóstico de gestação e o descarte, com a recomendação da Embrapa.',
  h1: 'Estação de monta no gado de corte: o que é e como fazer passo a passo',
  pergunta: 'Como fazer uma estação de monta no gado de corte?',
  resposta: 'Estação de monta é o período do ano em que as vacas são cobertas, para concentrar os nascimentos. A Embrapa recomenda três meses, o mais perto possível de 90 dias. No Brasil Central, o período mais adequado vai de outubro a março, com pasto bom. O diagnóstico de gestação sai de 30 a 45 dias após o fim da estação.',
  tela: 'lotes',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'O que é estação de monta', blocos: [
      { p: 'Estação de monta é o período do ano em que as vacas ficam com o touro ou são inseminadas. Fora dele, os reprodutores descansam em pasto separado. O oposto é deixar o touro com as vacas o ano inteiro.' },
      { p: 'Segundo a Embrapa Gado de Corte, é uma técnica de manejo que, embora muito simples, pode proporcionar elevadas taxas de fertilidade das matrizes. O texto cita que a prática pode aumentar a margem bruta da cria em até 31%, sem exigir investimento para ser aplicada.' },
      { p: 'Os bovinos são animais que dão cio o ano todo. Mas, se a vaca perde peso e condição corporal, ela pode parar de ciclar. Por isso a Embrapa indica a primavera e o verão, quando há boa oferta de forragem em quantidade e qualidade.' },
    ] },
    { h2: 'Por que concentrar os nascimentos', blocos: [
      { p: 'Com o touro o ano todo, os bezerros nascem em qualquer mês e cada lote precisa de um cuidado diferente. Com a estação, a Embrapa aponta que a concentração de nascimentos facilita todo o manejo do rebanho.' },
      { ul: ['Os bezerros nascem na mesma época e recebem vacina, vermífugo, marcação e desmama juntos.', 'Os lotes de desmama ficam mais homogêneos, o que ajuda na hora de planejar a venda.', 'A taxa de prenhez sobe, porque a estação trabalha com vacas em melhor condição corporal. Os touros também descansam.', 'No fim da estação você sabe quais vacas não emprenharam e decide com dado, não com palpite, quem fica e quem sai.'] },
    ] },
    { h2: 'Quando começar e quanto dura', blocos: [
      { p: 'Para o Brasil Central, com verão chuvoso e inverno seco, a Embrapa diz que o período mais adequado para a estação de monta pode variar de **outubro a março**. Os nascimentos caem de julho ao final de dezembro, com maior frequência entre agosto e outubro, época de menos chuva e mais fácil para cuidar do umbigo e da mamada do colostro.' },
      { p: 'Como o início das águas muda de região, a recomendação é começar logo depois de 80 a 100 milímetros de chuva acumulada, que fazem o pasto se recuperar. Se as vacas já estão em boa condição corporal, esse cuidado pode ser dispensado.' },
      { p: 'A duração recomendada é de **três meses**, podendo ser estendida conforme a fazenda. Quanto mais perto de 90 dias, maior a concentração dos nascimentos. Para isso, a vaca precisa de boa alimentação durante a estação.' },
      { p: 'As novilhas começam um mês antes das vacas. Solteiras, entram na estação em boa condição, e quem é coberta antes ganha mais tempo para se recuperar do parto e voltar a ciclar na estação seguinte.' },
      { destaque: 'Em regiões de clima diferente do Brasil Central, as datas mudam. Combine o calendário com o veterinário ou o zootecnista da sua região.' },
    ] },
    { h2: 'O calendário do ano, mês a mês', blocos: [
      { p: 'A tabela segue o roteiro da Embrapa para a estação tradicional do Brasil Central, de outubro a março. Ajuste os meses para a sua região.' },
      { tabela: { colunas: ['Período', 'O que acontece'], linhas: [
        ['Antes de outubro', 'Exame ginecológico das vacas e andrológico dos touros, feitos por veterinário'],
        ['Outubro a março', 'Estação de monta, por touro ou inseminação'],
        ['Julho a dezembro', 'Nascimento dos bezerros da estação anterior'],
        ['30 a 45 dias após o fim', 'Diagnóstico de gestação e separação das vazias'],
        ['Abril a junho', 'Desmama dos bezerros e descarte programado das fêmeas'],
      ], nota: 'Estação de Monta em Rebanhos de Gado de Corte, Embrapa Gado de Corte (2017). Roteiro do Brasil Central.' } },
    ] },
    { h2: 'Diagnóstico de gestação e descarte', blocos: [
      { p: 'O diagnóstico de gestação deve ser feito o mais cedo possível, de 30 a 45 dias depois do fim da estação. A Embrapa explica que, com o diagnóstico cedo, as fêmeas vazias podem ser descartadas enquanto ainda estão em boa condição corporal, antes de a seca começar.' },
      { p: 'As descartadas saem do pasto na época mais crítica, o que alivia a pressão de pastejo. Elas são trocadas, em igual número, por novilhas prenhes. A taxa de reposição de matrizes, diz o texto, não deve ser superior a 30%, porque a vaca de primeira cria tem mais dificuldade de emprenhar de novo.' },
      { p: 'Os touros saem para pasto separado para recuperar, e vale repetir o exame andrológico. Touro com sêmen fraco ou defeito de aprumo ou do aparelho reprodutor sai da reprodução.' },
    ] },
    { h2: 'Saindo da monta o ano todo', blocos: [
      { p: 'Se a sua fazenda deixa o touro com o gado o ano inteiro, a mudança deve ser feita de forma progressiva, não drástica, para evitar perdas de produtividade. A Embrapa descreve duas estratégias.' },
      { ol: ['Dividir as vacas em dois lotes pela data do último parto. As paridas de julho a dezembro vão para o lote que segue a estação; as de janeiro a junho ficam com o touro o ano todo. No ano seguinte, as vazias e as do lote B que pariram de julho a dezembro passam para o lote A, até o rebanho todo caber na estação de outubro a março.', 'Tirar os touros no fim de maio e devolvê-los no início de setembro, o que dá uma estação de nove meses no primeiro ano. Depois, encurtar um mês em cada ponta a cada ano, até chegar a 90 dias.'] },
      { p: 'A Embrapa lembra ainda que a brucelose é a única doença da reprodução com vacinação obrigatória. Repetição de cio, vaca vazia, perda de embrião e aborto são sinais para chamar o veterinário.' },
    ] },
  ],
  noFinagro: { h2: 'A estação de monta no FINAGRO', itens: [
    'Cada cobertura ou inseminação entra na reprodução da fêmea, e o app marca o parto previsto e avisa no celular.',
    'Para gado, a inseminação em tempo fixo (IATF) gera sozinha as datas do protocolo e do diagnóstico de 30 e 60 dias.',
    'A taxa de prenhez aparece pronta: quantas fêmeas cobertas ou inseminadas ficaram prenhes.',
    'As vacas da estação ficam num lote de qualquer tamanho, e o desmame dos bezerros e a vacina de brucelose ficam anotados.',
  ] },
  cta: { forte: 'Cobertura, diagnóstico e parto no calendário do celular.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre estação de monta',
  faq: [
    ['O que é estação de monta?', 'É o período do ano em que as vacas são cobertas por touro ou inseminadas. Fora dele os reprodutores descansam, e os nascimentos ficam concentrados numa época só.'],
    ['Quantos dias dura a estação de monta?', 'A Embrapa recomenda três meses, podendo ser estendida conforme a fazenda. Quanto mais perto de 90 dias, maior a concentração dos nascimentos.'],
    ['Qual a melhor época para a estação de monta?', 'No Brasil Central, a Embrapa indica de outubro a março, na época das chuvas. Em outras regiões o calendário muda: confirme com o veterinário.'],
    ['Quando fazer o diagnóstico de gestação?', 'O mais cedo possível, de 30 a 45 dias depois do fim da estação. Assim as vazias são descartadas ainda em boa condição, antes da seca.'],
    ['Posso fazer a estação de monta com inseminação?', 'Pode. Segundo a Embrapa, a inseminação artificial, seja por cio observado ou em tempo fixo, pode ser aplicada dentro da estação. A IATF exige estrutura, mão de obra e custo a mais, e pede planejamento.'],
  ],
  fontes: [
    { nome: 'Embrapa Gado de Corte, Estação de Monta em Rebanhos de Gado de Corte (Comunicado Técnico 134)', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1072647/1/Estacaodemontaemrebanhos.pdf' },
  ],
  relacionados: ['calculadora-de-gestacao-bovina', 'escore-de-condicao-corporal', 'indices-zootecnicos'],
};
