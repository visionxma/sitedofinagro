// Consultas-alvo (colheita de 08/10/2026): "controle leiteiro", "como fazer controle leiteiro", "controle leiteiro pdf",
// "planilha de controle leiteiro". Dado técnico (quando pesar, secagem) só com trecho da Embrapa. O app (src/screens/home/
// producao, src/core/producao.js) guarda o leite POR ORDENHA/DIA com o número de vacas ordenhadas, preço e destino; ele NÃO
// guarda a pesagem de cada vaca. A pesagem individual fica na planilha desta página.
export const provas = [
  { afirmacao: 'o controle leiteiro reduzido é a pesagem individual de todo o leite de uma vaca em um dia, em momentos específicos da lactação', trecho: 'O controle leiteiro reduzido consiste na pesagem individual de todo o leite produzido por uma vaca em um dia, sendo realizado em momentos específicos do período de lactação', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1060088/1/26232.pdf' },
  { afirmacao: 'o material é balde, balança, caneta e ficha', trecho: 'Material necessário: balde, balança, caneta e ficha para anotação', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1060088/1/26232.pdf' },
  { afirmacao: 'o primeiro controle é entre o 5º e o 15º dia depois do parto', trecho: 'o primeiro controle leiteiro deve ser realizado entre o 5º e o 15º dia após o parto', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1060088/1/26232.pdf' },
  { afirmacao: 'os controles seguintes são a cada 2 meses e o último no dia da secagem', trecho: 'Os controles subsequentes devem ser realizados a cada 2 meses e o controle final no dia de secagem da vaca', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1060088/1/26232.pdf' },
  { afirmacao: 'a ordenha do dia de controle tem de ser completa', trecho: 'As ordenhas devem ser completas e ininterruptas, sem deixar tetos ou leite residual para o bezerro', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1060088/1/26232.pdf' },
  { afirmacao: 'se algo sai do normal na ordenha, o controle é repetido no dia seguinte', trecho: 'Caso ocorra alguma anormalidade na ordenha, o controle deve ser repetido no dia seguinte', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1060088/1/26232.pdf' },
  { afirmacao: 'com duas ordenhas, anota-se cada uma e soma-se', trecho: 'No caso de duas ordenhas diárias deve-se anotar a produção separada e depois proceder à soma das duas ordenhas', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1060088/1/26232.pdf' },
  { afirmacao: 'o controle ajuda a definir descarte técnico', trecho: 'Estabelecimento de critérios para descarte técnico de vacas', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1060088/1/26232.pdf' },
  { afirmacao: 'o controle ajuda a definir a ração conforme a produção da vaca', trecho: 'Definição de fornecimento de ração de acordo com a produção da vaca', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1060088/1/26232.pdf' },
  { afirmacao: 'a secagem deve acontecer 60 dias antes do parto', trecho: 'A secagem da vaca deve ocorrer 60 dias antes do parto, independentemente da produção', url: 'https://www.embrapa.br/en/agencia-de-informacao-tecnologica/criacoes/gado_de_leite/producao/sistemas-de-producao/reproducao/manejo-reprodutivo/manejo-da-vaca-leiteira/periodo-seco' },
  { afirmacao: 'o controle reduzido da Embrapa não substitui o controle oficial das associações de raça', trecho: 'não substitui os controles leiteiros oficiais realizados pelas associações de raças', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1060088/1/26232.pdf' },
];

export default {
  slug: 'controle-leiteiro',
  grupo: 'leite',
  tipo: 'planilha',
  curto: 'Controle leiteiro',
  resumo: 'Como pesar o leite de cada vaca, com planilha.',
  title: 'Controle leiteiro: como fazer e planilha para baixar',
  description: 'Controle leiteiro passo a passo: como pesar o leite de cada vaca, de quanto em quanto tempo e o que o número decide, com planilha grátis em Excel e CSV.',
  h1: 'Controle leiteiro: como fazer a pesagem e anotar na planilha',
  pergunta: 'Como fazer o controle leiteiro das vacas?',
  resposta: 'Pese todo o leite de cada vaca em um dia inteiro, com balde e balança, e anote na ficha. Segundo a Embrapa, o primeiro controle é entre o 5º e o 15º dia depois do parto, os seguintes a cada 2 meses e o último no dia de secar a vaca.',
  tela: 'producao',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'Planilha de controle leiteiro para baixar', blocos: [
      { p: 'Esta planilha guarda a pesagem de cada vaca por ordenha, com a data do parto para você ver em que dia da lactação ela está. Baixe em Excel ou CSV. Os exemplos são de um dia de controle numa pequena criação; apague e lance as suas vacas.' },
      { planilha: {
        arquivo: 'planilha-de-controle-leiteiro',
        titulo: 'Planilha de controle leiteiro',
        aba: 'Controle leiteiro',
        colunas: ['Data', 'Vaca', 'Data do parto', 'Dias de lactação', '1ª ordenha (kg)', '2ª ordenha (kg)', 'Total do dia (kg)', 'Observação'],
        linhas: [
          ['05/10/2026', 'Mimosa', '12/07/2026', '85', '6,2', '5,4', '11,6', 'Recebeu ração'],
          ['05/10/2026', 'Estrela', '20/06/2026', '107', '7,0', '6,1', '13,1', ''],
          ['05/10/2026', 'Fumaça', '02/09/2026', '33', '8,4', '7,3', '15,7', 'Recém-parida'],
          ['05/10/2026', 'Jóia', '15/01/2026', '263', '4,8', '4,1', '8,9', 'Produção caindo'],
          ['05/10/2026', 'Cigana', '28/03/2026', '191', '5,9', '5,0', '10,9', ''],
          ['05/10/2026', 'Pintada', '03/12/2025', '306', '4,2', '3,6', '7,8', 'Conferir o parto previsto'],
        ],
        nota: 'Total do dia = 1ª ordenha mais 2ª ordenha. Dias de lactação = dias entre o parto e a data do controle. Use sempre a mesma unidade, quilo ou litro, em todas as linhas.',
      } },
      { p: 'Somando os totais do exemplo, as seis vacas deram 68 kg no dia, uma média de 11,3 kg por vaca. É esse tipo de número, repetido ao longo da lactação, que a Embrapa chama de controle leiteiro.' },
    ] },
    { h2: 'Como fazer o controle leiteiro, passo a passo', blocos: [
      { p: 'Controle leiteiro é a pesagem individual de todo o leite que uma vaca produz em um dia, em momentos definidos da lactação, segundo a Embrapa. O material é simples: balde, balança, caneta e ficha para anotação.' },
      { ol: [
        '**Identifique todas as vacas.** Brinco ou nome, mas um por animal, sempre o mesmo.',
        '**Marque no calendário** os dias de controle de cada vaca em lactação, a partir da data do parto.',
        '**Pese o leite de todas as ordenhas do dia.** A ordenha tem de ser completa e ininterrupta, sem deixar teto nem leite residual para o bezerro.',
        '**Com duas ordenhas, anote cada uma** na sua coluna e depois some.',
        '**Se algo sair do normal na ordenha,** como vaca assustada ou doente, repita o controle no dia seguinte.',
        '**Passe para a planilha** no mesmo dia, com o peso, a data e uma observação do que a vaca comeu ou do que aconteceu.',
      ] },
      { destaque: 'Se a vaca está em tratamento, o leite dela pode estar retido. A carência de cada remédio está na bula e na orientação do veterinário.' },
    ] },
    { h2: 'De quanto em quanto tempo pesar o leite', blocos: [
      { p: 'A Embrapa descreve o controle leiteiro reduzido, que usa menos pesagens do que o controle tradicional, pensado para a propriedade leiteira de economia familiar. A regra dele é esta:' },
      { tabela: { colunas: ['Quando', 'O que fazer'], linhas: [
        ['Entre o 5º e o 15º dia depois do parto', 'Primeira pesagem do dia inteiro'],
        ['A cada 2 meses', 'Pesagens seguintes, enquanto a vaca estiver em lactação'],
        ['No dia de secar a vaca', 'Última pesagem da lactação'],
      ], nota: 'Embrapa, controle leiteiro reduzido. Esse método não substitui os controles oficiais das associações de raças.' } },
      { p: 'Se você quer acompanhar mais de perto, pode pesar com mais frequência. Quem faz parte de associação de raça segue o controle oficial dela. Para saber o dia de secar, o parto previsto da vaca é o ponto de partida (veja a [calculadora de gestação bovina](/calculadora-de-gestacao-bovina)).' },
    ] },
    { h2: 'O que o número do controle leiteiro decide', blocos: [
      { p: 'Pesar sem usar o número é trabalho perdido. A Embrapa lista o que o controle leiteiro ajuda a decidir:' },
      { tabela: { colunas: ['O número mostra', 'Você decide'], linhas: [
        ['A vaca que produz menos que as outras', 'Critério para descarte técnico'],
        ['Quanto cada vaca dá no dia', 'A ração de acordo com a produção'],
        ['A data do parto previsto', 'O dia de secar a vaca'],
      ], nota: 'Descarte e ração: Embrapa, controle leiteiro reduzido. Secagem: Embrapa Gado de Leite.' } },
      { p: 'Sobre a secagem, a Embrapa Gado de Leite diz que ela deve ocorrer 60 dias antes do parto, independentemente da produção, para o descanso do úbere e a formação das células que fazem o leite. Por isso a data do parto previsto precisa estar sempre anotada ao lado do controle.' },
      { p: 'Duas contas simples ajudam. A média por vaca em lactação é o total pesado dividido pelo número de vacas pesadas. E a proporção de vacas em lactação é o número de vacas em lactação dividido pelo total de vacas: com 68 vacas e 46 em lactação, são 67,6%.' },
    ] },
    { h2: 'Controle leiteiro em PDF, papel ou planilha', blocos: [
      { p: 'Quem procura controle leiteiro em PDF quer uma ficha para imprimir e levar ao curral. A planilha acima serve: imprima a aba, anote à caneta ao lado do balde e passe para o arquivo no fim do dia. A ficha da Embrapa tem a mesma ideia: nome da vaca, data, 1ª ordenha, 2ª ordenha, total e observações.' },
      { p: 'O que a planilha não faz é lembrar que a vaca está no dia do controle ou no dia de secar. Esse aviso é de quem olha o calendário. Para o custo do litro depois de pesado, veja o [custo do litro de leite](/custo-do-litro-de-leite).' },
    ] },
  ],
  noFinagro: { h2: 'O leite no FINAGRO', itens: [
    '**Leite por ordenha ou do dia todo:** os litros, quantas vacas foram ordenhadas, o preço do litro e o destino (vendido, queijo, casa, bezerros ou descartado).',
    '**Painel do mês** com o total, a média por dia, o valor estimado e os litros por animal, mais o gráfico dos últimos 30 dias para ver se a produção está caindo.',
    '**Proteção contra erro:** se já houver litros lançados hoje, o app avisa antes de salvar, e pergunta se está certo quando o número vem com zero a mais.',
    '**Carência do leite** anotada no tratamento do animal, e a **qualidade do leite** (CCS e CBT) do extrato do laticínio.',
  ] },
  cta: { forte: 'O leite do dia lançado no curral, o mês somado no celular.', texto: 'Grátis até 1.000 animais com ficha, com lançamento sem sinal e sem cartão.' },
  faqTitulo: 'Perguntas sobre controle leiteiro',
  faq: [
    ['O que é controle leiteiro?', 'É a pesagem individual de todo o leite produzido por uma vaca em um dia, feita em momentos definidos da lactação. Serve para saber quanto cada vaca produz e decidir ração, descarte e secagem.'],
    ['De quanto em quanto tempo fazer o controle leiteiro?', 'No controle reduzido da Embrapa, a primeira pesagem é entre o 5º e o 15º dia depois do parto, as seguintes a cada 2 meses e a última no dia da secagem. O controle tradicional usa mais pesagens.'],
    ['Como pesar o leite de cada vaca?', 'Com balde e balança. Ordenhe a vaca por inteiro, sem deixar leite para o bezerro, pese cada ordenha, anote e some. Se algo sair do normal na ordenha, repita no dia seguinte.'],
    ['Tem controle leiteiro em PDF para imprimir?', 'A planilha desta página serve de ficha: imprima a aba, anote no curral e passe para o arquivo. Ela traz data, vaca, data do parto, as duas ordenhas, o total do dia e a observação.'],
    ['Quando secar a vaca de leite?', 'A Embrapa Gado de Leite recomenda secar 60 dias antes do parto, independentemente da produção. Por isso a data do parto previsto deve estar anotada junto do controle de cada vaca.'],
  ],
  fontes: [
    { nome: 'Embrapa Acre, controle leiteiro reduzido para propriedades leiteiras de economia familiar', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1060088/1/26232.pdf' },
    { nome: 'Embrapa Gado de Leite, período seco', url: 'https://www.embrapa.br/en/agencia-de-informacao-tecnologica/criacoes/gado_de_leite/producao/sistemas-de-producao/reproducao/manejo-reprodutivo/manejo-da-vaca-leiteira/periodo-seco' },
  ],
  relacionados: ['custo-do-litro-de-leite', 'calculadora-de-gestacao-bovina', 'indices-zootecnicos'],
};
