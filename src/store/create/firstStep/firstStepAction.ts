import { FirstStepDataStateType } from '../../../types/formSteps';
import { ActionType } from '../../../types/global';
import { SET_FIRST_STEP_DATA } from '../../consts';

export const setFirstStepData = function (
  data: FirstStepDataStateType
): ActionType {
  return {
    type: SET_FIRST_STEP_DATA,
    payload: data,
  };
};
