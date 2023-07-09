import { FC, MouseEvent } from 'react';
import styles from './popup.module.scss';
import { PopupProps } from '../../../../types/UI';

const Popup: FC<PopupProps> = ({
  className,
  status,
  children,
  onClickOut,
  ...props
}) => {
  const onContentClick = function (e: MouseEvent) {
    e.stopPropagation();
  };

  return (
    <div
      className={`${styles.popup} ${styles[status]}`}
      onClick={onClickOut}
      {...props}
    >
      <div
        className={`${styles.content} ${className}`}
        onClick={onContentClick}
      >
        {children}
      </div>
    </div>
  );
};

export default Popup;
