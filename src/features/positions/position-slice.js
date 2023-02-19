import { createSlice } from "@reduxjs/toolkit";

const positionSlice = createSlice({
  name: 'position',
  initialState: [],
  reducers: {
    addPositions: (state, action) => action.payload,
  }
});

export const selectAllPositions = (state) => state.positions;

export const selectVisiblePositions = (state, filters = []) => {
  if (filters.length === 0) return state.positions;

  return state.positions.filter(pos => {
    const posFilters = [].concat(pos.role, pos.level, pos.languages, ...pos.tools);

    return filters.every(filter => posFilters.includes(filter));
  })
}

export const { addPositions } = positionSlice.actions;

export default positionSlice.reducer;