// import {useEffect} from 'react'
// import { useSelector } from "react-redux";
// import { RootState } from '../store/store';
// import { List } from "./list/list";
import { useCars } from "../hooks/use.cars";
import { useEffect } from "react";
import { Car } from "../entities/car";
import { Card } from "./cards/card";
import styles from './../components/profile.module.scss';
import { useUsers } from "../hooks/use.users";


export default function Profile() {

  // const { loggedUser } = useSelector((state: RootState) => state.userState);
  const { cars } = useCars();

  const { loggedUser } = useUsers();
  
  const {
    loadCars,
    carUpdateState
  } = useCars();

  useEffect(() => {
    loadCars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carUpdateState]);

  const userCars = cars.filter((item: Car) => item.author.id === loggedUser!.id );

  return(
    <div>
      <h3 data-testid="cars">{loggedUser?.name}'s cars</h3>
      <div className={styles.mylist}>
        {userCars.length > 0 ? (
          userCars.map((item: Car) => <Card key={item.id} data={item}></Card>)
        ) : (
          <>
            <p>{loggedUser?.name} Vaya! aún no tienes ningún coche</p>
          </>
        )}
      </div>
    </div>
  )
}
