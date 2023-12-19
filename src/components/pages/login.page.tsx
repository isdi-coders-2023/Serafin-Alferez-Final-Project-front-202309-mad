import { Login } from "../login.button/login";
import styles from './login.page.module.scss'

export default function LoginPage() {
  return (
    <>
    <div data-testid="login-component" className={styles.loginpage}>
      <h1 className={styles.titlelogin}>LOGIN</h1>
      <div>
        <Login></Login>
      </div>
    </div>
    </>
  );
};
