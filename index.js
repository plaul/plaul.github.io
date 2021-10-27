import { root } from "./settings.js"
import books from "./pages/all/books.js"
import addBook from "./pages/add/addBook.js"
import singleBook from "./pages/singleBook/singleBook.js"
import login from "./pages/login-logout/login.js"
import logout from "./pages/login-logout/logout.js"
import { updateLoginDependentComponents } from "./pages/login-logout/handleLoggedInState.js"


import { adjustForMissingHash, loadTemplate, renderTemplate, setActiveLink } from "./utils.js"

window.addEventListener("load", async () => {
  const router = new Navigo("/", { hash: true });
  const homeTemplate = await loadTemplate("pages/home.html")
  const bookTemplate = await loadTemplate("pages/all/books.html")
  const addBookTemplate = await loadTemplate("pages/add/addBook.html")
  const singleBookTemplate = await loadTemplate("pages/singleBook/singleBook.html")
  const aboutTemplate = await loadTemplate("pages/about.html")
  const notFoundTemplate = await loadTemplate("pages/404.html")
  const loginTemplate = await loadTemplate("pages/login-logout/login.html")
  adjustForMissingHash()  //ONLY do this if you have set hash

  updateLoginDependentComponents();

  router
    .hooks({
      before(done, match) {
        setActiveLink("topnav", match.url)
        done()
      }
    })
    .on("/", () => renderTemplate(homeTemplate, "content"))
    .on("/books", () => {
      renderTemplate(bookTemplate, "content")
      books()
    })
    .on("/add-book", () => {
      renderTemplate(addBookTemplate, "content")
      addBook(router.navigate)
    })
    .on("/find-book/:id", (match) => {
      renderTemplate(singleBookTemplate, "content")
      singleBook(match.data.id)
    })
    .on("/about", () => renderTemplate(aboutTemplate, "content"))
    .on("/login", () => {
      renderTemplate(loginTemplate, "content")
      login(router.navigate)
    })
    .on("/logout", () => {
      logout(router.navigate)
    })
    .notFound(() => renderTemplate(notFoundTemplate, "content"))
    .resolve()

})
