import { jwtDecode } from "jwt-decode"
import LogoutButton from "../../features/Auth/Login/logout-button"
import { EditUserData } from "./editUser"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { getUserOrders } from "@/redux/action-creators/carrito/userOrders"

interface JwtPayload {
  email: string
  userName: string
  rol: string
  name?: string
}

export const Profile: React.FC = () => {
  const orders = useAppSelector(state => state.orderReducer.orders)
  const token = localStorage.getItem("TOKEN")
  const userId = localStorage.getItem("USERID")

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUserOrders({ userId: userId, token: token }))
  }, [dispatch, userId, token])

  let user: JwtPayload | null = null

  if (token) {
    user = jwtDecode(token) as JwtPayload
  } else {
    const googleCredential = localStorage.getItem("TOKEN")
    if (googleCredential) {
      user = jwtDecode(googleCredential)
      console.log(user?.email, user?.rol, user?.userName)
    }
  }

  if (!user) {
    return <div>No se pudo cargar la información del usuario.</div>
  }

  return (
    <div className="p-8 rounded w-96 h-svh">
      <h1 className="text-2xl font-semibold mb-4">
        Bienvenido, {user.userName || user.name}!
      </h1>
      <p className="text-2xl font-semibold mb-4">Email: {user.email}</p>
      <p className="text-2xl font-semibold mb-4">
        Rol: {user.rol || " Cliente"}
      </p>
      <LogoutButton />
      <EditUserData />
      <div>
        {orders?.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}
