import { SyntheticEvent, useEffect, useState } from "react";
import { useUsers } from "../../hooks/use.users";
import { useNavigate } from 'react-router-dom';
import { LoginUser } from "../../entities/user";
import { Link } from "react-router-dom";


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
      <>
        {!hasLogin && (
          <form onSubmit={handleSubmit} className="login-form" aria-label="form">
            <label >EMAIL</label>
              <input className="input-form" type="email" name="email" required />
            <label>PASSWORD</label>
              <input className="input-form" type="password" name="password" required />
            <div className="login-button">
              <button type="submit">LOGIN</button>
            </div>
            <div className="cancel-button">
              <Link to={'/home/'}>
                <button type="button">CANCEL</button>
              </Link>
            </div>
          </form>
        )}
        {/* {hasLogin && navigate('/home/')} */}
      </>
      )
  }
