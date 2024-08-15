import { configureStore } from '@reduxjs/toolkit';
import albumReducer from './slices/albumSlice';
import todoReducer from './slices/todoSlice';
import commentReducer from './slices/commentSlice';
import postReducer from './slices/postSlice';

export const store = configureStore({
    reducer: {
        albumReducer: albumReducer,
        todoReducer: todoReducer,
        commentReducer: commentReducer,
        postReducer: postReducer
    },
  })


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStateType = ReturnType<typeof store.getState>;