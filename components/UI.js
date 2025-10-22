import { fetchBooks, deleteBook } from "./LocalStorage.js";
import { dom } from "./DOM.js";

const { myLibrary, titleOf, authorOf, yearOf, pagesOf, genreOf } = dom;

const makeBookCard = (object, id) => {
  const { title, author, year, pages, genre } = object;

  const bookCard = document.createElement("article");
  bookCard.classList.add("bookCard");
  bookCard.id = id;

  const bookTitle = document.createElement("h2");
  bookTitle.classList.add("bookTitle");
  bookTitle.textContent = titleOf;

  const bookAuthor = document.createElement("p");
  bookAuthor.classList.add("bookAuthor");
  bookAuthor.textContent = authorOf;

  const bookYear = document.createElement("p");
  bookYear.classList.add("bookYear");
  bookYear.textContent = yearOf;

  const bookPages = document.createElement("p");
  bookPages.classList.add("bookPages");
  bookPages.textContent = pagesOf;

  const bookGenre = document.createElement("p");
  bookGenre.classList.add("bookGenre");
  bookGenre.textContent = genreOf;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    deleteBook(id);
    updateDisplayedBooks();
  });

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    titleOf.value = title;
    authorOf.value = author;
    yearOf.value = year;
    pagesOf.value = pages;
    genreOf.value = genre;
    deleteBook(id);
  });

  const btnDiv = document.createElement("div");
  btnDiv.classList.add("modBtns");

  btnDiv.append(editBtn, deleteBtn);
  bookCard.append(
    bookTitle,
    bookAuthor,
    bookYear,
    bookPages,
    bookGenre,
    btnDiv
  );
  myLibrary.append(bookCard);
};

export const updateDisplayedBooks = () => {
  const allBooks = fetchBooks();
  // const filter og sort

  // let booksDisplayed:

  // if..else

  let booksDisplayed = allBooks;

  renderUI(booksDisplayed);
  console.log(booksDisplayed);
};

// Ask about
const renderUI = (booksDisplayed) => {
  myLibrary.textContent = "";

  for (const book of booksDisplayed) {
    makeBookCard(book, book.id);
  }
};

// Add eventListeners (updateBooksDisplayed on click) for filter and sort
