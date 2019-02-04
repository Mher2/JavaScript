/*
* 2. Implement a Stack class.
* Stack is a Last-In-First-Out data structure.

The class should have the following methods:

push: adds an element to the stack, making it the top element
pop: removes the top element from stack and return is
toArray: converts the Stack to an array, making the top element the first element in the resulting array.
toString: return all the elements of Stack as a string, separated by commas

Example of usage:

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.toString()) // prints '1,2,3'
console.log(stack.pop()); // prints 3
console.log(stack.toArray()) // prints [1, 2]
 */

class Stack {
    constructor() {
        // this._arr = arr;
        this._arr = [];
    }

    pop() {
        return this._arr.pop();
    }

    push(element) {
        return this._arr.push(element);
    }

    toString() {
        return this._arr.join(', ');
    }

    toArray() {
        return this._arr;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.toString());      // prints '1,2,3'
console.log(stack.pop());           // prints 3
console.log(stack.toArray());       // prints [1, 2]
