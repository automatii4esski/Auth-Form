import { RootReducerType } from '../../types/global';

export const selectAboutData = function (state: RootReducerType) {
  return state.aboutData;
};
