import { Link, useNavigate } from "react-router-dom";
import { useCars } from "../../hooks/use.cars";
import { SyntheticEvent } from "react";
import styles from './add.car.module.scss'

export default function AddCar() {
  const navigate = useNavigate();
  const { createCar } = useCars();


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
              <select className={styles.addselect} name="make" id="make" required>
                <option className={styles.addoption} value=""></option>
                <option className={styles.addoption} value="Alfa romeo">Alfa Romeo</option>
                <option className={styles.addoption} value="Aston martin">Aston Martin</option>
                <option className={styles.addoption} value="Audi">Audi</option>
                <option className={styles.addoption} value="Bentley">Bentley</option>
                <option className={styles.addoption} value="BMW">BMW</option>
                <option className={styles.addoption} value="Cadillac">Cadillac</option>
                <option className={styles.addoption} value="Chevrolet">Chevrolet</option>
                <option className={styles.addoption} value="Citroen">Citröen</option>
                <option className={styles.addoption} value="Ferrari">Ferrari</option>
                <option className={styles.addoption} value="Ford">Ford</option>
                <option className={styles.addoption} value="Jaguar">Jaguar</option>
                <option className={styles.addoption} value="Lamborghini">Lamborghini</option>
                <option className={styles.addoption} value="Lancia">Lancia</option>
                <option className={styles.addoption} value="Lotus">Lotus</option>
                <option className={styles.addoption} value="Mercedes Benz">Mercedes Benz</option>
                <option className={styles.addoption} value="Mini">Mini</option>
                <option className={styles.addoption} value="Morgan">Morgan</option>
                <option className={styles.addoption} value="Peugeot">Peugeot</option>
                <option className={styles.addoption} value="Porsche">Porsche</option>
                <option className={styles.addoption} value="Renault">Renault</option>
                <option className={styles.addoption} value="Seat">Seat</option>
                <option className={styles.addoption} value="Volkswagen">Volkswagen</option>
              </select>
              <div className={styles.addoptions}>
                <label className={styles.addoption} htmlFor="model">Model</label>
                  <input className={styles.addoption} type="text" name="model" required/>
                <label className={styles.addoption} htmlFor="year">Year</label>
                  <input className={styles.addoption} type="text" name="year" />
                <label className={styles.addoption} htmlFor="color">Color</label>
                  <input className={styles.addoption} type="text" name="color" />
                <label className={styles.addoption} htmlFor="info">Description</label>
                <textarea name="info" id="info" cols={25} rows={3}></textarea>
                <div className={styles.addfile} id="add-file">
                  <input className={styles.addfileinput} type="file" name="picture" aria-label="file"/>
                </div>
              </div>
              <div className={styles.addcarbuttons}>
                <button className={styles.addsavebutton} type="submit">SAVE</button>
                <Link to={'/profile/'}>
                  <button className={styles.addcancelbutton} type="button">CANCEL</button>
                </Link>
              </div>
          </form>
        </div>
    </div>
  );
}
