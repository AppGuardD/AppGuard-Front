import { useEffect } from "react"
import { columns } from "./data-table/columns"
import { DataTable } from "./data-table/data-table"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import CreateDialog from "./data-table/create-dialog"
import type { DetailType } from "@/redux/actions/actividadesActions"
import { getActividades } from "@/redux/action-creators/actividades/getActividades"
import { cleanActividades } from "@/redux/action-creators/actividades/cleanActividades"

const AdminActividades: React.FC = () => {
  const actividades: DetailType[] = useAppSelector(
    state => state.actividadesReducer.actividades,
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    let mounted = true
    const fetchData = async () => {
      await dispatch(getActividades())
      if (!mounted) {
        dispatch(cleanActividades())
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
        <p className="text-3xl align-baseline">Actividades</p>
        <CreateDialog />
      </div>
      <DataTable columns={columns} data={actividades} />
    </div>
  )
}

export default AdminActividades
