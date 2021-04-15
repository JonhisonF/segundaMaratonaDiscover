const Job = require('../model/Job');
const JobUtils = require('../utils/JobUtils');
const Profile = require('../model/Profile');

module.exports =  {
  create(req, res) {
    return res.render("job");
  },
  async save(req, res) {
    // const jobs = await Job.get();
    // se esse cara anterior existir você segue oo jogo aqui procurando o id dele, caso não exista esqueça
    /*
      Quando o array for vázio, automáticamente vai retornar undefined, por retornar undefined o valor vai ser trocado para 1, caso contrário,
      jobs.length vai retornar o tamanho do array(que com dois valores dentro do array vai retornar 2), que vai ser 2 - 1, o lastId vai ser passado para o objeto no jobs.push({id: lastId + 1});
    */
    // const lastId = jobs[jobs.length - 1]?.id || 0;
    // console.log(lastId);

    // entidade
    // const job = req.body;
    // 1 janeiro de 1970 : 00:00:00
    // job.created_at = Date.now(); // atribuindo uma nova data
    // req.body == { name: 'Jonhison', 'daily-hours': '10', 'total-hours': '10' }
    await Job.create({
      name: req.body.name,
      'daily-hours': req.body['daily-hours'],
      'total-hours': req.body['total-hours'],
      created_at: Date.now() // criado em - atribuindo data de hoje
    });
    // redirect vai redirecionar para a página determinada
    return res.redirect('/');
  },
  async show(req, res) {
    const jobs = await Job.get();
    const profile = await Profile.get();
    // paramêtros
    // routes.get('/job/:id', Job.controllers.show);
    const jobId = req.params.id;
    // procurar, busca
    // pegando o job e tá dando um find
    const job = jobs.find(job => Number(job.id) === Number(jobId));

    if(!job) {
      // send - envia a informação para o browser
      return res.send('Job not found!');
    }

    job.budget = JobUtils.calculateBudget(job, profile["value-hour"]);

    return res.render("job-edit", { job })
  },
  async update(req, res) {
    // const jobs = await Job.get();
    // paramêtros
    // pegando número do projeto
    // routes.get('/job/:id', Job.controllers.show);
    const jobId = req.params.id;
    // // procurar, busca
    // // procurando esse job(url) que está dentro do banco de dados
    // const job = jobs.find(job => Number(job.id) === Number(jobId));

    // if(!job) {
    //   // send - envia a informação para o browser
    //   return res.send('Job not found!');
    // }

   /*  const validar = {
      naoValido: 'done'
    }

    if(req.body["total-hours"] < 1 || req.body["daily-hours"] < 1 || req.body.name == "") {

      return res.redirect("/job/" + jobId);
    } */

    // desafio = verificar se os dados vieram ou não
    // ...job joga todos os valores dentro do updateJob, mas name e as outras duas propriedades estão sobreescrevendo essas propriedades que estão sendo espalhadas
    const updatedJob = {
      // ...job,
      name: req.body.name,
      "total-hours": req.body["total-hours"],
      "daily-hours": req.body["daily-hours"]
    }

    // const newJobs = jobs.map(job => {
    //   if(Number(job.id) === Number(jobId)) {
    //     job = updatedJob;
    //   }
    //   return job;
    // });
    // if(newJobs.name == 'Jonhison') { return res.send('Não funciona')}
    await Job.update(updatedJob, jobId);

    res.redirect('/job/' + jobId);
  },
  async delete(req, res) {
    const jobId = req.params.id;

    await Job.delete(jobId);

    return res.redirect('/');
  }
};
