import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import localForage from 'localforage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: localForage,
  whitelist: ['usuarioState', 'applicationErrorState'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = persistedReducer;
    store.replaceReducer(newRootReducer);
  });
}
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { store, persistor };
