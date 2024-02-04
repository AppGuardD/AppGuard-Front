import PagesActividades from "./pages"
import SearchInputActividades from "./search-input"
import SelectFilterActividades from "./select-filter"

const FilterActividades: React.FC = () => {
  return (
    <div className="flex justify-evenly">
      <SearchInputActividades />
      <SelectFilterActividades />
      <PagesActividades />
    </div>
  )
}

export default FilterActividades
