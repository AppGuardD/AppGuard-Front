import type { Mangrullo } from "@/redux/actions/mangrullosActions"
import type { ColumnDef } from "@tanstack/react-table"
import ActionsTableMangrullos from "./actions-table"

export const columns: ColumnDef<Mangrullo>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "zone",
    header: "Zona",
  },
  {
    accessorKey: "dangerousness",
    header: "Peligrosidad",
  },
  {
    accessorKey: "qualification",
    header: "Calificacion",
  },
  {
    accessorKey: "state",
    header: "Estado",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original
      return <ActionsTableMangrullos {...data} />
    },
  },
]
