/*
* 5. Given a number as input, insert dashes (-) between each two even numbers.
*/


let num = 25468;
let inversedResult = '';

while (num !== 0) {
// while (num > 9) {
    const lastDigit = num % 10;
    inversedResult +=lastDigit;

    num = Math.floor(num / 10);
    const preLastDigit = num % 10;
    if (num > 0 && lastDigit % 2 === 0 && preLastDigit % 2 === 0 ) {
        inversedResult += '-'
    }
}

let result ='';
for (let i = inversedResult.length - 1; i >= 0; i--) {
    result += inversedResult.charAt(i);
}

console.log(inversedResult);
console.log(result);

// My case not finished!

// let num = 2467;
// let str = "";
// let digit;
//
// while (num !== 0) {
//     digit = num % 10;
//     console.log(digit);
//     num = (num - digit) /10;
//     str += digit
// }
//
// console.log(str);
// num1 = str*1;
// console.log(typeof str);
// let str2 = "";
//
// while (num1 !== 0) {
//     digit1 = num1 % 10;
//     console.log(digit1);
//     num1 = (num1 - digit1) /10;
//     digit2 = num1 % 10;
//     console.log(digit2);
//     if (digit1 % 2 === 0 && digit2 % 2 === 0){
//         str2 += digit1 + "-" + digit2;
//         continue;
//     } else {
//         str2 += digit1
//     }
// }
//
// console.log(str);
// console.log(str2);