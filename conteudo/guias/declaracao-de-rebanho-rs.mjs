// Consultas-alvo: "declaração de rebanho rs", "declaração anual de rebanho 2026", "declaração de rebanho produtor online" (colheita de 08/10/2026).
// Regra sanitária do Rio Grande do Sul: período, sistema e punição só com trecho da Secretaria da Agricultura (agricultura.rs.gov.br).
const DECLARACAO = 'https://www.agricultura.rs.gov.br/declaracao';
const SEE = 'https://www.agricultura.rs.gov.br/see';
const MANUAL = 'https://www.agricultura.rs.gov.br/upload/arquivos/202607/08105522-declaracao-de-rebanho.pdf';
const NOTICIA = 'https://www.agricultura.rs.gov.br/produtores-tem-20-dias-para-entregar-a-declaracao-anual-de-rebanho';

export const provas = [
  { afirmacao: 'em 2026 o prazo foi de 1º de abril a 30 de junho, prorrogado até 10 de julho', trecho: 'PRAZO PARA DECLARAÇÃO 2026 01/04/2026 ATÉ 30/06/2026 - Prorrogado até 10/07/2026', url: SEE },
  { afirmacao: 'a entrega da Declaração Anual de Rebanho 2026 foi prorrogada até 10 de julho', trecho: 'A entrega da Declaração Anual de Rebanho 2026 foi prorrogada e o prazo e até o dia 10 de julho', url: DECLARACAO },
  { afirmacao: 'a página da secretaria aponta a Instrução Normativa 01 de 2025 da Seapi como legislação da declaração', trecho: 'PARA ENTREGA ON-LINE ACESSE O PORTAL DO PRODUTOR ON-LINE . Legislação: Instrução Normativa 01 2025 SEAPI', url: SEE },
  { afirmacao: 'todo produtor do Rio Grande do Sul que possui animais é obrigado a declarar', trecho: 'Todos os produtores rurais do Rio Grande do Sul que possuem animais são obrigados a fazer a declaração de seu rebanho', url: NOTICIA },
  { afirmacao: 'a declaração inclui a atualização cadastral do produtor e informações da propriedade', trecho: 'O processo inclui uma etapa de atualização cadastral do produtor e informações gerais sobre a propriedade', url: NOTICIA },
  { afirmacao: 'pede-se saldo e infraestrutura de cada espécie, como equinos, suínos, bovinos, aves, peixes e abelhas', trecho: 'como atualização de saldo e infraestrutura, para cada tipo de espécie criada no estabelecimento, como equinos, suínos, bovinos, aves, peixes, abelhas, entre outros', url: NOTICIA },
  { afirmacao: 'a declaração se entrega pela internet no SDA Produtor Online', trecho: 'O produtor pode fazer a Declaração Anual de Rebanho e os ajustes de saldo dos animais diretamente no SDA - Produtor Online', url: DECLARACAO },
  { afirmacao: 'presencialmente, entregam-se os formulários em PDF ou se informa verbalmente nas Inspetorias ou Escritórios de Defesa Agropecuária', trecho: 'também pode entregar presencialmente os formulários em PDF (constantes na aba abaixo) já preenchidos ou informar verbalmente nas Inspetorias ou Escritórios de Defesa Agropecuária', url: DECLARACAO },
  { afirmacao: 'o acesso é pelo site produtoronline.rs.gov.br, com CPF e senha do Produtor Online', trecho: 'www.produtoronline.rs.gov.br 2 - Para realizar o login utilize seu CPF e sua senha do Produtor Online', url: MANUAL },
  { afirmacao: 'também se entra com a conta Gov.br', trecho: 'Para realizar o login utilize seus dados da conta Gov.br', url: MANUAL },
  { afirmacao: 'no sistema, o produtor escolhe a propriedade e clica em Ver Declarações', trecho: 'produtor deverá escolher qual propriedade irá declarar e clicar no botão “Ver Declarações”', url: MANUAL },
  { afirmacao: 'o ajuste de saldo aceita lançamentos de nascimentos, mortes, consumo próprio, evolução e roubo', trecho: 'lançamentos de nascimentos, mortes, consumo próprio, evolução e roubo', url: MANUAL },
  { afirmacao: 'declarar evita sanções como o bloqueio da movimentação de animais', trecho: 'o produtor não só cumpre uma obrigação sanitária legal, evitando sanções como o bloqueio da movimentação de animais', url: NOTICIA },
  { afirmacao: 'a declaração mostra infraestrutura, controles sanitários e saldos dos rebanhos do estado', trecho: 'sabemos mais sobre a infraestrutura, controles sanitários e saldos dos rebanhos', url: DECLARACAO },
];

export default {
  slug: 'declaracao-de-rebanho-rs',
  grupo: 'corte',
  tipo: 'guia',
  curto: 'Declaração de rebanho RS',
  resumo: 'Declaração anual na Seapi e o Produtor Online.',
  title: 'Declaração de rebanho no RS: prazo 2026 e como fazer',
  description: 'Declaração de rebanho no RS: prazo de 2026 da Declaração Anual de Rebanho, o passo a passo no Produtor Online e o que acontece com quem não entrega.',
  h1: 'Declaração de rebanho no RS: prazo de 2026 e o passo a passo',
  pergunta: 'Como fazer a declaração de rebanho no Rio Grande do Sul?',
  resposta: 'No Rio Grande do Sul a Declaração Anual de Rebanho é obrigatória para todo produtor que tem animais. Em 2026 o prazo foi de 1º de abril a 30 de junho, prorrogado até 10 de julho. Ela é entregue pela internet, no Produtor Online, ou na Inspetoria de Defesa Agropecuária. Quem não entrega pode ter a movimentação de animais bloqueada.',
  tela: 'animais',
  atualizado: '2026-10-09',
  secoes: [
    { h2: 'Como o RS chama e quem é obrigado', blocos: [
      { p: 'O nome oficial é Declaração Anual de Rebanho. Quem recebe é a Seapi (Secretaria da Agricultura, Pecuária, Produção Sustentável e Irrigação), pelo serviço de defesa agropecuária. A página da secretaria aponta a Instrução Normativa 01 de 2025 como a norma da declaração.' },
      { p: 'Todos os produtores rurais do estado que possuem animais são obrigados a declarar. A declaração gaúcha pede mais do que a contagem. Tem uma etapa de atualização cadastral do produtor e as informações gerais da propriedade. Para cada espécie criada, pede o saldo e a infraestrutura. Entram equinos, suínos, bovinos, aves, peixes, abelhas e as demais espécies do estabelecimento.' },
      { p: 'A secretaria diz para que usa os dados: saber mais sobre a infraestrutura, os controles sanitários e os saldos dos rebanhos nas propriedades do estado. O que os outros estados pedem está na página geral de [declaração de rebanho](/declaracao-de-rebanho).' },
    ] },
    { h2: 'Prazo da declaração de rebanho no RS em 2026', blocos: [
      { tabela: { colunas: ['Ano', 'Período', 'Prorrogação'], linhas: [
        ['2026', '1º de abril a 30 de junho', 'Até 10 de julho de 2026'],
      ], nota: 'Páginas da Secretaria da Agricultura do RS, lidas em 09/10/2026.' } },
      { p: 'O Rio Grande do Sul declara uma vez por ano e começa antes dos outros estados, em abril. São três meses de prazo, e ainda assim a secretaria prorrogou em 2026.' },
      { p: 'O prazo de 2026 já passou. Quem não entregou procura a Inspetoria ou o Escritório de Defesa Agropecuária do município para regularizar. O período de 2027 se confirma no site da secretaria no começo do ano.' },
    ] },
    { h2: 'Passo a passo no Produtor Online', blocos: [
      { ol: [
        'Conte os animais por espécie e separe nascimentos, mortes e consumo próprio desde a última declaração.',
        'Acesse produtoronline.rs.gov.br e entre com o CPF e a senha do Produtor Online. Também dá para entrar com a conta Gov.br.',
        'No menu, abra o item Declaração de Rebanho.',
        'Escolha a propriedade que vai declarar e clique em Ver Declarações. Depois, em Nova Declaração.',
        'Preencha cada item: produtor, dados da propriedade, endereço e localização, características da área, infraestrutura, saldo das espécies e raças, exploração predominante. Em cada um, confira, confirme e salve.',
        'Com todos os itens preenchidos, clique em Finalizar a Declaração Anual e aguarde a mensagem de declaração concluída.',
      ] },
      { p: 'O item de saldo é diferente dos outros: nele dá para alterar o número de animais lançando nascimentos, mortes, consumo próprio, evolução de idade e roubo. É onde o seu controle do ano inteiro faz diferença.' },
      { p: 'Quem prefere o atendimento presencial vai à Inspetoria ou ao Escritório de Defesa Agropecuária. Lá entrega os formulários em PDF já preenchidos ou informa os dados verbalmente, com a ajuda dos servidores, e assina com a senha do Produtor Online. É lá também que se tira dúvida.' },
    ] },
    { h2: 'O que acontece com quem não entrega', blocos: [
      { p: 'A secretaria trata a declaração como obrigação sanitária legal e cita, como sanção para quem não cumpre, o bloqueio da movimentação de animais. Na prática, sem movimentação não há guia de trânsito, e sem guia não há venda, leilão nem transferência entre propriedades.' },
      { p: 'As páginas da secretaria não trazem valor de multa. Pergunte na Inspetoria do município.' },
      { p: 'O caminho da guia no estado, também pelo Produtor Online, está em [como emitir GTA](/como-emitir-gta). As vacinas que seguram a venda estão no [calendário de vacinação bovina](/calendario-de-vacinacao-bovina).' },
      { destaque: 'Prazo, sistema e punição são da Secretaria da Agricultura do RS e mudam. Este texto é informativo e não substitui o veterinário nem a defesa agropecuária: confirme a data na secretaria antes de contar com ela. O FINAGRO não envia a declaração ao Produtor Online.' },
    ] },
  ],
  noFinagro: { h2: 'A declaração do RS e o FINAGRO', itens: [
    'O app não envia a declaração à Secretaria da Agricultura: ela é feita por você no Produtor Online ou na Inspetoria.',
    'A tela "O que vence" lista a declaração anual de rebanho do Rio Grande do Sul com o período, onde entregar e o que acontece com quem não faz.',
    'O app pode avisar no celular 7 dias antes do fim do prazo e na véspera. Ao marcar "Já fiz", o aviso some.',
    'Cada animal tem ficha, com nascimento anotado, e o lote guarda as cabeças, então o saldo de cada espécie chega pronto ao Produtor Online.',
  ] },
  cta: { forte: 'Saldo do rebanho pronto e a declaração anual lembrada.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre declaração de rebanho no RS',
  faq: [
    ['Qual o prazo da declaração de rebanho 2026 no RS?', 'O prazo de 2026 foi de 1º de abril a 30 de junho e a secretaria prorrogou a entrega até 10 de julho de 2026.'],
    ['Onde faço a declaração de rebanho no RS?', 'Pela internet, no SDA Produtor Online, em produtoronline.rs.gov.br, ou presencialmente na Inspetoria ou no Escritório de Defesa Agropecuária do município.'],
    ['Preciso de senha para declarar no Produtor Online?', 'Sim. O acesso é com o CPF e a senha do Produtor Online, ou com a conta Gov.br.'],
    ['Quem não entrega a declaração de rebanho no RS pode vender gado?', 'A secretaria cita o bloqueio da movimentação de animais como sanção para quem não declara. Sem movimentação liberada, a venda fica parada até regularizar.'],
    ['O FINAGRO envia a declaração ao Produtor Online?', 'Não. O app não envia nada à secretaria. Ele guarda a contagem do rebanho e lembra o prazo; a declaração é feita por você no Produtor Online.'],
  ],
  fontes: [
    { nome: 'Secretaria da Agricultura do RS, Declaração Anual de Rebanho', url: DECLARACAO },
    { nome: 'Secretaria da Agricultura do RS, Epidemiologia e Estatística', url: SEE },
    { nome: 'Secretaria da Agricultura do RS, manual de acesso à declaração de rebanho digital', url: MANUAL },
    { nome: 'Secretaria da Agricultura do RS, produtores têm 20 dias para entregar a declaração', url: NOTICIA },
  ],
  relacionados: ['declaracao-de-rebanho', 'como-emitir-gta', 'declaracao-de-rebanho-pr'],
};
