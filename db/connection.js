const mysql= require ('mysql2');
require('dotenv').config();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Mysqlpassword',
    database:'employees'
},
console.log('Connected to the employees database.'),
);
db.connect(function (err) {
    if (err) throw err;
  });

module.exports = db;
