import SeccionHomeActividades from "@/features/Actividades/SeccionHomeActividades"
import Advices from "@/features/Advices/Advices"
import SeccionHomeMangrullos from "@/features/Mangrullos/SeccionHomeMangrullos"
import { cleanActividades } from "@/redux/action-creators/actividades/cleanActividades"
import { getActividades } from "@/redux/action-creators/actividades/getActividades"
import { cleanMangrullos } from "@/redux/action-creators/mangrullos/cleanMangrullos"
import { getMangrullos } from "@/redux/action-creators/mangrullos/getMangrullos"
import { useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"

const Home: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    let mounted = true
    const fetchData = async () => {
      try {
        await dispatch(getMangrullos())
      } finally {
        if (!mounted) {
          dispatch(cleanMangrullos())
        }
      }
      try {
        await dispatch(getActividades())
      } finally {
        if (!mounted) {
          dispatch(cleanActividades())
        }
      } 
    }
    fetchData()
    return () => {
      mounted = false
    }
  }, [dispatch])

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
