var express = require('express');
var mysql2 = require('mysql2/promise');
var path = require('path');
var app = express();
app.use(express.static('public'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Process data sent from HTML form using post request 
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

var port = 8888

var { connectionDetails } = require('./database');

async function getDepartments() {
    try {
        const connection = await mysql2.createConnection(connectionDetails)
        const [results, fields] = await connection.query
            ('SELECT * FROM departments');
        connection.close()
        return results
    }
    catch (ex) {
        console.log("Error : " + ex)
        return null
    }
}

async function addDepartment(deptid, deptname) {
    try {
        const connection = await mysql2.createConnection(connectionDetails)
        const [result, fields] = await connection.execute
            ("insert into departments values(?,?)", [deptid, deptname])
        connection.close()
        return true
    }
    catch (ex) {
        console.log("Error : " + ex)
        return false
    }
}

async function deleteDepartment(deptid) {
    try {
        const connection = await mysql2.createConnection(connectionDetails)
        const [result, fields] = await connection.execute
            ("delete from departments where dept_id = ?", [deptid])
        console.log(result)
        connection.close()
        if (result.affectedRows == 0)
            return false 
        else 
            return true
    }
    catch (ex) {
        console.log("Error : " + ex)
        return false
    }
}


app.get('/', async (req, res) => {
    let depts = await getDepartments()
    if (depts)
        res.render("listdept", { departments: depts })
    else
        res.render("error")
})


app.get('/add', async (req, res) => {
    res.render("adddept")
})

app.post('/add', async (req, res) => {
    // take data from request and insert row into table 
    let dept_id = req.body.deptid
    let dept_name = req.body.deptname
    let result = await addDepartment(dept_id, dept_name)
    if (result)
        res.redirect("/")   // redirect to list 
    else
        res.render("error")
})

app.get('/edit', async (req, res) => {
    res.send("To be implemented")
})

app.post('/edit', async (req, res) => {
    res.send("To be implemented")
})

app.get('/delete', async (req, res) => {
    // read deptid 
    let id = req.query.id
    if (!id) {
        res.send("<h3 style='color:red'>Sorry! Department Id is missing! </h3>")
        return
    }
    let result = await deleteDepartment(id)
    if (result)
        res.redirect("/")
    else
        res.render("error")
})


app.listen(port, () => {
    console.log(`Express Application listening on port ${port}`)
})  
