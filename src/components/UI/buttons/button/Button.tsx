import { FC } from 'react';
import { ButtonProps } from '../../../../types/UI';
import styles from './button.module.scss';

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = 'fill',
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
