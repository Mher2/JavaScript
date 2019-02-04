/*
* 3. Given two objects.
*    Write a function that performs shallow compare.
 */

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

console.log(shallowCompare({ a: '1' }, { a: '1'}));
console.log(shallowCompare({ a: '1' }, { a: '1', b: '2' }));
console.log(shallowCompare({}, {}));
console.log(shallowCompare({ a: '1', b: '2' }, { b: '2' }));
console.log(shallowCompare({ a: '1' }, { a: '12'}));
console.log(shallowCompare({ a: '1', b: '2' }, { b: '21' }));
