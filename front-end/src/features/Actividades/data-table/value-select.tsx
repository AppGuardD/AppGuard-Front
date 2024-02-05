import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ValueProps {
  value?: string
}

const ValueSelectActividades: React.FC<ValueProps> = props => {
  const value = props.value

  return (
    <>
      <Select defaultValue={value}>
        <SelectTrigger className="col-span-3">
          <SelectValue placeholder="Valor" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Gratis">Gratis</SelectItem>
          <SelectItem value="Pago">Pago</SelectItem>
        </SelectContent>
      </Select>
    </>
  )
}

export default ValueSelectActividades
