import { makeImageURL } from "../../services/images";
import { useCars } from "../../hooks/use.cars";
import { Link } from "react-router-dom";
import styles from './details.module.scss'

export default function Details() {
  // const { currentCar } = useSelector((state: RootState) => state.carsState);
  const { currentCar } = useCars()
  const carPicture = currentCar && currentCar.picture && makeImageURL(currentCar?.picture.publicId, 150);
  return (
    <>
      <div className={styles.details} data-testid='button'>
        <Link to={'/home'}>
          <img className={styles.image} src={ carPicture! } alt="imagen del vehículo seleccionado" />
        </Link>
        <div className={styles.infocontainer}>
            <div className={styles.cardmake}>
              <p className="card-make" data-testid='paragraph'>{currentCar?.make}</p>
            </div>
            <div className={styles.cardmodel}>
              <p className="card-model">{currentCar?.model}</p>
            </div>
            <div className={styles.cardcolor}>
              <p className="card-color">{currentCar?.color}</p>
            </div>
            <div className={styles.cardyear}>
              <p className="card-year">{currentCar?.year}</p>
            </div>
            <div className={styles.cardinfo}>
              <p className="card-info">{currentCar?.info}</p>
            </div>
        </div>
      </div>
    </>
  )
}
