import type React from "react"; // CONSULTAR ESTO.
import { Link } from "react-router-dom";


interface AboutUs {
    description: string;
}

const About: React.FC<AboutUs> = ({ description }) => {
  return (
    <div>
      <p>{description}</p>
      <Link to={`/home`}>
        <button> Ir atras </button>
      </Link>
    </div>
  );
};

export default About;

