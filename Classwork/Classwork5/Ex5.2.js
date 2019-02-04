/*
* 2. Given an integer.
*    Write a recursive function that returns n-th element
*    in the Fibonacci sequence.
*/

function fibonacci(number) {
    if (number === 0) {
        return 0;
    } else if (number === 1 || number === 2) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
    // return (n < 3) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

// 0, 1, 2, 3, 4, 5, 6, 7, ...
// 0, 1, 1, 2, 3, 5, 8, 13, ...
console.log(fibonacci(0));     //0
console.log(fibonacci(1));     //1
console.log(fibonacci(2));     //1
console.log(fibonacci(3));     //2
console.log(fibonacci(21));    //10946