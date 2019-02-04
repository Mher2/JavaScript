class Account {
    static count = 0;
    constructor() {
        Account.count++;
        this.id = Account.count;
    }
    getId() {
        return this.id
    }
}

a = new Account();
console.log(a.getId());


