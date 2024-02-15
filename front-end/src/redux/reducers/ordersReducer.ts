import {ActionType} from "../action-types/ordersTypes"
import { Order } from '../actions/orderActions'; 

  
  interface OrderState {
    orders: Order[]; 
    loading: boolean;
    error: string | null;
  }
  
  const initialState: OrderState = {
    orders: [],
    loading: false,
    error: null
  };
  
  const orderReducer = (state = initialState, action: any): OrderState => {
    switch (action.type) {
      case ActionType.GET_USER_ORDERS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case ActionType.GET_USER_ORDERS_SUCCESS:
        return {
          ...state,
          loading: false,
          orders: action.payload,
          error: null
        };
      case ActionType.GET_USER_ORDERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default orderReducer;
  