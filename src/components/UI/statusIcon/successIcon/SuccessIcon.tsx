import { FC } from 'react';
import styles from './successIcon.module.scss';
import { GetAttributes } from '../../../../types/global';

const SuccessIcon: FC<GetAttributes<'div'>> = ({ className, ...props }) => {
  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      <div className={styles.icon}></div>
    </div>
  );
};

export default SuccessIcon;
