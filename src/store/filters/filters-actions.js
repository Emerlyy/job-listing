export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = "REMOVE_FILTER";
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

export const addFilter = (filter) => {
  return {
    type: ADD_FILTER,
    payload: filter
  }
}

export const removeFilter = (filter) => {
  return {
    type: REMOVE_FILTER,
    payload: filter
  }
}

export const clearFilters = {
  type: CLEAR_FILTERS
};