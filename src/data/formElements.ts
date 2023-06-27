import Input from '../components/UI/inputs/input/Input';
import Select from '../components/UI/selects/select/Select';
import { FormElementSettings } from '../types/form';

export const aboutFormElementsSettings: FormElementSettings[] = [
  {
    title: 'Номер телефона',
    element: {
      type: 'input',
      name: 'phone',
      component: Input,
      props: {
        placeholder: 'Телефон',
      },
    },
  },
  {
    title: 'Email',
    element: {
      type: 'input',
      name: 'email',
      component: Input,
      props: {
        placeholder: 'Email',
      },
    },
  },
];
