/*
* 4. Given an array.
*    Write a recursive function that removes the first element and
*    returns the given array. (without using arr.unshift())
 */

function removeFirstElem(arr, index = 0, newArr = []) {
    if (arr.length-1 === newArr.length) {
        return newArr;
    }
    newArr[index] = arr[index+1];
    return removeFirstElem(arr, index + 1, newArr)
}

console.log(removeFirstElem([6, 78, 'n', 0, 1]));       //  [78, 'n', 0, 1]
console.log(removeFirstElem([5]));                      // []
