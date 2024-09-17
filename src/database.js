const mysql = require('mysql2');

// Conexão do Docker com o MySQL 

const pool = mysql.createPool({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'test',

});

console.log('Banco conectado.')

module.exports = pool;
