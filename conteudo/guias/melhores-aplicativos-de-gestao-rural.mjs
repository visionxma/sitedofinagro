// Comparativo com fonte. Consultas (colheita de 08/10/2026): "melhores aplicativos de gestão rural", "melhor
// aplicativo para fazenda", "aplicativo de gestão rural", "melhor aplicativo para controle de gado".
// Regra: do concorrente só entra o que o SITE OFICIAL dele publica, com o trecho em `provas` (empresa: true), lido em
// 08/10/2026. Preço que o site não mostra aparece como "sob consulta". A página diz onde o FINAGRO perde.
export const provas = [
  { afirmacao: 'Leigado: plano Corte 300 a R$ 149,90 por mês, mais licença de uso e implantação de R$ 340,00 cada', trecho: 'CORTE 300 R$ 149 ,90 / mês Licença de uso R$ 340,00 Implantação R$ 340,00 Propriedade 01 Total de animais 300', url: 'https://leigado.com.br/planos-e-precos', empresa: true },
  { afirmacao: 'Leigado: aplicativo para Android e iOS', trecho: 'Em lactação até 40 Sistema Web Aplicativo (Android e iOS)', url: 'https://leigado.com.br/planos-e-precos', empresa: true },
  { afirmacao: 'Leigado: depois do teste de 15 dias o acesso é bloqueado até contratar', trecho: 'Depois do teste grátis de 15 dias, o aplicativo é pago? Sim, mas não é uma cobrança automática, após o teste o aplicativo vai bloquear o acesso automáticamente', url: 'https://leigado.com.br/perguntas-frequentes', empresa: true },
  { afirmacao: 'Leigado: usuários ilimitados e uso sem internet', trecho: 'O Leigado permite cadastrar usuários ilimitados sem custo adicional', url: 'https://leigado.com.br/perguntas-frequentes', empresa: true },
  { afirmacao: 'Leigado: trabalha com leitor de brinco eletrônico', trecho: 'você pode gerenciar os manejos utilizando um bastão de leitura de brincos', url: 'https://leigado.com.br/perguntas-frequentes', empresa: true },
  { afirmacao: 'JetBov: a página de planos pede demonstração e orçamento, sem valor publicado', trecho: 'Confira as modalidades abaixo, e solicite uma demonstração', url: 'https://jetbov.com/planos-e-precos/', empresa: true },
  { afirmacao: 'JetBov: coleta sem internet pelo aplicativo e automação com RFID e balança eletrônica', trecho: 'Coleta de dados offline (via app) ✔ ✔ ✔ ✔ Automação com RFID e balanças eletrônicas (via apps de coleta)', url: 'https://jetbov.com/planos-e-precos/', empresa: true },
  { afirmacao: 'iRancho: o teste gratuito é liberado depois do cadastro e da apresentação', trecho: 'Informe seus dados para receber a apresentação do sistema e o teste gratuito', url: 'https://www.irancho.com.br/', empresa: true },
  { afirmacao: 'iRancho: o curral e o aplicativo funcionam sem internet', trecho: 'Toda a parte do curral (manejos) e o Aplicativo iRancho funcionam sem internet', url: 'https://www.irancho.com.br/perguntas-frequentes/', empresa: true },
  { afirmacao: 'iRancho: aplicativo para Android; no iPhone, pelo navegador', trecho: 'Ainda não está disponível para aparelhos com sistema IOS, contudo, nestes dispositivos, o aplicativo pode ser acessado via weblink', url: 'https://www.irancho.com.br/perguntas-frequentes/', empresa: true },
  { afirmacao: 'iRancho: feito para cria, recria, engorda ou ciclo completo', trecho: 'O iRancho é para quem faz cria, recria, engorda ou ciclo completo', url: 'https://www.irancho.com.br/perguntas-frequentes/', empresa: true },
  { afirmacao: 'Ideagri: teste grátis de 30 dias e plano conforme atividade, animais ativos e acessos', trecho: 'pagos através de assinaturas mensais, que variam de acordo com a atividade principal da propriedade, a quantidade de animais ativos e a quantidade de acessos', url: 'https://centralderecursos.ideagri.com.br/ideagri-corte', empresa: true },
  { afirmacao: 'Ideagri: teste grátis de 30 dias', trecho: 'Teste grátis por 30 dias Qual o valor do investimento? A prestação de serviços IDEAGRI ocorre através de planos', url: 'https://centralderecursos.ideagri.com.br/ideagri-corte', empresa: true },
  { afirmacao: 'iRancho: tem módulo adicional de confinamento', trecho: 'Módulos adicionais para descomplicar a gestão iRancho Confinamento', url: 'https://www.irancho.com.br/', empresa: true },
  { afirmacao: 'Leigado: o aplicativo registra sem internet e sincroniza depois', trecho: 'com o aplicativo Leigado você registra dados e usa o app mesmo sem internet', url: 'https://leigado.com.br/perguntas-frequentes', empresa: true },
  { afirmacao: 'Aegro: controle financeiro por hectare e por cabeça', trecho: 'Saiba Exatamente Quanto Custa Cada Hectare e Cada Cabeça de Gado', url: 'https://www.aegro.com.br/', empresa: true },
  { afirmacao: 'Aegro: emite NF-e e MDF-e de graça, inclusive no plano gratuito', trecho: 'no Aegro é totalmente grátis. Sem limite de quantidade e sem custos escondidos. Funciona até no plano gratuito', url: 'https://www.aegro.com.br/', empresa: true },
  { afirmacao: 'Aegro: emissão ligada à SEFAZ', trecho: 'Com o Aegro, você emite NF-e e MDF-e de graça, conectado direto à SEFAZ', url: 'https://www.aegro.com.br/', empresa: true },
];

export default {
  slug: 'melhores-aplicativos-de-gestao-rural',
  grupo: 'escolha',
  tipo: 'comparativo',
  curto: 'Melhores apps de gestão',
  resumo: 'Seis opções comparadas pelo que cada site publica.',
  title: 'Melhores aplicativos de gestão rural em 2026: comparação',
  description: 'Seis aplicativos de gestão rural comparados pelo que o site de cada um publica: preço, teste grátis, uso sem internet e em que cada um é mais forte.',
  h1: 'Melhores aplicativos de gestão rural: seis opções comparadas com fonte',
  pergunta: 'Qual é o melhor aplicativo de gestão rural?',
  resposta: 'Depende do que a fazenda precisa. O FINAGRO é grátis para sempre até 1.000 animais com ficha e junta rebanho, lavoura e dinheiro. O Aegro emite nota fiscal de produtor. O JetBov trabalha com balança eletrônica e o Leigado, com leitor de brinco. O iRancho é voltado ao gado de corte. Veja abaixo o que cada site publica.',
  tela: 'inicio',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'Como esta comparação foi feita', blocos: [
      { p: 'O FINAGRO é nosso, então a régua tem de ser clara. De cada concorrente entrou só o que o site oficial dele publicava em 8 de outubro de 2026, e o endereço de cada informação está nas fontes, no fim da página. O que o site não mostra aparece como "sob consulta".' },
      { p: 'Nenhuma nota, nenhum "o melhor do mercado". A tabela mostra o que dá para conferir sozinho, e a seção seguinte diz em que cada um ganha, inclusive do FINAGRO.' },
    ] },
    { h2: 'A comparação lado a lado', blocos: [
      { tabela: { colunas: ['Aplicativo', 'Preço publicado', 'Grátis ou teste', 'Onde é mais forte'], linhas: [
        ['FINAGRO', 'Grátis; pagos a partir de R$ 59,90 por mês', 'Plano grátis para sempre, sem cartão', 'Gado, lavoura, outras criações e dinheiro num app só'],
        ['Aegro', 'Tem plano gratuito', 'Plano gratuito', 'Financeiro por hectare e por cabeça, e nota fiscal do produtor'],
        ['Leigado', 'R$ 149,90 por mês (corte, 300 animais), mais R$ 340 de licença e R$ 340 de implantação', 'Teste de 15 dias', 'Leite e corte, com leitor de brinco eletrônico'],
        ['JetBov', 'Sob consulta', 'Demonstração', 'Pecuária com balança eletrônica e identificação por radiofrequência'],
        ['iRancho', 'Sob consulta', 'Teste depois do cadastro', 'Cria, recria e engorda de corte, com módulo de confinamento'],
        ['Ideagri', 'Sob consulta', 'Teste de 30 dias', 'Pecuária, com plano por animais ativos e por acessos'],
      ], nota: 'Dados dos sites oficiais em 08/10/2026. Preços e condições mudam: confirme no site de cada um.' } },
    ] },
    { h2: 'Em que cada um ganha', blocos: [
      { ul: [
        '**Precisa emitir nota fiscal de produtor no próprio sistema?** O Aegro emite a nota fiscal eletrônica do produtor (NF-e) e o manifesto de carga (MDF-e) ligado à Secretaria da Fazenda, e diz que isso funciona até no plano gratuito. O FINAGRO não emite nota.',
        '**O curral pesa com balança eletrônica e brinco com chip?** O JetBov informa automação com balança eletrônica e identificação por radiofrequência; o Leigado, leitura de brinco eletrônico com bastão. No FINAGRO o peso é digitado.',
        '**A fazenda é de leite e a equipe usa iPhone?** O Leigado tem aplicativo para Android e iOS. O FINAGRO tem aplicativo para Android; no iPhone abre pelo navegador.',
        '**Confinamento grande de corte?** O iRancho tem módulo próprio de confinamento.',
        '**Quer começar hoje, sem falar com vendedor e sem pagar?** O FINAGRO é grátis para sempre até 3 fazendas, 5 pessoas e 1.000 animais com ficha, com lote sem limite de cabeças.',
        '**Cria mais de uma coisa?** O FINAGRO monta o painel para gado de corte, leite, aves, suínos, peixes, abelhas, horta e grãos na mesma conta.',
      ] },
    ] },
    { h2: 'Quantas pessoas podem lançar', blocos: [
      { p: 'Fazenda não é tocada por uma pessoa só, e é aqui que a conta do sistema costuma crescer sem aviso. O que cada site informa:' },
      { ul: [
        '**FINAGRO:** 5 pessoas no plano grátis, cada uma com o seu papel e a sua permissão. Pessoa extra custa R$ 14,90 por mês.',
        '**Leigado:** informa que os usuários são ilimitados, sem custo adicional.',
        '**Ideagri:** informa que o valor do plano muda conforme a atividade, os animais ativos e a quantidade de acessos para lançar dados.',
      ] },
      { p: 'Nos sistemas que vendem por orçamento, pergunte quantos acessos entram no preço e quanto custa cada pessoa a mais, antes de cadastrar a equipe.' },
    ] },
    { h2: 'O que perguntar antes de escolher', blocos: [
      { ol: [
        'Quanto custa por mês para o meu número de animais ou de hectares? Há licença ou implantação?',
        'O que acontece quando o teste acaba: o acesso é bloqueado? Os dados ficam?',
        'O aplicativo lança sem sinal, no curral e no pasto?',
        'Quantas pessoas podem lançar e quanto custa cada acesso?',
        'Consigo tirar meus dados em planilha e em PDF se eu quiser sair?',
      ] },
      { p: 'Para o lado do gado, o guia [aplicativo para controle de gado](/aplicativo-para-controle-de-gado) traz a lista completa do que conferir. Para quem cuida do escritório, veja [software de gestão rural](/software-de-gestao-rural).' },
      { destaque: 'Esta página compara informação pública. Antes de contratar qualquer sistema, teste com os dados da sua fazenda e peça o preço por escrito.' },
    ] },
  ],
  noFinagro: { h2: 'O que o FINAGRO entrega de graça', depoisDe: 3, itens: [
    'Até **3 fazendas**, **5 pessoas** e **1.000 animais com ficha**, com lote sem limite de cabeças, sem cartão.',
    'Rebanho (ficha, pesagem, vacina, reprodução, registro de GTA), lavoura (safra, talhão, caderno de campo) e dinheiro (receitas, despesas, contas e fluxo de caixa).',
    'Lançamento sem sinal no celular Android, e a mesma conta no navegador do computador.',
    'Relatórios em PDF e em planilha, para os dados serem seus.',
  ] },
  cta: { forte: 'Compare na prática: o FINAGRO você testa hoje, sem vendedor.', texto: 'Grátis até 3 fazendas, 5 pessoas e 1.000 animais com ficha. Sem cartão.' },
  faqTitulo: 'Perguntas sobre aplicativos de gestão rural',
  faq: [
    ['Qual aplicativo de gestão rural é gratuito?', 'O FINAGRO tem plano grátis para sempre, sem cartão, até 3 fazendas, 5 pessoas e 1.000 animais com ficha. O Aegro informa no site que também tem plano gratuito. Leigado e Ideagri oferecem teste por tempo limitado.'],
    ['Qual aplicativo emite nota fiscal de produtor rural?', 'Entre os comparados, o Aegro informa que emite a nota fiscal eletrônica do produtor ligada à Secretaria da Fazenda. O FINAGRO não emite nota fiscal: ele registra a venda e o que há para receber.'],
    ['Qual funciona sem internet no curral?', 'FINAGRO, JetBov, iRancho e Leigado informam que o aplicativo registra sem internet e sincroniza depois. Confirme com cada um quais telas funcionam sem sinal.'],
    ['Por que alguns não mostram o preço?', 'Parte dos sistemas vende por orçamento, conforme o número de animais e os módulos contratados, e pede uma demonstração antes. Se o preço não está no site, peça o valor por escrito antes de testar.'],
    ['O FINAGRO serve para fazenda grande?', 'O plano grátis vai até 1.000 animais com ficha e lote sem limite. Para mais fazendas, pessoas e animais com ficha há planos pagos. Fazenda que depende de balança eletrônica ligada ao sistema é mais bem atendida por um sistema com essa integração.'],
  ],
  fontes: [
    { nome: 'Aegro, site oficial', url: 'https://www.aegro.com.br/' },
    { nome: 'Leigado, planos e preços', url: 'https://leigado.com.br/planos-e-precos' },
    { nome: 'Leigado, perguntas frequentes', url: 'https://leigado.com.br/perguntas-frequentes' },
    { nome: 'JetBov, planos e preços', url: 'https://jetbov.com/planos-e-precos/' },
    { nome: 'iRancho, perguntas frequentes', url: 'https://www.irancho.com.br/perguntas-frequentes/' },
    { nome: 'Ideagri, corte', url: 'https://centralderecursos.ideagri.com.br/ideagri-corte' },
  ],
  relacionados: ['aplicativo-para-controle-de-gado', 'software-de-gestao-rural', 'planilha-de-controle-de-gado'],
};
