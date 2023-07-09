import {
  Control,
  FieldValues,
  UseFormRegister,
  FieldArrayPath,
  FieldArray,
  FieldPath,
} from 'react-hook-form';
import {
  GetAttributes,
  MultInputValue,
  PopupStatus,
  SelectOptionType,
} from './global';
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

export interface InputWithDeleteProps extends InputProps {
  onDelete: () => void;
}

export interface MultInputsProps<TFieldValues extends FieldValues>
  extends InputProps {
  control: Control<TFieldValues, any>;
  register: UseFormRegister<TFieldValues>;
  name: FieldArrayPath<TFieldValues>;
  registerPathGenerator: (index: number) => FieldPath<TFieldValues>;
  onAppendValue:
    | FieldArray<TFieldValues, FieldArrayPath<TFieldValues>>
    | FieldArray<TFieldValues, FieldArrayPath<TFieldValues>>[];
}

export interface CheckboxProps
  extends Omit<GetAttributes<'input'>, 'type' | 'ref'> {}

export interface RadioProps
  extends Omit<GetAttributes<'input'>, 'type' | 'ref'> {}

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

export interface ProgressLineProps extends GetAttributes<'div'> {
  width?: number;
  total: number;
  active: number;
}

export interface ProgressLineDotProps extends GetAttributes<'div'> {
  variant?: 'active' | 'done' | 'inactive';
}

export interface TextareaProps extends Omit<GetAttributes<'textarea'>, 'ref'> {}

export interface PopupProps extends GetAttributes<'div'> {
  status: PopupStatus;
  onClickOut: (...args: any) => any;
}
