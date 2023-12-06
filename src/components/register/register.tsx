import { SyntheticEvent, useState } from "react";
import { useUsers } from '../../hooks/use.users';
import { Link } from "react-router-dom";

export function Register() {
  const [hasRegister, setHasRegister] = useState(false);
  const { register } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    register(formData)
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
          <input type="password" name="password" required/>
        <label>Name</label>
          <input type="text" name="name" required/>
        <label>Surname</label>
          <input type="text" name="surname" required/>
        <div className="signup-buttons">
          <button type="submit">SIGN UP</button>
        </div>
      </form>
    )}
    {hasRegister && (
      <div>
        <p>SUCESSFUL</p>
        <Link to={'/home/'}>
          <button type="button">HOME</button>
        </Link>
      </div>
    )}    
  </>
  );
}
