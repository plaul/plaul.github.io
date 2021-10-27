import bookRepository from "../../bookRepository.js"

function findBookAndShow(id) {
  const book = bookRepository.findBook(id)
  document.getElementById("book-id").innerText = book.id
  document.getElementById("book-title").value = book.title
  document.getElementById("book-info").value = book.info
}
function clearInputs(id) {
  document.getElementById("book-id").value = ""
  document.getElementById("book-title").value = ""
  document.getElementById("book-info").value = ""
}

export default function findAndShowBook(id) {
  if (!sessionStorage.getItem("logged-in")) {
    const inputs = document.querySelectorAll("#input-fields input, textarea")
    inputs.forEach(i => i.disabled = true)
  }

  document.getElementById("btn-find-book").onclick = () => {
    const id = document.getElementById("book-id").value
    findBookAndShow(id)
  }
  document.getElementById("btn-edit").onclick = () => {
    const id = document.getElementById("book-id").value
    const bookToEdit = bookRepository.findBook(id)
    bookToEdit.title = document.getElementById("book-title").value
    bookToEdit.info = document.getElementById("book-info").value
    const addedBook = bookRepository.editBook(bookToEdit, id);
    clearInputs()
  }

  document.getElementById("btn-delete").onclick = () => {
    const id = document.getElementById("book-id").value
    bookRepository.deleteBook(id)
    clearInputs()
  }

  document.getElementById("only-when-loggedin").style.display = sessionStorage.getItem("logged-in") ? "block" : "none"
  if (id != -1) {
    document.getElementById("book-id").value = id;
    findBookAndShow(id)
  }

}