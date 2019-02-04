/*
* 3. Given an array.
*    Write a recursive function that returns the sum of it.
*    (Hint: arr.pop())
*/

function sum(arr) {
    // if (arr.length === 0) {
    //     return 0;
    // }
    return arr.length === 0 ? 0 : arr.pop() + sum(arr);
}

console.log(sum([]));                   // 0
console.log(sum([1, -1, 35]));          // 35
console.log(sum([1,  10,  12,  3]));    // 26

