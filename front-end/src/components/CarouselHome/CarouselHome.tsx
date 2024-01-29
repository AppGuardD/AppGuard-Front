import { Card, CardContent, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { Mangrullo } from "@/redux/actions/mangrullos/mangrullosActions"
import { cleanMangrullos } from "@/redux/action-creators/mangrullos/cleanMangrullos"
import { getMangrullos } from "@/redux/action-creators/mangrullos/getMangrullos"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"

const CarouselHome: React.FC = () => {
  const mangrullos: Mangrullo[] = useAppSelector(
    state => state.mangrullosReducer.mangrullos,
  )
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
    <Carousel className="max-w-lg" opts={{ loop: true }}>
      <CarouselContent>
        {mangrullos?.map(mangrullo => (
          <CarouselItem className="max-w-max" key={mangrullo.id}>
            <Card className="max-w-max pt-6 rounded">
              <CardContent className="max-w-max">
                <div className="rounded aspect-[4/3] h-lg overflow-hidden">
                  <img
                    className="object-cover aspect-[4/3] h-lg"
                    src={mangrullo.image}
                    alt="Imagen Mangrullos"
                  />
                </div>
                <div className="pt-6 max-w-max">
                  <CardTitle>Zona destacada {mangrullo.id}</CardTitle>
                  <p>{mangrullo.zone}</p>
                </div>
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

export default CarouselHome
