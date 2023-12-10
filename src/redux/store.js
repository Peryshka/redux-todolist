import {composeWithDevTools} from "redux-devtools-extension";
import {combineReducers, createStore} from "redux";
import {todoReducer} from "./todo/reducers";
import todoFilterReducer from "../redux/todo-filter/reducers";

const rootReducer = combineReducers({
  todos: todoReducer,
  todoFilter: todoFilterReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());