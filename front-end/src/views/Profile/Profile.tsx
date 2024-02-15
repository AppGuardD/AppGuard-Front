import { jwtDecode } from "jwt-decode"
import LogoutButton from "../../features/Auth/Login/logout-button"
import { updateUser } from "@/redux/action-creators/user/putUser"
import { EditUserData } from "./editUser"
interface JwtPayload {
  email: string
  userName: string
  rol: string
  name?:string
}

export const Profile: React.FC = () => {
  let user: JwtPayload | null = null;
  const token = localStorage.getItem("TOKEN")
  if (token) {
    user = jwtDecode(token) as JwtPayload;
  } else {
    
    const googleCredential = localStorage.getItem('TOKEN');
    if (googleCredential) {
     user = jwtDecode(googleCredential);
     console.log(user?.email,user?.rol,user?.userName)
    }
  }

  if (!user) {
    return <div>No se pudo cargar la información del usuario.</div>;
  }

  return (
    <div className="p-8 rounded w-96 h-svh">
      <h1 className="text-2xl font-semibold mb-4">
        Bienvenido, {user.userName || user.name}!
      </h1>
      <p className="text-2xl font-semibold mb-4">Email: {user.email}</p>
      <p className="text-2xl font-semibold mb-4">Rol: {user.rol ||' Cliente'}</p>
      <LogoutButton />
      <EditUserData/>
    </div>
  )
}
