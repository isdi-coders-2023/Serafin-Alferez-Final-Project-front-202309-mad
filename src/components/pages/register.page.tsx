import { Register } from "../register/register"
import styles from './register.page.module.scss'

export default function RegisterPage() {
  return (
    <div data-testid="register-component">
      <h2 className={styles.title}>NEW USER</h2>
      <Register></Register>
    </div>
  )
}
