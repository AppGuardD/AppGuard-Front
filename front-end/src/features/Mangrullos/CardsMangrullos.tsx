import type React from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import type { Mangrullo } from "@/redux/actions/mangrullosActions"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface CardsMangrullosProps {
  mangrullos: Mangrullo[]
}

const CardsMangrullos: React.FC<CardsMangrullosProps> = ({ mangrullos }) => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-wrap mx-6 mb-6 justify-evenly">
      {mangrullos.map(mangrullo => (
        <Card key={mangrullo.id} className="rounded size-96 mb-4">
          <CardHeader className="flex">
            <CardTitle className="capitalize">{mangrullo.zone}</CardTitle>
          </CardHeader>
          <CardContent className="rounded overflow-hidden aspect-video">
            <img
              className="object-cover aspect-video rounded"
              src={mangrullo.image}
              alt="Actividad"
            />
          </CardContent>
          <CardFooter>
            <Button
              className="font-bold mt-auto"
              variant={"ghost"}
              onClick={() => navigate(`/mangrullos/detail/${mangrullo.id}`)}
            >
              Actividades
              <ChevronRight className="size-5 ml-2" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default CardsMangrullos
