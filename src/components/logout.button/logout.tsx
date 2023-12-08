
import { useUsers } from "../../hooks/use.users";
import { Link } from "react-router-dom";


export function LogoutButton() {

  const { logout, loggedUser } = useUsers();

  return (
    <>
    {loggedUser && (
      <>
      <Link to={'/logout/'}>
        <img role="button" onClick={logout} src="https://res.cloudinary.com/drv1kbmgi/image/upload/h_50/v1701966016/Proyecto%20Final%20Figma/logout_ovebqb.svg" alt="Logout icon" /> 
      </Link>
    {/* <button onClick={logout} role="button">LOGOUT</button> */}
      </>
    )}
    </>
    )
}

    

