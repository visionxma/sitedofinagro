// Consultas-alvo: "calendário de vacinação bovina", "vacinação brucelose", "vacina brucelose bezerra idade", "vacina aftosa 2026",
// "controle de vacinas do gado", "quais vacinas o gado precisa" (colheita de 08/10/2026). Obrigação (MAPA, estados) separada de
// recomendação técnica (Embrapa); cada afirmação de regra tem trecho oficial.
const BRU1 = 'https://www.gov.br/agricultura/pt-br/assuntos/sanidade-animal-e-vegetal/saude-animal/programas-de-saude-animal/pncebt/arquivos/vacinacao-contra-brucelose';
const BRU2 = 'https://www.gov.br/agricultura/pt-br/assuntos/sanidade-animal-e-vegetal/saude-animal/programas-de-saude-animal/pncebt/controle-e-erradicacao-da-brucelose-e-tuberculose-pncebt';
const IN10 = 'https://www.gov.br/agricultura/pt-br/assuntos/sanidade-animal-e-vegetal/saude-animal/programas-de-saude-animal/pncebt/arquivos/1IN102017.pdf';
const SC = 'https://www.cidasc.sc.gov.br/defesasanitariaanimal/defesa-sanitaria-animal-2/';
const IMA = 'https://www.ima.mg.gov.br/defesa-animal/programas-sanitarios/brucelose-e-tuberculose';
const MAPA_AFTOSA = 'https://www.gov.br/agricultura/pt-br/assuntos/sanidade-animal-e-vegetal/saude-animal/programas-de-saude-animal/febre-aftosa';
const MS = 'https://www.iagro.ms.gov.br/iagro-estabelece-prazo-para-atualizacao-cadastral-e-declaracao-de-rebanhos-em-ms/';
const CFMV = 'https://www.cfmv.gov.br/mapa-reconhece-nacionalmente-16-estados-e-o-distrito-federal-como-areas-livres-de-febre-aftosa-sem-vacinacao/comunicacao/noticias/2024/03/27/';
const SP_OMSA = 'https://www.defesa.agricultura.sp.gov.br/noticias/2025/sanidade-animal-omsa-reconhece-o-brasil-como-zona-livre-de-febre-aftosa-sem-vacinacao,2285.html';
const PR_AFTOSA = 'https://www.agricultura.pr.gov.br/Noticia/Com-o-Brasil-reconhecido-como-area-livre-de-febre-aftosa-transito-animal-passa-por-mudancas';
const AP_RAIVA = 'https://diagro.portal.ap.gov.br/pagina/defesa-animal/raiva-dos-herbivoros';
const PR_RAIVA = 'https://www.adapar.pr.gov.br/Noticia/Portaria-da-Adapar-estabelece-vacinacao-de-herbivoros-contra-raiva-em-30-cidades-do-Oeste';
const EMB = 'https://old.cnpgc.embrapa.br/publicacoes/naoseriadas/cronograma.html';

export const provas = [
  { afirmacao: 'a vacinação contra brucelose é obrigatória em todas as fêmeas bovinas e bubalinas de 3 a 8 meses', trecho: 'É obrigatória a vacinação de todas as fêmeas bovina e bubalina, de três a oito meses de idade, contra a brucelose', url: BRU2 },
  { afirmacao: 'a IN SDA 10/2017 manda vacinar as fêmeas de 3 a 8 meses com dose única da B19', trecho: 'É obrigatória a vacinação de todas as fêmeas das espécies bovina e bubalina, na faixa etária de três a oito meses, utilizando-se dose única de vacina viva liofilizada', url: IN10 },
  { afirmacao: 'o regulamento do PNCEBT prevê a B19, substituível pela RB51 na espécie bovina', trecho: 'podendo ser substituída pela vacina contra brucelose não indutora de anticorpos aglutinantes, amostra RB51, na espécie bovina', url: BRU1 },
  { afirmacao: 'a B19 é proibida em fêmeas com mais de 8 meses', trecho: 'É proibida a utilização da vacina B19 em fêmeas com idade superior a oito meses', url: IN10 },
  { afirmacao: 'bezerras não vacinadas na idade regularizam a situação com a RB51', trecho: 'Bezerras não vacinadas dos 3 a 8 meses de idade deverão ter sua situação vacinal regularizada, mediante a utilização da amostra RB51', url: BRU1 },
  { afirmacao: 'a fêmea vacinada de 3 a 8 meses é marcada com ferro candente ou nitrogênio líquido, no lado esquerdo da face', trecho: 'As fêmeas vacinadas de 3 a 8 meses devem, obrigatoriamente, ser marcadas com ferro candente ou nitrogênio líquido, no lado esquerdo da face', url: BRU1 },
  { afirmacao: 'a marca da B19 é o algarismo final do ano da vacinação', trecho: 'Fêmeas vacinadas com a vacina B19 deverão ser marcadas com o algarismo final do ano de vacinação', url: BRU1 },
  { afirmacao: 'a marca da RB51 é a letra V', trecho: 'Fêmeas vacinadas com a amostra RB51 deverão ser marcadas com um V', url: BRU1 },
  { afirmacao: 'a vacinação responde a médico-veterinário cadastrado no serviço veterinário estadual', trecho: 'A vacinação deve ser realizada sob a responsabilidade técnica de médico veterinário cadastrado pelo serviço veterinário estadual', url: BRU2 },
  { afirmacao: 'a GTA de bovinos e bubalinos exige comprovação da vacina de brucelose na origem', trecho: 'A emissão de GTA para trânsito de bovinos ou bubalinos, qualquer que seja a finalidade, fica condicionada à comprovação de vacinação obrigatória contra a brucelose no estabelecimento de criação de origem dos animais', url: BRU2 },
  { afirmacao: 'o trânsito entre estados e eventos exigem exames negativos', trecho: 'a exigência de exames negativos para trânsito interestadual e para participação de animais em eventos pecuários', url: BRU2 },
  { afirmacao: 'em Minas Gerais a vacina é viva e só veterinário cadastrado ou vacinador auxiliar sob sua responsabilidade aplica', trecho: 'somente o médico veterinário cadastrado no IMA ou vacinador auxiliar, treinado e sob a responsabilidade desse profissional, estão autorizados a aplicá-la', url: IMA },
  { afirmacao: 'em Santa Catarina só se autoriza a vacina RB51 contra brucelose', trecho: 'É autorizada a vacinação para brucelose de rebanhos bovinos em Santa Catarina, apenas utilizando a vacina com amostra RB51', url: SC },
  { afirmacao: 'a estratégia nacional contra a aftosa é manter zonas livres, conforme a OMSA', trecho: 'O PNEFA tem como estratégia principal a manutenção de zonas livres da doença, de acordo com as diretrizes estabelecidas pela Organização Mundial de Saúde Animal', url: MAPA_AFTOSA },
  { afirmacao: 'a Portaria MAPA nº 574/2023 suspendeu a vacinação contra a aftosa', trecho: 'Portaria do Ministério da Agricultura, Pecuária e Abastecimento (Mapa) nº 574, de 31 de março de 2023, que suspendeu a vacinação contra a febre aftosa', url: MS },
  { afirmacao: 'a Portaria MAPA nº 665 proíbe armazenar, vender e usar vacina contra aftosa nas unidades reconhecidas', trecho: 'A Portaria nº 665 foi publicada na segunda-feira (25) e passa a valer a partir de 2 de maio e ainda proíbe o armazenamento, a comercialização e o uso de vacinas contra a febre aftosa', url: CFMV },
  { afirmacao: 'a OMSA reconheceu o Brasil como zona livre de aftosa sem vacinação em 29 de maio de 2025', trecho: 'dia 29 de maio, em cerimônia realizada em Paris, na França, o Brasil, incluindo o Estado de São Paulo, como zona livre de Febre Aftosa sem vacinação', url: SP_OMSA },
  { afirmacao: 'o Brasil é oficialmente território livre de aftosa sem vacinação', trecho: 'O Brasil é oficialmente um território livre de febre aftosa sem vacinação', url: PR_AFTOSA },
  { afirmacao: 'cerca de 244 milhões de animais não precisam mais ser vacinados contra aftosa', trecho: 'Segundo o Mapa, aproximadamente 244 milhões de animais não precisarão ser vacinados', url: PR_AFTOSA },
  { afirmacao: 'toda movimentação segue com GTA e documentos sanitários mesmo com o país livre', trecho: 'toda movimentação de animais deve estar acompanhada da Guia de Trânsito Animal e dos demais documentos sanitários exigidos', url: PR_AFTOSA },
  { afirmacao: 'no Amapá a vacina contra a raiva é voluntária, recomendada em área de agressão de morcego e obrigatória com foco', trecho: 'A vacinação dos herbívoros é de adesão voluntária, porém recomendada em locais com índice elevado de agressões de morcegos em animais e torna-se obrigatória quando da ocorrência de foco da doença', url: AP_RAIVA },
  { afirmacao: 'no Amapá a vacina vale para bovinos, bubalinos, equinos, asininos e muares a partir de 3 meses', trecho: 'em todos os bovinos, bubalinos, equinos, asininos e muares a partir de 3 meses de idade', url: AP_RAIVA },
  { afirmacao: 'no Amapá animais vacinados pela primeira vez precisam de reforço após 30 dias e a revacinação é a cada 12 meses', trecho: 'Animais vacinados pela primeira vez precisam de uma dose de reforço após 30 dias da primeira', url: AP_RAIVA },
  { afirmacao: 'no Amapá a revacinação do rebanho é a cada 12 meses', trecho: 'A revacinação do rebanho deve ser a cada 12 meses', url: AP_RAIVA },
  { afirmacao: 'no Amapá o proprietário comunica a vacinação à DIAGRO em até 15 dias', trecho: 'A aplicação da vacina é de responsabilidade do proprietário, que deverá comunicar a DIAGRO em até 15 dias após vacinação', url: AP_RAIVA },
  { afirmacao: 'no Paraná, a Portaria Adapar 368/2025 tornou obrigatória a vacina contra raiva em herbívoros de 3 meses em diante em municípios do Oeste', trecho: 'oficializada pela portaria nº 368/2025 da Agência de Defesa Agropecuária do Paraná (Adapar), abrange herbívoros domésticos com idade a partir de três meses', url: PR_RAIVA },
  { afirmacao: 'no Paraná os municípios foram escolhidos pela quantidade de focos', trecho: 'a escolha dos municípios considera fatores como a quantidade de focos registrados nos últimos anos', url: PR_RAIVA },
  { afirmacao: 'em Minas Gerais, ao atualizar o rebanho o produtor pode informar a vacinação contra raiva dos herbívoros', trecho: 'Ao atualizar os dados de seu rebanho é possível informar se houve vacinação de bovinos, bubalinos, equídeos, caprinos e ovinos contra raiva dos herbívoros', url: 'https://www.mg.gov.br/servico/atualizar-dados-de-rebanhos' },
  { afirmacao: 'os testes do PNCEBT incluem machos de 8 meses ou mais destinados à reprodução', trecho: 'Machos com idade igual ou superior a 8 meses de idade, destinados à reprodução', url: BRU2 },
  { afirmacao: 'a Embrapa recomenda cronograma sanitário adaptado pelo veterinário', trecho: 'É importante o acompanhamento do cronograma sanitário e reprodutivo, seguindo sempre as recomendações de um médico-veterinário que fará as adaptações necessárias', url: EMB },
  { afirmacao: 'a Embrapa recomenda duas doses de vacina contra carbúnculo sintomático, a primeira entre 4 e 6 meses', trecho: '1ª dose: 4 - 6 meses de idade. 2ª dose: 6 meses após a primeira dose Vacina contra botulismo', url: EMB },
  { afirmacao: 'a Embrapa recomenda botulismo com a primeira dose no 4º mês, a segunda 40 dias depois e repetição anual', trecho: 'Vacina contra botulismo 1ª dose: 4º mês de idade. 2ª dose: 40 dias após a primeira dose. Repetir anualmente', url: EMB },
  { afirmacao: 'a Embrapa recomenda vacina contra raiva a partir do 4º mês, repetida todo ano em áreas endêmicas', trecho: 'Vacina contra a raiva A partir do 4º mês de idade. Repetir anualmente (áreas endêmicas)', url: EMB },
  { afirmacao: 'a Embrapa recomenda vacinar contra leptospirose conforme o sorotipo da região', trecho: 'Leptospirose Vacinar todos os animais conforme sorotipo prevalente na região', url: EMB },
  { afirmacao: 'a Embrapa recomenda vacinar vacas contra IBR e BVD 60 dias antes da monta', trecho: 'Rinotraqueíte infecciosa bovina (IBR) Vacinar vacas 60 dias antes da monta. Diarréia viral bovina(BVD) Vacinar vacas 60 dias antes da monta', url: EMB },
];

export default {
  slug: 'calendario-de-vacinacao-bovina',
  grupo: 'corte',
  tipo: 'guia',
  curto: 'Vacinação bovina',
  resumo: 'O que é obrigatório e o que é recomendação.',
  title: 'Calendário de vacinação bovina: obrigatórias e recomendadas',
  description: 'Calendário de vacinação bovina: brucelose das 3 aos 8 meses é obrigatória, aftosa não tem mais vacina e as outras são recomendação do veterinário.',
  h1: 'Calendário de vacinação bovina: o que é obrigatório e o que é recomendação',
  pergunta: 'Quais vacinas o gado precisa tomar?',
  resposta: 'Pela norma federal, a vacina obrigatória do gado é a de brucelose, nas bezerras de 3 a 8 meses. A aftosa não tem mais vacinação, porque o Brasil é livre da doença sem vacina. A raiva depende do estado: é obrigatória onde há foco ou portaria. As demais, como clostridioses, são recomendação do veterinário.',
  tela: 'animais',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'O calendário em uma tabela', blocos: [
      { p: 'Obrigação vem de norma do Ministério da Agricultura e do estado. Recomendação é o que a Embrapa e o veterinário indicam para proteger o rebanho. Misturar as duas é o erro mais comum, então a tabela separa.' },
      { tabela: { colunas: ['Quem e quando', 'Vacina', 'Como', 'Situação'], linhas: [
        ['Bezerra, 3 a 8 meses', 'Brucelose', 'Dose única, B19 ou RB51', 'Obrigatória'],
        ['Todos, a partir dos 3 meses', 'Raiva dos herbívoros', 'Reforço em 30 dias na 1ª vez, depois a cada 12 meses', 'Obrigatória só onde há foco ou portaria'],
        ['Qualquer idade', 'Febre aftosa', 'Sem vacinação no Brasil', 'Vacina proibida onde a Portaria 665 vale'],
        ['Bezerro, 4 a 6 meses', 'Clostridioses (carbúnculo sintomático)', '2ª dose 6 meses depois', 'Recomendação (Embrapa)'],
        ['Bezerro, a partir do 4º mês', 'Botulismo', '2ª dose 40 dias depois, repete todo ano', 'Recomendação (Embrapa)'],
        ['Vacas, 60 dias antes da monta', 'IBR e BVD', 'Dose antes da monta', 'Recomendação (Embrapa)'],
        ['Todos', 'Leptospirose', 'Conforme o sorotipo da região', 'Recomendação (Embrapa)'],
      ], nota: 'Obrigações: PNCEBT (Ministério da Agricultura) e defesa de cada estado. Recomendações: cronograma de referência da Embrapa Gado de Corte, que o veterinário adapta à propriedade.' } },
    ] },
    { h2: 'Brucelose: a vacina obrigatória do PNCEBT', blocos: [
      { p: 'O PNCEBT (Programa Nacional de Controle e Erradicação da Brucelose e da Tuberculose) manda vacinar todas as fêmeas bovinas e bubalinas de 3 a 8 meses de idade. Macho não entra. A dose é única, com a vacina B19, e na espécie bovina ela pode ser trocada pela RB51.' },
      { ul: [
        '**Quem aplica:** a vacinação fica sob a responsabilidade de médico-veterinário cadastrado no serviço veterinário do estado. Em Minas Gerais, só ele ou um vacinador auxiliar treinado, sob a responsabilidade dele, pode aplicar, porque a vacina é viva.',
        '**Marcação:** a bezerra vacinada leva marca a ferro ou nitrogênio líquido no lado esquerdo da face. Com a B19, o algarismo final do ano da vacina. Com a RB51, a letra V.',
        '**Passou da idade:** a B19 é proibida em fêmeas com mais de 8 meses. Bezerra que não foi vacinada na idade regulariza a situação com a RB51.',
        '**Santa Catarina:** o estado autoriza a vacina de brucelose apenas com a RB51.',
      ] },
      { p: 'Esse registro pesa na venda: a GTA de bovinos e bubalinos, para qualquer finalidade, fica condicionada à comprovação da vacinação obrigatória no estabelecimento de origem. Para o trânsito entre estados e para eventos, o programa ainda exige exames negativos. Veja o caminho em [como emitir GTA](/como-emitir-gta).' },
    ] },
    { h2: 'Febre aftosa em 2026: não tem mais vacina', blocos: [
      { p: 'A Portaria nº 574, de 2023, do Ministério da Agricultura, suspendeu a vacinação contra a febre aftosa. Em 29 de maio de 2025, a OMSA (Organização Mundial de Saúde Animal) reconheceu o Brasil como zona livre de aftosa sem vacinação. Segundo o Ministério, cerca de 244 milhões de animais deixaram de precisar da vacina.' },
      { p: 'Nos estados reconhecidos pela Portaria nº 665, o armazenamento, a venda e o uso da vacina contra aftosa são proibidos. Com o país livre da doença sem vacinação, a campanha de vacinar contra aftosa acabou: calendário antigo que ainda traz a aftosa está desatualizado.' },
      { p: 'O fim da vacina não dispensa papel. A defesa lembra que toda movimentação de animais continua precisando da GTA e dos demais documentos sanitários, e a [declaração de rebanho](/declaracao-de-rebanho) segue obrigatória.' },
    ] },
    { h2: 'Raiva dos herbívoros: depende de foco e de município', blocos: [
      { p: 'A regra da raiva dos herbívoros muda de estado para estado e até de município. No Amapá, por exemplo, a vacinação é voluntária, recomendada onde há muita agressão de morcego aos animais, e obrigatória quando há foco da doença. Vale para bovinos, bubalinos e equídeos a partir de 3 meses de idade.' },
      { p: 'No Paraná, a Portaria da Adapar nº 368, de 2025, tornou a vacina obrigatória, a partir dos 3 meses de idade, em municípios do Oeste escolhidos pela quantidade de focos. Em Minas Gerais, quem atualiza os dados do rebanho pode informar na mesma hora a vacinação contra a raiva dos herbívoros.' },
      { ul: [
        'Primeira vez: 2 doses, com reforço 30 dias depois (regra do Amapá).',
        'Depois: uma dose por ano, a cada 12 meses.',
        'Onde a vacina é obrigatória, o produtor comunica a defesa. No Amapá, em até 15 dias depois de vacinar.',
      ] },
    ] },
    { h2: 'O que é recomendação técnica e depende do veterinário', blocos: [
      { p: 'Clostridioses, botulismo, leptospirose, IBR e BVD não têm obrigação nacional. A Embrapa Gado de Corte publica um cronograma de referência: carbúnculo sintomático com a 1ª dose aos 4 a 6 meses e a 2ª seis meses depois; botulismo com a 1ª dose no 4º mês, a 2ª 40 dias depois, repetindo todo ano; IBR e BVD nas vacas 60 dias antes da monta; leptospirose conforme o sorotipo da região.' },
      { p: 'A própria Embrapa diz que o cronograma deve ser acompanhado com um médico-veterinário, que adapta ao sistema de produção de cada propriedade. A região, o histórico de doença e o tipo de criação mudam o calendário.' },
      { destaque: 'A obrigação e o prazo são da defesa agropecuária do seu estado, e mudam. Este texto é informativo e não substitui o veterinário nem a defesa agropecuária: confirme a regra local antes de vacinar ou de marcar o embarque.' },
    ] },
  ],
  noFinagro: { h2: 'Controle de vacinas no FINAGRO', itens: [
    'Cada vacina fica na ficha do animal ou do lote, com a data, para você saber o que já foi feito.',
    'O app avisa quando há bezerras na idade da vacina de brucelose sem a vacina anotada.',
    'A tela "O que vence" lista as vacinas e as declarações obrigatórias do estado do produtor, para o que ele cria.',
    'O registro das GTAs emitidas avisa 1 dia antes do vencimento. O app não emite a GTA nem envia nada à defesa agropecuária.',
  ] },
  cta: { forte: 'Vacina anotada e bezerra na idade sem esquecimento.', texto: 'Grátis até 1.000 animais com ficha, sem cartão.' },
  faqTitulo: 'Perguntas sobre vacinação do gado',
  faq: [
    ['Com que idade se vacina a bezerra contra brucelose?', 'Dos 3 aos 8 meses de idade. A vacinação é obrigatória em todas as fêmeas bovinas e bubalinas, com dose única, e quem aplica é médico-veterinário cadastrado.'],
    ['Ainda precisa vacinar contra febre aftosa em 2026?', 'Não. A vacinação foi suspensa e o Brasil foi reconhecido, em 2025, como zona livre de aftosa sem vacinação. Nos estados da Portaria 665 a vacina é até proibida.'],
    ['A vacina contra raiva é obrigatória?', 'Depende do estado e do município. Em geral é voluntária e recomendada onde há morcego hematófago, e vira obrigatória quando há foco ou quando a defesa publica portaria, como no Oeste do Paraná.'],
    ['O macho precisa tomar a vacina de brucelose?', 'Não. A vacinação obrigatória do PNCEBT é só para fêmeas bovinas e bubalinas de 3 a 8 meses. O macho entra no programa pelos exames de trânsito, quando exigidos.'],
    ['Como controlar as vacinas do rebanho?', 'Anote em cada vacina a data, o animal ou lote, o nome da vacina e a nota fiscal. Isso serve para a defesa, para a GTA e para o veterinário. Pode ser caderno, planilha ou o registro de sanidade do FINAGRO.'],
  ],
  fontes: [
    { nome: 'Ministério da Agricultura, vacinação contra brucelose', url: BRU1 },
    { nome: 'Ministério da Agricultura, PNCEBT', url: BRU2 },
    { nome: 'Ministério da Agricultura, Instrução Normativa SDA nº 10/2017', url: IN10 },
    { nome: 'Cidasc (SC), defesa sanitária animal', url: SC },
    { nome: 'IMA (MG), brucelose e tuberculose', url: IMA },
    { nome: 'Ministério da Agricultura, Programa Nacional de Vigilância para Febre Aftosa', url: MAPA_AFTOSA },
    { nome: 'Iagro (MS), prazo de atualização cadastral e declaração de rebanhos', url: MS },
    { nome: 'CFMV, Portaria Mapa nº 665 e áreas livres de aftosa', url: CFMV },
    { nome: 'Defesa Agropecuária de São Paulo, OMSA reconhece o Brasil', url: SP_OMSA },
    { nome: 'Governo do Paraná, Brasil livre de aftosa e trânsito animal', url: PR_AFTOSA },
    { nome: 'DIAGRO (AP), raiva dos herbívoros', url: AP_RAIVA },
    { nome: 'Adapar (PR), vacinação contra raiva no Oeste', url: PR_RAIVA },
    { nome: 'Embrapa Gado de Corte, cronograma sanitário e reprodutivo para bovinos de corte', url: EMB },
  ],
  relacionados: ['como-emitir-gta', 'declaracao-de-rebanho', 'rastreabilidade-bovina'],
};
