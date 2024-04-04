
import '../assets/top.svg'
import '../styles/collapse.scss'
import AboutImg from '../assets/about-img.jpg'

const Collapse = () => (

<div className="collapse-contain">
   <div className='back-img-about'>
   <img src = {AboutImg} alt="nature"></img>
   </div>
<div className="collapse-item">

   <h3>Fiabilité</h3>
   
   <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
   <path d="M14.7897 11.4315C15.4591 10.7621 16.5462 10.7621 17.2157 11.4315L27.4979 21.7138C28.1674 22.3832 28.1674 23.4704 27.4979 24.1398C26.8285 24.8092 25.7414 24.8092 25.072 24.1398L16 15.0678L6.92804 24.1344C6.25862 24.8039 5.17148 24.8039 4.50206 24.1344C3.83265 23.465 3.83265 22.3779 4.50206 21.7085L14.7843 11.4262L14.7897 11.4315Z" fill="white"/>
   </svg>
   
</div>

<div className='collapse-text'>
   <p> Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et<br/>
   toutes les informations sont régulièrement vérifiées par nos équipes. </p>
   </div>

<div className="collapse-item">

   <h3>Respect</h3>
   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
   <path d="M14.7897 11.4315C15.4591 10.7621 16.5462 10.7621 17.2157 11.4315L27.4979 21.7138C28.1674 22.3832 28.1674 23.4704 27.4979 24.1398C26.8285 24.8092 25.7414 24.8092 25.072 24.1398L16 15.0678L6.92804 24.1344C6.25862 24.8039 5.17148 24.8039 4.50206 24.1344C3.83265 23.465 3.83265 22.3779 4.50206 21.7085L14.7843 11.4262L14.7897 11.4315Z" fill="white"/>
   </svg>

</div>
<div className='collapse-text'>

<p> La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de <br/>
perturbation du voisinage entraînera une exclusion de notre plateforme. </p>

</div>

<div className="collapse-item">

   <h3>Service</h3>
   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
   <path d="M14.7897 11.4315C15.4591 10.7621 16.5462 10.7621 17.2157 11.4315L27.4979 21.7138C28.1674 22.3832 28.1674 23.4704 27.4979 24.1398C26.8285 24.8092 25.7414 24.8092 25.072 24.1398L16 15.0678L6.92804 24.1344C6.25862 24.8039 5.17148 24.8039 4.50206 24.1344C3.83265 23.465 3.83265 22.3779 4.50206 21.7085L14.7843 11.4262L14.7897 11.4315Z" fill="white"/>
   </svg>

</div>
<div className='collapse-text'>

<p>  Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas<br/>
 à nous contacter si vous avez la moindre question.  </p>

</div>


<div className="collapse-item">

   <h3>Sécurité</h3>
   <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
   <path d="M14.7897 11.4315C15.4591 10.7621 16.5462 10.7621 17.2157 11.4315L27.4979 21.7138C28.1674 22.3832 28.1674 23.4704 27.4979 24.1398C26.8285 24.8092 25.7414 24.8092 25.072 24.1398L16 15.0678L6.92804 24.1344C6.25862 24.8039 5.17148 24.8039 4.50206 24.1344C3.83265 23.465 3.83265 22.3779 4.50206 21.7085L14.7843 11.4262L14.7897 11.4315Z" fill="white"/>
   </svg>

</div>

<div className='collapse-text'>

    <p>  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement<br/>
     correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au<br/>
      locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons<br/>
       également des ateliers sur la sécurité domestique pour nos hôtes. </p>
</div>


</div>


)
export default Collapse