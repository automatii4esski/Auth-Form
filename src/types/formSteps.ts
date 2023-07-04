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
  checkboxes: number[];
  radio: number | undefined;
}

export interface SecondStepDataStateType
  extends Omit<SecondStepDataType, 'advantages'> {
  advantages: string[];
}
