import type React from "react"
import CardsMangrullos from "@/features/Mangrullos/CardsMangrullos"
import { Link } from "react-router-dom"
import { useAppSelector,useAppDispatch } from "@/redux/hooks"
import { useEffect } from "react"
import { getMangrullos } from "@/redux/action-creators/mangrullos/getMangrullos"
import { cleanMangrullos } from "@/redux/action-creators/mangrullos/cleanMangrullos"
import type { Mangrullo } from "@/redux/actions/mangrullosActions"


const Mangrullos: React.FC= (  ) => {
  const mangrullos: Mangrullo[] = useAppSelector(
    state => state.mangrullosReducer.mangrullos,
  )
  const dispatch = useAppDispatch()

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
      <Link to={`/home`}>
        <button> Ir atras </button>
      </Link>
      <CardsMangrullos mangrullos={mangrullos}/>
    </div>
  ) 
}

export default Mangrullos
