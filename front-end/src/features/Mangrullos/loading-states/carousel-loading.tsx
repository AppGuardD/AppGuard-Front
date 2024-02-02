import { Card, CardContent } from "@/components/ui/card"
import { CarouselItem } from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton"

const CarouselLoading: React.FC = () => {
  return (
    <CarouselItem>
      <Card className="pt-6 rounded">
        <CardContent>
          <div className="flex">
            <div className="rounded aspect-[4/3] max-w-sm overflow-hidden">
              <Skeleton className="aspect-[4/3] h-60 rounded" />
            </div>
            <div className="pl-6 w-sm">
              <Skeleton className="h-4 w-36 rounded" />
              <Skeleton className="h-4 w-32 rounded mt-4" />
              <Skeleton className="h-4 w-28 rounded mt-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  )
}

export default CarouselLoading
