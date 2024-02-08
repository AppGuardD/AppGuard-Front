import rightArrow from "../../assets/right-arrow.svg"
import { useNavigate } from "react-router-dom"
import CarouselActividades from "./CarouselActividades"

const SeccionHomeActividades: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="flex w-full">
      <div className="grid place-items-center w-full text-justify mx-16 mr-20">
        <p className="text-4xl mb-4">Actividades</p>
        <p className="text-lg mb-4">
          Embárcate en una jornada inolvidable con nuestras actividades en la
          playa, un oasis de diversión y descanso frente a las mejores playas.
          En nuestro exclusivo repertorio, encuentras una gama de opciones que
          se adaptan a todos los gustos y preferencias. Déjate llevar por la
          emoción de los deportes acuáticos, sumérgete en la riqueza cultural
          que ofrecemos en la orilla o encuentra la armonía en actividades
          sanitarias frente al océano. La diversidad de nuestras propuestas
          garantiza experiencias únicas para cada individuo, desde aquellos que
          buscan adrenalina hasta quienes anhelan momentos de tranquilidad.
        </p>
        <div>
          <button
            onClick={() => navigate("/actividades")}
            className="my-6 flex text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-transparent hover:bg-accent font-semibold py-2 px-4 border rounded"
          >
            Ver mas!
            <img className="pl-4" src={rightArrow} alt="" />
          </button>
        </div>
      </div>
      <CarouselActividades />
    </div>
  )
}

export default SeccionHomeActividades
