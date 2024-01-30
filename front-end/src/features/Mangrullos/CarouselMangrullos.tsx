import { Card, CardContent, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { Mangrullo } from "@/redux/actions/mangrullosActions"
import { cleanMangrullos } from "@/redux/action-creators/mangrullos/cleanMangrullos"
import { getMangrullos } from "@/redux/action-creators/mangrullos/getMangrullos"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"

const CarouselMangrullos: React.FC = () => {
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
    <Carousel className="max-w-xl">
      <CarouselContent>
        {mangrullos?.map(mangrullo => (
          <CarouselItem key={mangrullo.id}>
            <Card className="pt-6 rounded">
              <CardContent>
                <div className="flex">
                  <div className="rounded aspect-[4/3] max-w-sm overflow-hidden">
                    <img
                      className="object-cover aspect-[4/3] max-w-sm"
                      src={mangrullo.image}
                      alt="Imagen Mangrullos"
                    />
                  </div>
                  <div className="pl-6 w-sm">
                    <CardTitle>Zona destacada {mangrullo.id}</CardTitle>
                    <p>{mangrullo.zone}</p>
                  </div>
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

export default CarouselMangrullos
