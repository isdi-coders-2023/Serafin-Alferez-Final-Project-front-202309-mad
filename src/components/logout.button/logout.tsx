import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useUsers } from "../../hooks/use.users";
import { Link } from "react-router-dom";


export function LogoutButton() {
  const { loggedUser } = useSelector((state: RootState) => state.userState);

  const { logout } = useUsers();

  return (
    <>
    {loggedUser && (
      <Link to={'/logout/'}>
        <img onClick={logout} src="https://res.cloudinary.com/drv1kbmgi/image/upload/h_50/v1701966016/Proyecto%20Final%20Figma/logout_ovebqb.svg" alt="Logout icon" />
       
      </Link>
    // <button onClick={logout} role="button">LOGOUT</button>
    )}
    </>
    )
}

    

