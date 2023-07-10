import { useNavigate, useSearchParams } from 'react-router-dom';

export const useQueryFormStep = function (): [() => void, () => void, number] {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const activeStep = +searchParams.get('step')!;

  const onNextStep = function () {
    navigate(`?step=${activeStep + 1}`);
  };

  const onPreviousStep = function () {
    const isLastStep = activeStep === 1;
    isLastStep
      ? navigate({
          pathname: '/',
        })
      : navigate(`?step=${activeStep - 1}`);
  };

  return [onNextStep, onPreviousStep, activeStep];
};
