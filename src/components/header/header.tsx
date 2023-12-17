import { Link } from "react-router-dom";
import { HeaderButtons } from "../header.buttons/header.buttons";
import { header } from './header.module.scss';

// Timport { Login } from "../login.button/login.button";
// import { LogoutButton } from "../logout.button/logout.button";
// import { Register } from "../register/register";

export function Header() {

  return (
    <header className={header}>
      <Link to={'/home'}>
        <img src="https://res.cloudinary.com/drv1kbmgi/image/upload/h_90/v1701965149/Proyecto%20Final%20Figma/Logo1_h8bue0.png" alt="logo Classic Cars" />
      </Link>
      <h1>MY CLASSIC CARS</h1>
      <HeaderButtons></HeaderButtons>

    </header>
  )
}
