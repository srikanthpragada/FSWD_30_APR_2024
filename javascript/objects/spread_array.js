let a = [1,2,3]
let b = a            // create an alias 
let c = [0, ...a , 100] // spread array and create a copy 

console.log(c)

// console.log(a, b)
// a.push(4)

// console.log(a, b, c)