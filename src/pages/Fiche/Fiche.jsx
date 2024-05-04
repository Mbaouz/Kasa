
import { useState } from "react";
import Collapse from '../../Components/Collapse/Collapse';
import logList from '../../datas/logements.json';
import './fiche.scss'
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import Error from '../Error/Error'

const Fiche = () => {
    const [index, setIndex] = useState(0)
    const { logementId } = useParams();
    let stars = [
        "#E3E3E3",
        "#E3E3E3",
        "#E3E3E3",
        "#E3E3E3",
        "#E3E3E3",
    ];
    const logement = logList.find((logement) => logement.id === logementId);
    if (!logement ){ return <div>{<Error/>}</div>};
    stars.fill('#FF6060', 0, logement.rating);

    const previous = () => { const NewIndex = (index===0)?logement.pictures.length - 1 : index - 1;
                             setIndex(NewIndex);
        
                           };

    const next = () => {  const NewIndex = (index===logement.pictures.length - 1) ? 0 : index + 1 ;
                        setIndex(NewIndex);

                       };

    return (
        <div className="carousel">

            <div className='carousel-img'>
                <img src={logement.pictures[index]} alt={logement.title}></img>
                {logement.pictures.length > 1 && 
                <div id="arrow-slide">
                    <svg onClick={previous} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white" />
                    </svg>
                    <svg onClick={next} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white" />
                    </svg>
                </div>}
                {logement.pictures.length > 1 && 
                <div className="compteur">{index + 1} / {logement.pictures.length}</div>}
            </div>

            <div className='infos'>
                <div className='info-titre'>
                    
                    <h1>{logement.title}</h1>
                    <h2>{logement.location}</h2>

                </div>

                <div className='info-host'>
                
                    <h3>{logement.host.name}</h3>
                    <img src={logement.host.picture} alt={logement.host.name}></img>

                </div>




            </div>

            <div className="tags-stars">
                <div className='tags'>

                    <div className='tag'>

                        <p>{logement.tags[0]}</p>

                    </div>
                    <div className='tag'>

                        <p>{logement.tags[1]}</p>

                    </div>
                </div>

                <div className='stars'>
                    {stars.map((color, index) => (
                        <FaStar className='star' color={color} size='20' key={index} />
                    ))}
                </div>
               

                </div>

               
                <div className="stars-info-mobile">
                <div className='stars'>
                    {stars.map((color, index) => (
                        <FaStar className='star' color={color} size='20' key={index} />
                    ))}
                    </div>

                  <div className='info-host-mobile'>

                    <h3>{logement.host.name}</h3>
                    <img src={logement.host.picture} alt={logement.host.name}></img>

                </div>
                </div>
            


            
            <div className="collapse-fiche">

            <Collapse  title="Description" description={logement.description} />
            <Collapse  title="Equipements" description={logement.equipments} />
             
            </div>

            </div>

        
    );
};

export default Fiche;