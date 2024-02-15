import type { MangrulloAdmin } from "@/redux/actions/mangrullosActions"
import type { ColumnDef } from "@tanstack/react-table"
import EditDialogMangrullos from "./edit-dialog-mangrullos"

export const columns: ColumnDef<MangrulloAdmin>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "zone",
    header: "Nombre",
  },
  {
    accessorKey: "description",
    header: "Descripcion",
  },
  {
    accessorKey: "state",
    header: "Estado",
  },
  {
    accessorKey: "dangerousness",
    header: "Nivel Peligro",
  },
  {
    id: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      const data = row.original
      return <EditDialogMangrullos {...data} />
    },
  },
]
