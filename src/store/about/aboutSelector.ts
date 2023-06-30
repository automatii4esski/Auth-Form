import { AboutDataStateType } from '../../types/about';
import { RootReducerType } from '../../types/global';

export const selectAboutData = function (
  state: RootReducerType
): AboutDataStateType {
  return state.aboutData;
};
