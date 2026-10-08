// Guia de fundo, para quem quer organizar a fazenda e ainda não pensa em aplicativo. Consultas (colheita de
// 08/10/2026): "gestão rural", "gestão de fazenda", "administração rural", "como administrar uma fazenda".
// Sem estatística de mercado: nenhum número aqui depende de fonte de fora, só de conta.
export const provas = [];

export default {
  slug: 'gestao-rural',
  grupo: 'dinheiro',
  tipo: 'guia',
  curto: 'Gestão rural',
  resumo: 'Os quatro controles que organizam a fazenda.',
  title: 'Gestão rural: por onde começar a organizar a fazenda',
  description: 'Gestão rural na prática: os quatro controles que organizam a fazenda, o que fazer na primeira semana e os números para acompanhar todo mês.',
  h1: 'Gestão rural: os quatro controles que organizam a fazenda',
  pergunta: 'O que é gestão rural e por onde começar?',
  resposta: 'Gestão rural é saber, com número, o que a fazenda tem, o que gasta e recebe, o que produz e o que vence. Comece por quatro controles: a contagem do rebanho e das áreas, o caixa separado da conta da casa, a produção anotada por lote ou talhão e a lista do que vence no mês.',
  tela: 'fluxo',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'Os quatro controles', blocos: [
      { p: 'Fazenda bem tocada no campo pode estar perdendo dinheiro sem ninguém ver. Quatro controles mostram onde:' },
      { tabela: { colunas: ['Controle', 'A pergunta que ele responde', 'Onde anotar'], linhas: [
        ['O que eu tenho', 'Quantas cabeças, em que lote, em quantos hectares?', 'Ficha, lote e área medida'],
        ['O que eu gasto e recebo', 'Sobrou ou faltou dinheiro neste mês?', 'Receitas, despesas e contas'],
        ['O que eu produzo', 'Quanto cada lote ganhou e cada talhão colheu?', 'Pesagem, leite e caderno de campo'],
        ['O que vence', 'Que vacina, conta ou documento chega nos próximos dias?', 'Agenda de vacinas, contas e guias'],
      ] } },
      { p: 'Nenhum deles pede faculdade nem computador. Pedem o hábito de anotar na hora, no lugar onde a coisa acontece.' },
    ] },
    { h2: 'A primeira semana: um controle por dia', blocos: [
      { ol: [
        '**Segunda: conte o rebanho.** Lote por lote, com categoria e número de cabeças. Onde der, anote o peso.',
        '**Terça: meça as áreas.** Pasto, lavoura e reserva. O GPS do celular já dá a medida para dividir pasto e calcular lotação.',
        '**Quarta: separe o dinheiro.** O que é da casa sai da conta da fazenda. Daqui para a frente, todo gasto da fazenda ganha data, valor e motivo.',
        '**Quinta: liste o que vence.** Vacinas, contas, parcelas, guias e declarações dos próximos 60 dias.',
        '**Sexta: olhe o conjunto.** Com a contagem, as áreas e o caixa lado a lado, as primeiras perguntas aparecem sozinhas.',
      ] },
    ] },
    { h2: 'Os números para olhar todo mês', blocos: [
      { ul: [
        '**Saldo do caixa e contas a vencer.** O [fluxo de caixa rural](/fluxo-de-caixa-rural) mostra se o mês fecha antes de ele acabar.',
        '**Ganho de peso do lote.** A [calculadora de GMD](/calculadora-gmd) diz quanto cada animal engordou por dia entre duas pesagens.',
        '**Arrobas no pasto.** A [calculadora de arroba](/calculadora-de-arroba) passa o peso vivo para arrobas e para reais.',
        '**Lotação.** Cabeças e peso por hectare, pela [taxa de lotação](/taxa-de-lotacao).',
        '**Custo por hectare e por saca** na lavoura, com o [custo de produção por hectare](/custo-de-producao-por-hectare).',
      ] },
      { p: 'O número sozinho diz pouco. O que ensina é comparar o lote com ele mesmo no mês anterior e o talhão com o talhão do lado.' },
    ] },
    { h2: 'Os erros que mais custam', blocos: [
      { ul: [
        '**Misturar a conta da casa com a da fazenda.** Sem separar, ninguém sabe se a atividade paga as próprias contas.',
        '**Conhecer o lote só de bater o olho.** Sem pesagem, o animal que parou de ganhar passa meses comendo sem render.',
        '**Comprar de boca.** Compra sem registro vira conta que aparece de surpresa no fim do mês.',
        '**Deixar para lançar depois.** O que fica na caderneta para passar a limpo chega incompleto ou não chega.',
        '**Depender da memória para o que vence.** Vacina atrasada trava a guia de trânsito no dia do embarque.',
      ] },
    ] },
    { h2: 'Quanto custa não anotar', blocos: [
      { p: 'Dá para pôr em número. Um lote de 30 bois que deixa de ganhar 200 gramas por dia, sem ninguém perceber, perde 6 kg de peso vivo por dia. Em 60 dias são 360 kg. Com 52% de rendimento de carcaça, são 12,48 arrobas que não foram para a balança.' },
      { p: 'Com a arroba a R$ 300, o lote deixou de render R$ 3.744 em dois meses. A pesagem que mostraria a queda leva uma manhã. No dinheiro é igual: a conta paga duas vezes e o insumo comprado sem precisão só aparecem para quem lança e confere.' },
      { destaque: 'Os números são só para a conta. Troque pelo ganho, pelo rendimento e pelo preço da sua fazenda na [calculadora de arroba](/calculadora-de-arroba).' },
    ] },
    { h2: 'Caderno, planilha ou aplicativo: quando trocar', blocos: [
      { p: 'O caderno funciona enquanto uma pessoa só anota e a conta cabe na cabeça. A planilha aguenta mais, e as nossas são grátis: [planilha de controle de gado](/planilha-de-controle-de-gado) e [planilha de gestão rural](/planilha-de-gestao-rural).' },
      { p: 'A hora de passar para um aplicativo chega quando duas pessoas lançam, quando o dado nasce no curral e a planilha está na sede, ou quando alguma coisa vence sem aviso. Veja o que conferir em [aplicativo para controle de gado](/aplicativo-para-controle-de-gado) e em [software de gestão rural](/software-de-gestao-rural).' },
    ] },
  ],
  noFinagro: { h2: 'Os quatro controles dentro do FINAGRO', itens: [
    '**O que eu tenho:** animais com ficha, lotes de qualquer tamanho e áreas medidas pelo GPS do celular.',
    '**O que eu gasto e recebo:** receitas, despesas, contas a pagar e a receber e fluxo de caixa com o saldo previsto.',
    '**O que eu produzo:** pesagens com o ganho entre elas, produção, safras, talhões e caderno de campo.',
    '**O que vence:** vacinas, contas, guias de trânsito e as declarações do seu estado, com aviso.',
  ] },
  cta: { forte: 'Os quatro controles no celular, lançados na hora em que acontecem.', texto: 'Grátis até 3 fazendas, 5 pessoas e 1.000 animais com ficha. Sem cartão.' },
  faq: [
    ['O que é gestão rural?', 'É administrar a fazenda com número: saber o que ela tem, o que gasta e recebe, o que produz e o que vence, e usar isso para decidir a compra, a venda e o manejo.'],
    ['Por onde começo se nunca anotei nada?', 'Pela contagem do rebanho e pela separação do dinheiro da casa e da fazenda. Com esses dois controles em dia, os outros entram aos poucos.'],
    ['Gestão rural é só para fazenda grande?', 'Não. Em fazenda de qualquer tamanho, um gasto esquecido ou um lote que não ganha peso mexe no resultado do ano. O que muda é a quantidade de lançamentos, não a necessidade deles.'],
    ['Preciso de computador para fazer gestão rural?', 'Não. Dá para começar no caderno e seguir no celular. O que importa é anotar na hora e conferir os números todo mês.'],
    ['Qual a diferença entre gestão rural e contabilidade?', 'A contabilidade cuida dos impostos e das declarações, olhando o que já passou. A gestão usa os mesmos lançamentos para decidir o mês que vem. Uma alimenta a outra, e o contador continua necessário.'],
  ],
  fontes: [],
  relacionados: ['fluxo-de-caixa-rural', 'controle-de-rebanho', 'planilha-de-gestao-rural'],
};
