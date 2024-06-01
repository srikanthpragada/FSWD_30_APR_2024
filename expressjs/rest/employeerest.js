var express = require('express');
var { connectionDetails } = require("./database")
var mysql2 = require("mysql2/promise")
const port = 8888
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

// GET /employees - Get all employees
app.get('/employees', async (req, res) => {
  try {
    const connection = await mysql2.createConnection(connectionDetails)
    const [results, fields] = await connection.query
      ('SELECT * FROM employees');
    connection.close()
    res.json(results)  // send json to client 
  }
  catch (ex) {
    console.log("Error : " + ex)
    res.status(500).send(ex.message);
  }
})

// GET /employees/10   - Get One Employee 
app.get('/employees/:id', async (req, res) => {
  try {
    const connection = await mysql2.createConnection(connectionDetails)
    const [results, fields] = await connection.query
      ('SELECT * FROM employees where emp_id = ?', [req.params.id]);
    connection.close()

    if (results.length > 0)
      res.json(results[0])  // send json to client 
    else
      res.status(404).send("Employee Id Not Found!")
  }
  catch (ex) {
    console.log("Error : " + ex)
    res.status(500).send(ex.message);
  }
})

// GET /employees/dept/it - Get all employees in a single department 
app.get('/employees/dept/:deptid', async (req, res) => {
  try {
    const connection = await mysql2.createConnection(connectionDetails)
    const [results, fields] = await connection.query
      ('SELECT * FROM employees where dept_id = ?', [req.params.deptid]);
    connection.close()
    res.json(results)  // send json to client 
  }
  catch (ex) {
    console.log("Error : " + ex)
    res.status(500).send(ex.message);
  }
})

// POST  /employees  - Insert a new employee 
app.post('/employees', async (req, res) => {
  try {
    if (!req.body.fullname || !req.body.dept_id || !req.body.salary) {
      res.status(400).send("Invalid Data!")
      return;
    }
    const connection = await mysql2.createConnection(connectionDetails)
    const [results, fields] = await connection.execute
      ('insert into employees(fullname,dept_id,salary) values(?,?,?)',
        [req.body.fullname, req.body.dept_id, req.body.salary]
      );
    connection.close()
    res.status(201).send(req.body)  // created 
  }
  catch (ex) {
    console.log("Error : " + ex)
    res.status(500).send(ex.message);
  }
})

// DELETE employees/10  - Delete an employee 
app.delete('/employees/:id', async (req, res) => {
  try {
    const connection = await mysql2.createConnection(connectionDetails)
    const [results, fields] = await connection.query
      ('delete from employees where emp_id = ?', [req.params.id]);
    connection.close()

    if (results.affectedRows == 1)
      res.status(204).send("")
    else
      res.status(404).send("Employee Id Not Found!")
  }
  catch (ex) {
    console.log("Error : " + ex)
    res.status(500).send(ex.message);
  }
})

// PUT employees/10  - Update an employee 
app.put('/employees/:id', async (req, res) => {
  try {
    if (!req.body.fullname || !req.body.dept_id || !req.body.salary) {
      res.status(400).send("Invalid Data!")
      return;
    }

    const connection = await mysql2.createConnection(connectionDetails)
    const [results, fields] = await connection.query
      ('update employees set fullname = ?, salary = ?, dept_id = ? where emp_id = ?',
           [req.body.fullname, req.body.salary, req.body.dept_id, req.params.id]);
    connection.close()

    if (results.affectedRows == 1)
      res.send("Updated Successfully!")
    else
      res.status(404).send("Employee Id Not Found!")
  }
  catch (ex) {
    console.log("Error : " + ex)
    res.status(500).send(ex.message);
  }
})

app.listen(port, () => {
  console.log(`Employees REST API listening on port ${port}`)
})

