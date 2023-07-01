import { useNavigate, useSearchParams } from 'react-router-dom';

export const useQueryFormStep = function () {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const active = +searchParams.get('step')!;

  const onNextStep = function () {
    navigate(`?step=${active + 1}`);
  };

  const onPreviousStep = function () {
    const isLastStep = active === 1;
    isLastStep
      ? navigate({
          pathname: '/',
        })
      : navigate(`?step=${active - 1}`);
  };

  return [onNextStep, onPreviousStep];
};
