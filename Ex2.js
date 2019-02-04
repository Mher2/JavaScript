/*
* 2. Given number n (positive integer).
*    Print the value of n + nn + nnn(not multiplication).
*/

let number = 3;

updated_number = number + '' + number * 2 + '' + number * 3;

console.log(`updated_number = ${updated_number}`);
