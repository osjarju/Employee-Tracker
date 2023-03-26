const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Port
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "45H@peAK12",
  database: "employees"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
