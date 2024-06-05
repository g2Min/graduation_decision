const mysql = require('mysql');

const db = mysql.createPool({
  host: "localhost",
  user: "jimin",
  password: "Jimin@230206",
  database: "dgu",
});

module.exports = db;
