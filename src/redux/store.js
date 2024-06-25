import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension'
import commentReducer from "./reducers/commentReducer";
import albumReducer from "./reducers/albumReducer";

const rootReducer = combineReducers({
    todoReducer: todoReducer,
    commentReducer: commentReducer,
    albumReducer: albumReducer
})
const composeEnchancers = composeWithDevToolsDevelopmentOnly({
    trace: true,
    traceLimit: 25
})

const store = createStore (rootReducer, composeEnchancers());

export default store;