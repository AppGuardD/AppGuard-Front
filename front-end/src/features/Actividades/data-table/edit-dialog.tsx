import type { ActividadesTypes } from "@/redux/actions/actividadesActions"
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

const EditDialog: React.FC<ActividadesTypes> = data => {
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
            <ValueSelectActividades />
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
            <Label htmlFor="Imagen" className="text-right">
              Imagen
            </Label>
            <Input
              id="username"
              defaultValue={data.image}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Descripcion" className="text-right">
              Descripcion
            </Label>
            <Input
              id="username"
              defaultValue={data.description}
              className="col-span-3"
            />
          </div>
        </div>

        <DialogFooter>
          <div className="flex justify-between w-full">
            <Button
              className="text-sky-100"
              variant={"destructive"}
              type="submit"
            >
              Desactivar
            </Button>
            <Button type="submit">Guardar</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default EditDialog
