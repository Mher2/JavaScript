/*
* 3. Given an array of numbers which is almost sorted in ascending order.
*    Find the index where sorting order is violated.
*/

function findIndexOfViolatedOrder(arr, index = 0, elem1 = arr.shift()) {

    if (elem1 > arr[0]) {
        return index + 1;
    }

    if (arr.length === 0) {
        return -1;
    }

    return findIndexOfViolatedOrder(arr, index + 1)
}

console.log(findIndexOfViolatedOrder([1, 12, 15, 48, 64]));         // -1
console.log(findIndexOfViolatedOrder([-9, -4, -4, 3, 12, 4, 5]));   // 5
console.log(findIndexOfViolatedOrder([]));                          // -1
