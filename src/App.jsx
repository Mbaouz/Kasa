import { BrowserRouter, Routes, Route } from 'react-router-dom';




import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import Fiche from './pages/Fiche/Fiche';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Error />} />
        <Route path='/fiche' element={<Fiche/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;


