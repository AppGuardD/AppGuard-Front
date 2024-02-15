import { DataTable } from "@/features/Actividades/data-table/data-table"
import { columns } from "./colums-users"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"
import { getAdminUsers } from "@/redux/action-creators/user/admin/admin-get-user"

const AdminUsers: React.FC = () => {
  const dispatch = useAppDispatch()
  const token = localStorage.getItem("TOKEN")
  const allUsers = useAppSelector(state => state.userReducer.allUsers)

  useEffect(() => {
    dispatch(getAdminUsers({ token: token }))
  }, [dispatch, token])

  return (
    <div className="p-4 m-8 rounded border border-primary">
      <div className="flex justify-between">
        <p className="basis-2/3 text-3xl align-baseline">Usuarios</p>
      </div>
      <DataTable columns={columns} data={allUsers} />
    </div>
  )
}

export default AdminUsers
