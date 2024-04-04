import {BrowserRouter,Routes,Route} from 'react-router-dom';



import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import Title from './components/Title';
import Card from './components/Card';
import Collapse from './components/Collapse'

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;


