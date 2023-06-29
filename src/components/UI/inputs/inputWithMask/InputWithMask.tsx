import { forwardRef } from 'react';
import InputMask from 'react-input-mask';
import Input from '../input/Input';
import { InputWithMaskProps } from '../../../../types/UI';

const InputWithMask = forwardRef<any, InputWithMaskProps>(
  (
    {
      className,
      mask,
      maskChar,
      alwaysShowMask,
      maskPlaceholder,
      onChange,
      onPaste,
      onMouseDown,
      onFocus,
      onBlur,
      value,
      disabled,
      readOnly,
      ...props
    },
    ref
  ) => {
    return (
      <InputMask
        className={className}
        mask={mask}
        maskChar={maskChar}
        alwaysShowMask={alwaysShowMask}
        maskPlaceholder={maskPlaceholder}
        onChange={onChange}
        onPaste={onPaste}
        onMouseDown={onMouseDown}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
      >
        {(() => <Input {...props} type="tel" ref={ref} />) as any}
      </InputMask>
    );
  }
);

export default InputWithMask;
