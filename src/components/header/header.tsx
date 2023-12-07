import { HeaderButtons } from "../header.buttons/header.buttons";
// Timport { Login } from "../login.button/login.button";
// import { LogoutButton } from "../logout.button/logout.button";
// import { Register } from "../register/register";

export function Header() {

  return (
    <header>
      <h1>MY CLASSIC CARS</h1>
      {/* <Register></Register>
      <Login></Login>
      <LogoutButton></LogoutButton> */}
      <HeaderButtons></HeaderButtons>

    </header>
  )
}
