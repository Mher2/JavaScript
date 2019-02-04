/*
* 6. Given an array of numbers.
*    Write a function to separate odd and even numbers in different arrays.
 */

arr1 = [ 45, 12, 3, 6, 17, 0 ];
arr2 = [ 1, 3, 5, 9 ];

function filterArr(arr, needOdd) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === +needOdd) {
            res.push(arr[i])
        }
    }
    return res;
}

function printResult(arr) {
    console.log(filterArr(arr, true));
    console.log(filterArr(arr, false));

}

printResult(arr1);
printResult(arr2);