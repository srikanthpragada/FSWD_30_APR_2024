// Read file sync
const fs = require("fs")

fs.readFile('./files/name.txt', "utf-8",
    (err, data) => {
        if (err)  // error
            console.log("File not found!")
        else
            console.log(data)
    }
);
console.log("Started reading....")

