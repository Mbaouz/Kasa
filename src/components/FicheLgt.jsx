

import logList from '../datas/logements.json';
import '../styles/fiche.scss'
import { useParams } from 'react-router-dom';
import { useState } from 'react';


const Fiche = () => {
    
    
    const Fichelgt = logList.find((logement) => logement.id);
    
    
    
      return(
    <caroussel className="carousel">
      <div className='carousel-img'>
           <img src={Fichelgt.pictures[0]} alt={Fichelgt.title}></img>
      </div>
      
      <div className='infos'>
        <div className='info-titre'>
            <h1>{Fichelgt.title}</h1>
            <h2>{Fichelgt.location}</h2>
       </div>

         <div className='info-host'>

            <h3>{Fichelgt.host.name}</h3>
             <img src={Fichelgt.host.picture} alt={Fichelgt.host.name}></img>

         </div>
         


      
      </div>

       <tag className="tags">
           <div className='tag'>

               <p>{Fichelgt.tags[0]}</p>
            
           </div>

           <div className='tag'>

               <p>{Fichelgt.tags[1]}</p>
            
          </div>
      </tag>

    </caroussel>
      ) 
        

      }
    

export default Fiche;