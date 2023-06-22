import { FC } from 'react';
import TipAndErrorWrapper from '../tipAndErrorWrapper/TipAndErrorWrapper';
import styles from './formElementWrapper.module.scss';
import { FormElementWrapperProps } from '../../../../types/UI';

const FormElementWrapper: FC<FormElementWrapperProps> = ({
  className,
  children,
  tip,
  error,
  title,
  ...props
}) => {
  return (
    <div className={`${styles.wrapper} ${className}`} {...props}>
      <h3 className={styles.title}>{title}</h3>
      <TipAndErrorWrapper tip={tip} error={error}>
        {children}
      </TipAndErrorWrapper>
    </div>
  );
};

export default FormElementWrapper;
