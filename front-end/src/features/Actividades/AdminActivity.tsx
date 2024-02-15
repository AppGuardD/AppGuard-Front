import { columns } from "./data-table/columns"
import { DataTable } from "./data-table/data-table"
import { useAppSelector } from "@/redux/hooks"
import CreateDialog from "./data-table/create-dialog"
import PagesActTable from "./data-table/pagination-table"
import type { DetailActTypes } from "@/redux/actions/actividadesActions"

const AdminActividades: React.FC = () => {
  const adminTable: DetailActTypes[] = useAppSelector(
    state => state.actividadesReducer.adminTable,
  )
  return (
    <div className="p-4 m-8 rounded border border-primary">
      <div className="flex justify-between">
        <p className="basis-2/3 text-3xl align-baseline">Actividades</p>
        <PagesActTable />
        <CreateDialog />
      </div>
      <DataTable columns={columns} data={adminTable} />
    </div>
  )
}

export default AdminActividades
