import { CheckboxValue, RadioGroup } from './global';

export interface FirstStepDataType {
  name: string;
  nickname: string;
  sername: string;
  sex: string;
}

export interface FirstStepDataStateType extends FirstStepDataType {}

export interface SecondStepDataType {
  advantages: {
    value: string;
  }[];
  checkboxes: CheckboxValue[];
  radio: string;
}

export interface SecondStepDataStateType
  extends Omit<SecondStepDataType, 'advantages' | 'radio'> {
  advantages: string[];
  radio: RadioGroup;
}
