import { Button } from "@/components/ui/button"
import PagesActividades from "./pages"
import SearchInputActividades from "./search-input"
import SelectFilterActividades from "./select-filter"
import { useNavigate } from "react-router-dom"

const FilterActividades: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="flex mx-7 mb-4">
      <div className="basis-1/3 flex">
        <Button
          onClick={() => navigate("/home")}
          className="mr-4"
          variant={"outline"}
        >
          Atras
        </Button>
        <p className="text-3xl">Todas las Actividades</p>
      </div>
      <div className="flex basis-1/3">
        <PagesActividades />
      </div>
      <div className="flex basis-1/3 justify-evenly">
        <SearchInputActividades />
        <SelectFilterActividades />
      </div>
    </div>
  )
}

export default FilterActividades
