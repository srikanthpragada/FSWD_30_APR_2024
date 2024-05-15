nums = [10, 13, 55, 60, 79, 90]

function isPrime(num) {
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0)
            return false
    }
    return true
}

first_prime = nums.find(isPrime)
all_primes = nums.filter(isPrime)
console.log(first_prime)
console.log(all_primes)