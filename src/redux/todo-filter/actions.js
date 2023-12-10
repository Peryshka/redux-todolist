import {FILTER_TODO} from './types';

const todoFilter = (filter) => ({
  type: FILTER_TODO,
  payload: filter

})

export {todoFilter}