import { Link, useNavigate } from "react-router-dom";
import { useCars } from "../../hooks/use.cars";
import { SyntheticEvent } from "react";
import styles from './add.car.module.scss'

export default function AddCar() {
  const navigate = useNavigate();
  const { createCar } = useCars();
  // const { updateCurrentUser } = useUsers();    // quitado 15-12
  // const {loggedUser} = useSelector((state: RootState) => state.userState)

  const handleCreateCar = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    createCar(formData);
    navigate('/home/');
  };
    return (
      <div className={styles.addcontainer}>
        <div className={styles.addtitle}>
          <h2 className={styles.addtitle}>ADD NEW CAR</h2>
        </div>
        <div className={styles.addform}>
          <form onSubmit={handleCreateCar} action="">
            <label htmlFor="make">Make</label>
              <select className={styles.select} name="make" id="make" required>
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
                <label htmlFor="model">Model</label>
                  <input type="text" name="model" required/>
                <label htmlFor="year">Year</label>
                  <input type="text" name="year" />
                <label htmlFor="color">Color</label>
                  <input type="text" name="color" />
                <label htmlFor="info">Description</label>
                <textarea name="info" id="info" cols={25} rows={3}></textarea>
                <div className="add-file" id="add-file">
                  <input type="file" name="picture" aria-label="file"/>
                </div>
              </div>
              <div className={styles.addcarbuttons}>
                <button className={styles.savebutton} type="submit">SAVE</button>
                <Link to={'/profile/'}>
                  <button type="button">CANCEL</button>
                </Link>
              </div>
          </form>
        </div>
    </div>
  );
}
