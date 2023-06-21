import { FC } from 'react';
import { InputProps } from '../../../../types/UI';
import styles from './input.module.scss';

const Input: FC<InputProps> = ({ className, ...props }) => {
  return <input className={`${styles.input} ${className}`} {...props} />;
};

export default Input;
