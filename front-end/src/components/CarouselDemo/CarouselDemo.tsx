import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cleanMangrullos } from "@/redux/action-creators/mangrullos/cleanMangrullos"
import { getMangrullos } from "@/redux/action-creators/mangrullos/getMangrullos"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"

const CarouselDemo: React.FC = () => {
  const mangrullos = useAppSelector(state => state.mangrullos)
  const dispatch = useAppDispatch()

  useEffect(() => {
    let mounted = true
    const fetchData = async () => {
      await dispatch(getMangrullos())
      if (!mounted) {
        dispatch(cleanMangrullos())
      }
    }
    fetchData()
    return () => {
      mounted = false
    }
  }, [dispatch])

  return (
    <Carousel className="w-full max-w-xl">
      <CarouselContent>
        {mangrullos.map(mangrullo => (
          <CarouselItem key={mangrullo.id}>
            <Card className="rounded">
              <CardContent className="grid place-items-center aspect-video items-center justify-center p-0">
                <p className="text-4xl font-semibold">{mangrullo.id}</p>
                <p>Zona: {mangrullo.zone}</p>
                <img
                  className="max-w-sm"
                  src={mangrullo.image}
                  alt="Imagen Mangrullos"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselDemo
