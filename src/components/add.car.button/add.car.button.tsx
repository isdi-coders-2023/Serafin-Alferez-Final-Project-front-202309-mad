import { Link } from "react-router-dom";
import { useUsers } from "../../hooks/use.users";

export function AddCarButton() {

  const { loggedUser } = useUsers();

  return (
    <>
    {loggedUser && (
      <>
      <Link to={'/addcar/'} data-testid="link">
        <img  src="https://res.cloudinary.com/drv1kbmgi/image/upload/h_10/v1702471802/addcaricon_d6b0zt.svg" height={40} width={40} alt="Add car icon" /> 
      </Link>
      </>
    )}
    </>
    )
}
