// Read file sync
const fs = require("fs")

function showData(err, data) {
    console.log(data)
}

fs.readFile('./files/names.txt', "utf-8", showData);
console.log("Started reading....")
 
