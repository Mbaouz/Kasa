
import Header from '../../components/Header'
import Footer from '../../components/Footer';

const Error = () => {
    return (
        <div>
            <Header/>

            <div style={{
             fontSize : 288,
             color : "rgba(255, 96, 96, 1)",
             wheight : 700 ,
             fontFamily : "Montserrat",
             textAlign : "center",
             

            }}>404</div>
            <p style={{
             textAlign : "center",
             fontSize : 36,
             wheight : 500,
             fontFamily : " Montserrat",
             color : " rgba(255, 96, 96, 1)",
             



            }}> Oups! La page que vous demandez n'existe pas. </p>
            <a href=" http://localhost:3000/ " style = {{
            color : 'black',
            fontSize : 18 ,
            wheight : 500 ,
            fontFamily : "Montserrat",
            display : "flex",
            justifyContent : "center",
            marginTop : 150 ,


            }}> Retourner sur la page d’accueil </a>



            <Footer/>

        </div>
    );
};

export default Error;