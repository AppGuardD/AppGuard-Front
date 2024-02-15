import type { AdminUserTypes } from "@/redux/actions/userActions"
import type { ColumnDef } from "@tanstack/react-table"
import ActionsUsers from "./actions-table-users"

export const columns: ColumnDef<AdminUserTypes>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "rol",
    header: "Rol",
  },
  {
    accessorKey: "email",
    header: "Correo",
  },
  {
    accessorKey: "userName",
    header: "Nombre de usuario",
  },
  {
    accessorKey: "typeIdentification",
    header: "Documento",
  },
  {
    accessorKey: "numberIdentification",
    header: "# Documento",
  },
  {
    accessorKey: "state",
    header: "Estado",
  },
  {
    id: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      const data = row.original
      return (
        <>
          <ActionsUsers {...data} />
        </>
      )
    },
  },
]
