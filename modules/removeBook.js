import BookStore from './BookStore.js';

const store = new BookStore();

const removeBook = (bookId) => {
  const temp = JSON.parse(localStorage.getItem('books')).filter(
    (book) => book.id !== bookId,
  );
  store.booksArray = temp;
  localStorage.setItem('books', JSON.stringify(store.booksArray));
  const bookList = document.querySelector('.books-list');
  bookList.innerHTML = '';
  if (localStorage.getItem('books')) {
    JSON.parse(localStorage.getItem('books')).forEach((element) => {
      const newBook = document.createElement('li');
      newBook.classList.add('book-item');
      newBook.setAttribute('data-id', element.id);
      const bookInfo = document.createElement('div');
      bookInfo.classList.add('book-item__info');
      const bookTitle = document.createElement('p');
      bookTitle.classList.add('book-item__title');
      bookTitle.innerHTML = `${element.title} by ${element.author}`;
      const removeBtn = document.createElement('button');
      removeBtn.classList.add('removeFromShelfBtn');
      removeBtn.innerHTML = 'Remove';
      removeBtn.addEventListener('click', () => {
        removeBook(element.id);
      });
      bookInfo.appendChild(bookTitle);
      bookInfo.appendChild(removeBtn);
      newBook.appendChild(bookInfo);
      bookList.appendChild(newBook);
    });
  }
};

export default removeBook;
