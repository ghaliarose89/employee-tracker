
INSERT INTO department (dep_name)
    VALUEs ('Management'),
			('Sales'),
			('HR');
            
INSERT INTO role (title ,salary ,department_id)
    VALUEs ('Salesperson',75000,2),
    ('Engineer',150000,1),
      ('Lawyer',150000,3),
      ('Accountant',125000,2);

INSERT INTO employee (first_name ,last_name , role_id ,manager_id)
    VALUEs ('KAYLING','BLAZE',4,Null),
    ('CLARE','JONAS',2,1),
    ('SCARLET','FRANK',1,3),
    ('SANDRINE','ADELYN',3,2),
    ('WADE','kily',3,1),
    ('Sam','Sami',2,Null),
    ('Tony','Naily',4,2),
    ('Mark','Mosil',1,Null);
    
    





