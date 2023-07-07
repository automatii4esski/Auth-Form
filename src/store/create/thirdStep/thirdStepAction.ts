import { ThirdStepDataStateType } from '../../../types/formSteps';
import { ActionType } from '../../../types/global';
import { SET_THIRD_STEP_DATA } from '../../consts';

export const setThirdStepData = function (
  data: ThirdStepDataStateType
): ActionType {
  return {
    type: SET_THIRD_STEP_DATA,
    payload: data,
  };
};
