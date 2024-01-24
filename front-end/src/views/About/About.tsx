import type React from "react"; // CONSULTAR ESTO.


interface AboutUs {
    description: string;
}

const About: React.FC<AboutUs> = ({ description }) => {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
};

export default About;

