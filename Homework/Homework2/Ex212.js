/*
* 12. Write a program to print X star pattern series using loop.
 */

let n = 5;

for (let i = 1; i <= 2 * n - 1; i++) {
    let str = '';
    for (let j = 1; j <= 2 * n - 1; j++) {
        //x -- j-(2*n-j)*    (j+1)-(2*n-j-1)
        //1 -- 1-9*          2-8
        //2 -- 2-8*          1,3-7,9
        //3 -- 3-7*          1-2,4-6,8-9
        //4 -- 4-6*          1-3,5,7-9
        //5 -- 5*            1-4,6-9
        //
        str += ''
    }
}

let str1 = '';
for (let i = 1; i <= 2*5-1; i++) {
    if (i === 1 || i === 2*5-1) {
        str1 += "*"
    } else {
        str1 += " "
    }
}
console.log(str1);
str1 = '';
for (let i = 1; i <= 2*5-1; i++) {
    if (i === 2 || i === 2*5-1-1) {
        str1 += "*"
    } else {
        str1 += " "
    }
}
console.log(str1);
str1 = '';
for (let i = 1; i <= 2*5-1; i++) {
    if (i === 3 || i === 2*5-1-2) {
        str1 += "*"
    } else {
        str1 += " "
    }
}
console.log(str1);
str1 = '';
for (let i = 1; i <= 2*5-1; i++) {
    if (i === 4 || i === 2*5-1-3) {
        str1 += "*"
    } else {
        str1 += " "
    }
}
console.log(str1);
str1 = '';
for (let i = 1; i <= 2*5-1; i++) {
    if (i === 5 || i === 2*5-1-4) {
        str1 += "*"
    } else {
        str1 += " "
    }
}
console.log(str1);
