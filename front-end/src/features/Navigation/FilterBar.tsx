import type {
  Cost,
  Name,
  Order,
  Type,
} from "@/redux/actions/actividadesActions"
import { useAppDispatch } from "@/redux/hooks"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { setFilterActividades } from "@/redux/action-creators/actividades/setFilterActividades"

const FilterBar: React.FC = () => {
  const [name, setName] = useState<Name>("")
  const [type, setType] = useState<Type>("")
  const [cost, setCost] = useState("")
  const [order, setOrder] = useState("")
  const dispatch = useAppDispatch()

  //const actividades: ActividadesTypes[] = useAppSelector(
  //  state => state.actividadesReducer.actividades,
  //)

  const handleSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setName(e.target.value)
  }

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

  const filterData = {
    name: name,
    type: type,
    cost: cost,
    order: order,
  }

  console.log(filterData)

  const handleFilter = () => {
    dispatch(setFilterActividades(name, type, cost, order))
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <form className="flex" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar actividades"
            value={name}
            onChange={e => setName(e.target.value)}
            className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 ring-accent text-black"
          />

          <button
            type="submit"
            className="transition ease-in-out delay-150 py-2 px-4 mx-2 bg-primary text-white hover:bg-accent rounded"
          >
            Buscar
          </button>
        </form>

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
        onClick={handleFilter}
        className="rounded border-primary"
        variant={"outline"}
      >
        Filtrar
      </Button>
    </div>
  )
}

export default FilterBar
