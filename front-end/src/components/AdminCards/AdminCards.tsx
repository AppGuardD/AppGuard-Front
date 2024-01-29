import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "../ui/button"

const AdminCards: React.FC = () => {
  return (
    <div>
      <Card className="aspect-[4/3] max-w-xs">
        <CardHeader>
          <CardTitle>Mangrullos</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col">
          <Button className="mb-4 rounded" variant="outline">
            Crear Mangrullos
          </Button>
          <Button className="mb-4 rounded" variant="outline">
            Modificar Mangrullos
          </Button>
          <Button className="mb-4 rounded" variant="outline">
            Eliminar Mangrullos
          </Button>
        </CardContent>
      </Card>
      <Card className="aspect-[4/3] max-w-xs">
        <CardHeader>
          <CardTitle>Consejos</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col">
          <Button className="mb-4 rounded" variant="outline">
            Crear Consejos
          </Button>
          <Button className="mb-4 rounded" variant="outline">
            Modificar Consejos
          </Button>
          <Button className="mb-4 rounded" variant="outline">
            Eliminar Consejos
          </Button>
        </CardContent>
      </Card>
      <Card className="aspect-[4/3] max-w-xs">
        <CardHeader>
          <CardTitle>Actividades</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col">
          <Button className="mb-4 rounded" variant="outline">
            Crear Actividades
          </Button>
          <Button className="mb-4 rounded" variant="outline">
            Modificar Actividades
          </Button>
          <Button className="mb-4 rounded" variant="outline">
            Eliminar Actividades
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminCards
