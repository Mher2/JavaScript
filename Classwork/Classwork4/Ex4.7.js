/*
* 7. Write a function that calculates sum, difference,
*    multiplication and division between given array elements
*    depending on passed operation symbol.
*    Write appropriate function for each operation.
 */

function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

function difference(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result -= arr[i];
    }
    return result;
}

function multiplication (arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}
function division (arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result /= arr[i];
    }
    return result;
}

function calculate(arr, symbol) {
    if (symbol === "+") {
        return sum(arr);
    } else if (symbol === "-") {
        return difference(arr);
    } else if (symbol === "*") {
        return multiplication(arr);
    } else if (symbol === "/") {
        return division(arr);
    } else {
        return "Wrong symbol " + symbol;
    }
}

console.log(calculate([ 1, 2, 3, 4 ], symbol="+"));
console.log(calculate([ 1, 2, 3, 4 ], symbol="-"));
console.log(calculate([ 1, 2, 3, 4 ], symbol="*"));
console.log(calculate([ 1, 2, 3, 4 ], symbol="/"));
console.log(calculate([ 1, 2, 3, 4 ], symbol="**"));