let a = [1, 2, 3]

// let n1 = a[0]
// let n2 = a[1]

// Destructuring array 
let [n1, n2, n3] = a
console.log(n1, n2, n3)

let [x, y] = a
console.log(x, y)

let [v1, v2, v3, v4 = 0] = a
console.log(v1, v2, v3, v4)

let [p, , q] = a
console.log(p, q)

let [f, ...r] = a
console.log(f, r)