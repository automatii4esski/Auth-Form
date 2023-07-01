import { ActionType } from '../../../types/global';
import { SET_NEXT_ACTIVE_STEP, SET_PREVIOUS_ACTIVE_STEP } from '../../consts';

export const setActiveStepToNext = function (): ActionType {
  return {
    type: SET_NEXT_ACTIVE_STEP,
  };
};

export const setActiveStepToPrevious = function (): ActionType {
  return {
    type: SET_PREVIOUS_ACTIVE_STEP,
  };
};
