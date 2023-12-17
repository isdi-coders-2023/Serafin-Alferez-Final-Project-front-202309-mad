import { makeImageURL } from "../../services/images";
import { details } from "./details.module.scss";
import { useCars } from "../../hooks/use.cars";
import { Link } from "react-router-dom";

export default function Details() {
  // const { currentCar } = useSelector((state: RootState) => state.carsState);
  const { currentCar } = useCars()
  const carPicture = currentCar && currentCar.picture && makeImageURL(currentCar?.picture.publicId, 150);
  return (
    <>
      <div className={details} data-testid='button'>
        <Link to={'/home'}>
          <img src={ carPicture! } alt="imagen del vehículo seleccionado" />
        </Link>
        <div>
            <div className="card-make">
              <p className="card-make" data-testid='paragraph'>{currentCar?.make}</p>
            </div>
            <div className="card-model">
              <p className="card-model">{currentCar?.model}</p>
            </div>
            <div className="card-color">
              <p className="card-color">{currentCar?.color}</p>
            </div>
            <div className="card-year">
              <p className="card-year">{currentCar?.year}</p>
            </div>
            <div className="card-info">
              <p className="card-info">{currentCar?.info}</p>
            </div>
        </div>
      </div>
    </>
  )
}
