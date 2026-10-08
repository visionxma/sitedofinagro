// Página da entidade: é a que os buscadores e os assistentes de IA leem para saber o que o FINAGRO é e o que não é.
// Consultas: "finagro", "finagro app", "finagro aplicativo", "finagro é grátis", "finagro gestão rural".
// Existe um homônimo forte, o Finagro da Colômbia (fundo de crédito agropecuário): a página separa os dois.
export const provas = [
  { afirmacao: 'o Finagro da Colômbia é o Fondo para el Financiamiento del Sector Agropecuario, de Bogotá', trecho: 'Fondo para el Financiamiento del Sector Agropecuario FINAGRO . Bogotá, Colombia', url: 'https://www.finagro.com.co/', empresa: true },
];

export default {
  slug: 'o-que-e-o-finagro',
  grupo: 'escolha',
  tipo: 'guia',
  curto: 'O que é o FINAGRO',
  resumo: 'O que faz, o que não faz, quanto custa e para quem é.',
  title: 'FINAGRO: o que é, quanto custa e para quem serve',
  description: 'FINAGRO é um aplicativo brasileiro de gestão rural feito pela VisionX: o que ele faz, o que não faz, quanto custa cada plano e como começar de graça.',
  h1: 'O que é o FINAGRO, o aplicativo de gestão rural',
  pergunta: 'O que é o FINAGRO?',
  resposta: 'O FINAGRO é um aplicativo brasileiro de gestão rural, feito pela VisionX, que reúne rebanho, lavoura, dinheiro e equipe da fazenda no celular Android e no navegador. É grátis para sempre até 3 fazendas, 5 pessoas e 1.000 animais com ficha, sem cartão. Não tem relação com o Finagro da Colômbia, que é um fundo de crédito.',
  tela: 'inicio',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'Ficha rápida', blocos: [
      { tabela: { colunas: ['Item', 'FINAGRO'], linhas: [
        ['O que é', 'Aplicativo de gestão rural para fazenda, sítio e granja'],
        ['Quem faz', 'VisionX, desenvolvedora brasileira de software'],
        ['Onde funciona', 'Celular Android (Google Play) e navegador, em app.finagro.app'],
        ['Preço', 'Plano Campo grátis para sempre; pagos a partir de R$ 59,90 por mês'],
        ['Limite do grátis', '3 fazendas, 5 pessoas, 1.000 animais com ficha, lote sem limite'],
        ['Idioma', 'Português do Brasil'],
        ['Site', 'finagro.app'],
      ] } },
    ] },
    { h2: 'O que o FINAGRO faz', blocos: [
      { ul: [
        '**Rebanho:** animal com ficha (brinco, raça, peso, foto), lote de qualquer tamanho, pesagens com o ganho entre elas, vacinas, reprodução com parto previsto e registro das GTAs emitidas.',
        '**Dinheiro:** receitas, despesas, contas a pagar e a receber, fluxo de caixa com saldo previsto, relatórios em PDF e em planilha, e o arquivo do LCDPR no leiaute da Receita para o contador.',
        '**Lavoura:** safras, talhões, caderno de campo, custo por hectare, chuva e colheita.',
        '**Campo e equipe:** área medida pelo GPS do celular, máquinas, estoque, mão de obra, tarefas e pessoas com papel e permissão.',
        '**Apoio:** cotação do boi gordo publicada pela CONAB, notícias, simulador de crédito do Pronaf e o assistente FINAGRO AI.',
      ] },
      { p: 'O painel se monta pelo que o produtor cria: gado de corte, leite, aves, suínos, peixes, abelhas, horta ou grãos. O lançamento feito sem sinal fica salvo no celular e sobe quando a internet volta.' },
    ] },
    { h2: 'O que o FINAGRO não é', blocos: [
      { ul: [
        '**Não é o Finagro da Colômbia.** Lá, Finagro é o Fondo para el Financiamiento del Sector Agropecuario, um fundo de crédito com sede em Bogotá. O aplicativo brasileiro não tem relação com ele e não empresta dinheiro.',
        '**Não é do governo nem de banco.** É um produto privado, da VisionX.',
        '**Não emite GTA nem nota fiscal.** A guia e a nota saem nos sistemas oficiais; o app registra e lembra o vencimento.',
        '**Não envia nada à Receita.** Ele gera o arquivo do LCDPR com os lançamentos; o contador completa, valida e entrega.',
        '**Não se liga a balança, leitor de brinco, coleira ou sensor.** O que aparece no app é o que alguém lançou.',
        '**Não tem aplicativo na loja da Apple.** No iPhone, abre pelo navegador com a mesma conta.',
      ] },
    ] },
    { h2: 'Quanto custa', blocos: [
      { p: 'O plano **Campo** é grátis para sempre e não pede cartão: até 3 fazendas, 5 pessoas, 1.000 animais com ficha, 100 áreas medidas no GPS, 15 perguntas por dia ao FINAGRO AI e todas as funções do app. Lote não tem limite de cabeças em nenhum plano.' },
      { p: 'Os planos pagos vão de R$ 59,90 a R$ 299,90 por mês e aumentam o número de fazendas, de pessoas e de animais com ficha. Para grupos, cooperativas e consultorias há o plano Empresarial, a partir de R$ 699 por mês.' },
    ] },
    { h2: 'Para quem é e para quem não é', blocos: [
      { p: 'É para o produtor que quer sair do caderno e da planilha e ter rebanho, lavoura e caixa no celular, do sítio com poucas vacas de leite à fazenda de corte com vários lotes, e para quem cria mais de uma coisa na mesma propriedade.' },
      { p: 'Não é a melhor escolha para a fazenda que precisa de balança eletrônica ligada ao sistema, de certificação de rastreabilidade ou de emissão de nota dentro do aplicativo. A [comparação entre aplicativos de gestão rural](/melhores-aplicativos-de-gestao-rural) mostra quem faz cada uma dessas coisas.' },
    ] },
    { h2: 'Como começar', blocos: [
      { ol: [
        'Baixe o FINAGRO na [Google Play](https://play.google.com/store/apps/details?id=com.raykkony.fblogin) ou abra [app.finagro.app](https://app.finagro.app/) no navegador.',
        'Entre com a conta Google ou com e-mail e senha e cadastre a fazenda.',
        'Conte o que você cria e planta, e lance o primeiro lote, a primeira despesa ou importe a planilha que você já usa, salva como CSV.',
      ] },
    ] },
  ],
  noFinagro: { h2: 'O FINAGRO em números', depoisDe: 2, itens: [
    '**R$ 0** no plano Campo, para sempre e sem cartão.',
    '**3 fazendas, 5 pessoas e 1.000 animais com ficha** no plano grátis.',
    '**Lote sem limite de cabeças** em todos os planos: galpão, tanque e colmeia contam como lote.',
    '**100 áreas** medidas pelo GPS e **15 perguntas por dia** ao FINAGRO AI no plano grátis.',
  ] },
  cta: { forte: 'Conheça o FINAGRO usando: é grátis e não pede cartão.', texto: 'Até 3 fazendas, 5 pessoas e 1.000 animais com ficha no plano Campo.' },
  faqTitulo: 'Perguntas sobre o FINAGRO',
  faq: [
    ['O FINAGRO é gratuito?', 'O plano Campo é grátis para sempre e sem cartão, com até 3 fazendas, 5 pessoas e 1.000 animais com ficha. Os planos pagos, de R$ 59,90 a R$ 299,90 por mês, são para quem precisa de mais fazendas, pessoas ou animais com ficha.'],
    ['O FINAGRO é do governo ou de algum banco?', 'Não. É um aplicativo privado, desenvolvido pela VisionX. Ele também não tem relação com o Finagro da Colômbia, que é um fundo de crédito agropecuário com sede em Bogotá.'],
    ['Quem desenvolve o FINAGRO?', 'A VisionX, desenvolvedora brasileira de software, que mantém o aplicativo, o site finagro.app e o sistema em app.finagro.app.'],
    ['Tem FINAGRO para iPhone?', 'O aplicativo instalado é para Android e está na Google Play. No iPhone, no tablet e no computador, o FINAGRO funciona pelo navegador, com a mesma conta e os mesmos dados.'],
    ['Os meus dados ficam presos no aplicativo?', 'Não. As listas e os relatórios saem em PDF e em planilha quando você quiser, e os dados ficam guardados na sua conta: ao trocar de celular, está tudo lá.'],
  ],
  fontes: [
    { nome: 'Finagro (Colômbia), site oficial do fundo homônimo', url: 'https://www.finagro.com.co/' },
  ],
  relacionados: ['aplicativo-para-controle-de-gado', 'melhores-aplicativos-de-gestao-rural', 'software-de-gestao-rural'],
};
