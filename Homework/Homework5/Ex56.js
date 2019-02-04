/*
* 6. Given an array and a number N.
*    Write a recursive function that rotates an array N places to the left.
*    (Hint: to add element to the beginning use arr.unshift())
 */

function rotateArrayToTheLeft(arr, num, i = 0, newArr = []) {
    let len = arr.length;
    if (i + num % len >= len) {
        newArr.push(arr[ i + num % len - len ]);
    } else if (Math.abs(len + num % len + i) < len ) {
        newArr.push(arr[ Math.abs(len + num % len + i) ]);
    } else if (Math.abs(len + num % len + i) >= len) {
        newArr.push(arr[ Math.abs(i + num % len) ]);
    } else {
        newArr.push(arr[ i + num % len ]);
    }
    if (len === newArr.length) {
        return newArr;
    }

    return rotateArrayToTheLeft(arr, num, i + 1, newArr)
}

console.log(rotateArrayToTheLeft(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
console.log(rotateArrayToTheLeft(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));
console.log(rotateArrayToTheLeft(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 11));
console.log(rotateArrayToTheLeft(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -10));
console.log(rotateArrayToTheLeft(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 0));
console.log(rotateArrayToTheLeft(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 8));
