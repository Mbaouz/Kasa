

import Card from "../../Components/Card/Card";
import backImage from '../../assets/background.jpg'
import './banner.scss'

const Home = () => {
    return (
        <div>

        <div className='banner'>

            <img src={backImage} alt="background"></img>
            <h1>Chez vous, partout et ailleurs</h1>

        </div>

            <Card />
        </div>
    );
};

export default Home;