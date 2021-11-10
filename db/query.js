const db = require("./connection");
const cTable = require('console.table');

function viewAllDep() {
  const sql = `SELECT * FROM department`;
db.query(sql, (err,row) => {
    if (err) console.log (err);
    console.log(row);

});
};





module.exports= viewAllDep;