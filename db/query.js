const db = require("./connection");
const cTable = require('console.table');

function viewAllDep() {
db.query(`SELECT * FROM department`, (err,row) => {
    if (err) throw err;
    console.table(row);

});
};





module.exports= viewAllDep;