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
import { useAppDispatch } from "@/redux/hooks"
import { createReviewActividades } from "@/redux/action-creators/reviews/postReview"
import { useParams } from "react-router-dom"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  comment: z
    .string()
    .min(2, {
      message: "Tu review no puede contener menos de 2 caracteres",
    })
    .max(300, { message: "Tu review no puede tener más de 300 caracteres" }),
  qualification: z
    .number()
    .min(1, { message: "Puntuación mínima de 1" })
    .max(5, { message: "Puntuación máxima de 5" }),
})

export function Review() {
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  const userId = localStorage.getItem("USERID")
  const [hoveredStar, setHoveredStar] = useState<number | null>(null)
  const token = localStorage.getItem("TOKEN")
  const { toast } = useToast()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const reviewData = {
    userId: userId,
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
      createReviewActividades({
        token: token,
        reviewData: reviewData,
        formData: data,
      }),
    )
    setFormSubmitted(true)
    handleClick()
  }

  const handleClick = () => {
    toast({
      title: "Appguard",
      description: "Se ha enviado tu review",
    })
  }
  return (
    <div className="flex flex-col items-center justify-center h-svh">
      <p className="text-3xl mx-auto my-10">Comparte tu review</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center w-3/4 "
        >
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem className="mt - 10 w-3/4">
                <FormLabel className="mt-10 text-2xl">
                  Agrega un comentario escrito
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-44 text-2xl placeholder:text-slate-400 placeholder:italic"
                    placeholder="¿Qué te gustó o qué no te gustó? Tu opinión es muy importante."
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-2xl" />
              </FormItem>
            )}
          />
          <Separator className="my-4 w-3/4" />
          <FormField
            control={form.control}
            name="qualification"
            render={({ field }) => (
              <FormItem className="text-2xl">
                <FormLabel className="text-2xl">Puntuación</FormLabel>
                <FormControl>
                  <div className="text-3xl">
                    {[1, 2, 3, 4, 5].map(star => {
                      const isHighlighted =
                        star <= form.getValues("qualification")
                      const isHovered =
                        hoveredStar !== null && star <= hoveredStar // Verificación de nulidad
                      const shouldHighlight = isHighlighted || isHovered
                      return (
                        <button
                          key={star}
                          type="button"
                          onClick={() => form.setValue("qualification", star)}
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(null)}
                          className={`text-3xl ${shouldHighlight ? "text-yellow-400" : "text-gray-300"} focus:outline-none`}
                        >
                          ★
                        </button>
                      )
                    })}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Separator className="my-2 w-3/4" />
          <Button type="submit" disabled={formSubmitted}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  )
}
