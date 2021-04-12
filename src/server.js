// uma função, no ambiente do node
// vai devolver o express(pacote)
// está recebendo uma função a const express
const express = require("express");
// aqui está sendo executado a função
const server = express();
const routes = require("./routes");

// setando uma configuração, muito semelhante ao use(configuração)
/*
  Significa que o express já espera que você use uma ideia de template engine(ejs - colocar javascript no html)
  engine === motor;
  O motor(engine) de visualização do html, vai ser o motor do ejs;

  O motor é igual de um carro, que faz todo um processamento para um carro andar;

  O ejs vai fazer um processamento html, olhando o contexto <% %> tudo que for dentro desse contexto, ele vai explorar de uma maneira
  bem legal, e depois vai refazer todo o html e vai entregar um html puro para mim;

  Usando o template engine
  Um template é um modelo a ser seguido, com uma estrutura predefinida que facilita o desenvolvimento e criação do conteúdo a partir de algo construído a priori.
  engine - motor
*/
server.set('view engine', 'ejs')

/*
  - middlewares - mercadorias do meio

  Um pessoa, trem ou criatura que vai ficar no meio, no meio do que ? Entre a minha chamada para essa url do get.
  Imagina que o user vai estar jogando um negócio entre '/', <aqui vai ser jogado alguma coisa> (request, response), um homem no meio.

  Ao iniciar o express, antes de entrar no get, está sendo colocado uma funcionalidade nova no express, estou habilitando uma nova
  funcionalidade no express;

  // habilitar arquivos statics;

  // "servidor usa, essa configuração da pasta public, para você fazer todas as rotas para mim, cria todas as rotas automático"

  o use não server para criar rotas automáticas, serve para adicionar configurações ao seu servidor

  // não aparece a pasta public, importa os arquivos
  // todas as imagens viram rotas, esse caminho, ou seja, a url
*/
server.use(express.static("public"));

// ----------------------- urlendecoded deve ser antes do server.use(routes) -----------------------
// usar o req.body
// use seta configurações no servidor para iniciar, colocar configurações no servidor, habilitar configurações no servidor
// urlencoded() - é uma função
/*
  // os dados que vão ser passados de maneira "post" que vai receber no body, imagina que os dados estão de maneira codificados
  extensão, está habilitando o req.body
  // está fazendo a liberação do body(corpo da requisição)
  // agora a requisição pode vim, com esse corpo(body) do formulário, que agora está disponível para acesso'
*/
server.use(express.urlencoded({ extended: true }));

// rotas
// está importando as rotas da pasta routes.js
server.use(routes);

// request, response - // pedidos e respostas
// essa parte é executada só quando a página acessa os diretorios
// primeira rota

// uma função
// vai ligar o servidor
// listen -> ouvir
// primeiro argumento, é a porta 3000, o listen está ouvindo a porta 3000
// o segundo argumento verifica se a porta esta aberta
// essa função  é executada primeiro
server.listen(3000, () => console.log('rodando'));
