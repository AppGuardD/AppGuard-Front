import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { searchByNameActividades } from "@/redux/action-creators/actividades/filters/name-filter"
import { useAppDispatch } from "@/redux/hooks"
import { useState } from "react"

const SearchInputActividades: React.FC = () => {
  const dispatch = useAppDispatch()
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(searchByNameActividades(query))
    setQuery("")
    console.log(query)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      dispatch(searchByNameActividades(query))
      setQuery("")
      console.log(query)
    }
  }

  return (
    <form className="flex w-80" onSubmit={handleSearch}>
      <Input
        type="text"
        placeholder="Buscar actividades"
        value={query}
        onKeyDown={handleKeyDown}
        onChange={e => setQuery(e.target.value)}
      />
      <Button className="mx-2" type="submit" variant={"outline"}>
        Buscar
      </Button>
    </form>
  )
}

export default SearchInputActividades
