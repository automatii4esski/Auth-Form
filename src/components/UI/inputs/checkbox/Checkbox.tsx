import { FC, forwardRef } from 'react';
import styles from './checkbox.module.scss';
import { CheckboxProps } from '../../../../types/UI';

const Checkbox: FC<CheckboxProps> = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <label className={`${styles.label} ${className}`}>
        <input className={styles.input} ref={ref} type="checkbox" {...props} />
        <p>{children}</p>
      </label>
    );
  }
);

export default Checkbox;
