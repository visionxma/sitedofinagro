// Fonte única do site do FINAGRO: entidade, planos, perguntas e páginas.
// Daqui saem a tela (blocos gerados no HTML), o JSON-LD, o sitemap.xml, o robots.txt e o llms.txt
// (scripts/gerar.mjs). Texto duplicado diverge; por isso nada disto se escreve à mão em outro lugar.
//
// Planos: copiados do catálogo do sistema (FINAGRO/src/core/planos.js, conferido em 07/10/2026).
// Se o catálogo mudar lá, muda aqui e roda `node scripts/gerar.mjs`.

export const SITE = 'https://finagro.app';
export const ATUALIZADO = '2026-10-08';

export const ENTIDADE = {
  nome: 'FINAGRO',
  frase: 'O FINAGRO é um aplicativo brasileiro de gestão rural, no celular e no computador, que reúne rebanho, lavoura, dinheiro e equipe da fazenda e é grátis até 1.000 animais com ficha.',
  app: 'https://app.finagro.app/',
  android: 'https://play.google.com/store/apps/details?id=com.raykkony.fblogin',
  instagram: 'https://www.instagram.com/finagro.app/',
  privacidade: 'https://projeto.finagro.app/pol%C3%ADtica-de-privacidade',
  logo: `${SITE}/icone-512.png`,
  imagem: `${SITE}/assets/og/finagro-og-20261008b.png`,
  desenvolvedor: { nome: 'VisionX', url: 'https://visionxma.com/' },
  naoE: [
    'Não emite GTA: a guia é emitida no sistema da defesa agropecuária do estado; o FINAGRO registra as GTAs e lembra o vencimento.',
    'Não transmite o LCDPR à Receita: gera o arquivo no leiaute oficial com os lançamentos, e o contador completa e valida no programa da Receita.',
    'Não é rastreador de animal por coleira ou brinco eletrônico, nem balança conectada.',
    'Não tem aplicativo na App Store: no iPhone, funciona pelo navegador em app.finagro.app.',
  ],
};

const lim = (o) => o;
export const PLANOS = [
  { id: 'campo', nome: 'Campo', para: 'Para começar a organizar a fazenda hoje', mes: 0, ano: 0,
    itens: ['Até 3 fazendas', 'Até 5 pessoas', '1.000 animais com ficha', 'Lote sem limite (galpão, tanque, colmeia)', '100 áreas medidas no GPS', '15 perguntas por dia ao FINAGRO AI', '30 fotos de animais', 'Todas as funções do app'] },
  { id: 'essencial', nome: 'Essencial', para: 'Para quem toca a fazenda no dia a dia', mes: 59.9, ano: 599,
    itens: ['Até 6 fazendas', 'Até 10 pessoas', '5.000 animais com ficha', 'Lote sem limite', '300 áreas no GPS', '50 perguntas por dia ao FINAGRO AI', '200 fotos de animais', 'Suporte pelo WhatsApp em horário comercial'] },
  { id: 'profissional', nome: 'Profissional', para: 'Para a fazenda que virou operação', mes: 149.9, ano: 1499,
    itens: ['Até 15 fazendas', 'Até 30 pessoas', '25.000 animais com ficha', 'Lote sem limite', '1.000 áreas no GPS', '300 perguntas por dia ao FINAGRO AI', '1.000 fotos de animais', 'Suporte pelo WhatsApp com prioridade'] },
  { id: 'avancado', nome: 'Avançado', para: 'Para quem toca várias fazendas', mes: 299.9, ano: 2999,
    itens: ['Até 50 fazendas', 'Até 100 pessoas', 'Animais com ficha sem limite', 'Áreas no GPS sem limite', '600 perguntas por dia ao FINAGRO AI', '3.000 fotos de animais', 'Marketplace sem comissão', 'Suporte com prazo de resposta combinado'] },
];
export const EMPRESARIAL = { nome: 'Empresarial', aPartirDe: 699, texto: 'sem limite de fazenda, gente e rebanho, com gerente de conta' };
export const COMPLEMENTOS = [{ nome: 'Fazenda extra', mes: 24.9 }, { nome: 'Pessoa extra na equipe', mes: 14.9 }];
export const TESTE_DIAS = 14;
export const LIMITES = { campo: [3, 5, 1000], essencial: [6, 10, 5000], profissional: [15, 30, 25000], avancado: [50, 100, Infinity] };

export const brl = (v) => v.toLocaleString('pt-BR', { minimumFractionDigits: v % 1 ? 2 : 0, maximumFractionDigits: 2 });

// Perguntas da página inicial. As 5 primeiras ficam à vista; o resto abre em "Ver mais perguntas".
export const PERGUNTAS = [
  ['O FINAGRO é grátis mesmo?', 'É. O plano Campo é grátis para sempre e não pede cartão: até 3 fazendas, 5 pessoas e 1.000 animais com ficha, com lote de qualquer tamanho e todas as funções do app. Os planos pagos, de R$ 59,90 a R$ 299,90 por mês, são para quem precisa de mais fazendas, gente ou animais com ficha.'],
  ['Funciona sem internet no curral?', 'Para lançar, funciona. Sem sinal, o gasto, a venda ou a vacina ficam salvos no celular e sobem sozinhos quando a internet voltar, e o app avisa isso na hora. Para entrar pela primeira vez num aparelho e para ver o que a equipe lançou em outro celular, é preciso sinal.'],
  ['Serve para quem cria pouco? E para quem cria muito?', 'Serve dos dois lados. Você conta o que produz e quantos, e o painel se ajusta: o leiteiro com 12 vacas vê o leite do dia e a reprodução; a granja com 1 milhão de aves vê os galpões e o trato. Galpão, tanque, colmeia e lote de gado contam como um lote só, sem limite de cabeças.'],
  ['Tem para iPhone?', 'O aplicativo de celular está na Play Store para Android. No iPhone, no tablet e no computador, o FINAGRO funciona pelo navegador em app.finagro.app, com a mesma conta e os mesmos dados.'],
  ['O FINAGRO emite a GTA?', 'Não. A GTA (Guia de Trânsito Animal) é emitida no sistema da defesa agropecuária do seu estado. No FINAGRO você registra as GTAs emitidas, o app lembra 1 dia antes do vencimento e avisa quando falta anotar a vacina que trava a guia.'],
  ['O app gera o LCDPR?', 'Gera o arquivo do Livro Caixa Digital do Produtor Rural no leiaute da Receita Federal, com as receitas e despesas lançadas. O contador confere, completa os dados do contribuinte e das contas bancárias e valida no programa da Receita antes de entregar.'],
  ['Consigo trazer a planilha que já uso?', 'Consegue. O FINAGRO importa planilha do Excel (.xls ou .xlsx), então ninguém precisa redigitar o rebanho ou os lançamentos que já estão na planilha.'],
  ['Quantas pessoas podem usar a mesma fazenda?', 'No plano Campo, 5 pessoas, cada uma com o seu papel e as suas permissões. Para mais gente: Essencial (10), Profissional (30), Avançado (100) ou pessoa extra por R$ 14,90 por mês.'],
  ['Os meus dados ficam com quem?', 'Ficam com você, guardados na nuvem com a sua conta: trocou de celular, está tudo lá. As listas e os relatórios saem em PDF e planilha quando você quiser, e o tratamento dos dados está descrito na política de privacidade do FINAGRO.'],
  ['O que é o FINAGRO AI?', 'É o assistente do app para dúvidas de gestão rural, pecuária e agricultura. No plano Campo são 15 perguntas por dia, e a conta zera à meia-noite.'],
];

// Páginas do site (sitemap, navegação do rodapé, llms.txt).
export const PAGINAS = [
  { caminho: '/', titulo: 'FINAGRO: app de gestão rural grátis para fazenda e sítio', resumo: 'A página principal: o que o app faz, as telas reais, para quem é e as perguntas frequentes.' },
  { caminho: '/controle-de-rebanho', titulo: 'Controle de rebanho no celular', resumo: 'Ficha do animal, lote, pesagem, vacina e reprodução: o que anotar e como o app organiza.' },
  { caminho: '/fluxo-de-caixa-rural', titulo: 'Fluxo de caixa rural', resumo: 'Como montar o fluxo de caixa da fazenda e o que o app calcula sozinho.' },
  { caminho: '/caderno-de-campo', titulo: 'Caderno de campo digital', resumo: 'O que anotar em cada talhão e como o registro vira custo por hectare e rastreio.' },
  { caminho: '/gta', titulo: 'GTA: Guia de Trânsito Animal', resumo: 'O que é, quem emite, o que trava a guia e como o app lembra o vencimento.' },
  { caminho: '/lcdpr', titulo: 'LCDPR: Livro Caixa Digital do Produtor Rural', resumo: 'Quem é obrigado, prazo, multa e como gerar o arquivo com os lançamentos.' },
  { caminho: '/calculadora-gmd', titulo: 'Calculadora de GMD do gado', resumo: 'Ganho médio diário: a conta, a calculadora e como usar o resultado na engorda.' },
];
