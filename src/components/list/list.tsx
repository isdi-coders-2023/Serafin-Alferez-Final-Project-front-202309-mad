import { useCars } from "../../hooks/use.cars";
import { useEffect } from "react";
import { Card } from "../cards/card";
import { Car } from "../../entities/car";
import './list.css'
import { useParams } from "react-router-dom";

// type Props = {
//   carsToRender: Car[] | undefined
// };

export function List() {
  const { loadCars, loadCarsByPage, cars } = useCars();

  const { page } = useParams();
 console.log(page)


  // esto lo estabamos utilizando antes pero parece que no hace falta--> carUpdateState
  useEffect(() => {
    if(!page){
      loadCars();
    } else{
      loadCarsByPage(page)
    }
  }, [loadCars, loadCarsByPage, page]);

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
