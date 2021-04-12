# O que é ser uma pessoa programadora:

**Oportunidades**
- Front-end
- Back-end
- Full-stack

**Mercado**
- Local X Global
- Milhares de vagas
- Experiência == faça horas e horas de práticas

>Soft e Hard Skills:
- Soft Skills:
  - Interação entre pessoas == inglês fluente, comunicação, agir em problemas de uma maneira mais clara, consegue trazer soluções, consegue liderar.
- Hard Skills:
  - Código puro.
>Tecnologias e evolução.

>Especialista vs Generalista:
- Generalista:
  - Tem conhecimentos gerais, html, css, javascript, nodeJS, sql.
- Especialista:
  - No momento que você querer aprender uma única coisa, você se torna especialista.

# Guia de estudos e organização:

**Pomodoro**:
- Ter foco em seus estudos em pelo menos 25 minutos ou mais;
- Pausas de 5 minutos e depois voltar a ativa.

**Tenha um lugar reservado para seu estudo**
- Foco
- Silêncio
- Interrupções

**Aprendizado ativo X passivo**
- Aprenda a se perguntar: Se pergunte o que você acabou de ver;
- Aprenda a ensinar: Repita o que você acabou de ver.

**Anotação e Revisão**
- Anote mais após a aula:
  - Faça uma pequena anotação do que acabou de aprender, com isso vai conseguir fixar melhor.
- Revise suas anotações e busque respostas para o que você não entendeu;
- Pesquisas:
  - Procure, sempre pesquisar o que você acabou de aprender, para um melhor entendimento e aprofundamento daquele específico assunto.

# Dica de como acompanhar os videos:

>Assista com o intuito de entender;

>Você não precisa decorar (Processador X Hd)
  - Você não pode ser um HD, ele só faz o armazenamento;
  - Você precisa processar informações o mais rápido possível, entender aquele assunto;
  - "Gênios pensam no papel, não deixam a mente bloqueada com muita informação, passam tudo para o papel".
>Code o bloco de código após entender o que foi feito;

>Não tem problema não entender tudo de primeira, leva tempo e mais conhecimento para que as coisas façam sentido.

# Ajustando a mentalidade:

**Você precisa de tempo**
  - Desccanso faz parte do aprendizado (sono);
  - O cérebro precisa de tempo para assimilar as coisas.

>Você precisa ter persistência;

>Programar é encontrar soluções!
  - Programar é vida;
  - Programar não é só dinheiro, é a resolução de problemas complexos o tempo todo, e é maravilhoso;
  - Conhecimento constante é uns dos beneficios da programação;
  - Programar é ser responsavel pelos desafios e solucionar esses desafios.

>"Eu não sou tão bom quanto...";
  - Sempre seja melhor que você mesmo, a cada dia que passa, seja melhor do que ontem;
  - Não precisa se comparar com outros programadores, se preocupe com você, procure sempre melhorar todos os dias.

>"Eu sinto que estou só copiando e colando";

>Você gosta do que está fazendo?
  - Faça o que você ama, se você ama, você vai chegar muito longe.

# Bora codar

NodeJS:
  - É um runtime, construido com o chrome's V8 javascript engine;
    - motor V8 do chrome
    - V8 (Chrome V8):
      - V8 é o interpretador JavaScript, também chamado de máquina virtual Javascript, desenvolvido pela Google e utilizado em seu navegador Google Chrome. V8 é uma ferramenta desenvolvida na linguagem C++ e distribuída no regime de código aberto
  - Precisa de alguma coisa do servidor ?
  - node é um software, construido com javascript;
  - node é uma linguagem.

- Ambiente
  - NodeJS;
  - Navegador;
  - VS Code:
    - tema;
    - plugins;
    - fontes.

# npm == node packeges manager - gerenciador de pacotes de nó
- É um jeito de gerenciar biblioteca, pacotes(packages);
- npm init -y - não faz nenhum pergunta, dá o padrão das configurações.

>Sintaxe:

````json
{
  "name": "maratona",
  "version": "1.0.0",
  "description": "<h1 align=\"center\">   <img alt=\"JobsCalc\" title=\"JobsCalc\" src=\"https://i.imgur.com/Veqm7Gh.png\" width=\"220px\" /> </h1>",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

````
# Dependencia:

>express é uma bibliote para criar um servidor
````
> npm i express
> npm i ejs

````

# Dependencia de desenvolvimento:

````
> npm i nodemon -D
````
- Só enquando eu estiver desenvolvendo, quero usar ele;
- nodemon
  - nodemon é uma ferramenta que ajuda a desenvolver aplicativos baseados em node.js reiniciando automaticamente o aplicativo de nó quando mudanças de arquivo no diretório são detectadas.


````js
// uma função, no ambiente do node
// vai devolver o express(pacote)
// está recebendo uma função a const express
const express = require("express");
// aqui está sendo executado a função
const server = express();

// request, response - // pedidos e respostas
// essa parte é executada só quando a página acessa os diretorios
// primeira rota
server.get('/', (request, response) => {
  // termina a função
  // send == envia
  return response.send('OIE!!!!!!!!!!!');
})
// uma função
// vai ligar o servidor
// listen -> ouvir
// o segundo argumento verifica se a porta esta aberta
// essa função  é executada primeiro
server.listen(3000, () => console.log('rodando'));
````


````json
{
  // código omitido
  "main": "src/server.js",
  "scripts": {
    "test": "nodemon ."
  },
}
````

O main é a referência do arquivo principal do projeto server.js e o nodemon vai rodar nessa referência do pontinho.

iniciar o nodemon:
<!-- rodar o servidor -->
````
npm run dev
````
O nodemon esta olhando todos os diretorios procurando extensões js,mjs,json qualquer uma dessa extensions forem alteradas, automaticamente o nodemon starting(olhando) - altera

# Pastas - public, server
<!-- template end -->

>Pasta public:
- Deve criar uma pasta pública;
- É uma pasta que vai ficar disponível ao mundo, disponível para todos verem, os arquivos são estáticos(podem mudar quando houver atualizações)

>Pasta src - servidor:
- Não é público, código fonte da aplicação;
- O que tem por de trás dos panos, isso não é aberto para o mundo, o mundo não deve saber do servidor. No final das contas, o mundo vai ter o index.html? Vai, mas só que vai ter um index.html completamente modificado pelo javascript.

>Pasta de styles(css):
- Passar para a pasta public.

# Diretórios - file paths:
- Mudar os diretórios ./ para, por exemplo /imagens

# Template engipe - tipo de estratégia

> EJS === Embedded Javascript Templating
<!-- javascript embutido no html -->

- plugin para ajudar:
  - EJS language support;

- Benefício: 1 - Reutilizar componentes (header):
  - instalar ejs;
  - transformar .html em .ejs
  - `<%- include('parts/page-header', {title: 'Meu Perfil'}) %>`;
  - install ejs plugin

- Benefício: 2 - Programar dentro do HTML:
  - variáveis;
  - criar o ojeto do perfil de usuário;
  - passar o objeto do perfil de usuário para o profile.ejs

- Explicação da renderização do motor
  - Dentro do routes.js precisa mudar a maneira que estar sendo enviado o arquivo, dessa forma agora, perceba que estava enviando um
html pronto, agora não será enviado um html pronto, agora ele vai passar por um motor, essa passagem pelo motor, chamamos de "render"
=== renderizar, vai passar pelo motor ejs e o ejs vai ser o responsável a responder para as rotas(routes)

- tags(não sei se é esse o nome):
  - <%- %>
  - <%= %> = ele imprimi um valor na tela
  - <% %> = serve para colocar códigos Javascript normal

## Coisa nova:
- para acessar objetos pela propriedade quando ela for uma string com traço por exemplo, "monthly-budget",
podemos acessar desse jeito: profile["monthly-budget"], tiramos o ponto e colocamos entre colchetes a propriedade com aspas

# DESAFIO:

- Abusar do reaproveitando de código com ejs;

## Para pegar dados de um formulário

````html
<form id="form-job" method="POST" action="/job">
````
- method="POST" = envia os dados - salva os dados
- action="/job" = pasta que vai se redirecionar

````js
// envio de dados - salvar dados
// req - requisição
routes.post('/job', (req, res) => {
  console.log(req.body);
});
````
- o verbo post deve ser definido para poder recuperar os dados

- Esse corpo da requisição só é disponível pelo express se colocar uma linha de código dentro do servidor(na hora de configurar o servidor), se não colocar essa linha de código, o express não deixa usar o body

**Linha de código para habilitar o req.body:**

````js
server.use(express.urlencoded({ extended: true }));
````
>urlendecoded deve ser antes do server.use(routes)

**use** seta configurações no servidor para iniciar, colocar configurações no servidor, habilitar configurações no servidor

urlencoded() - é uma função

Os dados que vão ser passados de maneira "post" que vai receber no body, imagina que os dados estão de maneira codificados

Extensão, está habilitando o req.body
está fazendo a liberação do body(corpo da requisição)

Agora a requisição pode vim, com esse corpo(body) do formulário, que agora está disponível para acesso'

**Objeto esperado(exemplo) - dados do formulário enviado pelo method="post"**
````js
{ name: 'Jonhison', 'daily-hours': '10', 'total-hours': '10' }
````

### Explicando o envio dos dados pelo formulário
- É importante ter um atributo "name" nas tags inputs, esse atributo name que será recebido pelo back-end


# Pesquisar depois:

````js

const express = require("express");

const server = express();

const routes = require("./routes");

server.set('view engine', 'ejs')

server.use(express.static("public"));

server.use(express.urlencoded({ extended: true }));

server.use(routes);

server.listen(3000, () => console.log('rodando'));
````

## Remaining calculation
- Devemos calcular sempre que apresentar o projeto, pois poderemos mudar os dados do projeto a qualquer momento
- RemainingDays = total hours do job / daily hours do job
- Adicionar os dias à data de criação, para criar uma data futura
- Subtraor da data futura, o número de dias restantes baseado na data de hoje
- Pegar a diferenã de milissegundos para dias
- Update status (done | progress)
- Budget: profile value hour * total job hours
  - deverá ser atualizado sempre que apresentar o projeto, pois poderá variar dependendo dos dados do projeto ou dos dados do perfil
- Atualizar o index.ejs
  - Prazo encerrado ao invés de 0 dias para a entrega
- Adicionar uma entrada no job[] para o prazo encerrado

**Nesse momento os dados ainda estão sendo guardados no servidor quando ele está ligado**
**Enquanto não for utilizado um banco de dados, os dados serão perdidos quando o servidor for iniciado**

## Pasta routes.js
**Antes**

````js
// express é uma bibliote para criar um servidor
const express = require('express');
// routes é uma parte do express, dessas rotas que serão criadas as rotas, caminhos, caminho base
const routes = express.Router();

// o ejs já lê por padrão a pasta views
// const basePath = __dirname + "/views";
const views = __dirname + '/views/';

const profile = {
  name: 'Jonhison',
  avatar: 'https://github.com/jonhisonF.png',
  "monthly-budget": 3000,
  "hours-per-day": 5,
  "days-per-week": 5,
  "vacation-per-year": 4,
  "value-hour": 75
}

// estrutura de dados
const jobs = [
  {
    id: 1,
    name: "Pizzaria Guloso",
    "daily-hours": 5,
    "total-hours": 60,
    created_at: Date.now(),
  },
  {
    id: 2,
    name: "OneTwo Project",
    "daily-hours": 3,
    "total-hours": 47,
    created_at: Date.now(),
  }
];

function remainingDays(job) {
  // calculo de tempo restante
  // dias restantes
  const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed();
  // criação do projeto
  const createdDate = new Date(job.created_at);
  // dia do vencimento do projeto
  // getDate = recupera o dia
  const dueDay = createdDate.getDate() + Number(remainingDays);
  // data exata do vencimento
  // cria uma nova data em milisegundos
  const dueDateInMs = createdDate.setDate(dueDay);
  // diferença do tempo em milisegundos
  // tempo que vai vencer e o tempo de agora
  const timeDiffInMs = dueDateInMs - Date.now();
  // transformar milli em dias
  // dia em milisegundos
  // milisegundos * segundos * minutos * horas
  const dayInMs = 1000 * 60 * 60 * 24;
  // diferença de dias
  const dayDiff = Math.floor(timeDiffInMs / dayInMs);

  // restam x dias
  return dayDiff;
}

  // console.log(__dirname + "/views/index.html");
  // termina a função
  // send == envia
  // sendFile == enviar um arquivo

// o ejs já lê por padrão a pasta views, mas precisa está no diretorio raiz da aplicação

// será renderizado um arquivo
// o segundo argumento recebe os valores, e esses valores são jogados para o arquivo index.ejs
routes.get('/', (req, res) => {
  const updateJobs = jobs.map(job => {
    // ajustes no job
    // dias restantes
    const remaining = remainingDays(job);
    const status =  remaining <= 0 ? "done" : "progress";

    // ...job está espalhando tudo
    // objeto novo
    return {
      ...job,
      remaining,
      status,
      budget: profile["value-hour"] * job["total-hours"]
    };
  })

  return res.render(views + "index", { jobs: updateJobs });
});
routes.get('/job', (req, res) => res.render(views + "job"));

// envio de dados - salvar dados
// req - requisição
routes.post('/job', (req, res) => {
  // se esse cara anterior existir você segue oo jogo aqui procurando o id dele, caso não exista esqueça
  /*
    Quando o array for vázio, automáticamente vai retornar undefined, por retornar undefined o valor vai ser trocado para 1, caso contrário,
    jobs.length vai retornar o tamanho do array(que com dois valores dentro do array vai retornar 2), que vai ser 2 - 1, o lastId vai ser passado para o objeto no jobs.push({id: lastId + 1});
  */
  const lastId = jobs[jobs.length - 1]?.id || 1;
  // console.log(lastId);

  // entidade
  // const job = req.body;
  // 1 janeiro de 1970 : 00:00:00
  // job.created_at = Date.now(); // atribuindo uma nova data
  // req.body == { name: 'Jonhison', 'daily-hours': '10', 'total-hours': '10' }
  jobs.push({
    id: lastId + 1,
    name: req.body.name,
    'daily-hours': req.body['daily-hours'],
    'total-hours': req.body['total-hours'],
    created_at: Date.now() // criado em - atribuindo data de hoje
  });
  // redirect vai redirecionar para a página determinada
  return res.redirect('/');
});
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"));
// é um caminho(o primeiro argumento), vai ser enviado o objeto profile, junto com o caminho(segundo argumento)
// vai ser enviado pelo motor, para a pasta profile.ejs
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }));


module.exports = routes;
````

## Tipo de rota
 - rota job/:id GET
