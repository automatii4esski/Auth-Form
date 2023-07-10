import { ThirdStepDataStateType } from '../../../types/formSteps';
import { ActionType } from '../../../types/global';
import { SET_THIRD_STEP_DATA } from '../../consts';

const dataFromLocalStorage = localStorage.getItem(SET_THIRD_STEP_DATA);

const initThirdStepData: ThirdStepDataStateType = dataFromLocalStorage
  ? JSON.parse(dataFromLocalStorage)
  : {
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
