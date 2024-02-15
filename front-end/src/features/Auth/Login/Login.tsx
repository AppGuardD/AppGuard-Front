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
import { GoogleLogin } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { postGoogleLogin } from "@/redux/action-creators/googleLogin/googleLogin"
import { useAppDispatch } from "@/redux/hooks"
import { z } from "zod"
import { postLogin } from "@/redux/action-creators/login/postLogin"

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
  //const errorLogin = useAppSelector(state => state.loginReducer.errorLogin)
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
                <FormItem className="h-28">
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
            <div className="flex justify-between mt-2">
              <Button type="submit" variant={"secondary"}>
                Iniciar Sesion
              </Button>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  if (credentialResponse.credential) {
                    const token: string = jwtDecode(
                      credentialResponse.credential,
                    )
                    console.log("token", token)
                    dispatch(postGoogleLogin(credentialResponse))
                  } else {
                    console.error("No se pudo obtener el token del credencial")
                  }
                }}
                onError={() => {
                  console.log("Login Failed")
                }}
              />
            </div>
            <Badge className="mt-4" variant={"outline"}>
              Olvide mi contraseña
            </Badge>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default LoginForm
