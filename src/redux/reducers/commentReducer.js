import { userActionType } from "../action/userAction";

const initialState = {
    comments: []
}

const commentReducer = (state = initialState, action) => {
  switch(action.type){
    case userActionType.SET_COMMENTS:
    return{
        ...state,
        comments: action.payload
    }
    default:
        return state
  }
}

export default commentReducer;