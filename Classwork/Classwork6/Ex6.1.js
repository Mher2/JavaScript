/*
* 1. Given an array.
*    Write a function that sorts it using bubble sort.
*/

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]){
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
            // console.log()
        }
    }
    return arr;
}

console.log(bubbleSort([ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]));
