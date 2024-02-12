// import { ActionType } from "@/redux/action-types/cartTypes";
// import type { CartTypes, Action } from "@/redux/actions/cartActions";

// interface InitialState {
//   carrito: CartTypes;
// }

// const initialState: InitialState = {
//   carrito: {
//     id: 0,
//     fecha: "",
//     userId: 0,
//     total: 0,
//     detalle_carrito: [],
//   },
// };

// const sortDetalleCarrito = (carrito: CartTypes) => {
//   return {
//     ...carrito,
//     detalle_carrito: carrito.detalle_carrito?.sort((a, b) => a?.id - b?.id),
//   };
// };

// const cartReducer = (state = initialState, action: Action) => {
//   switch (action.type) {
//     case ActionType.ADD_TO_CART:
//       return { ...state, carrito: sortDetalleCarrito(action.payload) };

//     case ActionType.GET_CART:
//       return { ...state, carrito: sortDetalleCarrito(action.payload) };

//     case ActionType.DELETE_ITEM:
//       return { ...state, carrito: sortDetalleCarrito(action.payload) };

//     case ActionType.REMOVE_FROM_CART:
//       return {
//         ...state,
//         carrito: sortDetalleCarrito(action.payload),
//       };

//     default:
//       return state;
//   }
// };

// export default cartReducer;
