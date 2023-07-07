import { FC } from 'react';
import styles from './popup.module.scss';
import { PopupProps } from '../../../../types/UI';

const Popup: FC<PopupProps> = ({
  className,
  isVisible,
  children,
  ...props
}) => {
  return (
    <div className={styles.popup} {...props}>
      <div className={`${styles.content} ${className}`}>{children}</div>
    </div>
  );
};

export default Popup;
