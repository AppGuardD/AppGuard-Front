import type React from "react"
import { Link } from "react-router-dom"
import rightArrow from "../../assets/right-arrow.svg"
import { Button } from "@/components/ui/button"
import Imagen from "../../assets/Imagen.jpg"

const Landing: React.FC = () => {
  return (
    <div className="flex p-16 h-dvh">
      <div className="w-1/2 h-12 p-12">
        <p className="text-6xl">
          EL MEJOR WEBSITE PARA AFICIONADOS A LA NATURALEZA
        </p>
        <ul className="list-disc text-xl mt-10 ml-6">
          <li>Agendar eventos y actividades deportivas</li>
          <li>Localiza tus mangrullos mas cercanos</li>
          <li>Contactar guardavidas profesionales</li>
        </ul>
        <div className="grid place-items-center mt-14">
          <div className="flex mt-8">
            <Link to={`/home`}>
              <Button variant={"outline"} className="text-xl mr-4">
                Conocer mas
                <img className="pl-4" src={rightArrow} alt="" />
              </Button>
            </Link>
            <Link to={`/users`}>
              <Button variant={"outline"} className="text-xl mr-4">
                Iniciar sesion
                <img className="pl-4" src={rightArrow} alt="" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/2">
        <img
          className="aspect-auto rounded h-45 mr-50"
          src={Imagen}
          alt="Deportes"
        />
      </div>
    </div>
  )
}

export default Landing
