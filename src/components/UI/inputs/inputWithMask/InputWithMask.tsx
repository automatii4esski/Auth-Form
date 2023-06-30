import { forwardRef } from 'react';
import InputMask from 'react-input-mask';
import Input from '../input/Input';
import { InputWithMaskProps } from '../../../../types/UI';

const InputWithMask = forwardRef<any, InputWithMaskProps>(
  ({ ...props }, ref) => {
    return (
      <InputMask {...props}>
        {
          ((otherProps: any) => (
            <Input {...otherProps} type="tel" ref={ref} />
          )) as any
        }
      </InputMask>
    );
  }
);

export default InputWithMask;
