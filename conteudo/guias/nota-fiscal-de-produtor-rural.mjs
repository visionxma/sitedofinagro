// Consulta-alvo: "nota fiscal produtor rural", "nota fiscal de produtor rural eletrônica", "como emitir nota fiscal de produtor
// rural", "inscrição estadual produtor rural", "como fazer inscrição estadual produtor rural" (colheita de 08/10/2026).
// Norma: Ajuste SINIEF 10/2022 com a redação do Ajuste SINIEF 27/2024 (última alteração registrada pelo Confaz).
export const provas = [
  { afirmacao: 'os estados acordaram que o produtor rural usa a NF-e', trecho: 'Os Estados e o Distrito Federal acordam em estabelecer a obrigatoriedade para produtor rural de utilização da Nota Fiscal Eletrônica', url: 'https://www.confaz.fazenda.gov.br/legislacao/ajustes/2022/AJ010_22' },
  { afirmacao: 'a NF-e ou a NFC-e substitui a nota fiscal modelo 4', trecho: 'ou a Nota Fiscal de Consumidor Eletrônica - NFC-e - prevista no Ajuste SINIEF nº 19, de 9 de dezembro de 2016, em substituição à Nota Fiscal, modelo 4', url: 'https://www.confaz.fazenda.gov.br/legislacao/ajustes/2022/AJ010_22' },
  { afirmacao: 'a partir de 3 de fevereiro de 2025 vale para operações interestaduais e internas de quem faturou mais de R$ 360 mil', trecho: '3 de fevereiro de 2025, nas operações: a) interestaduais; b) internas praticadas por produtor rural que, nos anos de 2023 ou 2024, obteve em qualquer um dos períodos receita bruta', url: 'https://www.confaz.fazenda.gov.br/legislacao/ajustes/2022/AJ010_22' },
  { afirmacao: 'o limite de receita é R$ 360 mil e os demais produtores entram em 5 de janeiro de 2026', trecho: 'decorrente de atividade rural em valor superior a R$ 360.000,00 (trezentos e sessenta mil reais); II – 5 de janeiro de 2026, nas operações praticadas pelos demais produtores rurais', url: 'https://www.confaz.fazenda.gov.br/legislacao/ajustes/2022/AJ010_22' },
  { afirmacao: 'com a obrigatoriedade fica vedada a emissão da nota modelo 4', trecho: 'A partir do início da obrigatoriedade prevista nos incisos I e II do “caput” fica vedada a emissão de Nota Fiscal, modelo 4', url: 'https://www.confaz.fazenda.gov.br/legislacao/ajustes/2022/AJ010_22' },
  { afirmacao: 'cada estado pode definir prazo menor que o do Confaz', trecho: 'A critério da unidade federada poderá ser definido prazo inferior ao previsto nos incisos I e II do “caput”', url: 'https://www.confaz.fazenda.gov.br/legislacao/ajustes/2022/AJ010_22' },
  { afirmacao: 'a NFP-e do Paraná é uma nota fiscal eletrônica modelo 55 feita para o produtor rural', trecho: 'A NFP-e é uma Nota Fiscal eletrônica, modelo 55, que foi adequada para o produtor rural emitir através de sistema eletrônico disponibilizado pela SEFA/PR no Portal Receita/PR', url: 'https://atendimento.fazenda.pr.gov.br/sacsefa/portal/assuntosReferente/45' },
  { afirmacao: 'a nota eletrônica documenta a circulação de mercadorias e produtos primários', trecho: 'documentar, para fins fiscais, uma operação de circulação de mercadorias/produtos primários', url: 'https://atendimento.fazenda.pr.gov.br/sacsefa/portal/assuntosReferente/45' },
  { afirmacao: 'no Paraná o produtor se inscreve no cadastro de produtores antes de começar a circular mercadoria', trecho: 'deverão inscrever-se no Cadastro de Produtores Rurais - CAD/PRO, antes do início de suas atividades, as pessoas físicas que se dediquem à atividade agropecuária e que pretendam realizar operações relativas à circulação de mercadorias', url: 'https://atendimento.fazenda.pr.gov.br/sacsefa/portal/assuntosReferente/45' },
  { afirmacao: 'em São Paulo o produtor rural precisa de inscrição estadual', trecho: 'No estado de São Paulo, o produtor rural precisa de Inscrição Estadual (IE)', url: 'https://portal.fazenda.sp.gov.br/servicos/cadesp/Paginas/Produtor-Rural-abertura,-baixa-e-outras-altera%C3%A7%C3%B5es.aspx' },
  { afirmacao: 'em São Paulo o pedido é feito pelo portal da Redesim', trecho: 'Local Conteúdo da seção Local HTML Portal da REDESIM', url: 'https://portal.fazenda.sp.gov.br/servicos/cadesp/Paginas/Produtor-Rural-abertura,-baixa-e-outras-altera%C3%A7%C3%B5es.aspx' },
  { afirmacao: 'o Nota Fiscal Fácil dispensa certificado digital e é gratuito', trecho: 'torna o preenchimento do documento fiscal simples para o emissor, e sem necessidade de certificado digital. O aplicativo NFF é uma ferramenta totalmente gratuita para utilização em smartphones', url: 'https://portal.fazenda.sp.gov.br/servicos/nff' },
  { afirmacao: 'em Minas Gerais, para emitir basta baixar o app e vincular à conta gov.br do CPF do produtor', trecho: 'basta fazer o download do app no telefone celular (plataformas Android ou IOS) e vincular à conta GOV.BR do CPF do Produtor Rural Pessoa Física', url: 'https://portalsped.fazenda.mg.gov.br/spedmg/nfe/NFF-Produtor-Rural-Pessoa-Fisica/index.html' },
  { afirmacao: 'em Minas Gerais a primeira versão do app só emitia saída interna de hortifrutigranjeiros', trecho: 'Nesta primeira versão será possível emitir NFF do Produtor apenas para saídas em operações internas com hortifrutigranjeiros', url: 'https://portalsped.fazenda.mg.gov.br/spedmg/nfe/NFF-Produtor-Rural-Pessoa-Fisica/index.html' },
  { afirmacao: 'o Nota Fiscal Fácil foi instituído pelo Ajuste SINIEF 37/19', trecho: 'Ajuste SINIEF 37/19 - Institui o regime especial de simplificação do processo de emissão de documentos fiscais eletrônicos', url: 'https://portalsped.fazenda.mg.gov.br/spedmg/nfe/NFF-Produtor-Rural-Pessoa-Fisica/index.html' },
];

export default {
  slug: 'nota-fiscal-de-produtor-rural',
  grupo: 'dinheiro',
  tipo: 'guia',
  curto: 'Nota fiscal de produtor',
  resumo: 'NF-e do produtor: quem emite, app e inscrição.',
  title: 'Nota fiscal de produtor rural eletrônica: como emitir',
  description: 'Nota fiscal de produtor rural: o talão de papel acabou, quem é obrigado à NF-e, como emitir pelo celular e como tirar a inscrição estadual.',
  h1: 'Nota fiscal de produtor rural eletrônica: quem emite e como emitir',
  pergunta: 'O produtor rural ainda pode usar o talão de nota fiscal de papel?',
  resposta: 'Não. Pelo Ajuste SINIEF 10/2022, com a última alteração de dezembro de 2024, o produtor rural emite nota fiscal eletrônica (NF-e) no lugar do talão modelo 4. Para os produtores de menor faturamento, a obrigação começou em 5 de janeiro de 2026. A emissão exige inscrição estadual e pode ser feita pelo celular, no aplicativo Nota Fiscal Fácil.',
  tela: 'fluxo',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'O talão de papel acabou: desde quando e para quem', blocos: [
      { p: 'A nota fiscal de produtor em papel é a **nota fiscal modelo 4**, a do talão. O Confaz (Conselho Nacional de Política Fazendária, que reúne as secretarias de Fazenda dos estados) decidiu trocar o talão pela nota eletrônica no Ajuste SINIEF 10/2022. A regra vale para os estados e o Distrito Federal que assinaram o ajuste.' },
      { p: 'O prazo foi mudado algumas vezes. Na redação atual, dada pelo Ajuste SINIEF 27/2024, a nota eletrônica substitui o talão a partir de:' },
      { tabela: { colunas: ['Quem', 'A partir de'], linhas: [['Vendas para outro estado', '3 de fevereiro de 2025'], ['Vendas dentro do estado de quem faturou acima de R$ 360 mil em 2023 ou 2024', '3 de fevereiro de 2025'], ['Os demais produtores rurais', '5 de janeiro de 2026']], nota: 'Ajuste SINIEF 10/2022, redação do Ajuste SINIEF 27/2024, no site do Confaz.' } },
      { p: 'Com a obrigatoriedade em vigor, **fica vedada a emissão do talão modelo 4**. E o estado pode ter definido prazo menor que o do Confaz. Se o seu estado exigiu antes, vale a data dele. Confirme na Secretaria da Fazenda.' },
    ] },
    { h2: 'O que é a nota fiscal de produtor rural eletrônica', blocos: [
      { p: 'O Ajuste fala em NF-e, a nota fiscal eletrônica, ou em NFC-e, a nota fiscal de consumidor eletrônica, no lugar do modelo 4. Em vários estados o nome para o produtor é **NFP-e**, nota fiscal de produtor eletrônica. A Secretaria da Fazenda do Paraná explica que ela é uma nota fiscal eletrônica modelo 55, adequada ao produtor rural.' },
      { p: 'A nota existe só em meio digital e documenta, para fins fiscais, uma operação de circulação de mercadorias e produtos primários. Em termos práticos: vendeu animais, leite ou grãos, levou o produto para outra propriedade ou para o comprador, a operação tem nota.' },
      { p: 'A GTA (guia de trânsito animal) é outro documento, da defesa agropecuária. Veja como funciona em [GTA](/gta). Se o seu estado pede a nota para emitir a GTA, quem informa é a agência de defesa agropecuária.' },
    ] },
    { h2: 'Como emitir pelo celular: aplicativo Nota Fiscal Fácil', blocos: [
      { p: 'O Nota Fiscal Fácil (NFF) é um regime criado pelo Ajuste SINIEF 37/2019 para simplificar a emissão. Segundo a Secretaria da Fazenda de São Paulo, o aplicativo é gratuito e dispensa certificado digital. Em Minas Gerais, basta baixar o app e entrar com a conta gov.br do CPF do produtor.' },
      { ol: ['Tenha a inscrição estadual de produtor ativa.', 'Baixe o aplicativo Nota Fiscal Fácil no celular.', 'Entre com a conta gov.br do seu CPF.', 'Cadastre produtos, clientes e transportadores uma vez só.', 'Preencha a venda, confira os valores e transmita a nota.'] },
      { p: 'Cada estado libera o aplicativo por tipo de operação. Em Minas Gerais, a primeira versão só emitia saída dentro do estado de hortifrutigranjeiros, por exemplo. Se o aplicativo não cobre a sua operação, o caminho é o emissor da própria Secretaria da Fazenda ou um sistema com certificado digital, com ajuda do contador.' },
    ] },
    { h2: 'Inscrição estadual de produtor rural: onde se faz', blocos: [
      { p: 'Sem inscrição estadual de produtor, não há como emitir a nota. A inscrição é do estado, e o nome e o caminho mudam de um lugar para outro:' },
      { ul: ['**São Paulo:** o produtor rural precisa de Inscrição Estadual (IE), pedida pelo portal da Redesim, a rede nacional de registro de empresas.', '**Paraná:** o produtor se inscreve no Cadastro de Produtores Rurais, o CAD/PRO, antes de começar a circular mercadoria.', '**Os demais estados:** o procedimento é da Secretaria da Fazenda local, com nome, local do pedido e documentos próprios.'] },
      { p: 'Para saber exatamente o que levar, procure no site da Secretaria da Fazenda do seu estado por "inscrição de produtor rural". Em São Paulo, a Fazenda diz que, via de regra, não há documentos a apresentar, mas pode pedir o ITR em nome do dono do imóvel, a matrícula ou o contrato de uso da terra. A lista oficial é a do seu estado.' },
    ] },
    { h2: 'Quando a nota é exigida', blocos: [
      { p: 'A nota acompanha a mercadoria que sai da propriedade. Nos casos mais comuns do produtor:' },
      { ul: ['**Venda:** de bezerro, boi gordo, leite, grão, ovo, mel e hortaliça, para frigorífico, laticínio, cooperativa, comprador pessoa física ou outro produtor.', '**Transporte:** a carga que sai da propriedade para o comprador ou para o frigorífico é circulação de mercadoria e segue com a nota.', '**Transferência:** o produto que muda de propriedade do mesmo dono também é circulação de mercadoria.'] },
      { p: 'O desconto do Funrural sobre a venda está em [Funrural](/funrural). Já a tributação do ICMS (imposto estadual) varia por produto e por estado: peça ao contador ou à Secretaria da Fazenda.' },
      { destaque: 'Este texto é informativo e não substitui o contador. Prazos e procedimentos mudam por estado: confirme na Secretaria da Fazenda antes de emitir ou de se inscrever.' },
    ] },
  ],
  noFinagro: { h2: 'A nota fiscal na rotina do FINAGRO', itens: [
    'A venda emitida em nota entra no app como receita, e o valor a receber entra em contas a receber com a data do acerto.',
    'O registro das GTAs emitidas guarda o vencimento e avisa 1 dia antes, para a nota e a guia não ficarem fora de data.',
    'Relatórios em PDF e em planilha (CSV) reúnem vendas e despesas do período para o contador conferir com as notas.',
    'O app não emite nota fiscal e não faz inscrição estadual: a nota se emite no Nota Fiscal Fácil ou no sistema da Secretaria da Fazenda.',
  ] },
  cta: { forte: 'A nota sai no aplicativo da Fazenda. A venda fica anotada no FINAGRO.', texto: 'Grátis até 1.000 animais com ficha, sem cartão, no Android e no navegador.' },
  faqTitulo: 'Perguntas sobre nota fiscal de produtor',
  faq: [
    ['O talão de nota fiscal de produtor rural ainda vale?', 'Não. Com a obrigatoriedade da nota eletrônica, o Confaz vedou a emissão da nota fiscal modelo 4. Para os produtores de menor faturamento, a obrigação começou em 5 de janeiro de 2026.'],
    ['Como emitir nota fiscal de produtor rural pelo celular?', 'Com a inscrição estadual ativa, baixe o aplicativo Nota Fiscal Fácil, entre com a conta gov.br do CPF, cadastre produtos e clientes e transmita a nota. Os tipos de operação liberados mudam por estado.'],
    ['Preciso de certificado digital para emitir a nota eletrônica?', 'No Nota Fiscal Fácil não. A Secretaria da Fazenda de São Paulo informa que o aplicativo dispensa certificado digital e é gratuito. Outros emissores podem exigir.'],
    ['Como fazer inscrição estadual de produtor rural?', 'Pela Secretaria da Fazenda do seu estado. Em São Paulo o pedido sai pelo portal da Redesim. No Paraná o produtor entra no cadastro CAD/PRO. Veja a regra e os documentos no site da Fazenda local.'],
    ['Quem fatura pouco também precisa emitir nota eletrônica?', 'Sim. A regra do Confaz vale para os demais produtores rurais a partir de 5 de janeiro de 2026, e o estado pode ter antecipado a data.'],
  ],
  fontes: [
    { nome: 'Confaz, Ajuste SINIEF 10/2022 (alterado pelo Ajuste SINIEF 27/2024)', url: 'https://www.confaz.fazenda.gov.br/legislacao/ajustes/2022/AJ010_22' },
    { nome: 'Confaz, Ajuste SINIEF 27/2024', url: 'https://www.confaz.fazenda.gov.br/legislacao/ajustes/2024/ajuste-sinief-27-24' },
    { nome: 'Secretaria da Fazenda do Paraná, perguntas sobre a NFP-e', url: 'https://atendimento.fazenda.pr.gov.br/sacsefa/portal/assuntosReferente/45' },
    { nome: 'Secretaria da Fazenda de São Paulo, Nota Fiscal Fácil', url: 'https://portal.fazenda.sp.gov.br/servicos/nff' },
    { nome: 'Secretaria da Fazenda de Minas Gerais, NFF do produtor rural', url: 'https://portalsped.fazenda.mg.gov.br/spedmg/nfe/NFF-Produtor-Rural-Pessoa-Fisica/index.html' },
  ],
  relacionados: ['gta', 'funrural', 'fluxo-de-caixa-rural'],
};
