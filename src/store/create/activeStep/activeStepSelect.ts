import { RootReducerType } from '../../../types/global';

export const selectActiveStep = function (state: RootReducerType): number {
  return state.activeStep;
};
