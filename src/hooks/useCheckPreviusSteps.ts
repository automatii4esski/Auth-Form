import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectFirstStepData } from '../store/create/firstStep/firstStepSelector';
import { selectSecondStepData } from '../store/create/secondStep/secondStepSelector';
import { selectThirdStepData } from '../store/create/thirdStep/thirdStepSelector';
import { DataStateType, RootReducerType } from '../types/global';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { formSteps } from '../data/formSteps';
import { selectAboutData } from '../store/about/aboutSelector';

export const useCheckSteps = function () {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const activeStep = +searchParams.get('step')!;
  useEffect(() => {
    if (activeStep > formSteps.length || activeStep < 1) {
      navigate('/');
    }
  }, []);

  const selectors: ((state: RootReducerType) => DataStateType)[] = [
    selectAboutData,
    // selectFirstStepData,
    // selectSecondStepData,
    selectThirdStepData,
  ];

  const selector = selectors[activeStep - 1];

  const data = useSelector(selector);

  useEffect(() => {
    if (!data.isFilled) {
      navigate(`?step=${activeStep - 1}`);
    }
  }, [activeStep]);

  return activeStep;
};
