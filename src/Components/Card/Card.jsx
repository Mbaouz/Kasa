

import './card.scss'
import logList from '../../datas/logements.json';
import { Link } from 'react-router-dom';





const Card = () => {
  return (
    <div className="card-contain">

      <div className='card-item'>
        {
          logList.map(logt => (
            <Link to={"/fiche/" + logt.id} key={logt.id}>
              <img src={logt.cover} alt={logt.title} />
              <h3>{logt.title}</h3>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Card;