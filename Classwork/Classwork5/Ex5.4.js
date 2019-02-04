/*
* 4. Given a number.
*    Write a recursive function that reverse the number.
*    Return the new number.
*/
// Investigate as you have not solved this!!!

function reversNumber(number) {
    if (number < 10) {
        return number;
    }
    return number % 10 * Math.pow(10, number.toString().length - 1) + reversNumber(Math.floor(number / 10));
    // return number < 10 ? number :
    //     number % 10 + reversNumber(Math.floor(number / 10)).toString()
}

console.log(reversNumber(4321));
console.log(reversNumber(2));
console.log(reversNumber(13));
console.log(reversNumber(815796));
console.log(reversNumber(8159796));


// let str = "135";
// let len = str.length;
// let newStr = "";
// for (let i = len-1; i >= 0; i--) {
//     newStr += str[i];
//     // console.log(newStr)
// }
// console.log(newStr);

//
// a = a + b;
// b = a - b;
// a = a - b;
