const fs = require("fs").promises

let p = fs.readFile(__dirname  + "/names2.txt", "utf-8")
p.then(
         data => console.log(data),     // fulfilled 
         error => console.log(error.message)    // reject
)   

console.log("The End!")




