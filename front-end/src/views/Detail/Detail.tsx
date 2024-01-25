import type React from "react"

import { Link } from "react-router-dom"
import Card from "../../components/Card/Card"

interface detailComponents {
  name: string
  zone: string
  dangerousness: number
  state: string
  image: string
  qualification: number
  activatedMangrullo: boolean
}

const Detail: React.FC<detailComponents> = ({
  name,
  zone,
  dangerousness,
  state,
  image,
  qualification,
  activatedMangrullo,
}) => {
  return (
    <div>
      <Link to={`/mangrullos`}>
        <button> Ir atras </button>
      </Link>
      <Card>
      <p>Name: {name}</p>
      <p>Zone: {zone}</p>
      <p>Dangerousness: {dangerousness}</p>
      <p>state: {state}</p>
      {/* <p>{image}</p> */}
      <p>Qualification: {qualification}</p>
      <p>{activatedMangrullo}</p>
      </Card>
    </div>
  )
}

export default Detail
