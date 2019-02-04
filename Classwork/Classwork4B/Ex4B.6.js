/*
* 6. Given an array of numbers. Find the pair of adjacent elements that have the largest
product and return that product.
 */

function getLargestProduct(arr) {
    let len = arr.length - 1;
    let max = arr[0] * arr[1];
    for (let i = 1; i < len; i++) {
        let current = arr[i] * arr[i+1];
        if (current > max) {
            max = current;
        }
    }
    return max;
}

console.log(getLargestProduct([1, 2, 3, 4, 0, 5]));
console.log(getLargestProduct([10, 2, 3, 4, 0, 5]));
console.log(getLargestProduct([1, 2, 3, 4, 0, 5, 6]));
