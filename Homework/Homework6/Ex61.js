/*
* 1. Write classes: Person, Student, Staff.
*    Person should have: firstName, lastName, gender, age.
*    It should have appropriate getters and setters.
*    It should have a method: toString().
*
*    Student is inherited from Person.
*    It should have program(array of strings), year, fee.
*    It should have appropriate getters and setters.
*    It should have method: passExam(program, grade).
*    Student should contain the data about its programs and exams.
*    passExam will update that data, so if student passed all the exams(grade is great or equal to 50),
*    its year should be increased by one.
*    It should have a toString method.
*
*    Teacher is inherited from Person.
*    It should have program(string), pay.
*    It should have appropriate getters and setters.
*    It should have a toString method.
*/

class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }

    get firstName() { return this._firstName; }
    set firstName(value) { this._firstName = value; }

    get lastName() { return this._lastName; }
    set lastName(value) {
        this._lastName = value;
    }

    get gender() { return this._gender; }
    set gender(value) {
        if (value === 'M' || value === 'F') {
            this._gender = value;
        } else {
            console.log("Input 'M' or 'F'.")
        }
    }

    get age() { return this._age; }
    set age(value) {
        if (value > 0 && typeof value === 'number') {
            this._age = value;
        } else {
            console.log("Input positive number.")
        }
    }

    toString() {
        return "First Name:" + this.firstName +
            ",\nLast Name:" + this.lastName +
            ",\nGender:" + this.gender +
            ",\nAge:" + this.age;
    }

}

class Student extends Person {
    constructor(firstName, lastName, gender, age, program, year, fee) {
        super(firstName, lastName, gender, age);
        this.program = program;
        this.year = year;
        this.fee = fee;
    }

    get program() { return this._program; }
    set program(value) {
        this._program = value;
    }

    get year() { return this._year; }
    set year(value) {
        if (value > 0 && typeof value === 'number') {
            this._year = value;
        } else {
            console.log("Input positive number.")
        }
    }

    get fee() { return this._fee; }
    set fee(value) {
        if (value > 0 && typeof value === 'number') {
            this._fee = value;
        } else {
            console.log("Input positive number.")
        }
    }

    checkArrayContainsElem(arr, element) {
        // return arr.filter((item) => item === element).length !== 0;
        return arr.filter((item) => arr.indexOf(item) === element).length !== 0
    }

    passExam(program, grade) {
        if (this.checkArrayContainsElem(this.program, program)) {
            if (grade >= 50) {
                this.program = this.program.filter((item) => item !== program);
                if (Object.keys(this.program).length === 0) {
                    this.year += 1;
                }
                return `You Passed exam "${program}".`;
            } else {
                return `You Failed exam "${program}".`;
            }
        } else {
            return `Program ${program} is not in program list (${this.program})`
        }
    }

    toString() {
        return "First Name:" + this.firstName +
            ",\nLast Name:" + this.lastName +
            ",\nGender:" + this.gender +
            ",\nAge:" + this.age +
            ",\nPrograms:" + this.program +
            ",\nYear:" + this.year +
            ",\nFee:" + this.fee;
    }

}

class Teacher extends Person {
    constructor(firstName, lastName, gender, age, program, pay) {
        super(firstName, lastName, gender, age);
        this.program = program;
        this.pay = pay;
    }

    get program() { return this._program; }
    set program(value) { this._program = value; }

    get pay() { return this._pay; }
    set pay(value) {
        if (value > 0 && typeof value === 'number') {
            this._pay = value;
        } else {
            console.log("Input positive number.")
        }
    }

    toString() {
        return "First Name:" + this.firstName +
            ",\nLast Name:" + this.lastName +
            ",\nGender:" + this.gender +
            ",\nAge:" + this.age +
            ",\nProgram:" + this.program +
            ",\nPay:" + this.pay;
    }

}

let man1 = new Person('Jack', 'Bauer', 'M', '38');
console.log(man1.toString()+"\n");

let student1 = new Student('Jack2', 'Bauer2', 'M', '21', ["Prog1", "Prog2"], 2018, 50);
console.log(student1.toString()+"\n");
console.log(student1.passExam("Prog5", 80));
console.log(student1.toString()+"\n");
console.log(student1.passExam("Prog1", 40));
console.log(student1.toString()+"\n");

console.log(student1.passExam("Prog1", 51));
console.log(student1.toString()+"\n");
console.log(student1.passExam("Prog2", 52));
console.log(student1.toString()+"\n");

let teacher1 = new Teacher('Nina', 'Stone', 'F', '31', "Prog1", 150000);
console.log(teacher1.toString()+"\n");
