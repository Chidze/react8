import { userActionType } from "../action/userAction";

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
  switch(action.type){
    case userActionType.SET_TODOS:
    return{
        ...state,
        todos: action.payload
    }
    default:
        return state
  }
}

export default todoReducer;