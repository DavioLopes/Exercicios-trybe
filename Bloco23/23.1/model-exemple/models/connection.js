

const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "172.17.0.1",
  user: "davio",
  password: "password",
  database: "model_example",
});

module.exports = connection;
