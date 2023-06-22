import { FC } from 'react';
import { TipAndErrorWrapperProps } from '../../../../types/UI';
import styles from './tipAndErrorWrapper.module.scss';

const TipAndErrorWrapper: FC<TipAndErrorWrapperProps> = ({
  className,
  children,
  tip,
  error,
  ...props
}) => {
  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      <p className={styles.error}>{error}</p>
      {children}
      <p className={styles.tip}>{tip}</p>
    </div>
  );
};

export default TipAndErrorWrapper;
