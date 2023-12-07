import { SyntheticEvent, useState } from "react";
import { useUsers } from '../../hooks/use.users';
import { Link } from "react-router-dom";
import { User } from "../../entities/user";

export function Register() {
  const [hasRegister, setHasRegister] = useState(false);
  const { register } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
   const data = {email: (formElement.elements.namedItem('email') as HTMLInputElement).value,
  passwd: (formElement.elements.namedItem('passwd') as HTMLInputElement).value,
  name: (formElement.elements.namedItem('name') as HTMLInputElement).value,
  surname: (formElement.elements.namedItem('surname') as HTMLInputElement).value
  } as Partial<User>;
  register(data)
    setHasRegister(true)
  };

  return (
    <>
    <h2>NEW USER</h2>

    {!hasRegister && (
      <form onSubmit={handleSubmit} className="register-form">
        <label>Email</label>
          <input type="email" name="email" required/>
        <label>Password</label>
          <input type="password" name="passwd" required/>
        <label>Name</label>
          <input type="text" name="name" required/>
        <label>Surname</label>
          <input type="text" name="surname" required/>
        <div className="signup-button">
          <button type="submit">SIGN UP</button>
        </div>
        <div className="cancel-button">
          <Link to={'/home/'}>
            <button type="button">CANCEL</button>
          </Link>
        </div>  
      </form>
    )}
    {/* {hasRegister && (
      <div>
        <p>SUCESSFUL</p>
        <Link to={'/home/'}>
          <button type="button">HOME</button>
        </Link>
      </div>
    )}     */}
  </>
  );
}
