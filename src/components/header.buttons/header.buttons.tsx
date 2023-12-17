import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { LogoutButton } from "../logout.button/logout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AddCarButton } from "../add.car.button/add.car.button";
import styles from './header.buttons.module.scss';

export function HeaderButtons() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loggedUser } = useSelector((state: RootState) => state.userState);

  const navigate = useNavigate();
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile/';

  return (
    <div>
      {!loggedUser && (
        <div className={styles.loginregisterbuttons}>
          <Link to={"/login"} style={{color:'inherit'}} >
          <img src="https://res.cloudinary.com/drv1kbmgi/image/upload/h_30/v1701966155/Proyecto%20Final%20Figma/login_nntogf.png" alt="Login icon" role="button" />
          </Link>
          <Link to={"/register"} style={{color:'inherit'}} >
            <img src="https://res.cloudinary.com/drv1kbmgi/image/upload/h_100/v1701966182/Proyecto%20Final%20Figma/user-plus-solid_kx1mhi.svg" alt="Register icon" role="button"/>
          </Link>
        </div>
      )}
      {loggedUser && (
        <div>
          <div className={styles.addlogoutbuttons}>
            <AddCarButton></AddCarButton>
            <LogoutButton></LogoutButton>
          </div>
          <div className={styles.helloprofilebutton}>
            <p className={styles.hello}>Hola {loggedUser.name}</p>
            {!isProfilePage && <button className={styles.profilebutton} onClick={() => navigate('/profile/')}>MY LIST</button>}
          </div>
         
        </div>
      )}
    </div>
  )
}
