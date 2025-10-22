export const storeBooks = (book) => {
  localStorage.setItem(book.id.JSON.stringify(book));
};

export const fetchBooks = () => {
  const books = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    books.push(value);
  }
  return books;
};

export const deleteBook = (id) => {
  localStorage.removeItem(id);
};
