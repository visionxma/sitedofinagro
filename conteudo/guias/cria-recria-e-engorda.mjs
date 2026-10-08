// Consultas-alvo: "cria recria e engorda", "cria recria e engorda de bovinos de corte" e "gado de corte".
export const provas = [
  { afirmacao: 'a produção bovina é dividida em cria, recria e engorda', trecho: 'a exploração bovina constitui-se, em sua maioria, de três fases de produção animal: cria, recria e engorda', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/316660/1/COT47.pdf' },
  { afirmacao: 'a cria reúne gestação, nascimento e aleitamento e termina na desmama', trecho: 'ocorre a gestação, o nascimento e o aleitamento do bezerro. A cria termina com a desmama', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/316660/1/COT47.pdf' },
  { afirmacao: 'depois da desmama vêm recria e engorda até o animal ficar pronto para abate', trecho: 'A partir daí, o animal passa pelas fases de recria e de engorda ou acabamento para se tornar pronto para o abate', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/316660/1/COT47.pdf' },
];

export default {
  slug: 'cria-recria-e-engorda',
  grupo: 'corte',
  tipo: 'guia',
  curto: 'Cria, recria e engorda',
  resumo: 'Entenda as fases e o registro que cada uma pede.',
  title: 'Cria, recria e engorda: fases do gado de corte',
  description: 'Entenda cria, recria e engorda de bovinos de corte, o que medir do nascimento ao abate e quais registros evitam perder peso, custo e histórico.',
  h1: 'Cria, recria e engorda: o que muda em cada fase do gado',
  pergunta: 'O que são cria, recria e engorda de bovinos de corte?',
  resposta: 'Cria vai da reprodução e nascimento até a desmama. Recria recebe o animal desmamado e acompanha seu crescimento. Engorda, também chamada terminação, prepara o bovino para sair gordo. Cada fase pede identificação, datas, pesagens, sanidade e movimentação; juntas, elas formam o ciclo completo do gado de corte.',
  tela: 'animais',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'As três fases do gado de corte', blocos: [
      { p: 'A Embrapa descreve a exploração bovina em três fases: **cria, recria e engorda**. Uma fazenda pode trabalhar com uma delas, combinar duas ou fechar o ciclo completo. O nome da fase mostra em que trecho da vida e da produção aquele animal está.' },
      { glossario: [['Cria', 'Reprodução, gestação, nascimento, aleitamento e manejo até a desmama.'], ['Recria', 'Crescimento do animal depois da desmama, antes da fase final de acabamento.'], ['Engorda', 'Terminação do bovino para atingir a condição de saída como boi gordo.'], ['Ciclo completo', 'Cria, recria e engorda feitas dentro do mesmo sistema de produção.']] },
      { p: 'A divisão não exige que toda fazenda use a mesma idade ou o mesmo peso para trocar de recria para engorda. O ponto depende do sistema, da categoria, do mercado e da estratégia de terminação. O registro deve mostrar o que aconteceu de fato, em vez de forçar o animal em uma faixa pronta.' },
    ] },
    { h2: 'Cria: do nascimento à desmama', blocos: [
      { p: 'Na cria, o resultado começa antes do bezerro nascer. A fase reúne as matrizes, a reprodução, a gestação, o parto, o aleitamento e a desmama. A Embrapa marca a desmama como o fim da cria.' },
      { p: 'O primeiro registro é a identificação. Anote brinco, sexo, raça, mãe, data de nascimento e peso ao nascer quando houver balança. Registre parto, ocorrências de saúde, vacinas e qualquer perda. Na desmama, guarde data, peso e lote de destino.' },
      { ul: ['Matriz e reprodutor ou manejo reprodutivo usado.', 'Data do nascimento, sexo e identificação do bezerro.', 'Peso ao nascer e peso à desmama, quando medidos.', 'Vacinas, medicamentos, doenças e observações.', 'Data da desmama e movimentação para o lote seguinte.'] },
      { destaque: 'Sem ligar o bezerro à mãe e à data de nascimento, a fazenda perde a história da cria.' },
    ] },
    { h2: 'Recria: acompanhar crescimento depois da desmama', blocos: [
      { p: 'A recria começa com o animal desmamado. É a fase de crescimento antes do acabamento final. Para saber se o lote está avançando, o registro precisa de peso de entrada, pesagens intermediárias, peso de saída e as datas correspondentes.' },
      { p: 'O ganho vem da diferença entre as pesagens. Com data e peso, a fazenda consegue comparar períodos e lotes sem depender da lembrança. Também precisa anotar mudança de pasto, suplementação usada, sanidade e qualquer manejo que ajude a explicar uma quebra ou avanço no desempenho.' },
      { tabela: { colunas: ['Registro', 'Na entrada', 'Durante', 'Na saída'], linhas: [['Peso', 'Peso de entrada', 'Pesagens comparáveis', 'Peso de saída'], ['Lote', 'Origem', 'Mudanças de pasto', 'Destino'], ['Sanidade', 'Histórico recebido', 'Vacinas e manejo', 'Pendências'], ['Data', 'Início', 'Cada evento', 'Fim da fase']], nota: 'O mesmo animal deve manter sua identificação ao atravessar as fases.' } },
    ] },
    { h2: 'Engorda: medir a terminação até a saída', blocos: [
      { p: 'Na engorda, ou terminação, o animal caminha para a condição de venda ou abate. O registro começa com peso de entrada, origem do lote e data. Depois acompanha pesagens, alimentação, movimentação, sanidade e custo ligado à fase.' },
      { p: 'Na saída, anote peso final, data, comprador, número de cabeças e valor da venda. Se a negociação usar arrobas de carcaça, guarde a estimativa feita antes e o romaneio recebido depois. Peso vivo e arrobas não são a mesma medida; a conversão depende do rendimento de carcaça.' },
      { ul: ['Peso de entrada e data de início da terminação.', 'Pesagens no mesmo padrão para acompanhar ganho.', 'Lote, área ou instalação onde o animal ficou.', 'Despesas e insumos associados ao período.', 'Peso de saída, arrobas negociadas, comprador e receita.'] },
      { p: 'A engorda termina quando o animal sai como bovino terminado dentro do sistema escolhido. Não copie um peso de outra fazenda como regra universal. Combine a meta com o comprador e com a assistência técnica, considerando categoria, acabamento e mercado.' },
    ] },
    { h2: 'Um registro que atravessa as três fases', blocos: [
      { p: 'O maior ganho de organização vem de manter a mesma ficha do nascimento à venda. A identificação acompanha o animal; os eventos entram em ordem de data; cada mudança de lote fica visível. Assim, cria, recria e engorda deixam de ser três cadernos soltos.' },
      { ol: ['Abra a ficha no nascimento ou na entrada do animal.', 'Registre desmama, pesagens, sanidade e reprodução como eventos.', 'Mude o animal de lote sem criar uma segunda ficha.', 'Lance receitas e despesas na data em que acontecerem.', 'Feche a saída com peso, comprador e valor, preservando todo o histórico.'] },
      { p: 'Para comparar lotes, use o mesmo ponto de partida. Na cria, olhe nascimento e desmama. Na recria, entrada, saída e ganho. Na engorda, entrada, saída, ganho, arrobas e resultado financeiro. Misturar fases esconde onde o desempenho mudou.' },
    ] },
  ],
  noFinagro: { h2: 'As fases do rebanho no FINAGRO', itens: [
    'A ficha guarda brinco, raça, sexo, nascimento, peso e foto do animal.',
    'Reprodução, parto previsto e desmame ficam registrados no histórico.',
    'Pesagens mostram o ganho entre uma medição e a seguinte.',
    'Vacinas, sanidade e mudanças de lote acompanham a lida.',
    'A venda entra como receita e pode ficar ligada ao fluxo de caixa.',
  ] },
  cta: { forte: 'Da cria à venda, mantenha uma ficha por animal.', texto: 'FINAGRO grátis, sem cartão, para até 1.000 animais com ficha.' },
  faqTitulo: 'Perguntas sobre cria, recria e engorda',
  faq: [
    ['O que é a fase de cria?', 'É a fase que reúne reprodução, gestação, nascimento e aleitamento do bezerro e termina na desmama.'],
    ['Quando começa a recria?', 'A recria começa depois da desmama e acompanha o crescimento do animal antes da terminação.'],
    ['Engorda e terminação são a mesma coisa?', 'Neste contexto, sim. É a fase final em que o bovino é preparado para sair como animal gordo.'],
    ['O que é pecuária de ciclo completo?', 'É o sistema que mantém as fases de cria, recria e engorda de forma combinada na produção.'],
    ['Quais pesos devem ser anotados?', 'Na cria, nascimento e desmama quando medidos; na recria e engorda, peso de entrada, pesagens intermediárias e peso de saída.'],
  ],
  fontes: [
    { nome: 'Embrapa Gado de Corte, considerações econômicas sobre a produção de bezerros de corte', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/316660/1/COT47.pdf' },
  ],
  relacionados: ['controle-de-rebanho', 'calculadora-gmd', 'rendimento-de-carcaca'],
};
