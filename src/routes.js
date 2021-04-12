// express é uma bibliote para criar um servidor
const express = require('express');
// routes é uma parte do express, dessas rotas que serão criadas as rotas, caminhos, caminho base
const routes = express.Router();

// o ejs já lê por padrão a pasta views
// const basePath = __dirname + "/views";
const views = __dirname + '/views/';

const Profile = {
  data: {
    name: 'Jonhison',
    avatar: 'https://github.com/jonhisonF.png',
    "monthly-budget": 3000,
    "hours-per-day": 5,
    "days-per-week": 5,
    "vacation-per-year": 4,
    "value-hour": 75
  },
  controllers: {
    index(req, res) {
      return res.render(views + "profile", { profile: Profile.data })
    },
    update(req, res) {
      // req.body para pegar os dados
      const data = req.body;
      // definir quantas semanas tem num ano
      // semanas do ano
      const weeksPerYear = 52;
      // remover as semanas de férias do ano, para pegar quantas semanas tem em 1 mês
      // férias por ano
      const weeksPerMonth = (weeksPerYear - data["vacation-per-year"])/ 12;
      // quantas horas por semana estou trabalhando
      // total de horas por dia
      const weekTotalHours = data["hours-per-day"] * data["days-per-week"];
      // horas trabalhadas no mês
      // quantas horas eu trabalhei no mês
      const monthlyTotalHours = weekTotalHours * weeksPerMonth;
      // qual será o valor da minha hora ?
      const valueHour = data["monthly-budget"] / monthlyTotalHours;


      Profile.data = {
        ...Profile.data,
        ...req.body,
        "value-hour": valueHour
      };

      return res.redirect('/profile');
    }
  }
}

// objeto literal
// quando é um objeto literalmente ele tem essa estrutura é dessa forma
// REFATORAÇÃO
const Job = {
  data: [
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
  ],
  controllers: {
    index(req, res) {
      const updateJobs = Job.data.map(job => {
        // ajustes no job
        // dias restantes
        const remaining = Job.services.remainingDays(job);
        const status =  remaining <= 0 ? "done" : "progress";

        // ...job está espalhando tudo
        // objeto novo
        return {
          ...job,
          remaining,
          status,
          budget: Job.services.calculateBudget(job, Profile.data["value-hour"])
        };
      });
      return res.render(views + "index", { jobs: updateJobs });
    },
    create(req, res) {
      return res.render(views + "job");
    },
    save(req, res) {
      // se esse cara anterior existir você segue oo jogo aqui procurando o id dele, caso não exista esqueça
      /*
        Quando o array for vázio, automáticamente vai retornar undefined, por retornar undefined o valor vai ser trocado para 1, caso contrário,
        jobs.length vai retornar o tamanho do array(que com dois valores dentro do array vai retornar 2), que vai ser 2 - 1, o lastId vai ser passado para o objeto no jobs.push({id: lastId + 1});
      */
      const lastId = Job.data[Job.data.length - 1]?.id || 0;
      // console.log(lastId);

      // entidade
      // const job = req.body;
      // 1 janeiro de 1970 : 00:00:00
      // job.created_at = Date.now(); // atribuindo uma nova data
      // req.body == { name: 'Jonhison', 'daily-hours': '10', 'total-hours': '10' }
      Job.data.push({
        id: lastId + 1,
        name: req.body.name,
        'daily-hours': req.body['daily-hours'],
        'total-hours': req.body['total-hours'],
        created_at: Date.now() // criado em - atribuindo data de hoje
      });
      // redirect vai redirecionar para a página determinada
      return res.redirect('/');
    },
    show(req, res) {
      // paramêtros
      // routes.get('/job/:id', Job.controllers.show);
      const jobId = req.params.id;
      // procurar, busca
      const job = Job.data.find(job => Number(job.id) === Number(jobId));

      if(!job) {
        // send - envia a informação para o browser
        return res.send('Job not found!');
      }

      job.budget = Job.services.calculateBudget(job, Profile.data["value-hour"]);

      return res.render(views + "job-edit", { job })
    },
    update(req, res) {
      // paramêtros
      // pegando número do projeto
      // routes.get('/job/:id', Job.controllers.show);
      const jobId = req.params.id;
      // procurar, busca
      // procurando esse job(url) que está dentro do banco de dados
      const job = Job.data.find(job => Number(job.id) === Number(jobId));

      if(!job) {
        // send - envia a informação para o browser
        return res.send('Job not found!');
      }

      // desafio = verificar se os dados vieram ou não
      // ...job joga todos os valores dentro do updateJob, mas name e as outras duas propriedades estão sobreescrevendo essas propriedades que estão sendo espalhadas
      const updatedJob = {
        ...job,
        name: req.body.name,
        "total-hours": req.body["total-hours"],
        "daily-hours": req.body["daily-hours"],
      }

      Job.data = Job.data.map(job => {
        if(Number(job.id) === Number(jobId)) {
          job = updatedJob;
        }
        return job;
      });
      res.redirect('/job/' + jobId);
    },
    delete(req, res) {
      const jobId = req.params.id;
      // filter é filtrar, quando ele encontrar um verdadeiro ele vai filtrar, vai tirar da função
      // mantém ele se for diferente, caso contrário, se for igual ele deleta
      // Tudo que for falso 1 == 1 ele tira
      Job.data = Job.data.filter(job => Number(job.id) !== Number(jobId));

      return res.redirect('/');
    }
  },
  services: {
    remainingDays(job) {
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
    },
    calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
  }
};

  // console.log(__dirname + "/views/index.html");
  // termina a função
  // send == envia
  // sendFile == enviar um arquivo

// o ejs já lê por padrão a pasta views, mas precisa está no diretorio raiz da aplicação

// será renderizado um arquivo
// o segundo argumento recebe os valores, e esses valores são jogados para o arquivo index.ejs
routes.get('/', Job.controllers.index);
routes.get('/job', Job.controllers.create);

// envio de dados - salvar dados
// req - requisição
routes.post('/job', Job.controllers.save);

//
routes.get('/job/:id', Job.controllers.show);
routes.post('/job/:id', Job.controllers.update);
routes.post('/job/delete/:id', Job.controllers.delete);
// é um caminho(o primeiro argumento), vai ser enviado o objeto profile, junto com o caminho(segundo argumento)
// vai ser enviado pelo motor, para a pasta profile.ejs
routes.get('/profile', Profile.controllers.index);
routes.post('/profile', Profile.controllers.update);


module.exports = routes;
