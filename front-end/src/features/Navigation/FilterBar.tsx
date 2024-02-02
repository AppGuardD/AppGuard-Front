import { useState } from "react"
import { Button } from "@/components/ui/button"
import SearchInputActividades from "../Actividades/filters/search-input"

const FilterBar: React.FC = () => {
  const [type, setType] = useState("")
  const [cost, setCost] = useState("")
  const [order, setOrder] = useState("")

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    const targetType = e.target.value
    setType(targetType)
  }

  const handleCostChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetCost = e.target.value
    setCost(targetCost)
  }

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const targetOrder = e.target.value
    setOrder(targetOrder)
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <SearchInputActividades />
        <select
          value={type}
          onSubmit={handleTypeChange}
          className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 ring-accent text-black"
        >
          <option value="">-</option>
          <option value="Deportivo">Deportivo</option>
          <option value="Sanitario">Sanitario</option>
          <option value="Cultural">Cultural</option>
        </select>

        <select
          value={cost}
          onChange={handleCostChange}
          className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 ring-accent text-black"
        >
          <option value="">-</option>
          <option value="Pago">De pago</option>
          <option value="Gratis">Gratis</option>
        </select>

        <select
          value={order}
          onChange={handleOrderChange}
          className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 ring-accent text-black"
        >
          <option value="">-</option>
          <option value="Mayor">Mejor valorado</option>
          <option value="Menor">Menor valorado</option>
        </select>
      </div>
      <Button
        //onClick={handleFilter}
        className="rounded border-primary"
        variant={"outline"}
      >
        Filtrar
      </Button>
    </div>
  )
}

export default FilterBar
