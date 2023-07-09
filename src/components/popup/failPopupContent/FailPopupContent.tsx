import { FC } from 'react';
import styles from './failPopupContent.module.scss';
import FailIcon from '../../UI/statusIcon/failIcon/FailIcon';
import Button from '../../UI/buttons/button/Button';
import CloseButton from '../../UI/buttons/closeButton/CloseButton';
import { FailPopupProps } from '../../../types/popup';

const FailPopupContent: FC<FailPopupProps> = ({
  onCloseButtonClick,
  onButtonClick,
  ...props
}) => {
  return (
    <div {...props}>
      <div className={styles.top}>
        <h3 className={styles.title}>Ошибка</h3>
        <CloseButton onClick={onCloseButtonClick} />
      </div>
      <FailIcon className={styles.status} />
      <div className={styles.buttons}>
        <Button onClick={onButtonClick}> Закрыть</Button>
      </div>
    </div>
  );
};

export default FailPopupContent;
