import { useEffect } from "react"
import { columns } from "./data-table/columns"
import { DataTable } from "./data-table/data-table"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import CreateDialog from "./data-table/create-dialog"
import type { ActividadesTypes } from "@/redux/actions/actividadesActions"
import { cleanActividades } from "@/redux/action-creators/actividades/cleanActividades"
import { getAdminActividades } from "@/redux/action-creators/actividades/admin/admin-get-actividades"

const AdminActividades: React.FC = () => {
  const token = useAppSelector(state => state.userReducer.token)
  const adminTable: ActividadesTypes[] = useAppSelector(
    state => state.actividadesReducer.adminTable,
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    let mounted = true
    const fetchData = async () => {
      await dispatch(getAdminActividades({ token: token }))
      if (!mounted) {
        dispatch(cleanActividades())
      }
    }
    fetchData()
    return () => {
      mounted = false
    }
  }, [dispatch, token])

  return (
    <div className="p-4 m-8 rounded border border-primary">
      <div className="flex justify-between">
        <p className="text-3xl align-baseline">Actividades</p>
        <CreateDialog />
      </div>
      <DataTable columns={columns} data={adminTable} />
    </div>
  )
}

export default AdminActividades
