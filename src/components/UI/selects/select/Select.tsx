import { FC } from 'react';
import ReactSelect from 'react-select';
import { SelectProps } from '../../../../types/UI';
import styles from './select.module.scss';

const Select: FC<SelectProps> = ({ className, ...props }) => {
  return (
    <ReactSelect
      className={className}
      classNames={{
        control: () => styles.control,
        menu: () => styles.menu,
        option: () => styles.option,
      }}
      unstyled
      {...props}
    />
  );
};

export default Select;
