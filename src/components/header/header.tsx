import { Login } from "../login/login";
import { Register } from "../register/register";

export function Header() {

  return (
    <header>
      <h1>MY CLASSIC CARS</h1>
      <Register></Register>
      <Login></Login>
    </header>
  )
}
