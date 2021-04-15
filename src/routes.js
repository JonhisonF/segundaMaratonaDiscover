// express é uma bibliote para criar um servidor
const express = require('express');
// routes é uma parte do express, dessas rotas que serão criadas as rotas, caminhos, caminho base
const routes = express.Router();
// requisição para a pasta ProfileController
const ProfileController = require('./controllers/ProfileController');
const JobController = require('./controllers/JobController');
const DashboardController = require('./controllers/DashboardController');

// o ejs já lê por padrão a pasta views
// const basePath = __dirname + "/views";
// quando utilizamos __dirname no arquivo, ele tá pegando qual a pasta que ess arquivo tá dentro, que nesse caso é a pasta "src"
// __dirname == src/views
// const views = __dirname + '/views/';

  // console.log(__dirname + "/views/index.html");
  // termina a função
  // send == envia
  // sendFile == enviar um arquivo

// o ejs já lê por padrão a pasta views, mas precisa está no diretorio raiz da aplicação

// será renderizado um arquivo
// o segundo argumento recebe os valores, e esses valores são jogados para o arquivo index.ejs
routes.get('/', DashboardController.index);
routes.get('/job', JobController.create);

// envio de dados - salvar dados
// req - requisição
routes.post('/job', JobController.save);

//
routes.get('/job/:id', JobController.show);
routes.post('/job/:id', JobController.update);
routes.post('/job/delete/:id', JobController.delete);
// é um caminho(o primeiro argumento), vai ser enviado o objeto profile, junto com o caminho(segundo argumento)
// vai ser enviado pelo motor, para a pasta profile.ejs
routes.get('/profile', ProfileController.index);
routes.post('/profile', ProfileController.update);

module.exports = routes;
