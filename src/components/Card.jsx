

import '../styles/cart.scss'
import logList from '../datas/logements.json';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const CardTitle = styled(Link)`

color : black ;
font-family : 'Montserrat';
font-size: 18px;
font-weight : 700 ;
text-decoration: none;


`


const Card = () => {
  return (
    <div className="card-contain">

      <div className='card-item'>
        {
          logList.map(logt => (
            <Link to="" key={logList.id}>
              <img src={logt.cover} alt={logt.title} />
              <CardTitle>{logt.title}</CardTitle>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Card;