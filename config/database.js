var mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database:'to_do_app',
  port: 3306,  
});
db.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySql database!");
});

module.exports = db;