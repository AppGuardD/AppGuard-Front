import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
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
import type { Mangrullo } from "@/redux/actions/mangrullosActions"
import type { SubmitHandler } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAppSelector } from "@/redux/hooks"
import { MultiSelect } from "@/components/ui/multiselect"
import { useAppDispatch } from "@/redux/hooks"
import { postAdminActividades } from "@/redux/action-creators/actividades/admin/admin-post-actividades"
import UploadImageActivity from "./upload-image"
import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

const formSchema = z.object({
  activityName: z.string().min(2, {
    message: "Este campo es obligatorio.",
  }),
  description: z.string().min(2, {
    message: "Este campo es obligatorio.",
  }),
  price: z.string().min(2, {
    message: "Este campo es obligatorio.",
  }),
  mangrullos: z.array(z.record(z.string().trim())),
  state: z.enum(["Gratis", "Pago"]),
  type: z.enum(["Deportivo", "Sanitario", "Cultural"]),
})

const CreateDialog: React.FC = () => {
  const dispatch = useAppDispatch()
  const token = localStorage.getItem("TOKEN")
  const image = useAppSelector(state => state.actividadesReducer.image)
  const mangrullos: Mangrullo[] = useAppSelector(
    state => state.mangrullosReducer.mangrullos,
  )
  const selectOptions = mangrullos.map(mangrullo => ({
    value: mangrullo.id.toString(),
    label: mangrullo.zone,
  }))
  const [submitted, setSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      activityName: "",
      description: "",
      price: "0",
      mangrullos: [],
      state: "Gratis",
      type: "Deportivo",
    },
  })

  const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = data => {
    const activityData = {
      activityName: data.activityName,
      description: data.description,
      price: data.price,
      mangrullos: data.mangrullos.map(item => parseInt(item.value)),
      state: data.state,
      type: data.type,
      image: image,
    }

    console.log(activityData)

    dispatch(
      postAdminActividades({
        form: activityData,
        token: token,
      }),
    )

    setSubmitted(true)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="rounded mr-8 mb-4 border-primary"
          variant={"outline"}
        >
          Crear nueva actividad
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crear Actividad</DialogTitle>
        </DialogHeader>
        <UploadImageActivity />
        <Form {...form}>
          <form
            encType="multipart/form-data"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <div className="grid gap-4 pb-4">
              <FormField
                control={form.control}
                name="activityName"
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
                name="price"
                render={({ field }) => (
                  <FormItem className="h-14">
                    <div className="grid grid-cols-4 items-center gap-x-4 gap-y-1">
                      <FormLabel className="text-right">Precio</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          className="col-span-3"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="col-start-2 col-end-5" />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="h-14">
                    <div className="grid grid-cols-4 items-center gap-x-4 gap-y-1">
                      <FormLabel className="text-right">Tipo</FormLabel>
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
                          <SelectItem value="Deportivo">Deportivo</SelectItem>
                          <SelectItem value="Sanitario">Sanitario</SelectItem>
                          <SelectItem value="Cultural">Cultural</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="col-start-2 col-end-4" />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="h-14">
                    <div className="grid grid-cols-4 items-center gap-x-4 gap-y-1">
                      <FormLabel className="text-right">Modalidad</FormLabel>
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
                          <SelectItem value="Pago">Pago</SelectItem>
                          <SelectItem value="Gratis">Gratis</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="col-start-2 col-end-4" />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mangrullos"
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-4 items-center gap-x-4 gap-y-1">
                      <FormLabel className="text-right">Mangrullo</FormLabel>
                      <div className="col-span-3">
                        <MultiSelect
                          selected={field.value}
                          options={selectOptions}
                          {...field}
                        />
                      </div>
                      <FormMessage className="col-start-2 col-end-5" />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
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
            <DialogFooter>
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
                  Actividad Creada
                  <CheckCircle2 className="size-5 ml-2" />
                </Button>
              )}
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateDialog
