import { Login } from "../login/login";
import { LogoutButton } from "../logout.button/logout.button";
import { Register } from "../register/register";

export function Header() {

  return (
    <header>
      <h1>MY CLASSIC CARS</h1>
      <Register></Register>
      <Login></Login>
      <LogoutButton></LogoutButton>

    </header>
  )
}
