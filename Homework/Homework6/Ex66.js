/*
* 6. Create an Account class.
Account should have: id, name, balance.
It should have setters for name and balance, and getters for all fields.
It should have a method: credit(amount), which should add amount to balance and return the updated balance.
It should have a method: debit(amount), which should subtract the amount from the balance,
if amount is less than the balance, otherwise output “Amount exceeded balance.”

It should have a method: transferTo(anotherAccount, amount):
which should subtract the amount from the account balance and add it to the
given anotherAccount and return the updated balance, if amount is less than the balance,
otherwise output “Amount exceeded balance.”

It should have a static method: identifyAccounts(accountFirst, accountSecond) which gets two accounts and
identifies if they are the same or not comparing all fields.
It should have toString method.
*/

class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    get id() { return this._id; }
    set id(value) { this._id = value; }

    get name() { return this._name; }
    set name(value) { this._name = value; }

    get balance() { return this._balance; }
    set balance(value) { this._balance = value; }

    credit(amount) {
        this.balance += amount;
        return this.balance;
    }

    debit(amount) {
        if (amount < this.balance) {
            this.balance -= amount;
            return this.balance;
        } else {
            console.log("Amount exceeded balance.");
        }
    }

    transferTo(anotherAccount, amount) {
        if (this.balance >= amount) {
            anotherAccount.balance += amount;
            this.balance -= amount;
            return this.balance;
        } else {
            console.log("Amount exceeded balance.");
        }
    }

    static identifyAccounts(accountFirst, accountSecond) {
        if (accountFirst.id === accountSecond.id &&
            accountFirst.name === accountSecond.name &&
            accountFirst.balance === accountSecond.balance) {
            return "Accounts are same."
        } else {
            return "Accounts are not same."
        }
    }

    toString() {
        return "Account id: " + this._id+ ", name: " + this.name + ", balance: " + this.balance;
    }

}

let account1 = new Account(1, "my acc1", 1500);
let account2 = new Account(1, "my acc1", 1500);
let account3 = new Account(1, "my acc3", 1501);
console.log(Account.identifyAccounts(account1, account2));
console.log(Account.identifyAccounts(account1, account3));


console.log(account1.balance);
account1.credit(1000);
console.log(account1.balance);

console.log("Account3");
console.log(account3.toString());
account3.debit(1000);
console.log(account3.toString());
account3.debit(1000);
console.log(account3.toString());

console.log("Transfer");
console.log(account1.toString());
console.log(account2.toString());
account1.transferTo(account2, 250);
console.log(account1.toString());
console.log(account2.toString());
