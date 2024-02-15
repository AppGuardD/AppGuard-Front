import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LoginForm from "../../features/Auth/Login/Login"
import CreateUserForm from "../../features/Auth/Register/Register"
import { useAtom } from "jotai"
import { tabAtom } from "./tabAtom"

const UsersView: React.FC = () => {
  const [tab, setTab] = useAtom(tabAtom)

  console.log(tab)
  return (
    <>
      <Tabs value={tab} className="ml-8" defaultValue="login">
        <TabsList>
          <TabsTrigger onClick={() => setTab("login")} value="login">
            Iniciar Sesion
          </TabsTrigger>
          <TabsTrigger onClick={() => setTab("signin")} value="signin">
            Registrarse
          </TabsTrigger>
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
