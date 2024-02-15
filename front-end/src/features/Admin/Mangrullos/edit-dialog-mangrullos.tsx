import { Button } from "@/components/ui/button"
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
import type { MangrulloAdmin } from "@/redux/actions/mangrullosActions"
import type { SubmitHandler } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useAppSelector } from "@/redux/hooks"
import { useAppDispatch } from "@/redux/hooks"
import { useEffect, useState } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"
import { MoreHorizontalIcon } from "lucide-react"
import { loadingImage } from "@/redux/action-creators/actividades/admin/image-loading"
import { DialogClose } from "@radix-ui/react-dialog"
import UploadImageActivity from "@/features/Actividades/data-table/upload-image"
import { putAdminMangrullos } from "@/redux/action-creators/mangrullos/admin/admin-put-mangrullos"
import { disableMangrullos } from "@/redux/action-creators/mangrullos/admin/admin-disable-mangrullos"

const formSchema = z.object({
  zone: z.string().min(2, {
    message: "Este campo es obligatorio.",
  }),
  description: z.string().min(2, {
    message: "Este campo es obligatorio.",
  }),
  dangerousness: z.number(),
})

const EditDialogMangrullos: React.FC<MangrulloAdmin> = props => {
  const dispatch = useAppDispatch()
  const image = useAppSelector(state => state.actividadesReducer.image)
  const token = localStorage.getItem("TOKEN")

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      zone: props.zone,
      description: props.description,
      dangerousness: props.dangerousness,
    },
  })

  useEffect(() => {
    form.reset({
      zone: props.zone,
      description: props.description,
      dangerousness: props.dangerousness,
    })
    if (image.length > 0) {
      dispatch(loadingImage(false))
    }
  }, [dispatch, image, props, form])

  //const urlAdmin: string = useAppSelector(
  //  state => state.actividadesReducer.urlAdmin,
  //)
  //const currentPage: number = useAppSelector(
  //  state => state.actividadesReducer.currentPageAdmin,
  //)

  const imageLoading = useAppSelector(
    state => state.actividadesReducer.imageLoading,
  )
  const [submitted, setSubmitted] = useState(false)

  const urlAdmin: string = useAppSelector(
    state => state.mangrullosReducer.urlAdmin,
  )
  const currentPage: number = useAppSelector(
    state => state.mangrullosReducer.currentPageAdmin,
  )

  const handleDisable = () => {
    console.log(props.id)
    dispatch(
      disableMangrullos({
        id: props.id,
        token: token,
        oldUrl: urlAdmin,
        page: currentPage,
      }),
    )
  }

  const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = data => {
    let mangrulloData = {
      zone: data.zone,
      description: data.description,
      dangerousness: data.dangerousness,
    }

    let additional: { image?: string } = {}

    if (image.length > 0) {
      additional = {
        image: image,
      }
    }

    const final = {
      ...mangrulloData,
      ...additional,
    }

    console.log(final)
    dispatch(putAdminMangrullos({ token: token, id: props.id, form: final }))
    setSubmitted(true)
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
                      <FormControl>
                        <Input
                          type="number"
                          className="col-span-3"
                          {...field}
                        />
                      </FormControl>
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
                  Mangrullo Editado
                  <CheckCircle2 className="size-5 ml-2" />
                </Button>
              )}
            </div>
          </form>
        </Form>
        {props.state !== "Activo" ? (
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

export default EditDialogMangrullos
