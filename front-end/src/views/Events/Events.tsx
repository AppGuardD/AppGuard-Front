import type React from "react"
import { useState } from "react"

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

// Define la estructura de las props del componente Events.
interface EventsProps {
  events: Activity[] // Propiedad que contiene un array de actividades.
}

// Declara el componente Events como un componente funcional de React.
const Events: React.FC<EventsProps> = ({ events }) => {
  // Define estados locales para la reseña y la clasificación.
  const [review, setReview] = useState("")
  const [rating, setRating] = useState(1)

  // Función para manejar el envío de la reseña.
  const handleReviewSubmit = () => {
    // Aquí puedes implementar la lógica para enviar la reseña y clasificación.
    console.log("Review:", review)
    console.log("Rating:", rating)
    // Puedes enviar estos datos al servidor, almacenarlos localmente, etc.
  }

  // Devuelve la representación del componente.
  return (
    <div>
      {/* Encabezado de la lista de eventos */}
      <h1>
        <p>[Lista de eventos]</p>
      </h1>

      {/* Mapea sobre el array de eventos y muestra la información de cada uno */}
      {events.map((event, index) => (
        <div key={index}>
          <h2>{event.activityName}</h2>
          <p>Descripción: {event.description}</p>
          <p>Precio: ${event.price}</p>
          <p>Estado: {event.state}</p>
          <p>Tipo: {event.type}</p>
          <hr />
        </div>
      ))}

      {/* Sección para dejar una reseña */}
      <div>
        <h2>Deja tu reseña</h2>
        <textarea
          value={review}
          onChange={e => setReview(e.target.value)}
          placeholder="Escribe tu reseña aquí"
        />
        <label>Clasificación:</label>
        <select
          value={rating}
          onChange={e => setRating(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map(value => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        <button onClick={handleReviewSubmit}>Enviar Reseña</button>
      </div>
    </div>
  )
}

// Exporta el componente Events para que pueda ser utilizado en otros archivos.
export default Events
