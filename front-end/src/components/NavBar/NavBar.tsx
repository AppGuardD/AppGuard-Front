import "./NavBar.module.css"

export default function NavBar() {
  const handleLogIn = () => {}

  return (
    <div className="nav">
      <div className="logo">
        <span>Guardavidas</span>
      </div>

      <div className="searchBar"></div>

      <div className="navButtons">
        <button className="button">DONACIONES </button>

        <button className="button">MANGRULLOS</button>

        <button className="button">QUIENES SOMOS</button>
        
        <div>
          <button className="button" onClick={handleLogIn}>
            INICIAR SESION
          </button>
        </div>
      </div>
    </div>
  )
}
