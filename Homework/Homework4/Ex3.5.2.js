let arr = [-1, 2, 3, 4, 0, 6, -7];
let num = 0;
let minDelta = Math.abs(num - arr[0]);
let minIndex = 0;

for(let i = 1; i < arr.length; i++) {
    const delta = Math.abs(num - arr[i]);
    if (delta < minDelta) {
        minDelta = delta;
        minIndex = i;
    }
}

console.log(minIndex);