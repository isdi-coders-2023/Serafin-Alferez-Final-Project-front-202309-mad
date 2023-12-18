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
          <h3 className={styles.addtitle}>ADD NEW CAR</h3>
        </div>
        <div className={styles.addform}>
          <form onSubmit={handleCreateCar} action="">
            <label htmlFor="make">Make</label>
              <select className={styles.select} name="make" id="make" required>
                <option value=""></option>
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
