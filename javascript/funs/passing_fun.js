 
function mathop(a, b, func) {
    return  func(a, b)
}

function add(n1, n2) {
    return n1 + n2
}

function multiply(n1, n2) {
    return n1 * n2 
}

console.log(mathop(10, 20, add))
console.log(mathop(10, 20, multiply))