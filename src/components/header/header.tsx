import { Link } from "react-router-dom";
import { HeaderButtons } from "../header.buttons/header.buttons";
import styles from './header.module.scss';

// Timport { Login } from "../login.button/login.button";
// import { LogoutButton } from "../logout.button/logout.button";
// import { Register } from "../register/register";

export function Header() {

  return (
    <header className={styles.header}>
      <Link to={'/home'}>
      <img src="https://res.cloudinary.com/drv1kbmgi/image/upload/h_80/v1702842157/Proyecto%20Final%20Figma/classic_carlogo_swndrv.png" alt="logo Classic Cars" />
      </Link>
      <h1>MY CLASSIC CARS</h1>
      <HeaderButtons></HeaderButtons>

    </header>
  )
}
