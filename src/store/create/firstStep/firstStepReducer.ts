import { FirstStepDataStateType } from '../../../types/formSteps';
import { ActionType } from '../../../types/global';
import { SET_FIRST_STEP_DATA } from '../../consts';

const dataFromLocalStorage = localStorage.getItem(SET_FIRST_STEP_DATA);

const initFirstStepData: FirstStepDataStateType = dataFromLocalStorage
  ? JSON.parse(dataFromLocalStorage)
  : {
      name: '',
      nickname: '',
      sername: '',
      sex: '',
      isFilled: false,
    };

export const firstStepReducer = function (
  state: FirstStepDataStateType = initFirstStepData,
  action: ActionType
) {
  switch (action.type) {
    case SET_FIRST_STEP_DATA:
      return action.payload;

    default:
      return state;
  }
};
