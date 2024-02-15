import { ActionType } from "@/redux/action-types/userTypes"
import type {
  Action,
  AdminUserTypes,
  OrdersTypes,
} from "@/redux/actions/userActions"

interface InitialState {
  userInfo: []
  id: number
  userName: string
  email: string
  password: string
  typeIdentification: string
  numberIdentification: string
  rol: string
  state: string

  allUsers: AdminUserTypes[]
  allOrders: OrdersTypes[]
}

const initialState: InitialState = {
  userInfo: [],
  id: 0,
  userName: "",
  email: "",
  password: "",
  typeIdentification: "",
  numberIdentification: "",
  rol: "",
  state: "",

  allUsers: [],
  allOrders: [],
}

const sortUsers = (users: AdminUserTypes[]) => {
  const sorter = users.sort((a, b) => a?.id - b?.id)
  return sorter
}

const sortOrders = (orders: OrdersTypes[]) => {
  const sorter = orders.sort((a, b) => a?.id - b?.id)
  return sorter
}

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.DISABLE:
      return { ...state }

    case ActionType.GET_ADMIN:
      return { ...state, allUsers: sortUsers(action.payload) }

    case ActionType.GET_ORDERS:
      return { ...state, allOrders: sortOrders(action.payload) }

    case ActionType.POST:
      return {
        ...state,
        user: [...state.userInfo, action.payload],
      }

    default:
      return state
  }
}

export default userReducer
