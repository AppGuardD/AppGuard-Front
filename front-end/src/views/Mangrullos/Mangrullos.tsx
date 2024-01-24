import type React from "react"
import { Link } from "react-router-dom"

interface mangrullosComponents {
  name: string
  zone: number
  description: string
  image: string
}

const Mangrullos: React.FC<mangrullosComponents> = ({
  name,
  zone,
  description,
  image,
}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{zone}</p>
      <p>{description}</p>
      <p>{image}</p>
      <Link to={`/mangrullos/detail`}>
        <button>
          {" "}
          <p>Conocer mas...</p>
        </button>
      </Link>
    </div>
  )
}

export default Mangrullos
