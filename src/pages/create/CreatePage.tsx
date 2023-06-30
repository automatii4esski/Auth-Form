import { FC } from 'react';
import styles from './createPage.module.scss';
import ProgressLine from '../../components/UI/progressLine/ProgressLine';

const CreatePage: FC = () => {
  return (
    <div className={styles.create}>
      <ProgressLine total={3} active={1} />
    </div>
  );
};

export default CreatePage;
