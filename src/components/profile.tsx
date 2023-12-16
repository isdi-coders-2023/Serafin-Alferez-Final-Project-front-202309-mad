// import {useEffect} from 'react'
import { useSelector } from "react-redux";
import { RootState } from '../store/store';
import { List } from "./list/list";
import { useCars } from "../hooks/use.cars";
import { useEffect } from "react";


export default function Profile() {

  const { loggedUser,  } = useSelector((state: RootState) => state.userState);
  
  const {
    
    loadCars,
    carUpdateState
  } = useCars();

  useEffect(() => {
    loadCars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carUpdateState]);



  return(
    <>
      <h3>{loggedUser?.name} cars</h3>
      <List carsToRender={loggedUser!.cars}></List>
    </>
  )
}
