import type React from "react"

import { Link } from "react-router-dom"

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
    </div>
  )
}

export default Detail
