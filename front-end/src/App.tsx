import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Donations from "./views/Donations/Donations"
import Landing from "./views/Landing/Landing"
import About from "./views/About/About"
import Home from "./views/Home/Home"
import Detail from "./views/Detail/Detail"
import Mangrullos from "./views/Mangrullos/Mangrullos"
import NavBar from "./features/Navigation/NavBar"
import Login from "./views/Login/Login"
import Admin from "./views/Admin/Admin"
import Cart from "./views/Cart/Cart"

const App = () => {
  return (
    <Router>
      {<NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/mangrullos"
          element={
            <Mangrullos
              name="La preciada"
              zone={1}
              description="Un puesto genial"
              image="asa.jpg"
            />
          }
        />
        <Route path="mangrullos/detail/:id" element={<Detail />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
