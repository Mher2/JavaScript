/*
* 7. Given a string, compute recursively (no loops) a new string
* where all appearances of "pi" have been replaced by "3.14".
*
*/
const pi = 'pi';
const replacePi = '3.14';

function f(str, index = 0, newStr = '') {
    if (str.substr(index, pi.length).toLowerCase() === pi) {
        newStr += replacePi;
    // } else {
    //     newStr += str[index];
    }
    return f(str, index = index + 1, newStr += str[index]);
}

console.log(f("Picsart pipelines"));
console.log(f("picturespicturespictures"));

let str = "Picsart pipelines";
let subStr = "pi";
let replace = "3.14";
let newStr = '';

for (let i = 0; i < str.length; i++) {
    if (str.substr(i, subStr.length).toLowerCase() === subStr) {
        newStr += "3.14";
    } else {
        newStr += str[i];
    }
}

console.log(newStr);