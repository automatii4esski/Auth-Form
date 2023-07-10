import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectFirstStepData } from '../store/create/firstStep/firstStepSelector';
import { selectSecondStepData } from '../store/create/secondStep/secondStepSelector';
import { selectThirdStepData } from '../store/create/thirdStep/thirdStepSelector';
import { DataStateType, RootReducerType } from '../types/global';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { formSteps } from '../data/formSteps';
import { selectAboutData } from '../store/about/aboutSelector';

const plugDataState = {
  isFilled: false,
};

const plugSelector = function (_: RootReducerType): DataStateType {
  return plugDataState;
};

export const useCheckSteps = function () {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeStep = +searchParams.get('step')!;

  const isStepOutOfRange = activeStep > formSteps.length || activeStep < 1;

  const selectors: ((state: RootReducerType) => DataStateType)[] = [
    selectAboutData,
    selectFirstStepData,
    selectSecondStepData,
    selectThirdStepData,
  ];

  const selector = isStepOutOfRange ? plugSelector : selectors[activeStep - 1];

  const data = useSelector(selector);

  useEffect(() => {
    if (isStepOutOfRange) setSearchParams(`step=${formSteps.length}`);
    else if (!data.isFilled) setSearchParams(`step=${activeStep - 1}`);
  }, [activeStep]);

  return activeStep;
};
