import bookRepository from "../../bookRepository.js"

export default function addBook(navigate) {
  //Redirect to login-page if you a link brought the user to this page without being logged-in
  if (!sessionStorage.getItem("logged-in")) {
    navigate("/login")
  }

  document.getElementById("btn-add-book").onclick = () => {
    const newBook = {}
    newBook.title = document.getElementById("input-title").value
    newBook.info = document.getElementById("input-title").value
    const addedBook = bookRepository.addBook(newBook);
    document.getElementById("added-book").innerText = "Added the book: " + JSON.stringify(addedBook)
  }
}