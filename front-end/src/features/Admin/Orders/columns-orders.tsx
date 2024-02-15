import type { OrdersTypes } from "@/redux/actions/userActions"
import type { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<OrdersTypes>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Nombre",
  },
  {
    accessorKey: "userId",
    header: "ID Usuario",
  },
  {
    accessorKey: "date",
    header: "Fecha",
  },
  {
    accessorKey: "status",
    header: "Estado",
  },
  {
    accessorKey: "totalValue",
    header: "Valor",
  },
  {
    accessorKey: "merchantId",
    header: "ID Merchant",
  },
]
