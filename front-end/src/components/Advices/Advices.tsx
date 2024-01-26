import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Advices: React.FC = () => {
  return (
    <Card className="aspect-[3/1] rounded">
      <div className="flex">
        <CardHeader className="basis-1/3">
          <div className="border-2 border-dotted max-h-[500px] aspect-square">
            <img
              src="https://i0.wp.com/www.serproicolombia.com/wp-content/uploads/2021/06/Fotolia_56120862_L.jpg?fit=2356%2C1571&ssl=1"
              alt=""
            />
            <p>esto es una imagen</p>
          </div>
        </CardHeader>
        <CardContent className="pt-6 basis-2/3">
          <CardTitle>Consejo #1</CardTitle>
          <p>Descripcion del consejo</p>
        </CardContent>
      </div>
    </Card>
  )
}

export default Advices
