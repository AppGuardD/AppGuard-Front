import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const ValueSelectActividades: React.FC = () => {
  return (
    <>
      <Select>
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
