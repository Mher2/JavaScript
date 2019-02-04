/*
* 5. Create an Author class and a Book class.
*    Author should have: name, email, gender.
*    It should have appropriate getters and setters.
*    It should have a toString method.
*
*    Book should have: title, author(Author), price, quantity.
*    It should have appropriate getters and setters.
*    It should have a method: getProfit(), which calculates the profit from the book based on the price and quantity.
*    It should have a toString method.
*
*/

class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }

    get name() { return this._name; }
    set name(value) { this._name = value; }

    get email() { return this._email; }
    set email(value) { this._email = value; }

    get gender() { return this._gender; }
    set gender(value) { this._gender = value; }

    toString() {
        return "Author name:" + this.name + ", Email:" + this.email + ", gender:" + this.gender;
    }
}

class Book{
    constructor(title, author, price, quantity) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }

    get title() { return this._title; }
    set title(value) { this._title = value; }

    get author() { return this._author; }
    set author(value) { this._author = value; }

    get price() { return this._price; }
    set price(value) { this._price = value; }

    get quantity() { return this._quantity; }
    set quantity(value) { this._quantity = value; }

    getProfit() {
        return this._price * this._quantity;
    }

    toString() {
        return "Book title:" + this.title + ", Book Author:" + this.author+ ", Price:" + this.price + ", Quantity:" + this.quantity;
    }
}

let author1 = new Author('Saroyan', "saroyan@gmail.com", "M");
let book1 = new Book("Ping-pong players", author1, 150, 12);
console.log(author1.toString());
console.log(author1.name.toString());
console.log(book1.toString());
console.log(book1.getProfit());
