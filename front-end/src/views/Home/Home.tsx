import type React from "react"; 
// import Mangrullos from "../Mangrullos/Mangrullos";


interface homeComponents {
    description: string;
}

const Home: React.FC<homeComponents> = ({ description }) => {
  return (
    <div>
      <p>{description}</p>
      {/* <Mangrullos name='La preciada' zone={1} description="Un puesto genial" image='asa.jpg'/> */}
    </div>
  );
};

export default Home;