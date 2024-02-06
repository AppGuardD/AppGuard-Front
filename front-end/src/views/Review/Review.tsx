import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import  {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/formReview"

// Nuevo esquema del formulario que incluye la puntuación
const formSchema = z.object({
  Nombre: z.string().min((2), {
    message: "Username must be at least 2 characters.",
  }),
  Puntuacion: z.number().min(1, { message: "Puntuación mínima de 1" }).max(5, { message: "Puntuación máxima de 5" }),
})

export function Review() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Nombre: "",
      Puntuacion: 0,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Aquí manejas la información del formulario, incluida la puntuación
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="Nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
              Dejanos tu descripción acá
              </FormLabel>
              <FormControl>
                <Input placeholder="Ingrese un texto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Puntuacion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Puntuación
              </FormLabel>
              <FormControl>
                <div>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => form.setValue("Puntuacion", star)}
                      className={`text-3xl ${star <= form.getValues("Puntuacion") ? 'text-yellow-400' : 'text-gray-300'} focus:outline-none`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" >Submit</Button>
      </form>
    </Form>
  )
}




