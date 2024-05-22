
// Import whatever is exported in mathfuns.js 
let funs = require("./mathfuns")
console.log(funs)
console.log(funs.isEven(10))


let { isEven, SIZE } = require("./mathfuns")
console.log(isEven(11), SIZE)

