import { Input } from "@/components/ui/input"
import { getActividades } from "@/redux/action-creators/actividades/getActividades"
import { useAppDispatch } from "@/redux/hooks"
import { useState } from "react"

const SearchInputActividades: React.FC = () => {
  const dispatch = useAppDispatch()
  const [query, setQuery] = useState("")

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "") {
      setQuery(event.target.value)
      dispatch(getActividades({ query: query }))
    } else {
      setQuery("")
      dispatch(getActividades())
    }
  }

  return (
    <>
      <Input
        className="w-[180px]"
        placeholder="Buscar por nombre..."
        value={query}
        onChange={handleSearch}
      ></Input>
    </>
  )
}

export default SearchInputActividades
