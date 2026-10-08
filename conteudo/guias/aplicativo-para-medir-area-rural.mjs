// Consulta-alvo: "aplicativo para medir área rural" e "como medir uma área pelo celular".
export const provas = [
  { afirmacao: 'o posicionamento por satélite precisa de pelo menos quatro satélites visíveis', trecho: 'Para o cálculo dos primeiros quatro parâmetros, torna-se necessário um mínimo de 4 satélites visíveis', url: 'https://www.gov.br/aeb/pt-br/acoes-e-programas/aplicacoes-espaciais/navegacao' },
  { afirmacao: 'irregularidades e ruídos produzem erro na posição calculada', trecho: 'devido às irregularidades da superfície da Terra e ruídos diversos, a posição geográfica obtida contém erros', url: 'https://www.gov.br/aeb/pt-br/acoes-e-programas/aplicacoes-espaciais/navegacao' },
  { afirmacao: 'o IBGE aceitou limite de 9 m na coleta por dispositivo móvel', trecho: 'A precisão posicional estabelecida como limite máximo aceitável para a determinação das coordenadas pelo Dispositivo Móvel de Coleta (DMC) foi de 9 metros', url: 'https://www.ibge.gov.br/biblioteca/visualizacao/periodicos/3101/agro_2017_caracteristicas_gerais.pdf' },
  { afirmacao: 'vegetação, construções, montanhas e geometria dos satélites mudam a precisão', trecho: 'podendo variar em função das condições de rastreio, tal como obstruções presentes no local do tipo vegetação, alvenarias e montanhas', url: 'https://www.ibge.gov.br/biblioteca/visualizacao/periodicos/3101/agro_2017_caracteristicas_gerais.pdf' },
  { afirmacao: 'o georreferenciamento para o Incra exige responsável técnico', trecho: 'O detentor do imóvel rural deve contratar um responsável técnico para realizar a demarcação georreferenciada da sua área', url: 'https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/certificacao-imoveis' },
  { afirmacao: 'o profissional precisa estar habilitado e credenciado no Incra', trecho: 'O profissional deve estar habilitado em conselho regional profissional e credenciado junto ao Incra', url: 'https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/certificacao-imoveis' },
];

export default {
  slug: 'aplicativo-para-medir-area-rural',
  grupo: 'terra',
  tipo: 'guia',
  curto: 'App para medir área',
  resumo: 'Meça pasto e talhão pelo GPS do celular, até sem sinal.',
  title: 'Aplicativo para medir área rural pelo celular',
  description: 'Veja como medir pasto, terreno e talhão pelo GPS do celular no FINAGRO, caminhando o contorno ou marcando pontos, mesmo sem internet, e entenda o erro.',
  h1: 'Aplicativo para medir área rural pelo GPS do celular',
  pergunta: 'Como medir uma área de terra pelo celular?',
  resposta: 'No FINAGRO, abra Áreas e GPS, permita a localização e escolha entre marcar os pontos do contorno no mapa ou medir caminhando pela borda. Feche o polígono, confira a área e salve. No Android, o GPS mede sem internet; sem mapa baixado, o fundo pode ficar branco.',
  tela: 'inicio',
  atualizado: '2026-10-08',
  secoes: [
    { h2: 'Como o GPS do celular calcula a área', blocos: [
      { p: 'O sistema global de navegação por satélite, conhecido pela sigla **GNSS**, calcula a posição do aparelho a partir de sinais de satélites. A Agência Espacial Brasileira informa que são necessários pelo menos quatro satélites visíveis para calcular os primeiros parâmetros da posição.' },
      { p: 'O aplicativo junta os pontos de latitude e longitude em volta do pasto ou talhão, fecha um polígono e calcula a superfície dentro dele. No FINAGRO, a área aparece automaticamente em **m²**, **ha** ou **km²**, conforme o tamanho. Também dá para trocar a unidade depois.' },
      { p: 'Há dois jeitos no código atual: tocar no mapa para marcar os cantos do polígono ou usar **Medir caminhando**, que registra o trajeto pelo GPS, detecta vértices e sugere fechar quando você volta perto do ponto inicial.' },
    ] },
    { h2: 'Passo a passo para medir no FINAGRO', blocos: [
      { ol: ['No celular Android, abra o FINAGRO e entre em Áreas e GPS.', 'Autorize o acesso à localização e vá até a borda da área.', 'Para marcação manual, toque no mapa em cada mudança de direção. São necessários pelo menos três pontos.', 'Para medir andando, abra Mais opções, toque em Medir caminhando e percorra o contorno. Você pode pausar e retomar.', 'Ao chegar perto do início, aceite fechar o polígono ou toque em Finalizar medição.', 'Confira área, perímetro e lados, informe um nome e salve.'] },
      { p: 'Na caminhada, o FINAGRO mostra distância percorrida, quantidade de vértices e tempo. Ao terminar, ele calcula área, perímetro e comprimento dos lados. A área salva pode ficar ligada a uma propriedade cadastrada.' },
    ] },
    { h2: 'Funciona sem internet?', blocos: [
      { p: 'A **medição por GPS continua funcionando sem internet no aplicativo Android**. O FINAGRO salva o polígono primeiro no banco do aparelho. Quando a conexão volta, tenta enviar a área para a conta na nuvem.' },
      { p: 'O mapa de fundo é outra coisa. Se a região não estiver guardada no celular e você estiver sem sinal, o código avisa que a medição segue normal, mas o mapa pode aparecer em branco. O contorno e o cálculo não dependem dessa imagem.' },
      { destaque: 'No plano Campo, gratuito, a conta guarda até 100 áreas medidas por GPS.' },
    ] },
    { h2: 'Quanto o GPS do celular pode errar', blocos: [
      { p: 'Não existe um percentual fixo de erro para toda área. Como referência, o IBGE adotou **9 metros** como limite máximo aceitável para latitude e longitude no dispositivo móvel usado no Censo Agropecuário. Isso é erro de posição de cada ponto, não promessa de erro final da área.' },
      { p: 'O próprio IBGE explica que a precisão muda com vegetação, construções, montanhas, quantidade e geometria dos satélites, elevação e relação entre sinal e ruído. Um piquete pequeno sente mais um desvio de alguns metros do que uma área grande.' },
      { ul: ['Meça com céu aberto e longe de galpão, parede alta e mata fechada.', 'Espere a localização estabilizar antes de iniciar.', 'Caminhe devagar pelo contorno real, sem cortar curvas e cantos.', 'Volte ao ponto inicial para fechar o polígono.', 'Repita a medição quando o resultado parecer fora da realidade.'] },
    ] },
    { h2: 'Para que a medição serve e para que não serve', blocos: [
      { p: 'A área medida no celular ajuda a dividir pasto, estimar lotação, calcular quantidade de insumo pela dose por hectare, separar talhões e comparar custo por hectare. É uma medida prática de manejo e planejamento.' },
      { p: 'Ela **não substitui georreferenciamento para registro, desmembramento, compra e venda formal ou certificação no Incra**. O Incra manda contratar responsável técnico para a demarcação georreferenciada; o profissional precisa estar habilitado em conselho e credenciado no instituto.' },
      { destaque: 'Use o aplicativo para tocar a fazenda. Para mexer em matrícula, limite legal ou certificação, contrate profissional habilitado.' },
    ] },
  ],
  noFinagro: { h2: 'O que a medição do FINAGRO entrega', itens: [
    'Medição por pontos no mapa ou caminhando o contorno com o GPS do celular.',
    'Área em m², hectares ou km², além de perímetro e lados do polígono.',
    'Até 100 áreas salvas no plano Campo gratuito, sem cartão.',
    'Salvamento no aparelho sem internet e sincronização quando o sinal volta.',
  ] },
  cta: { forte: 'Meça o pasto pelo celular e guarde a área na fazenda.', texto: 'FINAGRO grátis no Android e no navegador, sem cartão.' },
  faqTitulo: 'Perguntas sobre medir área pelo celular',
  faq: [
    ['Qual aplicativo mede área rural pelo GPS?', 'O FINAGRO mede áreas no Android por pontos ou caminhada, mostra m², hectares e km² e guarda até 100 áreas no plano gratuito.'],
    ['Dá para medir terreno sem internet?', 'Sim, no aplicativo Android. O GPS e o salvamento local continuam funcionando; se o mapa da região não estiver guardado, o fundo pode aparecer em branco.'],
    ['Quanto o GPS do celular erra?', 'Não há percentual fixo. O IBGE usou limite de 9 metros para a posição em uma coleta móvel; tamanho, formato e condições do sinal mudam o erro final.'],
    ['Como melhorar a medição de área pelo celular?', 'Meça com céu aberto, espere o GPS estabilizar, caminhe devagar pelo contorno, marque todas as mudanças de direção e feche no ponto inicial.'],
    ['A medição do aplicativo vale para o Incra e o cartório?', 'Não substitui o georreferenciamento exigido para registro e certificação. Esse trabalho deve ser feito por profissional habilitado e credenciado no Incra.'],
  ],
  fontes: [
    { nome: 'Agência Espacial Brasileira, navegação por satélite', url: 'https://www.gov.br/aeb/pt-br/acoes-e-programas/aplicacoes-espaciais/navegacao' },
    { nome: 'IBGE, Censo Agropecuário 2017: características gerais', url: 'https://www.ibge.gov.br/biblioteca/visualizacao/periodicos/3101/agro_2017_caracteristicas_gerais.pdf' },
    { nome: 'Incra, certificação de imóvel rural', url: 'https://www.gov.br/incra/pt-br/assuntos/governanca-fundiaria/certificacao-imoveis' },
  ],
  relacionados: ['quantos-metros-tem-um-hectare', 'alqueire-em-hectare', 'tarefa-e-linha-de-terra'],
};
