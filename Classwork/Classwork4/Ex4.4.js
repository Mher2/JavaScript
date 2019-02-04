/*
* 4. Find the difference between the square of the sum and
*    the sum of the squares of the first n natural numbers.
*/

function squaresOfSum(num) {
    return Math.pow(((1 + num) / 2) * num, 2);
}

function sumOfSquare(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + Math.pow(i, 2)
    }
    return sum;
}

console.log(squaresOfSum(10) - sumOfSquare(10));
