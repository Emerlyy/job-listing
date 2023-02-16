import { legacy_createStore } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import rootReducer from './root-reducer';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = legacy_createStore(persistedReducer);

export default store;
export const persistor = persistStore(store);