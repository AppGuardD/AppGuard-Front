import type { DetailType } from "@/redux/actions/actividadesActions"
import EditDialog from "./edit-dialog"

const ActionsTableActividades: React.FC<DetailType> = data => {
  return (
    <div className="flex max-w-16">
      <EditDialog {...data} />
    </div>
  )
}

export default ActionsTableActividades
