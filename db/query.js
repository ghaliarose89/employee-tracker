const db = require("./connection");
const cTable = require('console.table');

function viewAllDep() {
  const sql = `SELECT * FROM department`;
db.query(sql, (err,row) => {
    if (err) console.log (err);
    console.table(row);

});
};
function viewAllRoles(){ 
  const sql = `SELECT  role.id, role.title, role.salary, department.dep_name AS Department_name FROM role LEFT JOIN department 
  ON role.department_id = department.id; `;
  db.query(sql, (err,row) => {
      if (err) console.log (err);
      console.table(row);
  
  });
}
function viewAllEmployees(){ 
  const sql = `SELECT  employee.id, employee.first_name, employee.last_name,  role.title AS Job_title, role.salary, department.dep_name As Department,employee.manager_id
  FROM employee, role, department 
  WHERE department.id = role.department_id 
                   AND role.id = employee.role_id ORDER BY employee.id;
  `;
  db.query(sql, (err,row) => {
      if (err) console.log (err);
      console.table(row);
  
  });
}

function addDep(){

const sql = `SELECT  employee.id, employee.first_name, employee.last_name,  role.title AS Job_title, role.salary, department.dep_name As Department,employee.manager_id
  FROM employee, role, department 
  WHERE department.id = role.department_id 
                   AND role.id = employee.role_id ORDER BY employee.id;
  `;
  db.query(sql, (err,row) => {
      if (err) console.log (err);
      console.table(row);
  
  });
}



module.exports= viewAllDep ;
module.exports= viewAllRoles;
module.exports=addDep;