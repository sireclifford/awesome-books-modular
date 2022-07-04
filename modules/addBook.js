import BookStore from './BookStore.js';

const store = new BookStore();

const addBook = (title, author) => {
  const foundBook = store.booksArray.find((book) => book.title === title);
  if (!foundBook) {
    const book = {
      id: store.booksArray.length,
      title,
      author,
    };
    store.booksArray.push(book);
    localStorage.setItem('books', JSON.stringify(store.booksArray));
  }
};

export default addBook;
