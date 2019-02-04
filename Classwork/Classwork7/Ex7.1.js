/*
* 1. Create an object called shape that has the type property and a getType() method.
     Define a Triangle() constructor function whose prototype is shape.
     Objects created with Triangle() should have three properties — a, b, and c, representing
     the lengths of the sides of a triangle.
     Add a new method to the prototype called getPerimeter().
 */

let shape = {
    type: "",
    getType(){
        return this.type;
    },
};

// This is a class constructor!!!
function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = 'Triangle';
}

// Triangle.prototype = shape;
Triangle.prototype = Object.create(shape);

Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
};

let t = new Triangle(6, 4, 5);
console.log(t.getType());
console.log(t.getPerimeter());
console.log(shape);

