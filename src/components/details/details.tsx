import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { makeImageURL } from "../../services/images";
import { details } from "./details.module.scss";
import { card_info } from "../cards/card.module.scss";


export default function Details() {
  const { currentCar } = useSelector((state: RootState) => state.carsState);
  const carPicture = currentCar && currentCar.picture && makeImageURL(currentCar?.picture.publicId, 150);
  return (
    <div className={details}>
      <img src={ carPicture! } alt="imagen del vehículo seleccionado" />
      <div className={card_info}>
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
