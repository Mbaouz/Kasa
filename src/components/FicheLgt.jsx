
import '../assets/left.svg'
import '../assets/right.svg'
import logList from '../datas/logements.json';
import '../styles/fiche.scss'
import {FaStar} from 'react-icons/fa'




const FicheLgt = () => {
    
    
    const Fichelgt = logList.find((logement) => logement.id);
    
    
    
      return(
    <caroussel className="carousel">

      <div className='carousel-img'>
           <img src={Fichelgt.pictures[0]} alt={Fichelgt.title}></img>

           <div id="arrow-slide">
            
             <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="black"/>
             </svg>
            
           
             <svg width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="black"/>
             </svg>
            
           </div>



           
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

       <tag className="tags-stars">
        <div className='tags'>
        
           <div className='tag'>

               <p>{Fichelgt.tags[0]}</p>

           </div>
           <div className='tag'>

               <p>{Fichelgt.tags[1]}</p>
            
          </div>
          </div>
         
          <div className='stars'>
          <FaStar className='star' color='#E3E3E3' size='20'/>
          <FaStar className='star' color='#E3E3E3' size='20'/>
          <FaStar className='star' color='#E3E3E3' size='20'/>
          <FaStar className='star' color='#E3E3E3' size='20'/>
          <FaStar className='star' color='#E3E3E3' size='20'/>
          </div>
        
      </tag>

    </caroussel>
      ) 
        

      }
    

export default FicheLgt;