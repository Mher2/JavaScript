/*
* 2. Given an array.
*    Write a function that sorts it using merge sort.
*
*/

function mergeSort(arr, leftArr=[], rightArr=[]) {

    let len = arr.length;
    if (arr.length <= 1) {
        return arr;
    }

    leftArr = mergeSort(arr.slice(0, len/2));
    rightArr = mergeSort(arr.slice(len/2));
    return merge(leftArr, rightArr)
}

function merge(left, right) {
    let mergedArray = [];
    while (left.length > 0 && right.length > 0) {
        mergedArray.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return mergedArray.concat(left.length > 0 ? left : right);
}

// Armen method
function mergeSort_2(arr, leftArr=[], rightArr=[]) {

    let len = arr.length;
    if (arr.length === 1) {
        return arr;
    }

    let center = Math.floor(arr.length / 2);
    let left = arr.slice(0, center);
    let right = arr.slice(center, arr.length);

    return merge_2(mergeSort_2(left), mergeSort_2(right));
}

function merge_2(left, right) {
    let leftIndex = 0, rightIndex = 0;
    let result = [];
    while (left[leftIndex] < left.length && right[rightIndex] < right.length) {
        if (right[rightIndex] < left[leftIndex]) {
            result.push(right[++rightIndex]);
        } else {
            result.push(left[++leftIndex]);
        }
    }
    return result
        .concat(right.slice(rightIndex, right.length))
        .concat(left.slice(leftIndex, left.length));
}

console.log(mergeSort([ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]));
console.log(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]));
console.log(mergeSort_2([ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]));
console.log(mergeSort_2([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]));
