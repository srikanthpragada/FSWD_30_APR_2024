const fs = require("fs").promises

async function convertUpperAndCopyFile(sourceFile, targetFile) {
    try {
        let data = await fs.readFile(sourceFile, "utf-8")
        await fs.writeFile(targetFile, data.toUpperCase())
        console.log("Copied!")
    }
    catch (error) {
        console.log("Sorry! Error --> " + error.message)
    }
}

convertUpperAndCopyFile(__dirname + "/names.txt", __dirname + "/unames.txt")
 