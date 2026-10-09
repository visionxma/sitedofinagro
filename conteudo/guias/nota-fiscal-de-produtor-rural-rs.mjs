// Consultas-alvo: "nota fiscal produtor rural rs", "nota fiscal avulsa produtor rural rs" (colheita de 4.045 pesquisas, 58 delas de nota fiscal com o nome do estado).
// Fonte: páginas oficiais do estado e do Confaz, lidas por curl em 09/10/2026. A página geral é /nota-fiscal-de-produtor-rural.
export const provas = [
  {"afirmacao":"no Rio Grande do Sul a nota eletrônica é obrigatória para todos os produtores rurais a partir do dia 5 de janeiro","trecho":"a partir do dia 5 de janeiro, a nota eletrônica passa a ser obrigatória para todos os produtores rurais","url":"https://fazenda.rs.gov.br/nota-eletronica-passa-a-ser-obrigatoria-para-produtores-rurais-do-rs-a-partir-de-janeiro-de-2026"},
  {"afirmacao":"a obrigatoriedade começou em 2021 para faturamento acima de R$ 4,8 milhões e em janeiro de 2025 alcançou receita bruta de R$ 360 mil ou mais e as operações interestaduais","trecho":"A obrigatoriedade começou a valer em 2021 para produtores com faturamento superior a R$ 4,8 milhões. Em janeiro de 2025, foram abrangidos também quem teve receita bruta de R$ 360 mil ou mais com a atividade rural, além de todas as operações interestaduais","url":"https://fazenda.rs.gov.br/nota-eletronica-passa-a-ser-obrigatoria-para-produtores-rurais-do-rs-a-partir-de-janeiro-de-2026"},
  {"afirmacao":"a Sefaz prorrogou até 30 de abril de 2026 o uso do talão já impresso para quem tem receita bruta inferior a R$ 360 mil","trecho":"a Sefaz prorrogou até 30 de abril de 2026 o prazo para utilização do talão de produtor rural já impresso , modelo 4, para quem possui receita bruta inferior a R$ 360 mil","url":"https://www.estado.rs.gov.br/receita-estadual-atualiza-produtores-rurais-sobre-uso-da-nota-fiscal-eletronica-e-do-aplicativo-nota-fiscal-facil"},
  {"afirmacao":"desde 1º de maio a nota em papel não pode mais ser usada no Rio Grande do Sul","trecho":"Desde 1º de maio, a nota em papel, também chamada de “talão do produtor”, não pode mais ser utilizada","url":"https://fazenda.rs.gov.br/nota-eletronica-e-documento-fiscal-obrigatorio-para-todos-os-produtores-do-rs"},
  {"afirmacao":"a Sefaz do Rio Grande do Sul recomenda o aplicativo Nota Fiscal Fácil, gratuito","trecho":"A alternativa recomendada pela Sefaz para a emissão de nota eletrônica é o aplicativo Nota Fiscal Fácil (NFF), disponível gratuitamente para download em celulares","url":"https://fazenda.rs.gov.br/nota-eletronica-e-documento-fiscal-obrigatorio-para-todos-os-produtores-do-rs"},
  {"afirmacao":"o aplicativo tem uso sem internet","trecho":"Ela conta, inclusive, com uma funcionalidade de uso off-line para atender profissionais que trabalham no campo, muitas vezes sem internet","url":"https://fazenda.rs.gov.br/nota-eletronica-e-documento-fiscal-obrigatorio-para-todos-os-produtores-do-rs"},
  {"afirmacao":"a Nota Fiscal Avulsa é gratuita e indicada para operações mais complexas, como exportação","trecho":"também gratuita e indicada para operações mais complexas, como, por exemplo, as de exportação","url":"https://fazenda.rs.gov.br/nota-eletronica-e-documento-fiscal-obrigatorio-para-todos-os-produtores-do-rs"},
  {"afirmacao":"há soluções de associações e cooperativas e é permitido emissor próprio","trecho":"Há ainda soluções oferecidas por associações e por cooperativas, e é permitido o desenvolvimento de modelos próprios","url":"https://fazenda.rs.gov.br/nota-eletronica-e-documento-fiscal-obrigatorio-para-todos-os-produtores-do-rs"},
  {"afirmacao":"o aplicativo é acessado com login gov.br e pede produto, cliente e forma de transporte","trecho":"O NFF pode ser baixado no celular e acessado via login gov.br, e é recomendado pela simplicidade e gratuidade. Para realizar uma operação, basta que os produtores preencham dados como o produto, o nome do(a) cliente e a forma de transporte","url":"https://fazenda.rs.gov.br/nota-eletronica-passa-a-ser-obrigatoria-para-produtores-rurais-do-rs-a-partir-de-janeiro-de-2026"},
  {"afirmacao":"informados os dados, a operação é autorizada e a nota é emitida e pode ser compartilhada","trecho":"Depois que os dados são informados, a operação é autorizada e a nota fiscal é emitida, podendo ser compartilhada","url":"https://www.estado.rs.gov.br/receita-estadual-atualiza-produtores-rurais-sobre-uso-da-nota-fiscal-eletronica-e-do-aplicativo-nota-fiscal-facil"},
  {"afirmacao":"o primeiro tutorial da Sefaz mostra cadastro de produtos, de clientes e emissão","trecho":"A parte 1 detalha como fazer operações básicas: cadastro de produtos, cadastro de clientes e emissão de notas fiscais","url":"https://fazenda.rs.gov.br/nota-eletronica-e-documento-fiscal-obrigatorio-para-todos-os-produtores-do-rs"},
  {"afirmacao":"os serviços da Receita Estadual estão na Carta de Serviços, em atendimento.receita.rs.gov.br","trecho":"Serviços da Receita Estadual (ICMS, IPVA e ITCD): consulte a Carta de Serviços, em atendimento.receita.rs.gov.br","url":"https://fazenda.rs.gov.br/nota-eletronica-e-documento-fiscal-obrigatorio-para-todos-os-produtores-do-rs"},
  {"afirmacao":"no Rio Grande do Sul a inscrição de produtor é pedida na prefeitura do município","trecho":"Você deve ir até a prefeitura do seu município. O Serviço é efetuado exclusivamente pelo local conveniado à Receita Estadual.","url":"https://www.fazenda.rs.gov.br/servicos-ao-cidadao/servicos?servico=1665"},
];

export default {
  slug: "nota-fiscal-de-produtor-rural-rs",
  grupo: "dinheiro",
  tipo: "guia",
  curto: "Nota de produtor no RS",
  resumo: "Nota Fiscal Fácil e NFA-e: como emitir no RS.",
  title: "Nota fiscal de produtor rural no RS: como emitir",
  description: "Nota fiscal de produtor rural no RS: o talão acabou, a nota eletrônica vale para todos e sai pelo Nota Fiscal Fácil ou pela NFA-e. Veja o passo a passo.",
  h1: "Nota fiscal de produtor rural no RS: como emitir pelo celular",
  pergunta: "Como emitir nota fiscal de produtor rural no Rio Grande do Sul?",
  resposta: "No Rio Grande do Sul a nota de produtor é eletrônica para todos desde 5 de janeiro de 2026. O talão de papel deixou de valer em 1º de maio de 2026. A Secretaria da Fazenda recomenda o aplicativo Nota Fiscal Fácil, gratuito, com login gov.br. Para operações mais complexas existe a Nota Fiscal Avulsa eletrônica.",
  tela: "fluxo",
  atualizado: "2026-10-09",
  secoes: [
    { h2: "Qual é o sistema de emissão no Rio Grande do Sul", blocos: [
      {"p":"A Secretaria da Fazenda do RS (Sefaz), pela Receita Estadual, oferece dois caminhos gratuitos para a nota fiscal de produtor rural:"},
      {"ul":["**Nota Fiscal Fácil (NFF):** aplicativo de celular, a alternativa que a Sefaz recomenda. Entra com o login gov.br e tem uso sem internet, para quem está no campo sem sinal.","**Nota Fiscal Avulsa eletrônica (NFA-e):** sistema da Receita Estadual, também gratuito, indicado para operações mais complexas, como as de exportação."]},
      {"p":"Quem prefere outro emissor pode usar. A Sefaz informa que há soluções oferecidas por associações e por cooperativas, e que é permitido o desenvolvimento de modelos próprios."},
    ] },
    { h2: "Quem é obrigado à nota eletrônica no RS e desde quando", blocos: [
      {"p":"No RS a troca do talão pela nota eletrônica foi feita por etapas. As datas abaixo são as que a Sefaz publicou:"},
      {"tabela":{"colunas":["Quem","Desde quando"],"linhas":[["Faturamento superior a R$ 4,8 milhões","2021"],["Receita bruta de R$ 360 mil ou mais e todas as vendas para outro estado","Janeiro de 2025"],["Todos os produtores rurais, nas vendas dentro do estado","5 de janeiro de 2026"]],"nota":"Secretaria da Fazenda do RS, notícias de janeiro e de maio de 2026."}},
      {"p":"Houve uma tolerância para o talão já impresso, o modelo 4. A Sefaz prorrogou o uso até 30 de abril de 2026 para quem tem receita bruta inferior a R$ 360 mil. Esse prazo acabou. Desde 1º de maio de 2026, a nota em papel não pode mais ser utilizada. Quem usa emite documento sem validade fiscal, segundo a Sefaz."},
    ] },
    { h2: "Passo a passo no Nota Fiscal Fácil", blocos: [
      {"ol":["Baixe o aplicativo Nota Fiscal Fácil no celular.","Entre com o login gov.br.","Cadastre os produtos que você vende e os clientes. O primeiro tutorial em vídeo da Sefaz mostra essas operações básicas.","Na hora da venda, informe o produto, o cliente e a forma de transporte.","Confira e envie. Informados os dados, a operação é autorizada, a nota é emitida e pode ser compartilhada com quem comprou."]},
      {"p":"A Sefaz mantém três tutoriais em vídeo e um manual do aplicativo. Eles cobrem também o ambiente de testes, a emissão sem internet, o cadastro de operadores e transportadores, a venda de merenda escolar, a venda para a Ceasa e a contranota."},
      {"p":"Se a sua operação não está no aplicativo, o caminho da própria Sefaz é a NFA-e."},
    ] },
    { h2: "O que precisa antes de emitir", blocos: [
      {"p":"No Rio Grande do Sul a nota sai no nome do produtor inscrito na Receita Estadual. O pedido de inscrição é feito na prefeitura do seu município, que é conveniada à Receita. Os outros estados estão no guia da [inscrição estadual de produtor rural](/inscricao-estadual-produtor-rural)."},
      {"ul":["**Conta gov.br:** é o login do Nota Fiscal Fácil.","**Aplicativo no celular:** a função sem internet atende quem emite longe do sinal.","**Produtos e clientes cadastrados:** o primeiro tutorial da Sefaz mostra como cadastrar antes da primeira nota."]},
      {"p":"Na hora da venda o aplicativo pede o produto, o nome do cliente e a forma de transporte. Vai vender gado? A carga também leva a guia de trânsito: veja [como emitir GTA](/como-emitir-gta). A contribuição descontada na venda está explicada em [Funrural](/funrural)."},
    ] },
    { h2: "Onde tirar dúvida no Rio Grande do Sul", blocos: [
      {"p":"A Receita Estadual reúne os serviços de ICMS na Carta de Serviços, em atendimento.receita.rs.gov.br. As notícias e os tutoriais sobre a nota do produtor ficam no site da Secretaria da Fazenda, em fazenda.rs.gov.br."},
      {"destaque":"Texto informativo, que não substitui o contador. Datas e sistemas são os que a Sefaz do RS publicou: confirme na Receita Estadual a regra do seu produto antes de emitir."},
    ] },
  ],
  noFinagro: { h2: "A nota fiscal na rotina do FINAGRO", itens: [
    "O FINAGRO não emite nota fiscal e não transmite nada à Fazenda. A nota sai no aplicativo Nota Fiscal Fácil ou na NFA-e da Receita Estadual do RS.",
    "A venda feita com nota entra no app como receita, com descrição, categoria e forma de pagamento. O número da nota e o nome de quem comprou cabem na descrição.",
    "Na venda de gado, a saída do animal guarda o destino ou comprador. O valor que ainda vai entrar se lança em contas a receber, com a data do acerto.",
    "A tela Documentos guarda a inscrição estadual como outro documento, com o número, ao lado do CCIR, do ITR e dos contratos.",
    "Relatórios em PDF e em planilha (CSV) reúnem as vendas e as despesas do período para o contador conferir com as notas.",
  ] },
  cta: {"forte":"A nota sai no sistema da Fazenda. A venda fica anotada no FINAGRO.","texto":"Grátis até 1.000 animais com ficha, sem cartão, no Android e no navegador."},
  faqTitulo: "Perguntas sobre nota fiscal de produtor no RS",
  faq: [
    ["Como emitir nota fiscal de produtor rural no RS?","Pelo aplicativo Nota Fiscal Fácil, que a Secretaria da Fazenda do RS recomenda. Baixe no celular, entre com o login gov.br, informe o produto, o cliente e a forma de transporte e envie. A outra opção da Sefaz é a Nota Fiscal Avulsa eletrônica."],
    ["O talão de produtor rural ainda vale no RS?","Não. A Secretaria da Fazenda informa que, desde 1º de maio de 2026, a nota em papel não pode mais ser utilizada. Quem usa o talão emite documento sem validade fiscal."],
    ["O que é a nota fiscal avulsa de produtor rural no RS?","É a NFA-e, o sistema de Nota Fiscal Avulsa da Receita Estadual. A Sefaz informa que ela é gratuita e indicada para operações mais complexas, como as de exportação."],
    ["O Nota Fiscal Fácil funciona sem internet?","Sim. A Secretaria da Fazenda do RS informa que o aplicativo tem uma funcionalidade de uso sem internet, pensada para quem trabalha no campo."],
    ["Preciso de inscrição estadual para emitir nota no RS?","Sim. A nota sai no nome do produtor inscrito. No Rio Grande do Sul o pedido de inscrição é feito na prefeitura do município, conveniada à Receita Estadual."],
  ],
  fontes: [
    {"nome":"Secretaria da Fazenda do RS, nota eletrônica obrigatória para todos os produtores rurais","url":"https://fazenda.rs.gov.br/nota-eletronica-e-documento-fiscal-obrigatorio-para-todos-os-produtores-do-rs"},
    {"nome":"Secretaria da Fazenda do RS, obrigatoriedade a partir de janeiro de 2026","url":"https://fazenda.rs.gov.br/nota-eletronica-passa-a-ser-obrigatoria-para-produtores-rurais-do-rs-a-partir-de-janeiro-de-2026"},
    {"nome":"Governo do RS, Receita Estadual orienta sobre a NF-e e o Nota Fiscal Fácil","url":"https://www.estado.rs.gov.br/receita-estadual-atualiza-produtores-rurais-sobre-uso-da-nota-fiscal-eletronica-e-do-aplicativo-nota-fiscal-facil"},
    {"nome":"Secretaria da Fazenda do RS, Solicitar Inscrição para Produtor Rural","url":"https://www.fazenda.rs.gov.br/servicos-ao-cidadao/servicos?servico=1665"},
  ],
  relacionados: ['nota-fiscal-de-produtor-rural', 'inscricao-estadual-produtor-rural', 'nota-fiscal-de-produtor-rural-sc'],
};
