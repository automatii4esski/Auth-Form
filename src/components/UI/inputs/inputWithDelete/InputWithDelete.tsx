import { FC, forwardRef } from 'react';
import Input from '../input/Input';
import styles from './inputWithDelete.module.scss';
import { ReactComponent as DeleteIcon } from '../../../../assets/img/icons/delete.svg';
import { InputWithDeleteProps } from '../../../../types/UI';

const InputWithDelete: FC<InputWithDeleteProps> = forwardRef(
  ({ className, onDelete, ...props }, ref) => {
    return (
      <div className={`${styles.wrapper} ${className}`}>
        <Input className={styles.input} ref={ref} {...props} />
        <button onClick={onDelete} className={styles.delete}>
          <DeleteIcon className={styles.icon} />
        </button>
      </div>
    );
  }
);

export default InputWithDelete;
