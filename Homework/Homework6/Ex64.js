/*
* 4. Given a sorted array and an element from that array.
*    Find the index of that element using binary search.
*
*    Presume the array is already sorted.
*    Example:
*
*    [1,2,3,4,5], 3 -> 2
*/

function binarySearch(arr, element, index = 0) {

    if (element < arr[0] || element > arr[arr.length-1]) {
        return "Could not find element!";
    }

    if (arr.length === 1) {
        return index;
    }

    let arrLeft = arr.slice(0, arr.length/2);
    let arrRight = arr.slice(arr.length/2);

    if (element > arrLeft[arrLeft.length-1]) {
        index = index + Math.floor(arr.length/2);
        return binarySearch(arrRight, element, index);
    } else {
        return binarySearch(arrLeft, element, index);
    }
}

console.log(binarySearch([1, 4, 12, 13, 15, 18, 19, 29, 39, 40, 51, 68, 73, 98], 1));
console.log(binarySearch([1, 4, 12, 13, 15, 18, 19, 29, 39, 40, 51, 68, 73, 98], 29));
console.log(binarySearch([1, 4, 12, 13, 15, 18, 19, 29, 39, 40, 51, 68, 73, 98], 98));
console.log(binarySearch([1, 4, 12, 13, 15, 18, 19, 29, 39, 40, 51, 68, 73, 98], -16));
