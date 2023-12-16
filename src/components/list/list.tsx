import { useCars } from "../../hooks/use.cars";
import { useEffect } from "react";
import { Card } from "../cards/card";
import { Car } from "../../entities/car";
import './list.css'

// type Props = {
//   carsToRender: Car[] | undefined
// };

export function List() {
  const { loadCars, carUpdateState, cars } = useCars();

  useEffect(() => {
    loadCars();
  }, [carUpdateState]);

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
