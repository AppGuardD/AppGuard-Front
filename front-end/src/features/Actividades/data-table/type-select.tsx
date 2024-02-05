import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface TypeProps {
  type?: string
}

const TypeSelectActividades: React.FC<TypeProps> = props => {
  const value = props.type

  return (
    <>
      <Select defaultValue={value}>
        <SelectTrigger className="col-span-3">
          <SelectValue placeholder="Tipo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Deportivo">Deportivo</SelectItem>
          <SelectItem value="Sanitario">Sanitario</SelectItem>
          <SelectItem value="Cultural">Cultural</SelectItem>
        </SelectContent>
      </Select>
    </>
  )
}

export default TypeSelectActividades
