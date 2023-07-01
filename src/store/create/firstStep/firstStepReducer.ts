import { FirstStepDataType } from '../../../types/formSteps';
import { ActionType } from '../../../types/global';
import { SET_FIRST_STEP_DATA } from '../../consts';

const initFirstStepData: FirstStepDataType = {
  name: '',
  nickname: '',
  sername: '',
  sex: '',
};

export const firstStepReducer = function (
  state: FirstStepDataType = initFirstStepData,
  action: ActionType
) {
  switch (action.type) {
    case SET_FIRST_STEP_DATA:
      return action.payload;

    default:
      return state;
  }
};
