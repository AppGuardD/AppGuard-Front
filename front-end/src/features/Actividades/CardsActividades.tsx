import type React from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import type { ActividadesTypes } from "@/redux/actions/actividadesActions"
import { Button } from "@/components/ui/button"

interface CardsActividadesProps {
  actividades: ActividadesTypes[]
}

const CardsActividades: React.FC<CardsActividadesProps> = ({ actividades }) => {
  const navigate = useNavigate()

  return (
    <div className="grid grid-cols-4 gap-6 justify-items-center mx-6 mb-6">
      {actividades.map(actividad => (
        <Card key={actividad.id} className="rounded size-96">
          <CardHeader>
            <CardTitle className="capitalize">
              {actividad.activityName}
            </CardTitle>
          </CardHeader>
          <CardContent className="rounded overflow-hidden aspect-video">
            <img
              className="object-cover aspect-video rounded"
              src={actividad.image}
              alt="Actividad"
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <p>Calificacion: {actividad.qualification} Estrella</p>
            <Button
              variant={"outline"}
              onClick={() => navigate(`/actividades/detail/${actividad.id}`)}
            >
              Conocer mas...
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default CardsActividades
