import { useCars } from "../../hooks/use.cars";
import { useEffect } from "react";
import { Card } from "../cards/card";
import { Car } from "../../entities/car";
import './list.css'

type Props = {
  carsToRender: Car[] | undefined
};

export function List({carsToRender}: Props) {
  const { loadCars } = useCars();

  useEffect(() => {
    loadCars();
  }, [loadCars]);

  return (
    <>
      <ul className="cars-list">
        {carsToRender?.map((item: Car) => (
          <Card key={item.id} data={item}></Card>
        ))}
      </ul>
    </>
  );
}
