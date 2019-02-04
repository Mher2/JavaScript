function Am() {
    this.x = 6;
}

Am.prototype.getX = function() {
    return this.x;
};

function Bm() {
    this.y = 7;
    Am.call(this);
}

Bm.prototype = Am.prototype;

let bm = new Bm();
console.log(bm.y);


/// is same as following class

class Am2 {
    constructor() {
        this.x = 6;
    }
}

class Bm2 extends Am2 {
    constructor() {
        super();
        this.y = 7;
    }
}

let bm2 = new Bm2();
console.log(bm2.y);