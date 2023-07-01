import { FieldValues, UseFormRegister } from 'react-hook-form';
import { GetAttributes, MultInputValue, SelectOptionType } from './global';
import { RefAttributes } from 'react';
import { Props as ReactSelectProps, SingleValue } from 'react-select';
import { Props as ReactInputProps } from 'react-input-mask';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';

export interface AvatarProps extends GetAttributes<'div'> {
  src: string;
  alt?: string;
}

export interface SocialLinkProps extends GetAttributes<'a'> {}

export interface InputProps extends Omit<GetAttributes<'input'>, 'ref'> {}

export interface InputWithMaskProps extends ReactInputProps {
  mask: string;
  maskChar?: string;
}

export type Char<T extends '' = ''> = `${string}${''}${T}`;

export interface ButtonProps extends GetAttributes<'button'> {
  variant?: 'hollow' | 'fill';
}

export interface TipAndErrorWrapperProps extends GetAttributes<'div'> {
  error?: string;
  tip?: string;
}

export interface FormElementWrapperProps extends TipAndErrorWrapperProps {
  title: string;
}

export interface MultInputProps extends GetAttributes<'div'> {
  name: string;
  register: UseFormRegister<FieldValues>;
  value: MultInputValue[];
}

export interface ProgressLineProps extends GetAttributes<'div'> {
  width?: number;
  total: number;
  active: number;
}
export interface ProgressLineDotProps extends GetAttributes<'div'> {
  variant?: 'active' | 'done' | 'inactive';
}
