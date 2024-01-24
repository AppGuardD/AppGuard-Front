import {
  LOGIN,
  CLEAR_STATE, 
} from "./actions";

const initalState = {
  
}

const reducer = ( state = initalState, action)=>{
  switch(action.type){
    case LOGIN:
      return {
        ...state,
        access: action.payload,
      }
    
    case CLEAR_STATE:
      return  {

      }
    
    default:
      return {
        ...state,
      }
  }
}

export default reducer;