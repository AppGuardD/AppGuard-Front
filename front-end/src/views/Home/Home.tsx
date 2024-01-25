import rightArrow from "../../assets/right-arrow.svg"

import type React from "react"
import { Link } from "react-router-dom"

interface homeComponents {
  description: string
}

const Home: React.FC<homeComponents> = ({ description }) => {
  return (
    <div>
      <p>{description}</p>
      <Link to={`/mangrullos`}>
        <button className="flex text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-transparent hover:bg-accent font-semibold py-2 px-4 border rounded">
          Ver mangrullos
          <img className="pl-4" src={rightArrow} alt="" />
        </button>
      </Link>
    </div>
  )
}

export default Home
