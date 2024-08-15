// import {applyMiddleware, combineReducers, createStore } from "redux";
// import todoReducer from "./reducers/todoReducer";
// import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension'
// import commentReducer from "./reducers/commentReducer";
// import albumReducer from "./reducers/albumReducer";
// import { thunk } from "redux-thunk";
// import postReducer from "./reducers/postReducer";

// const rootReducer = combineReducers({
//     todoReducer: todoReducer,
//     commentReducer: commentReducer,
//     albumReducer: albumReducer,
//     postReducer: postReducer
// })
// const composeEnchancers = composeWithDevToolsDevelopmentOnly({
//     trace: true,
//     traceLimit: 25
// })

// const store: any = createStore (rootReducer, composeEnchancers(applyMiddleware(thunk))); 

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppStateType = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

// export default store;
