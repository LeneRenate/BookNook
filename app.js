const titleOf = document.getElementById("bookTitleInput");
const authorOf = document.getElementById("bookAuthorInput");
const yearOf = document.getElementById("bookYearInput");
const pagesOf = document.getElementById("bookPagesInput");
const genreOf = document.getElementById("bookGenreInput");
const saveBook = document.getElementById("saveBtn");
const myLibrary = document.getElementById("myLibrary");

const savedBooks = [];

saveBook.addEventListener("click", () => {
  const book = {
    title: titleOf.value,
    author: authorOf.value,
    year: yearOf.value,
    pages: pagesOf.value,
    genre: genreOf.value,
  };
  // localStorage.setItem("book", JSON.stringify(book));
  savedBooks.push(book);
  localStorage.setItem("savedBooks", JSON.stringify(savedBooks));
  bookCardCreate();
});

function bookCardCreate() {
  myLibrary.textContent = "";
  for (i = 0; i < savedBooks.length; i++) {
    const bookDisplay = document.createElement("article");
    bookDisplay.classList.add("book");
    const bookTitle = document.createElement("h2");
    bookTitle.classList.add("bookTitle");
    bookTitle.textContent = savedBooks[i].title;
    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("bookAuthor");
    bookAuthor.textContent = savedBooks[i].author;
    const bookYear = document.createElement("p");
    bookYear.classList.add("bookYear");
    bookYear.textContent = savedBooks[i].year;
    const bookPages = document.createElement("p");
    bookPages.classList.add("bookPages");
    bookPages.textContent = savedBooks[i].pages;
    const bookGenre = document.createElement("p");
    bookGenre.classList.add("bookGenre");
    bookGenre.textContent = savedBooks[i].genre;
    bookDisplay.append(bookTitle, bookAuthor, bookYear, bookPages, bookGenre);
    myLibrary.appendChild(bookDisplay);
  }
}

if (
  localStorage.getItem("savedTitles") !== "" &&
  localStorage.getItem("savedTitles") !== null
) {
  console.log("You have books in your library - YAY!");
  bookCardCreate();
} else {
  console.log("local storage is empty");
}
