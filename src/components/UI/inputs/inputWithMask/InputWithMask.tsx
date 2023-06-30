import { forwardRef } from 'react';
import InputMask from 'react-input-mask';
import { InputWithMaskProps } from '../../../../types/UI';
import styles from '../input/input.module.scss';

const InputWithMask = forwardRef<any, InputWithMaskProps>(
  ({ className, ...props }, ref) => {
    return (
      <InputMask
        className={`${styles.input} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

export default InputWithMask;
