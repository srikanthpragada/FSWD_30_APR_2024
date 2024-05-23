// Copy file sync
const fs = require("fs")

try {
    const data = fs.readFileSync('./files/names.txt', "utf-8");
    fs.writeFileSync("./files/names2.txt", data)
    console.log("Copied!!")
}
catch (ex) {
    console.log("Sorry! File not found!")
}
