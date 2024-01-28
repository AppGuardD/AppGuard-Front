import type React from "react"
import Cards from "@/components/Cards/Cards"
import { Link } from "react-router-dom"

interface MangrullosComponents {
  name: string
  zone: number
  description: string
  image: string
}

const Mangrullos: React.FC<MangrullosComponents> = ({
  name,
  zone,
  description,
  image,
}) => {
  return (
    <div>
      <Link to={`/home`}>
        <button> Ir atras </button>
      </Link>
      <Cards name={name} zone={zone} description={description} image={image} />
    </div>
  )
}

export default Mangrullos
