import { useNavigate } from "react-router-dom"
import swal from "sweetalert"
import { Button } from "@/components/ui/button"

const LogoutButton = () => {
  JSON.parse(localStorage.getItem("USER-INFO") || "{}")
  const navigate = useNavigate()

  const logOut = () => {
    swal({
      title: "Logout!",
      text: "Has cerrado sesión",
      icon: "success",
      buttons: [false],
    })

    localStorage.clear()

    setTimeout(() => {
      navigate("/users")

      window.location.reload()
    }, 1000)
  }

  return (
    <Button variant={"outline"} onClick={logOut}>
      Logout
    </Button>
  )
}

export default LogoutButton
