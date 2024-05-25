var mysql = require('mysql');

var con = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "apr30"
  }
);


con.connect( (err) => {
    if (err) throw err;
    console.log("Connected!");
    con.end()  // close connection 
  }
);
