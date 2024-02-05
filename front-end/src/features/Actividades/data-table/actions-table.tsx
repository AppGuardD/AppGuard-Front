import type { ActividadesTypes } from "@/redux/actions/actividadesActions"
import EditDialog from "./edit-dialog"

const ActionsTableActividades: React.FC<ActividadesTypes> = data => {
  return (
    <div className="flex max-w-16">
      <EditDialog {...data} />
    </div>
  )
}

export default ActionsTableActividades
