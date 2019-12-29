//cai dat thu vien
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

const dbConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    port: 3306,
    database: "employee_management"
});

app.get('/employees', (req, res) => {
    let sqlGetEmployees = 'SELECT * FROM employees';

    dbConnect.query(sqlGetEmployees, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
})



app.get("/employees/:idemlployees", (req, res) => {
    const selectedEmployeeId = req.params.id;
    const sqlGetEmployeeById = `SELECT * FROM employees WHERE idemlployees = ${selectedEmployeeId}`;
    dbConnect.query(sqlGetEmployeeById, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
});

app.post('/employees', (req, res) => {
    const sqlAddEmployee = `INSERT INTO employees (name, age, salary) VALUES ?`;
    const newEmployee = [
        [
            req.body.name,
            req.body.age,
            req.body.salary
        ]
    ]
    dbConnect.query(sqlAddEmployee, [newEmployee], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    });
});

app.put('/employees/:idemployees', (req,res) => {
    const selectedEmployeeId = req.params.id;
    const sqlGetEmployeeById = `UPDATE employees SET name = ?, age = ?, salary = ?  WHERE idemployees = ?`;
    dbConnect.query(sqlGetEmployeeById,[
        req.body.name,
        req.body.age,
        req.body.salary,
        selectedEmployeeId
    ], (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
    
});

app.delete('/employees/:idemlployees', (req,res) => {
    // console.log('delete employee');
    const selectedEmployeeId = req.params.id;
    const sqlGetEmployeeById = `DELETE FROM employees WHERE idemployees = ${selectedEmployeeId}`;
    dbConnect.query(sqlGetEmployeeById, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

// bai tap phan trang
// app.get('/employees?name=&page=', (req, res) => {
//     let SeletedName = req.query.name;
//     let SelectedPage = req.query.page;
//     const sqlGetEmployees = `SELECT * FROM employees WHERE name LIKE '%$ ? %' LIMIT 5 OFFSET ?`;
//     dbConnect.query(sqlGetEmployees,[
//         SeletedName,
//         SelectedPage
//     ], (err, result) => {
//         if (err) {
//             throw err;
//         }
//         res.send(result);
//     });
// })

dbConnect.connect(err => {
    if (err) throw err;
    console.log(`Database was connected`);
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
})