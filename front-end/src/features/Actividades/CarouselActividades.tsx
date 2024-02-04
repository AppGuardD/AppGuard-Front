import * as React from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"
import CarouselLoading from "../Mangrullos/loading-states/carousel-loading"
import { Skeleton } from "@/components/ui/skeleton"
import Autoplay from "embla-carousel-autoplay"
import { Separator } from "@/components/ui/separator"
import { Star } from "lucide-react"

const CarouselActividades: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  )
  const actividades = useAppSelector(
    state => state.actividadesReducer.actividades,
  )

  const [loading, setLoading] = useState(true)
  const [imgLoading, setImgLoading] = useState(true)

  useEffect(() => {
    if (actividades && actividades.length > 0) {
      setLoading(false)
    }
  }, [actividades, imgLoading])

  const handleImageLoad = () => {
    setImgLoading(false)
  }

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="max-w-xl"
    >
      <CarouselContent>
        {loading ? (
          <CarouselLoading />
        ) : (
          actividades.map(actividad => (
            <CarouselItem key={actividad.id}>
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
                        src={actividad.image}
                        alt="Imagen Mangrullos"
                      />
                    </div>
                    <div className="pl-6 w-sm">
                      <p className="w-44 max-w-sm text-xl font-bold">
                        {actividad.activityName}
                      </p>
                      <Separator className="my-2" />
                      <p className="max-w-sm">{actividad.type}</p>
                      <div className="flex">
                        <p className="max-w-sm font-bold">
                          {actividad.qualification}
                        </p>
                        <Star className="inline-block align-middle ml-2 size-5" />
                      </div>
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

export default CarouselActividades
