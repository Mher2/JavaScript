/*
* 1. Given an object. Invert it (keys become values
*    and values become keys).
*    If there is more than key for that given value create an array.
 */

// ---------------------------- I have not solved!

function invertKeys(prevObj) {
    let newObj = {};

    for (let prevKey in prevObj) {
        let newKey = prevObj[prevKey];

        if (newObj[newKey] !== undefined) {     // for null check
            if (Array.isArray(newObj[newKey])){
                newObj[newKey].push(prevKey)
            } else {
                newObj[newKey] = [newObj[newKey], prevKey]
            }
        } else {
            newObj[newKey] = prevKey
        }
    }
    return newObj;
}

console.log(invertKeys({ a:'1', b:'2' }));
console.log(invertKeys({ a:'1'}));
console.log(invertKeys({ a: '1', b: '2', c: '2', d: '2', }));
console.log(invertKeys({ a: '1', b: '2', c: '2', d: '2', f : {x:1}, }));
