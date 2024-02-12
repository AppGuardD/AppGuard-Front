import { useNavigate } from "react-router-dom"
import swal from "sweetalert"
import { Button } from "@/components/ui/button"

const LogoutButton = () => {
  let user = JSON.parse(localStorage.getItem("USER-INFO") || "{}")

  const navigate = useNavigate()

  const logOut = () => {
    swal({
      title: "Logout!",
      text: "Has cerrado sesión",
      icon: "success",
      buttons: ["Volver"],
    })

    localStorage.clear()

    setTimeout(() => {
      navigate("/users")

      window.location.reload()
    }, 1500)
  }

  return (
    <Button
      className="transition ease-in-out delay-150 py-1 px-2 mx-6 hover:ring-2 ring-accent rounded"
      onClick={logOut}
    >
      Logout
    </Button>
  )
}

export default LogoutButton
