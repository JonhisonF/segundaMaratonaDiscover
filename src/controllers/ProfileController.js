const Profile = require('../model/Profile');

// module.exports exporta tudo que está dentro
// get = pegar
module.exports = {
  async index(req, res) {
    return res.render("profile", { profile: await Profile.get() })
  },
  async update(req, res) {
    // req.body para pegar os dados
    // fica todos os dados
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

    const profile = await Profile.get();

    // atualizando os dados
    await Profile.update({
      ...profile,
      // o req.body altera o Profile.get()
      ...req.body,
      "value-hour": valueHour
    });

    return res.redirect('/profile');
  }
}
