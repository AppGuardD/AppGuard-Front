import type { MangrulloAdmin } from "@/redux/actions/mangrullosActions"
import { DataTable } from "@/features/Actividades/data-table/data-table"
import { getAdminMangrullos } from "@/redux/action-creators/mangrullos/admin/admin-get-mangrullos"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"
import { columns } from "./columns-mangrullos"
import PagesMangTable from "./pagination-admin-mangrullos"
import CreateDialogMangrullos from "./create-admin-mangrullos"

const AdminMangrullos: React.FC = () => {
  const dispatch = useAppDispatch()
  const token = localStorage.getItem("TOKEN")
  const mangrullosTable: MangrulloAdmin[] = useAppSelector(
    state => state.mangrullosReducer.mangrullosTable,
  )

  useEffect(() => {
    dispatch(getAdminMangrullos({ token: token }))
  }, [dispatch, token])

  return (
    <div className="p-4 m-8 rounded border border-primary">
      <div className="flex justify-between pb-4">
        <p className="basis-2/3 text-3xl align-baseline">Mangrullos</p>
        <PagesMangTable />
        <CreateDialogMangrullos />
      </div>
      <DataTable columns={columns} data={mangrullosTable} />
    </div>
  )
}

export default AdminMangrullos
