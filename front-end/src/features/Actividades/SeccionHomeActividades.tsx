import rightArrow from "../../assets/right-arrow.svg"
import { useNavigate } from "react-router-dom"
import CarouselActividades from "./CarouselActividades"

const SeccionHomeActividades: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="flex w-full">
      <div className="grid place-items-center w-full text-justify mx-16 mr-20">
        <p className="text-4xl mb-4">Actividades</p>
        <p className="text-md">
          Donec quis libero lorem. Cras sed ultrices diam. Vestibulum ultrices
          vel mauris pellentesque gravida. Praesent porta vulputate faucibus.
          Sed vel odio at sapien congue fermentum. Integer quam tortor, commodo
          vel viverra nec, pretium ac tellus. Cras vestibulum dolor at dolor
          ultrices dignissim. Maecenas nec scelerisque mi. Ut id eros eu risus
          congue posuere a quis eros. Integer tortor orci, dictum volutpat leo
          vel, tincidunt interdum dolor. Sed vehicula purus maximus, malesuada
          ex ut, condimentum augue. Ut imperdiet leo at augue porttitor varius.
          Vestibulum facilisis leo eget ex congue pulvinar.
        </p>
        <div>
          <button
            onClick={() => navigate("/mangrullos")}
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
