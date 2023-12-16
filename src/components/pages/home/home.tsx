// import { RootState } from "../../../store/store";
import { List } from "../../list/list";
// import { useSelector } from "react-redux";

export default function HomePage() {

  // const { cars } = useSelector((state: RootState) => state.carsState);

  return (
    <>
      <h3>ALL USERS PUBLICATIONS</h3>
      <List></List>
    </>
  )
}
