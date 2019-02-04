/*
* 1. Given two DNA strands.
*    Find the hamming distance between them.
*    (The Hamming distance is only defined for sequences of equal length)
 */

let str1 = "GAGCCTACTAACGGGAT";
let str2 = "CATCGTAATGACGGCCT";

function calcHammingDistance(str1, str2) {
    if (str1.length !== str2.length) {
        return "DNAs should be equal."
    }
    let distance = 0;
    for (let i = 0; i < str1.length; i++){
        if (str1[i] !== str2[i]) {
            distance++;
        }
    }
    return distance;
}

distance = calcHammingDistance(str1, str2);
console.log(distance);