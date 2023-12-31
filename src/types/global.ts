import { rootReducer } from '../store/rootReducer';

export type GetAttributes<TElement extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[TElement];

export interface SelectOptionType {
  value: string;
  label: string;
}

export interface SelectOptionsObjectType {
  options: SelectOptionType[];
  placeholder: string;
}

export interface CheckboxValue {
  value: string;
  isChecked: boolean;
}

export interface RadioGroup {
  values: string[];
  checkedValue: string | undefined;
}

export interface SocialLinkType {
  text: string;
  href: string;
}

export interface ActionType {
  payload?: any;
  type: string;
}

export interface RootReducerType extends ReturnType<typeof rootReducer> {}

export interface MultInputValue {
  value: string;
}

export type PopupStatus = 'disabled' | 'active';

export interface DataStateType {
  isFilled: boolean;
}
