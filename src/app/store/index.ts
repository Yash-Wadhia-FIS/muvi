import { configureStore, Middleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'products', 'auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const loggerMiddleware = createLogger();

const middleware: Middleware[] = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(loggerMiddleware);
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
