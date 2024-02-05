import AdminMangrullos from "@/features/Mangrullos/AdminMangrullos"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminActividades from "@/features/Actividades/AdminActivity"

const Admin: React.FC = () => {
  return (
    <div className="flex m-8 h-svh">
      <Tabs defaultValue="account" className="w-svw">
        <div className="flex justify-between">
          <span className="text-3xl">Panel de administrador</span>
          <TabsList>
            <TabsTrigger value="actividades">Actividades</TabsTrigger>
            <TabsTrigger value="mangrullos">Mangrullos</TabsTrigger>
            <TabsTrigger value="consejos">Consejos</TabsTrigger>
          </TabsList>
        </div>
        <div>
          <TabsContent value="actividades">
            <AdminActividades />
          </TabsContent>
          <TabsContent value="mangrullos">
            <AdminMangrullos />
          </TabsContent>
          <TabsContent value="consejos">3</TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

export default Admin
