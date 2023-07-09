import { useState } from 'react';

export const useFetch = function <T extends any[]>(
  asyncFunc: (...args: T) => any
): [() => void, boolean, unknown | Error] {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown | Error>();

  const fetchFunc = async function (...args: T) {
    try {
      setIsLoading(true);
      await asyncFunc(...args);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return [fetchFunc, isLoading, error];
};
