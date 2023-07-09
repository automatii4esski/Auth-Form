import { FC } from 'react';
import styles from './progressLineDot.module.scss';
import { ProgressLineDotProps } from '../../../../types/UI';

const ProgressLineDot: FC<ProgressLineDotProps> = ({
  className,
  children,
  variant = 'inactive',
  ...props
}) => {
  return (
    <div className={`${styles.dot} ${styles[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default ProgressLineDot;
