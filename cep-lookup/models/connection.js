const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tfdm1969',
  database: 'cep_lookup',
});

module.exports = connection;