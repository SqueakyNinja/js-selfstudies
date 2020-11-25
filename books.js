class Book {
  constructor(title, pages, releaseYear) {
    this.title = title;
    this.pages = pages;
    this.releaseYear = releaseYear;
    // this.printNewBook();
  }
  printNewBook() {
    console.log(
      "The book is called " +
        this.title +
        ". It has " +
        this.pages +
        " pages and was released " +
        this.releaseYear
    );
  }
}

class Author {
  constructor() {
    this.books = [];
  }
  addBook(title, pages, releaseYear) {
    this.books.push(new Book(title, pages, releaseYear));
  }
  printBooks() {
    console.log(this.books);
  }
  sortByTitle() {
    this.books.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      if (a.title == b.title) {
        return 0;
      }
    });
  }
  sortByReleaseYear() {
    this.books.sort((a, b) => {
      if (a.releaseYear < b.releaseYear) {
        return -1;
      }
      if (a.releaseYear > b.releaseYear) {
        return 1;
      }
      return 0;
    });
  }
}

let JKRowling = new Author();
JKRowling.addBook("Harry Potter", 500, "2003");
JKRowling.addBook("Fantastic beasts and where to find them", 400, "1997");

JKRowling.sortByReleaseYear();
// JKRowling.printBooks();
