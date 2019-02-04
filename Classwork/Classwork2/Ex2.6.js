/*
* 6. An Armstrong number is a 3 digit number for which sum of cube of its digits is equal to the number itself.
* Write a program to check whether the given number is an Armstrong number.
*/

let number = 153;
let num = number;
let sum = 0;

if (num > 99 && num < 1000) {

    while (num !== 0) {
        let lastDigit = num % 10;
        num = (num - lastDigit) / 10;
        // console.log(lastDigit);
        sum += Math.pow(lastDigit, 3);
        // console.log(sum);

    }
} else {
    console.log("Num should be [100-999]")
}

if (sum === number) {
    console.log("yes");
} else {
    console.log("no");

}