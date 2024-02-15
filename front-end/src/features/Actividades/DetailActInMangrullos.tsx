import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import type { DetailActTypes } from "@/redux/actions/actividadesActions"

interface Props {
  actividades: DetailActTypes[]
}

const DetailActInMangrullos: React.FC<Props> = ({ actividades }) => {
  console.log(actividades)
  return (
    <div className="w-max mx-auto">
      <div className="grid grid-cols-2 gap-4">
        {actividades?.map(item => (
          <Card className="aspect-video w-96 pt-4" key={item.id}>
            <CardTitle className="capitalize mx-auto w-max pb-2 overflow-hidden">
              <p className="object-cover">{item.activityName}</p>
            </CardTitle>
            <CardContent className="aspect-video overflow-hidden h-48 rounded mx-auto mb-4">
              <img
                className="aspect-video object-cover h-48 rounded"
                src={item.image}
                alt=""
              />
            </CardContent>
            <CardFooter className="flex flex-col">
              <p>Tipo: {item.type}</p>
              <p>Valor: ${item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default DetailActInMangrullos
