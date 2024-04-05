import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import {reduxStorage} from './storage';

// Slices
import tasksSlice from './tasksSlice';
import userSlice from './userSlice';
import dummyNetwokSlice from './dummyNetwork';

const rootReducer = combineReducers({
  todos: tasksSlice,
  user: userSlice,
  dummyNetwork: dummyNetwokSlice,
});

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Додайте redux-flipper middleware у режимі розробника
const setupStore = () => {
  const isDevelopment = true;
  let middlewareEnhancer;

  if (isDevelopment) {
    const createDebugger = require('redux-flipper').default;
    middlewareEnhancer = getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(createDebugger());
  } else {
    middlewareEnhancer = getDefaultMiddleware =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      });
  }

  const store = configureStore({
    reducer: persistedReducer,
    middleware: middlewareEnhancer,
  });

  const persistor = persistStore(store);

  return {store, persistor};
};

const {store, persistor} = setupStore();

export {store, persistor};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
