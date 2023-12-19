import { useCars } from "../../hooks/use.cars";
import { useEffect } from "react";
import { Card } from "../cards/card";
import { Car } from "../../entities/car";
import { useParams, useNavigate } from "react-router-dom";
import styles from './../list/list.module.scss'


export function List() {
  const navigate = useNavigate();
  const { loadCarsByPage, cars } = useCars();

  const { page } = useParams();

  const goToNextPage = () => {
    const newPage = Number(page!) + 1;
    navigate(`/home/page/${newPage}`);
  };

  const goToPreviousPage = () => {
    const newPage = Number(page!) - 1;
    navigate(`/home/page/${newPage}`);
  };

  useEffect(() => {
    loadCarsByPage(page!);
  }, [loadCarsByPage, page]);

  return (
    <div className={styles.listcontainer}>
      <div className={styles.pagebuttons}>
        {Number(page!) > 1 && <button onClick={goToPreviousPage}>Previous</button>}
        {cars.length > 0 ? <button onClick={goToNextPage}>Next</button> : <p className={styles.nocars}>No more cars to show</p>}
      </div>
      <ul className={styles.carslist}>
        {cars.map((item: Car) => (
          <Card key={item.id} data={item}></Card>
        ))}
      </ul>

    </div>
  );
};
