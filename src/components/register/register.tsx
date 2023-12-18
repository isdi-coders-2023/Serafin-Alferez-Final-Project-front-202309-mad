import { SyntheticEvent, useState } from "react";
import { useUsers } from '../../hooks/use.users';
import { Link } from "react-router-dom";
import { User } from "../../entities/user";
import styles from './register.module.scss'

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
    <div className={styles.registercontainer}>

    {!hasRegister && (
      <form onSubmit={handleSubmit} className={styles.registerform} aria-label="form">
        <label>Email</label>
          <input type="email" name="email" required/>
        <label>Password</label>
          <input type="password" name="passwd" required/>
        <label>Name</label>
          <input type="text" name="name" required/>
        <label>Surname</label>
          <input type="text" name="surname" required/>
          <div className={styles.registerformbuttons}>
            <div className={styles.signupbutton}>
              <button type="submit">SIGN UP</button>
            </div>
            <div className={styles.cancelbutton}>
              <Link to={'/home/'}>
              <button type="button">CANCEL</button>
              </Link>
            </div>
          </div>
      </form>
    )}
    {hasRegister && (
      <div>
        <p>SUCESSFUL</p>
        <Link to={'/login/'}>
          <button type="button">LOGIN</button>
        </Link>
      </div>
    )}    
  </div>
  );
}
