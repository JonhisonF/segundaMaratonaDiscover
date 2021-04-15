const sqlite3 = require('sqlite3');
// desse jeito conseguimos falar para o javascript, que só queremos pegar a funcionalidade chamada open e trazer apenas ela
const { open } = require('sqlite');

// abertura do banco de dados
// construir, conexão
// passar um objeto e passar dois termos dentro desse objeto
// filename = vai criar um arquivo para salvar os dados, que salva no projeto, './database.sqlite' no do arquivo
// driver = o driver vai trabalhar do jeito que ele precisa trabalhar, e salvar os dados dentro do nome do arquivo './database.sqlite'
// open precisa está dentro de chavez, o ideal é esta dentro de uma arrow function () => {}
// o sqlite segue uma regra, que para usar o open precisa esta dentro de uma function

/*
  Toda vez que quisermos fazer uma conexão com o banco para enviar, pegar alguma coisa de lá de dentro precisamos importar
  esse config(pasta) e o open
  Toda vez que chamarmos esse arquivo (config) estamos iniciando a conexão com o banco de dados
*/
module.exports = () => open({
  filename: './database.sqlite',
  driver: sqlite3.Database
});
