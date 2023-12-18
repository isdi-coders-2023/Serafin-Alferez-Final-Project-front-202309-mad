import { Link, useLocation,/* useNavigate */} from "react-router-dom";
import { Car } from "../../entities/car";
import { makeImageURL } from "../../services/images";
import { useCars } from "../../hooks/use.cars";
import  EditCar from "../edit.car";
import styles from './card.module.scss';



type Props = {
  data: Car;
};

export const Card = ({data}: Props) => {
  // const navigate = useNavigate();
  const { handleDetailsPage, deleteCar } = useCars();
  const carPicture = data && data.picture && makeImageURL(data?.picture.publicId, 150);
  const location = useLocation();

  const handleDelete = () => {
    deleteCar(data.id);
  }

  const handleUpdate = () => {
    return (
      <EditCar></EditCar>
      // navigate('/edit/' + data.id)
    )
  }

  const isProfileRoute = location.pathname === '/profile/';

  return (
    <div className={styles.cardcontainer}>
      {isProfileRoute && (
        <div className={styles.deleteupdatebuttons}><div className={styles.deletebutton}>
          <img
            onClick={handleDelete}
            role="button"
            className=""
            src="https://res.cloudinary.com/drv1kbmgi/image/upload/h_25/v1702902215/FP%20icons/transparent-can-icon-trash-icon-5d6f94fbec0c50.3523332615675937239669_h0veqp.png"
            alt="Delete icon" />
        </div><div className={styles.updatebutton}>
            <Link
              to={'/edit/' + data.id}
              style={{ textDecoration: 'none' }}
            >
            <img
              onClick={handleUpdate}
              role="button"
              className=""
              src="https://res.cloudinary.com/drv1kbmgi/image/upload/h_20/v1702548350/FP%20icons/edit_icon_z9fqvn.png"
              alt="Update icon" />
            </Link>
          </div></div>
      )}
      <div className={styles.card}>
        <Link
          to={'/details/' + data.id}
          style={{ textDecoration: 'none' }}
          data-testid='button'>
          <article>
            <figure>
              <img data-testid='img'
                src={carPicture}
                alt={`imagen de ${data.make}`}
                onClick={() => handleDetailsPage(data)}
                className={styles.carimage}
              />
            </figure>
          </article>
        </Link>
        <div className={styles.cardinfocontainer}>
          <span className="card-make">
            <p className="card-make">{data.make}</p>
          </span>
          <span className="carmodel">
            <p className="carmodel">{data.model}</p>
          </span>
        </div>
      </div>
    </div>
  );
};
