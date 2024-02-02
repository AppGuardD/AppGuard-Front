import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import editIcon from "../../../assets/edit-pencil.svg"
import type { Mangrullo } from "@/redux/actions/mangrullosActions"

const EditDialog: React.FC<Mangrullo> = data => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded" variant="outline">
          Editar
          <img className="pl-2" alt="" src={editIcon} />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Zona
            </Label>
            <Input id="name" defaultValue={data.zone} className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Peligrosidad
            </Label>
            <Input
              id="username"
              defaultValue={data.dangerousness}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Calificacion
            </Label>
            <Input
              id="username"
              defaultValue={data.qualification}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Guardar Cambios</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default EditDialog
