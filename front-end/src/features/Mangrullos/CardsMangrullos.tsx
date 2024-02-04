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

interface CardsMangrullosProps {
  mangrullos: Mangrullo[]
}

const CardsMangrullos: React.FC<CardsMangrullosProps> = ({ mangrullos }) => {
  const navigate = useNavigate()
  return (
    <div className="grid grid-cols-4 gap-6 justify-items-center mx-6 mb-6">
      {mangrullos.map(mangrullo => (
        <Card key={mangrullo.id} className="rounded size-96">
          <CardHeader>
            <CardTitle className="capitalize">{mangrullo.zone}</CardTitle>
          </CardHeader>
          <CardContent className="rounded overflow-hidden aspect-video">
            <img
              className="object-cover aspect-video rounded"
              src={mangrullo.image}
              alt="Actividad"
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <p>Calificacion: {mangrullo.qualification} Estrella</p>
            <Button
              variant={"outline"}
              onClick={() => navigate(`/mangrullos/detail/${mangrullo.id}`)}
            >
              Conocer mas...
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default CardsMangrullos
