import { Button } from "@/components/ui/button"
import deleteIcon from "../../../assets/delete-trash.svg"
import { useAppDispatch } from "@/redux/hooks"
import EditDialog from "./edit-dialog"
import type { Mangrullo } from "@/redux/actions/mangrullosActions"
import { disableMangrullos } from "@/redux/action-creators/mangrullos/disableMangrullos"

const ActionsTableMangrullos: React.FC<Mangrullo> = data => {
  const dispatch = useAppDispatch()

  const handleDisable = (id: number) => {
    dispatch(disableMangrullos(id))
  }

  return (
    <div className="flex max-w-16">
      <Button
        onClick={() => handleDisable(data.id)}
        className="rounded px-6 mr-4"
        variant={"outline"}
      >
        <p>Eliminar</p>
        <img className="pl-2" alt="" src={deleteIcon} />
      </Button>
      <EditDialog {...data} />
    </div>
  )
}

export default ActionsTableMangrullos
