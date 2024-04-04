

import '../styles/cart.scss'
import  logList  from '../datas/logements.json';
 

const Card = () => {
    return (
        <div className="card-contain">

             <div className='card-item'>
				{
                logList.map(logt => {   return (


					<div  key={logList.id}>
                        
						{logt.cover}
						{logt.title}
						
                    </div> 
                )
                 } )
                }
                
			</div>



        </div>
    );
};

export default Card;