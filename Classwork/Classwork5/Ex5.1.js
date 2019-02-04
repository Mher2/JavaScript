/*
* 1. Given a positive number.
*    Write a recursive function that returns its factorial.
*    ( n! = n * (n-1) * (n-2) * … * 3 * 2 * 1 , 0! = 1 )
*/

function factorial(number) {
    if (number === 0) {
        return 1;
    }
    return factorial(number - 1) * number;
}

console.log(factorial(5));