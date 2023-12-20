import styles from './home.module.scss'

import { List } from "../list";

export default function HomePage() {

  return (
    <div data-testid='home-component'>
      <h3 className={styles.title}>ALL USERS PUBLICATIONS</h3>
      <List></List>
    </div>
  )
}
