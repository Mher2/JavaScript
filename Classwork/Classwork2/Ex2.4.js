/*
* 4. Given two numbers. Print powers of 2 between that numbers.
* (without using Math.pow)
*/

let start = 7;
let end = 25;

// Case 1 not optimal
for (let powerOf2 = 1; powerOf2 <= end; powerOf2 *= 2) {
    if (powerOf2 >= start){
        console.log(powerOf2)
    }
}


// Case 2 with use Math.log() instead of 1 in powerOf2 = 1
// for (let powerOf2 = Math.ceil(Math.log(start)); powerOf2 <= end; powerOf2 *= 2) {
//     // if (powerOf2 >= start){
//         console.log(powerOf2)
//     // }
// }


// Case 3 without Math


