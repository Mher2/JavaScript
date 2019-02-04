// 7.

let num = 458;

const last = num % 10;
const mid = ((num - last) / 10) % 10;
const first = (((num - last) / 10 - mid) / 10) % 10;

const sum = last + mid + first;

console.log(last);
console.log(mid);
console.log(first);
console.log(`sum = ${sum}`);
