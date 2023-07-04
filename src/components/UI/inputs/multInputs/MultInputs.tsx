import React from 'react';
import InputWithDelete from '../inputWithDelete/InputWithDelete';
import Button from '../../buttons/button/Button';
import styles from './multInputs.module.scss';
import { useFieldArray, FieldValues } from 'react-hook-form';
import { MultInputsProps } from '../../../../types/UI';

const MultInputs = <TDataType extends FieldValues>(
  props: MultInputsProps<TDataType>
) => {
  const {
    control,
    register,
    registerPathGenerator,
    onAppendValue,
    name,
    className,
    ...otherProps
  } = props;

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const onDeleteInput = (index: number) => () => remove(index);
  const onAddInput = () => append(onAppendValue);

  return (
    <div className={className}>
      {fields.map((field, index) => (
        <InputWithDelete
          key={field.id}
          {...register(registerPathGenerator(index))}
          onDelete={onDeleteInput(index)}
          {...otherProps}
        />
      ))}
      <Button className={styles.button} onClick={onAddInput} variant="hollow">
        +
      </Button>
    </div>
  );
};

export default MultInputs;
