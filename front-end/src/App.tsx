import "./App.css"
import DonationsMenu from "./views/Donations/Donations"
import Landing from "./views/Landing/Landing"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./views/About/About"
import Home from "./views/Home/Home"
import Detail from "./views/Detail/Detail"
import Mangrullos from "./views/Mangrullos/Mangrullos"
import NavBar from "./components/NavBar/NavBar"
import Login from "./views/Login/Login"
import Admin from "./views/Admin/Admin"
import CreateMangrullo from "./views/Form/createMangrullosForm"

const App = () => {
  return (
    <Router>
      {<NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/donations"
          element={<DonationsMenu descr="Para donar" />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateMangrullo />} />
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
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
