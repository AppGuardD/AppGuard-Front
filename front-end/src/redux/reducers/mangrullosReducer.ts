import { ActionType } from "@/redux/action-types/mangrullosTypes"
import type {
  DetailMangrulloType,
  Mangrullo,
  Action,
} from "@/redux/actions/mangrullosActions"

interface InitialState {
  totalPages: number
  mangrullos: Mangrullo[]
  detail: DetailMangrulloType
}

const initialState: InitialState = {
  totalPages: 0,
  mangrullos: [],
  detail: {
    activity: [],
    id: 0,
    dangerousness: 0,
    qualification: 0,
    zone: "",
    state: "",
    image: "",
  },
}

const mangrullosReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CLEAN:
      return { ...state, mangrullos: action.payload }

    case ActionType.GET:
      return { ...state, mangrullos: [...state.mangrullos, ...action.payload] }

    case ActionType.GET_ID:
      return {
        ...state,
        detail: action.payload,
      }
    case ActionType.DISABLE:
      return { ...state }
    //
    // case ActionType.POST:
    //   return (state = action.payload)
    //
    // case ActionType.PUT:
    //   return (state = action.payload)
    //

    default:
      return state
  }
}

export default mangrullosReducer
