import { useSelector } from "react-redux";
import { details } from "./details.module.scss";
import { RootState } from "../../../store/store";
import { makeImageURL } from "../../../services/images";

export default function Details() {
  const { currentCar } = useSelector((state: RootState) => state.carsState);
  const carPicture = currentCar && currentCar.picture && makeImageURL(currentCar?.picture.publicId, 150);
  return (
    <div className={details}>
      <img src={ carPicture! } alt="imagen del vehículo seleccionado" />
      <div>
          <div className="card-make">
            <p className="card-make">{currentCar?.make}</p>
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
      </div>
    </div>
  )

}
