import { FC } from 'react';
import styles from './progressLineDot.module.scss';
import { ProgressLineDotProps } from '../../../../types/UI';

const ProgressLineDot: FC<ProgressLineDotProps> = ({
  className,
  variant = 'inactive',
  ...props
}) => {
  console.log(variant);

  return (
    <div className={`${styles.dot} ${styles[variant]} ${className}`} {...props}>
      1
    </div>
  );
};

export default ProgressLineDot;
