import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import type { ActividadType } from "@/redux/actions/mangrullosActions"

const DetailActividad: React.FC<ActividadType> = ({ activity }) => {
  return (
    <div>
      <p className="text-2xl">Actividades relacionadas con este mangrullo.</p>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {activity?.map(activity => (
          <Card className="p-4" key={activity.activityName}>
            <CardTitle className="capitalize">
              {activity.activityName}
            </CardTitle>
            <CardContent>
              <img alt="" src={activity.image} />
            </CardContent>
            <CardFooter className="flex justify-between">
              <p>{activity.type}</p>
              <p>${activity.price}</p>
              <p>{activity.state}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default DetailActividad
