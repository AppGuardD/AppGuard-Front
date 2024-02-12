import type React from "react"
import CardsMangrullos from "@/features/Mangrullos/CardsMangrullos"
import { useNavigate } from "react-router-dom"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import { getMangrullos } from "@/redux/action-creators/mangrullos/getMangrullos"
import { cleanMangrullos } from "@/redux/action-creators/mangrullos/cleanMangrullos"
import type {Mangrullo} from "@/redux/actions/mangrullosActions"
import { Button } from "@/components/ui/button"

const Mangrullos: React.FC = () => {
  const mangrullos: Mangrullo[] = useAppSelector(
    state => state.mangrullosReducer.mangrullos,
  )
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    let mounted = true
    const fetchData = async () => {
      await dispatch(getMangrullos())
      if (!mounted) {
        dispatch(cleanMangrullos())
      }
    }
    fetchData()
    return () => {
      mounted = false
    }
  }, [dispatch])
  return (
    <div>
      <div className="flex justify-between px-8 ">
        <p className="text-3xl align-baseline">Todos los mangrullos</p>
        <Button
          onClick={() => navigate("/home")}
          className="rounded mb-4 border-primary"
          variant={"outline"}
        >
          Ir Atras
        </Button>
      </div>
      <CardsMangrullos mangrullos={mangrullos} />
    </div>
  )
}

export default Mangrullos
