import type React from "react";
import { Link } from "react-router-dom";
// import Events from "../Events/Events";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { getEvents } from "@/redux/action-creators/events/getEvents";


interface Activity {
  activityName: string;
  description: string;
  qualification: number;
  price: number;
  state: string;
  Active: boolean;
  type: string;
}

interface DetailProps {
  name: string;
  zone: string;
  dangerousness: number;
  state: string;
  image: string;
  qualification: number;
  activatedMangrullo: boolean;
  events: Activity[];
}

const Detail: React.FC<DetailProps> = ({
  name,
  zone,
  dangerousness,
  state,
  image,
  qualification,
  activatedMangrullo,
  events,
}) => {
  const dispatch = useAppDispatch()
  useEffect (()=>{
    dispatch(getEvents())
  },[dispatch])

  return (
    <div>
      {/* Enlace para volver a la vista de mangrullos */}
      <Link to={`/mangrullos`}>
        <button> Ir atrás </button>
      </Link>

      {/* Información detallada del mangrullo */}
      <h1>{name}</h1>
      <p>Zona: {zone}</p>
      <p>Peligrosidad: {dangerousness}</p>
      <p>Estado: {state}</p>
      <p>Imagen: {image}</p>
      <p>Calificación: {qualification}</p>
      <p>Activado: {activatedMangrullo ? "Sí" : "No"}</p>

      {/* Mapeo de eventos */}
      <div>
        <h2>Eventos Relacionados</h2>
         {events.map((event, index) => (
          <div key={index}>
            <h3>{event.activityName}</h3>
            <p>Descripción: {event.description}</p>
            <p>Calificacion: {event.qualification}</p>
            <p>Precio: ${event.price}</p>
            <p>Estado: {event.state}</p>
            <p>Tipo: {event.type}</p>
            <p>Activo: {event.Active}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detail;

  // activityName: string;
  // description: string;
  // qualification: number;
  // price: number;
  // state: string;
  // Active: boolean;
  // type: string;