import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useParams } from "react-router-dom"
import { createReviewActividades } from "@/redux/action-creators/reviews/postReview"

// Nuevo esquema del formulario que incluye la puntuación
const formSchema = z.object({
  comment: z
    .string()
    .min(2, {
      message: "Your review cannot be less than 2 characters",
    })
    .max(120, { message: "Your review cannot be more than 120 characters" }),
  qualification: z
    .number()
    .min(1, { message: "Puntuación mínima de 1" })
    .max(5, { message: "Puntuación máxima de 5" }),
})

export function Review() {
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  const userId = useAppSelector(state => state.userReducer.id)

  const reviewData = {
    userId: userId.toString(),
    activityId: id,
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
      qualification: 0,
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    dispatch(
      createReviewActividades({ reviewData: reviewData, formData: data }),
    )
  }

  return (
    <div className="flex flex-col">
      <p className="text-2xl mx-auto">Review actividades</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center"
        >
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem className="mt - 10">
                <FormLabel className="mt-10">Dejanos tu review</FormLabel>
                <FormControl>
                  <Textarea placeholder="Ingrese un texto" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="qualification"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Puntuación</FormLabel>
                <FormControl>
                  <div>
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => form.setValue("qualification", star)}
                        className={`text-3xl ${star <= form.getValues("qualification") ? "text-yellow-400" : "text-gray-300"} focus:outline-none`}
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}
