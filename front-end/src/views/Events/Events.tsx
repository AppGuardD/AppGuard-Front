import type React from "react"
import { useState } from "react"

interface Activity {
  activityName: string
  description: string
  qualification: number
  price: number
  state: string
  Active: boolean
  type: string
}

interface EventsProps {
  events: Activity[]
}

const Events: React.FC<EventsProps> = ({ events }) => {
  const [review, setReview] = useState("")
  const [rating, setRating] = useState(1)

  const handleReviewSubmit = () => {
    // Aquí puedes implementar la lógica para enviar la reseña y clasificación
    console.log("Review:", review)
    console.log("Rating:", rating)
    // Puedes enviar estos datos al servidor, almacenarlos localmente, etc.
  }

  return (
    <div>
      <h1>Lista de Eventos</h1>
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

export default Events
