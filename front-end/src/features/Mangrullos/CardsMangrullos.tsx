import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/features/ui/card"
import { Link } from "react-router-dom"

interface CardsProps {
  name: string
  zone: number
  description: string
  image: string
}

const CardsMangrullos: React.FC<CardsProps> = ({ name, zone }) => {
  const id = 1

  return (
    <Card className="rounded size-96">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{`Zona ${zone}`}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>imagen mangrullo</p>
      </CardContent>
      <CardFooter>
        <Link to={`/mangrullos/detail/${id}`}>
          <button> Conocer más...</button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default CardsMangrullos
