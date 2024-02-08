import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from "../../features/Auth/Login/Login"
import CreateUserForm from "../../features/Auth/Register/Register"

const UsersView: React.FC = () => {
  return (
    <>
      <Tabs className="ml-8" defaultValue="login">
        <TabsList>
          <TabsTrigger value="login">Iniciar Sesion</TabsTrigger>
          <TabsTrigger value="signin">Registrarse</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="signin">
          <CreateUserForm />
        </TabsContent>
      </Tabs>
    </>
  )
}

export default UsersView
