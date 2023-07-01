import { ActionType } from '../../../types/global';
import { SET_NEXT_ACTIVE_STEP, SET_PREVIOUS_ACTIVE_STEP } from '../../consts';

const initActiveStep = 1;

export const activeStepReducer = function (
  state: number = initActiveStep,
  action: ActionType
) {
  switch (action.type) {
    case SET_NEXT_ACTIVE_STEP:
      return state + 1;
    case SET_PREVIOUS_ACTIVE_STEP:
      return state - 1;

    default:
      return state;
  }
};
