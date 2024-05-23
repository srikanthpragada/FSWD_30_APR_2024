// Copy file sync
const fs = require("fs")

function writeFile(err, data) {
    if (err)
        console.log("File not found!")
    else {
        console.log("Writing started...")
        fs.writeFile('./files/names2.txt', data, 'utf-8',
            (err) => {
                if (!err)
                    console.log("Copied")
                else
                    console.log("Writing Error!")
            }
        )
    }
}

fs.readFile('./files/names.txt', "utf-8", writeFile);
console.log("Reading started!!")


