import { Link } from "react-router-dom";
import { useUsers } from "../../hooks/use.users";

export function AddCarButton() {

  const { loggedUser } = useUsers();

  return (
    <>
    {loggedUser && (
      <>
      <Link to={'/addcar/'} data-testid="link">
        <img  src="https://res.cloudinary.com/drv1kbmgi/image/upload/h_9/v1702471802/addcaricon_d6b0zt.svg" height={35} width={35} alt="Add car icon" /> 
      </Link>
      </>
    )}
    </>
    )
}
