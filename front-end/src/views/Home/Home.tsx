import type React from "react"
import rightArrow from "../../assets/right-arrow.svg"
import { Link } from "react-router-dom"
import CarouselHome from "@/components/CarouselHome/CarouselHome"
import Advices from "@/components/Advices/Advices"

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl mb-4">Mangrullos</p>
      <CarouselHome />
      <Link to={`/mangrullos`}>
        <button className="my-6 flex text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-transparent hover:bg-accent font-semibold py-2 px-4 border rounded">
          Ver mas!
          <img className="pl-4" src={rightArrow} alt="" />
        </button>
      </Link>
      <p className="text-4xl my-4">Consejos</p>
      <Advices />
    </div>
  )
}

export default Home
