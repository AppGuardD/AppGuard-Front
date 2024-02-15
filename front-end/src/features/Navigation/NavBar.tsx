import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo-appguard.svg"
import cartIcon from "../../assets/shopping-cart.svg"
import { jwtDecode } from "jwt-decode"
import { Badge } from "@/components/ui/badge"
import { User } from "lucide-react"

interface JwtPayload {
  email: string
  userName: string
  rol: string
}

const NavBar: React.FC = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("TOKEN")
  const [user, setUser] = useState<JwtPayload | null>(
    token ? jwtDecode(token) : null,
  )

  useEffect(() => {
    if (token) {
      const decodedToken: JwtPayload = jwtDecode(token)
      setUser(decodedToken)
    } else {
      setUser(null)
    }
  }, [token])


  const handleEmergencyCall = () => {
    window.location.href = "https://www.argentina.gob.ar/tema/emergencias";
  };


  return (
    <nav className="flex items-center justify-between flex-wrap p-4 mb-4 border-b">
      <div className="flex">
        <img src={logo} alt="" className="h-10 pr-4" />
        <span className="font-semibold text-3xl pt-0.5">AppGuard</span>
        {user && (
          <Badge
            className="text-md my-auto ml-4"
            onClick={() => navigate("/profile")}
          >
            {user.userName}
            <User className="ml-2" />
          </Badge>
        )}
        <button
          onClick={handleEmergencyCall}
          className="transition ease-in-out delay-150 py-1 px-2 mx-6 hover:ring-2 ring-accent rounded"
        >
          EMERGENCIAS
        </button>
      </div>
      <div>
        <button
          onClick={() => navigate("/")}
          className="transition ease-in-out delay-150 py-1 px-2 mx-6 hover:ring-2 ring-accent rounded"
        >
          INICIO
        </button>
        <button
          onClick={() => navigate("/home")}
          className="transition ease-in-out delay-150 py-1 px-2 mx-6 hover:ring-2 ring-accent rounded"
        >
          SERVICIOS
        </button>
        <button
          onClick={() => navigate("/donations")}
          className="transition ease-in-out delay-150 py-1 px-2 mx-6 hover:ring-2 ring-accent rounded"
        >
          DONACIONES
        </button>
        <button
          onClick={() => navigate("/about")}
          className="transition ease-in-out delay-150 py-1 px-2 mx-6 hover:ring-2 ring-accent rounded"
        >
          QUIENES SOMOS
        </button>
        {!user && (
          <button
            onClick={() => navigate("/users")}
            className="transition ease-in-out delay-150 py-1 px-2 mx-6 hover:ring-2 ring-accent rounded"
          >
            INICIAR SESION
          </button>
        )}
        {user?.rol === "Admin" && (
          <button
            onClick={() => navigate("/admin")}
            className="transition ease-in-out delay-150 py-1 px-2 mx-6 hover:ring-2 ring-accent rounded"
          >
            ADMIN
          </button>
        )}
        <button
          onClick={() => navigate("/cart")}
          className="align-middle transition ease-in-out delay-150 py-1 px-2 mx-6 hover:ring-2 ring-accent rounded"
        >
          <img src={cartIcon} alt="Icono de carro de compras" />
        </button>
      </div>
    </nav>
  )
}

export default NavBar
