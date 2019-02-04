function Am() {
    this.x = 6;
}

let p = {};
Am.call(p);

console.log(p);