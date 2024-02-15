import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Donations from "./views/Donations/Donations"
import Landing from "./views/Landing/Landing"
import About from "./views/About/About"
import Home from "./views/Home/Home"
import DetailMangrullo from "./views/Detail/DetailMangrullo"
import Mangrullos from "./views/Mangrullos/Mangrullos"
import NavBar from "./features/Navigation/NavBar"
import Footer from "./features/Navigation/Footer"
import Admin from "./views/Admin/Admin"
import Actividades from "./views/Actividades/Actividades"
import DetailActividades from "./views/Detail/DetailActividades"
import { Profile } from "./views/Profile/Profile"
import UsersView from "./views/Users/user"
import { Review } from "./views/Review/Review"
import Cart from "./views/Cart/Cart"

const App = () => {
  return (
    <Router>
      {<NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<UsersView />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/mangrullos" element={<Mangrullos />} />
        <Route path="/mangrullos/detail/:id" element={<DetailMangrullo />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/actividades/detail/:id" element={<DetailActividades />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/review/:id" element={<Review />} />
      </Routes>
      {<Footer />}
    </Router>
  )
}

export default App
