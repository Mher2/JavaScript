/*
* 3. Count numbers of digit 9 in a number.
*/

let number = 1991;
let numbersOfDigit9 = 0;

len = number + '';
len = len.length;

for (let i = 1; i <= len; i++) {
    let lastDigit = number % 10;   // 5
    if (lastDigit === 9) {
        numbersOfDigit9 += 1;
    }
    number = (number - lastDigit) / 10;
}

console.log(numbersOfDigit9);

//OR

let num = 1259;
let count = 0;

while (num !== 0) {
    if (num % 10 === 9) {
        count++;
    }
    num = Math.floor(num / 10)
}

console.log(count);