import setLoginState from "./handleLoggedInState.js"

export default function login(navigate) {
  document.getElementById("btn-login").onclick = () => {
    setLoginState(true)
    navigate("/")
  }
}