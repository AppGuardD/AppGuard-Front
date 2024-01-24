import type React from "react"

interface homeComponents {
  description: string
}

const Home: React.FC<homeComponents> = ({ description }) => {
  return (
    <div>
      <p>{description}</p>
    </div>
  )
}

export default Home
