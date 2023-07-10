import { FC, useEffect } from 'react';
import styles from './createPage.module.scss';
import ProgressLine from '../../components/UI/progressLine/ProgressLine';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { formSteps } from '../../data/formSteps';
import { selectFirstStepData } from '../../store/create/firstStep/firstStepSelector';
import { selectSecondStepData } from '../../store/create/secondStep/secondStepSelector';
import { selectThirdStepData } from '../../store/create/thirdStep/thirdStepSelector';
import { useSelector } from 'react-redux';
import { useCheckSteps } from '../../hooks/useCheckSteps';
const CreatePage: FC = () => {
  const activeStep = useCheckSteps();

  return (
    <div className={styles.create}>
      <ProgressLine
        className={styles.line}
        total={formSteps.length}
        active={activeStep}
      />
      {formSteps[activeStep - 1]}
    </div>
  );
};

export default CreatePage;
