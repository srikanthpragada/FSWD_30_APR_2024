// Rest argument
function sum(...nums) {
    //console.log(typeof(nums))
    let total = 0
    for(let n of nums)
       total += n

    return total; 
}

console.log(sum(10, 20, 30))
console.log(sum(10, 20, 30, 1, 2, 3))

