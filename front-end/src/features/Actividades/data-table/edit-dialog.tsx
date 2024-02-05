import type { DetailType } from "@/redux/actions/actividadesActions"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MoreHorizontalIcon } from "lucide-react"
import TypeSelectActividades from "./type-select"
import ValueSelectActividades from "./value-select"
import { Textarea } from "@/components/ui/textarea"
import DisableButtonActividades from "./disable-button"

const EditDialog: React.FC<DetailType> = data => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded" variant="ghost">
          <MoreHorizontalIcon className="size-5" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar actividad</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Nombre" className="text-right">
              Nombre
            </Label>
            <Input
              id="name"
              defaultValue={data.activityName}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Tipo" className="text-right">
              Tipo
            </Label>
            <TypeSelectActividades type={data.type} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Valor" className="text-right">
              Valor
            </Label>
            <ValueSelectActividades value={data.state} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Calificacion" className="text-right">
              Calificacion
            </Label>
            <Input
              id="username"
              defaultValue={data.qualification}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Precio" className="text-right">
              Precio
            </Label>
            <Input
              id="username"
              defaultValue={data.price}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Imagen
            </Label>
            <Input type="file" id="image" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Descripcion" className="text-right">
              Descripcion
            </Label>
            <Textarea
              id="description"
              defaultValue={data.description}
              className="col-span-3"
            />
          </div>
        </div>

        <DialogFooter>
          <DisableButtonActividades id={data.id} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default EditDialog
