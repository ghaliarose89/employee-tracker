const cTable = require('console.table');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./db/connection');
//const query = require ('./db/query');

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
       console.log(data);
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
  })








db.connect(err => {
 // if (err) throw err;
  console.log('Database connected.');
})