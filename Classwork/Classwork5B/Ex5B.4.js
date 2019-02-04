/*
* 4. Given an object. Write a function that creates a deep copy of it.
*/

// check also if there is a array and deep copy array!!!

function deepCopy(obj1) {
    let obj2 = {};
    for (let key1 in obj1) {
        if (typeof obj1[key1] === 'object' && !Array.isArray(obj1[key1])) {     // check also if there is a array and deep copy array!!!
            obj2[key1] = deepCopy(obj1[key1])
        } else {
            obj2[key1] = obj1[key1];
        }
    }
    return obj2;
}

var a = { a: '1', b: { a: 2} };
var b = deepCopy(a);
// var b = a;


a.b.a = 123;
console.log(a);
console.log(b);
console.log(b.b.a);
console.log(b.b.a !== 123);
