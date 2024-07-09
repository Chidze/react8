import { PropertiesTypes, userActions, UserActionType } from "../action/userAction";

export interface Comment{
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}
export interface CommentInitialState {
    comments : [] | Comment[]
}

const initialState: CommentInitialState = {
    comments: []
}

export type CommentActionType = ReturnType<
    PropertiesTypes<typeof userActions>
    >

const commentReducer = (state = initialState, action: CommentActionType) => {
  switch(action.type){
    case UserActionType.SET_COMMENTS:
    return{
        ...state,
        comments: action.payload
    }
    default:
        return state
  }
}

export default commentReducer;