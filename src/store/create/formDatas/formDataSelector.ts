import { SecondStepDataStateType } from '../../../types/formSteps';
import { RootReducerType } from '../../../types/global';

export const selectSecondStepData = function (
  state: RootReducerType
): SecondStepDataStateType {
  return state.secondStep;
};
