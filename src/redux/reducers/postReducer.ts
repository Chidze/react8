import { PropertiesTypes, userActions, UserActionType } from "../action/userAction";

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface PostInitialState {
    post : Post[] | undefined
}
const initialState: PostInitialState = {
    post: []
}

export type PostActionType = ReturnType<
    PropertiesTypes<typeof userActions>
    >

const postReducer = (state = initialState, action: PostActionType) => {
  switch(action.type){
    case UserActionType.SET_POST:
    return{
        ...state,
        post: action.payload
    }
    default:
        return state
  }
}

export default postReducer;