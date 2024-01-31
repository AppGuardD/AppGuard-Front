import type React from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"
import type { ActividadesTypes } from "@/redux/actions/actividadesActions"

interface CardsActividadesProps {
  actividades: ActividadesTypes[]
}

const CardsActividades: React.FC<CardsActividadesProps> = ({ actividades }) => {
  return (
    <div>
      {actividades.map((actividad, index) => (
        <Card key={index} className="rounded size-96">
          <CardHeader>
            <CardTitle>{actividad.activityName}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{actividad.qualification}</p>
            <img src={actividad.image} alt={`Imagen de $`} />
          </CardContent>
          <CardFooter>
            <Link to={`/actividades/detail/${actividad.id}`}>
              <button>Conocer más...</button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default CardsActividades

