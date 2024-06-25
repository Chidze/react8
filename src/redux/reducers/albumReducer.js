import { userActionType } from "../action/userAction";

const initialState = {
    albums: []
}

const albumReducer = (state = initialState, action) => {
  switch(action.type){
    case userActionType.SET_ALBUMS:
    return{
        ...state,
        albums: action.payload
    }
    default:
        return state
  }
}

export default albumReducer;