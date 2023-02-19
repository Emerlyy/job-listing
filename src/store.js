import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filterReducer from "features/filter/filter-slice";
import positionReducer from "features/positions/position-slice";
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [
        FLUSH,
        PAUSE,
        PERSIST,
        PURGE,
        REHYDRATE,
        REGISTER]
    }
  })
});

export const persistor = persistStore(store);