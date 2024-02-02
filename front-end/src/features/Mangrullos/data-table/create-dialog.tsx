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
import addIcon from "../../../assets/add-circle.svg"
import { Textarea } from "@/components/ui/textarea"

const CreateDialog: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="rounded mr-8 mb-4 border-primary"
          variant={"outline"}
        >
          Crear mangrullos
          <img className="ml-2" alt="" src={addIcon} />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crear Mangrullo</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Zona
            </Label>
            <Input id="name" defaultValue="" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Peligrosidad
            </Label>
            <Input id="username" defaultValue="" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Calificacion
            </Label>
            <Input id="username" defaultValue="" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Imagen
            </Label>
            <Input id="username" defaultValue="" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Description" className="text-right">
              Descripcion
            </Label>
            <Textarea className="col-span-3 rounded"></Textarea>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Guardar Cambios</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateDialog
