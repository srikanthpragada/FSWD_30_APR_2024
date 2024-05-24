const fs = require("fs").promises

async function copyFile() {
    try {
        console.log("About to read!")
        let data = await fs.readFile(__dirname + "/names.txt", "utf-8")
        console.log("About to write!")
        await fs.writeFile(__dirname + "/names2.txt", data)
        console.log("Copied!")
    }
    catch (error) {
        console.log(error.message)
    }
}

copyFile() 
// Normal operation 
for(let i = 1; i <= 50; i ++)
   console.log(i)
