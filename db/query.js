const db = require("./connection");
const cTable = require('console.table');

function viewAllDep() {
db.query(`SELECT * FROM department`, (err,row => {
    if (err) throw err;
    console.table('Department name','Department Id',row);

}));
};





module.exports= viewAllDep;