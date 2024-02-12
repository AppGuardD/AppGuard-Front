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
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAppDispatch } from "@/redux/hooks"
import { z } from "zod"
import { postLogin } from "@/redux/action-creators/login/postLogin"
import { Badge } from "@/components/ui/badge"

const formSchema = z.object({
  email: z.string().email({
    message: "Correo electronico invalido.",
  }),
  password: z.string().min(8, {
    message: "La contraseña tiene que tener al menos 8 caracteres.",
  }),
})

const CreateUserForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = data => {
    console.log(data)
    dispatch(postLogin(data))
  }

  return (
    <div>
      <p className="text-4xl font-semibold mt-8 mx-8 mb-4">Inicio de sesion.</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="h-svh mr-16 ml-8"
        >
          <div className="w-96">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="h-24">
                  <FormLabel>Correo electronico</FormLabel>
                  <FormControl>
                    <Input placeholder="hola@mail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="h-28">
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Escribe tu contraseña"
                      {...field}
                    />
                  </FormControl>
                  <Badge className="mt-4" variant={"outline"}>
                    Olvide mi contraseña
                  </Badge>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-4" variant={"secondary"} type="submit">
              Iniciar Sesion
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default CreateUserForm
