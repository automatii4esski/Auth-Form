import { AboutDataStateType } from '../../types/about';
import { ActionType } from '../../types/global';
import { SET_ABOUT_DATA } from '../consts';

const dataFromLocalStorage = localStorage.getItem(SET_ABOUT_DATA);

const initAboutDataValue: AboutDataStateType = dataFromLocalStorage
  ? JSON.parse(dataFromLocalStorage)
  : {
      email: 'automatii4esski@gmail.com',
      phone: '+7 (932) 307-43-20',
      isFilled: true,
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
