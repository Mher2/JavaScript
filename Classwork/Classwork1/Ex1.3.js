// 3. Swap 2 variables, without using any other variables.

let a = 8;
let b = 12;

a = a + b;  // *
b = a - b;  // /
a = a - b;  // /

console.log(`a = ${a}`);
console.log(`b = ${b}`);
