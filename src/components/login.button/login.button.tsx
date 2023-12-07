import { SyntheticEvent, useState } from "react";
import { useUsers } from "../../hooks/use.users";
import { LoginUser } from "../../entities/user";
import { Link } from "react-router-dom";



export function Login() {
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

    return (
      <>
        <h2>LOGIN</h2>
        {!hasLogin && (
          <form onSubmit={handleSubmit} className="login-form">
            <label>EMAIL</label>
              <input type="email" name="email" required />
            <label>PASSWORD</label>
              <input type="password" name="password" required />
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
        {hasLogin && (
          <div>
            <p>SUCESS</p>
            <Link to={'/home/'}>
              <button type="button">HOME</button>
            </Link>
          </div>
        )}
      </>
      )
  }
