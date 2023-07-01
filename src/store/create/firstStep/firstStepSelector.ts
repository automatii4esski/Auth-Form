import {
  FirstStepDataStateType,
  FirstStepDataType,
} from '../../../types/formSteps';
import { RootReducerType } from '../../../types/global';

export const selectFirstStepData = function (
  state: RootReducerType
): FirstStepDataStateType {
  return state.firstStep;
};
