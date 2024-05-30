var express = require('express');
var path = require('path');
var app = express();
var port = 8888

var mysql2 = require('mysql2/promise');

async function getDepartments() {
    const connection = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'apr30',
    });

    const [results, fields] = await connection.query('SELECT * FROM departments');
    return results 
}


app.use(express.static('public'))

app.get('/', async (req, res) => {
    let depts = await getDepartments()
    let output = "<h1>Departments </h1><ul>";

    for (let dept of depts) {
         output += `<li>${dept.dept_name}</li>`
    }

    output += "</ul>"
    res.end(output)
})


app.listen(port, () => {
    console.log(`Express Application listening on port ${port}`)
})  
