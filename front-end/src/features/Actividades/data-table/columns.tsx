import type { ColumnDef } from "@tanstack/react-table"
import type { DetailActTypes } from "@/redux/actions/actividadesActions"
import ActionsTableActividades from "./actions-table"

export const columns: ColumnDef<DetailActTypes>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "activityName",
    header: "Nombre",
  },
  {
    accessorKey: "description",
    header: "Descripcion",
  },
  {
    accessorKey: "qualification",
    header: "Calificacion",
  },
  {
    accessorKey: "price",
    header: "Precio",
  },
  {
    accessorKey: "state",
    header: "Valor",
  },
  {
    accessorKey: "active",
    header: "Estado",
  },
  {
    accessorKey: "type",
    header: "Tipo",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original
      return <ActionsTableActividades {...data} />
    },
  },
]
