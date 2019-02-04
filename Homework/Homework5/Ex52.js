/*
* 2. Given an array of numbers.
* Write a recursive function to find its minimal positive element.
* (if such element does not exist, return -1)
*/

function findMinPositiveNum(arr, element = arr.pop(), foundPositive = true, min = undefined) {
    if (element >= 0 && foundPositive) {
        min = element;
        foundPositive = false;
    }
    if (element >= 0 && element < min) {
        min = element;
    }
    if (arr.length === 0) {
        return min === undefined ? -1 : min;
    }

    return findMinPositiveNum(arr, element = arr.pop(), foundPositive, min);
}

console.log(findMinPositiveNum([56, -9, 87, -23, 0, -105, 55, 1]));         // 0
console.log(findMinPositiveNum([45, -9, 15, 5, -78]));                      // 5
console.log(findMinPositiveNum([-5, -9, -111, -1000, -7]));                 // -1
console.log(findMinPositiveNum([]));                                        // -1
