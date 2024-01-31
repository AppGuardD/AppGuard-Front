import type React from "react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"
import type { Mangrullo } from "@/redux/actions/mangrullosActions"

interface CardsMangrullosProps {
  mangrullos: Mangrullo[]
}

const CardsMangrullos: React.FC<CardsMangrullosProps> = ({ mangrullos }) => {
  return (
    <div>
      {mangrullos.map((mangrullo, index) => (
        <Card key={index} className="rounded size-96">
          <CardHeader>
            <CardTitle>{mangrullo.zone}</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={mangrullo.image} alt={`Imagen de $`} />
          </CardContent>
          <CardFooter>
            <Link to={`/mangrullos/detail/${mangrullo.id}`}>
              <button>Conocer más...</button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default CardsMangrullos
