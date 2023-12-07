import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useUsers } from "../../hooks/use.users";


export function LogouButton() {
  const { loggedUser } = useSelector((state: RootState) => state.usersState);

  const { logout } = useUsers();

  return (
    <>
    {loggedUser}
    <button onClick={logout} role="button"></button>
    </>
  )
}
