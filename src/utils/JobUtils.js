module.exports =  {
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
    // ceil arrendonda para cima ex: 1.4 = 2
    const dayDiff = Math.ceil(timeDiffInMs / dayInMs);
    console.log(dayDiff);

    // restam x dias
    return dayDiff;
  },
  calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}
