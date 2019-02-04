/*
* 2. Given a number print its digits count.
*/

let number = 365;
number2 = number;
let len = 0;
let count;

while (number !== 0) {

    number = (number - number % 10) / 10;
    len++;

}

for (count = 0; number2 !== 0; count++) {
    // number2 = (number2 - number2 % 10) / 10;
    number2 = Math.floor(number2 / 10)
}

console.log(len);
console.log(count);