import { combineReducers } from 'redux';
import { aboutReducer } from './about/aboutReducer';

export const rootReducer = combineReducers({
  aboutData: aboutReducer,
});
