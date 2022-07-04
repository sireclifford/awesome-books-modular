import removeBook from './removeBook.js';

const retreiveBooks = () => {
  const responseHTML = document.querySelector('#response');
  const bookList = document.querySelector('.books-list');
  bookList.innerHTML = '';
  if (localStorage.getItem('books')) {
    responseHTML.innerHTML = '';
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
  } else {
    responseHTML.innerHTML = 'No books in your shelf. Click on Add New Button to add some.';
  }
};

export default retreiveBooks;