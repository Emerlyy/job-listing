const { createSlice } = require("@reduxjs/toolkit");

const filterSlice = createSlice({
  name: 'filter',
  initialState: [],
  reducers: {
    addFilter: (state, action) => { !state.includes(action.payload) && state.push(action.payload) },
    removeFilter: (state, action) => state.filter(filter => filter !== action.payload),
    clearFilters: () => [],
  }
});


export const selectAllFilters = (state) => state.filters;

export const {
  addFilter,
  removeFilter,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;