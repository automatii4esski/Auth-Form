import queryString from 'query-string';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useFormStepQuery = function () {
  const onNextStep = useRef<string>('');
  const onPreviousStep = useRef<string>('');
  const location = useLocation();

  useEffect(() => {
    const active = +queryString.parse(location.search).step!;
    console.log(1);

    onNextStep.current = `?step=${active + 1}`;

    const isLastStep = active - 1 === 0;
    onPreviousStep.current = isLastStep ? '/' : `?step=${active - 1}`;
  }, [location]);

  return [onNextStep.current, onPreviousStep.current];
};
