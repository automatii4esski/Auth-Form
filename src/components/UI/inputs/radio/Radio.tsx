import { FC, forwardRef } from 'react';
import styles from './radio.module.scss';
import { RadioProps } from '../../../../types/UI';

const Radio: FC<RadioProps> = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <label className={`${styles.label} ${className}`}>
        <input className={styles.input} ref={ref} type="radio" {...props} />
        <p>{children}</p>
      </label>
    );
  }
);

export default Radio;
