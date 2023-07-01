import { FC } from 'react';
import ReactSelect, { GroupBase, Props } from 'react-select';
import styles from './select.module.scss';
import Option from 'react-select/dist/declarations/src/components/Option';

const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  className,
  ...props
}: Props<Option, IsMulti, Group>) => {
  return (
    <ReactSelect
      {...props}
      classNames={{
        control: () => styles.control,
        menu: () => styles.menu,
        option: () => styles.option,
        placeholder: () => styles.placeholder,
      }}
      unstyled
    />
  );
};

export default Select;
