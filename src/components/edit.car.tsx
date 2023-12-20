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
      <div className={styles.editcontainer}>
        <div className={styles.edittitle}>
          <h3 className={styles.edittitle}>EDIT CAR</h3>
        </div>
        <div className={styles.editform}>
          <form onSubmit={handleUpdateCar} action="" role="form">
              <select className={styles.editselect} data-testid='select' name="make" id="make" value={findCar?.make} onChange={handleInputChangeCar} required>
                <option className={styles.editoption} value=""></option>
                <option className={styles.editoption} value="Alfa romeo">Alfa Romeo</option>
                <option className={styles.editoption} value="Aston martin">Aston Martin</option>
                <option className={styles.editoption} value="Audi">Audi</option>
                <option className={styles.editoption} value="Bentley">Bentley</option>
                <option className={styles.editoption} value="BMW">BMW</option>
                <option className={styles.editoption} value="Cadillac">Cadillac</option>
                <option className={styles.editoption} value="Chevrolet">Chevrolet</option>
                <option className={styles.editoption} value="Citroen">Citröen</option>
                <option className={styles.editoption} value="Ferrari">Ferrari</option>
                <option className={styles.editoption} value="Ford">Ford</option>
                <option className={styles.editoption} value="Jaguar">Jaguar</option>
                <option className={styles.editoption} value="Lamborghini">Lamborghini</option>
                <option className={styles.editoption} value="Lancia">Lancia</option>
                <option className={styles.editoption} value="Lotus">Lotus</option>
                <option className={styles.editoption} value="Mercedes Benz">Mercedes Benz</option>
                <option className={styles.editoption} value="Mini">Mini</option>
                <option className={styles.editoption} value="Morgan">Morgan</option>
                <option className={styles.editoption} value="Peugeot">Peugeot</option>
                <option className={styles.editoption} value="Porsche">Porsche</option>
                <option className={styles.editoption} value="Renault">Renault</option>
                <option className={styles.editoption} value="Seat">Seat</option>
                <option className={styles.editoption} value="Volkswagen">Volkswagen</option>
              </select>
              <div className={styles.editoptions}>
                <label htmlFor="model">
                  Model
                  <input
                    type="text"
                    value={findCar?.model}
                    name="model"
                    className={styles.editoption}
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
                    className={styles.editoption}
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
                    className={styles.editoption}
                    onChange={handleInputChangeCar}
                    required
                  />
                </label>
                <label className={styles.editoption} htmlFor="info">Description</label>
                  <textarea className={styles.editoption} name="info" id="info" value={findCar?.info} onChange={handleInputChangeCar} cols={30} rows={5}></textarea>
                <div className={styles.editoption} id="add-file">
                  <input className={styles.editoption} type="file" name="picture" aria-label="file"/>
                </div>
              </div>
              <div className={styles.editcarbuttons}>
                <button className={styles.editoption} type="submit">SAVE</button>
                <Link to={'/profile/'}>
                  <button className={styles.editoption} type="button">CANCEL</button>
                </Link>
              </div>
            </form>
          </div>
      </div>
  );
}
