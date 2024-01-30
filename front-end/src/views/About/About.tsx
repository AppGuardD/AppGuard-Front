import type React from "react" // CONSULTAR ESTO.
import { Link } from "react-router-dom"

const About: React.FC = () => {
  return (
    <div>
      <p></p>
      <Link to={`/home`}>
        <button> Ir atras </button>
      </Link>
    </div>
  )
}

export default About
