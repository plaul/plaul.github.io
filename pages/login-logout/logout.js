import setLoginState from "./handleLoggedInState.js"

export default function logout(navigate) {
  setLoginState(false)
  navigate("/")
}