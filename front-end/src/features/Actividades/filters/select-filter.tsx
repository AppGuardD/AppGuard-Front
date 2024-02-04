import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getActividades } from "@/redux/action-creators/actividades/getActividades"
import { useAppDispatch } from "@/redux/hooks"
import { useState } from "react"

const SelectFilterActividades: React.FC = () => {
  const dispatch = useAppDispatch()
  const [type, setType] = useState("")
  const [state, setState] = useState("")

  const handleState = (value: string) => {
    if (value === "Todos") {
      setState("")
    } else {
      setState(value)
    }
  }

  const handleType = (value: string) => {
    if (value === "Todos") {
      setType("")
    } else {
      setType(value)
    }
  }

  const handleFilter = () => {
    dispatch(getActividades({ type: type, state: state }))
  }

  return (
    <>
      <Select onValueChange={handleState}>
        <SelectTrigger className="w-[110px]">
          <SelectValue placeholder="Valor" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Todos">Valor</SelectItem>
          <SelectItem value="Gratis">Gratis</SelectItem>
          <SelectItem value="Pago">Pago</SelectItem>
        </SelectContent>

        <Select onValueChange={handleType}>
          <SelectTrigger className="w-[110px]">
            <SelectValue placeholder="Tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Todos">Tipo</SelectItem>
            <SelectItem value="Deportivo">Deportivo</SelectItem>
            <SelectItem value="Sanitario">Sanitario</SelectItem>
            <SelectItem value="Cultural">Cultural</SelectItem>
          </SelectContent>
        </Select>
      </Select>

      <Button onClick={handleFilter} variant={"outline"}>
        Filtrar
      </Button>
    </>
  )
}

export default SelectFilterActividades
