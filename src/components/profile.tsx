// import {useEffect} from 'react'
import { useSelector } from "react-redux";
import { RootState } from '../store/store';
// import { List } from "./list/list";
import { useCars } from "../hooks/use.cars";
import { useEffect } from "react";
import { Car } from "../entities/car";
import { Card } from "./cards/card";


export default function Profile() {

  const { loggedUser } = useSelector((state: RootState) => state.userState);
  const { cars } = useCars();
  
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
    <>
      <h3>{loggedUser?.name} cars</h3>
      {userCars.length > 0 ? (
        userCars.map((item: Car) => <Card key={item.id} data={item}></Card>)
      ) : (
        <>
          <p>{loggedUser?.name} Vaya! aún no tienes ningún coche</p>
          {/* <img src="https://res.cloudinary.com/drv1kbmgi/image/upload/h_200/v1702754778/FP%20icons/mario_tp0wke.png" alt="" /> */}
        </>
      )}
      {/* <List carsToRender={loggedUser!.cars}></List> */}
    </>
  )
}
