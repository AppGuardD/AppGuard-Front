import "./App.css"
import DonationsMenu from "./views/Donations/Donations";
import Landing from "./views/Landing/Landing"

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return <Router>
  <Routes>
    <Route path='/' element={<Landing presentacion="Bienvenido" />} />
    <Route path='/donations' element={<DonationsMenu descr="Para donar"  />} />
  </Routes>
  </Router>
}

export default App
