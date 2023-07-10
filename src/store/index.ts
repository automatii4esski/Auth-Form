import { RootReducerType } from '../types/global';
import {
  SET_ABOUT_DATA,
  SET_FIRST_STEP_DATA,
  SET_SECOND_STEP_DATA,
  SET_THIRD_STEP_DATA,
} from './consts';
import { rootReducer } from './rootReducer';
import { createStore, compose, applyMiddleware, Middleware } from 'redux';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const test: Middleware<{}, RootReducerType> = (state) => (next) => (action) => {
  if (
    action.type === SET_ABOUT_DATA ||
    action.type === SET_FIRST_STEP_DATA ||
    action.type === SET_SECOND_STEP_DATA ||
    action.type === SET_THIRD_STEP_DATA
  ) {
    localStorage.setItem(action.type, JSON.stringify(action.payload));
  }
  next(action);
};

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(test))
);
