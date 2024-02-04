import type React from "react"
import { Link } from "react-router-dom"
import guardavidasImg from "../../assets/guardavidas-landing.jpeg"
import rightArrow from "../../assets/right-arrow.svg"
import { Button } from "@/components/ui/button"

const Landing: React.FC = () => {
  return (
    <div className="flex p-16 h-dvh">
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
            <Button variant={"outline"} className="text-xl">
              Conocer mas
              <img className="pl-4" src={rightArrow} alt="" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/2">
        <img
          className="aspect-auto rounded h-96"
          src={guardavidasImg}
          alt="Guardavidas salta al agua"
        />
      </div>
    </div>
  )
}

export default Landing
