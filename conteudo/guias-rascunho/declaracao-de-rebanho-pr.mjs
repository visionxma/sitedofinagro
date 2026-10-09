// Consultas-alvo: "declaração de rebanho pr", "declaração de rebanho 2026 pr", "atualização de rebanho adapar" (colheita de 08/10/2026).
// Regra sanitária do Paraná: período, sistema e punição só com trecho de página da Adapar (adapar.pr.gov.br).
const SERVICO = 'https://www.adapar.pr.gov.br/servicos/Agropecuaria/Pecuaria/Atualizar-cadastro-do-rebanho-Epolw4rB';
const NOTICIA = 'https://www.adapar.pr.gov.br/Noticia/Adapar-inicia-nesta-sexta-feira-Campanha-de-Atualizacao-de-Rebanhos-2026';

export const provas = [
  { afirmacao: 'no Paraná a campanha é em etapa única, de 1º de maio a 30 de junho', trecho: 'A campanha de atualização do cadastro é realizada em etapa única, que vai de 1° de maio a 30 de junho', url: SERVICO },
  { afirmacao: 'a campanha de 2026 começou na sexta-feira, 1º de maio', trecho: 'inicia a Campanha de Atualização de Rebanho de 2026 nesta sexta-feira, 1º de maio', url: NOTICIA },
  { afirmacao: 'a campanha de 2026 seguiu até 30 de junho', trecho: 'com a saúde pública. A campanha segue até 30 de junho', url: NOTICIA },
  { afirmacao: 'a campanha cobre bois, búfalos, cabras, ovelhas, suínos, cavalos, jumentos, mulas, abelhas, galinhas e peixes', trecho: 'É a campanha de atualização do cadastro de todos os animais de uma propriedade rural: bois, búfalos, cabras, ovelhas, suínos, cavalos, jumentos, mulas, abelhas, galinhas e peixes', url: SERVICO },
  { afirmacao: 'a atualização é obrigatória para todo produtor com animais de produção de qualquer espécie sob sua guarda', trecho: 'A atualização é obrigatória para todos os produtores rurais com animais de produção de qualquer espécie sob sua guarda', url: SERVICO },
  { afirmacao: 'a atualização se faz pela internet ou pessoalmente na Adapar, em sindicato rural ou no escritório de atendimento do município', trecho: 'Pela internet ou pessoalmente em uma das unidades locais da Adapar , sindicatos rurais ou escritório de atendimento de seu município (prefeituras)', url: SERVICO },
  { afirmacao: 'a atualização também pode ser feita pelo aplicativo Paraná Agro', trecho: 'Os produtores podem fazer a atualização pelo aplicativo Paraná Agro , pelo site da Adapar ou presencialmente em um dos escritórios locais da autarquia', url: NOTICIA },
  { afirmacao: 'no primeiro acesso o produtor informa o CPF e cria login e senha', trecho: 'No primeiro acesso, você deve fazer um cadastro . Basta informar o CPF e seguir o passo a passo para criar login e senha', url: SERVICO },
  { afirmacao: 'o produtor escolhe a propriedade com pendência, a espécie, preenche os dados e clica em Comprovar, repetindo para cada espécie', trecho: 'escolha a espécie e preencha com os dados pedidos Depois, clique em Comprovar Repita este procedimento para cada uma das espécies com pendência', url: SERVICO },
  { afirmacao: 'pessoalmente, o produtor pede o formulário, preenche, assina e devolve na mesma unidade', trecho: 'solicite o formulário de atualização Preencha, assine e devolva na mesma unidade onde retirou o documento', url: SERVICO },
  { afirmacao: 'pela internet a atualização é imediata, e no formulário o prazo varia', trecho: 'Quando feita pela internet, a atualização do rebanho é imediata. Para formulários entregues pessoalmente, o prazo é variável', url: SERVICO },
  { afirmacao: 'a GTA só é emitida depois da atualização de todas as espécies da propriedade', trecho: 'A Guia de Trânsito Animal (GTA) somente será emitida após a atualização de todas as espécies animais existentes na propriedade', url: SERVICO },
  { afirmacao: 'quem não atualiza fica impedido de emitir a GTA', trecho: 'Os produtores que não fizerem ficam impedidos de emitir a Guia de Trânsito Animal (GTA)', url: NOTICIA },
  { afirmacao: 'sem a guia não há trânsito entre propriedades nem para o abatedouro, e pode haver autuação e multa', trecho: 'seja entre propriedades ou para o transporte até um abatedouro, o que impossibilita o comércio e pode acarretar autuações e multas', url: NOTICIA },
];

export default {
  slug: 'declaracao-de-rebanho-pr',
  grupo: 'corte',
  tipo: 'guia',
  curto: 'Declaração de rebanho PR',
  resumo: 'Campanha da Adapar de maio a junho e como atualizar.',
  title: 'Declaração de rebanho no PR: prazo 2026 na Adapar',
  description: 'Declaração de rebanho no PR: a campanha da Adapar vai de 1º de maio a 30 de junho. Veja como atualizar pela internet e o que acontece com a GTA de quem atrasa.',
  h1: 'Declaração de rebanho no PR: prazo de 2026 e como atualizar na Adapar',
  pergunta: 'Como fazer a declaração de rebanho no Paraná?',
  resposta: 'No Paraná a declaração se chama atualização do cadastro do rebanho e acontece em etapa única, de 1º de maio a 30 de junho. É obrigatória para quem tem animal de produção de qualquer espécie. Faz-se pela internet, no aplicativo Paraná Agro ou numa unidade da Adapar. A guia de trânsito só sai com todas as espécies atualizadas.',
  tela: 'animais',
  atualizado: '2026-10-09',
  secoes: [
    { h2: 'Como a Adapar chama e quem é obrigado', blocos: [
      { p: 'Quem pesquisa declaração de rebanho no Paraná encontra o serviço com outro nome: atualização do cadastro do rebanho, feita na Campanha de Atualização de Rebanhos. O órgão é a Adapar (Agência de Defesa Agropecuária do Paraná).' },
      { p: 'A atualização é obrigatória para todo produtor rural com animais de produção de qualquer espécie sob sua guarda. A campanha cobre todos os animais da propriedade: bois, búfalos, cabras, ovelhas, suínos, cavalos, jumentos, mulas, abelhas, galinhas e peixes.' },
      { p: 'Quem tem meia dúzia de galinhas e dois cavalos junto com o gado atualiza as três espécies. É esse detalhe que mais segura guia no estado, como se vê adiante. O que os outros estados pedem está na página geral de [declaração de rebanho](/declaracao-de-rebanho).' },
    ] },
    { h2: 'Prazo da declaração de rebanho no PR em 2026', blocos: [
      { tabela: { colunas: ['Etapa', 'Período', 'Em 2026'], linhas: [
        ['Etapa única', '1º de maio a 30 de junho', 'Começou na sexta-feira, 1º de maio, e seguiu até 30 de junho'],
      ], nota: 'Página do serviço e notícia da Adapar sobre a campanha de 2026, lidas em 09/10/2026.' } },
      { p: 'O Paraná tem uma campanha só por ano, diferente dos estados vizinhos que declaram em maio e em novembro. Quem compra gado de São Paulo ou de Mato Grosso do Sul precisa olhar o calendário dos dois lados.' },
      { p: 'A campanha de 2026 já terminou. Quem ficou com espécie pendente procura a unidade local da Adapar para regularizar, porque a pendência continua travando a guia depois de junho. A data de 2027 se confirma no site da Adapar perto de maio.' },
    ] },
    { h2: 'Como atualizar o rebanho pela internet', blocos: [
      { ol: [
        'Conte os animais de cada espécie que existe na propriedade.',
        'Entre no site da Adapar ou no aplicativo Paraná Agro. No primeiro acesso, faça o cadastro: informe o CPF e siga o passo a passo para criar login e senha.',
        'Selecione a propriedade que aparece com pendência de comprovação de rebanho.',
        'Escolha a espécie, preencha os dados pedidos e clique em Comprovar.',
        'Repita para cada espécie com pendência, até não sobrar nenhuma.',
      ] },
      { p: 'Pela internet a atualização é imediata: terminou de comprovar, o cadastro já está em dia.' },
      { p: 'Quem prefere fazer pessoalmente vai a um escritório da Adapar, a um sindicato rural ou à unidade de atendimento do município, na prefeitura. Lá pede o formulário de atualização, preenche, assina e devolve na mesma unidade. Nesse caso o prazo para o cadastro ficar atualizado varia, então não deixe o formulário para a véspera de um embarque.' },
      { p: 'Dúvida sobre a campanha se tira na unidade local da Adapar que atende o município da propriedade.' },
    ] },
    { h2: 'O que acontece com quem não atualiza', blocos: [
      { ul: [
        '**GTA só com todas as espécies.** A guia de trânsito somente é emitida depois da atualização de todas as espécies animais existentes na propriedade. Um cavalo sem comprovar segura a guia do lote de boi.',
        '**Sem guia, sem venda.** A Adapar lembra que sem o documento não há trânsito entre propriedades nem transporte até o abatedouro, o que impede o comércio.',
        '**Autuação e multa.** A agência cita autuações e multas para quem movimenta sem estar em dia. O valor não está nas páginas da campanha: pergunte na unidade local.',
      ] },
      { p: 'O caminho da guia no estado, pelo sistema e-GTA, está em [como emitir GTA](/como-emitir-gta). As vacinas que também seguram a venda estão no [calendário de vacinação bovina](/calendario-de-vacinacao-bovina).' },
      { destaque: 'Prazo, sistema e punição são da Adapar e mudam. Este texto é informativo e não substitui o veterinário nem a defesa agropecuária: confirme a data na Adapar antes de contar com ela. O FINAGRO não envia a atualização do rebanho à Adapar.' },
    ] },
  ],
  noFinagro: { h2: 'A declaração do PR e o FINAGRO', itens: [
    'O app não envia a declaração à Adapar: a atualização é feita por você no site, no aplicativo Paraná Agro ou na unidade local.',
    'A tela "O que vence" lista a atualização do rebanho do Paraná com o período, onde fazer e o que acontece com quem não faz.',
    'O app pode avisar no celular 7 dias antes do fim da campanha e na véspera. Ao marcar "Já fiz", o aviso daquela etapa some.',
    'Cada animal tem ficha e o lote guarda as cabeças, de galpão e tanque também, então a contagem de cada espécie está pronta na hora de comprovar.',
  ] },
  cta: { forte: 'Todas as espécies contadas e a campanha da Adapar lembrada.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre declaração de rebanho no PR',
  faq: [
    ['Qual o prazo da declaração de rebanho 2026 no PR?', 'A campanha da Adapar é em etapa única, de 1º de maio a 30 de junho. Em 2026 ela começou na sexta-feira, 1º de maio, e seguiu até 30 de junho.'],
    ['Onde faço a declaração de rebanho no Paraná?', 'Pela internet, no site da Adapar ou no aplicativo Paraná Agro, ou pessoalmente numa unidade local da Adapar, num sindicato rural ou no escritório de atendimento do município.'],
    ['Preciso atualizar galinha, cavalo e peixe também?', 'Sim. A campanha cobre todos os animais da propriedade, e a guia de trânsito só é emitida depois da atualização de todas as espécies existentes nela.'],
    ['Perdi o prazo da atualização do rebanho no PR, e agora?', 'Quem não atualiza fica impedido de emitir a GTA. Procure a unidade local da Adapar para regularizar o cadastro antes de marcar qualquer embarque.'],
    ['O FINAGRO envia a atualização do rebanho à Adapar?', 'Não. O app não envia nada à Adapar. Ele guarda a contagem do rebanho e lembra o prazo; a atualização é feita por você no sistema da Adapar.'],
  ],
  fontes: [
    { nome: 'Adapar (PR), atualizar cadastro do rebanho', url: SERVICO },
    { nome: 'Adapar (PR), início da Campanha de Atualização de Rebanhos 2026', url: NOTICIA },
  ],
  relacionados: ['declaracao-de-rebanho', 'como-emitir-gta', 'calendario-de-vacinacao-bovina'],
};
