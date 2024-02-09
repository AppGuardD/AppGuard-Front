import { ReviewType } from "@/redux/action-types/reviewTypes";
import type { Action } from "@/redux/actions/reviewActions";

interface InitialState {
  comment: string;
  qualification: number;
}

const initialState: InitialState = {
  comment: "",
  qualification: 0,
};

const reviewReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ReviewType.GET:
      return {
        ...state,
        review: [...state.comment, state.qualification, ...action.payload],
      };

    case ReviewType.POST:
      return {
        ...state,
        review: [...state.comment, state.qualification, action.payload],
      };

    case ReviewType.DELETE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reviewReducer;
