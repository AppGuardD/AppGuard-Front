import LoginForm from "../../features/Auth/Login/Login"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateUser } from "@/redux/action-creators/user/putUser";

const formSchema = z.object({
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
  numberIdentification: z.string().min(6, { message: "El número de identificación debe tener al menos 6 caracteres" }),
});

export function EditUserData() {
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem("USERID");
  const token = localStorage.getItem("TOKEN"); // Obtener el token del localStorage

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      numberIdentification: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    // Modificar el objeto que se pasa al action creator para incluir el token
    dispatch(updateUser({ userId: userId, formData: data, token: token }));
  }

  return (
    <div className="flex flex-col">
      <p className="text-2xl mx-auto">Editar datos de usuario</p>
      {userId ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Textarea  placeholder="Nueva contraseña" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="numberIdentification"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Número de identificación</FormLabel>
                  <FormControl>
                    <Textarea  placeholder="Nuevo número de identificación" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Guardar cambios</Button>
          </form>
        </Form>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}
