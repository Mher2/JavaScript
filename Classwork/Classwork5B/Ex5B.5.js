/*
*  5. Given an array. Determine whether it consists only from uniques or not.
*/

// make sure it is working for array elements which are objects

function shallowCompare(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

function isUnique(arr) {
    let len = arr.length;
    for(let i = 0; i < len-1; i++) {
        for(let j = i+1; j < len; j++) {
            if (typeof arr[i] === "object" && typeof arr[j] === "object") {
                if (shallowCompare(arr[i], arr[j])) {
                    return false;
                }
            } else {
                if (arr[i] === arr[j]) {
                    return false;
                }
            }
        }
    }
    return true;
}


console.log(isUnique([ 1, 2, {a: 1}, {a: 1}, 5 ]));
console.log(isUnique([ 1, 2, {a: 1}, {a: 2}, 5 ]));