import type { SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAppDispatch } from "@/redux/hooks"
import { createUser } from "@/redux/action-creators/user/postUser"
import { z } from "zod"
import { useToast } from "@/components/ui/use-toast"
import { tabAtom } from "@/views/Users/tabAtom"
import { useAtom } from "jotai"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  userName: z.string().min(2, {
    message: "El nombre de usuriario es obligatorio.",
  }),
  email: z.string().email({
    message: "Correo electronico invalido.",
  }),
  password: z.string().min(8, {
    message: "La contraseña tiene que tener al menos 8 caracteres.",
  }),
  numberIdentification: z.string().min(1, {
    message: "Este campo es obligatorio",
  }),
  typeIdentification: z.enum(["DNI", "PP"]),
})

const CreateUserForm: React.FC = () => {
  const { toast } = useToast()
  const [tab, setTab] = useAtom(tabAtom)
  const dispatch = useAppDispatch()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      typeIdentification: "DNI",
      numberIdentification: "",
    },
  })

  const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = data => {
    console.log(data)
    dispatch(createUser(data))
    toast({
      title: "AppGuard",
      description: "Cuenta creada!",
    })
    setTimeout(() => {
      setTab("login")
    }, 500)
  }

  return (
    <div>
      <p className="text-4xl font-semibold mt-8 mx-8 mb-4">
        Registrate en AppGuard
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="h-svh mr-16 ml-8"
        >
          <div className="grid grid-cols-2 gap-32 mr-16">
            <div>
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem className="h-24">
                    <FormLabel>Nombre de usuario</FormLabel>
                    <FormControl>
                      <Input placeholder="Jhon Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="h-24">
                    <FormLabel>Correo electronico</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="jhondoe@mail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="h-24">
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="jhon123" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="typeIdentification"
                render={({ field }) => (
                  <FormItem className="h-24">
                    <FormLabel>Tipo de identificacion</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="DNI">DNI</SelectItem>
                        <SelectItem value="PP">Pasaporte</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberIdentification"
                render={({ field }) => (
                  <FormItem className="h-24">
                    <FormLabel>
                      Escribe tu numero de identificacion o de pasaporte
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="1234567890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button className="mt-4" variant={"secondary"} type="submit">
            Crea tu cuenta
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default CreateUserForm
