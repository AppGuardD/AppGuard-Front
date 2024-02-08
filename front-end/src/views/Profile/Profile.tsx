import { jwtDecode } from "jwt-decode"

interface JwtPayload {
  email: string
  userName: string
  // Add other properties based on your JWT structure
}

export const Profile: React.FC = () => {
  const token = localStorage.getItem("USER_INFO")

  const user: JwtPayload = jwtDecode(token || "")

  return (
    <div className="bg-darkblue-900 text-white p-8 rounded w-96">
      <h1 className="text-2xl font-semibold mb-4">
        Bienvenido, {user.userName}!
      </h1>
      <p className="text-2xl font-semibold mb-4">Email: {user.email}</p>
    </div>
  )
}
