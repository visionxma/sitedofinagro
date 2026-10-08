# conteudo/guias: um guia por arquivo

Cada arquivo `conteudo/guias/<slug>.mjs` é UMA página do site finagro.app (`https://finagro.app/<slug>`). O gerador
(`node scripts/gerar.mjs`) lê todos os arquivos desta pasta e monta a página, o JSON-LD, o sitemap, o índice `/guias`,
o `llms.txt` e o `llms-full.txt`. Arquivo de referência, já aprovado no portão: `calculadora-de-arroba.mjs`. Leia-o
inteiro antes de escrever.

Portão (roda antes de qualquer publicação e REPROVA o arquivo):

```bash
cd /Users/victorgabryellferreiraqueiroz/BACKUP_VICTOR/Projetos/VISIONX/FINAGRO-LP
/Users/victorgabryellferreiraqueiroz/.nvm/versions/node/v24.20.0/bin/node scripts/conferir-guia.mjs conteudo/guias/<slug>.mjs
```

## Para quem se escreve

Produtor rural brasileiro, do sítio à fazenda grande, lendo no celular, muitas vezes com pouco sinal. Ele pesquisou
uma dúvida prática ("quantos hectares tem um alqueire", "como emitir GTA", "planilha de controle de gado grátis") e
quer a resposta na primeira tela, a conta feita e o próximo passo. Fale como quem toca fazenda: cabeça, arroba, lote,
pasto, safra, talhão, saca, curral, lida, defesa agropecuária. Frase curta, número em vez de adjetivo, exemplo com
conta. Nada de tom de folheto.

## Formato do arquivo

```js
// Trechos oficiais que sustentam cada afirmação de norma, prazo, valor ou número de pesquisa.
export const provas = [
  { afirmacao: 'o que o guia afirma', trecho: 'cópia EXATA de um trecho do texto oficial em vigor', url: 'https://www.planalto.gov.br/...' },
  // preço, plano ou limite de uma EMPRESA só se prova na página dela mesma:
  { afirmacao: 'o plano X custa R$ 169,90 por mês', trecho: 'LEITE 40 R$ 169', url: 'https://empresa.com.br/precos', empresa: true },
];

export default {
  slug: 'igual-ao-nome-do-arquivo',
  grupo: 'corte',            // escolha | corte | leite | lavoura | dinheiro | terra | criacoes
  tipo: 'calculadora',       // guia | calculadora | modelo | planilha | comparativo
  curto: 'Calculadora de arroba',             // até 28 caracteres: migalha, cartão do índice e "veja também"
  resumo: 'Peso vivo em arrobas e o valor do boi na hora.',   // até 60 caracteres: linha do cartão
  title: 'Calculadora de arroba do boi: peso vivo em @ e valor',   // 30 a 60 caracteres, a pesquisa principal no começo
  description: 'De 120 a 160 caracteres, com a resposta e o que a página entrega.',
  h1: 'Calculadora de arroba: quantas arrobas tem o seu boi',   // até 78 caracteres
  pergunta: 'A pergunta do jeito que a pessoa digita no Google?',
  resposta: 'Resposta direta de 40 a 60 palavras, que se entende sozinha, com o número.',
  tela: 'lotes',             // tela real do app no celular do topo: inicio | animais | lotes | fluxo | contas | relatorios | tarefas | producao | cotacoes | meu-dia
  atualizado: '2026-10-08',
  calc: { /* só quando há conta: ver abaixo */ },
  secoes: [ { h2: 'Título da seção (até 64 caracteres)', blocos: [ /* blocos */ ] } ],   // de 3 a 7 seções
  noFinagro: { h2: 'Como fica no FINAGRO', itens: ['só o que o app faz hoje (lista abaixo)'] },   // 3 a 5 itens; fica no fim (opcional: depoisDe: 2 põe depois da 2ª seção)
  cta: { forte: 'Frase de até 70 caracteres.', texto: 'Complemento de até 90 caracteres.' },
  faqTitulo: 'Perguntas sobre arroba',          // opcional
  faq: [ ['Pergunta?', 'Resposta em texto puro, sem negrito nem link.'] ],                 // 4 ou 5
  fontes: [ { nome: 'Embrapa Gado de Corte, nome do documento', url: 'https://…' } ],
  relacionados: ['slug-1', 'slug-2', 'slug-3'],                                             // exatamente 3
};
```

## Blocos aceitos em `secoes[].blocos`

- `{ p: 'parágrafo' }` · `{ ul: ['item'] }` · `{ ol: ['passo'] }` · `{ destaque: 'aviso curto' }`
- `{ tabela: { colunas: ['Rótulo da linha', 'Coluna 2', 'Coluna 3'], linhas: [['rótulo', 'valor', 'valor']], nota: 'de onde saiu' } }`
  No celular cada linha vira um cartão: no máximo 4 colunas contando a do rótulo, textos curtos.
- `{ glossario: [['Termo', 'definição']] }`
- `{ planilha: { arquivo: 'planilha-controle-de-gado', titulo: 'Planilha de controle de gado', aba: 'Rebanho',
     colunas: ['Brinco', 'Sexo', …], linhas: [['001', 'F', …], …], nota: 'como usar' } }`
  O gerador escreve `arquivos/<arquivo>.xlsx` e `.csv` e mostra a prévia com os botões de baixar. Pelo menos 3 linhas
  de exemplo, com dados plausíveis.
- `{ modelo: { id: 'contrato-de-arrendamento-rural', titulo: 'CONTRATO DE ARRENDAMENTO RURAL', partes: [
     { p: 'Pelo presente instrumento, ____________________, CPF ____________, …' },
     { h: 'Cláusula 1ª: do objeto' }, { ul: ['item'] }, { ol: ['item numerado'] },
     { campos: [['Imóvel', 8], ['Área (ha)', 4]] },      // caixas para preencher; cada linha soma 12
     { assinaturas: ['Arrendador', 'Arrendatário', 'Testemunha'] }, { nota: 'observação em letra pequena' } ],
     rodape: 'Modelo gratuito do FINAGRO. Adapte ao seu caso; não substitui a orientação de advogado.' } }`
  Vira documento com botão de copiar e de imprimir. Até 600 palavras. Lacuna se escreve com sublinhados.

Texto corrido aceita `**negrito**` e `[texto](endereço)` (link interno começa com `/`). `title`, `description`,
`resposta`, `pergunta`, `cta` e as respostas do `faq` são texto puro.

## Calculadora (`calc`)

```js
calc: {
  titulo: 'Calcule as arrobas',
  campos: [
    { id: 'peso', rotulo: 'Peso vivo (kg)', valor: 480, min: 0, passo: 1 },
    { id: 'tipo', rotulo: 'Tipo de alqueire', valor: '24200', opcoes: [['24200', 'Paulista'], ['48400', 'Mineiro']] },   // lista
  ],
  saidas: [ { id: 'arrobas', rotulo: 'arrobas de carcaça', casas: 2 }, { id: 'valor', rotulo: 'valor do animal', casas: 2, prefixo: 'R$ ' } ],  // 1 a 4; a primeira ganha destaque
  calcular: (v) => ({ arrobas: (v.peso * v.rend / 100) / 15, valor: (v.peso * v.rend / 100) / 15 * v.preco }),
  nota: 'De onde saem os números e o que é só ponto de partida.',
  exemplos: [ { entrada: { peso: 480, rend: 52, preco: 300 }, saida: { arrobas: 16.64, valor: 4992 } } ],   // pelo menos 2, conferidos à mão
}
```

Campo de DATA: `{ id: 'cobertura', rotulo: 'Data da cobertura', tipo: 'data', valor: 'hoje' }` (ou uma data fixa
`'2026-10-08'`). Dentro de `calcular` a data chega como NÚMERO DE DIAS, então somar dias é somar número:
`calcular: (v) => ({ parto: v.cobertura + v.dias })`. A saída que é data leva `formato: 'data'`:
`{ id: 'parto', rotulo: 'parto previsto', formato: 'data' }`. Nos `exemplos`, escreva as datas como texto
`'2026-10-08'` na entrada e na saída; o portão converte.

`calcular` é uma função de seta PURA: usa só `v` (os campos, já como número; campo de lista com valor numérico também
chega como número) e `Math`. Ela é copiada como texto para dentro da página, então não pode usar nada de fora. O portão
roda os `exemplos` e reprova se a conta não bater. Rótulos com até 34 caracteres.

## Regras que reprovam o arquivo

1. **Norma, prazo, valor e número só com o texto oficial lido.** Toda afirmação sobre lei, decreto, instrução
   normativa, prazo, alíquota, multa, limite de crédito, obrigação ou direito precisa de uma linha em `provas` com um
   trecho copiado da página oficial em vigor (planalto.gov.br, gov.br, in.gov.br, receita, incra, bcb.gov.br,
   embrapa.br, conab.gov.br, ibge.gov.br, órgão estadual `*.gov.br`). Blog, portal de notícia, portal jurídico e site
   de fornecedor NÃO valem. Texto riscado (revogado) no Planalto não vale. O portão baixa a página e procura o trecho
   palavra por palavra: copie de 8 a 30 palavras seguidas, exatamente como estão.
   Antes de registrar, confira você mesmo:
   `curl -4 -sL --compressed -m 60 -A 'Mozilla/5.0' -H 'Accept-Language: pt-BR,pt;q=0.9' '<url>' | iconv -f latin1 -t utf-8 2>/dev/null | sed 's/<[^>]*>/ /g' | grep -c '<pedaço do trecho>'`
   (o Planalto vem em latin1; nas outras páginas tire o `iconv`). Prefira a norma em HTML; PDF também passa.
2. **Dado técnico de produção** (dias de gestação, peso da unidade animal, fórmula de peso pela fita, conversão
   alimentar de referência, densidade de tanque) também precisa de fonte: Embrapa, universidade pública ou órgão
   oficial, com trecho em `provas`. Sem fonte, não escreva o número; explique a conta e mande conferir com o técnico.
3. **Nada inventado:** sem estatística de mercado, percentual de ganho, "segundo especialistas", depoimento, número de
   clientes ou prêmio. Na dúvida, não escreva.
4. **Onde a regra muda por estado, diga que muda** e aponte o órgão. Feche o guia de regra com um `destaque` dizendo
   que o texto é informativo e não substitui contador, advogado, veterinário ou agrônomo.
5. **"No FINAGRO" só com o que existe** (lista abaixo). Em caso de dúvida sobre um recurso, confira no código do app,
   só leitura: `/Users/victorgabryellferreiraqueiroz/BACKUP_VICTOR/Projetos/VISIONX/FINAGRO/src` (telas em
   `src/screens/home/<assunto>`, regras em `src/core`). Não achou no código, não prometa.
6. **Escrita:** português do Brasil, frases curtas, sem travessão (—), sem " · " no texto, sem jargão em inglês sem
   tradução, sem "clique aqui". Sem muleta de texto de máquina ("em resumo", "vale ressaltar", "é importante
   destacar", "nos dias de hoje", "não é X, é Y" em série, três adjetivos em fila). Nada que diminua o produtor
   ("do interior", "humilde", "baratinho"). Sem termo de escola (turma, aluno, aula).
7. **Tamanhos:** `title` de 30 a 60 caracteres; `description` de 120 a 160; `resposta` de 40 a 60 palavras; texto total
   a partir de 600 palavras (o portão reprova abaixo de 420); `faq` com 4 ou 5 perguntas reais de quem pesquisa.
8. **Uma pesquisa por página.** Cada guia responde a UMA necessidade. O `title` começa pela consulta mais procurada
   (ela vem na encomenda) e o texto usa, com naturalidade, as variações da mesma consulta.

## O que o FINAGRO faz hoje (só isto pode ir em `noFinagro` e no `cta`)

- **Rebanho:** animal com ficha (brinco, raça, sexo, nascimento, peso, foto), lote de qualquer tamanho (galpão, tanque
  e colmeia também contam como lote), pesagens com o ganho entre elas, vacinas e sanidade, reprodução com parto
  previsto, desmame, registro das GTAs emitidas com lembrete 1 dia antes do vencimento, aviso de animais sem pesagem há
  mais de 60 dias, aviso de bezerras na idade da vacina de brucelose sem a vacina anotada.
- **O que vence:** lista as vacinas e as declarações obrigatórias do estado do produtor, para o que ele cria.
- **Dinheiro:** receitas, despesas, contas a pagar e a receber, fluxo de caixa com saldo previsto, centro de custo,
  relatórios em PDF e em planilha (CSV), arquivo do LCDPR no leiaute da Receita (o contador completa e valida).
- **Lavoura:** safras, talhões, caderno de campo, custo por hectare, chuva do pluviômetro, colheita com o comprador.
- **Campo e equipe:** área medida por GPS no celular (100 áreas no plano grátis), máquinas e manutenção, estoque de
  insumos, clima da fazenda, mão de obra e trabalhadores, pessoas da equipe com papel e permissão, tarefas.
- **Mercado e apoio:** cotação do boi gordo (CONAB), notícias do agro, marketplace de animais, simulador de crédito
  rural (só linhas do Pronaf, com taxas de referência fixas: não é proposta de banco), assistente FINAGRO AI (15 perguntas por dia no grátis), importação de planilha em CSV (animais, despesas, receitas, fornecedores e estoque; arquivo .xlsx é recusado: salva-se como CSV).
- **Geral:** celular Android (Google Play) e navegador em app.finagro.app (iPhone, tablet e computador); lançamento sem
  sinal fica salvo no aparelho e sobe quando a internet volta; o painel se monta pelo que o produtor cria (gado de
  corte, leite, aves, suínos, peixes, abelhas, horta, grãos).
- **Preço:** plano Campo grátis para sempre, sem cartão: até 3 fazendas, 5 pessoas e 1.000 animais com ficha, com lote
  sem limite de cabeças e todas as funções.

**O que o FINAGRO NÃO faz (nunca prometer):** não emite GTA nem nota fiscal; não transmite nada à Receita, ao INCRA ou
à defesa agropecuária; não integra balança, leitor de brinco eletrônico, coleira ou sensor; não tem imagem de satélite
nem drone; não tem aplicativo na App Store (no iPhone é pelo navegador); não faz a declaração do ITR, do CAR ou do
imposto de renda; não redige contrato. Quando o assunto do guia for uma dessas coisas, diga com todas as letras o que
o app NÃO faz e mostre o que ele faz em volta (guardar, lembrar, somar, organizar).

## Páginas que já existem (podem ir em `relacionados`)

`controle-de-rebanho`, `calculadora-gmd`, `gta`, `caderno-de-campo`, `fluxo-de-caixa-rural`, `lcdpr`, mais todo
arquivo desta pasta e os slugs de `encomendados.txt` (guias que estão sendo escritos nesta leva).
