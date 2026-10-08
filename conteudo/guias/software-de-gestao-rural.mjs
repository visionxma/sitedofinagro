// Página de captação para quem procura "sistema" (costuma ser quem cuida do escritório da fazenda, no computador).
// Consultas (colheita de 08/10/2026): "software de gestão rural", "sistema de gestão rural", "sistema para fazenda",
// "sistema para produtor rural", "programa para fazenda". Comparação por tipo de solução, sem citar marca.
export const provas = [];

export default {
  slug: 'software-de-gestao-rural',
  grupo: 'escolha',
  tipo: 'guia',
  curto: 'Software de gestão rural',
  resumo: 'O que cobrar de um sistema antes de contratar.',
  title: 'Software de gestão rural grátis: o que cobrar do sistema',
  description: 'Software de gestão rural: o que um sistema para fazenda tem de cobrir, sete perguntas antes de contratar e onde entra o FINAGRO, grátis até 3 fazendas.',
  h1: 'Software de gestão rural: o que um sistema para fazenda tem de entregar',
  pergunta: 'Qual software de gestão rural usar na fazenda?',
  resposta: 'Um software de gestão rural precisa juntar rebanho, lavoura, dinheiro, estoque, máquinas e equipe na mesma conta, no celular e no computador. O FINAGRO faz isso e é grátis até 3 fazendas, 5 pessoas e 1.000 animais com ficha, sem cartão. Antes de contratar qualquer sistema, peça o preço por escrito e teste a saída dos dados.',
  tela: 'inicio',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'O que o sistema tem de cobrir', blocos: [
      { p: 'Sistema que cuida só do gado deixa o dinheiro na planilha. Sistema que cuida só do dinheiro não sabe quantas cabeças tem no pasto. Na fazenda, as seis áreas abaixo conversam o tempo todo:' },
      { tabela: { colunas: ['Área', 'O que controlar', 'No FINAGRO'], linhas: [
        ['Rebanho', 'Ficha, lote, pesagem, vacina e reprodução', 'Animais, Lotes, Sanidade e Reprodução'],
        ['Lavoura', 'Safra, talhão, aplicação e colheita', 'Lavoura e Caderno de campo'],
        ['Dinheiro', 'Receita, despesa, conta a vencer e caixa', 'Receitas, Despesas, Contas e fluxo de caixa'],
        ['Estoque e máquinas', 'Insumo que entra e sai, manutenção', 'Estoque e Máquinas'],
        ['Gente', 'Quem trabalha e quem lança', 'Mão de obra e Equipe no app'],
        ['Papel e data', 'Documento guardado e o que vence', 'Documentos e O que vence'],
      ] } },
    ] },
    { h2: 'Sistema instalado, sistema na nuvem ou aplicativo', blocos: [
      { ul: [
        '**Sistema instalado no computador da sede:** os números ficam numa máquina só. O lançamento do curral espera alguém voltar para a sede e passar a limpo.',
        '**Sistema na nuvem:** abre de qualquer computador com internet. Pergunte se também tem aplicativo de campo e se ele funciona sem sinal.',
        '**Aplicativo com versão para computador:** lança no celular, no pasto, e confere na tela grande, no escritório, com a mesma conta. É o caso do FINAGRO.',
      ] },
      { p: 'O que não pode acontecer é o dado ser anotado numa caderneta para alguém digitar depois. Cada vez que um número é passado a limpo, uma parte se perde.' },
    ] },
    { h2: 'Sete perguntas para fazer antes de contratar', blocos: [
      { tabela: { colunas: ['Pergunte ao fornecedor', 'No FINAGRO'], linhas: [
        ['O preço está publicado no site?', 'Está. O plano Campo é grátis e os pagos começam em R$ 59,90 por mês'],
        ['Cobra por animal, por hectare ou por pessoa?', 'O plano define o número de fazendas, de pessoas e de animais com ficha. Lote não tem limite'],
        ['Tem taxa de implantação?', 'Não tem. Você mesmo entra e começa'],
        ['O que acontece no fim do teste?', 'O plano Campo não tem data para acabar: o acesso continua'],
        ['Lança sem sinal?', 'Lança. O registro fica no aparelho e sobe quando a internet volta'],
        ['Quantas pessoas entram?', '5 no plano grátis, cada uma com papel e permissão'],
        ['Consigo tirar meus dados?', 'Listas e relatórios saem em PDF e em planilha'],
      ] } },
      { destaque: 'Peça as respostas por escrito. Sistema que não mostra preço nem deixa você sair com os seus dados cobra essa conta mais tarde.' },
    ] },
    { h2: 'Quando o FINAGRO não é a melhor escolha', blocos: [
      { p: 'Algumas fazendas precisam de recursos que o FINAGRO não tem:' },
      { ul: [
        'Emissão de nota fiscal de produtor e de GTA dentro do próprio sistema.',
        'Envio de declarações à Receita. O FINAGRO gera o arquivo do LCDPR com os lançamentos, e o contador completa, valida e entrega.',
        'Balança eletrônica, leitor de brinco e sensores ligados ao sistema.',
        'Imagem de satélite da lavoura e telemetria de máquinas.',
      ] },
      { p: 'Nesses casos, procure um sistema especializado nessa parte. Muita fazenda usa os dois: o especializado para a nota ou para a balança, e o FINAGRO para o rebanho, a lida e o caixa do dia a dia.' },
    ] },
    { h2: 'Do curral ao escritório com a mesma conta', blocos: [
      { ol: [
        'Abra [app.finagro.app](https://app.finagro.app/) no computador ou baixe o aplicativo na [Google Play](https://play.google.com/store/apps/details?id=com.raykkony.fblogin), e entre com a conta Google ou com e-mail e senha.',
        'Cadastre a fazenda e conte o que ela produz. O painel se monta para o que você cria e planta.',
        'Importe a planilha com o rebanho, as despesas ou as receitas que você já tem. No Excel, salve como CSV antes de enviar.',
        'Convide a equipe e escolha o papel de cada pessoa. Quem está no curral lança; quem está na sede confere.',
      ] },
    ] },
  ],
  noFinagro: { h2: 'O que vem no plano grátis do FINAGRO', depoisDe: 3, itens: [
    'Até **3 fazendas**, **5 pessoas** e **1.000 animais com ficha**, com lote sem limite de cabeças.',
    'Todas as funções do app: rebanho, lavoura, dinheiro, estoque, máquinas, mão de obra e documentos.',
    '**100 áreas** medidas pelo GPS do celular e **15 perguntas por dia** ao assistente FINAGRO AI.',
    'Relatórios em PDF e em planilha, e o arquivo do LCDPR no leiaute da Receita para o contador.',
    'Lançamento sem sinal, que sobe sozinho quando a internet volta.',
  ] },
  cta: { forte: 'Teste na sua fazenda antes de falar com qualquer vendedor.', texto: 'Grátis até 3 fazendas, 5 pessoas e 1.000 animais com ficha. Sem cartão.' },
  faqTitulo: 'Perguntas sobre software de gestão rural',
  faq: [
    ['Existe software de gestão rural gratuito?', 'Existe. O plano Campo do FINAGRO é grátis para sempre e sem cartão, com até 3 fazendas, 5 pessoas e 1.000 animais com ficha, e traz todas as funções do app.'],
    ['Preciso instalar alguma coisa no computador?', 'Não. No computador o FINAGRO abre pelo navegador, em app.finagro.app. No celular Android há o aplicativo na Google Play, com a mesma conta.'],
    ['Serve para lavoura ou só para gado?', 'Serve para os dois. Há safras, talhões, caderno de campo e custo por hectare para a lavoura, e ficha, lote, vacina e reprodução para o rebanho, com o dinheiro da fazenda num lugar só.'],
    ['O sistema substitui o contador?', 'Não. Ele organiza receitas e despesas e gera o arquivo do LCDPR no leiaute da Receita com os lançamentos. Conferir, completar e entregar continua sendo trabalho do contador.'],
    ['Quanto tempo leva para começar a usar?', 'O cadastro leva alguns minutos, sem implantação e sem treinamento agendado. Quem já tem planilha salva o arquivo como CSV, importa e começa com o rebanho carregado.'],
  ],
  fontes: [],
  relacionados: ['aplicativo-para-controle-de-gado', 'gestao-rural', 'planilha-de-gestao-rural'],
};
