/*
* 3. Given a positive integer.
* Bring the last digit of the number to the beginning.
* Print the new number.
* If the last digit of the inserted number is 0, number remains the same.
*/

let number = 2501;
let updated_number = number;

last_digit_of_the_number = number % 10;

if(last_digit_of_the_number !== 0) {
    // Bring the last digit of the number to the beginning
    updated_number = last_digit_of_the_number + '' + (number - last_digit_of_the_number) / 10;
}

console.log(`updated_number = ${updated_number}`);
