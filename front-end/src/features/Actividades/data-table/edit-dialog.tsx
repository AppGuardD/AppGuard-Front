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
import UploadImageActivity from "./upload-image"
import { useEffect, useState } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"
import type { DetailActTypes } from "@/redux/actions/actividadesActions"
import { MoreHorizontalIcon } from "lucide-react"
import { putAdminActividades } from "@/redux/action-creators/actividades/admin/admin-put-actividades"
import { loadingImage } from "@/redux/action-creators/actividades/admin/image-loading"
import { disableActividades } from "@/redux/action-creators/actividades/admin/disable-actividades"
import { DialogClose } from "@radix-ui/react-dialog"

const formSchema = z.object({
  activityName: z.string().min(2, {
    message: "Este campo es obligatorio.",
  }),
  description: z.string().min(2, {
    message: "Este campo es obligatorio.",
  }),
  price: z.optional(z.number()),
  mangrullos: z.array(z.record(z.string().trim())),
  state: z.enum(["Gratis", "Pago"]),
  type: z.enum(["Deportivo", "Sanitario", "Cultural"]),
})

const EditDialog: React.FC<DetailActTypes> = (props: DetailActTypes) => {
  const dispatch = useAppDispatch()
  const image = useAppSelector(state => state.actividadesReducer.image)
  const token = localStorage.getItem("TOKEN")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      activityName: props.activityName,
      description: props.description,
      price: props.price,
      mangrullos: [],
      state: props.state,
      type: props.type,
    },
  })

  useEffect(() => {
    form.reset({
      activityName: props.activityName,
      description: props.description,
      price: props.price,
      mangrullos: [],
      state: props.state,
      type: props.type,
    })
    if (image.length > 0) {
      dispatch(loadingImage(false))
    }
  }, [dispatch, image, props, form])

  const urlAdmin: string = useAppSelector(
    state => state.actividadesReducer.urlAdmin,
  )
  const currentPage: number = useAppSelector(
    state => state.actividadesReducer.currentPageAdmin,
  )
  const imageLoading = useAppSelector(
    state => state.actividadesReducer.imageLoading,
  )
  const mangrullos: Mangrullo[] = useAppSelector(
    state => state.mangrullosReducer.mangrullos,
  )
  const selectOptions = mangrullos.map(mangrullo => ({
    value: mangrullo.id.toString(),
    label: mangrullo.zone,
  }))
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = data => {
    let activityData = {
      activityName: data.activityName,
      description: data.description,
      price: data.price,
      state: data.state,
      type: data.type,
      image: props.image,
    }

    let additional: { mangrullos?: string[] | number[]; image?: string } = {}

    if (image.length > 0 && data.mangrullos.length > 0) {
      additional = {
        mangrullos: data.mangrullos.map(item => parseInt(item.value)),
        image: image,
      }
    }

    if (image.length > 0) {
      additional = {
        image: image,
      }
    }

    if (data.mangrullos.length > 0) {
      additional = {
        mangrullos: data.mangrullos.map(item => parseInt(item.value)),
      }
    }

    const final = {
      ...activityData,
      ...additional,
    }

    console.log(final)
    dispatch(
      putAdminActividades({
        id: props.id,
        form: final,
        token: token,
      }),
    )
    setSubmitted(true)
  }

  const handleDisable = () => {
    console.log(props.id)
    dispatch(
      disableActividades({
        id: props.id,
        token: token,
        oldUrl: urlAdmin,
        page: currentPage,
      }),
    )
  }

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
        <UploadImageActivity />
        <Form {...form}>
          <form
            encType="multipart/form-data"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <div className="grid">
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
                        defaultValue={field.value}
                        onValueChange={field.onChange}
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
                        defaultValue={field.value}
                        onValueChange={field.onChange}
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
              {!submitted ? (
                !imageLoading ? (
                  <Button className="w-36" type="submit">
                    Editar
                  </Button>
                ) : (
                  <Button
                    className="w-36"
                    variant={"ghost"}
                    disabled
                    type="submit"
                  >
                    Subiendo imagen
                    <Loader2 className="ml-2 size-5 animate-spin" />
                  </Button>
                )
              ) : (
                <Button className="w-36" variant={"ghost"} disabled>
                  Actividad Editada
                  <CheckCircle2 className="size-5 ml-2" />
                </Button>
              )}
            </div>
          </form>
        </Form>
        {!props.active ? (
          <DialogClose className="flex justify-center m-auto" asChild>
            <Button
              variant={"secondary"}
              onClick={handleDisable}
              className="w-36"
            >
              Activar
            </Button>
          </DialogClose>
        ) : (
          <DialogClose className="flex justify-center m-auto" asChild>
            <Button
              onClick={handleDisable}
              className="w-36 text-sky-150"
              variant={"destructive"}
            >
              Desactivar
            </Button>
          </DialogClose>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default EditDialog
