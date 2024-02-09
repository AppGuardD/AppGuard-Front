import { ActionType } from "@/redux/action-types/cartTypes";
import type { CartTypes, Action} from "@/redux/actions/cartActions";

interface InitialState {
  carrito: CartTypes
}

const initialState: InitialState = {
  carrito: {
    id: 0,
    fecha: "",
    userId: 0,
    total: 0,
    detalle_carrito: []
  }
}

const cartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return { ...state, carrito: action.payload };

    case ActionType.GET_CART:
      return { ...state, carrito: action.payload };

    case ActionType.DELETE_ITEM:
      // Assuming the payload contains the updated cart items
      return { ...state, carrito: action.payload };

    case ActionType.REMOVE_FROM_CART:
      return {
        ...state,
        carrito: action.payload
      };

    default:
      return state
  }
}

export default cartReducer;
