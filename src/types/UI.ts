import { FieldValues, UseFormRegister } from 'react-hook-form';
import { GetAttributes, MultInputValue, SelectOptionType } from './global';
import { Props as ReactSelectProps } from 'react-select';
import { Props as ReactInputProps } from 'react-input-mask';

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

export interface SelectProps extends ReactSelectProps<SelectOptionType> {
  options: SelectOptionType[];
  defaultValue?: SelectOptionType;
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
