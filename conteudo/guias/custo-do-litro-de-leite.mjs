// Consulta-alvo: "custo do litro de leite", "como calcular o custo do litro de leite" e
// "custo de produção de leite" (colheita de 08/10/2026).
export const provas = [
  { afirmacao: 'a análise do custo da atividade leiteira separa custos alimentares e não alimentares', trecho: 'O presente trabalho analisa a composição dos custos de produção na atividade leiteira brasileira, separando custos alimentares e não alimentares', url: 'https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1187201/analise-dos-custos-de-producao-na-atividade-leiteira-brasileira-custos-alimentares-e-nao-alimentares' },
  { afirmacao: 'a alimentação representa a maior parcela do custo total na base estudada', trecho: 'Os custos com alimentação representam a maior parcela do custo total e com participação crescente à medida que o volume de produção aumenta', url: 'https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1187201/analise-dos-custos-de-producao-na-atividade-leiteira-brasileira-custos-alimentares-e-nao-alimentares' },
  { afirmacao: 'depreciação, mão de obra, sanidade, reprodução, energia e combustível são custos não alimentares destacados', trecho: 'Entre os custos não alimentares, destacam-se depreciação, mão de obra, sanidade e reprodução, além de energia e combustível', url: 'https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1187201/analise-dos-custos-de-producao-na-atividade-leiteira-brasileira-custos-alimentares-e-nao-alimentares' },
  { afirmacao: 'é preciso deixar claro qual tipo de custo está sendo calculado', trecho: 'Deve ser claro o tipo de custo que está sendo calculado, se o custo da atividade leiteira', url: 'https://sistemasdeproducao.cnptia.embrapa.br/FontesHTML/Leite/LeiteRecriadeNovilhas/coeficientestecnicos.htm' },
  { afirmacao: 'o trabalho da família pode receber valor compatível com a remuneração de mercado', trecho: 'para cada uma das atividades desempenhadas por membros da família, atribui-se salário compatível à remuneração encontrada no mercado', url: 'https://sistemasdeproducao.cnptia.embrapa.br/FontesHTML/Leite/LeiteRecriadeNovilhas/coeficientestecnicos.htm' },
  { afirmacao: 'a alimentação produzida na fazenda deve considerar os insumos usados em sua produção', trecho: 'devem ser considerados todos os insumos utilizados para produção dos referidos alimentos, como fertilizantes, defensivos, sementes e outros', url: 'https://sistemasdeproducao.cnptia.embrapa.br/FontesHTML/Leite/LeiteRecriadeNovilhas/coeficientestecnicos.htm' },
  { afirmacao: 'medicamentos e vacinas usados na prevenção e no tratamento entram nos custos de sanidade', trecho: 'Medicamentos e vacinais: todos os itens relacionados à prevenção e/ou tratamento de doenças e/ou problemas sanitários no rebanho', url: 'https://sistemasdeproducao.cnptia.embrapa.br/FontesHTML/Leite/LeiteRecriadeNovilhas/coeficientestecnicos.htm' },
  { afirmacao: 'o custo total soma todos os custos apurados na atividade leiteira', trecho: 'O custo total da atividade leiteira (CT), dado em Reais por ano, é a soma de todos os custos apurados nos itens descritos neste trabalho', url: 'https://sistemasdeproducao.cnptia.embrapa.br/FontesHTML/Leite/LeiteRecriadeNovilhas/coeficientestecnicos.htm' },
  { afirmacao: 'a depreciação reserva valor para substituir bens de produção duráveis', trecho: 'Depreciação: reserva contábil destinada a gerar fundos necessários para substituição de bens de produção de longa duração', url: 'https://sistemasdeproducao.cnptia.embrapa.br/FontesHTML/Leite/LeiteRecriadeNovilhas/coeficientestecnicos.htm' },
  { afirmacao: 'a remuneração do capital considera o capital médio investido na atividade leiteira', trecho: 'Remuneração do capital investido: valor referente a remuneração anual do capital médio investido na atividade leiteira', url: 'https://sistemasdeproducao.cnptia.embrapa.br/FontesHTML/Leite/LeiteRecriadeNovilhas/coeficientestecnicos.htm' },
  { afirmacao: 'depreciação, remuneração do capital e seguro não são desembolsos efetivos', trecho: 'depreciação, remuneração sobre capital e seguro, que não representam desembolsos efetivos e cuja metodologia de cálculo é menos homogênea', url: 'https://sistemasdeproducao.cnptia.embrapa.br/FontesHTML/Leite/LeiteRecriadeNovilhas/coeficientestecnicos.htm' },
  { afirmacao: 'calcular o custo serve para comparar com o preço recebido e corrigir falhas', trecho: 'para fazer comparações com o preço recebido pelo leite; e, (3) para corrigir falhas e alterar metas no processo produtivo', url: 'https://sistemasdeproducao.cnptia.embrapa.br/FontesHTML/Leite/LeiteRecriadeNovilhas/coeficientestecnicos.htm' },
];

export default {
  slug: 'custo-do-litro-de-leite',
  grupo: 'leite',
  tipo: 'calculadora',
  curto: 'Custo do litro de leite',
  resumo: 'Some os gastos e veja o custo e a margem de cada litro.',
  title: 'Custo do litro de leite: calcule custo e margem',
  description: 'Calcule o custo do litro de leite com os gastos do mês, veja a margem por litro e no mês e entenda o que falta para chegar ao custo total.',
  h1: 'Custo do litro de leite: faça a conta do mês e veja a margem',
  pergunta: 'Como calcular o custo do litro de leite?',
  resposta: 'Some alimentação, mão de obra, sanidade e os outros gastos do mês. Divida o total pelos litros produzidos: esse é o custo por litro dos itens informados. Depois tire esse custo do preço recebido para achar a margem por litro. Multiplique a margem pelos litros do mês para ver o resultado mensal.',
  tela: 'fluxo',
  atualizado: '2026-10-08',
  calc: {
    titulo: 'Calcule o custo e a margem do leite',
    campos: [
      { id: 'alimentacao', rotulo: 'Alimentação no mês (R$)', valor: 12000, min: 0, passo: 10 },
      { id: 'maoObra', rotulo: 'Mão de obra no mês (R$)', valor: 4500, min: 0, passo: 10 },
      { id: 'sanidade', rotulo: 'Sanidade no mês (R$)', valor: 1000, min: 0, passo: 10 },
      { id: 'outros', rotulo: 'Outros custos no mês (R$)', valor: 2500, min: 0, passo: 10 },
      { id: 'litros', rotulo: 'Litros produzidos no mês', valor: 10000, min: 1, passo: 1 },
      { id: 'preco', rotulo: 'Preço recebido por litro (R$)', valor: 2.5, min: 0, passo: 0.01 },
    ],
    saidas: [
      { id: 'custoLitro', rotulo: 'custo por litro informado', casas: 2, prefixo: 'R$ ' },
      { id: 'margemLitro', rotulo: 'margem por litro', casas: 2, prefixo: 'R$ ' },
      { id: 'margemMes', rotulo: 'margem no mês', casas: 2, prefixo: 'R$ ' },
      { id: 'totalGastos', rotulo: 'gastos informados', casas: 2, prefixo: 'R$ ' },
    ],
    calcular: (v) => {
      const totalGastos = v.alimentacao + v.maoObra + v.sanidade + v.outros;
      const custoLitro = totalGastos / v.litros;
      const margemLitro = v.preco - custoLitro;
      return { custoLitro, margemLitro, margemMes: margemLitro * v.litros, totalGastos };
    },
    nota: 'Os valores preenchidos são só um exemplo. A conta mostra o custo dos itens informados. Para chegar mais perto do custo total, inclua o valor do trabalho da família e uma parcela de depreciação, capital e seguro em outros custos.',
    exemplos: [
      { entrada: { alimentacao: 12000, maoObra: 4500, sanidade: 1000, outros: 2500, litros: 10000, preco: 2.5 }, saida: { custoLitro: 2, margemLitro: 0.5, margemMes: 5000, totalGastos: 20000 } },
      { entrada: { alimentacao: 5200, maoObra: 2100, sanidade: 700, outros: 1000, litros: 6000, preco: 1.35 }, saida: { custoLitro: 1.5, margemLitro: -0.15, margemMes: -900, totalGastos: 9000 } },
    ],
  },
  secoes: [
    { h2: 'A conta do custo por litro', blocos: [
      { p: 'A conta básica cabe no papel: **gastos do mês ÷ litros produzidos no mesmo mês**. Se alimentação, mão de obra, sanidade e outros custos somaram R$ 20.000 e o tanque registrou 10.000 litros, o custo dos itens informados foi R$ 2,00 por litro.' },
      { p: 'Com o preço recebido de R$ 2,50 por litro, a margem desta conta é R$ 0,50 por litro. Em 10.000 litros, são R$ 5.000 no mês. Esses valores são ilustrativos para mostrar a aritmética. Troque todos pelos dados da sua fazenda.' },
      { destaque: 'Use gastos e produção do mesmo período. Misturar a ração de um mês com os litros de outro distorce o resultado.' },
    ] },
    { h2: 'O que lançar em cada campo', blocos: [
      { ul: [
        '**Alimentação:** concentrado, mineral, volumoso comprado e os insumos usados para produzir silagem, cana ou pasto consumidos pelo rebanho. Em análise recente da Embrapa Gado de Leite, a alimentação aparece como a maior parcela do custo total na base estudada.',
        '**Mão de obra:** salários, encargos, diárias e serviços ligados ao leite. Se a família trabalha na ordenha, trato ou manejo, atribua um valor compatível com o mercado para enxergar esse custo.',
        '**Sanidade:** vacinas e medicamentos usados na prevenção ou no tratamento de problemas sanitários do rebanho.',
        '**Outros custos:** depreciação, reprodução, energia, combustível e os demais gastos que pertencem à atividade leiteira.',
        '**Litros:** use a produção medida no mês. Mantenha o mesmo critério nos fechamentos seguintes para a comparação não trocar de base.',
      ] },
      { p: 'A Embrapa separa os custos da produção leiteira entre alimentares e não alimentares. Entre os não alimentares, a publicação destaca depreciação, mão de obra, sanidade, reprodução, energia e combustível. Essa separação ajuda a descobrir qual grupo está puxando o custo.' },
    ] },
    { h2: 'Gasto do mês e custo total são contas diferentes', blocos: [
      { p: 'A calculadora entrega o **custo por litro dos itens informados**. Se você preencher apenas o dinheiro que saiu do caixa, terá uma visão do desembolso mensal. O custo total vai além: a metodologia da Embrapa soma todos os custos apurados na atividade leiteira.' },
      { p: 'Depreciação, remuneração do capital e seguro merecem uma linha própria, embora não sejam pagamentos feitos todo mês. A depreciação forma uma reserva para substituir bens de produção de longa duração. A remuneração do capital considera o capital médio investido na atividade leiteira.' },
      { p: 'Também deixe claro o alcance da conta. O custo da atividade leiteira pode reunir criação de animais, produção de alimentos e produção do leite. Uma conta restrita à ordenha deixa parte do sistema fora. A Embrapa recomenda declarar qual tipo de custo está sendo calculado para que a comparação seja justa.' },
      { destaque: 'A margem desta página é gerencial e simplificada. Ela não substitui o fechamento contábil nem inclui automaticamente os custos que você deixou fora dos campos.' },
    ] },
    { h2: 'Como ler a margem sem se enganar', blocos: [
      { p: 'Margem por litro é **preço recebido menos custo por litro informado**. Quando o resultado fica negativo, a receita do leite não cobre os gastos lançados. Quando fica positivo, ainda é preciso conferir se depreciação, capital, seguro, trabalho da família e produção de alimentos já entraram antes de chamar o saldo de lucro.' },
      { p: 'Compare o mesmo tipo de custo ao longo dos meses. Se janeiro inclui depreciação e fevereiro não inclui, a diferença não mostra uma melhora real da lida. A própria metodologia da Embrapa coloca entre os objetivos do cálculo comparar o custo com o preço recebido, corrigir falhas e alterar metas do processo produtivo.' },
      { p: 'O preço recebido entra como informação da fazenda. Esta página não usa preço médio nem promete uma margem normal. O número certo para a conta é o que aparece no seu comprovante de pagamento do leite.' },
    ] },
    { h2: 'Fechamento mensal que dá para repetir', blocos: [
      { ol: [
        'Feche a produção do mês em litros, sempre pelo mesmo critério de medição.',
        'Some as compras e contas consumidas pela atividade no mesmo período.',
        'Rateie energia, combustível e manutenção quando servirem também a outras atividades da fazenda.',
        'Dê valor ao trabalho da família e separe uma parcela para os custos que não saem do caixa todo mês.',
        'Compare custo, preço e margem com o fechamento anterior e guarde a memória da conta.',
      ] },
      { p: 'Para organizar todas as entradas, saídas, contas futuras e centros de custo, veja o guia de [fluxo de caixa rural](/fluxo-de-caixa-rural). Ele mostra como registrar o dinheiro da fazenda sem repetir a conta específica do litro feita nesta página.' },
    ] },
  ],
  noFinagro: { h2: 'As contas do leite no FINAGRO', itens: [
    'Lance receitas, despesas e contas a pagar ou a receber no celular ou no navegador.',
    'Use um centro de custo para separar a atividade leiteira dos outros gastos da fazenda.',
    'Acompanhe o fluxo de caixa com o saldo previsto antes do vencimento das contas.',
    'Tire relatórios em PDF ou planilha CSV para conferir os lançamentos com o contador.',
    'O lançamento feito sem sinal fica salvo no aparelho e sobe quando a internet volta.',
  ] },
  cta: { forte: 'Leve as contas do leite para o celular e feche o mês certo.', texto: 'Plano Campo grátis para sempre, sem cartão, no Android e no navegador.' },
  faqTitulo: 'Perguntas sobre custo do litro de leite',
  faq: [
    ['Qual é a fórmula do custo do litro de leite?', 'Some os custos do período e divida pelos litros produzidos no mesmo período. A calculadora desta página separa alimentação, mão de obra, sanidade e outros custos antes da divisão.'],
    ['Uso litros produzidos ou litros vendidos?', 'Esta calculadora usa os litros produzidos no mês, como definido nos campos. Se a sua gestão usa litros vendidos, mantenha esse critério em todos os meses e deixe essa escolha registrada para não comparar bases diferentes.'],
    ['O trabalho da família entra no custo?', 'Entra quando você quer enxergar um custo mais completo. A metodologia da Embrapa atribui ao trabalho familiar um valor compatível com a remuneração encontrada no mercado para a atividade realizada.'],
    ['Margem positiva quer dizer lucro?', 'Não necessariamente. A margem calculada cobre apenas os custos informados. Antes de tratar o saldo como lucro, confira depreciação, remuneração do capital, seguro, trabalho da família e custos de produção dos alimentos.'],
    ['Onde anoto os gastos do leite no FINAGRO?', 'Lance cada despesa e use um centro de custo para a atividade leiteira. O FINAGRO organiza receitas, despesas, contas a pagar e a receber, fluxo de caixa e relatórios. A calculadora desta página faz a conta por litro.'],
  ],
  fontes: [
    { nome: 'Embrapa Gado de Leite, análise dos custos alimentares e não alimentares', url: 'https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1187201/analise-dos-custos-de-producao-na-atividade-leiteira-brasileira-custos-alimentares-e-nao-alimentares' },
    { nome: 'Embrapa Gado de Leite, custos e receitas na produção de leite', url: 'https://sistemasdeproducao.cnptia.embrapa.br/FontesHTML/Leite/LeiteRecriadeNovilhas/coeficientestecnicos.htm' },
  ],
  relacionados: ['controle-leiteiro', 'fluxo-de-caixa-rural', 'planilha-de-gestao-rural'],
};
