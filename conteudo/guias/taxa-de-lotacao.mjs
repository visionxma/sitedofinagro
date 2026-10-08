// Consultas-alvo: "taxa de lotação", "taxa de lotação de pastagem", "unidade animal" e
// "como aumentar a taxa de lotação em pastagem".
export const provas = [
  { afirmacao: 'taxa de lotação é expressa em unidades animais por hectare e uma UA corresponde a 450 kg de peso vivo', trecho: 'Taxa de lotação animal é o número de unidades animais (UA) por unidade de área (ha), considerando-se que uma unidade animal corresponde a 450 kg de peso vivo', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/41124/1/Documentos46.pdf' },
  { afirmacao: 'capacidade de suporte é a lotação máxima que mantém a produção do pasto', trecho: 'Capacidade de suporte é a lotação máxima capaz de possibilitar a manutenção do nível de produção do pasto', url: 'https://www.infoteca.cnptia.embrapa.br/bitstream/doc/318251/1/Usodeanimaisnaavaliacao.pdf' },
  { afirmacao: 'a produção de forragem muda com a estação e as condições do tempo', trecho: 'De modo geral, a produção é maior no período de verão, quando as condições de temperatura, luminosidade e precipitação são favoráveis ao desenvolvimento das plantas', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/41124/1/Documentos46.pdf' },
];

export default {
  slug: 'taxa-de-lotacao',
  grupo: 'corte',
  tipo: 'calculadora',
  curto: 'Taxa de lotação',
  resumo: 'Converta cabeças e peso em UA por hectare.',
  title: 'Taxa de lotação: calcule UA por hectare da pastagem',
  description: 'Informe cabeças, peso médio e hectares para calcular unidades animais, UA por hectare e cabeças por hectare, sem inventar lotação ideal para o pasto.',
  h1: 'Taxa de lotação: quantas unidades animais há por hectare',
  pergunta: 'Como calcular a taxa de lotação de uma pastagem?',
  resposta: 'Multiplique o número de cabeças pelo peso médio, divida por 450 para achar as unidades animais e divida novamente pela área em hectares. Cinquenta cabeças de 360 kg somam 40 UA; em 40 hectares, a taxa é 1 UA/ha e 1,25 cabeça/ha. Isso mede a lotação presente, não a capacidade do pasto.',
  tela: 'lotes',
  atualizado: '2026-10-08',
  calc: {
    titulo: 'Calcule a taxa de lotação',
    campos: [
      { id: 'cabecas', rotulo: 'Cabeças no pasto', valor: 50, min: 1, passo: 1 },
      { id: 'pesoMedio', rotulo: 'Peso médio (kg)', valor: 360, min: 1, passo: 1 },
      { id: 'area', rotulo: 'Área de pastagem (ha)', valor: 40, min: 0.01, passo: 0.1 },
    ],
    saidas: [
      { id: 'uaHa', rotulo: 'UA por hectare', casas: 2 },
      { id: 'uaTotal', rotulo: 'unidades animais no total', casas: 2 },
      { id: 'cabecasHa', rotulo: 'cabeças por hectare', casas: 2 },
    ],
    calcular: (v) => {
      const uaTotal = v.cabecas * v.pesoMedio / 450;
      return { uaHa: uaTotal / v.area, uaTotal, cabecasHa: v.cabecas / v.area };
    },
    nota: 'Uma unidade animal (UA) corresponde a 450 kg de peso vivo. A conta mostra a lotação atual, não recomenda quantos animais o pasto suporta.',
    exemplos: [
      { entrada: { cabecas: 50, pesoMedio: 360, area: 40 }, saida: { uaHa: 1, uaTotal: 40, cabecasHa: 1.25 } },
      { entrada: { cabecas: 72, pesoMedio: 375, area: 48 }, saida: { uaHa: 1.25, uaTotal: 60, cabecasHa: 1.5 } },
    ],
  },
  secoes: [
    { h2: 'Como fazer a conta da taxa de lotação', blocos: [
      { p: 'A unidade animal (UA) coloca animais de pesos diferentes na mesma base. Conforme a Embrapa, **1 UA corresponde a 450 kg de peso vivo**. Primeiro some o peso vivo do grupo; depois divida por 450.' },
      { ol: ['Multiplique as cabeças pelo peso médio. Cinquenta × 360 kg = 18.000 kg de peso vivo.', 'Divida o peso total por 450. 18.000 ÷ 450 = 40 UA.', 'Divida as UA pela área usada pelo lote. 40 UA ÷ 40 ha = 1 UA/ha.', 'Calcule também cabeças por hectare. 50 ÷ 40 = 1,25 cabeça/ha.'] },
      { p: 'Atualize o peso médio. Se as mesmas 50 cabeças passarem de 360 kg para 450 kg, o número de cabeças não muda, mas a pressão em unidades animais aumenta. Por isso cabeça por hectare, sozinha, não permite comparar lotes de tamanhos corporais diferentes.' },
    ] },
    { h2: 'Lotação e capacidade de suporte são coisas diferentes', blocos: [
      { glossario: [['Taxa de lotação', 'Quantidade de peso animal mantida na área, normalmente expressa em UA por hectare.'], ['Capacidade de suporte', 'Lotação máxima capaz de manter o nível de produção do pasto nas condições avaliadas.'], ['Cabeças por hectare', 'Contagem de animais dividida pela área, sem corrigir o peso de cada cabeça.']] },
      { p: 'A calculadora responde **quanto gado está na área**. Ela não responde quanto aquela pastagem aguenta. Para chegar à capacidade de suporte, é preciso observar produção e sobra de forragem, solo, clima, espécie forrageira, manejo e desempenho dos animais.' },
      { destaque: 'Uma taxa de 1 UA/ha pode sobrar em um pasto e faltar em outro. Não existe número ideal sem medir a área.' },
    ] },
    { h2: 'Por que a taxa muda entre águas e seca', blocos: [
      { p: 'A capacidade de suporte varia com o clima e a estação do ano. Nas águas, a pastagem costuma responder ao crescimento, ao solo e ao manejo de um jeito; na seca, a produção e a qualidade da forragem seguem outra condição. A lotação precisa acompanhar o pasto disponível, não o calendário sozinho.' },
      { p: 'Também mudam o peso do lote, a entrada e a saída de animais, a área realmente aberta ao pastejo e o tempo de ocupação. Uma fazenda pode ter a mesma área total e uma área útil menor porque um piquete está vedado, em reforma ou reservado.' },
      { p: 'Registre a conta por período. Use a data, o lote, a área de fato usada, o peso médio e a taxa encontrada. Assim, a comparação entre águas e seca mostra o que ocorreu naquela fazenda, sem copiar uma faixa pronta de outra região.' },
    ] },
    { h2: 'Como aumentar a lotação sem apertar o pasto', blocos: [
      { p: 'Aumentar a taxa de lotação não começa colocando mais cabeças. Primeiro vem o diagnóstico da forragem e do solo. Depois entram correção, adubação quando recomendada, escolha de forrageira, água, divisão de áreas e ajuste do pastejo. O plano precisa ser feito com assistência de engenheiro agrônomo ou zootecnista.' },
      { ul: ['Meça a área útil de cada pasto, sem misturar reserva, estrada e curral.', 'Conte entrada, saída e movimentação de cabeças por lote.', 'Pese uma amostra representativa ou use pesagens recentes para o peso médio.', 'Acompanhe altura, cobertura e sobra do pasto antes de aumentar a carga.', 'Refaça a conta quando o lote ganhar peso ou mudar de piquete.'] },
      { p: 'O objetivo não é buscar o maior número de UA por hectare a qualquer custo. É equilibrar alimento, ganho por animal, produção por área e persistência da pastagem. Sem esse acompanhamento, mais animais podem apenas dividir a mesma forragem e acelerar a degradação.' },
    ] },
    { h2: 'Erros que mudam o resultado', blocos: [
      { tabela: { colunas: ['Erro', 'Efeito na conta', 'Correção'], linhas: [['Usar peso antigo', 'Subestima ou aumenta as UA', 'Atualize a média'], ['Usar área total', 'Dilui a lotação real', 'Use hectares pastejados'], ['Misturar categorias', 'Esconde diferença de peso', 'Calcule média ponderada'], ['Contar cabeças apenas', 'Não corrige porte', 'Converta para UA']], nota: 'A conta deve representar o lote e a área no mesmo período.' } },
      { p: 'Se houver categorias com pesos muito diferentes, some o peso de cada grupo. Exemplo: calcule vacas, novilhas e bezerros separadamente, some as UA e só então divida pela área comum. A média simples entre categorias pode distorcer o total.' },
    ] },
  ],
  noFinagro: { h2: 'Lote, peso e área no FINAGRO', itens: [
    'As fichas dos animais guardam peso e histórico de pesagens.',
    'Os lotes organizam as cabeças que estão juntas no manejo.',
    'A área pode ser medida pelo Sistema de Posicionamento Global (GPS) do celular, com até 100 áreas no plano grátis.',
    'As tarefas ajudam a programar a conferência do pasto e a mudança de lote.',
  ] },
  cta: { forte: 'Tenha cabeça, peso e área no mesmo controle.', texto: 'FINAGRO grátis, sem cartão, para até 1.000 animais com ficha.' },
  faqTitulo: 'Perguntas sobre taxa de lotação',
  faq: [
    ['O que é uma unidade animal?', 'É uma referência equivalente a 450 kg de peso vivo, usada para comparar a carga de animais com pesos diferentes.'],
    ['Como calcular UA por hectare?', 'Multiplique as cabeças pelo peso médio, divida por 450 e divida o total de UA pela área de pastagem em hectares.'],
    ['Taxa de lotação é igual a cabeças por hectare?', 'Não. Cabeças por hectare ignora o peso. UA por hectare corrige a lotação pelo peso vivo médio dos animais.'],
    ['Qual é a taxa de lotação ideal?', 'Não existe um número único. A capacidade muda com solo, clima, estação, forrageira, manejo e meta de desempenho; meça o pasto e ajuste com assistência técnica.'],
    ['Por que recalcular durante o ano?', 'Porque os animais ganham peso, lotes mudam de área e a capacidade da pastagem varia entre épocas e condições de manejo.'],
  ],
  fontes: [
    { nome: 'Embrapa Gado de Leite, Manejo de pastagens tropicais', url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/41124/1/Documentos46.pdf' },
    { nome: 'Embrapa Gado de Corte, uso de animais na avaliação de forrageiras', url: 'https://www.infoteca.cnptia.embrapa.br/bitstream/doc/318251/1/Usodeanimaisnaavaliacao.pdf' },
  ],
  relacionados: ['controle-de-rebanho', 'calculadora-gmd', 'caderno-de-campo'],
};
