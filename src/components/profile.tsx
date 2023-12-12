// import {useEffect} from 'react'
import { useSelector } from "react-redux";
import { RootState } from '../store/store';
import { List } from "./list/list";


export default function Profile() {

  const { loggedUser } = useSelector((state: RootState) => state.userState);

  return(
    <>
      <List carsToRender={loggedUser?.cars}></List>
    </>
  )
}
