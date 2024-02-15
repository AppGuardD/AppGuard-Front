import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminActividades from "@/features/Actividades/AdminActivity"
import { useEffect } from "react"
import { getMangrullos } from "@/redux/action-creators/mangrullos/getMangrullos"
import { cleanMangrullos } from "@/redux/action-creators/mangrullos/cleanMangrullos"
import { useAppDispatch } from "@/redux/hooks"
import AdminUsers from "@/features/Admin/Users/users"
import AdminOrders from "@/features/Admin/Orders/orders"
import AdminMangrullos from "@/features/Admin/Mangrullos/mangrullos-admin"

const Admin: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    let mounted = true
    const fetchData = async () => {
      await dispatch(getMangrullos())
      if (!mounted) {
        dispatch(cleanMangrullos())
      }
    }
    fetchData()
    return () => {
      mounted = false
    }
  }, [dispatch])

  return (
    <div className="flex m-8">
      <Tabs defaultValue="actividades" className="w-svw">
        <div className="flex justify-between">
          <span className="text-3xl">Panel de administrador</span>
          <TabsList>
            <TabsTrigger value="actividades">Actividades</TabsTrigger>
            <TabsTrigger value="mangrullos">Mangrullos</TabsTrigger>
            <TabsTrigger value="usuarios">Usuarios</TabsTrigger>
            <TabsTrigger value="ordenes">Ordenes</TabsTrigger>
          </TabsList>
        </div>
        <div>
          <TabsContent value="actividades" className="h-svh">
            <AdminActividades />
          </TabsContent>
          <TabsContent value="mangrullos" className="h-svh">
            <AdminMangrullos />
          </TabsContent>
          <TabsContent value="usuarios">
            <AdminUsers />
          </TabsContent>
          <TabsContent value="ordenes" className="h-svh">
            <AdminOrders />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

export default Admin
