import { Link } from "react-router-dom";
import { Car } from "../../entities/car";
import { makeImageURL } from "../../services/images";
import { useCars } from "../../hooks/use.cars";
import { card } from './card.module.scss';


type Props = {
  data: Car;
};

export const Card = ({data}: Props) => {
  const { handleDetailsPage } = useCars();
  const carPicture = data && data.picture && makeImageURL(data?.picture.publicId, 150);

  return (
    <div className={card}>
      <Link
        to={'/details/' + data.id}
        style={{ textDecoration: 'none' }}
      >
        <article>
          <figure><img src={carPicture} alt={`imagen de ${data.make}`} onClick={() => handleDetailsPage(data)}
              className="mobile-front-img"></img></figure>
        </article>
      </Link>
      <div className="card-info-container">
          <div className="card-make">
            <p className="card-make">{data.make}</p>
          </div>
          <div className="card-year">
            <p className="card-yaer">{data.year}</p>
          </div>
      </div>
    </div>
  );
}
