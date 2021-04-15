const Database = require('../db/config');

// get - pega os dados retornando eles
module.exports = {
  async get() {
    const db = await Database();
    // get é para o SELECT
    // mas o get só traz um valor, o all trás todos
    // tudo que ele encontrar ele trás
    const jobs = await db.all(`SELECT * FROM jobs`);

    await db.close();

    return jobs.map(job => ({
        id: job.id,
        name: job.name,
        "daily-hours": job.daily_hours,
        "total-hours": job.total_hours,
        "created_at": job.created_at
    }));
  },
  async update(updatedJob, jobId) {
    const db = await Database();

    db.run(`
      UPDATE jobs SET
        name = "${updatedJob.name}",
        daily_hours = ${updatedJob["daily-hours"]},
        total_hours = ${updatedJob["total-hours"]}
      WHERE id = ${jobId}
    `);
    // vai alterar no id tal

    await db.close();
  },
  async delete(id) {
    // filter é filtrar, quando ele encontrar um verdadeiro ele vai filtrar, vai tirar da função
    // mantém ele se for diferente, caso contrário, se for igual ele deleta
    // Tudo que for falso 1 == 1 ele tira
    // vai procurar algo para tirar
    // data = data.filter(job => Number(job.id) !== Number(id));
    const db = await Database();

    // deletar alguma coisa da tabela jobs
    // apaga da tabela jobs onde o campo "id" for igual ao id que está sendo passado
    await db.run(`DELETE FROM jobs WHERE id = ${id}`);

    await db.close();
  },
  async create(newJob) {
    const db = await Database();
    // inserir novos valores na tabela jobs
    await db.run(`
      INSERT INTO jobs (
        name,
        daily_hours,
        total_hours,
        created_at
      ) VALUES (
        "${newJob.name}",
        ${newJob["daily-hours"]},
        ${newJob["total-hours"]},
        ${newJob.created_at}
      )
    `);

    await db.close();
  }
};
