import { combineReducers, Reducer } from 'redux';

export interface RootState {
  // Define the state shape of your root reducer here
  // For example:
  // someReducer: SomeState;
}

const rootReducer = (asyncReducers: Record<string, Reducer>) => {
  return combineReducers<RootState>({
    ...asyncReducers,
  });
};

export default rootReducer;
