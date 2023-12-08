import {composeWithDevTools} from "redux-devtools-extension";
import {combineReducers, createStore} from "redux";
import {todoReducer} from "./todo/reducers";
import filterTodoReducer from "./filter/reducers";

const rootReducer = combineReducers({
  todos: todoReducer,
  filterTodoReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());