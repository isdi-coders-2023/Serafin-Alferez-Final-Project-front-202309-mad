import { SyntheticEvent, useEffect, useState } from "react";
import { useUsers } from "../../hooks/use.users";
import { useNavigate } from 'react-router-dom';
import { LoginUser } from "../../entities/user";
import { Link } from "react-router-dom";
import styles from './login.module.scss';

export function Login() {
  const navigate = useNavigate();
  const [hasLogin, setHasLogin] = useState(false)
  const { login } = useUsers();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const loginUser: LoginUser = {
      email: formData.get('email')?.toString() as string,
      passwd: formData.get('password')?.toString() as string,
    };
    login(loginUser);
    setHasLogin(true);
    }

    useEffect(() => {
      if (hasLogin) {
        navigate('/home/');
      }
    }, [hasLogin, navigate]);

    return (
      <div className={styles.logincontainer}>
        {!hasLogin && (
          <form onSubmit={handleSubmit} className={styles.loginform} aria-label="form">
            <label >EMAIL</label>
              <input className="input-form" type="email" name="email" required />
            <label>PASSWORD</label>
              <input className="input-form" type="password" name="password" required />
            <div className={styles.loginformbuttons}>
              <div className={styles.loginbuttoncontainer}>
                <button className={styles.loginbutton} type="submit">LOGIN</button>
              </div>
              <div className={styles.cancelbuttoncontainer}>
                <Link to={'/home/'}>
                  <button className={styles.cancelbutton} type="button">CANCEL</button>
                </Link>
              </div>
              </div>
          </form>
        )}
      </div>
      )
  }
