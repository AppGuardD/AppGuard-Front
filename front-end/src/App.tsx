import "./App.css"
import DonationsMenu from "./views/Donations/Donations"
import Landing from "./views/Landing/Landing"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./views/About/About"
import Home from "./views/Home/Home"
import Detail from "./views/Detail/Detail"
import Mangrullos from "./views/Mangrullos/Mangrullos"
import NavBar from "./components/NavBar/NavBar"
import Events from "./views/Events/Events"
import Login from "./views/Login/Login"
import Admin from "./views/Admin/Admin"

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
        <Route
          path="mangrullos/detail"
          element={
            <Detail
              name="Nombre del Mangrullo"
              zone="Playa 1"
              dangerousness={3}
              state="Activado"
              image="ruta_de_la_imagen.jpg"
              qualification={4}
              activatedMangrullo={true}
              events={[
                {
                  activityName: "Nombre del Evento",
                  description: "Descripción del Evento",
                  qualification: 4,
                  price: 20,
                  state: "Pago",
                  Active: true,
                  type: "Deportivo",
                },
                {
                  activityName: "Nombre del Evento 2",
                  description: "Descripción del Evento 2",
                  qualification: 4,
                  price: 20,
                  state: "No pago",
                  Active: false,
                  type: "Deportivo",
                },
                {
                  activityName: "Nombre del Evento 3 ",
                  description: "Descripción del Evento 3",
                  qualification: 4,
                  price: 20,
                  state: "Pago",
                  Active: true,
                  type: "Deportivo",
                },                        
              ]}
              />
            }
        />
        <Route
          path="/about"
          element={
            <About description="Aca va la descripción de quienes somos" />
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/event"
          element={
            <Events
              events={[
                {
                  activityName: "Nombre del Evento",
                  description: "Descripción del Evento",
                  qualification: 4,
                  price: 20,
                  state: "Pago",
                  Active: true,
                  type: "Deportivo",
                },
              ]}
            />
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
