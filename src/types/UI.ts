import { GetAttributes, SelectOptionType } from './global';
import { Props } from 'react-select';

export interface AvatarProps extends GetAttributes<'div'> {
  src: string;
  alt?: string;
}

export interface SocialLinkProps extends GetAttributes<'a'> {}

export interface InputProps extends GetAttributes<'input'> {}

export interface ButtonProps extends GetAttributes<'button'> {
  variant?: 'hollow' | 'fill';
}

export interface SelectProps extends Props<SelectOptionType> {
  options: SelectOptionType[];
  defaultValue?: SelectOptionType;
}

export interface TipAndErrorWrapperProps extends GetAttributes<'div'> {
  error?: string;
  tip?: string;
}
