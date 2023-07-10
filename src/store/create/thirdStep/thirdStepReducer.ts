import { ThirdStepDataStateType } from '../../../types/formSteps';
import { ActionType } from '../../../types/global';
import { SET_THIRD_STEP_DATA } from '../../consts';

const initThirdStepData: ThirdStepDataStateType = {
  about: '',
  isFilled: false,
};

export const thirdStepReducer = function (
  state: ThirdStepDataStateType = initThirdStepData,
  action: ActionType
) {
  switch (action.type) {
    case SET_THIRD_STEP_DATA:
      return action.payload;

    default:
      return state;
  }
};
