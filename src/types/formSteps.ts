import { CheckboxValue, DataStateType, RadioGroup } from './global';

export interface FirstStepDataType {
  name: string;
  nickname: string;
  sername: string;
  sex: string;
}

export interface FirstStepDataStateType
  extends FirstStepDataType,
    DataStateType {}

export interface SecondStepDataType {
  advantages: {
    value: string;
  }[];
  checkboxes: CheckboxValue[];
  radio: string;
}

export interface SecondStepDataStateType
  extends Omit<SecondStepDataType, 'advantages' | 'radio'>,
    DataStateType {
  advantages: string[];
  radio: RadioGroup;
}

export interface ThirdStepDataType {
  about: string;
}

export interface ThirdStepDataStateType
  extends ThirdStepDataType,
    DataStateType {}

export type FormDataStateType = [
  FirstStepDataStateType,
  SecondStepDataStateType,
  ThirdStepDataStateType
];
