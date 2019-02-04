/*
* 6. Given a substring and a string.
*    Find how many times the substring occurred in the string.
*    (For getting substring of the string use str.substring(startIndex,
*    endIndex), str.substr(startIndex, length) )
*/

function f(subStr, str, startIndex = 0, occurredTime = 0) {
    if (str.substr(startIndex, subStr.length) === subStr) {
        occurredTime++;
    }
    if (startIndex === str.length - 1) {
        return occurredTime;
    }
    return f(subStr, str, startIndex + 1, occurredTime)
}

console.log(f("ar", "Are var far shared?")); // 3
console.log(f("ook", "Facebook looks odd")); // 2

//
// let subStr = "ar";
// let counter = 0;
//
// for (let i = 0; i < str.length; i++) {
//     if (str.substr(i, subStr.length) === subStr) {
//         counter++;
//     }
// }
// console.log(counter);