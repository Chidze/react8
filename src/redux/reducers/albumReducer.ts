import { PropertiesTypes, userActions, UserActionType } from "../action/userAction";

export interface Album {
  userId: number,
  id: number,
  title: string
}

export interface AlbumInitialState {
    albums : [] | Album[]
}

const initialState : AlbumInitialState = {
    albums: []
}

export type AlbumActionType = ReturnType<
    PropertiesTypes<typeof userActions>
    >

const albumReducer = (state = initialState, action:AlbumActionType) => {
  switch(action.type){
    case UserActionType.SET_ALBUMS:
    return{
        ...state,
        albums: action.payload
    }
    default:
        return state
  }
}

export default albumReducer;