import { Book } from "./components/Book.js";
import { storeBooks } from "./components/LocalStorage.js";
import { updateDisplayedBooks } from "./components/UI.js";

const formElement = document.getElementById("bookForm");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", (_event) => {
  _event.preventDefault();
  makeBook(formElement);
  updateDisplayedBooks();
});

const getFormData = (formElement) => {
  const formData = new FormData(formElement);
  return Object.fromEntries(formData);
};

const makeBook = (formElement) => {
  const data = getFormData(formElement);
  const book = new Book(
    data.titleOf,
    data.authorOf,
    data.yearOf,
    data.pagesOf,
    data.genreOf
  );
  storeBooks(book);
};

document.addEventListener("DOMContentLoaded", updateDisplayedBooks);
