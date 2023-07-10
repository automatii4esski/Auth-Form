import { Dispatch } from 'react';
import { ActionType, RootReducerType } from '../types/global';
import { rootReducer } from './rootReducer';
import {
  createStore,
  compose,
  applyMiddleware,
  AnyAction,
  Middleware,
} from 'redux';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const test: Middleware<{}, RootReducerType> = (state) => (next) => (action) => {
  localStorage.setItem(action.type, JSON.stringify(action.payload));
  next(action);
};

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(test))
);
