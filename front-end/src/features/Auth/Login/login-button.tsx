import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useAppSelector } from "@/redux/hooks"

const LoginButton = () => {
  const token = useAppSelector(state => state.loginReducer.token)
  const navigate = useNavigate()
  const { toast } = useToast()

  const logInHandler = () => {
    if (token) {
      toast({
        title: "AppGuard",
        description: "Has iniciado sesion.",
      })
      navigate("/profile")
      window.location.reload()
    } else {
      toast({
        title: "AppGuard",
        description: "Email o password incorrecto",
      })
    }
  }

  return (
    <Button type="submit" variant={"secondary"} onClick={logInHandler}>
      Iniciar Sesion
    </Button>
  )
}

export default LoginButton
