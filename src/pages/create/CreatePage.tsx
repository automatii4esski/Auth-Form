import { FC, useEffect } from 'react';
import styles from './createPage.module.scss';
import ProgressLine from '../../components/UI/progressLine/ProgressLine';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { formSteps } from '../../data/formSteps';
const CreatePage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const active = +queryString.parse(location.search).step!;
  useEffect(() => {
    if (active > formSteps.length || active < 1) {
      navigate('/');
    }
  }, []);

  return (
    <div className={styles.create}>
      <ProgressLine
        className={styles.line}
        total={formSteps.length}
        active={active}
      />
      {formSteps[active - 1]}
    </div>
  );
};

export default CreatePage;
