/*
* 6. Given an array of numbers.
*    Write a function to separate odd and even numbers in different arrays.
 */

arr1 = [ 45, 12, 3, 6, 17, 0 ];
arr2 = [ 1, 3, 5, 9 ];

function isEven(num) {
    return num % 2 === 0;
}

function separatOdd(arr) {
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isEven(arr[i])) {
            odd.push(arr[i])
        }
    }
    return odd;
}

function separatEven(arr) {
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            even.push(arr[i])
        }
    }
    return even;
}

console.log(separatOdd(arr1));
console.log(separatEven(arr1));
console.log(separatOdd(arr2));
console.log(separatEven(arr2));
