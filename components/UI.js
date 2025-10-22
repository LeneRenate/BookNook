import { fetchBooks, deleteBook } from "./localstorage.js";
import { dom } from "./DOM.js";

const { myLibrary, titleOf, authorOf, yearOf, pagesOf, genreOf } = dom;

const makeBookCard = (object, id) => {
  const { title, author, year, pages, genre } = object;

  const bookDisplay = document.createElement("article");
  bookDisplay.classList.add("bookCard");
  bookDisplay.id = id;

  const bookTitle = document.createElement("h2");
  bookTitle.classList.add("bookTitle");
  bookTitle.textContent = title;

  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("bookAuthor");
  bookAuthor.textContent = author;

  const bookYear = document.createElement("p");
  bookYear.classList.add("bookYear");
  bookYear.textContent = year;

  const bookPages = document.createElement("p");
  bookPages.classList.add("bookPages");
  bookPages.textContent = pages;

  const bookGenre = document.createElement("p");
  bookGenre.classList.add("bookGenre");
  bookGenre.textContent = genre;

  bookDisplay.append(bookTitle, bookAuthor, bookYear, bookPages, bookGenre);
  myLibrary.appendChild(bookDisplay);
};
