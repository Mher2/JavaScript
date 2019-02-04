/*
* 5. Write a function to print all strong numbers before the given number.
*    (Strong numbers are the numbers whose sum of factorial
*    of digits is equal to the original number.)
*/

function factorial(num) {
    let prod = 1;
    for (let i = 1; i <= num; i++) {
        prod *= i;
    }
    return prod;
}

function isStrongNumber(num) {
    let str = num + '';
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += factorial(str[i]);
    }
    return num === sum;
}

function printStrongNumbers(num) {
    let arr = [];
    for (let i = 1; i < num; i++) {
        if (isStrongNumber(i)) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(printStrongNumbers(10));
console.log(printStrongNumbers(160));
