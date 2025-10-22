export class Book {
  constructor(title, author, year, pages, genre) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.genre = genre;
  }
}
