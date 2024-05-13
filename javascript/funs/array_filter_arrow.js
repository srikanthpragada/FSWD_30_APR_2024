let a = [1, 3, 4, 5, 10, 30]

// Using arrow function 
odd_nums = a.filter(v => v % 2 === 1)
console.log(odd_nums)

// Using index with filter 
console.log(a.filter((v, idx) => idx % 2 == 1))