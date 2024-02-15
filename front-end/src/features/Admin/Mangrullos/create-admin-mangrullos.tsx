import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import type { SubmitHandler } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAppSelector } from "@/redux/hooks"
import { useAppDispatch } from "@/redux/hooks"
import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import UploadImageActivity from "@/features/Actividades/data-table/upload-image"
import { postAdminMangrullo } from "@/redux/action-creators/mangrullos/admin/admin-post-mangrullos"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  zone: z.string().min(2, {
    message: "Este campo es obligatorio.",
  }),
  description: z.string().min(2, {
    message: "Este campo es obligatorio.",
  }),
  dangerousness: z.enum(["1", "2", "3"]),
})

const CreateDialogMangrullos: React.FC = () => {
  const dispatch = useAppDispatch()
  const image = useAppSelector(state => state.actividadesReducer.image)
  const token = localStorage.getItem("TOKEN")
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      zone: "",
      description: "",
      dangerousness: "1",
    },
  })

  const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = data => {
    let mangrulloData = {
      zone: data.zone,
      description: data.description,
      dangerousness: data.dangerousness,
      image: image,
    }
    console.log(mangrulloData)
    dispatch(postAdminMangrullo({ token: token, form: mangrulloData }))
    setSubmitted(true)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded" variant={"outline"}>
          Crear mangrullos nuevo
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crear Mangrullo</DialogTitle>
        </DialogHeader>
        <UploadImageActivity />
        <Form {...form}>
          <form
            encType="multipart/form-data"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <div className="grid">
              <FormField
                control={form.control}
                name="zone"
                render={({ field }) => (
                  <FormItem className="h-14">
                    <div className="grid grid-cols-4 items-center gap-x-4 gap-y-1">
                      <FormLabel className="text-right">Nombre</FormLabel>
                      <FormControl>
                        <Input className="col-span-3" {...field} />
                      </FormControl>
                      <FormMessage className="col-start-2 col-end-4" />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dangerousness"
                render={({ field }) => (
                  <FormItem className="pt-4">
                    <div className="grid grid-cols-4 items-center gap-x-4 gap-y-1">
                      <FormLabel className="text-right">
                        Nivel Peligro
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="col-span-3">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="col-start-2 col-end-4" />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="pt-4">
                    <div className="grid grid-cols-4 items-center gap-x-4 gap-y-1">
                      <FormLabel className="text-right">Descripcion</FormLabel>
                      <FormControl>
                        <Textarea className="col-span-3" {...field} />
                      </FormControl>
                      <FormMessage className="col-start-2 col-end-4" />
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <div className="pt-4 flex justify-center">
              {image ? (
                <DialogClose>
                  <Button type="submit">Crear</Button>
                </DialogClose>
              ) : !submitted ? (
                <Button variant={"ghost"} disabled>
                  Sube una imagen primero
                </Button>
              ) : (
                <Button variant={"ghost"} disabled>
                  Mangrullo Creado
                  <CheckCircle2 className="size-5 ml-2" />
                </Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateDialogMangrullos
