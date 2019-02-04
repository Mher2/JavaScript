/*
* 4. Given a large number.
*    Find the difference between the most appeared largest and
*    smallest digits.
*/

let digitCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function f(number) {
    number = number.toString();
    const len = number.length;

    for (let i = 0; i < len; i++) {
        digitCount[number[i]]++;
    }
    // console.log(digitCount);
    // const max = Math.max(...digitCount);
    // console.log(max);

    let max = 0;
    let secondMax = 0;
    let maxIndex = 0;
    let secondMaxIndex = 0;

    for (let i = 0; i < digitCount.length; i++) {
        if (max < digitCount[i]) {
            secondMax = max;
            secondMaxIndex = maxIndex;
            max = digitCount[i];
            maxIndex = i;
        } else if (secondMax <= digitCount[i]) {
            secondMax = digitCount[i];
            secondMaxIndex = i;
        }
    }
    console.log(number);
    console.log(digitCount);
    console.log("max = " + max);
    console.log("secondMax = " + secondMax);
    return Math.abs(maxIndex - secondMaxIndex);
}


console.log(f(12345688999));
console.log(f(8008899));
console.log(f(11112266));        // 6-1 = 5
console.log(f(1111226666));        // 6-1 = 5
console.log(f(1111222266));        // 6-1 = 5
console.log(f(11222266));        // 6-1 = 5
// console.log(f(8008899));     // 9-2, 8-3, 0-2, 8 - 0 = 8
// console.log(f(48656478976543512065489106));
