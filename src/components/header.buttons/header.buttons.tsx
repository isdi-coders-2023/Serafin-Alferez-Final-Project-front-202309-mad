import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import { LogoutButton } from "../logout.button/logout";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AddCarButton } from "../add.car.button/add.car.button";


export function HeaderButtons() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loggedUser } = useSelector((state: RootState) => state.userState);

  const navigate = useNavigate();
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile/';

  return (
    <div>
      {!loggedUser && (
        <>
          <Link to={"/login"} style={{color:'inherit'}} >
          <img src="https://res.cloudinary.com/drv1kbmgi/image/upload/h_30/v1701966155/Proyecto%20Final%20Figma/login_nntogf.png" alt="Login icon" role="button" />
         
          </Link>
          <Link to={"/register"} style={{color:'inherit'}} >
            <img src="https://res.cloudinary.com/drv1kbmgi/image/upload/h_100/v1701966182/Proyecto%20Final%20Figma/user-plus-solid_kx1mhi.svg" alt="Register icon" role="button"/>
          </Link>
        </>
      )}
      {loggedUser && (
        <>
          <AddCarButton></AddCarButton>
          <LogoutButton></LogoutButton>
          <p>Hola de nuevo {loggedUser.name}</p>
          {!isProfilePage && <button onClick={() => navigate('/profile/')}>MY LIST</button>}
        </>
      )}
    </div>
  )
}
