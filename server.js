const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./db/connection');

inquirer.prompt(
  [
    {
      type: "list",
      message: "What would you like to do?",
      name: "choice",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "update an employee role",
        "add an employee",
        "add a role",
        "add a department"
      ]
    }

  ])
  .then(data => {
    switch (data.choice) {
      case "view all departments":
        viewAllDep();
        break;
      case "view all roles":
        viewAllRoles();
        break;
      case "view all employees":
        viewAllEmployees();
        break;
      case "update an employee role":
        UpdateEmployee();
        break;
      case "add an employee":
        addEmployee();
        break;
      case "add a role":
        addRole();
        break;
      case "add a department":
        addDep();
        break;
    }
  });


function viewAllDep() {
  const sql = `SELECT * FROM department`;
  db.query(sql, (err, row) => {
    if (err) console.log(err);
    console.table(row);

  });
};
function viewAllRoles() {
  const sql = `SELECT  role.id, role.title, role.salary, department.dep_name AS Department_name 
    FROM role LEFT JOIN department 
    ON role.department_id = department.id; `;
  db.query(sql, (err, row) => {
    if (err) console.log(err);
    console.table(row);

  });
}
function viewAllEmployees() {
  const sql = `SELECT  employee.id, employee.first_name, employee.last_name,
    role.title AS Job_title, role.salary, department.dep_name As Department,employee.manager_id
    FROM employee, role, department 
    WHERE department.id = role.department_id 
                     AND role.id = employee.role_id ORDER BY employee.id;
    `;
  db.query(sql, (err, row) => {
    if (err) console.log(err);
    console.table(row);

  });
}

function addDep() {
  inquirer.prompt(
    [{
      type: "input",
      message: "Enter the name of the department",
      name: "depName",
    }]
  ).then(data => {
    const depName = data.depName;
    const sql = `insert into department (dep_name) value (?);`;
    db.query(sql, depName, (err, row) => {
      if (err) console.log(err);
      console.table(depName + 'is added to the department table');

    });
  });

};


function addRole() {
  inquirer.prompt([
    {
      type: "input",
      message: "Please enter the Role name",
      name: "roleName",
    },

    {
      type: "list",
      message: "Enter  the Salary for this role",
      name: "salaryNum",
    },
    {
      type: "input",
      message: "Please Choose the Department for this role",
      choices: ['Management', 'Sales', 'HR', 'Create a new department']
    },
  ])
    .then(data => {
      const roleName = data.roleName;
      const depName = data.choices;
      const salaryNum = data.salaryNum;
      switch (depName) {
        case 'Management':
          let dep_id = 1;
          break;
        case 'Sales':
          let dep_id = 2;
          break;
        case 'HR':
          let dep_id = 3;
          break;
        case 'Create a new department':
          addDep();
          break;

      };
      const sql = `INSERT INTO role (title,salary ,department_id) valueS (?,?,?) `;
      const value = [roleName, salaryNum, dep_id];
      db.query(sql, value, (err, rows) => {
        if (err) throw err;
        console.log('New department has been created');
      })
    });
};









db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
})

