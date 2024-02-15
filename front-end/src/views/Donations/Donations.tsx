import type React from "react"
import Donacion from "../../assets/Donacion-.jpg"

const Donations: React.FC = () => {
  return (
    <div className="flex p-16 h-dvh">
      <div className="flex flex-col items-center w-1/2">
        <img
          className="aspect-auto rounded h-45 mr-8 md:mr-12 lg:mr-16"
          src={Donacion}
          alt="Deportes"
        />
      </div>
      <div className="w-1/2 h-12 p-12">
        <p className="text-5xl mb-4 md:mb-6 lg:mb-8">
          TU PARTICIPACION ES IMPORTANTE
        </p>
        <div className="mt-4 md:mt-6 lg:mt-8 text-justify">
          <p className="text-2xl">
            Desde AppGuard, valoramos enormemente la valiosa contribución de
            nuestros destacados guardavidas, cuya labor es preservar nuestra
            seguridad para que podamos disfrutar plenamente de todas las
            actividades y playas que ofrecemos. Es por eso que tomamos la
            importante decisión de destinar un porcentaje de las operaciones
            realizadas cuando participan de una actividad publicada en nuestro
            sitio con el fin de destinarlos directamente a este valioso grupo y
            apoyarlos. ¡Tu participación marca la diferencia!. ¡Juntos hacemos
            posible un entorno más seguro y placentero para todos!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Donations
