import { combineReducers } from 'redux';
import { aboutReducer } from './about/aboutReducer';
import { firstStepReducer } from './create/firstStep/firstStepReducer';
import { activeStepReducer } from './create/activeStep/activeStepReducer';

export const rootReducer = combineReducers({
  aboutData: aboutReducer,
  firstStep: firstStepReducer,
  activeStep: activeStepReducer,
});
