// Página de captação para quem procura "sistema" (costuma ser quem cuida do escritório da fazenda, no computador).
// Consultas (colheita de 08/10/2026): "software de gestão rural", "sistema de gestão rural", "sistema para fazenda",
// "sistema para produtor rural", "programa para fazenda". Comparação por tipo de solução, sem citar marca.
// 02/11/2026: título passa a cobrir também "sistema de gestão rural" e "software de gestão de fazenda".
export const provas = [];

export default {
  slug: 'software-de-gestao-rural',
  grupo: 'escolha',
  tipo: 'guia',
  curto: 'Software de gestão rural',
  resumo: 'O que cobrar de um sistema antes de contratar.',
  title: 'Software e sistema de gestão rural grátis para fazenda',
  description: 'Software e sistema de gestão rural para fazenda: o que cobrar antes de contratar e o FINAGRO, com plano grátis para sempre e pagos desde R$ 29,90.',
  h1: 'Software e sistema de gestão rural: o que a fazenda tem de exigir',
  pergunta: 'Qual software ou sistema de gestão rural usar na fazenda?',
  resposta: 'Um software ou sistema de gestão rural precisa juntar rebanho, lavoura, dinheiro, estoque, máquinas e equipe na mesma conta, no celular e no computador. O FINAGRO faz isso, com plano grátis para sempre e pagos desde R$ 29,90 por mês. Antes de contratar qualquer sistema, peça o preço por escrito e teste a saída dos dados.',
  tela: 'inicio',
  atualizado: '2026-11-14',
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
        ['O preço está publicado no site?', 'Está. O plano Grátis é para sempre e os pagos vão de R$ 29,90 a R$ 199,90 por mês'],
        ['Cobra por animal, por hectare ou por pessoa?', 'O plano define o número de fazendas, de pessoas e de animais com ficha. Lote não tem limite'],
        ['Tem taxa de implantação?', 'Não tem. Você mesmo entra e começa'],
        ['O que acontece no fim do teste?', 'Os 14 dias com tudo liberado acabam e a conta segue no plano Grátis, sem perder nada do que foi lançado'],
        ['Lança sem sinal?', 'Lança. O registro fica no aparelho e sobe quando a internet volta'],
        ['Quantas pessoas entram?', 'Você e mais 1 no plano grátis, e até mais 50 no Grande, cada uma com papel e permissão'],
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
        'Abra [app.finagro.app](https://app.finagro.app/) no computador, baixe o [APK](/android) no Android ou o aplicativo no iPhone, na [App Store](https://apps.apple.com/br/app/finagro/id6827268381). Entre com a conta Google ou com e-mail e senha.',
        'Cadastre a fazenda e conte o que ela produz. O painel se monta para o que você cria e planta.',
        'Importe a planilha com o rebanho, as despesas ou as receitas que você já tem. No Excel, salve como CSV antes de enviar.',
        'Convide a equipe e escolha o papel de cada pessoa. Quem está no curral lança; quem está na sede confere.',
      ] },
      { p: 'O escritório da fazenda costuma esbarrar em três contas que o sistema ajuda a organizar: o desconto do [Funrural de 2026](/funrural) em cada venda, a [nota fiscal de produtor rural](/nota-fiscal-de-produtor-rural) que acompanha a carga e a renda que o [CAF da agricultura familiar](/caf-agricultura-familiar) pede para comprovar.' },
    ] },
  ],
  noFinagro: { h2: 'O que vem no plano grátis do FINAGRO', depoisDe: 3, itens: [
    '**1 fazenda**, **você e mais 1 pessoa** e **50 animais com ficha**, com lote sem limite de cabeças.',
    'Sem limite: receitas, despesas, contas, vacinas, GTA, tarefas, mão de obra, caderno de campo e documentos.',
    '**3 áreas** medidas pelo GPS do celular e **5 perguntas por dia** ao assistente FINAGRO AI.',
    'Relatórios em PDF e em planilha, e o arquivo do LCDPR no leiaute da Receita para o contador.',
    'Lançamento sem sinal, que sobe sozinho quando a internet volta.',
  ] },
  cta: { forte: 'Teste na sua fazenda antes de falar com qualquer vendedor.', texto: '14 dias com tudo liberado, sem cartão. Depois, grátis ou planos desde R$ 29,90 por mês.' },
  faqTitulo: 'Perguntas sobre software de gestão rural',
  faq: [
    ['Existe software de gestão rural gratuito?', 'Existe. O plano Grátis do FINAGRO é para sempre e sem cartão, com 1 fazenda, você e mais 1 pessoa, 50 animais com ficha e lote sem limite, e dinheiro, vacinas, GTA e tarefas sem limite. Reprodução, estoque, lavoura e máquinas entram nos planos pagos, de R$ 29,90 a R$ 199,90 por mês.'],
    ['Preciso instalar alguma coisa no computador?', 'Não. No computador o FINAGRO abre pelo navegador, em app.finagro.app. No iPhone há o aplicativo, na App Store, e no Android, o APK em finagro.app/android, com a mesma conta.'],
    ['Serve para lavoura ou só para gado?', 'Serve para os dois. Há safras, talhões, caderno de campo e custo por hectare para a lavoura, e ficha, lote, vacina e reprodução para o rebanho, com o dinheiro da fazenda num lugar só.'],
    ['O sistema substitui o contador?', 'Não. Ele organiza receitas e despesas e gera o arquivo do LCDPR no leiaute da Receita com os lançamentos. Conferir, completar e entregar continua sendo trabalho do contador.'],
    ['Quanto tempo leva para começar a usar?', 'O cadastro leva alguns minutos, sem implantação e sem treinamento agendado. Quem já tem planilha salva o arquivo como CSV, importa e começa com o rebanho carregado.'],
  ],
  fontes: [],
  relacionados: ['aplicativo-para-controle-de-gado', 'gestao-rural', 'planilha-de-gestao-rural'],
};
