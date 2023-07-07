import { FC } from 'react';
import styles from './failIcon.module.scss';
import { GetAttributes } from '../../../../types/global';

const FailIcon: FC<GetAttributes<'div'>> = ({ className, ...props }) => {
  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      <div className={styles.icon}></div>
    </div>
  );
};

export default FailIcon;
