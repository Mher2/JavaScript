/*
* Given three numbers a, b (a ≤ b) and num.
* Print sequence of evenly spaced numbers by the given num length
* over the specified interval (from a to b).
*/

let a = 1;
let b = 5;
let num = 6;
let str ='';

if (b < a || num < 1) {
    console.log("Wrong input a should be <= b and num should be > 0");
} else if (a === b || num === 1) {
    console.log(a);
} else {
    let step = (b - a) / (num - 1);
    for (let i = a; i <= b; i += step) {
        if (i === b) {
            str += i;
        } else {
            str += i + ', ';
        }
    }

    console.log(str);
}