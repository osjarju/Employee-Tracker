const mysql = require("mysql2");

const connection = mysql.createConnection({

});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
