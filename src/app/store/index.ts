import { combineReducers, configureStore, AnyAction, Reducer } from '@reduxjs/toolkit';
import { ThunkAction, Action, CombinedState } from '@reduxjs/toolkit';

import assets from './slices/assetSlice';


// Define the rootReducer function that combines sync and async reducers
const rootReducer = (asyncReducers: { [key: string]: Reducer<any, AnyAction> }) => {
  return combineReducers({
    // Add your sync reducers here...
    // syncReducer1,
    // syncReducer2,
    ...asyncReducers,
  });
};

// Create the store
const store = configureStore({
  reducer: rootReducer({
	assets,
  }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV === 'development',
});

// Define asyncReducers as an empty object
const asyncReducers: { [key: string]: Reducer<any, AnyAction> } = {};

// Define injectReducer to add or replace reducers dynamically
export const injectReducer = (key: string, reducer: Reducer<any, AnyAction>) => {
  asyncReducers[key] = reducer;
  store.replaceReducer(rootReducer(asyncReducers));
};

// Create a custom store with asyncReducers property
const customStore: typeof store & { asyncReducers: { [key: string]: Reducer<any, AnyAction> } } = {
  ...store,
  asyncReducers,
};

// Define the RootState type for the store
export type RootState = ReturnType<typeof store.getState>;


// Define the AppThunk type for thunk actions
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default customStore;
