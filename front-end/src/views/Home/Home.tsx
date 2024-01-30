import SeccionHomeActividades from "@/features/Actividades/SeccionHomeActividades"
import Advices from "@/features/Advices/Advices"
import SeccionHomeMangrullos from "@/features/Mangrullos/SeccionHomeMangrullos"
import type React from "react"

const Home: React.FC = () => {
  return (
    <div>
      <div className="flex justify-start ml-36 mt-12">
        <SeccionHomeMangrullos />
      </div>
      <div className="flex justify-end mr-36 mt-12">
        <SeccionHomeActividades />
      </div>
      <hr className="mt-12 border-primary" />
      <p className="text-4xl text-center p-8">Consejos</p>
      <div className="flex justify-center">
        <Advices />
      </div>
    </div>
  )
}

export default Home
