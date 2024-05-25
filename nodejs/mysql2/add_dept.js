var mysql2 = require('mysql2/promise');

async function add_dept() {
  const con = await mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "apr30"
  });

  const [result, fields] = await con.execute
                           ("insert into departments values(?,?)", 
                            ['d2','Department 2'])
  console.log(result)
  con.end();
}


add_dept()