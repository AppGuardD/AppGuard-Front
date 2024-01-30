import type React from "react"
import { Link } from "react-router-dom"

const Donations: React.FC = () => {
  const handleDonation = (amount: number) => {
    console.log(`Donación de $${amount}`)
  }

  return (
    <div>
      <h1>estas son las donaciones</h1>

      <button onClick={() => handleDonation(10)}>Donar $10</button>
      <button onClick={() => handleDonation(20)}>Donar $20</button>
      <button onClick={() => handleDonation(30)}>Donar $30</button>
      <button onClick={() => handleDonation(40)}>Donar $40</button>
      <button onClick={() => handleDonation(50)}>Donar $50</button>

      <Link to="/home">
        <button>
          <p>Home</p>
        </button>
      </Link>
    </div>
  )
}

export default Donations
