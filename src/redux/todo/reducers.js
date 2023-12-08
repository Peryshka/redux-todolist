import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from "./types";

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        action.payload
      ]
    case TOGGLE_TODO :
      return state.map(todo => todo.id === action.payload ? {
        ...todo,
        isComplete: !todo.isComplete
      } : todo)
    case DELETE_TODO :
      return state.filter(todo => todo.id !== action.payload)
    default:
      return state
  }

}


