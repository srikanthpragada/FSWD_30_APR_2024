var {con} = require("./util")

con.connect(function (err) {
  if (err) throw err;
 
  con.query(
    "insert into employees(fullname,dept_id,salary) values(?,?,?)", // SQL command
    ['Jason Hunter', 'sp', 500000], // Parameters 
    function (err, result)  // Callback 
    {
      if (err) throw err;
      console.log(result)
      console.log("Inserted %d rows", result.affectedRows)
      con.end()
    }
  );
}
);
 