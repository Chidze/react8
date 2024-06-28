import { userActionType } from "../action/userAction";

const initialState = {
    post: []
}

const postReducer = (state = initialState, action) => {
  switch(action.type){
    case userActionType.SET_POST:
    return{
        ...state,
        post: action.payload
    }
    default:
        return state
  }
}

export default postReducer;