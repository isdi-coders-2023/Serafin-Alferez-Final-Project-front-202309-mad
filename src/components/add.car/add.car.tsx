import { Link, useNavigate } from "react-router-dom";
import { useCars } from "../../hooks/use.cars";
import { SyntheticEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useUsers } from "../../hooks/use.users";

export default function AddCar() {
  const navigate = useNavigate();
  const { createCar } = useCars();
  const { updateCurrentUser } = useUsers();
  const {loggedUser} = useSelector((state: RootState) => state.userState)

  const handleCreateCar = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    createCar(formData);
    updateCurrentUser(loggedUser!.id);
    console.log('Desde AddCar', loggedUser)
    navigate('/profile/');
  };
    return (
      <>
        <div className="add-car-tittle">
          <h3>ADD NEW CAR</h3>
        </div>
        <div className="add-car-form">
          <form onSubmit={handleCreateCar} action="">
            <label htmlFor="make">Make</label>
            <input type="text" name="make"/>
              {/* <select name="make" id="make" required>
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
                <option value="seat">Seat</option>
                <option value="volkswagen">Volkswagen</option>
              </select> */}
              <label htmlFor="model">Model</label>
                <input type="text" name="model" required/>
              <label htmlFor="year">Year</label>
                <input type="text" name="year" />
              <label htmlFor="color">Color</label>
                <input type="text" name="color" />
              {/* <label htmlFor="description">Description</label>
               <textarea name="description" id="description" cols={30} rows={5}></textarea> */}
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

