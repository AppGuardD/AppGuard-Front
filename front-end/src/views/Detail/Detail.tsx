import type React from "react"; 


interface detailComponents {
    zone: string;
    dangerousness: number;
    state: string;
    image: string;
    qualification: number;
    activatedMangrullo: boolean;

    
}

const Detail: React.FC<detailComponents> = ({zone, dangerousness,state,image,qualification,activatedMangrullo }) => {
  return (
    <div>
      <p>{zone}</p>
      <p>{dangerousness}</p>
      <p>{state}</p>
      <p>{image}</p>
      <p>{qualification}</p>
      <p>{activatedMangrullo}</p>
    </div>
  );
};

export default Detail;