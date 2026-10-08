// Consultas-alvo (colheita de 08/10/2026): "planilha gestão rural", "planilha de gestão rural", "planilha fluxo de caixa
// rural", "planilha de controle financeiro rural". O importador do app (FINAGRO/src/core/importacao.js) recebe
// despesas e receitas em arquivos SEPARADOS, cada um com as colunas do seu modelo:
//   despesas: Data, Descrição, Valor, Categoria, Fornecedor   receitas: Data, Origem, Valor, Categoria
// Por isso a página entrega duas planilhas, cada uma com o cabeçalho que o app reconhece.
export const provas = [
  { afirmacao: 'a alimentação é a maior parcela do custo total na base estudada pela Embrapa', trecho: 'Os custos com alimentação representam a maior parcela do custo total e com participação crescente à medida que o volume de produção aumenta', url: 'https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1187201/analise-dos-custos-de-producao-na-atividade-leiteira-brasileira-custos-alimentares-e-nao-alimentares' },
  { afirmacao: 'depreciação, mão de obra, sanidade, reprodução, energia e combustível são os custos não alimentares que se destacam', trecho: 'Entre os custos não alimentares, destacam-se depreciação, mão de obra, sanidade e reprodução, além de energia e combustível', url: 'https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1187201/analise-dos-custos-de-producao-na-atividade-leiteira-brasileira-custos-alimentares-e-nao-alimentares' },
  { afirmacao: 'o trabalho da família pode receber valor compatível com a remuneração de mercado na conta de custos', trecho: 'para cada uma das atividades desempenhadas por membros da família, atribui-se salário compatível à remuneração encontrada no mercado', url: 'https://sistemasdeproducao.cnptia.embrapa.br/FontesHTML/Leite/LeiteRecriadeNovilhas/coeficientestecnicos.htm' },
  { afirmacao: 'medicamentos e vacinas entram nos custos de sanidade', trecho: 'Medicamentos e vacinais: todos os itens relacionados à prevenção e/ou tratamento de doenças e/ou problemas sanitários no rebanho', url: 'https://sistemasdeproducao.cnptia.embrapa.br/FontesHTML/Leite/LeiteRecriadeNovilhas/coeficientestecnicos.htm' },
];

export default {
  slug: 'planilha-de-gestao-rural',
  grupo: 'dinheiro',
  tipo: 'planilha',
  curto: 'Planilha de gestão rural',
  resumo: 'Receitas e despesas da fazenda, grátis em Excel.',
  title: 'Planilha de gestão rural grátis: receitas e despesas',
  description: 'Baixe grátis a planilha de gestão rural em Excel ou CSV: receitas e despesas da fazenda, categorias que valem a pena e como fechar o mês no caixa.',
  h1: 'Planilha de gestão rural grátis: controle financeiro da fazenda',
  pergunta: 'Como fazer uma planilha de gestão rural para a fazenda?',
  resposta: 'Faça uma linha para cada dinheiro que entra ou sai, com data, descrição, valor e categoria. Receitas numa planilha, despesas em outra, e no fim do mês você subtrai uma da outra para achar o saldo. As duas planilhas desta página vêm prontas, com exemplos, em Excel e CSV.',
  tela: 'fluxo',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'Planilha de gestão rural para baixar: despesas e receitas', blocos: [
      { p: 'A gestão rural começa por saber para onde o dinheiro vai e de onde ele vem. São duas planilhas, porque são duas contas diferentes: a das **despesas** (o que você paga) e a das **receitas** (o que você recebe). Cada uma vem com exemplos de um mês de uma fazenda de gado. Baixe, apague os exemplos e lance os seus.' },
      { planilha: {
        arquivo: 'planilha-de-gestao-rural',
        titulo: 'Planilha de gestão rural: despesas',
        aba: 'Despesas',
        colunas: ['Data', 'Descrição', 'Valor', 'Categoria', 'Fornecedor'],
        linhas: [
          ['02/10/2026', 'Ração e sal mineral', '4.850,00', 'Alimentação / Ração', 'Casa agropecuária'],
          ['03/10/2026', 'Vacinas e vermífugo', '1.320,00', 'Sanitário / Medicamentos', 'Casa agropecuária'],
          ['05/10/2026', 'Diária de roçada (3 dias)', '450,00', 'Mão de Obra', 'Diarista'],
          ['07/10/2026', 'Diesel do trator', '980,00', 'Combustível / Máquinas', 'Posto da estrada'],
          ['09/10/2026', 'Energia da sede e do curral', '612,40', 'Energia Elétrica / Água', 'Companhia de energia'],
          ['12/10/2026', 'Salário do vaqueiro', '2.100,00', 'Mão de Obra', 'Vaqueiro'],
          ['15/10/2026', 'Conserto de cerca', '1.750,00', 'Infraestrutura / Cercas', 'Serralheria'],
          ['20/10/2026', 'Visita do veterinário', '400,00', 'Veterinário / Assistência Técnica', 'Veterinário'],
        ],
        nota: 'Valor em reais, sem o símbolo R$. Datas no formato dia/mês/ano. Os oito lançamentos são exemplo: apague e digite os seus.',
      } },
      { planilha: {
        arquivo: 'planilha-de-gestao-rural-receitas',
        titulo: 'Planilha de gestão rural: receitas',
        aba: 'Receitas',
        colunas: ['Data', 'Origem', 'Valor', 'Categoria'],
        linhas: [
          ['10/10/2026', 'Venda de 6 bois gordos', '29.952,00', 'Venda de Gado'],
          ['15/10/2026', 'Leite da primeira quinzena', '4.100,00', 'Leite'],
          ['18/10/2026', 'Arrendamento de pasto', '3.000,00', 'Arrendamento'],
          ['25/10/2026', 'Venda de 2 bezerros desmamados', '4.800,00', 'Venda de Bezerros'],
        ],
        nota: 'Receita é o que entrou, na data em que entrou. Venda a prazo entra quando o dinheiro cai, não quando você combinou.',
      } },
    ] },
    { h2: 'Categorias que valem a pena', blocos: [
      { p: 'Categoria é o que transforma uma lista de gastos em informação. Sem ela, no fim do mês você sabe quanto gastou, mas não onde. Use poucas, para que lançar seja rápido, e sempre as mesmas:' },
      { tabela: { colunas: ['Categoria', 'O que entra', 'Exemplo'], linhas: [
        ['Alimentação / Ração', 'Ração, sal, silagem, milho comprado', 'Saco de ração'],
        ['Sanitário / Medicamentos', 'Vacina, vermífugo, antibiótico', 'Vacinas do lote'],
        ['Mão de Obra', 'Salário, diária, encargos', 'Diária de roçada'],
        ['Combustível / Máquinas', 'Diesel, peça, manutenção', 'Diesel do trator'],
        ['Energia Elétrica / Água', 'Conta de luz do curral e da sede', 'Conta do mês'],
        ['Infraestrutura / Cercas', 'Cerca, curral, bebedouro, estrada', 'Conserto de cerca'],
      ], nota: 'As mesmas categorias que o FINAGRO traz prontas, para a planilha e o aplicativo conversarem.' } },
      { p: 'A pesquisa da Embrapa sobre o custo do leite mostra por que essa divisão faz sentido: os custos com alimentação são a maior parcela do custo total, e entre os demais custos se destacam depreciação, mão de obra, sanidade, reprodução, energia e combustível. Se a ração pesa mais, é nela que o seu olho precisa ficar. Os medicamentos e as vacinas entram nos custos de sanidade.' },
    ] },
    { h2: 'Separe a conta da casa da conta da fazenda', blocos: [
      { p: 'O erro mais comum na planilha rural é lançar tudo junto: o supermercado da casa, a mensalidade da escola e a ração do gado na mesma coluna. No fim, o saldo diz que a fazenda deu prejuízo quando foi a casa que gastou mais.' },
      { ul: [
        '**Pague a você mesmo um valor fixo por mês.** Retire sempre o mesmo valor da conta da fazenda para a casa, e lance como uma despesa só. O resto é da fazenda.',
        '**Conta de banco separada**, se puder. Pix da casa não sai da conta da fazenda.',
        '**Trabalho da família entra na conta.** A Embrapa, ao calcular o custo de produção, atribui à mão de obra da família um salário compatível com o que se paga no mercado. Sem isso, o custo real da atividade fica escondido.',
        '**Gasto pessoal que passou na conta da fazenda** vira retirada, não despesa de ração.',
      ] },
      { p: 'Quem tem mais de uma propriedade deve ter uma planilha por fazenda, com o mesmo modelo, para somar depois. Veja também como o dinheiro anda no tempo em [fluxo de caixa rural](/fluxo-de-caixa-rural).' },
    ] },
    { h2: 'Como fechar o mês', blocos: [
      { ol: [
        '**Junte tudo que entrou e saiu:** extrato do banco, notas e anotações do caderno. Lance o que faltar.',
        '**Confira as categorias.** Nenhuma despesa fica em "Outro" se você sabe o que foi.',
        '**Some as receitas e as despesas** e subtraia: receitas menos despesas é o saldo do mês.',
        '**Olhe as três maiores despesas.** É nelas que está o dinheiro que dá para economizar.',
        '**Anote o que ficou a pagar e a receber** para o mês seguinte, com data e valor.',
      ] },
      { tabela: { colunas: ['Resumo do mês de exemplo', 'Valor'], linhas: [
        ['Receitas (4 lançamentos)', 'R$ 41.852,00'],
        ['Despesas (8 lançamentos)', 'R$ 12.462,40'],
        ['Saldo do mês', 'R$ 29.389,60'],
      ], nota: 'Soma das duas planilhas de exemplo desta página.' } },
      { p: 'Nesse exemplo, a venda dos bois sozinha explica quase todo o saldo. Isso é normal em pecuária de corte: a receita vem em poucos meses do ano e a despesa corre todo mês. Por isso o saldo de um mês isolado engana, e o que vale é o ano.' },
    ] },
    { h2: 'Como passar essas planilhas para o FINAGRO', blocos: [
      { p: 'Os cabeçalhos das duas planilhas são os que o FINAGRO reconhece. Despesas e receitas entram em arquivos separados:' },
      { ol: [
        'No Excel, salve a aba de despesas como CSV (Arquivo, Salvar como, CSV) e depois a de receitas, em outro arquivo. O FINAGRO lê o arquivo CSV.',
        'No FINAGRO, abra a tela Importar planilha, escolha "Despesas" e o arquivo. Repita com "Receitas".',
        'Confira a lista que o app mostra. Data ou valor que ele não entendeu aparece com o número da linha, e nada é gravado antes de você confirmar.',
        'Toque em Importar. Os lançamentos entram na fazenda ativa já como pagos e recebidos.',
      ] },
    ] },
  ],
  noFinagro: { h2: 'A gestão da fazenda no FINAGRO', itens: [
    '**Receitas e despesas** com categoria, e **contas a pagar e a receber** que viram o saldo previsto do fluxo de caixa.',
    '**Centro de custo** para saber quanto cada atividade da fazenda gastou e rendeu.',
    '**Relatórios em PDF e em planilha (CSV)** quando o contador pedir, e o arquivo do LCDPR no leiaute da Receita, que o contador completa e valida.',
    '**Importação da planilha** de despesas e receitas em CSV, com conferência linha a linha antes de gravar.',
    '**Lançamento sem sinal:** a despesa anotada na cerca fica salva no celular e sobe quando a internet volta.',
  ] },
  cta: { forte: 'Despesa lançada no celular, saldo do mês sem somar à mão.', texto: 'Grátis até 1.000 animais com ficha, até 3 fazendas e 5 pessoas, sem cartão.' },
  faqTitulo: 'Perguntas sobre planilha de gestão rural',
  faq: [
    ['Tem planilha de gestão rural grátis?', 'Tem. As duas planilhas desta página são grátis, sem cadastro, em Excel e CSV: uma para despesas e outra para receitas, com exemplos de um mês de fazenda de gado.'],
    ['Como montar uma planilha de fluxo de caixa rural?', 'Anote cada entrada e cada saída com a data em que o dinheiro entrou ou saiu, o valor e a categoria. Some as receitas, subtraia as despesas e leve o saldo para o mês seguinte. Inclua as contas a pagar e a receber.'],
    ['Que categorias usar no controle financeiro rural?', 'Comece por alimentação, sanidade, mão de obra, combustível e máquinas, energia e infraestrutura nas despesas, e por venda de gado, leite e arrendamento nas receitas. Poucas categorias, sempre as mesmas.'],
    ['Como separar o dinheiro da casa do dinheiro da fazenda?', 'Defina um valor fixo de retirada por mês, lance como uma despesa só e mantenha a casa fora das categorias da fazenda. Se puder, use contas de banco separadas.'],
    ['Posso levar a planilha para o FINAGRO?', 'Pode. O FINAGRO importa despesas e receitas em arquivos CSV separados, com estes mesmos cabeçalhos, e mostra a lista para você conferir antes de gravar.'],
  ],
  fontes: [
    { nome: 'Embrapa, análise dos custos de produção na atividade leiteira brasileira', url: 'https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1187201/analise-dos-custos-de-producao-na-atividade-leiteira-brasileira-custos-alimentares-e-nao-alimentares' },
    { nome: 'Embrapa, coeficientes técnicos e custo de produção do leite', url: 'https://sistemasdeproducao.cnptia.embrapa.br/FontesHTML/Leite/LeiteRecriadeNovilhas/coeficientestecnicos.htm' },
  ],
  relacionados: ['fluxo-de-caixa-rural', 'gestao-rural', 'custo-de-producao-por-hectare'],
};
