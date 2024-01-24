import "./App.css"
import DonationsMenu from "./views/Donations/Donations";
import Landing from "./views/Landing/Landing"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./views/About/About";
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail'
import Detail from './views/Detail/Detail' 
import NavBar from './components/NavBar/NavBar'
import Mangrullos from './views/Mangrullos/Mangrullos';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return(
    <div className="App">
      <Router>
        {
          (<NavBar/ >)
        }
        <Routes>
          <Route path='/' element={<Landing presentacion="Bienvenido" />} />
          <Route path='/donations' element={<DonationsMenu descr="Para donar"  />} />
          <Route path="/" element={<Home description="Estas en el Home" />} />
          <Route path="/mangrullos" element={<Mangrullos name='La preciada' zone={1} description="Un puesto genial" image='asa.jpg'/>} />
          <Route path="mangrullos/detail" element={<Detail zone='2' dangerousness={1-3} state='activado' image='asd.jpg' qualification={2} activatedMangrullo={false}/>} /> Esto renderiza adentro de la Card Mangrullo
          <Route path="/about" element={<About description="Aca va la descripción de quienes somos" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
