import {FILTER_TODO} from "./types";

export const FILTER_TYPE = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}

const initialState = FILTER_TYPE.SHOW_ALL;

const todoFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_TODO:
      return action.payload
    default:
      return state
  }
}

export default todoFilterReducer;