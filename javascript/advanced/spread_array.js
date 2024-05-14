let a = [1,2,3]
let b = a            // create an alias 
let c = [...a]       // spread array and create a copy 

a[0] = 10
console.log(b)
console.log(c)

let d = [100, ...c, 200]
console.log(d)

