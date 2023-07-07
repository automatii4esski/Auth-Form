import { FC, forwardRef } from 'react';
import styles from './textarea.module.scss';
import { TextareaProps } from '../../../../types/UI';
const Textarea = forwardRef<any, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={`${styles.textarea} ${className}`}
        ref={ref}
        {...props}
      ></textarea>
    );
  }
);

export default Textarea;
