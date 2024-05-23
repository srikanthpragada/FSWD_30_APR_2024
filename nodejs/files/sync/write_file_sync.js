// Write file sync
const fs = require("fs")

fs.writeFileSync("./files/test.txt", "Line 1\nLine 2\nLine 3")
console.log("Done!")
