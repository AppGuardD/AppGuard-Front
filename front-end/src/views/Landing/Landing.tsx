import type React from "react"
import { Link } from "react-router-dom"
import guardavidasImg from "../../assets/guardavidas-landing.jpeg"
import rightArrow from "../../assets/right-arrow.svg"

const Landing: React.FC = () => {
  return (
    <div className="flex p-16">
      <div className="w-1/2 h-12 p-16">
        <p className="text-5xl">
          El mejor website para guardavidas y aficionados a la naturaleza.
        </p>
        <ul className="list-disc text-xl mt-8">
          <li>Contactar guardavidas profesionales</li>
          <li>Agendar eventos y actividades deportivas</li>
          <li>Localiza tus mangrullos mas cercanos</li>
        </ul>
        <div className="grid place-items-center mt-8">
          <Link to={`/home`}>
            <button className="flex text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-transparent hover:bg-accent font-semibold py-2 px-4 border rounded">
              Conocer mas
              <img className="pl-4" src={rightArrow} alt="" />
            </button>
          </Link>
        </div>
      </div>
      <div className="grid place-items-center w-1/2">
        <img
          className="shadow-lg h-3/4 border-primary border-solid border-2 rounded"
          src={guardavidasImg}
          alt="Guardavidas salta al agua"
        />
      </div>
    </div>
  )
}

export default Landing
