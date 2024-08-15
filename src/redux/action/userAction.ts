// import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
// import { PostService, TodoService, CommentService, AlbumService } from '../../services/apiService';
import { Album } from '../reducers/albumReducer';
import { Post } from '../reducers/postReducer';
import { Todo } from '../reducers/todoReducer';
import {  AppStateType } from '../../redux/reduxTK/store';

export interface SetTodosAction {
    type: UserActionType.SET_TODOS;
    payload: Todo[];
}

export interface SetCommentsAction {
    type: UserActionType.SET_COMMENTS;
    payload: Comment[];
}

export interface SetAlbumsAction {
    type: UserActionType.SET_ALBUMS;
    payload: Album[];
}

export interface SetPostsAction {
    type: UserActionType.SET_POST;
    payload: Post[];
}
export type UserActions = 
    | SetTodosAction
    | SetCommentsAction
    | SetAlbumsAction
    | SetPostsAction;

export enum UserActionType {
SET_TODOS = 'SET TODOS',
SET_COMMENTS = 'SET COMMENTS',
SET_ALBUMS = 'SET ALBUMS',
SET_POST = 'SET POST'
}

export type PropertiesTypes<T> = T extends { [ key:string]: infer U}
? U
: never;



export type UserActionsType = ReturnType<
    PropertiesTypes<typeof userActions>
>

export type GetThunkType = ThunkAction<Promise<void>, AppStateType, null, UserActionsType>
export type SetThunkType = ThunkAction< void, AppStateType, null, UserActionsType>

export const userActions = {
    setTodos : (todos: Todo[]) : SetTodosAction => ( { type: UserActionType.SET_TODOS, payload: todos }),
    setComments : (comments: Comment[]) : SetCommentsAction => ( { type: UserActionType.SET_COMMENTS, payload: comments }),
    setAlbums : (albums: Album[]) : SetAlbumsAction => ( { type: UserActionType.SET_ALBUMS, payload: albums }),
    setPost : (post: Post[]) : SetPostsAction => ( { type: UserActionType.SET_POST, payload: post } )
}

// export const getTodoThunk = () : SetThunkType => (dispatch) => {
//     TodoService.getTodos(dispatch);
// }

// export const getAlbumsThunk = () : SetThunkType => (dispatch) => {
//     AlbumService.getAlbums(dispatch);
// } 
 
// export const getCommentsThunk = () : SetThunkType => (dispatch) => {
//     CommentService.getComments(dispatch);
// } 

// export const getPostThunk = (postId: number): GetThunkType => async dispatch => {
//     try {
//       const post = await PostService.getPost(postId);
//       dispatch({ type: UserActionType.SET_POST, payload: post });
//     } catch (error) {
//       console.error('Error fetching post:', error);
//       throw error;
//     }
// } 

