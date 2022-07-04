import { DateTime } from '../../node_modules/luxon/build/es6/luxon.js';
import addBook from '../../modules/addBook.js';
import retreiveBooks from '../../modules/retreiveBooks.js';

window.onload = () => {
  retreiveBooks();
};

const addBtn = document.querySelector('.AddToShelfBtn');
addBtn.addEventListener('click', () => {
  const title = document.querySelector('#title-input').value;
  const author = document.querySelector('#author-input').value;
  if (title === '' || author === '') {
    alert('Book title and author are required');
  } else {
    addBook(title, author);
    alert('Book added to shelf');
    document.querySelector('#title-input').value = '';
    document.querySelector('#author-input').value = '';
  }
});

const listSection = document.querySelector('.booklist');
const addSection = document.querySelector('.addnew');
const contactSection = document.querySelector('.contacts');

const listMenuLink = document.querySelector('#bookslist');
const addMenuLink = document.querySelector('#addbooks');
const contactMenuLink = document.querySelector('#contact');

const date = document.querySelector('.datetime');

date.innerHTML = DateTime.local().toFormat("LLLL dd yyyy 'at' hh:mm:ss a");

addMenuLink.addEventListener('click', () => {
  addSection.style.display = 'block';
  listSection.style.display = 'none';
  contactSection.style.display = 'none';
});

listMenuLink.addEventListener('click', () => {
  retreiveBooks();
  listSection.style.display = 'block';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
});

contactMenuLink.addEventListener('click', () => {
  contactSection.style.display = 'block';
  listSection.style.display = 'none';
  addSection.style.display = 'none';
});
