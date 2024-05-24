const fs = require("fs").promises

fs.readFile(__dirname  + "/names.txt", "utf-8")
    .then(data => console.log(data))
    .catch( (err) => console.log(err.message))





