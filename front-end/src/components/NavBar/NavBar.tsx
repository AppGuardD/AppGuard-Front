import { Link } from "react-router-dom"
import logo from "../../assets/logo-appguard.svg"

export default function NavBar() {
  const handleLogIn = () => {}

  return (
    <nav className="flex items-center justify-between flex-wrap p-4 mb-4 border-b border-primary">
      <div className="flex">
        <img src={logo} alt="" className="h-10 pr-4" />
        <span className="font-semibold text-3xl pt-0.5">AppGuard</span>
      </div>
      <div>
        <Link to={"/"}>
          <button className="transition ease-in-out delay-150 py-1 px-2 mx-6 hover:ring-2 ring-accent rounded">
            INICIO
          </button>
        </Link>
        <button className="transition ease-in-out delay-150 py-1 px-2 mx-6 hover:ring-2 ring-accent rounded">
          DONACIONES
        </button>
        <button className="transition ease-in-out delay-150 py-1 px-2 mx-6 hover:ring-2 ring-accent rounded">
          MANGRULLOS
        </button>
        <button className="transition ease-in-out delay-150 py-1 px-2 mx-6 hover:ring-2 ring-accent rounded">
          QUIENES SOMOS
        </button>
        <button
          className="transition ease-in-out delay-150 py-1 px-2 mx-6 hover:ring-2 ring-accent rounded"
          onClick={handleLogIn}
        >
          INICIAR SESION
        </button>
      </div>
    </nav>
  )
}
