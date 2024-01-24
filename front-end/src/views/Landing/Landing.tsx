import React from 'react';
import { Link } from 'react-router-dom';

interface LandingProps {
  presentacion: string;

}

const Landing: React.FC<LandingProps> = ({presentacion}) => {
  return (
    <div>
      <h1>Landing Page</h1>
      <p>{presentacion}</p>
      <Link to={`/home`}>
        <button>
          <p>Conocer más</p>
        </button>
      </Link>
    </div>
  );
};

export default Landing;
