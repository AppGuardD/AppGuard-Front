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
import { zodResolver } from "@hookform/resolvers/zod"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { z } from "zod"
import { postLogin } from "@/redux/action-creators/login/postLogin"
import { Badge } from "@/components/ui/badge"
import LoginButton from "./login-button"

const formSchema = z.object({
  email: z.string().email({
    message: "Correo electronico invalido.",
  }),
  password: z.string().min(1, {
    message: "Este campo es obligatorio.",
  }),
})

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const errorLogin = useAppSelector(state => state.loginReducer.errorLogin)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = data => {
    //console.log(data)
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
                <FormItem className="h-24 mb-2">
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Escribe tu contraseña"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="h-4">
              {errorLogin ? (
                <p className="text-sm text-destructive font-bold">
                  {errorLogin}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col justify-between mt-2">
              <LoginButton />
              <Badge className="mt-4 text-sm" variant={"outline"}>
                Olvide mi contraseña
              </Badge>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default LoginForm
