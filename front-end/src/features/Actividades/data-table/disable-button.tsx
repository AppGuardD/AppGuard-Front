import { Button } from "@/components/ui/button"
import { DialogClose } from "@/components/ui/dialog"
import { disableActividades } from "@/redux/action-creators/actividades/admin/disable-actividades"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

interface DisableProps {
  id?: number
}

const DisableButtonActividades: React.FC<DisableProps> = props => {
  const dispatch = useAppDispatch()
  const token = useAppSelector(state => state.userReducer.token)
  const id = props.id

  const handleDisable = () => {
    dispatch(disableActividades({ id: id, token: token }))
  }

  return (
    <>
      <DialogClose asChild>
        <Button
          onClick={handleDisable}
          className="text-sky-100 mr-auto"
          variant={"destructive"}
          type="submit"
        >
          Desactivar
        </Button>
      </DialogClose>
      <DialogClose asChild>
        <Button type="submit">Guardar</Button>
      </DialogClose>
    </>
  )
}

export default DisableButtonActividades
