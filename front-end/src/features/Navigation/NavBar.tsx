import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo-appguard.svg"
import cartIcon from "../../assets/shopping-cart.svg"
import { jwtDecode } from "jwt-decode"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Siren, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface JwtPayload {
  email: string
  userName: string
  rol: string
  name: string
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
    window.location.href = "https://www.argentina.gob.ar/tema/emergencias"
  }

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
            {user.userName || user.name}
            <User className="ml-2" />
          </Badge>
        )}
        <Button
          className="ml-2 font-bold text-md"
          variant={"link"}
          onClick={handleEmergencyCall}
        >
          EMERGENCIAS
          <Siren className="size-5 ml-2" />
        </Button>
      </div>
      <div>
        <Button
          className="ml-2 font-bold text-md"
          variant={"link"}
          onClick={() => navigate("/")}
        >
          INICIO
        </Button>
        <Button
          className="ml-2 font-bold text-md"
          variant={"link"}
          onClick={() => navigate("/home")}
        >
          SERVICIOS
        </Button>
        <Button
          className="ml-2 font-bold text-md"
          variant={"link"}
          onClick={() => navigate("/donations")}
        >
          MISION
        </Button>
        <Button
          className="ml-2 font-bold text-md"
          variant={"link"}
          onClick={() => navigate("/about")}
        >
          QUIENES SOMOS
        </Button>

        {!user && (
          <Button
            className="ml-2 font-bold text-md"
            variant={"link"}
            onClick={() => navigate("/users")}
          >
            INICIAR SESION
          </Button>
        )}
        {user?.rol === "Admin" && (
          <Button
            className="ml-2 font-bold text-md"
            variant={"link"}
            onClick={() => navigate("/admin")}
          >
            ADMIN
          </Button>
        )}
        <Button
          className="ml-2 font-bold m-0 text-md"
          variant={"link"}
          onClick={() => navigate("/cart")}
        >
          CARRITO
          <ShoppingCart className="size-5 ml-2" />
        </Button>
      </div>
    </nav>
  )
}

export default NavBar
