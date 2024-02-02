import { Card, CardContent, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { Mangrullo } from "@/redux/actions/mangrullosActions"
import { useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import CarouselLoading from "./loading-states/carousel-loading"

const CarouselMangrullos: React.FC = () => {
  const mangrullos: Mangrullo[] = useAppSelector(
    state => state.mangrullosReducer.mangrullos,
  )
  const [loading, setLoading] = useState(true)
  const [imgLoading, setImgLoading] = useState(true)

  useEffect(() => {
    if (mangrullos && mangrullos.length > 0) {
      setLoading(false)
    }
  }, [mangrullos, imgLoading])

  const handleImageLoad = () => {
    setImgLoading(false)
    console.log(imgLoading)
  }

  return (
    <Carousel className="max-w-xl">
      <CarouselContent>
        {loading ? (
          <CarouselLoading />
        ) : (
          mangrullos.map(mangrullo => (
            <CarouselItem key={mangrullo.id}>
              <Card className="pt-6 rounded">
                <CardContent>
                  <div className="flex">
                    <div className="rounded aspect-[4/3] max-w-sm overflow-hidden">
                      {imgLoading ? (
                        <Skeleton className="object-cover aspect-[4/3] w-96" />
                      ) : null}
                      <img
                        onLoad={handleImageLoad}
                        className="object-cover aspect-[4/3] max-w-sm"
                        src={mangrullo.image}
                        alt="Imagen Mangrullos"
                      />
                    </div>
                    <div className="pl-6 w-sm">
                      <CardTitle>Playa destacada #{mangrullo.id}</CardTitle>
                      <p>{mangrullo.zone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselMangrullos
