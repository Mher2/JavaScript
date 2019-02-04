/*
* 5. Given an array of nested arrays.
*    Write a recursive function that flattens it.
*    (Hint create function that concats arrays).
*/

function flatterArray(arr, index = 0, newArr = []) {
    if (index === arr.length - 1) {
        return newArr;
    }
    newArr = newArr.concat(arr[index]);
    return flatterArray(arr, index + 1 , newArr)
}

console.log(flatterArray([1, [3, 4, [1, 2]], 10]));         // [1, 3, 4, 1, 2, 10]

// console.log(flatterArray([14, [1, [[[3, []]], 1], 0]]));    // [14, 1, 3, 1, 0]

//
// let arr = [1, [3, 4, [1, 2]], 10];
// let newArr = [];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(`arr[${i}] = ${arr[i]}`);
//     console.log(typeof arr[i]);
//     newArr = newArr.concat(arr[i]);
// }
//
// console.log(`newArr = ${newArr}`);
//
//
// arr1 = [1, 2];
// arr2 = [3, 4];
// arr1 = arr2;
//
// console.log(arr1);


