/*
* 7. Given a positive number. Print it in reverse order.
*/

let number = 153;
let reverse = '';

while (number !== 0) {
    let lastDigit = number % 10;
    number = Math.floor(number / 10);
    console.log(lastDigit);
    reverse += lastDigit;
}

console.log(reverse);
