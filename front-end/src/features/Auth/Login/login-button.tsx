import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useEffect } from "react"

const LoginButton = () => {
  const token = localStorage.getItem("TOKEN")
  const navigate = useNavigate()
  const { toast } = useToast()

  useEffect(() => {
    if (token) {
      toast({
        title: "AppGuard",
        description: "Has iniciado sesion.",
      })
      setTimeout(() => {
        navigate("/home")
      }, 1000)
    }
  }, [token, navigate, toast])

  return (
    <Button className="mr-auto" type="submit" variant={"secondary"}>
      Iniciar Sesion
    </Button>
  )
}

export default LoginButton
