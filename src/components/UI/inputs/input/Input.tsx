import { FC, forwardRef } from 'react';
import { InputProps } from '../../../../types/UI';
import styles from './input.module.scss';

const Input = forwardRef<any, InputProps>(({ className, ...props }, ref) => {
  return (
    <input className={`${styles.input} ${className}`} {...props} ref={ref} />
  );
});

export default Input;
