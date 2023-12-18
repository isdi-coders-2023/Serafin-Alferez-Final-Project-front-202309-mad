import styles from './home.module.scss'

import { List } from "../list";

// import { useSelector } from "react-redux";

export default function HomePage() {

  // const { cars } = useSelector((state: RootState) => state.carsState);

  return (
    <>
      <h3 className={styles.title}>ALL USERS PUBLICATIONS</h3>
      <List></List>
    </>
  )
}
