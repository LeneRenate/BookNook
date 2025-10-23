import { fetchBooks, deleteBook } from "./LocalStorage.js";
import { dom } from "./DOM.js";

const {
  myLibrary,
  titleOf,
  authorOf,
  yearOf,
  pagesOf,
  genreOf,
  filterSelect,
  filterBtn,
  resetBtn,
  sortSelect,
  sortBtn,
} = dom;

const makeBookCard = (object, id) => {
  const { title, author, year, pages, genre } = object;

  const bookCard = document.createElement("article");
  bookCard.classList.add("bookCard");
  bookCard.id = id;

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

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

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
  const filterValue = filterSelect.value;
  const sortValue = sortSelect.value;

  let booksDisplayed;

  if (filterValue) {
    booksDisplayed = allBooks.filter((book) => book.genre === filterValue);
  } else if (sortValue === "titleAZ") {
    booksDisplayed = allBooks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === "titleZA") {
    booksDisplayed = allBooks.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortValue === "ascYear") {
    booksDisplayed = allBooks.sort((a, b) => a.year - b.year);
  } else if (sortValue === "desYear") {
    booksDisplayed = allBooks.sort((a, b) => b.year - a.year);
  } else if (sortValue === "ascPages") {
    booksDisplayed = allBooks.sort((a, b) => a.pages - b.pages);
  } else if (sortValue === "desPages") {
    booksDisplayed = allBooks.sort((a, b) => b.pages - a.pages);
  } else {
    booksDisplayed = allBooks;
  }

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

filterBtn.addEventListener("click", () => {
  updateDisplayedBooks();
});

sortBtn.addEventListener("click", () => {
  updateDisplayedBooks();
});

resetBtn.addEventListener("click", () => {
  console.log("reset kjører");
  filterSelect.value = null;
  updateDisplayedBooks();
});
