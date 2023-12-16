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
      {userCars.map((item: Car) => (
        <Card key={item.id} data={item}></Card>
      ))}
      {/* <List carsToRender={loggedUser!.cars}></List> */}
    </>
  )
}
