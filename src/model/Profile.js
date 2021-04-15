const Database = require('../db/config');

// criando um objeto literal, habilitando exportação
module.exports = {
  // async é só uma forma de falar para o javascript que aqui dentro dessa estrutura estamos utilizando await e ele deve esperar cada um ser executado
  async get() {
    // iniciando o banco de dados
    const db = await Database();
    // selecionar um campo name da tabela profile
    // * selecionar todos os campos
    // get vai buscar uma única informação
    const data = await db.get(`
      SELECT * FROM profile
    `);

    // fecha a conexão
    await db.close();

    return {
      name: data.name,
      avatar: data.avatar,
      "monthly-budget": data.monthly_budget,
      "days-per-week" : data.days_per_week,
      "hours-per-day": data.hours_per_day,
      "vacation-per-year": data.vacation_per_year,
      "value-hour": data.value_hour
    };

  },
  async update(newData) {
    // abrindo conexão com o banco de dados
    const db = await Database();
    // UPDATE atualiza os dados da tabela profile (SET = mudar, setar, alterar)
    db.run(`
      UPDATE profile SET
        name = "${newData.name}",
        avatar = "${newData.avatar}",
        monthly_budget = ${newData["monthly-budget"]},
        days_per_week = ${newData["days-per-week"]},
        hours_per_day = ${newData["hours-per-day"]},
        vacation_per_year = ${newData["vacation-per-year"]},
        value_hour = ${newData["value-hour"]}
    `);

    await db.close();
  }
};
