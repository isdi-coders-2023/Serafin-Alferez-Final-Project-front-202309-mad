import styles from './logout.module.scss'
import { useUsers } from "../../hooks/use.users";
import { Link } from "react-router-dom";


export function LogoutButton() {

  const { logout, loggedUser } = useUsers();

  return (
    <>
    {loggedUser && (
      <div className={styles.logouticon}>
      <Link to={'/home/'}>
        <img role="button" onClick={logout} src="https://res.cloudinary.com/drv1kbmgi/image/upload/h_25/v1702843443/Proyecto%20Final%20Figma/logout_icon_k3k8nk.png" alt="Logout icon" /> 
      </Link>
    {/* <button onClick={logout} role="button">LOGOUT</button> */}
      </div>
    )}
    </>
    )
}

    
