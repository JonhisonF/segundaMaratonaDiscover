// init == iniciar, iniciando
// vamos rodar ele uma única vez, rodou o init não precisa rodar mais, ele que vai ser responsável de criar o arquivo de
// banco de dados, ele vai ser a primeira coisa a chamar a conexão com o banco de dados
const Database = require('./config');
// Regra do banco de dados, não pode ter nomes com traço e nem espaços, ele aceita underline _


// inicia a conexão com o banco de dados
// o javascript não espera funções que não são dele, ele executa tudo de uma só vez, e pode dá erro em algumas coisas
// async / await
// ele vai esperar e depois vai passar para o próximo código
// o javascript não fica olhando se o Database terminou ou não, a única coisa que ele faz é iniciar os comandos e passa para o
// próxim

// await == esperar, ele espera uma terminar a ser executada para depois ir para a próxima
// quando terminar de executar, ele vai pegar a inicialização do banco de dados e vai guardar nessa variável "db"
const initDb = {
  // o async fala pro javascript que dentro dessa estrutura vão ter awaits e ele tem que esperar
  async init()  {

    const db = await Database();

    // O async só fala que tudo que tá ali dentro vai esperar
    // toda vez que usarmos um await ele precisa esta dentro de uma estrutura de função async

    /*
      O Database cria toda a inicialização, ele vai na pasta config e chama o "open", ai o open vai lá dentro do sqlite chama outra função(não sei o que ele chama) e retornar a conexão ativa,
    */

    // executar
    // códigos passados no exec são crases ``
    // criando a tabela profile
    await db.exec(`CREATE TABLE profile (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      avatar TEXT,
      monthly_budget INT,
      hours_per_day INT,
      days_per_week INT,
      vacation_per_year INT,
      value_hour INT
    )`);

    // DATETIME hora-data
    await db.exec(`CREATE TABLE jobs(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      daily_hours INT,
      total_hours INT,
      created_at DATETIME
    )`);

    // rodar
    // pega o comando sql aqui e roda ele no banco de dados
    await db.run(`
      INSERT INTO profile (
        name,
        avatar,
        monthly_budget,
        days_per_week,
        hours_per_day,
        vacation_per_year,
        value_hour
      ) VALUES (
        "Jonhison",
        "https://github.com/jonhisonF.png",
        3000,
        5,
        5,
        4,
        75
      );
    `);

    await db.run(`
      INSERT INTO jobs (
        name,
        daily_hours,
        total_hours,
        created_at
      ) VALUES (
        "Pizzaria Guloso",
        2,
        1,
        1617514375018
      );
    `);

    await db.run(`
      INSERT INTO jobs (
        name,
        daily_hours,
        total_hours,
        created_at
      ) VALUES (
        "OneTwo Projects",
        3,
        47,
        1617514375018
      );
    `)

    // fecha a porta com o banco de dados
    await db.close();
  }
};

initDb.init();
