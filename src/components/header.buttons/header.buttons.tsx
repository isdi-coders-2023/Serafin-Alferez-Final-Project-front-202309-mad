import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Login } from "../login.button/login.button";
import { Register } from "../register/register";
import { LogoutButton } from "../logout.button/logout.button";


export function HeaderButtons() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loggedUser } = useSelector((state: RootState) => state.userState);

  return (
    <div>
      {!loggedUser && (
        <>
          <Login></Login>
          <Register></Register>
        
        </>
      )}
      {loggedUser && (
        <>
          <LogoutButton></LogoutButton>
          <p>Hola {loggedUser.name}</p>
        </>
      )}
    </div>
  )
}
