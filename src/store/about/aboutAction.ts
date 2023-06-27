import { AboutDataStateType } from '../../types/about';
import { ActionType } from '../../types/global';
import { SET_ABOUT_DATA } from '../consts';

export const setAboutData = function (data: AboutDataStateType): ActionType {
  return {
    type: SET_ABOUT_DATA,
    payload: data,
  };
};
