const mysql= require ('mysql2');
require('dotenv').config();
const db = mysql.createConnection({
    host: 'localname',
    user: process.env.DB_USER,
    password:process.env.DB_PW,
    database:process.env.DB_NAME
},
console.log('Connected to the employees database.'),
);

module.exports = db;
