import type { ActividadType } from "@/redux/actions/mangrullosActions"
import { useState } from "react"

const DetailActividad: React.FC<ActividadType> = ({ activity }) => {
  const [review, setReview] = useState("")
  const [rating, setRating] = useState(1)

  const handleReviewSubmit = () => {
    console.log("Review:", review)
    console.log("Rating:", rating)
  }

  return (
    <div>
      <h1>
        <p>[Lista de eventos]</p>
      </h1>

      {activity?.map(activity => (
        <div key={activity.activityName}>
          <p>Nombre: {activity.activityName}</p>
          <p>Tipo: {activity.type}</p>
          <p>Tipo: {activity.price}</p>
          <p>Tipo: {activity.state}</p>
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


export default DetailActividad
