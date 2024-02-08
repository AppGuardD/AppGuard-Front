import CarouselMangrullos from "./CarouselMangrullos"
import rightArrow from "../../assets/right-arrow.svg"
import { useNavigate } from "react-router-dom"

const SeccionHomeMangrullos: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="flex w-full">
      <CarouselMangrullos />
      <div className="grid place-items-center w-full text-justify mx-16 mr-20">
        <p className="text-4xl mb-4">Mangrullos</p>
        <p className="text-lg mb-4">
          Bienvenido a la experiencia definitiva en playas, descubre las mejores
          y más seguras costas para disfrutar del sol y el mar. Nos enorgullece
          ofrecerte una selección exclusiva de playas donde podrás relajarte con
          total tranquilidad, sabiendo que estás resguardado por nuestros
          dedicados y expertos guardavidas. Cada rincón que recomendamos ha sido
          minuciosamente evaluado para garantizar un entorno acuático seguro y
          protegido. Nuestros guardavidas, expertos en su campo, están
          comprometidos con tu seguridad y bienestar, brindándote la confianza
          para sumergirte en el disfrute de cada momento.
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
    </div>
  )
}

export default SeccionHomeMangrullos
