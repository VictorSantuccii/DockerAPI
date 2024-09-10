const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'test',

});

console.log('Banco conectado.')

module.exports = pool;
