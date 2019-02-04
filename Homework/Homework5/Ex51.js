/*
* 1. Write a recursive function to determine whether
*    all digits of the number are odd or not.
 */

function checkDigitsAreOdd(num, counter = 0) {

    if (num === 0 && counter !== 0) {
        return true;
    }

    if (num % 2 === 0) {
        return false;
    }

    return checkDigitsAreOdd((num - num % 10) / 10, counter + 1)
}

console.log(checkDigitsAreOdd(0));
console.log(checkDigitsAreOdd(4211133));
console.log(checkDigitsAreOdd(7791));
console.log(checkDigitsAreOdd(5));
console.log(checkDigitsAreOdd(904));
