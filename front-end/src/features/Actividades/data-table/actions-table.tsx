import type { DetailActTypes } from "@/redux/actions/actividadesActions"
import EditDialog from "./edit-dialog"

const ActionsTableActividades: React.FC<DetailActTypes> = data => {
  return (
    <div className="flex max-w-16">
      <EditDialog {...data} />
    </div>
  )
}

export default ActionsTableActividades
