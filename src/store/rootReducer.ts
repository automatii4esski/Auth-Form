import { combineReducers } from 'redux';
import { aboutReducer } from './about/aboutReducer';
import { firstStepReducer } from './create/firstStep/firstStepReducer';
import { secondStepReducer } from './create/secondStep/secondStepReducer';

export const rootReducer = combineReducers({
  aboutData: aboutReducer,
  firstStep: firstStepReducer,
  secondStep: secondStepReducer,
});
