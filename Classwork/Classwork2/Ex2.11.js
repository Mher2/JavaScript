/*
* 11. Given a number n (0 ≤ n ≤ 100) you should print the smallest
* positive number such that its digits product is equal to n.
*/

let number = 10000;
let result = '';

while (number > 9) {
    for (let i = 9; i > 1; i--) {
        if (number % i ===0 ) {
            result += i;
            number = number / i;
            break;
        }
    }
}

result += number;

console.log(result.split("").reverse().join(""));

// My casse is teri
// num = 10;
// let k;
// let s;
//
//
// for (let i = 10; i <=99; i++) {
//     k = i % 10;
//     s = (i - k) / 10;
//
//     // console.log(k + " - " + s + " !");
//     if (k * s === num) {
//         n = k + '' + s
//     }
// }
//
// console.log(n);