import {
  FormDataStateType,
  SecondStepDataStateType,
} from '../../../types/formSteps';
import { ActionType } from '../../../types/global';
import { SET_SECOND_STEP_DATA } from '../../consts';

// const initData: FormDataStateType = [
//   {
//     name: '',
//     nickname: '',
//     sername: '',
//     sex: '',
//   },
//   {
//     advantages: ['', '', ''],
//     checkboxes: [
//       { value: '1', isChecked: false },
//       { value: '2', isChecked: false },
//       { value: '3', isChecked: false },
//     ],
//     radio: {
//       values: ['1', '2', '3'],
//       checkedValue: undefined,
//     },
//   },
//   {
//     about: '',
//   },
// ];

// export const formDataReducer = function (
//   state: FormDataStateType = initData,
//   action: ActionType
// ) {
//   switch (action.type) {
//     case SET_SECOND_STEP_DATA:
//       return action.payload;

//     default:
//       return state;
//   }
// };
