// Consultas-alvo: "georreferenciamento rural", "georreferenciamento rural é obrigatório", "georreferenciamento rural prazo",
// "georreferenciamento rural quem pode fazer", "georreferenciamento rural como fazer" (terceira leva, 08/10/2026).
// Normas: Lei 10.267/2001 (que alterou a Lei 6.015/1973, arts. 176 e 225) e Decreto 4.449/2002. O decreto de prazo MAIS RECENTE é o
// Decreto 12.689, de 21/10/2025, que deu ao art. 10 do Decreto 4.449 a redação em vigor: exigência a partir de 21 de outubro de 2029,
// e revogou os incisos com os prazos antigos por faixa de área (lido no Planalto em 08/10/2026, texto riscado descartado).
// ATENÇÃO para quem revisar: as páginas do Incra (perguntas frequentes e certificação) ainda citam os decretos até 2018 e as datas de
// 20/11/2023 e 20/11/2025. O guia separa os atos: desmembramento, parcelamento e remembramento estão no art. 176, § 3º, da Lei 6.015
// (sem data); a transferência está no § 4º (prazo do Poder Executivo, hoje 21/10/2029). Vizinhos: vale o art. 176, § 13, da Lei 6.015
// (incluído pela Lei 13.838/2019), que dispensa a anuência dos confrontantes; o art. 9º, § 6º, do decreto de 2002 ainda cita os confinantes.
const D4449 = 'https://www.planalto.gov.br/ccivil_03/decreto/2002/d4449.htm';
const D12689 = 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/D12689.htm';
const L6015 = 'https://www.planalto.gov.br/ccivil_03/leis/l6015compilada.htm';
const CERT = 'https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/certificacao-imoveis';
const FAQ = 'https://www.gov.br/incra/pt-br/acesso-a-informacao/perguntas-frequentes';
const IBGE = 'https://www.ibge.gov.br/biblioteca/visualizacao/periodicos/3101/agro_2017_caracteristicas_gerais.pdf';

export const provas = [
  { afirmacao: 'georreferenciar é definir a forma, a dimensão e a localização do imóvel por levantamento topográfico', trecho: 'Georreferenciar um imóvel é definir a sua forma, dimensão e localização, através de métodos de levantamento topográfico', url: FAQ },
  { afirmacao: 'o memorial descritivo é feito por profissional habilitado, com ART, e traz as coordenadas dos vértices no Sistema Geodésico Brasileiro', trecho: 'memorial descritivo elaborado, executado e assinado por profissional habilitado e com a devida Anotação de Responsabilidade Técnica - ART, contendo as coordenadas dos vértices definidores dos limites dos imóveis rurais, georreferenciadas ao Sistema Geodésico Brasileiro', url: D4449 },
  { afirmacao: 'a lei manda a precisão posicional ser fixada pelo Incra', trecho: 'ao Sistema Geodésico Brasileiro e com precisão posicional a ser fixada pelo INCRA', url: L6015 },
  { afirmacao: 'a página de perguntas do Incra fala em precisão posicional de 50 cm na determinação de cada vértice', trecho: 'com a precisão posicional de 50 cm sendo atingida na determinação de cada um deles', url: FAQ },
  { afirmacao: 'a certificação é feita só pelo Incra e garante que os limites não se sobrepõem a outros', trecho: 'realizada exclusivamente pelo Incra, é a garantia de que os limites de determinado imóvel não se sobrepõem a outros e que a realização do georreferenciamento obedeceu especificações técnicas legais', url: CERT },
  { afirmacao: 'a certificação é necessária para alteração de área ou de titular em cartório, como compra, venda, desmembramento ou partilha', trecho: 'É necessária para toda alteração de áreas ou de seus titulares em cartório, como nos casos de compra, venda, desmembramento ou partilha', url: CERT },
  { afirmacao: 'o georreferenciamento e a certificação são exigidos apenas quando há transação imobiliária', trecho: 'O georreferenciamento e a certificação são exigidos apenas quando ocorrer alguma transação imobiliária', url: FAQ },
  { afirmacao: 'a Lei 6.015, art. 176, § 3º, manda a identificação georreferenciada nos casos de desmembramento, parcelamento ou remembramento, sem fixar data', trecho: 'Nos casos de desmembramento, parcelamento ou remembramento de imóveis rurais, a identificação prevista na alínea a do item 3 do inciso II do § 1 o será obtida a partir de memorial descritivo, assinado por profissional habilitado', url: L6015 },
  { afirmacao: 'a Lei 6.015, art. 176, § 4º: a identificação se torna obrigatória para o registro em qualquer transferência, nos prazos fixados pelo Poder Executivo', trecho: 'tornar-se-á obrigatória para efetivação de registro, em qualquer situação de transferência de imóvel rural, nos prazos fixados por ato do Poder Executivo', url: L6015 },
  { afirmacao: 'pela redação em vigor do art. 10 do Decreto 4.449/2002, a exigência vale a partir de 21 de outubro de 2029', trecho: 'será exigida nas hipóteses de desmembramento, parcelamento, remembramento e em qualquer situação de transferência de imóvel rural, na forma estabelecida no art. 9º, a partir de 21 de outubro de 2029', url: D4449 },
  { afirmacao: 'essa redação foi dada pelo Decreto 12.689, de 21 de outubro de 2025', trecho: 'DECRETO Nº 12.689, DE 21 DE OUTUBRO DE 2025 Altera o Decreto nº 4.449, de 30 de outubro de 2002, para regulamentar o disposto no art. 176, § 4º, da Lei nº 6.015', url: D12689 },
  { afirmacao: 'o Decreto 12.689/2025 traz a data de 21 de outubro de 2029 e revogou os incisos I a VII do art. 10, que tinham os prazos por faixa de área', trecho: 'na forma estabelecida no art. 9º, a partir de 21 de outubro de 2029', url: D12689 },
  { afirmacao: 'o Decreto 12.689/2025 revogou os incisos I a VII do caput do art. 10 do Decreto 4.449/2002', trecho: 'os seguintes dispositivos do art. 10 do Decreto nº 4.449, de 30 de outubro de 2002: a) os incisos I a VII do caput', url: D12689 },
  { afirmacao: 'depois do prazo, o cartório fica proibido de praticar os atos até a identificação do imóvel', trecho: 'fica vedado ao oficial do registro de imóveis a prática dos seguintes atos registrais que envolvam as áreas rurais até que seja feita a identificação do imóvel na forma estabelecida neste Decreto', url: D4449 },
  { afirmacao: 'depois do prazo, os atos travados incluem desmembramento, parcelamento, remembramento e transferência de área total', trecho: 'I - desmembramento, parcelamento ou remembramento; (Incluído pelo Decreto nº 5.570, de 2005) II - transferência de área total', url: D4449 },
  { afirmacao: 'depois do prazo, também fica travada a criação ou alteração da descrição do imóvel por procedimento judicial ou administrativo', trecho: 'III - criação ou alteração da descrição do imóvel, resultante de qualquer procedimento judicial ou administrativo', url: D4449 },
  { afirmacao: 'as páginas do Incra ainda mostram prazos por faixa de área, com as datas de 20/11/2023 e 20/11/2025', trecho: 'Áreas acima de 25 ha e abaixo de 100 ha: a partir de 20/11/2023; Áreas abaixo de 25 ha: a partir de 20/11/2025', url: FAQ },
  { afirmacao: 'pela lei, cabe ao Incra certificar que a poligonal não se sobrepõe a outra do cadastro', trecho: 'caberá ao Incra certificar que a poligonal objeto do memorial descritivo não se sobrepõe a nenhuma outra constante de seu cadastro georreferenciado', url: L6015 },
  { afirmacao: 'nas ações judiciais sobre imóvel rural, limites e confrontações vêm de memorial descritivo de profissional habilitado', trecho: 'Nos autos judiciais que versem sobre imóveis rurais, a localização, os limites e as confrontações serão obtidos a partir de memorial descritivo assinado por profissional habilitado', url: L6015 },
  { afirmacao: 'a adequação do imóvel não pode ser feita sem a certificação do Incra', trecho: 'poderá ser feita sem a certificação do memorial descritivo expedida pelo INCRA', url: D4449 },
  { afirmacao: 'a certificação não reconhece domínio nem a exatidão dos limites indicados pelo dono', trecho: 'A certificação do memorial descritivo pelo INCRA não implicará reconhecimento do domínio ou a exatidão dos limites e confrontações indicados pelo proprietário', url: D4449 },
  { afirmacao: 'o dono contrata um responsável técnico, habilitado em conselho profissional e credenciado no Incra', trecho: 'O detentor do imóvel rural deve contratar um responsável técnico para realizar a demarcação georreferenciada da sua área. O profissional deve estar habilitado em conselho regional profissional e credenciado junto ao Incra', url: CERT },
  { afirmacao: 'quem faz são profissionais com registro no CREA credenciados pelo Incra, e a lista por estado está no Sigef', trecho: 'Profissionais com registro no Conselho de Engenharia e Agronomia (CREA) previamente credenciados pelo Incra. Na página do Sigef, você pode consultar a relação de profissionais credenciados em cada estado', url: FAQ },
  { afirmacao: 'o Sigef é a ferramenta eletrônica do Incra que recebe e valida os dados georreferenciados', trecho: 'O Sistema de Gestão Fundiária (Sigef) é ferramenta eletrônica do Incra para recepcionar e validar as informações georreferenciadas de limites de imóveis rurais', url: FAQ },
  { afirmacao: 'no Sigef o público pesquisa parcelas certificadas, requerimentos pendentes e profissionais credenciados', trecho: 'No sistema, o público pode pesquisar as parcelas certificadas, os requerimentos de certificação pendentes e os profissionais habilitados credenciados', url: FAQ },
  { afirmacao: 'o técnico credenciado envia o arquivo digital pelo Sigef', trecho: 'Os técnicos credenciados responsáveis pelo serviço de georreferenciamento acessam o Sigef na internet e enviam o arquivo digital com os dados cartográficos dos imóveis rurais', url: CERT },
  { afirmacao: 'sem inconsistência nem sobreposição, a certificação sai com a planta e o memorial gerados de forma automática', trecho: 'a certificação é obtida com a geração da planta e do memorial descritivo das áreas de forma automática', url: CERT },
  { afirmacao: 'os documentos assinados digitalmente são levados ao registro de imóveis', trecho: 'Os documentos, assinados digitalmente, podem ser impressos e levados ao registro de imóveis', url: CERT },
  { afirmacao: 'se houver inconsistência, o sistema notifica o interessado, que corrige e envia de novo', trecho: 'No caso de inconsistências, o sistema transmite uma notificação ao interessado. Desta forma, ele poderá saná-las e inserir novamente os dados no Sigef', url: CERT },
  { afirmacao: 'no cartório, o pedido vai com a certificação, o CCIR e a prova de quitação do ITR dos últimos cinco exercícios', trecho: 'acompanhado da certificação prevista no § 1 o deste artigo, do CCIR e da prova de quitação do ITR dos últimos cinco exercícios, quando for o caso', url: D4449 },
  { afirmacao: 'a Lei 6.015, art. 176, § 13, dispensa a anuência dos confrontantes: basta a declaração do requerente de que respeitou os limites e as confrontações', trecho: 'é dispensada a anuência dos confrontantes, bastando para tanto a declaração do requerente de que respeitou os limites e as confrontações', url: L6015 },
  { afirmacao: 'o requerimento ao cartório leva declaração do interessado, com firma reconhecida, de que foram respeitados os direitos dos confrontantes', trecho: 'requerimento do interessado, contendo declaração firmada sob pena de responsabilidade civil e criminal, com firma reconhecida, de que foram respeitados os direitos dos confrontantes', url: D4449 },
  { afirmacao: 'o Decreto 4.449/2002, art. 9º, § 6º, ainda fala em declaração dos confinantes com firma reconhecida', trecho: 'deverá ser acompanhada de declaração expressa dos confinantes de que os limites divisórios foram respeitados, com suas respectivas firmas reconhecidas', url: D4449 },
  { afirmacao: 'o dono de imóveis que somam até quatro módulos fiscais tem isenção de custos financeiros', trecho: 'garantida a isenção de custos financeiros aos proprietários de imóveis rurais cuja somatória da área não exceda a quatro módulos fiscais', url: L6015 },
  { afirmacao: 'o Manual Técnico em vigor é a 2ª edição, aprovada pela Portaria Incra 2.502/2022', trecho: 'deve ser executado conforme orientações da 2ª edição do Manual Técnico para Georreferenciamento de Imóveis Rurais , aprovada pela Portaria Incra nº 2.502/2022', url: CERT },
  { afirmacao: 'no Censo Agropecuário o IBGE aceitou até 9 metros de erro de posição no dispositivo móvel', trecho: 'A precisão posicional estabelecida como limite máximo aceitável para a determinação das coordenadas pelo Dispositivo Móvel de Coleta (DMC) foi de 9 metros', url: IBGE },
];

export default {
  slug: 'georreferenciamento-rural',
  grupo: 'terra',
  tipo: 'guia',
  curto: 'Georreferenciamento rural',
  resumo: 'Quando é exigido, o prazo, quem faz e como certificar.',
  title: 'Georreferenciamento rural: é obrigatório? Prazo e quem faz',
  description: 'Georreferenciamento rural: o que é, quando o cartório exige, o prazo do decreto em vigor, quem pode fazer e como sai a certificação do Incra pelo Sigef.',
  h1: 'Georreferenciamento rural: quando é obrigatório, o prazo e quem pode fazer',
  pergunta: 'O georreferenciamento rural é obrigatório?',
  resposta: 'Depende do ato. Para desmembrar, parcelar ou remembrar imóvel rural, a Lei 6.015/1973 já pede o memorial georreferenciado, sem data. Para transferir, a lei remete ao prazo do Poder Executivo, e o decreto em vigor fixou 21 de outubro de 2029. O profissional credenciado faz o levantamento, e o Incra certifica pelo Sigef. Confirme no cartório.',
  tela: 'inicio',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'O que é o georreferenciamento de imóvel rural', blocos: [
      { p: 'Georreferenciar um imóvel é definir a sua **forma, dimensão e localização** por levantamento topográfico. O resultado é um **memorial descritivo**, feito e assinado por profissional habilitado, com Anotação de Responsabilidade Técnica (ART), que traz as coordenadas de cada vértice da divisa no Sistema Geodésico Brasileiro. A lei manda a precisão posicional ser **fixada pelo Incra**. A página de perguntas frequentes do Incra fala em 50 cm na determinação de cada vértice; o número que vale para o seu serviço é o da norma técnica em vigor, que o profissional credenciado segue.' },
      { p: 'A exigência veio com a **Lei 10.267/2001**, que mudou a Lei de Registros Públicos (Lei 6.015/1973), e foi regulamentada pelo **Decreto 4.449/2002**. O Incra confere o trabalho e emite a **certificação**: a garantia de que os limites do imóvel não se sobrepõem a outros do cadastro e de que o levantamento seguiu as especificações técnicas.' },
      { destaque: 'A certificação não prova que a terra é sua. O decreto diz que ela não implica reconhecimento do domínio nem da exatidão dos limites indicados pelo proprietário. Quem prova a propriedade é a matrícula.' },
    ] },
    { h2: 'Georreferenciamento rural é obrigatório? Quando o cartório exige', blocos: [
      { p: 'Segundo o Incra, o georreferenciamento e a certificação são exigidos apenas quando ocorre alguma transação imobiliária. Ou seja: a cobrança aparece quando você vai ao **cartório de registro de imóveis** mexer na terra. A certificação é necessária para toda alteração de área ou de titular em cartório, como compra, venda, desmembramento ou partilha.' },
      { ul: ['**Desmembramento, parcelamento ou remembramento:** dividir a fazenda, vender um pedaço ou juntar duas áreas.', '**Transferência do imóvel:** venda, doação e partilha.', '**Ação judicial sobre imóvel rural:** a lei manda que localização, limites e confrontações venham de memorial descritivo de profissional habilitado.'] },
      { p: 'O decreto é direto: a adequação da matrícula não pode ser feita sem a certificação do memorial descritivo expedida pelo Incra.' },
    ] },
    { h2: 'Prazo do georreferenciamento rural: o que diz o decreto em vigor', blocos: [
      { p: 'A Lei de Registros Públicos trata os atos de dois jeitos, e o prazo não é o mesmo para os dois:' },
      { ul: ['**Desmembrar, parcelar ou remembrar.** O art. 176, § 3º, da Lei 6.015/1973 manda a identificação do imóvel sair de memorial descritivo georreferenciado. Esse parágrafo não traz data: conte com a exigência no cartório desde já.', '**Transferir a qualquer título, como venda, doação e partilha.** O § 4º do mesmo artigo diz que a identificação se torna obrigatória nos prazos fixados pelo Poder Executivo. O prazo em vigor é o do **Decreto 12.689, de 21 de outubro de 2025**, que deu nova redação ao art. 10 do Decreto 4.449/2002: **a partir de 21 de outubro de 2029**.'] },
      { p: 'O texto do decreto cita os quatro atos juntos na data de 2029: desmembramento, parcelamento, remembramento e transferência. Como a lei vale mais que o decreto e o § 3º não depende de prazo, quem vai dividir ou juntar área faz melhor em tratar o georreferenciamento como exigido hoje e confirmar no cartório.' },
      { p: 'O mesmo decreto revogou os incisos que escalonavam os prazos por faixa de área. Passada a data, o oficial do registro de imóveis fica proibido de praticar, sem a identificação do imóvel, três tipos de ato: desmembramento, parcelamento ou remembramento; transferência de área total; e criação ou alteração da descrição do imóvel que resulte de procedimento judicial ou administrativo.' },
      { tabela: { colunas: ['Ato no cartório', 'O que a norma diz', 'Onde está'], linhas: [['Desmembrar, parcelar ou remembrar', 'Memorial georreferenciado, sem data na lei', 'Lei 6.015, art. 176, § 3º'], ['Transferir o imóvel', 'A partir de 21 de outubro de 2029', 'Lei 6.015, art. 176, § 4º, e Decreto 4.449, art. 10'], ['Mudar a descrição por processo', 'Vedado sem a identificação, depois do prazo', 'Decreto 4.449, art. 10, § 2º, III'], ['Quem certifica', 'O Incra', 'Lei 6.015, art. 176, § 5º']], nota: 'Lei 6.015/1973 e Decreto 4.449/2002, com a redação do Decreto 12.689/2025, lidos no Planalto em 08/10/2026.' } },
      { destaque: 'As páginas do Incra ainda mostram os prazos antigos por faixa de área, com as datas de 20/11/2023 e 20/11/2025, e o cartório pode manter a exigência para imóvel que já estava obrigado. Antes de qualquer ato, confirme no cartório de registro de imóveis da sua comarca o que ele está exigindo.' },
      { p: 'Esperar o último ano não é bom negócio. O levantamento depende de serviço de campo e da análise do Incra no Sigef. Quem pensa em vender, dividir entre os filhos ou dar a terra em garantia ganha tempo fazendo antes.' },
    ] },
    { h2: 'Quem pode fazer o georreferenciamento rural', blocos: [
      { p: 'O dono do imóvel contrata um **responsável técnico**. Segundo o Incra, o profissional deve estar habilitado em conselho regional profissional e **credenciado junto ao Incra**. O serviço é assinado com ART.' },
      { ol: ['Abra o Sigef, o Sistema de Gestão Fundiária do Incra, em sigef.incra.gov.br.', 'Consulte a relação de profissionais credenciados no seu estado. A pesquisa é pública.', 'Peça orçamento a mais de um e confira o nome na lista antes de fechar.', 'Combine no contrato quem leva os papéis ao cartório e quem prepara a sua declaração de que os limites foram respeitados.'] },
      { p: 'O dono de imóveis rurais que, somados, não passam de **quatro módulos fiscais** tem, pela Lei de Registros Públicos, garantia de isenção de custos financeiros. Pergunte no Incra do seu estado como pedir. Para saber quantos módulos tem a sua terra, veja o guia do [módulo fiscal](/modulo-fiscal).' },
    ] },
    { h2: 'Como fazer: do campo à certificação no Sigef', blocos: [
      { ol: ['**Papéis em dia.** Separe a matrícula, o [CCIR](/ccir) e a prova de quitação do [ITR](/itr) dos últimos cinco exercícios. O decreto pede os três no cartório.', '**Levantamento.** O profissional mede as divisas no campo, conforme a 2ª edição do Manual Técnico para Georreferenciamento de Imóveis Rurais do Incra.', '**Declaração de limites.** A Lei 6.015/1973, art. 176, § 13, dispensa a anuência dos confrontantes: basta a declaração do requerente de que respeitou os limites e as confrontações. O Decreto 4.449/2002, que é de antes dessa mudança, ainda fala em declaração dos confinantes com firma reconhecida. Vale a lei, e o cartório diz o que ele aceita: pergunte antes.', '**Envio ao Sigef.** O técnico credenciado envia o arquivo digital com os dados do imóvel.', '**Certificação.** Sem inconsistência nem sobreposição, o próprio sistema gera a planta e o memorial descritivo certificados.', '**Cartório.** Os documentos, assinados digitalmente, vão ao registro de imóveis para atualizar a matrícula.'] },
      { p: 'Se o sistema acusar inconsistência, ele notifica o interessado, que corrige e envia de novo. Depois da matrícula, atualize o cadastro do imóvel no Incra e confira se o [CAR](/car-cadastro-ambiental-rural) bate com a nova descrição.' },
    ] },
    { h2: 'Medir pelo GPS do celular não é georreferenciamento', blocos: [
      { p: 'Vale deixar claro, porque a confusão custa caro. Medir o pasto caminhando com o celular, ou marcando pontos no mapa, **não é georreferenciamento** e **não vale para o cartório nem para o Incra**. Faltam três coisas que a norma exige: o profissional habilitado e credenciado, a ART e a precisão posicional fixada pelo Incra.' },
      { tabela: { colunas: ['O que comparar', 'GPS do celular', 'Georreferenciamento'], linhas: [['Quem faz', 'Você mesmo', 'Profissional credenciado no Incra'], ['Precisão de referência', '9 m no Censo Agro do IBGE', 'Fixada pelo Incra, que cita 50 cm'], ['Vale no cartório', 'Não', 'Sim, com a certificação'], ['Para que serve', 'Lida: pasto, talhão, cerca', 'Matrícula, venda e partilha']], nota: 'Os 9 metros são o limite que o IBGE aceitou para o aparelho de coleta do Censo Agropecuário 2017: servem só de referência do que um aparelho móvel entrega.' } },
      { p: 'A medida do celular tem o seu lugar: dividir piquete, calcular adubo, conferir a área de um talhão e ter uma noção antes de chamar o profissional. O guia do [aplicativo para medir área rural](/aplicativo-para-medir-area-rural) mostra como fazer e o que esperar da precisão.' },
      { destaque: 'Este texto é informativo e não substitui advogado, engenheiro nem o cartório. Prazo e exigência mudam por decreto: confira o texto em vigor no Planalto e a orientação do registro de imóveis antes de fechar negócio.' },
    ] },
  ],
  noFinagro: { h2: 'O que o FINAGRO faz e o que ele não faz aqui', itens: [
    'O FINAGRO não faz georreferenciamento, não gera memorial descritivo e não envia nada ao Sigef. A área medida no app é para a lida, não para o cartório.',
    'A medição por GPS no celular dá área e perímetro de pastos e talhões, com até 100 áreas salvas no plano grátis.',
    'Na ficha da fazenda, a área declarada fica ao lado da área mapeada, e o app aponta quando as duas divergem.',
    'A tela Documentos guarda a matrícula, que fica sem validade, e o CCIR, o ITR e o CAR com número e data de validade. Os que vencem avisam antes: CAR com 90 dias, CCIR com 60 e ITR com 45.',
    'O custo do profissional entra como despesa, e as parcelas ficam em contas a pagar, no fluxo de caixa.',
  ] },
  cta: { forte: 'Papéis da terra guardados e pastos medidos para a lida.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre georreferenciamento rural',
  faq: [
    ['Georreferenciamento rural é obrigatório?', 'Depende do ato. Para desmembrar, parcelar ou remembrar, a Lei 6.015/1973, art. 176, § 3º, já pede o memorial georreferenciado, sem data. Para transferir o imóvel, o decreto em vigor fixou a exigência a partir de 21 de outubro de 2029. Confirme no registro de imóveis da sua comarca.'],
    ['Qual é o prazo do georreferenciamento rural?', 'Para a transferência do imóvel, o Decreto 4.449/2002, na redação do Decreto 12.689/2025, fixa a exigência a partir de 21 de outubro de 2029. Para desmembrar, parcelar ou remembrar, a lei não traz data. As páginas do Incra ainda mostram prazos antigos por faixa de área: confirme no cartório antes de qualquer ato.'],
    ['Quem pode fazer georreferenciamento rural?', 'Profissional habilitado em conselho regional profissional e credenciado no Incra, com Anotação de Responsabilidade Técnica. A relação de credenciados de cada estado é pública e fica no Sigef, o sistema do Incra.'],
    ['Posso fazer o georreferenciamento com o celular?', 'Não. A medida do GPS do celular serve para a lida, como dividir pasto e conferir talhão. O georreferenciamento exige profissional credenciado, ART e a precisão da norma do Incra, e só ele recebe a certificação que o cartório aceita.'],
    ['O que é a certificação do Incra?', 'É a garantia, dada só pelo Incra, de que os limites do imóvel não se sobrepõem a outros do cadastro e de que o levantamento seguiu a norma técnica. Ela sai pelo Sigef e não reconhece a propriedade: quem prova a propriedade é a matrícula.'],
  ],
  fontes: [
    { nome: 'Decreto 4.449/2002, arts. 9º e 10 (texto em vigor)', url: D4449 },
    { nome: 'Decreto 12.689/2025, que fixou a data de 21 de outubro de 2029', url: D12689 },
    { nome: 'Lei 6.015/1973, arts. 176 e 225, com a Lei 10.267/2001 e a Lei 13.838/2019', url: L6015 },
    { nome: 'Incra, Certificação de imóveis rurais e Sigef', url: CERT },
    { nome: 'Incra, perguntas frequentes sobre georreferenciamento', url: FAQ },
  ],
  relacionados: ['aplicativo-para-medir-area-rural', 'ccir', 'car-cadastro-ambiental-rural'],
};
