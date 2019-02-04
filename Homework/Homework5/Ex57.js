/*
* 7. Given a number. Write a function that calculates its sum of
 *   the digits and if that sum has more than 1 digit find the sum of digits of that number.
 *   Repeat that process if needed and return the result.
 */

function calcSumOfDigitsDeep(num, sum = 0, lastDigit) {
    if (num !== 0) {
        lastDigit = num % 10;
        sum += lastDigit;
        num = (num - lastDigit) / 10;
    } else {
        num = sum;
        if (num <= 9) {
            return num;
        } else {
            sum = 0;
        }
    }

    return calcSumOfDigitsDeep(num, sum, lastDigit)

}

console.log(calcSumOfDigitsDeep(14));               // 5
console.log(calcSumOfDigitsDeep(29));               // 2
console.log(calcSumOfDigitsDeep(999999999999));     // 9
