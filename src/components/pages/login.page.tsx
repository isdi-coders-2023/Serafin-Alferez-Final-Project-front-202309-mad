import { Login } from "../login.button/login";

export default function LoginPage() {
  return (
    <>
    <div data-testid="login-component" className="login-container">
      <h1 className="title-login">LOGIN</h1>
      <Login></Login>
    </div>
    </>
  );
};
