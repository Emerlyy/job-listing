import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filterSlice from "features/filter/filter-slice";
import positionSlice from "features/positions/position-slice";
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  positions: positionSlice,
  filters: filterSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    ignoreActions: [
      FLUSH,
      PAUSE,
      PERSIST,
      PURGE,
      REHYDRATE,
      REGISTER],
  })
});





export const persistor = persistStore(store);