/*
* 2. Create an Employee class.
*    Employee should have: id, firstName, lastName,
*    position, salary, workingHours.
*    It should have setters and getters for appropriate fields.
*    It should have a method: getFullName().
*    It should have a method: getAnnularSalary() which should be
*    the total salary of the employee within a year.
*    It should have a method: raiseSalary(percent),
*    which increases the salary by the given percent and
*    returns new salary.
 */

class Employee {
    constructor(id, firstName, lastName, position, salary, workingHours) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
        this.workingHours = workingHours;
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        if (value > 0) {
            this._salary = value;
        }
    }
    get fullName(){
        return this.firstName + " " + this.lastName;
    }
    getAnnularSalary(years){
        let salary = this.salary * years * 12;
        return this.getStrSallary(salary);
    }
    raiseSalary(percent){
        return this.getStrSallary(this.salary + this.salary * percent / 100);
    }
    getStrSallary(salary) {
        let num = salary.toString();
        let str = '';
        num = num.split('').reverse().join('');
        let len = num.length;
        for (let i = 0; i < len; i++) {
            if (i % 3 === 0) {
                str += "," + num[i]
            } else {
                str += num[i];
            }
        }
        str = str.split('').reverse().join('').slice(0,str.length-1);
        return str;
    }

}

Armen = new Employee(1, 'Armen', 'Vardanyan', 'Senior JS Developer', 600000, 8);
let years = 2;
let percent = 10;
console.log("Salary: " + Armen.getStrSallary(Armen.salary));
console.log("FullName: " + Armen.fullName);
console.log("Annual Salary for " + years + " years: " + Armen.getAnnularSalary(years));
console.log("Raise salary by " + percent + "%: " + Armen.raiseSalary(10));
