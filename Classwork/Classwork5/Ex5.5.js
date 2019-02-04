/*
* 5. Given a number and an array.
*    Find the second occurrence of the number in the array.
*    Consider that the occurrence of each element in the array is at least two.
*/

function f(num, arr, index=0, counter=0) {
    if (arr[index] === num) {
        counter++;
    }
    if (counter === 2) {
        return index;
    }
    return f(num, arr, index + 1, counter)
}
console.log(f(5, [0, -1, 0, 5, 6, 6, 5, -1, 0, 5, 6]));

// arr = [0, -1, 0, 5, 6, 6, 5, -1, 0, 5, 6];
// num = 5;
//
// let counter = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//         counter++;
//     }
//     if (counter === 2) {
//         console.log(i);
//         break;
//     }
// }
