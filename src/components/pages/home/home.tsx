import { RootState } from "../../../store/store";
import { List } from "../../list/list";
import { useSelector } from "react-redux";

export default function HomePage() {

  const { cars } = useSelector((state: RootState) => state.carsState);

  return <List carsToRender={cars}></List>;
}
