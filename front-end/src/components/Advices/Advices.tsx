import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Advices: React.FC = () => {
  return (
    <Card className="flex aspect-[3/1] rounded h-60 mb-8">
      <CardHeader className="basis-1/3">
        <div className="overflow-hidden rounded aspect-square h-48">
          <img
            className="object-cover aspect-square h-48"
            src="https://i0.wp.com/www.serproicolombia.com/wp-content/uploads/2021/06/Fotolia_56120862_L.jpg?fit=2356%2C1571&ssl=1"
            alt=""
          />
        </div>
      </CardHeader>
      <CardContent className="py-6 pl-0 basis-2/3">
        <CardTitle>Consejo #1</CardTitle>
        <p>Descripcion del consejo</p>
      </CardContent>
    </Card>
  )
}

export default Advices
