/*
* 3. Compute the prime factors of a given natural number.
*/

num1 = 456;
num2 = 3465;

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}

function getPrimeFactors(num) {
    let arr = [];
    for (let i = 2; i < num; i++) {
        if (num % i === 0 ) {
            if (isPrime(i)){
                arr.push(i)
            }
        }
    }
    return arr;
}

console.log(getPrimeFactors(num1));
console.log(getPrimeFactors(num2));