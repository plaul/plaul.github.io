
export default function setLoginState(loggedIn) {
  if (loggedIn) {
    sessionStorage.setItem("logged-in", "yes")
  } else {
    sessionStorage.clear("logged-in")
  }
  updateLoginDependentComponents()
}

export function updateLoginDependentComponents() {
  const loggedIn = sessionStorage.getItem("logged-in")
  document.getElementById("logged-in-menu-items").style.display = loggedIn ? "block" : "none"
  document.getElementById("id-login").style.display = loggedIn ? "none" : "block"
  document.getElementById("id-logout").style.display = loggedIn ? "block" : "none"
}
