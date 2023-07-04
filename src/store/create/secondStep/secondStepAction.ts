import { SecondStepDataStateType } from '../../../types/formSteps';
import { ActionType } from '../../../types/global';
import { SET_SECOND_STEP_DATA } from '../../consts';

export const setSecondStepData = function (
  data: SecondStepDataStateType
): ActionType {
  return {
    type: SET_SECOND_STEP_DATA,
    payload: data,
  };
};
