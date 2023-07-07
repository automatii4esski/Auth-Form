import { combineReducers } from 'redux';
import { aboutReducer } from './about/aboutReducer';
import { firstStepReducer } from './create/firstStep/firstStepReducer';
import { secondStepReducer } from './create/secondStep/secondStepReducer';
import { thirdStepReducer } from './create/thirdStep/thirdStepReducer';

export const rootReducer = combineReducers({
  aboutData: aboutReducer,
  firstStep: firstStepReducer,
  secondStep: secondStepReducer,
  thirdStep: thirdStepReducer,
});
