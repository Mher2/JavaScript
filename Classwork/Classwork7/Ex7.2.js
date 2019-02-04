class Book {
    static count = 0;

    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.id = Book.count++;
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    toString() {
        return `Author: ${this.author}, Title: ${this.title}`;
    }

    static isSame(book) {
        return this.title === book.title && this.author === book.author;
    }
}

const book = new Book('Կենսագրությունը', 'John Smith');
console.log(book.toString());

class Reader {
    constructor(firstName, lastName, readerId, books) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.readerId = readerId;
        this.books = books;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get readerId() {
        return this._readerId;
    }

    get books() {
        return this._books;
    }

    toString() {
        return "firstName:" + this.firstName +
            "\n, lastName:" + this.lastName +
            "\n, readerId :" + this.readerId +
            "\n, Books:" + this.books + "\n";
    }

    borrowBook(book, library) {

    }
}

class Library {
    constructor(books, readers) {
        this.books = books;
        this.readers = readers;
    }

    doHaveBook(requestedBook) {
        // (requestedBook - Book) - returns true if library has the book, false
        // 		otherwise.
    }

    addBook(newBook) {
        // (newBook - Book) - add new book to the library. If the book already
        // exists, increases its quantity, otherwise adds new book of type LibraryBook.
    }

    addBooks() {
        // (newBooks) - add new books to the library with the same logic as the
        // addBook. Returns changed array of the books.
    }

}