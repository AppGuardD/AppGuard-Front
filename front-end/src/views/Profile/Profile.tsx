import { jwtDecode } from "jwt-decode"
import LogoutButton from "../../features/Auth/Login/logout-button"

interface JwtPayload {
  email: string
  userName: string
  rol: string
}

export const Profile: React.FC = () => {
  const token = localStorage.getItem("TOKEN")
  const user: JwtPayload = jwtDecode(token || "")
  console.log(user)

  return (
    <div className="p-8 rounded w-96 h-svh">
      <h1 className="text-2xl font-semibold mb-4">
        Bienvenido, {user.userName}!
      </h1>
      <p className="text-2xl font-semibold mb-4">Email: {user.email}</p>
      <p className="text-2xl font-semibold mb-4">Rol: {user.rol}</p>
      <LogoutButton />
    </div>
  )
}
