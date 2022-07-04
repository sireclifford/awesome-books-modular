export default class BookStore {
  constructor() {
    this.booksArray = JSON.parse(localStorage.getItem('books'))
      ? JSON.parse(localStorage.getItem('books'))
      : [];
  }
}