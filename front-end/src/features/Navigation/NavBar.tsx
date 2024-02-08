import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo-appguard.svg"
import cartIcon from "../../assets/shopping-cart.svg"

const NavBar: React.FC = () => {
  const navigate = useNavigate()

  return (
    <nav className="flex items-center justify-between flex-wrap p-4 mb-4 border-b border-primary">
      <div className="flex">
        <img src={logo} alt="" className="h-10 pr-4" />
        <span className="font-semibold text-3xl pt-0.5">AppGuard</span>
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
          ACTIVIDADES
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
        <button
          onClick={() => navigate("/users")}
          className="transition ease-in-out delay-150 py-1 px-2 mx-6 hover:ring-2 ring-accent rounded"
        >
          INICIAR SESION
        </button>
        <button
          onClick={() => navigate("/admin")}
          className="transition ease-in-out delay-150 py-1 px-2 mx-6 hover:ring-2 ring-accent rounded"
        >
          ADMIN
        </button>
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
