import type React from "react"
import { Link } from "react-router-dom"
import Events from "../Events/Events"

// Define la estructura de un objeto que representa una actividad.
interface Activity {
  activityName: string
  description: string
  qualification: number
  price: number
  state: string
  Active: boolean
  type: string
}

// Define la estructura de las props del componente Detail.
interface detailComponents {
  name: string
  zone: string
  dangerousness: number
  state: string
  image: string
  qualification: number
  activatedMangrullo: boolean
  events: Activity[] // Propiedad que contiene un array de actividades.
}

// Declara el componente Detail como un componente funcional de React.
const Detail: React.FC<detailComponents> = ({
  name,
  zone,
  dangerousness,
  state,
  image,
  qualification,
  activatedMangrullo,
  events,
}) => {
  // Devuelve la representación del componente.
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

      {/* Componente Events para mostrar información relacionada con las actividades */}
      <Events events={events} />
    </div>
  )
}

// Exporta el componente Detail para que pueda ser utilizado en otros archivos.
export default Detail
