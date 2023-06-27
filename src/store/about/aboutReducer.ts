import { AboutDataStateType } from '../../types/about';
import { ActionType } from '../../types/global';
import { SET_ABOUT_DATA } from '../consts';

const initAboutDataValue: AboutDataStateType = {
  email: '',
  phone: '',
};

export const aboutReducer = function (
  state: AboutDataStateType = initAboutDataValue,
  action: ActionType
) {
  switch (action.type) {
    case SET_ABOUT_DATA:
      return action.payload;

    default:
      return state;
  }
};
