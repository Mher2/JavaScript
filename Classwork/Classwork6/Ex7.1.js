/*
* 1. Create a Rectangle class. Rectangle should have:
*    length and width.
*    It should have getters and setters for all fields.
*    It should have getArea() method.
*    It should have getPerimeter() method.
*    It should have toString() method.
*
*/

class Rectangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }

    get width() {
        return this._width;
    }
    get length() {
        return this._length;
    }

    set width(value) {
        if (value > 0) {
            this._width = value;
        }
    }
    set length(value) {
        if (value > 0) {
            this._length = value;
        }
    }

    getArea() {
        return this.width * this.length;
    }
    getPerimeter() {
        return this.width * 2 + this.length * 2;
    }
    toString(){
        return `width = ${this.width}, length: ${this.length}`;
    }

}

let rect1 = new Rectangle(3, 4);
console.log(rect1.length);
console.log(rect1.width);
console.log(rect1.getArea());
console.log(rect1.getPerimeter());
console.log(rect1.toString());
