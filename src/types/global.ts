import { rootReducer } from '../store/rootReducer';

export type GetAttributes<TElement extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[TElement];

export interface SelectOptionType {
  value: string;
  label: string;
}

export interface SelectOptionsObjectType {
  options: SelectOptionType[];
  defaultValue: SelectOptionType;
}

export interface SocialLinkType {
  text: string;
  href: string;
}

export interface ActionType {
  payload: any;
  type: string;
}

export interface RootReducerType extends ReturnType<typeof rootReducer> {}
