const titleOf = document.getElementById("bookTitleInput");
const authorOf = document.getElementById("bookAuthorInput");
const yearOf = document.getElementById("bookYearInput");
const pagesOf = document.getElementById("bookPagesInput");
const genreOf = document.getElementById("bookGenreInput");
const saveBook = document.getElementById("saveBtn");
const myLibrary = document.getElementById("myLibrary");

let titleArray = [];
let authorArray = [];
let yearArray = [];
let pagesArray = [];
let genreArray = [];

saveBook.addEventListener("click", () => {
  titleArray.push(titleOf.value);
  authorArray.push(authorOf.value);
  yearArray.push(yearOf.value);
  pagesArray.push(pagesOf.value);
  genreArray.push(genreOf.value);
  books();
  bookCardCreate();
});

const books = () => {
  localStorage.setItem("savedTitles", JSON.stringify(titleArray));
  console.log(titleArray);
  localStorage.setItem("savedAuthors", JSON.stringify(authorArray));
  console.log(authorArray);
  localStorage.setItem("savedYears", JSON.stringify(yearArray));
  console.log(yearArray);
  localStorage.setItem("savedPages", JSON.stringify(pagesArray));
  console.log(pagesArray);
  localStorage.setItem("savedGenres", JSON.stringify(genreArray));
  console.log(genreArray);
};

function bookCardCreate() {
  myLibrary.textContent = "";
  for (i = 0; i < titleArray.length; i++) {
    const book = document.createElement("article");
    book.classList.add("book");
    const bookTitle = document.createElement("h2");
    bookTitle.classList.add("bookTitle");
    bookTitle.textContent = titleArray[i];
    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("bookAuthor");
    bookAuthor.textContent = authorArray[i];
    const bookYear = document.createElement("p");
    bookYear.classList.add("bookYear");
    bookYear.textContent = yearArray[i];
    const bookPages = document.createElement("p");
    bookPages.classList.add("bookPages");
    bookPages.textContent = pagesArray[i];
    const bookGenre = document.createElement("p");
    bookGenre.classList.add("bookGenre");
    bookGenre.textContent = genreArray[i];
    book.append(bookTitle, bookAuthor, bookYear, bookPages, bookGenre);
    myLibrary.appendChild(book);
  }
}

if (
  localStorage.getItem("savedTitles") !== "" &&
  localStorage.getItem("savedTitles") !== null
) {
  console.log("You have books in your library - YAY!");
} else {
  console.log("local storage is empty");
}
