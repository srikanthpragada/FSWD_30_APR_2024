var s = "Hello"

console.log(s[0])  // index

var rate = 100

console.log("Rate = " + rate)
console.log(`Rate = ${rate}`)  // template string 

console.log(s.includes('lo'))
console.log(s.indexOf('l'))
console.log(s.lastIndexOf('l'))
console.log(s.startsWith("H"))

var st = "abc,xyz,pqr"
var parts = st.split(",")
console.log(parts)   // array 

console.log(st.substring(1,3))
console.log(st.slice(3))

console.log("*".repeat(10))
console.log("   abc xyz  ".trim())

s = "  abc   xyz   "
ns = s.trim()
console.log(ns)
console.log(s)

console.log(s.length)






