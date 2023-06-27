import Input from '../components/UI/inputs/input/Input';
import Select from '../components/UI/selects/select/Select';
import { InputProps, SelectProps } from './UI';

export interface FormElementSettings {
  title: string;
  tip?: string;
  element: {
    name: string;
  } & FormElementPropsSetting;
}

export type FormElementPropsSetting =
  | {
      type: 'input';
      component: React.ComponentType<InputProps>;
      props: InputProps;
    }
  | {
      type: 'select';
      component: React.ComponentType<SelectProps>;
      props: SelectProps;
    };
