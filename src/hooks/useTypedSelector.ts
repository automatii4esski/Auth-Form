import { useSelector } from 'react-redux';

export const useTypedSelector: <T extends (reducer: any) => any>(
  selector: T
) => ReturnType<T> = useSelector;
