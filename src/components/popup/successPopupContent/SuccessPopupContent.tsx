import { FC } from 'react';
import styles from './successPopupContent.module.scss';
import SuccessIcon from '../../UI/statusIcon/successIcon/SuccessIcon';
import Button from '../../UI/buttons/button/Button';
import { SuccessPopupProps } from '../../../types/popup';
const SuccessPopupContent: FC<SuccessPopupProps> = ({
  onButtonClick,
  ...props
}) => {
  return (
    <div {...props}>
      <div className={styles.top}>
        <h3 className={styles.title}>Форма успешно отправлена</h3>
      </div>
      <SuccessIcon className={styles.status} />
      <div>
        <Button className={styles.button} onClick={onButtonClick}>
          На главную
        </Button>
      </div>
    </div>
  );
};

export default SuccessPopupContent;
