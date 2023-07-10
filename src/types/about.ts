import { DataStateType } from './global';

export interface AboutDataType {
  phone: string;
  email: string;
}

export interface AboutDataStateType extends AboutDataType, DataStateType {}
