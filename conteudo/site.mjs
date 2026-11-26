// Fonte única do site do FINAGRO: entidade, planos, perguntas e páginas.
// Daqui saem a tela (blocos gerados no HTML), o JSON-LD, o sitemap.xml, o robots.txt e o llms.txt
// (scripts/gerar.mjs). Texto duplicado diverge; por isso nada disto se escreve à mão em outro lugar.
//
// Planos: copiados do catálogo do sistema (FINAGRO/src/core/planos.js). Planos v3 (decisão de 13/11/2026, preços com o
// sim do Victor em 14/11/2026), conferidos no ramo planos-v3-lancamento-20261114 do app em 14/11/2026: Grátis, Produtor,
// Fazenda, Grande e Empresarial, com as funções avulsas. Se o catálogo mudar lá, muda aqui e roda `node scripts/gerar.mjs`.

export const SITE = 'https://finagro.app';
export const ATUALIZADO = '2026-10-08';

export const ENTIDADE = {
  nome: 'FINAGRO',
  frase: 'O FINAGRO é um aplicativo brasileiro de gestão rural, no celular e no computador, que reúne rebanho, lavoura, dinheiro e equipe da fazenda, com plano grátis para sempre e planos pagos a partir de R$ 29,90 por mês.',
  app: 'https://app.finagro.app/',
  android: 'https://play.google.com/store/apps/details?id=com.raykkony.fblogin',
  // App na App Store desde 31/10/2026 (conta VisionX CO, grátis, iOS 15.1 ou mais novo; conferido na API pública da
  // Apple em 09/11/2026). O botão "Baixar para iPhone", o Smart App Banner, o JSON-LD e o llms.txt leem daqui.
  ios: 'https://apps.apple.com/br/app/finagro/id6827268381',
  // APK do Android, página própria (10/11/2026, pedido do Victor): no lugar da Google Play, desativada. O Worker
  // finagro-apk (Cloudflare) serve sempre o arquivo da versão atual e os dados dela em latest.json. A página /android,
  // o menu, o rodapé, o JSON-LD, o llms.txt e os botões do celular Android leem daqui.
  // Android mínimo: minSdkVersion 24 (ramo no-ar do FINAGRO, Expo 54 + React Native 0.81.5) = Android 7.0.
  apk: {
    pagina: `${SITE}/android`,
    arquivo: 'https://finagro-apk.visionxma.workers.dev/finagro.apk',
    dados: 'https://finagro-apk.visionxma.workers.dev/latest.json',
    androidMinimo: '7.0',
    // Reserva da página /android: os dados do APK publicado, escritos no HTML para a página nascer certa mesmo se o
    // latest.json não responder (o script troca pelo latest.json quando ele responde). APK 1.2.13 (versionCode 51),
    // compilado e conferido em 10/11/2026. A cada versão nova publicada, atualizar aqui e rodar `node scripts/gerar.mjs`.
    reserva: { versao: '1.2.13', versionCode: 51, tamanhoBytes: 88856249, sha256: 'e7e4f82536f7ac3acaf7fd7227fd67300092fc862678b3a0b3ca5cbfa09cb408' },
  },
  instagram: 'https://www.instagram.com/finagro.app/',
  linkedin: 'https://www.linkedin.com/company/finagro-app/',
  // Ficha no diretório FindSaaS (no ar em 02/11/2026): entra no sameAs do app e no llms.txt.
  findsaas: 'https://www.findsaas.com.br/saas/finagro',
  privacidade: 'https://projeto.finagro.app/pol%C3%ADtica-de-privacidade',
  // Contato por WhatsApp da VisionX (15/10/2026): o número antigo (99984680391) caiu. Um número só, aqui; o rodapé de
  // todas as páginas e a chamada final da inicial leem daqui.
  whatsapp: {
    numero: '5599988557632',
    exibicao: '(99) 98855-7632',
    mensagem: 'Olá! Vim pelo site do FINAGRO e quero conversar sobre o aplicativo.',
  },
  logo: `${SITE}/icone-512.png`,
  imagem: `${SITE}/assets/og/finagro-og-20261114.png`,
  desenvolvedor: { nome: 'VisionX', url: 'https://visionxma.com/' },
  naoE: [
    'Não emite GTA: a guia é emitida no sistema da defesa agropecuária do estado; o FINAGRO registra as GTAs e lembra o vencimento.',
    'Não transmite o LCDPR à Receita: gera o arquivo no leiaute oficial com os lançamentos, e o contador completa e valida no programa da Receita.',
    'Não é rastreador de animal por coleira ou brinco eletrônico, nem balança conectada.',
    'Não é o Finagro da Colômbia (Fondo para el Financiamiento del Sector Agropecuario, fundo de crédito com sede em Bogotá) nem tem relação com ele; não é do governo nem de banco e não empresta dinheiro.',
  ],
};

// Os ids (campo, essencial, profissional, avancado) são os do app e não mudam; nome, preço, limite e o que inclui mudaram
// nos Planos v3. "pessoas" é quem acessa a conta ALÉM de você (o limite `usuarios` do app).
export const PLANOS = [
  { id: 'campo', nome: 'Grátis', para: 'Para começar e para quem cria pouco: dinheiro, vacinas, GTA e tarefas sem limite', mes: 0, ano: 0,
    itens: ['1 fazenda', 'Você e mais 1 pessoa', '50 animais com ficha', 'Lote sem limite (galpão, tanque, colmeia)', 'Dinheiro, vacinas, GTA e tarefas sem limite', '3 áreas medidas no GPS', '5 perguntas por dia ao FINAGRO AI', '10 fotos de animais'] },
  { id: 'essencial', nome: 'Produtor', para: 'Para quem vive da criação e quer saber quanto cada animal rende', mes: 29.9, ano: 299,
    itens: ['2 fazendas', 'Você e mais 3 pessoas', '300 animais com ficha', 'Reprodução e índices do rebanho', 'Estoque, lavoura e importar KMZ', '30 áreas no GPS', '30 perguntas por dia ao FINAGRO AI', 'Suporte pelo WhatsApp em horário comercial'] },
  { id: 'profissional', nome: 'Fazenda', selo: 'Mais escolhido', para: 'Para a fazenda com equipe, máquinas e lavoura: tudo liberado, inclusive pesar pela câmera', mes: 69.9, ano: 699,
    itens: ['5 fazendas', 'Você e mais 10 pessoas', '1.500 animais com ficha', 'Máquinas, pesar pela câmera e mapa sem sinal', 'Áreas no GPS sem limite', '100 perguntas por dia ao FINAGRO AI', '1.000 fotos de animais', 'Suporte pelo WhatsApp com prioridade'] },
  { id: 'avancado', nome: 'Grande', para: 'Para várias fazendas e rebanho grande, com a implantação feita por nós', mes: 199.9, ano: 1999,
    itens: ['20 fazendas', 'Você e mais 50 pessoas', 'Animais com ficha sem limite', 'Áreas no GPS sem limite', '300 perguntas por dia ao FINAGRO AI', '3.000 fotos de animais', 'Marketplace sem comissão', 'Implantação assistida: a gente importa a sua planilha'] },
];
export const EMPRESARIAL = { nome: 'Empresarial', aPartirDe: 499, texto: 'sem limite de fazenda, gente e rebanho, com gerente de conta' };
// Funções avulsas do app (ADDONS de planos.js): pagar só pelo que usa, em qualquer plano abaixo do que já inclui cada uma.
export const COMPLEMENTOS = [
  { nome: 'Pesagem pela câmera', mes: 14.9 }, { nome: 'Reprodução e índices', mes: 9.9 }, { nome: 'Lavoura', mes: 9.9 },
  { nome: 'Máquinas e estoque', mes: 9.9 }, { nome: 'Mapas sem limite', mes: 9.9 }, { nome: 'Pessoa a mais na equipe', mes: 7.9 },
  { nome: 'Fazenda a mais', mes: 9.9 }, { nome: '+100 animais com ficha', mes: 9.9 },
];
// Conta nova: dias do plano Fazenda com tudo liberado, sem cartão (TRIAL_DIAS do app); depois, o Grátis.
export const TESTE_DIAS = 14;
// [fazendas, pessoas além de você, animais com ficha] de cada plano, para o cartão da página de captação.
export const LIMITES = { campo: [1, 1, 50], essencial: [2, 3, 300], profissional: [5, 10, 1500], avancado: [20, 50, Infinity] };

export const brl = (v) => v.toLocaleString('pt-BR', { minimumFractionDigits: v % 1 ? 2 : 0, maximumFractionDigits: 2 });

// Perguntas da página inicial (26/11/2026: de 12 para 23, no mesmo componente da /android; doutrina de interface,
// seção 9). Cada uma: [pergunta, resposta de 40 a 60 palavras que responde na 1ª frase, link que aprofunda, rótulo].
// As 5 primeiras ficam à vista numa coluna (6 em duas); o resto abre em "Ver mais perguntas (+N)". Tudo aqui é o que o
// app faz hoje (PLANOS, COMPLEMENTOS e as páginas do site); nada de prometer o que ainda não existe.
export const PERGUNTAS = [
  ['O FINAGRO é grátis mesmo?', `É, e para sempre: o plano Grátis não tem prazo nem pede cartão. Ele traz 1 fazenda, você e mais 1 pessoa, 50 animais com ficha e lote de qualquer tamanho, com dinheiro, vacinas, GTA e tarefas sem limite. Toda conta nova ainda ganha ${TESTE_DIAS} dias com tudo liberado para testar.`, ENTIDADE.app, 'Criar a conta grátis'],
  ['Quanto custam os planos pagos?', 'O Produtor custa R$ 29,90 por mês, o Fazenda R$ 69,90 e o Grande R$ 199,90, e no pagamento anual cada um sai pelo preço de dez meses. Os planos aumentam fazendas, pessoas e animais com ficha. Quem precisa de uma função só paga o avulso dela, de R$ 7,90 a R$ 14,90 por mês, sem trocar de plano.', '/o-que-e-o-finagro', 'Ver o FINAGRO em resumo, com os preços'],
  ['Funciona sem internet no curral?', 'Para lançar, funciona. Sem sinal, o gasto, a venda ou a vacina ficam salvos no celular e sobem sozinhos quando a internet voltar, e o app avisa isso na hora. Para entrar pela primeira vez num aparelho e para ver o que a equipe lançou em outro celular, é preciso sinal.', '#funcionalidades', 'Ver o aviso de sem sinal na tela do app'],
  ['Tem para iPhone?', 'Tem. O FINAGRO está na App Store para iPhone, de graça e com a mesma conta do Android e do computador. No tablet e no computador, ele abre pelo navegador em app.finagro.app. Quem tem um celular de cada sistema na fazenda lança dos dois, e tudo aparece nos dois aparelhos.', ENTIDADE.ios, 'Abrir o FINAGRO na App Store'],
  ['Tem para Android?', `Tem. No Android, baixe o APK em finagro.app/android: é grátis, serve no Android ${ENTIDADE.apk.androidMinimo} ou mais novo de qualquer marca, e o endereço entrega sempre a última versão. Quem prefere não instalar usa pelo navegador em app.finagro.app, com a mesma conta e os mesmos dados do aplicativo.`, '/android', 'Baixar o APK do Android'],
  ['Serve para quem cria pouco? E para quem cria muito?', 'Serve dos dois lados. Você conta o que produz e quantos, e o painel se ajusta: o leiteiro com 12 vacas vê o leite do dia e a reprodução; a granja com 1 milhão de aves vê os galpões e o trato. Galpão, tanque, colmeia e lote de gado contam como um lote só, sem limite de cabeças.', '#para-quem', 'Ver as seis produções que o app atende'],
  ['Como eu crio a conta?', `Em poucos passos: abra o app ou app.finagro.app, entre com a conta Google ou com e-mail e senha e conte o que você produz. O painel já abre no que você faz no dia a dia, e os ${TESTE_DIAS} dias com tudo liberado começam na hora, sem cartão de crédito.`, ENTIDADE.app, 'Criar a conta agora'],
  ['O que acontece depois do teste?', `Depois dos ${TESTE_DIAS} dias, a conta passa sozinha para o plano Grátis, sem cobrança e sem pedir cartão. Tudo o que você lançou continua lá: ver, editar e exportar funcionam em qualquer plano. Se o rebanho ou a equipe passar do limite do Grátis, o app avisa e mostra o plano que cabe no seu uso.`, ENTIDADE.app, 'Começar o teste grátis'],
  ['Consigo trazer a planilha que já uso?', 'Consegue. No Excel, salve a planilha como CSV e envie o arquivo no app: o FINAGRO importa animais, despesas, receitas, fornecedores e itens de estoque, e ninguém precisa redigitar o que já está anotado. No plano Grande, a implantação é assistida e a nossa equipe importa a planilha para você.', '/planilha-de-controle-de-gado', 'Ver a planilha de controle de gado'],
  ['Quantas pessoas podem usar a mesma fazenda?', 'No plano Grátis, você e mais 1 pessoa, cada uma com o seu papel e as suas permissões. Para mais gente, o Produtor leva você e mais 3, o Fazenda mais 10 e o Grande mais 50. Também dá para pôr só uma pessoa a mais por R$ 7,90 por mês, sem trocar de plano.', '/gestao-rural', 'Ler o guia de gestão rural'],
  ['Dá para cuidar de mais de uma fazenda?', 'Dá. Cada fazenda tem o seu rebanho, o seu dinheiro e o seu estoque, e os relatórios mostram o resultado de cada uma. O Grátis tem 1 fazenda, o Produtor 2, o Fazenda 5 e o Grande 20, e uma fazenda a mais sai por R$ 9,90 por mês em qualquer plano.', '/software-de-gestao-rural', 'Ver como o FINAGRO organiza a gestão'],
  ['O FINAGRO emite a GTA?', 'Não. A GTA (Guia de Trânsito Animal) é emitida no sistema da defesa agropecuária do seu estado. No FINAGRO você registra as GTAs emitidas, o app lembra 1 dia antes do vencimento e avisa quando falta anotar a vacina que trava a guia.', '/como-emitir-gta', 'Ver como emitir a GTA no seu estado'],
  ['O app gera o LCDPR?', 'Gera o arquivo do Livro Caixa Digital do Produtor Rural no leiaute da Receita Federal, com as receitas e despesas lançadas. O contador confere, completa os dados do contribuinte e das contas bancárias e valida no programa da Receita antes de entregar.', '/lcdpr', 'Ler o guia do LCDPR'],
  ['Consigo controlar as vacinas do rebanho?', 'Consegue. Você lança a vacina de um animal ou do lote inteiro, e o app avisa a que está para vencer junto com o que fazer hoje na fazenda. Vacinas e tarefas não têm limite em nenhum plano, inclusive no Grátis, e o histórico de cada animal fica na ficha dele.', '/calendario-de-vacinacao-bovina', 'Ver o calendário de vacinação bovina'],
  ['O app mostra o preço do boi?', 'Mostra. O FINAGRO traz a cotação da semana pela CONAB ao lado do seu custo, para você vender e comprar com o número na mão. Para a conta do lote, a calculadora de arroba do site recebe o peso vivo, o rendimento de carcaça e o preço e mostra quanto o lote vale.', '/calculadora-de-arroba', 'Abrir a calculadora de arroba'],
  ['Consigo acompanhar o peso do gado?', 'Consegue. Cada pesagem fica na ficha do animal e no lote, e o app mostra a evolução do peso e o ganho de cada período. No plano Fazenda, dá para pesar pela câmera do celular, sem balança; essa função também sai avulsa por R$ 14,90 por mês em qualquer plano.', '/calculadora-gmd', 'Calcular o ganho médio diário'],
  ['Dá para medir a área da fazenda pelo celular?', 'Dá. O app mede pasto, terreno e talhão pelo GPS, marcando pontos ou caminhando, em metros quadrados e hectares, mesmo sem internet. O Grátis guarda 3 áreas, o Produtor 30, e o Fazenda e o Grande não têm limite. O arquivo KMZ do Google Earth entra a partir do plano Produtor.', '/aplicativo-para-medir-area-rural', 'Ver como medir a terra pelo celular'],
  ['Serve para lavoura?', 'Serve. Você cadastra a safra e os talhões, lança as operações e anota o caderno de campo, com a lavoura junto do rebanho e do dinheiro da mesma fazenda. A lavoura entra no plano Produtor ou sai avulsa por R$ 9,90 por mês, e o resto do app funciona no Grátis.', '/caderno-de-campo', 'Ver o que anotar no caderno de campo'],
  ['Dá para controlar o estoque de ração e insumos?', 'Dá. Cada item do estoque mostra quanto tem em cada fazenda, com as entradas e as saídas, e o app avisa quando um item zera. O estoque entra no plano Produtor e também sai avulso, junto com as máquinas, por R$ 9,90 por mês em qualquer plano.', '/gestao-da-pecuaria-de-corte', 'Ler o guia de gestão da pecuária de corte'],
  ['Os meus dados ficam com quem?', 'Ficam com você, guardados na nuvem com a sua conta: trocou de celular, está tudo lá. As listas e os relatórios saem em PDF e planilha quando você quiser, e o tratamento dos dados está descrito na política de privacidade do FINAGRO.', ENTIDADE.privacidade, 'Ler a política de privacidade'],
  ['O que é o FINAGRO AI?', 'É o assistente do app para dúvidas de gestão rural, pecuária e agricultura, que responde em português na hora. São 5 perguntas por dia no plano Grátis, 30 no Produtor, 100 no Fazenda e 300 no Grande, e a contagem zera à meia-noite.', ENTIDADE.app, 'Fazer uma pergunta ao FINAGRO AI'],
  ['O que fica fora do plano grátis?', 'Reprodução e índices, estoque, lavoura e importar KMZ entram no Produtor; máquinas, pesar pela câmera e mapa sem sinal, no Fazenda. Cada uma também sai avulsa, de R$ 9,90 a R$ 14,90 por mês. E nada do que você já lançou fica preso: ver, editar e exportar funcionam em qualquer plano.', '/indices-zootecnicos', 'Ler o guia de índices zootécnicos'],
  ['Como falo com o suporte?', `Pelo WhatsApp do FINAGRO, no ${ENTIDADE.whatsapp.exibicao}. No plano Produtor, o atendimento é em horário comercial; no Fazenda e no Grande, com prioridade. Dúvida rápida de gestão também se resolve pelo FINAGRO AI, dentro do app, a qualquer hora do dia ou da noite.`, `https://wa.me/${ENTIDADE.whatsapp.numero}?text=${encodeURIComponent(ENTIDADE.whatsapp.mensagem)}`, 'Falar no WhatsApp'],
];

// Perguntas da página /android (tudo aqui é o que a própria página diz; nada de prometer o que o app ainda não faz).
export const PERGUNTAS_APK = [
  ['O Finagro no Android é grátis?', 'É. O plano Grátis não tem prazo nem pede cartão: 1 fazenda, você e mais 1 pessoa e 50 animais com ficha, com lote de qualquer tamanho. A conta nova ganha 14 dias com tudo liberado. Para mais animais com ficha, fazendas ou gente, os planos começam em R$ 29,90 por mês.', '/#perguntas', 'Ver os planos nas perguntas da página inicial'],
  ['Qual Android eu preciso?', `Android ${ENTIDADE.apk.androidMinimo} ou mais novo, de qualquer marca: Samsung, Motorola, Xiaomi e as outras. Para conferir, abra Configurações e procure Sobre o telefone, onde aparece a versão do Android. Em aparelho mais antigo, o Finagro funciona pelo navegador em app.finagro.app, com a mesma conta e os mesmos dados.`, ENTIDADE.app, 'Abrir o Finagro no navegador'],
  ['Como eu atualizo para a versão nova?', 'Volte a esta página e toque em Baixar APK: o endereço entrega sempre a última versão. Abra o arquivo e confirme a atualização, que instala por cima da que você tem e mantém a conta e os dados. O app ainda não avisa sozinho quando sai uma versão nova.', '#versao', 'Ver as novidades desta versão'],
  ['Dá para usar sem instalar?', `Dá. O Finagro abre no navegador do celular, do tablet ou do computador, em app.finagro.app, com a mesma conta e os mesmos dados do aplicativo. É o caminho para quem está sem espaço no aparelho, tem Android mais antigo que o ${ENTIDADE.apk.androidMinimo} ou prefere não instalar nada.`, ENTIDADE.app, 'Abrir o Finagro no navegador'],
  ['Instalar o APK é seguro?', 'É, quando o arquivo vem desta página. O Android avisa em todo aplicativo baixado fora da loja dele: é um cuidado do sistema, não um defeito do arquivo. Para conferir que o seu arquivo é o publicado aqui, compare a impressão SHA-256 dele com a que aparece na seção Segurança.', '#seguranca', 'Conferir a impressão do arquivo'],
  ['Por que o Android pede permissão para instalar?', 'Porque o arquivo não veio da Google Play. Na primeira vez, o Android pergunta se o navegador que baixou o APK pode instalar aplicativos: toque em Configurações, ligue Permitir desta fonte e volte. A permissão vale só para esse navegador e pode ser desligada depois da instalação.', '#instalar', 'Ver os quatro passos da instalação'],
  ['Eu tinha o Finagro da Google Play. E agora?', 'Desinstale o da Google Play antes de instalar este, porque o Android não instala um por cima do outro. A conta e os dados ficam guardados na nuvem: depois de instalar o APK, é só entrar com o mesmo e-mail e a mesma senha, e tudo volta como estava.', '#instalar', 'Ver como instalar o APK'],
  ['A versão da Google Play ainda é atualizada?', 'Não. As versões novas do Finagro para Android saem por este APK, e a da Google Play ficou parada. Para ter as funções e as correções mais recentes, troque pela versão daqui: desinstale a antiga, baixe o APK e entre com a sua conta, que os dados continuam guardados.', '#versao', 'Ver a versão publicada'],
  ['Tem Finagro para iPhone?', 'Tem. No iPhone, o Finagro está na App Store, de graça e com a mesma conta que você usa no Android. Quem tem um celular de cada sistema na fazenda lança dos dois, e tudo aparece nos dois aparelhos e no computador, pelo navegador em app.finagro.app.', ENTIDADE.ios, 'Abrir o Finagro na App Store'],
  ['Quanto espaço o aplicativo ocupa?', 'O tamanho do arquivo aparece no alto desta página, ao lado da versão, e muda um pouco a cada versão nova. Depois de instalado, o Finagro ocupa um pouco mais, com as fotos e os lançamentos guardados para usar sem sinal. Sem espaço livre, o Android avisa que o app não foi instalado.', '#inicio', 'Ver o tamanho da versão atual'],
  ['Funciona sem internet no curral?', 'Para lançar, funciona. Sem sinal, o gasto, a venda ou a vacina ficam salvos no celular e sobem sozinhos quando a internet voltar, e o app avisa isso na hora. Para entrar pela primeira vez num aparelho e para ver o que a equipe lançou em outro celular, é preciso sinal.', '/#funcionalidades', 'Ver tudo o que o Finagro faz'],
  ['Se eu trocar de celular, perco os dados?', 'Não. Os dados ficam guardados na nuvem com a sua conta, não no aparelho. No celular novo, instale o APK por esta página e entre com o mesmo e-mail e a mesma senha: os animais, o dinheiro e as tarefas aparecem como estavam. Antes de trocar, abra o app com internet uma vez.', '#instalar', 'Ver como instalar no celular novo'],
  ['Os meus dados ficam com quem?', 'Ficam com você, guardados na nuvem com a sua conta. As listas e os relatórios saem em PDF e em planilha quando você quiser, em qualquer plano, e nada do que foi lançado fica preso. O tratamento dos dados está descrito na política de privacidade do Finagro, com o que é guardado e por quê.', ENTIDADE.privacidade, 'Ler a política de privacidade'],
  ['Uso a mesma conta no celular e no computador?', 'Usa. É uma conta só para o aplicativo no Android, no iPhone e no navegador do computador, em app.finagro.app. O que você lança no curral aparece no escritório, e o que a equipe lança em outro celular aparece para você assim que os aparelhos têm sinal.', ENTIDADE.app, 'Abrir o Finagro no computador'],
  ['Funciona no tablet?', 'Funciona, e no tablet o caminho indicado é o navegador. No tablet Android ou no iPad, abra app.finagro.app e entre com a sua conta: a tela usa a largura toda, com os mesmos dados do celular, e os relatórios e as listas ficam mais fáceis de ler.', ENTIDADE.app, 'Abrir o Finagro no navegador'],
  ['Preciso de conta Google para baixar?', 'Não. O APK baixa direto desta página, sem Google Play e sem conta Google: basta tocar em Baixar APK e abrir o arquivo. A única conta que o Finagro pede é a dele mesmo, com nome, e-mail, WhatsApp e senha, criada no próprio aplicativo depois de instalar.', '#inicio', 'Ir para o botão Baixar APK'],
  ['Como eu crio a minha conta?', 'No próprio aplicativo. Abra o Finagro, toque em Cadastre-se e preencha nome, e-mail, WhatsApp e senha. A conta nasce no plano Grátis, com 14 dias de tudo liberado e sem cartão. Pelo navegador, em app.finagro.app, o cadastro é o mesmo e vale também no celular.', ENTIDADE.app, 'Criar a conta pelo navegador'],
  ['Quantas pessoas podem usar a mesma fazenda?', 'No plano Grátis, você e mais 1 pessoa, cada uma com o seu papel e as suas permissões. Para mais gente: Produtor (você e mais 3), Fazenda (mais 10), Grande (mais 50) ou pessoa a mais por R$ 7,90 por mês. Cada pessoa instala o APK no próprio celular e entra com a conta dela.', '/#comecar', 'Ver como começar grátis'],
  ['Posso instalar o mesmo APK em mais de um celular?', 'Pode. O mesmo arquivo instala em quantos celulares Android você quiser: mande o endereço desta página para a equipe ou passe o arquivo adiante. Cada pessoa entra com a própria conta, e quantas podem trabalhar na mesma fazenda depende do plano, começando por você e mais 1 no Grátis.', '#inicio', 'Ir para o botão Baixar APK'],
  ['O que fazer quando aparece "App não instalado"?', 'Quase sempre é o Finagro antigo da Google Play ainda no aparelho, ou falta de espaço. Desinstale a versão antiga, libere espaço se o Android pedir e abra o APK de novo. Se o aviso continuar, baixe o arquivo outra vez por esta página, porque o download pode ter parado no meio.', '#instalar', 'Ver os passos da instalação'],
  ['Onde vejo o que mudou em cada versão?', 'Na seção Novidades desta versão, aqui na página. Ela mostra o número da versão publicada e o que entrou de novo, lidos na hora do arquivo de versões do Finagro. O número também aparece no alto da página, ao lado do tamanho, para você comparar com o que tem instalado.', '#versao', 'Ver as novidades desta versão'],
  ['O Finagro serve para o meu tipo de criação?', 'Serve dos dois lados, para quem cria pouco e para quem cria muito. Você conta o que produz e quantos, e o painel se ajusta: o leiteiro com 12 vacas vê o leite do dia e a reprodução; a granja vê os galpões e o trato. Galpão, tanque, colmeia e lote de gado contam como um lote só.', '/#para-quem', 'Ver para quem é o Finagro'],
  ['Como eu falo com o suporte?', `Pelo WhatsApp, no ${ENTIDADE.whatsapp.exibicao}, com o time do Finagro. Mande o modelo do celular, a versão do Android e um print da tela, se aparecer algum aviso: isso encurta a conversa. Dúvida de instalação, de uso ou de plano, tudo passa pelo mesmo número.`, `https://wa.me/${ENTIDADE.whatsapp.numero}`, 'Chamar o suporte no WhatsApp'],
];

// Páginas do site (sitemap, navegação do rodapé, llms.txt).
export const PAGINAS = [
  { caminho: '/', titulo: 'FINAGRO: app de gestão rural grátis para fazenda e sítio', resumo: 'A página principal: o que o app faz, as telas reais, para quem é e as perguntas frequentes.', atualizado: '2026-11-14' },
  { caminho: '/controle-de-rebanho', titulo: 'Controle de rebanho no celular', resumo: 'Ficha do animal, lote, pesagem, vacina e reprodução: o que anotar e como o app organiza.', atualizado: '2026-11-14' },
  { caminho: '/fluxo-de-caixa-rural', titulo: 'Fluxo de caixa rural', resumo: 'Como montar o fluxo de caixa da fazenda e o que o app calcula sozinho.' },
  { caminho: '/caderno-de-campo', titulo: 'Caderno de campo digital', resumo: 'O que anotar em cada talhão e como o registro vira custo por hectare e rastreio.' },
  { caminho: '/gta', titulo: 'GTA: Guia de Trânsito Animal', resumo: 'O que é, quem emite, o que trava a guia e como o app lembra o vencimento.' },
  { caminho: '/lcdpr', titulo: 'LCDPR: Livro Caixa Digital do Produtor Rural', resumo: 'Quem é obrigado, prazo, multa e como gerar o arquivo com os lançamentos.' },
  { caminho: '/calculadora-gmd', titulo: 'Calculadora de GMD do gado', resumo: 'Ganho médio diário: a conta, a calculadora e como usar o resultado na engorda.' },
  // Página de captação (chegada de anúncio e de busca de compra): hero de tela inteira, por isso o topo nasce estendido.
  { caminho: '/gestao-da-pecuaria-de-corte', titulo: 'Gestão da pecuária de corte no celular', resumo: 'Para quem toca gado de corte: o que a caderneta não soma, o que o app põe no lugar e o que cabe no plano grátis.', heroi: true, captacao: true, atualizado: '2026-11-14' },
  // Download do APK no estilo de loja de aplicativos: hero de tela inteira e SoftwareApplication próprio no JSON-LD (apk: true).
  { caminho: '/android', titulo: 'Baixar o FINAGRO para Android (APK)', resumo: 'Download do APK do app para Android: versão sempre atual, como instalar, novidades da versão e impressão SHA-256 do arquivo.', heroi: true, captacao: true, apk: true, atualizado: '2026-11-14' },
];
