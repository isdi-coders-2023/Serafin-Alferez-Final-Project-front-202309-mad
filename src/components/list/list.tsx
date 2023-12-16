import { useCars } from "../../hooks/use.cars";
import { useEffect } from "react";
import { Card } from "../cards/card";
import { Car } from "../../entities/car";
import './list.css'
import { useParams, useNavigate } from "react-router-dom";

export function List() {
  const navigate = useNavigate()
  const { loadCarsByPage, cars } = useCars();

  const { page } = useParams();

  const goToNextPage = ()=>{
    const newPage = Number(page!) + 1
    navigate(`/home/page/${newPage}`)
  }

  const goToPreviousPage = ()=>{
    const newPage = Number(page!) - 1
    navigate(`/home/page/${newPage}`)
  }

  useEffect(() => {
    loadCarsByPage(page!)
  }, [loadCarsByPage, page]);

  return (
    <>
      <ul className="cars-list">
        {cars.map((item: Car) => (
          <Card key={item.id} data={item}></Card>
        ))}
      </ul>
      {Number(page!) > 1 && <button onClick={goToPreviousPage}> Go to previous page</button>}
      {cars.length > 0 ? <button onClick={goToNextPage}> Go to next page</button> : <p>No more cars to show</p>}
    </>
  );
}
