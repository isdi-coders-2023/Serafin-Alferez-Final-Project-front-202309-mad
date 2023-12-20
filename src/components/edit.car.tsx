import { SyntheticEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useCars } from "../hooks/use.cars";
import styles from './edit.car.module.scss'

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
      <div className={styles.addcontainer}>
        <div className={styles.addtitle}>
          <h3 className={styles.addtitle}>EDIT CAR</h3>
        </div>
        <div className={styles.addform}>
          <form onSubmit={handleUpdateCar} action="" role="form">
              <select className={styles.select} data-testid='select' name="make" id="make" value={findCar?.make} onChange={handleInputChangeCar} required>
                <option value=""></option>
                <option value="Alfa romeo">Alfa Romeo</option>
                <option value="Aston martin">Aston Martin</option>
                <option value="Audi">Audi</option>
                <option value="Bentley">Bentley</option>
                <option value="BMW">BMW</option>
                <option value="Cadillac">Cadillac</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Citroen">Citröen</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Ford">Ford</option>
                <option value="Jaguar">Jaguar</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Lancia">Lancia</option>
                <option value="Lotus">Lotus</option>
                <option value="Mercedes Benz">Mercedes Benz</option>
                <option value="Mini">Mini</option>
                <option value="Morgan">Morgan</option>
                <option value="Peugeot">Peugeot</option>
                <option value="Porsche">Porsche</option>
                <option value="Renault">Renault</option>
                <option value="Seat">Seat</option>
                <option value="Volkswagen">Volkswagen</option>
              </select>
              <div className={styles.options}>
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
                </label>
                <label htmlFor="info">Description</label>
                  <textarea name="info" id="info" value={findCar?.info} onChange={handleInputChangeCar} cols={30} rows={5}></textarea>
                <div className="add-file" id="add-file">
                  <input type="file" name="picture" aria-label="file"/>
                </div>
              </div>
              <div className={styles.addcarbuttons}>
                <button className="save-button" type="submit">SAVE</button>
                <Link to={'/profile/'}>
                  <button type="button">CANCEL</button>
                </Link>
              </div>
            </form>
          </div>
      </div>
  );
}
