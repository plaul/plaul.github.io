import bookRepository from "../../bookRepository.js"

export default () => {
  const books = bookRepository.getBooks()
  //Escape
  const listItems = books.map(book => `<li>${book.title} <a href='find-book/${book.id}' data-navigo>${book.id}</a></li>`)
  document.getElementById("books-id").innerHTML = listItems.join("")
}