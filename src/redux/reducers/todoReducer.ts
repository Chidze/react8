import { PropertiesTypes, userActions, UserActionType } from "../action/userAction";

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

export interface TodoInitialState {
    todos : Todo[] | []
}

const initialState: TodoInitialState = {
    todos: []
}

export type TodoActionType = ReturnType<
    PropertiesTypes<typeof userActions>
    >

const todoReducer = (state = initialState, action: TodoActionType) : TodoInitialState => {
  switch(action.type){
    case UserActionType.SET_TODOS:
    return{
        ...state,
        todos: action.payload
    }
    default:
        return state
  }
}

export default todoReducer;