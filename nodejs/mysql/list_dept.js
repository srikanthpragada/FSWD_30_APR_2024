var {con} = require("./util")

con.connect(function (err) {
  if (err) throw err;
  
  con.query("select * from departments",
    function (err, departments) {
      if (err) throw err;
      //console.log(departments)
      //console.log(fields)
      for (let dept of departments) {
         console.log(`${dept.dept_id} - ${dept.dept_name}`)
      }
      con.end()
    }
  );
}
);
 