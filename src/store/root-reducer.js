import { combineReducers } from "redux";

import { filtersReducer } from "./filters/filters-reducers";
import { positionReducer } from "./positions/positions-reducers";

const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filtersReducer
});

export default rootReducer;