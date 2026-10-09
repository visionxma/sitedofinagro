// Consultas-alvo: "emitir nota fiscal produtor rural df" (colheita de 4.045 pesquisas, 58 delas de nota fiscal com o nome do estado).
// Fonte: páginas oficiais do estado e do Confaz, lidas por curl em 09/10/2026. A página geral é /nota-fiscal-de-produtor-rural.
export const provas = [
  {"afirmacao":"os estados acordaram no Confaz a obrigatoriedade da nota fiscal eletrônica para o produtor rural","trecho":"Os Estados e o Distrito Federal acordam em estabelecer a obrigatoriedade para produtor rural de utilização da Nota Fiscal Eletrônica","url":"https://www.confaz.fazenda.gov.br/legislacao/ajustes/2022/AJ010_22"},
  {"afirmacao":"pelo Confaz, a nota eletrônica vale desde 3 de fevereiro de 2025 nas vendas para outro estado e nas internas de quem teve receita acima de R$ 360.000,00 em 2023 ou 2024","trecho":"3 de fevereiro de 2025, nas operações: a) interestaduais; b) internas praticadas por produtor rural que, nos anos de 2023 ou 2024, obteve em qualquer um dos períodos receita bruta decorrente de atividade rural em valor superior a R$ 360.000,00 (trezentos e sessenta mil reais)","url":"https://www.confaz.fazenda.gov.br/legislacao/ajustes/2022/AJ010_22"},
  {"afirmacao":"pelo Confaz, os demais produtores rurais entram em 5 de janeiro de 2026","trecho":"decorrente de atividade rural em valor superior a R$ 360.000,00 (trezentos e sessenta mil reais); II – 5 de janeiro de 2026, nas operações praticadas pelos demais produtores rurais","url":"https://www.confaz.fazenda.gov.br/legislacao/ajustes/2022/AJ010_22"},
  {"afirmacao":"cada estado pode definir prazo menor que o do Confaz","trecho":"A critério da unidade federada poderá ser definido prazo inferior ao previsto nos incisos I e II do “caput”","url":"https://www.confaz.fazenda.gov.br/legislacao/ajustes/2022/AJ010_22"},
  {"afirmacao":"no Distrito Federal o produtor rural pessoa física não equiparado a pessoa jurídica emite NF-e modelo 55 e pode usar o aplicativo","trecho":"O produtor rural pessoa física não equiparado a pessoa jurídica emite NF-e, modelo 55, podendo utilizar o App NFF Fácil, Módulo Produtor Rural","url":"https://www.receita.fazenda.df.gov.br/aplicacoes/CartaServicos/servico.cfm?codTipoPessoa=22&codServico=1237&codSubCategoria=366"},
  {"afirmacao":"o produtor rural pessoa jurídica emite NF-e modelo 55","trecho":"O produtor rural pessoa jurídica emite NFe, modelo 55","url":"https://www.receita.fazenda.df.gov.br/aplicacoes/CartaServicos/servico.cfm?codTipoPessoa=22&codServico=1237&codSubCategoria=366"},
  {"afirmacao":"todos os produtores rurais devem emitir NF-e, independentemente do enquadramento","trecho":"todos os produtores rurais devem emitir NF-e, independentemente do enquadramento","url":"https://mobile.receita.fazenda.df.gov.br/aplicacoes/CartaServicos/servico.cfm?codTipoPessoa=7&codServico=1212&codSubCategoria=356"},
  {"afirmacao":"em 2026 o Nota Fiscal Fácil é de uso restrito aos produtores rurais não contribuintes","trecho":"em 2026, uso restrito aos produtores rurais não contribuintes","url":"https://mobile.receita.fazenda.df.gov.br/aplicacoes/CartaServicos/servico.cfm?codTipoPessoa=7&codServico=1212&codSubCategoria=356"},
  {"afirmacao":"no Distrito Federal o aplicativo pode ser usado pelo produtor rural pessoa física para emitir NF-e","trecho":"poderá ser utilizada pelo Produtor Rural, pessoa física, para emissão de NF-e e, futuramente, NFC-e","url":"https://mobile.receita.fazenda.df.gov.br/aplicacoes/CartaServicos/servico.cfm?codTipoPessoa=7&codServico=1212&codSubCategoria=356"},
  {"afirmacao":"o aplicativo é gratuito","trecho":"construído pela SEFAZ Virtual do Rio Grande do Sul - SVRS, está disponível para ser baixado gratuitamente","url":"https://mobile.receita.fazenda.df.gov.br/aplicacoes/CartaServicos/servico.cfm?codTipoPessoa=7&codServico=1212&codSubCategoria=356"},
  {"afirmacao":"a autenticação é por CPF, pela plataforma gov.br","trecho":"a autenticação se dará por CPF, utilizando os recursos da plataforma www.gov.br do Governo Federal","url":"https://mobile.receita.fazenda.df.gov.br/aplicacoes/CartaServicos/servico.cfm?codTipoPessoa=7&codServico=1212&codSubCategoria=356"},
  {"afirmacao":"o módulo do produtor rural está em fase de parametrização pela Secretaria de Economia","trecho":"o Módulo Produtor Rural - PPR da NFF no Distrito Federal está em fase de parametrização das mercadorias, das atividades e de outras informações pela Secretaria de Estado de Economia","url":"https://mobile.receita.fazenda.df.gov.br/aplicacoes/CartaServicos/servico.cfm?codTipoPessoa=7&codServico=1212&codSubCategoria=356"},
  {"afirmacao":"a página remete ao manual de uso do aplicativo","trecho":"Para mais orientações quanto à utilização do aplicativo Nota Fiscal Fácil, acesse o Manual de uso do APP NFF","url":"https://mobile.receita.fazenda.df.gov.br/aplicacoes/CartaServicos/servico.cfm?codTipoPessoa=7&codServico=1212&codSubCategoria=356"},
  {"afirmacao":"o aplicativo também emite NF-e para saídas de produtores primários, inclusive interestaduais","trecho":"para acobertar saídas realizadas por Produtores Primários, inslusive interestaduais","url":"https://mobile.receita.fazenda.df.gov.br/aplicacoes/CartaServicos/servico.cfm?codTipoPessoa=7&codServico=1212&codSubCategoria=356"},
  {"afirmacao":"a pessoa física com faturamento igual ou inferior ao previsto para o MEI é dispensada da emissão de documento fiscal e pode emitir por opção","trecho":"Pessoa Física com faturamento igual ou inferior ao previsto para o Microempreendedor Individual - MEI Dispensado da emissão de documento fiscal. Opcionalmente pode emitir da forma prevista para produtor rural pessoa física","url":"https://mobile.receita.fazenda.df.gov.br/aplicacoes/CartaServicos/servico.cfm?codTipoPessoa=7&codServico=1212&codSubCategoria=356"},
  {"afirmacao":"o produtor com faturamento anual até R$ 3,6 milhões não é contribuinte do IBS e da CBS, pela Lei Complementar 214/2025","trecho":"Faturamento anual até R$ 3,6 milhões (LC nº 214/2025): não é contribuinte do IBS e da CBS","url":"https://mobile.receita.fazenda.df.gov.br/aplicacoes/CartaServicos/servico.cfm?codTipoPessoa=7&codServico=1212&codSubCategoria=356"},
];

export default {
  slug: "nota-fiscal-de-produtor-rural-df",
  grupo: "dinheiro",
  tipo: "guia",
  curto: "Nota de produtor no DF",
  resumo: "NF-e do produtor rural do DF e o Nota Fiscal Fácil.",
  title: "Nota fiscal de produtor rural no DF: como emitir",
  description: "Como emitir nota fiscal de produtor rural no DF: a NF-e modelo 55, quem fica dispensado pelo faturamento e a situação do aplicativo Nota Fiscal Fácil.",
  h1: "Nota fiscal de produtor rural no DF: como emitir a NF-e",
  pergunta: "Como emitir nota fiscal de produtor rural no Distrito Federal?",
  resposta: "No Distrito Federal o produtor rural emite nota fiscal eletrônica, a NF-e modelo 55. A pessoa física com faturamento até o previsto para o MEI fica dispensada e pode emitir por opção. O aplicativo Nota Fiscal Fácil atende a pessoa física, com CPF no gov.br. A Secretaria de Economia informa que o módulo do produtor ainda está em parametrização.",
  tela: "fluxo",
  atualizado: "2026-10-09",
  secoes: [
    { h2: "Qual é o sistema de emissão no Distrito Federal", blocos: [
      {"p":"No Distrito Federal quem cuida da nota é a **Secretaria de Estado de Economia (SEEC)**, pelo Portal de Serviços da Receita. A página de informações da nota fiscal do produtor rural separa três casos:"},
      {"tabela":{"colunas":["Quem","O que emite"],"linhas":[["Produtor rural pessoa física não equiparado a pessoa jurídica","NF-e modelo 55, podendo usar o aplicativo Nota Fiscal Fácil, Módulo Produtor Rural"],["Produtor rural pessoa física equiparado a pessoa jurídica","NF-e modelo 55"],["Produtor rural pessoa jurídica","NF-e modelo 55"]],"nota":"Portal de Serviços da Receita do DF, Secretaria de Estado de Economia."}},
      {"p":"O aplicativo aparece na página com o nome \"NFF Fácil\". É o mesmo Nota Fiscal Fácil dos outros estados, construído pela Sefaz Virtual do Rio Grande do Sul, e pode ser baixado gratuitamente. No DF ele pode ser usado pelo produtor rural pessoa física para emitir NF-e. A Secretaria avisa, porém, que o Módulo Produtor Rural ainda está em fase de parametrização."},
    ] },
    { h2: "O calendário nacional que vale no estado", blocos: [
      {"p":"A página da Secretaria de Economia diz que todos os produtores rurais devem emitir NF-e, independentemente do enquadramento. A mesma página abre uma exceção. A pessoa física com faturamento igual ou inferior ao previsto para o microempreendedor individual (MEI) está dispensada de emitir documento fiscal. Se quiser, pode emitir da forma prevista para o produtor rural pessoa física."},
      {"p":"A página também explica quem é não contribuinte. É o produtor com faturamento anual até R$ 3,6 milhões, que não é contribuinte do IBS e da CBS, os tributos da reforma tributária, pela Lei Complementar 214/2025. Em 2026, o Nota Fiscal Fácil é de uso restrito a esses produtores. Quem passa do limite deve confirmar na Receita do DF por onde emitir."},
      {"p":"A Secretaria de Economia do DF não publica data própria nessas páginas. O calendário é o do Confaz, o Conselho Nacional de Política Fazendária, no Ajuste SINIEF 10/2022:"},
      {"tabela":{"colunas":["Operação","Início"],"linhas":[["Venda para fora do Distrito Federal","3 de fevereiro de 2025"],["Venda interna, receita rural acima de R$ 360.000,00 em 2023 ou 2024","3 de fevereiro de 2025"],["Demais produtores rurais do DF","5 de janeiro de 2026"]],"nota":"Confaz, Ajuste SINIEF 10/2022, redação vigente."}},
      {"p":"O ajuste permite prazo inferior por decisão local. As prorrogações anteriores estão no guia geral da [nota fiscal de produtor rural](/nota-fiscal-de-produtor-rural)."},
    ] },
    { h2: "O que a Secretaria publica sobre o Nota Fiscal Fácil", blocos: [
      {"ol":["Baixe gratuitamente o aplicativo, que a página chama de \"NFF Fácil\".","Faça a autenticação com o seu CPF, pela plataforma gov.br.","Consulte o Manual de uso do aplicativo, indicado na mesma página."]},
      {"p":"O passo seguinte ainda não foi liberado no Distrito Federal. A Secretaria informa que o Módulo Produtor Rural está em fase de parametrização das mercadorias, das atividades e de outras informações. A emissão pelo aplicativo depende dessa liberação. Antes da venda, confirme na Receita do DF se o módulo já está no ar e, se não estiver, por onde emitir a NF-e."},
    ] },
    { h2: "O que precisa antes de emitir", blocos: [
      {"p":"No Distrito Federal o pedido de inscrição de produtor rural é na Secretaria de Estado de Economia, pelo Portal de Serviços da Receita."},
      {"ul":["**Enquadramento:** pessoa física, pessoa física equiparada a pessoa jurídica ou pessoa jurídica. É ele que define o que a página manda emitir.","**Faturamento do ano:** é ele que diz se há dispensa e se o produtor é contribuinte do IBS e da CBS.","**Conta gov.br do seu CPF:** é por ela que o aplicativo autentica."]},
      {"p":"Para a NF-e modelo 55, reúna os dados do comprador, com CPF ou CNPJ, o produto, a quantidade e o valor. Animal que sai da propriedade leva a nota e a guia de trânsito, tema do guia de [como emitir GTA](/como-emitir-gta). A contribuição sobre a receita da venda está em [Funrural](/funrural)."},
    ] },
    { h2: "Onde tirar dúvida no Distrito Federal", blocos: [
      {"p":"O Portal de Serviços da Receita do DF (receita.fazenda.df.gov.br) tem duas páginas para o assunto. Uma é \"Obter Informações de Nota Fiscal de Produtor Rural Pessoa Física\". A outra é \"Nota Fiscal Fácil NFF, Obter Informações\". As duas trazem os endereços, telefones e horários de atendimento da Receita."},
      {"destaque":"Texto de orientação geral, que não substitui o contador. Dispensa, enquadramento e liberação do aplicativo dependem da Secretaria de Economia do DF: confirme na Receita antes de vender."},
    ] },
  ],
  noFinagro: { h2: "A nota fiscal na rotina do FINAGRO", itens: [
    "O FINAGRO não emite nota fiscal e não transmite nada à Fazenda. A nota sai no aplicativo Nota Fiscal Fácil ou em outro emissor de NF-e.",
    "A venda feita com nota entra no app como receita, com descrição, categoria e forma de pagamento. O número da nota e o nome de quem comprou cabem na descrição.",
    "Na venda de gado, a saída do animal guarda o destino ou comprador. O valor que ainda vai entrar se lança em contas a receber, com a data do acerto.",
    "A tela Documentos guarda a inscrição estadual como outro documento, com o número, ao lado do CCIR, do ITR e dos contratos.",
    "Relatórios em PDF e em planilha (CSV) reúnem as vendas e as despesas do período para o contador conferir com as notas.",
  ] },
  cta: {"forte":"A nota sai no sistema da Fazenda. A venda fica anotada no FINAGRO.","texto":"Grátis até 1.000 animais com ficha, sem cartão, no Android e no navegador."},
  faqTitulo: "Perguntas sobre nota fiscal de produtor no DF",
  faq: [
    ["Como emitir nota fiscal de produtor rural no DF?","O produtor rural pessoa física não equiparado a pessoa jurídica emite NF-e modelo 55. A página da Secretaria prevê o aplicativo Nota Fiscal Fácil, com autenticação por CPF na plataforma gov.br, mas o Módulo Produtor Rural ainda está em parametrização. Os demais emitem a mesma NF-e modelo 55."],
    ["Todo produtor rural do DF precisa emitir nota eletrônica?","Depende do faturamento. A Secretaria de Estado de Economia informa que os produtores rurais devem emitir NF-e. A mesma página dispensa a pessoa física com faturamento igual ou inferior ao previsto para o MEI, que pode emitir por opção."],
    ["Quem pode usar o Nota Fiscal Fácil no Distrito Federal?","O produtor rural pessoa física. Em 2026 o uso é restrito aos produtores rurais não contribuintes, que são os de faturamento anual até R$ 3,6 milhões. A Secretaria informa que o módulo do produtor ainda está em parametrização."],
    ["O aplicativo Nota Fiscal Fácil é pago no DF?","Não. A Secretaria de Economia informa que o aplicativo está disponível para ser baixado gratuitamente."],
  ],
  fontes: [
    {"nome":"Receita do DF, Obter Informações de Nota Fiscal de Produtor Rural Pessoa Física","url":"https://www.receita.fazenda.df.gov.br/aplicacoes/CartaServicos/servico.cfm?codTipoPessoa=22&codServico=1237&codSubCategoria=366"},
    {"nome":"Receita do DF, Nota Fiscal Fácil NFF: Obter Informações","url":"https://mobile.receita.fazenda.df.gov.br/aplicacoes/CartaServicos/servico.cfm?codTipoPessoa=7&codServico=1212&codSubCategoria=356"},
    {"nome":"Confaz, Ajuste SINIEF 10/2022 (redação do Ajuste SINIEF 27/2024)","url":"https://www.confaz.fazenda.gov.br/legislacao/ajustes/2022/AJ010_22"},
  ],
  relacionados: ['nota-fiscal-de-produtor-rural', 'inscricao-estadual-produtor-rural', 'nota-fiscal-de-produtor-rural-go'],
};
