// Read file sync
const fs = require("fs")

const data = fs.readFileSync('./files/names.txt', "utf-8");
const lines = data.split("\n")
lines.sort() 

for (let line of lines) {
    console.log(line)
}
   
