import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useUsers } from "../../hooks/use.users";


export function LogoutButton() {
  const { loggedUser } = useSelector((state: RootState) => state.userState);

  const { logout } = useUsers();

  return (
    <>
    {loggedUser && (
    <button onClick={logout} role="button">LOGOUT</button>
    )}
    </>
    )
}

    

