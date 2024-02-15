import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from "@/components/ui/button"
import type { AdminUserTypes } from "@/redux/actions/userActions"
import { MoreHorizontal } from "lucide-react"
import { useAppDispatch } from "@/redux/hooks"
import { disableUserAdmin } from "@/redux/action-creators/user/admin/admin-disable-user"
import { rolUserAdmin } from "@/redux/action-creators/user/admin/admin-rol-user"

const ActionsUsers: React.FC<AdminUserTypes> = data => {
  const token = localStorage.getItem("TOKEN")

  const userId = data.id.toString()
  const dispatch = useAppDispatch()

  const handleRol = () => {
    dispatch(rolUserAdmin({ token: token, userId: userId }))
  }

  const handleState = () => {
    dispatch(disableUserAdmin({ token: token, userId: userId }))
  }

  return (
    <Popover>
      <PopoverTrigger>
        <MoreHorizontal />
      </PopoverTrigger>
      <PopoverContent className="w-max">
        {data.rol === "Cliente" ? (
          <Button onClick={handleRol} variant={"default"} className="mr-4">
            Cambiar Rol a Admin
          </Button>
        ) : (
          <Button onClick={handleRol} variant={"secondary"} className="mr-4">
            Cambiar Rol a Cliente
          </Button>
        )}
        {data.state === "Activo" ? (
          <Button
            onClick={handleState}
            className="text-sky-50"
            variant={"destructive"}
          >
            Desactivar
          </Button>
        ) : (
          <Button onClick={handleState} variant={"secondary"}>
            Activar
          </Button>
        )}
      </PopoverContent>
    </Popover>
  )
}

export default ActionsUsers
