import { SyntheticEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useCars } from "../hooks/use.cars";
// import { useSelector } from "react-redux";
// import { RootState } from "../../store/store";
// import { useUsers } from "../../hooks/use.users";

export default function EditCar () {
  const navigate = useNavigate();

  const {
    updateCar,
    cars,
    loadCars,
    carUpdateState
  } = useCars();

  const { id } = useParams();
  const foundCar = cars.find(
    (car) => car.id === id
  );

  const [findCar, setCar] = useState(foundCar);

  useEffect(() => {
    if (findCar) {
      setCar(findCar);
    }
  }, [findCar]);

  useEffect(() => {
    loadCars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carUpdateState]);

  const handleInputChangeCar = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setCar((prevState) => ({
      ...prevState!,
      [name]: value,
    }));
  };

  const handleUpdateCar = (event: SyntheticEvent) => {
    event.preventDefault();
    const element = event.target as HTMLFormElement;
    const formData = new FormData(element);
    updateCar(findCar!.id, formData);
    navigate('/profile/');
  };
    return (
      <>
        <div className="add-car-tittle">
          <h3>ADD NEW CAR</h3>
        </div>
        <div className="add-car-form">
          <form onSubmit={handleUpdateCar} action="" role="form">
            {/* <label htmlFor="make">
              Make
              <input
              type="text"
              value={findCar?.make}
              name="make"
              className="input-edit"
              onChange={handleInputChangeCar}
              required
            />
          </label> */}
              <select data-testid='select' name="make" id="make" value={findCar?.make} onChange={handleInputChangeCar} required>
                <option value="alfa romeo">Alfa Romeo</option>
                <option value="aston martin">Aston Martin</option>
                <option value="audi">Audi</option>
                <option value="bentley">Bentley</option>
                <option value="bmw">BMW</option>
                <option value="cadillac">Cadillac</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="citroen">Citröen</option>
                <option value="ferrari">Ferrari</option>
                <option value="ford">Ford</option>
                <option value="jaguar">Jaguar</option>
                <option value="lamborghini">Lamborghini</option>
                <option value="lancia">Lancia</option>
                <option value="lotus">Lotus</option>
                <option value="mercedes Benz">Mercedes Benz</option>
                <option value="mini">Mini</option>
                <option value="morgan">Morgan</option>
                <option value="peugeot">Peugeot</option>
                <option value="porsche">Porsche</option>
                <option value="renault">Renault</option>
                <option value="seat">Seat</option>
                <option value="volkswagen">Volkswagen</option>
              </select>
            <label htmlFor="model">
              Model
              <input
                type="text"
                value={findCar?.model}
                name="model"
                className="input-edit"
                onChange={handleInputChangeCar}
                required
              />
            </label>
            <label htmlFor="color">
              Color
              <input
                type="text"
                value={findCar?.color}
                name="color"
                className="input-edit"
                onChange={handleInputChangeCar}
                required
              />
            </label>
            <label htmlFor="year">
              Year
              <input
                type="text"
                value={findCar?.year}
                name="year"
                className="input-edit"
                onChange={handleInputChangeCar}
                required
              />
            <label htmlFor="info">Description</label>
                <textarea name="info" id="info" value={findCar?.info} onChange={handleInputChangeCar} cols={30} rows={5}></textarea>
            </label>
              <div className="add-file" id="add-file">
                <input type="file" name="picture" aria-label="file"/>
              </div>
              <button className="save-button" type="submit">SAVE</button>
          </form>
        </div>
        <div className="cancel-button">
          <Link to={'/profile/'}>
            <button type="button">CANCEL</button>
          </Link>
        </div>
    </>
  );
}
