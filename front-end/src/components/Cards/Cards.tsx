import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CardsProps {
  name: string;
  zone: number;
  description: string;
  image: string;
}

const Cards: React.FC<CardsProps> = ({ name, zone, description, image }) => {
  return (
    <div>
      <Card className="rounded aspect-square max-h-[300px]">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{`Zona ${zone}`}</CardDescription>
        </CardHeader>
        <CardContent>      
          <p>imagen mangrullo</p>
        </CardContent>
        <CardFooter>
          <Link to="/mangrullos/detail">
            <button> Conocer más...</button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cards;

