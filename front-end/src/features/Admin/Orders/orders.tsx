import { DataTable } from "@/features/Actividades/data-table/data-table"
import { columns } from "./columns-orders"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"
import { getOrdersAdmin } from "@/redux/action-creators/user/admin/admin-get-orders"

const AdminOrders: React.FC = () => {
  const dispatch = useAppDispatch()
  const token = localStorage.getItem("TOKEN")
  const allOrders = useAppSelector(state => state.userReducer.allOrders)

  useEffect(() => {
    dispatch(getOrdersAdmin({ token: token }))
  }, [dispatch, token])

  return (
    <div className="p-4 m-8 rounded border border-primary">
      <div className="flex justify-between">
        <p className="basis-2/3 text-3xl align-baseline">Usuarios</p>
      </div>
      <DataTable columns={columns} data={allOrders} />
    </div>
  )
}

export default AdminOrders
