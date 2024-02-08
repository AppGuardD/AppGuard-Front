import type { SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
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
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAppDispatch } from "@/redux/hooks"
import { createUser } from "@/redux/action-creators/user/postUser"
import { z } from "zod"

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
  typeIdentification: z.enum(["DNI", "PP"]),
  numberIdentification: z.string(),
  rol: z.enum(["Admin", "Cliente"]),
})

const CreateUserForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      typeIdentification: "DNI",
      numberIdentification: "",
      rol: "Cliente",
    },
  })

  const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = data => {
    console.log(data)
    dispatch(createUser(data))
  }

  return (
    <div>
      <p className="text-4xl font-semibold mt-8 mx-8 mb-4">
        Registrate en AppGuard
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="h-svh w-96 mx-8"
        >
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
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
              <FormItem>
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
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="jhon123" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="typeIdentification"
            render={({ field }) => (
              <FormItem>
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
                <FormDescription>
                  Elige tu tipo de identificacion
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numberIdentification"
            render={({ field }) => (
              <FormItem>
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
          <FormField
            control={form.control}
            name="rol"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de cuenta</FormLabel>
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
                    <SelectItem value="Admin">Administrador</SelectItem>
                    <SelectItem value="Cliente">Cliente</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>Elige tu tipo de cuenta</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-4" variant={"secondary"} type="submit">
            Crear usuario
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default CreateUserForm
