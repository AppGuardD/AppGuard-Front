import { ActionType } from "@/redux/action-types/googleLoginTypes";
import type { Action } from "@/redux/actions/googleLoginActions";

interface InitialState {
  token: string | null;
}

const initialState: InitialState = {
  token: "",
};

const googleLoginReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CLEAN:
      return { ...state, token: null }; // Limpiar el token

    case ActionType.GET:
      return {
        ...state,
        token: action.payload, // Establecer el token desde la acción
      };

    default:
      return state;
  }
};

    //  case ActionType.PUT:
    //    return (state = action.payload)
    // //

  
export default googleLoginReducer;
