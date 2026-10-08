// Consultas-alvo (colheita de 08/10/2026): "planilha para controle de gado grátis", "planilha de controle de gado excel
// grátis", "planilha controle de gado de corte", "modelo de planilha de controle de gado", "como fazer planilha de
// controle de gado". As colunas da planilha de animais são EXATAMENTE as que o importador do app aceita
// (FINAGRO/src/core/importacao.js, modelo `animais`): Brinco, Nome, Sexo, Categoria, Nascimento, Peso (kg), Raça, Lote.
export const provas = [
  { afirmacao: 'a Embrapa Gado de Corte publica modelos das fichas mais usadas no controle de rebanho de corte', trecho: 'julgou-se oportuno disponibilizar ao público os modelos de fichas mais comumente utilizadas no controle de rebanhos de gado de corte', url: 'https://www.embrapa.br/en/busca-de-publicacoes/-/publicacao/325393/fichas-para-controle-zootecnico-de-bovinos-de-corte' },
  { afirmacao: 'sem registro, grande parte dos produtores não tem números consistentes do próprio negócio', trecho: 'grande parte dos produtores não dispõe de números consistentes relativos aos parâmetros zootécnicos e econômicos de seu negócio', url: 'https://www.embrapa.br/en/busca-de-publicacoes/-/publicacao/325393/fichas-para-controle-zootecnico-de-bovinos-de-corte' },
];

export default {
  slug: 'planilha-de-controle-de-gado',
  grupo: 'corte',
  tipo: 'planilha',
  curto: 'Planilha de controle de gado',
  resumo: 'Planilha grátis para baixar, em Excel e CSV.',
  title: 'Planilha de controle de gado grátis: modelo em Excel',
  description: 'Baixe grátis a planilha de controle de gado em Excel ou CSV: brinco, sexo, nascimento, peso e lote, com o que conferir todo mês e quando migrar.',
  h1: 'Planilha de controle de gado grátis: modelo para baixar em Excel',
  pergunta: 'Onde baixar uma planilha de controle de gado grátis?',
  resposta: 'Aqui mesmo, nesta página: a planilha de controle de gado vem em Excel e em CSV, com oito colunas (brinco, nome, sexo, categoria, nascimento, peso, raça e lote) e seis animais de exemplo. Apague os exemplos, digite o seu rebanho e confira o peso e o lote todo mês.',
  tela: 'animais',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'Baixe a planilha de controle de gado', blocos: [
      { p: 'Esta é uma planilha de controle de gado de corte simples: uma linha por animal, uma coluna para cada coisa que você precisa achar no curral. Ela vem com seis animais de exemplo para você ver como se preenche. Baixe em Excel ou em CSV, apague as linhas de exemplo e digite o seu rebanho.' },
      { planilha: {
        arquivo: 'planilha-de-controle-de-gado',
        titulo: 'Planilha de controle de gado',
        aba: 'Rebanho',
        colunas: ['Brinco', 'Nome', 'Sexo', 'Categoria', 'Nascimento', 'Peso (kg)', 'Raça', 'Lote'],
        linhas: [
          ['001', 'Mimosa', 'Fêmea', 'Vaca', '14/03/2019', '462', 'Nelore', 'Matrizes'],
          ['002', 'Estrela', 'Fêmea', 'Vaca', '02/08/2020', '438', 'Nelore', 'Matrizes'],
          ['014', '', 'Macho', 'Boi', '20/05/2024', '436', 'Nelore', 'Engorda'],
          ['015', '', 'Macho', 'Boi', '11/04/2024', '489', 'Nelore', 'Engorda'],
          ['021', '', 'Fêmea', 'Novilha', '23/02/2025', '379', 'Nelore', 'Recria'],
          ['040', '', 'Macho', 'Garrote', '18/03/2025', '399', 'Nelore', 'Recria'],
        ],
        nota: 'Datas no formato dia/mês/ano e peso em quilos, só o número. Os seis animais são exemplo: apague as linhas e digite os seus.',
      } },
      { destaque: 'Uma linha por animal. O brinco não pode se repetir: dois animais com o mesmo número viram confusão na hora da venda e da vacina.' },
    ] },
    { h2: 'O que anotar em cada coluna', blocos: [
      { tabela: { colunas: ['Coluna', 'O que anotar', 'Exemplo'], linhas: [
        ['Brinco', 'O número do brinco, único para cada animal', '014'],
        ['Nome', 'Só para matriz e reprodutor; pode ficar vazio', 'Mimosa'],
        ['Sexo', 'Macho ou Fêmea', 'Fêmea'],
        ['Categoria', 'Vaca, novilha, bezerro, garrote, boi ou touro', 'Novilha'],
        ['Nascimento', 'Dia, mês e ano; se não sabe o dia, a melhor estimativa', '23/02/2025'],
        ['Peso (kg)', 'A última pesagem, em quilos', '379'],
        ['Raça', 'A raça ou o cruzamento', 'Nelore'],
        ['Lote', 'O grupo em que ele anda: matrizes, recria, engorda', 'Recria'],
      ], nota: 'Oito colunas bastam para saber quem é, de que idade, quanto pesa e onde está.' } },
      { p: 'Resista à vontade de criar vinte colunas. Quanto mais coluna, mais campo em branco, e planilha com campo em branco ninguém atualiza. Comece com estas oito e acrescente uma coluna só quando você sentir falta dela duas vezes.' },
    ] },
    { h2: 'O que conferir na planilha todo mês', blocos: [
      { p: 'Planilha parada vira lista velha. Reserve uma manhã por mês, de preferência depois da pesagem, e passe por estes pontos:' },
      { ol: [
        '**Peso:** troque o peso de cada animal pelo da última pesagem e anote a data. Peso de seis meses atrás não serve para decidir venda.',
        '**Categoria:** bezerro que desmamou vira garrote ou bezerra vira novilha. Atualize a coluna, senão o lote fica mentindo.',
        '**Lote:** animal que trocou de pasto ou foi para a engorda muda de lote.',
        '**Saídas e entradas:** venda, morte e compra do mês. Tire a linha de quem saiu e coloque a de quem chegou, com o brinco.',
        '**Contagem:** some as linhas e compare com o que você conta no curral. Se não bate, a diferença é o primeiro problema a resolver.',
      ] },
      { p: 'Para saber se o gado está ganhando peso, use também a pesagem abaixo. Ela guarda o peso anterior, o atual e quanto o animal engordou por dia. A conta está explicada na [calculadora de ganho de peso](/calculadora-gmd).' },
      { planilha: {
        arquivo: 'planilha-de-controle-de-gado-pesagens',
        titulo: 'Planilha de pesagens do gado',
        aba: 'Pesagens',
        colunas: ['Brinco', 'Data', 'Peso anterior (kg)', 'Peso atual (kg)', 'Dias', 'Ganho por dia (kg)'],
        linhas: [
          ['014', '01/10/2026', '412', '436', '30', '0,80'],
          ['015', '01/10/2026', '462', '489', '30', '0,90'],
          ['021', '01/10/2026', '358', '379', '30', '0,70'],
          ['040', '01/10/2026', '385', '399', '30', '0,47'],
        ],
        nota: 'Ganho por dia = (peso atual menos peso anterior) dividido pelos dias entre as duas pesagens. Esta aba serve para você conferir na planilha; o FINAGRO guarda a pesagem na ficha do animal.',
      } },
    ] },
    { h2: 'Como passar esta planilha para o FINAGRO', blocos: [
      { p: 'As oito colunas da planilha de rebanho são as mesmas que o FINAGRO lê na importação. Por isso, quando a planilha crescer e começar a pesar, você não digita o rebanho de novo.' },
      { ol: [
        'No Excel ou no Google Planilhas, abra a aba do rebanho e use Arquivo, Salvar como, CSV. O FINAGRO lê o arquivo CSV.',
        'No FINAGRO, abra a tela Importar planilha e escolha "Animais".',
        'Escolha o arquivo. O app reconhece as colunas pelo nome do cabeçalho; se alguma não bater, você aponta qual é qual.',
        'Confira a lista que o app mostra. Linha com data ou sexo que ele não entendeu aparece com o número da linha da planilha e o motivo, e nada é gravado antes de você confirmar.',
        'Toque em Importar. Os animais entram na fazenda que estiver ativa.',
      ] },
      { p: 'A importação traz o cadastro do animal. O histórico de pesagens e de vacinas você lança a partir daí, na ficha de cada um, e o app passa a calcular o ganho entre uma pesagem e outra.' },
    ] },
    { h2: 'Onde a planilha começa a falhar', blocos: [
      { p: 'A planilha é um bom começo e não precisa de nada além do computador. Ela funciona bem enquanto uma pessoa só mexe, na sede, e o rebanho cabe numa tela. Os problemas aparecem em três lugares:' },
      { ul: [
        '**Duas pessoas lançando.** O gerente anota num arquivo, o vaqueiro em outro, e no fim do mês são duas verdades. Planilha enviada por mensagem sai desatualizada no mesmo dia.',
        '**O celular no curral.** Planilha no celular é pequena, trava para digitar e quase sempre fica para depois, quando o peso já foi esquecido.',
        '**A vacina vencendo sem aviso.** Planilha não avisa. Se você não olhar, a data passa, e a ficha continua bonita.',
      ] },
      { p: 'Segundo a Embrapa Gado de Corte, grande parte dos produtores não tem números consistentes do próprio negócio, e a própria Embrapa publica os modelos de fichas mais usados para ajudar a mudar isso. Planilha em dia já é metade do caminho. Para ver como as fichas funcionam no papel, veja a [ficha de controle de gado](/ficha-de-controle-de-gado).' },
    ] },
  ],
  noFinagro: { h2: 'Quando a planilha pesar, o FINAGRO assume', itens: [
    '**Importa a sua planilha** de animais em CSV, com conferência linha a linha antes de gravar.',
    '**Lança no curral, sem sinal.** A pesagem e a vacina ficam salvas no celular e sobem quando a internet volta.',
    '**Avisa o que a planilha não avisa:** animal sem pesagem há mais de 60 dias e bezerra na idade da vacina de brucelose sem a vacina anotada.',
    '**Cada pessoa no seu acesso:** até 5 pessoas no plano grátis, sem arquivo em duplicata.',
  ] },
  cta: { forte: 'Comece pela planilha. Quando pesar, o FINAGRO importa o arquivo.', texto: 'Grátis até 1.000 animais com ficha, com lote sem limite de cabeças e sem cartão.' },
  faqTitulo: 'Perguntas sobre planilha de controle de gado',
  faq: [
    ['Tem planilha de controle de gado grátis em Excel?', 'Tem. A planilha desta página é grátis, sem cadastro, e vem em Excel e em CSV. São oito colunas e seis animais de exemplo para você apagar e preencher com o seu rebanho.'],
    ['Como fazer uma planilha de controle de gado do zero?', 'Faça uma linha por animal e uma coluna para brinco, sexo, categoria, nascimento, peso, raça e lote. Comece com poucas colunas, atualize o peso e o lote todo mês e não repita o número do brinco.'],
    ['Que colunas uma planilha de gado de corte precisa ter?', 'No mínimo, o brinco, o sexo, a categoria, a data de nascimento, o último peso, a raça e o lote. Com essas sete e o nome da matriz você sabe quem é cada animal, a idade e onde ele está.'],
    ['Posso passar a planilha para um aplicativo depois?', 'Pode. O FINAGRO importa o arquivo CSV com estas mesmas colunas e mostra a lista para você conferir antes de gravar. No Excel, use Arquivo, Salvar como, CSV.'],
    ['A planilha serve para um rebanho grande?', 'Serve enquanto uma pessoa só lança e o arquivo cabe na tela. Com vários lançando, ou com o celular no curral, o arquivo em dobro e a vacina sem aviso viram o problema, e vale migrar para um aplicativo.'],
  ],
  fontes: [
    { nome: 'Embrapa Gado de Corte, fichas para controle zootécnico de bovinos de corte', url: 'https://www.embrapa.br/en/busca-de-publicacoes/-/publicacao/325393/fichas-para-controle-zootecnico-de-bovinos-de-corte' },
  ],
  relacionados: ['aplicativo-para-controle-de-gado', 'ficha-de-controle-de-gado', 'calculadora-gmd'],
};
