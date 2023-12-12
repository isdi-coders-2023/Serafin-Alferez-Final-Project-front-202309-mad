import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useCars } from "../../hooks/use.cars";
import { useEffect } from "react";
import { Card } from "../cards/card";
import { Car } from "../../entities/car";
import './list.css'


export function List() {
  const { cars } = useSelector((state: RootState) => state.carsState);
  const { loadCars } = useCars();

  useEffect(() => {
    loadCars();
  }, [loadCars]);

  return (
    <>
     
        <ul className="cars-list">
          {cars.map((item: Car) => (
            <Card key={item.id} data={item}></Card>
          ))}
        </ul>
      
    </>
  );
}
