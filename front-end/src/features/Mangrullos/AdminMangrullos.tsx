import addIcon from "../../assets/add-circle.svg"
import { useEffect } from "react"
import { columns } from "./TableMangrullo/columns"
import { DataTable } from "./TableMangrullo/data-table"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { getMangrullos } from "@/redux/action-creators/mangrullos/getMangrullos"
import { cleanMangrullos } from "@/redux/action-creators/mangrullos/cleanMangrullos"
import type { Mangrullo } from "@/redux/actions/mangrullosActions"
import { Button } from "@/components/ui/button"

const AdminMangrullos: React.FC = () => {
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
    <div className="p-4 m-8 rounded border border-primary">
      <div className="flex justify-between">
        <p className="text-3xl align-baseline">Mangrullos</p>
        <Button
          className="rounded mr-8 mb-4 border-primary"
          variant={"outline"}
        >
          Crear mangrullos
          <img className="ml-2" alt="" src={addIcon} />
        </Button>
      </div>
      <DataTable columns={columns} data={mangrullos} />
    </div>
  )
}

export default AdminMangrullos
