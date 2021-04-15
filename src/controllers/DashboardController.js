const Job = require('../model/Job');
const JobUtils = require('../utils/JobUtils');
const Profile = require('../model/Profile');

module.exports = {
  async index(req, res) {
    const jobs = await Job.get();
    const profile = await Profile.get();

    let statusCount = {
      progress: 0,
      done: 0,
      total: jobs.length
    }
    // total de horas por dia de cada job em progresso
    let jobTotalHours = 0;
    const updateJobs = jobs.map(job => {
      // ajustes no job
      // dias restantes
      const remaining = JobUtils.remainingDays(job);
      const status =  remaining <= 0 ? "done" : "progress";

      // status = done
      // statusCount[done] += 1
      // Somando a quantidade de status
      statusCount[status] += 1;

      // total de horas por dia de cada job em progresso
      jobTotalHours = status === "progress" ? jobTotalHours += Number(job["daily-hours"]) : jobTotalHours;
      // jobTotalHours += Number(job["daily-hours"]);


      // ...job está espalhando tudo
      // objeto novo
      return {
        ...job,
        remaining,
        status,
        budget: JobUtils.calculateBudget(job, profile["value-hour"])
      };
    });
    // quantidade de horas que quero trabalhar dia (PROFILE)
    // MENOS
    // quantidade da hora/dia de cada job em progress
    const freeHours = profile["hours-per-day"] - jobTotalHours;

    // o render joga tudo que estiver no segundo argumento para a pasta designada, nesse caso é o index
    return res.render("index", { jobs: updateJobs, profile: profile, statusCount: statusCount, freeHours: freeHours });
  }
}
