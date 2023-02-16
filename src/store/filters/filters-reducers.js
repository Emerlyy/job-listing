import { ADD_FILTER, CLEAR_FILTERS, REMOVE_FILTER } from "./filters-actions";

export const filtersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER:
      if (!state.includes(action.payload)) {
        return [...state, action.payload];
      }
      return state;
    case REMOVE_FILTER:
      return state.filter(filter => filter !== action.payload);
    case CLEAR_FILTERS:
      return [];
    default:
      return state;
  }
}