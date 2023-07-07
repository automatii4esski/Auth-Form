import { FC } from 'react';
import styles from './failPopupContent.module.scss';
import FailIcon from '../../UI/statusIcon/failIcon/FailIcon';
import Button from '../../UI/buttons/button/Button';

const FailPopupContent: FC = () => {
  return (
    <div>
      <div className={styles.top}>
        <h3 className={styles.title}>Ошибка</h3>
        <button type="button" className={styles.close}></button>
      </div>
      <FailIcon className={styles.status} />
      <div className={styles.buttons}>
        <Button> Закрыть</Button>
      </div>
    </div>
  );
};

export default FailPopupContent;
