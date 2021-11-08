DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;
USE employees;

CREATE TABLE department (
    id INT PRIMARY KEY  NOT NULL,
    dep_name VARCHAR(30)

);

CREATE TABLE role (
     id INT PRIMARY KEY  NOT NULL,
     title VARCHAR(30),
     salary DECIMAL (10,2),
     department_id INT,
     FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employee (
     id INT PRIMARY KEY  PRIMARY KEY,
     first_name VARCHAR(30),
     last_name VARCHAR(30),
     role_id INT REFERENCES role(id),
     manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
)
