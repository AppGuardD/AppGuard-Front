
import type React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card"


interface MangrullosComponents {
  name: string;
  zone: number;
  description: string;
  image: string;
}

const Mangrullos: React.FC<MangrullosComponents> = ({

  name,
  zone,
  description,
  image,
}) => {
  return (
    <div>
        <Link to={`/home`}>
          <button> Ir atras </button>
        </Link>
      <Card>
        <p>Name: {name}</p>
        <p>Zone: {zone}</p>
        <p>Descriptión: {description}</p>
        {/* <img src={image} alt={name} /> */}
        <Link to={`/mangrullos/detail`}>
          <button>
            <p>Conocer más...</p>
          </button>
        </Link>
      </Card>
    </div>
    );
  };
export default Mangrullos;

      
