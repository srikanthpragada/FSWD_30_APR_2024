let p = { firstname: 'Larry', company: "Google", age : 40 }

let { firstname, company } = p

console.log(firstname, company)

let { firstname: n, company: c, age = 30 } = p
console.log(n, c, age)




