import { ThirdStepDataStateType } from '../../../types/formSteps';
import { RootReducerType } from '../../../types/global';

export const selectThirdStepData = function (
  state: RootReducerType
): ThirdStepDataStateType {
  return state.thirdStep;
};
