/*
* 10. Insert a number. Remove all zeros from the number, except the last one and print the number.
* If there are at most one zero, print “Nothing to remove”.
*/

let number = 45012;
let reverse = '';
let zero_count = 0;

while (number !== 0) {
    let lastDigit = number % 10;
    number = Math.floor(number / 10);
    console.log(lastDigit);
    reverse += lastDigit;
    if (lastDigit === 0) {
        zero_count += 1;
    }
}

console.log(reverse);
console.log("---");


str = '';
while (reverse !== 0) {
    let lastDigit = reverse % 10;
    reverse = Math.floor(reverse / 10);


    if (lastDigit !== 0 && zero_count > 1) {
        str += lastDigit;
    } else {

    }
    console.log(lastDigit);
}

console.log("str = " + str);
