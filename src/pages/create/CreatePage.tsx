import { FC } from 'react';
import styles from './createPage.module.scss';
import ProgressLine from '../../components/UI/progressLine/ProgressLine';
import FirstStepForm from '../../components/create/formSteps/firstStepForm/FirstStepForm';
import SecondStepForm from '../../components/create/formSteps/secondStepForm/SecondStepForm';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import ThirdStepForm from '../../components/create/formSteps/thirdStepForm/ThirdStepForm';

const CreatePage: FC = () => {
  const location = useLocation();
  const active = +queryString.parse(location.search).step! - 1;

  const formSteps = [<FirstStepForm />, <SecondStepForm />, <ThirdStepForm />];
  return (
    <div className={styles.create}>
      <ProgressLine
        className={styles.line}
        total={formSteps.length}
        active={active + 1}
      />
      {formSteps[active]}
    </div>
  );
};

export default CreatePage;
