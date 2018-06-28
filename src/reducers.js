import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import app from './AppReducers';

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  blacklist: ['routerReducer'],
};

// Combine all reducers into one root reducer
const reducers = combineReducers({
  routerReducer,
  app,
});

export default persistReducer(persistConfig, reducers);
