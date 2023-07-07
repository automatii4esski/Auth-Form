import { FC } from 'react';
import styles from './closeButton.module.scss';
import { GetAttributes } from '../../../../types/global';
import { ReactComponent as CrossIcon } from '../../../../assets/img/icons/cross.svg';

const CloseButton: FC<GetAttributes<'button'>> = ({ className, ...props }) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      <CrossIcon className={styles.icon} />
    </button>
  );
};

export default CloseButton;
