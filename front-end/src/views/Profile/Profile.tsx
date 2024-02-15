import { jwtDecode } from "jwt-decode"
import LogoutButton from "../../features/Auth/Login/logout-button"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { getUserOrders } from "@/redux/action-creators/carrito/userOrders"

interface JwtPayload {
  email: string
  userName: string
  rol: string
}

export const Profile: React.FC = () => {
  const orders = useAppSelector(state => state.orderReducer.orders)
  const token = localStorage.getItem("TOKEN")
  const userId = localStorage.getItem("USERID")
  const user: JwtPayload = jwtDecode(token || "")
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUserOrders({ userId: userId, token: token }))
  }, [dispatch, userId, token])

  return (
    <div className="p-8 rounded w-96 h-svh">
      <h1 className="text-2xl font-semibold mb-4">
        Bienvenido, {user.userName}!
      </h1>
      <p className="text-2xl font-semibold mb-4">Email: {user.email}</p>
      <p className="text-2xl font-semibold mb-4">Rol: {user.rol}</p>
      <LogoutButton />
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
