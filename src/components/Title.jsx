import backImage from '../assets/background.jpg'
import '../styles/title.scss'

const Title = () => {
    return (
        <div className='backImage'>

            <img src={backImage} alt="background"></img>
            <h1>Chez vous, partout et ailleurs</h1>

        </div>
    );
};

export default Title;