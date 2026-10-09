// Consulta-alvo: "criação de galinha caipira", "criação de galinha caipira para corte", "criação de galinha caipira
// poedeira", "criação de galinha caipira dá lucro" e "galinheiro" (terceira leva, outras criações, 08/10/2026).
// RASCUNHO: só vai para conteudo/guias depois de uma pessoa ler.
const SISTEMA = 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1122469/1/SPOCriacaoGalinhasCaipiras2018.pdf';
const INSTALACOES = 'https://sistemasdeproducao.cnptia.embrapa.br/FontesHTML/AgriculturaFamiliar/RegiaoMeioNorteBrasil/GalinhaCaipira/instalacao.htm';

export const provas = [
  { afirmacao: 'no modelo completo da Embrapa Meio-Norte a área total sugerida é de 1.744 m²: 28 m² de aviário coberto e 1.716 m² de piquetes', trecho: 'a área total sugerida é de 1.744,00 m² (Figura 4). Dessa área, 28,00 m² são destinados ao aviário coberto e 1.716,00 m², a piquetes', url: SISTEMA },
  { afirmacao: 'a fase de cria vai do nascimento aos 30 dias', trecho: 'Na fase de cria, os pintos permanecem desde o seu nascimento até os 30 dias de idade', url: INSTALACOES },
  { afirmacao: 'a recria vai dos 31 aos 60 dias, em 3,75 m² cobertos, com piquete de 20 m²', trecho: 'com 31 a 60 dias de idade, e compreende 3,75 m2, com bebedouro e comedouro. Nessa fase, os pintos terão livre acesso a um piquete arborizado, com 20 m2', url: SISTEMA },
  { afirmacao: 'a engorda ou terminação vai dos 61 aos 120 dias', trecho: 'fase de engorda ou terminação, com capacidade de abrigar as aves na fase de recria, com 61 a 120 dias', url: SISTEMA },
  { afirmacao: 'na engorda as aves têm acesso a um piquete arborizado de 1.656 m²', trecho: 'as aves têm livre acesso a um piquete arborizado, com área de 1.656 m2', url: SISTEMA },
  { afirmacao: 'a área de reprodução tem 6 m², com zona de postura de 3,75 m² e de incubação de 2,25 m²', trecho: 'A área de reprodução deve ter 6,00 m2, dividida em zona de postura (3,75 m2) e zona de incubação', url: SISTEMA },
  { afirmacao: 'as aves de reprodução têm piquete de 40 m²', trecho: 'As aves também devem ter acesso a um piquete com área de 40 m2, composto de arborização nativa ou exótica', url: SISTEMA },
  { afirmacao: 'na reprodução a relação é de 1 macho para 12 fêmeas', trecho: 'A fase de reprodução se caracteriza por apresentar uma relação macho/fêmea de 1:12', url: INSTALACOES },
  { afirmacao: 'a postura começa com 18 a 22 semanas de vida', trecho: 'é a fase de vida da fêmea anterior a postura, quando ainda é chamada de franga. A postura inicia com 18 a 22 semanas de vida', url: SISTEMA },
  { afirmacao: 'a cama do galinheiro tem de 5 a 8 cm de espessura', trecho: 'O piso deve ser revestido com uma camada de palha (cama) de 5 a 8 cm de espessura', url: INSTALACOES },
  { afirmacao: 'a data de postura se marca a lápis na casca do ovo', trecho: 'marca-se com lápis grafite na casca a data de postura (dia/mês)', url: SISTEMA },
  { afirmacao: 'a alimentação representa cerca de 70% do custo de produção de aves, ou mais', trecho: 'A alimentação representa cerca de 70% do custo de produção de aves ou mais, dependendo do sistema adotado e da região do País', url: SISTEMA },
  { afirmacao: 'a Embrapa recomenda ração comercial nos primeiros 30 dias de vida dos pintinhos, para reduzir a mortalidade', trecho: 'recomenda-se o uso de ração comercial nos primeiros 30 dias de vida dos pintinhos, pois dessa forma há redução de mortalidade nessa fase', url: SISTEMA },
  { afirmacao: 'para misturar a ração na propriedade é preciso fórmula dada por agrônomo, zootecnista ou médico-veterinário, conforme o tipo de ave, a fase de vida e os ingredientes', trecho: 'o produtor precisará de uma fórmula de ração adequada à sua realidade, como: tipo de ave, fase de vida, ingredientes disponíveis. Portanto, é necessário que um profissional da área (agrônomo, zootecnista ou médico- veterinário) forneça a formulação da ração', url: SISTEMA },
  { afirmacao: 'os programas de vacinação e de vermifugação devem ser definidos antes', trecho: 'Os programas de vacinação e de vermifugação devem ser previamente estabelecidos e implementados', url: SISTEMA },
  { afirmacao: 'o exemplo de calendário da Embrapa traz Newcastle, bronquite e Gumboro por via ocular, mensais, e bouba na asa na 1ª semana', trecho: 'Newcastle Ocular Mensal Bronquite infecciosa Ocular Mensal Gumboro Ocular Mensal Bouba aviária Punctura na asa 1ª semana de vida', url: SISTEMA },
  { afirmacao: 'ave que chega de fora passa por quarentena antes de entrar no plantel', trecho: 'submetidas à quarentena antes de serem introduzidas no plantel', url: SISTEMA },
  { afirmacao: 'a Embrapa manda anotar mortalidade, nascimentos, número de aves por fase e consumo de ração de cada grupo', trecho: 'o produtor deverá anotar dados básicos da produção em planilha, como a mortalidade, o nascimento de pintinhos, o número de animais em cada fase de criação, o consumo de ração de cada grupo de animais', url: SISTEMA },
  { afirmacao: 'a Embrapa orienta reinvestir parte do lucro da venda de ovos e aves em pintinhos, ração e equipamentos', trecho: 'A medida que o produtor obtenha lucro com a venda de ovos e/ou animais, parte desse valor deve ser destinado à compra de mais pintinhos, ração e equipamentos', url: SISTEMA },
];

export default {
  slug: 'criacao-de-galinha-caipira',
  grupo: 'criacoes',
  tipo: 'guia',
  curto: 'Criação de galinha caipira',
  resumo: 'Corte e postura, galinheiro, piquete e a conta do lucro.',
  title: 'Criação de galinha caipira: corte, postura e conta do lucro',
  description: 'Criação de galinha caipira para corte e para postura: medidas do galinheiro e do piquete, fases, vacina, o que anotar no lote e a conta para saber se dá lucro.',
  h1: 'Criação de galinha caipira: galinheiro, lote e a conta do lucro',
  pergunta: 'Como começar uma criação de galinha caipira?',
  resposta: 'Defina se o lote é de corte, de postura ou dos dois, monte o galinheiro com acesso a piquete e anote tudo por lote. No sistema da Embrapa Meio-Norte, o frango caipira passa pela cria até 30 dias, recria até 60 e engorda até 120 dias. A galinha começa a botar com 18 a 22 semanas.',
  tela: 'producao',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'Corte ou postura: o que muda na criação', blocos: [
      { p: 'A criação de galinha caipira para corte gira em torno do lote: entram pintinhos, eles crescem juntos e saem juntos. No sistema alternativo de criação de galinhas caipiras da Embrapa Meio-Norte, o caminho tem três fases.' },
      { tabela: { colunas: ['Fase', 'Idade'], linhas: [['Cria', 'do nascimento aos 30 dias'], ['Recria', 'dos 31 aos 60 dias'], ['Engorda ou terminação', 'dos 61 aos 120 dias']], nota: 'Embrapa Meio-Norte, Sistema Alternativo de Criação de Galinhas Caipiras.' } },
      { p: 'Na criação de galinha caipira poedeira, o número do dia é outro: ovos colhidos. Segundo a Embrapa, a postura começa com 18 a 22 semanas de vida. Até lá a franga só gasta ração, e esse gasto entra no custo do ovo.' },
      { p: 'Muita criação junta os dois: vende ovo e vende ave. Nesse caso, separe os lotes na anotação. Misturar a ração da poedeira com a do frango de corte esconde qual dos dois está pagando a conta.' },
    ] },
    { h2: 'Galinheiro e piquete: as medidas da Embrapa', blocos: [
      { p: 'O modelo completo da Embrapa Meio-Norte, com todas as fases no mesmo lugar, sugere 1.744 m² de área total. São 28 m² de aviário coberto e 1.716 m² de piquetes, que são as áreas cercadas onde as aves pastam.' },
      { tabela: { colunas: ['Divisão', 'Área coberta', 'Piquete'], linhas: [['Reprodução', '6 m²', '40 m²'], ['Recria', '3,75 m²', '20 m²'], ['Engorda', 'com poleiros', '1.656 m²']], nota: 'Medidas do modelo completo da Embrapa Meio-Norte. A área de reprodução se divide em postura (3,75 m²) e incubação (2,25 m²).' } },
      { ul: [
        'O galinheiro é feito com o que a propriedade tem: madeira redonda, estacas e palha. O que importa é ser limpo, protegido de predador e arejado.',
        'O piso leva uma cama de palha, maravalha ou casca de arroz com 5 a 8 cm de espessura, trocada de tempos em tempos.',
        'Na reprodução, a relação indicada é de 1 galo para 12 galinhas.',
        'Os piquetes são cercados com material que impeça a entrada de predadores.',
      ] },
      { p: 'Antes de levantar o galinheiro, meça a área que vai virar piquete. Se a conta do terreno ainda está em tarefa ou alqueire, passe para metro quadrado em [quantos metros tem um hectare](/quantos-metros-tem-um-hectare).' },
    ] },
    { h2: 'Ração, vacina e ave que chega de fora', blocos: [
      { p: 'A ração é onde o dinheiro vai. A Embrapa registra que a alimentação representa cerca de 70% do custo de produção de aves, ou mais, conforme o sistema e a região. Por isso o piquete conta: a ave busca ali parte do que come.' },
      { p: 'Para o começo da vida, a recomendação é ração comercial nos primeiros 30 dias dos pintinhos, porque reduz a mortalidade nessa fase. Depois, dá para misturar a ração na propriedade, com os ingredientes que ela tem. Para isso, a Embrapa pede uma fórmula passada por agrônomo, zootecnista ou médico-veterinário, de acordo com o tipo de ave e a fase de vida.' },
      { p: 'Na sanidade, a Embrapa pede que os programas de vacinação e de vermifugação sejam definidos antes de o lote chegar. O exemplo de calendário do documento traz Newcastle, bronquite infecciosa e Gumboro por via ocular, todo mês, e bouba aviária na asa, na primeira semana de vida.' },
      { destaque: 'O calendário de vacina muda com o histórico de doenças da região. Monte o seu com o veterinário e confira na defesa agropecuária do estado o que é exigido para a sua criação.' },
      { p: 'Ave comprada de fora passa por quarentena antes de entrar no plantel, em instalação fechada e longe do piquete das outras.' },
    ] },
    { h2: 'O que anotar em cada lote', blocos: [
      { p: 'A Embrapa manda anotar os dados básicos da produção: mortalidade, nascimento de pintinhos, número de aves em cada fase, consumo de ração de cada grupo e ganho de peso. Na prática, são cinco anotações.' },
      { tabela: { colunas: ['O que anotar', 'Quando', 'Para que serve'], linhas: [
        ['Lote', 'Na chegada', 'Data, quantas aves e de quem veio'],
        ['Mortalidade', 'Todo dia', 'Mortes ÷ aves alojadas'],
        ['Ração', 'A cada compra', 'Custo por ave e por dúzia'],
        ['Ovos por dia', 'Todo dia', 'Postura do lote e ovos para vender'],
        ['Venda', 'A cada saída', 'Receita por lote'],
      ], nota: 'Aves alojadas são todas as que entraram no lote desde o começo.' } },
      { p: 'No ovo, a Embrapa ensina a marcar a lápis, na casca, a data de postura. É o que permite decidir entre vender, consumir ou chocar na hora certa.' },
      { p: 'Se você ainda controla no caderno, a [planilha de gestão rural](/planilha-de-gestao-rural) serve de ponto de partida. E a conta de ração por quilo ganho no lote de corte está em [conversão alimentar](/conversao-alimentar).' },
    ] },
    { h2: 'Criação de galinha caipira dá lucro? Faça a conta', blocos: [
      { p: 'Ninguém responde isso sem os seus números. O que dá para fazer é a conta, e ela é a mesma no corte e na postura.' },
      { ol: [
        'Some o custo do lote: pintinhos ou frangas, ração, vacina e remédio, cama, energia, frete e mão de obra, inclusive a sua.',
        'Some a receita do lote: aves vendidas, ovos vendidos e esterco, se você vende.',
        'Receita menos custo é o resultado do lote.',
        'Divida o custo pelo número de aves vendidas, ou pelas dúzias vendidas, para saber o custo de cada uma.',
      ] },
      { p: 'Um exemplo só para mostrar a conta, com números de exemplo, que não são referência de preço: um lote de corte custou R$ 3.000 e vendeu 180 aves. O custo por ave foi de R$ 16,67. Se cada ave saiu por R$ 30, a receita foi de R$ 5.400 e o resultado do lote, R$ 2.400. Troque pelos seus números: preço de ração e de venda mudam de praça para praça.' },
      { p: 'A Embrapa orienta começar com poucas aves e, conforme a venda de ovos e de animais der lucro, reinvestir parte em mais pintinhos, ração e equipamentos. O resultado de cada lote aparece melhor com o dinheiro no [fluxo de caixa rural](/fluxo-de-caixa-rural).' },
      { destaque: 'Este guia é informativo. Ração, vacina e tratamento dependem do seu plantel e da sua região: confirme com o veterinário ou o técnico que acompanha a criação.' },
    ] },
  ],
  noFinagro: { h2: 'O galinheiro no FINAGRO', itens: [
    'Cada galpão ou galinheiro vira um lote, contado em aves, com categoria de frango caipira, poedeiras em produção, frangas em recria ou pintinhos.',
    'No lote você lança o que aconteceu: chegaram, nasceram, vendi, morreram, abate ou consumo. A mortalidade é calculada sozinha: mortes divididas pelas aves alojadas.',
    'Os ovos do dia são lançados em unidades, com o preço da dúzia, e o app soma o mês em ovos e em dúzias.',
    'A vacina aplicada no lote fica registrada, e o tratamento guarda a carência do abate e a dos ovos em dias.',
    'A ração entra como despesa e a venda como receita, e as duas caem no fluxo de caixa da propriedade.',
  ] },
  cta: { forte: 'Lote, mortalidade, ovos do dia e venda no celular.', texto: 'Grátis, sem cartão. Galpão conta como lote, com quantas aves você tiver.' },
  faqTitulo: 'Perguntas sobre galinha caipira',
  faq: [
    ['Com quantos dias a galinha caipira está pronta para o abate?', 'No sistema da Embrapa Meio-Norte, a engorda ou terminação vai dos 61 aos 120 dias de idade, depois da cria, até 30 dias, e da recria, até 60 dias.'],
    ['Com quanto tempo a galinha caipira começa a botar?', 'Segundo a Embrapa Meio-Norte, a postura começa com 18 a 22 semanas de vida. Antes disso, a franga está na fase que a Embrapa chama de pré-postura.'],
    ['Qual o tamanho do galinheiro de galinha caipira?', 'O modelo completo da Embrapa Meio-Norte, com cria, recria, engorda e reprodução, sugere 1.744 metros quadrados no total: 28 de aviário coberto e 1.716 de piquetes.'],
    ['Criação de galinha caipira dá lucro?', 'Depende do custo do seu lote e do preço na sua praça. Some pintinhos, ração, vacina, cama e mão de obra, e compare com o que entrou da venda de aves e de ovos. A Embrapa registra que a alimentação é cerca de 70% do custo.'],
    ['Precisa vacinar galinha caipira?', 'A Embrapa pede que os programas de vacinação e de vermifugação sejam definidos antes. O exemplo dela traz Newcastle, bronquite infecciosa, Gumboro e bouba aviária. O calendário certo para a sua região quem monta é o veterinário.'],
  ],
  fontes: [
    { nome: 'Embrapa Meio-Norte, Sistema Alternativo de Criação de Galinhas Caipiras (2018)', url: SISTEMA },
    { nome: 'Embrapa Meio-Norte, Galinha Caipira: instalações e fases de criação', url: INSTALACOES },
  ],
  relacionados: ['conversao-alimentar', 'fluxo-de-caixa-rural', 'planilha-de-gestao-rural'],
};
