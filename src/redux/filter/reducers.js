import {FILTER_TODO} from "./types";

const initialState = 'SHOW_ALL';

const filterTodoReducer = (state= initialState, action) => {
  switch(action.type) {
    case FILTER_TODO:
      return action.filter
    default:
      return state
  }
}

export default filterTodoReducer;
