/*
* 9. A perfect number is a positive integer that is equal to the sum of its proper positive divisors.
* Print all perfect numbers between 1 and 500.
*/
let i;

for (i = 2; i <= 500; i++) {
    let sum = 1;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            sum += j + i/j;
        }
    }
    if (sum === i) {
        console.log(i + " Yes");
    } else {
        // console.log(i + " no");
    }
    // console.log("Checking - " + i)
}

console.log("Finished!");



// }