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
import { useAppDispatch } from "@/redux/hooks"
import { GoogleLogin } from "@react-oauth/google"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { z } from "zod"
import { postLogin } from "@/redux/action-creators/login/postLogin"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"

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
  const navigate = useNavigate()
  const { toast } = useToast()

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

    try {
      toast({
        title: "AppGuard",
        description: "Has iniciado sesion.",
      })
    } finally {
      setTimeout(() => {
        navigate("/home")
      }, 1000)
    }
  }

  return (
    <GoogleOAuthProvider clientId="204945610405-eaj4cam96mbfrom5fj3m3hadk3guep9s.apps.googleusercontent.com">
      <div>
        <p className="text-4xl font-semibold mt-8 mx-8 mb-4">
          Inicio de sesion.
        </p>
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
                    console.log(credentialResponse)
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
    </GoogleOAuthProvider>
  )
}

export default LoginForm