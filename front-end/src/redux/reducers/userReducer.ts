import { ActionType } from "@/redux/action-types/userTypes";
import type { Action, UserTypes } from "@/redux/actions/userActions";

interface InitialState {
  userInfo:[]
  id: number;
  userName: string;
  email: string;
  password: string;
  typeIdentification: string;
  numberIdentification: string;
  rol: string;

  state: string;
  detail?: UserTypes;
  token?: string;
}

const initialState: InitialState = {
  userInfo:[],
  id: 2,
  userName: "",
  email: "",
  password: "",
  typeIdentification: "",
  numberIdentification: "",
  rol: "",

  state: "",
  //detail?: UserTypes;
  token: "",
};

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CLEAN:
      return { ...state, user: action.payload };

    case ActionType.GET:
      return { ...state, user: action.payload };

    case ActionType.GET_ID:
      return {
        ...state,
        detail: action.payload,
      };

    case ActionType.DISABLE:
      return { ...state };

    case ActionType.POST:
      return {
        ...state,
        user: [...state.userInfo, action.payload],
      };

    //  case ActionType.PUT:
    //    return (state = action.payload)
    // //

    default:
      return state;
  }
};

export default userReducer;
